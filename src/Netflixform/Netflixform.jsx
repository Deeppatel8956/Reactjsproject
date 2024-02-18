import React from 'react';
import './Net.css'
function Netflixform(props) {
    return (
        <div>
           <div class="logo">
        <img src="img/logo.png" alt=""/>
    </div>

    <div class="container">
        <h1>Sign In</h1>
        <div class="form">
            <input type="email" placeholder="Email or phone number"/>
            <input type="password" placeholder="Password"/>
            <input type="submit" value="Sign In"/>
            <input type="checkbox"/>
            <label>Remember me</label>
            <a href="#">Need help?</a>
        </div>
        <div class="content">
            <h2>New to Netflix? <a href="#">Sign up now.</a> </h2> <br />
            <h2>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h2>
        </div>
     </div>
        </div>
    );
}

export default Netflixform;