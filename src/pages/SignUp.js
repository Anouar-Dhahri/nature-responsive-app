import React, { useState } from 'react';
import Axios from 'axios';
import {Footer} from './../components';
import './SignUp.css';

export default function SignUp() {
    
    const [signUp, setSignUp] = useState({
      name:'',
      email:'',
      password:''
    })

    const [signIn, setSignIn] = useState({
      email:'',
      password:''
    })

    const handleTransition = () => {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');
      
      signUpButton.addEventListener('click', () => {
          container.classList.add('right-panel-active');
      });
      
      signInButton.addEventListener('click', () => {
          container.classList.remove('right-panel-active');
      });
    }

    const SignUp = async (e) => {
      e.preventDefault();
      console.log(signUp);
      const res = await Axios.post(`${process.env.SERVER_API}/signup`,signUp);
      console.log(res.data);

    }

    const SignIn = async (e) => {
      e.preventDefault();
      console.log(signIn);
      const res = await Axios.post(`${process.env.SERVER_API}/signIn`,signIn);
      console.log(res.data);
    }

  return (
    <>
      <div className='body'>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form  className="form" >
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" name="name" value={signUp.name} onChange={e => setSignUp({...signUp, name: e.target.value})}/>
              <input type="email" placeholder="Email" name="email" value={signUp.email} onChange={e => setSignUp({...signUp, email: e.target.value})}/>
              <input type="password" placeholder="Password" name="password" value={signUp.password} onChange={e => setSignUp({...signUp, password: e.target.value})}/>
              <button className='button' onClick={SignUp}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" className="form">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" name="email" value={signIn.email} onChange={e => setSignIn({ ...signIn, email: e.target.value})}/>
              <input type="password" placeholder="Password" name="password" value={signIn.password} onChange={e => setSignIn({...signIn, password: e.target.value})}/>
              <a href="#">Forgot your password?</a>
              <button className='button' onClick={SignIn}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="button ghost" id="signIn" onClick={handleTransition}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="button ghost" id="signUp" onClick={handleTransition}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
