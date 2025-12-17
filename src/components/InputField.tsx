type InputFieldProps = {
    label: string;
    type: string;
    name: string;
};

function InputField(    {label, type, name}: InputFieldProps) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} name={name} />
        </div>
    );
}

export default InputField;