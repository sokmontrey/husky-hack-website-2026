import { FormData, FormValidationResult } from './model.ts'
import validateFormData from './validateForm.ts'
import { createClient } from '@supabase/supabase-js'
import { Database } from './databaseTypes.ts'
import { createResponse } from './util.ts'

const PG_DUPLICATE_KEY_VIOLATION = '23505'

const errorsWereSet = (body: FormValidationResult): boolean =>
  Object.values(body.error).some((errors) => errors.length > 0) // after

Deno.serve(async (req: Request) => {
  let raw: FormData | null

  try {
    raw = await req.json()
  } catch (e) {
    const body: FormValidationResult = {
      message: '',
      data: {},
      error: { email: [] },
    }
    let statusCode: number | null
    if (e instanceof SyntaxError) {
      statusCode = 400
      body.message = `Malformed json: ${e.message}`
    } else if (e instanceof TypeError) {
      body.message = `Invalid request: ${e.message}`
      statusCode = 500
    }
    return createResponse(body, statusCode!)
  }

  const form: FormData = {
    email: raw!.email.trim().toLowerCase(),
  }

  const body = validateFormData(form)

  if (errorsWereSet(body)) return createResponse(body, 400)

  const supabase = createClient<Database>(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SB_SUBMISSION_SECRET')!,
  )

  const { error } = await supabase.from('users').insert({
    email: form.email,
  })

  if (error?.code === PG_DUPLICATE_KEY_VIOLATION) { // email is already registered
    console.log(error)
    body.error.email.push('This email is already registered')
    body.message = 'Please check the fields and try again'
    return createResponse(body, 403)
  } else if (error !== null) {
    console.log(error)
    body.message = 'Something went wrong. Unable to fulfill request'
    return createResponse(body, 500)
  }

  body.message = 'Thank you for signing up! We will notify you of any updates!'
  return createResponse(body, 200)
})
