"use client";

import {type RefObject, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState} from "react";
import FormContext from "./FormContext";

export interface InputFieldRef {
    getValue: () => string;
    getName: () => string;
    validate: () => boolean;
    setExternalError: (msg: string) => void;
    reset: () => void;
}

export type FieldValidation = {
    rule: (value: string) => boolean;
    message: string;
};

type InputFieldProps = {
    label: string;
    type: "input" | "message" | "email"
    // | "radio" | "dropdown"
    name: string;
    required?: boolean
    placeholder?: string
    customValidation?: FieldValidation[]
    maxLength?: number
    ref?: RefObject<InputFieldRef | null>;

};

function InputField(props: InputFieldProps) {
    // States
    const [value, setValue] = useState("");
    const [error, setError] = useState<string>("")
    // const valueRef = useRef(value); //Using a ref for the value because we need to update it from the parent
    // valueRef.current = value;
    const {
        label,
        name,
        type,
        required = false,
        placeholder, // Kept to silence unused error if intended for future use, or remove entirely
        customValidation = [],
        maxLength = 100, // Kept to silence unused error
        ref
    } = props;

    const valueRef = useRef(value);
    useEffect(() => {
        valueRef.current = value;
    }, [value]);
    const runValidation = useCallback((): boolean => {
        const currentValue = valueRef.current; // Use the ref here
        if (required && !currentValue.trim()) {
            setError(`${label} is required`);
            return false;
        }
        for (const v of customValidation) {
            if (!v.rule(currentValue)) {
                setError(v.message);
                return false;
            }
        }
        setError("");
        return true;
    }, [required, customValidation, label]);


    // Expose methods via the ref prop
    useImperativeHandle(ref, () => ({
        getValue: () => valueRef.current,
        getName: () => name,
        validate: () => runValidation(),
        setExternalError: (msg: string) => setError(msg),
        reset: () => {
            setValue("");
            setError("");
        }
    }), [name, runValidation]);    //

    const formContext = useContext(FormContext);

    useEffect(() => {
        if (!formContext) return;

        const currentApi: InputFieldRef = {
            getValue: () => valueRef.current,
            getName: () => name,
            validate: () => runValidation(),
            setExternalError: (msg: string) => setError(msg),
            reset: () => {
                setValue("");
                setError("");
            }
        };

        formContext.registerField(name, currentApi);
        return () => formContext.unregisterField(name);
    }, [name, formContext, runValidation]);


    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => runValidation()}
                placeholder={placeholder}
                maxLength={maxLength}
                className={`p-2 border rounded-md focus:ring-2 outline-none transition-all ${error ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
                }`}
            />
            <button onClick={() => console.log(ref?.current?.getValue())}/>
            <div className="min-h-[1.25rem] mt-1">
                {error && (
                    <p className="text-xs text-red-500 font-medium animate-in fade-in slide-in-from-top-1">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
}

export default InputField;