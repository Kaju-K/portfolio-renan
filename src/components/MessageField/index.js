import "./MessageField.css"

function MessageField( {type, requiredField, placeholder, label, value, onChange} ) {
    if (requiredField) {
        label += " *"
    }

    return (
        <div className="contact-field">
            <label htmlFor={label}>{label}</label>
            <textarea
                id={label}
                type={type}
                placeholder={placeholder}
                required={requiredField}
                rows="3"
                value={value}
                onChange={ event => onChange(event.target.value) }
            />
        </div>
    )
}

export default MessageField