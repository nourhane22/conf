import { useLocation } from 'react-router-dom'
import background from './assets/background-mobile.png'
import patterntop from './assets/pattern-squiggly-line-top.svg'
import patternbuttom from './assets/pattern-squiggly-line-bottom-mobile-tablet.svg'
import overlay from './assets/pattern-lines.svg'
import logo from './assets/logo-mark.svg'
import './Ticket.css'

export default function Ticket() {
    const location = useLocation()
    const { name, email } = location.state || {}
     

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

                    <div className="ticket-box">
                        <h2>Congrats <span className="name-color">{name}</span>! Your ticket is ready</h2>
                        <p>We've emailed your tocket to <span className="name-color">{email}</span> and will send updates in the run up to the event </p>
            
                    </div>
                </div>
            </div>

        </>
    )

}

