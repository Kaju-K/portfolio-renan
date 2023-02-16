import "./Field.css"

function Field( {type, requiredField, placeholder, label, value, onChange} ) {
    if (requiredField) {
        label += " *"
    }

    return (
        <div className="contact-field">
            <label htmlFor={label}>{label}</label>
            <input 
                id={label}
                type={type}
                placeholder={placeholder}
                required={requiredField}
                value={value}
                onChange={ event => onChange(event.target.value) }
            />
        </div>
    )
}

export default Field