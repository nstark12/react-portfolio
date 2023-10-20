import { useState, useEffect } from 'react'
import Form from './Form.jsx'

const Contact = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // reset inputs
        setFormState({
            name: '',
            email: '',
            message: ''
        })
    }
    return (
        <>
            <div className="container contact my-5">
                <h1>Contact Me</h1>
                <Form 
                    formState={formState}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />
                
            </div>
        </>
    )
}

export default Contact