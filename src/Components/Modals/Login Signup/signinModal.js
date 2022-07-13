// import React from 'react';
import {useState} from 'react';
import './signupModal.css';
import axios from 'axios';
import signingPict from '../../../Assets/picture-signupModal.png'
const SignInModal=props=>{
    const [showError,setShowError]=useState(<p style={{color:'red'}}></p>)
    const [errorColor,setErrorColor]=useState('')

    function clickedOnBackDrop(){
        props.onClickBackdrop()
    }


    function createMyAccount(){
        const username=document.getElementById("sign-up-username").value
        const pw=document.getElementById("sign-up-pswd").value
        console.log(username,pw)
        // console.log('valed')
        const obj={
            email:username,
            pswd:pw
        }
        axios
        .post('http://localhost:80/login',{obj})
        .then((res)=>{ 
            console.log("Result : ",res.data)
            if(res.data.status===true){
                props.loggedIn(res.data.details)
                localStorage.setItem('solvedQuestions',res.data.details.quesS)
                props.onClickBackdrop()
                setShowError(<p style={{color:'red'}}></p>)
                setErrorColor('')

            }
            else{
                console.log(res.data.message)
                setShowError(<p style={{color:'red'}}>Username or Password Incorrect!</p>)
                setErrorColor('1px solid rgba(255,0,0,0.7)')
            }
            // setOutputField(res.data)
        })
    }
    function SignMeup(){
        props.onsignup()
    }


    return (
    <>
        <div className='modal-backdrop' onClick={clickedOnBackDrop}/>
        <div className='signup-modal' id='signin-modal'>
        <div className='picture-signup'>
            <img src={signingPict} alt="" style={{width:"100%",height:"100%"    }} />
        </div>
        <div className='signup-cred'>
            <h1>Sign in</h1>
            <p>Access to 120+ hours of courses, tutorials and livestreams.</p>
            <div className='credentials-signup'>
                <input placeholder='Username' type="email" id='sign-up-username' style={{border:errorColor}}></input>
                <input placeholder='Password' type="password" id='sign-up-pswd' style={{border:errorColor}}></input>
                <button onClick={createMyAccount} >Sign In</button>
                {showError}
            </div>
            <p>By clicking on Sign up, you agree to our Terms of service and Privacy policy.</p>
            <hr />
            <p>Dont't have an account? <a href={SignMeup} style={{cursor:"pointer"}} onClick={SignMeup}>Sign up</a></p>
            <p>Forget Password? <a href="https://">Reset password</a></p>
            <p>Don't have a password yet? <a href="https://">Sign in</a></p>
        </div>
    </div>
    </>
    );
}

export default SignInModal;