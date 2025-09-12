import { useLocation } from 'react-router-dom'
import background from './assets/background-mobile.png'
import patterntop from './assets/pattern-squiggly-line-top.svg'
import patternbuttom from './assets/pattern-squiggly-line-bottom-mobile-tablet.svg'
import overlay from './assets/pattern-lines.svg'
import githubIcon from './assets/icon-github.svg'
import logo from './assets/logo-mark.svg'
import { useState, useEffect } from 'react'
import './Ticket.css'

export default function Ticket() {
    const location = useLocation()
    const { name, email, github } = location.state || {}
      const [ticketNumber, setTicketNumber] = useState("")

  useEffect(() => {
    // generate random number between 10000 and 99999
    const randomNum = Math.floor(10000 + Math.random() * 90000)
    setTicketNumber(`#${randomNum}`)
  }, [])

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
                        
                        <div className="ticket">
                          <div className="ticket-header">
                        <img src={logo} alt="" className='logo' />
                        <h1>Coding conf</h1>
                    </div>
                            <div className="ticket-info">
                                <div className="info-row">
                                    <span className="label"></span>
                                    <span className="value">{name || 'N/A'}</span>
                                </div>
                                <div className="info-row2">
                                    <span className="label"><img src={githubIcon} alt="" srcset="" /></span>
                                    <span className="value">{github || 'N/A'}</span>
                                </div>
                                <h2 className="ticket-number" > {ticketNumber} </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}