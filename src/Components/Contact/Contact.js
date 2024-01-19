import React from 'react'
import './Contact.css'

function Contact() {

    return (
        <div id='contact' className='contact-section'>
            <div className="contact">
                <h2 className='headline'>Contact</h2>
                <div className="contact-form">
                    <h2 className='contact-note'>Wants to Connect With Me? Leave a Message.</h2>
                    <p>Queries, Networking, or Interested in Hiring Me? Feel free to write here. I'd love to hear from you.</p>
                    <div className="form">
                        <form id='submit-form' method='post' action="https://script.google.com/macros/s/AKfycbwtNtdhy4B5OvMZ6grXhS4AMYQR5WaNz4eTj6VM2kkUQNZ22dbvyviCQ51KqX11qL-D1w/exec">
                            <input name='name' type="text" placeholder='Name' />
                            <input name='email' type="text" placeholder='Email' />
                            <textarea name='message' placeholder="Type your message here..."></textarea>
                            <hr />
                            <button type='submit' className='send-button'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact
