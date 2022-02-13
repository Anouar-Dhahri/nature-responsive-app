import React, { useState } from 'react';
import { Footer } from './../components';
import './Contact.css';

export default function Contact() {

  const [Name, SetName] = useState("");
  const [Email, setEmail] = useState("");
  const [Object, setObject] = useState("");
  const [Message, setMessage] = useState("");

  const sendMail = async(e) => {
    e.preventDefault();
    console.log(Name, Email, Object, Message)
  }
  return (  
    <>
      <div className='contact'>
        <div className='contact-wrapper'>
          <div className='inner-container'>
            <div className='left'>
              <h2>Let's Connect</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae.</p>
              <span><i className="fas fa-envelope"></i> nature@gmail.com</span>
              <span><i className="fas fa-phone-alt"></i> (+216) 29 190 008</span>
              <span><i className="far fa-map-marker-alt"> </i> Tunisia</span>
              
              <div className="social-container2">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className='right'>
              <form>
                <input type="text" 
                  placeholder="Name" 
                  name="name"  
                  className='info' 
                  onChange={e => SetName(e.target.value)}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  className='info'
                  onChange={e => setEmail(e.target.value)}
                />
                <input 
                  type="text" 
                  placeholder="Objects" 
                  name="objectif" 
                  className='info'
                  onChange={e => setObject(e.target.value)}
                />
                <textarea 
                  placeholder='Message'  
                  name="message" 
                  className='textarea'
                  onChange={e => setMessage(e.target.value)}
                />
                <button onClick={sendMail}>SUBMIT NOW</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
