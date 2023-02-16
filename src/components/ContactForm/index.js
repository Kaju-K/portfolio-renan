import { useState } from "react"
import Field from "../Field"
import MessageField from "../MessageField"
import SubmitButton from "../SubmitButton"
import "./ContactForm.css"

function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function submitForm(event) {
        event.preventDefault()
        console.log(name, email, message)
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <section className="contact">
            <form className="contact-form" onSubmit={submitForm}>
                <h2 className="contact-form-title">Contact Me</h2>
                
                <Field 
                    type="text"
                    requiredField={true}
                    label="Full Name"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={ value => setName(value)}
                />
                <Field
                    type="email"
                    requiredField={true}
                    label="Email Address"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={ value => setEmail(value)}
                />
                <MessageField
                    type="text"
                    requiredField={false}
                    label="Your Message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={ value => setMessage(value)}
                />
                <SubmitButton />
            </form>
        </section>
    )
}

export default ContactForm