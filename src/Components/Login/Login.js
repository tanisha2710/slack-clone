import React from 'react'
import "./Login.css";
import { Button } from '@fluentui/react/lib/Button';
import { auth, provider } from '../../firebase';

function Login() {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(e => alert(e.message));
    }
    return (
        <div className="loginContainer">
            <div className="loginInnerContainer">
                <img src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj" />
                <h1>Sign in to the Channel</h1>
                <p>random.com</p>
                <Button onClick={signIn}>
                    sign in with Google
                </Button>
            </div>
            
        </div>
    )
}

export default Login
