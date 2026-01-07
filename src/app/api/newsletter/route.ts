
// import { NextResponse } from 'next/server';
// import { supabase } from '../../../utils/supabase/client';

// export async function POST(request: Request) {
//     try {
//         const body = await request.json();
//         const recaptchaToken = request.headers.get('x-recaptcha-token');

//         if (!recaptchaToken) {
//             return NextResponse.json({ message: 'Missing recaptcha token', type: 'error' }, { status: 400 });
//         }

//         const { data, error } = await supabase.functions.invoke('submit-form', {
//             body,
//             headers: {
//                 'x-recaptcha-token': recaptchaToken,
//             },
//         });

//         if (error) {
//             console.error('Supabase function error object:', JSON.stringify(error, null, 2));

//             let errorMessage = 'Failed to submit form';
//             let status = 500;
//             let errorDetails = error;

//             if (error && typeof error === 'object' && 'context' in error) {
//                 try {
//                     const context = (error as any).context;
//                     if (context instanceof Response) {
//                         const errorText = await context.text();
//                         console.error('Edge Function Error Body:', errorText);
//                         try {
//                             const errorJson = JSON.parse(errorText);
//                             return NextResponse.json(errorJson, { status: context.status });
//                         } catch {
//                             errorMessage = errorText;
//                             status = context.status;
//                         }
//                     }
//                 } catch (e) {
//                     console.error('Error parsing response context:', e);
//                 }
//             }

//             return NextResponse.json({ message: errorMessage, error: errorDetails }, { status: status });
//         }

//         return NextResponse.json(data);
//     } catch (error) {
//         console.error('API Route error:', error);
//         return NextResponse.json(
//             { message: 'Internal Server Error' },
//             { status: 500 }
//         );
//     }
// }
