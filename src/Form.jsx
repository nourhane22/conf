import './Form.css'
import background from './assets/background-mobile.png'
import patterntop from './assets/pattern-squiggly-line-top.svg'
import patternbuttom from './assets/pattern-squiggly-line-bottom-mobile-tablet.svg'
import overlay from './assets/pattern-lines.svg'
import logo from './assets/logo-mark.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Form() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        github: ''
    })

    const handleInputChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))

        // Clear error when user starts typing
        if (errors[id] && value.trim()) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }))
        }
    }

    const handleGenerateTicket = (e) => {
        e.preventDefault()
        
        const newErrors = {}
        
        // Validate each field
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        }
        if (!formData.github.trim()) {
            newErrors.github = 'GitHub username is required'
        }
        
        // If there are errors, update state and don't navigate
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        
        // If no errors, navigate to ticket page with form data
        navigate('/ticket', { 
            state: { 
                name: formData.name,
                email: formData.email,
                github: formData.github
            } 
        })
    }

    return (
        <>
            <div className="background-stack">
                <img src={background} alt="" className='bg' />
                <img src={overlay} alt="" className='overlay' />
                <img src={patterntop} alt="" className='topimg' />
                <img src={patternbuttom} alt="" className='bottomimg'/>

                <div className="form-container">
                    <div className="form-header">
                        <img src={logo} alt="" className='logo' />
                        <h1>Coding conf</h1>
                    </div>

                    <div className="text-header">
                        <h2>Your Journey to Coding Conf 2025 Starts Here!</h2>
                        <p>Secure your spot at next year's biggest coding conference.</p>
                    </div>

                    <form className='form' onSubmit={handleGenerateTicket}>
                        <div className="input-group">
                            <label htmlFor="name" className='title'>Full Name</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className={errors.name ? "error" : ""}
                                />
                                {errors.name && (
                                    <div className="error-tooltip">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email" className='title'>Email Address</label>
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className={errors.email ? "error" : ""}
                                />
                                {errors.email && (
                                    <div className="error-tooltip">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="github" className='title'>GitHub Username</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    id="github"
                                    value={formData.github}
                                    onChange={handleInputChange}
                                    placeholder="Enter your GitHub username"
                                    className={errors.github ? "error" : ""}
                                />
                                {errors.github && (
                                    <div className="error-tooltip">
                                        {errors.github}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <button type="submit" className='submit-btn'>
                            Generate My Ticket
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}