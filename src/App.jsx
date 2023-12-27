import { useState } from 'react';
import './App.css';

import logo from "./assets/instagram.png"
import logo1 from "./assets/google_play_logo.png"
import logo2 from "./assets/microsoft_logo.png"

function App() {
  const [login,setlogin]=useState(true)

  const loginSwitch = () => {
    setlogin(!login)
  }
  return (
   <div id='Container'>
        <div id="user">
              <img src={logo} alt="" />
              <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
              <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
              <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
              <input type="text" name="" id="" placeholder='Password' />
              <button>{login?"Sign in":"Sign up"}</button>
              <div id="OR"><p>______OR_______</p></div>
              <div id="user1">
              <a href='#'>Login with Facebook?</a>
              <a href='#'><p>Forgot password?</p></a>
              </div>
          <div id='footer'>
            {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
            <div><p>Get the App</p></div>
            <div id="footer-image">              
            <img src={logo1} alt="" id='gl' />
            <img src={logo2} alt="" id='ml' />
            </div>                       
          </div>         
          </div>            
   </div>
  );
}

export default App;
