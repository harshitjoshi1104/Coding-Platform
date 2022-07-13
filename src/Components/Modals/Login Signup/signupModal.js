// import React from 'react';
import './signupModal.css';
import signingPict from '../../../Assets/picture-signupModal.png'
import axios from 'axios';
const SignupModal=props=>{

    function clickedOnBackDrop(){
        props.onClickBackdrop()
    }

    function createMyAccount(){
        const username=document.getElementById("sign-up-username").value
        const pw=document.getElementById("sign-up-pswd").value
        console.log(username,pw)
        // console.log('valed')
        const obj={ 
            fname:" ",
            lname:" ",
            email:username,
            pswd:pw
        }
        axios
        .post('http://localhost:80/signup',{obj})
        .then((res)=>{ 
            console.log("Result : ",res.data)
            // setOutputField(res.data)
        })
    }

    function logMeIN(){
        props.onlogin()
    }
    return (
    <>
        <div className='modal-backdrop' onClick={clickedOnBackDrop}/>
        <div className='signup-modal' id='signup-modal'>
        <div className='picture-signup'>
            <img src={signingPict} alt="" style={{width:"100%",height:"100%"    }} />
        </div>
        <div className='signup-cred'>
            <h1>Sign Up</h1>
            <p>Access to 120+ hours of courses, tutorials and livestreams.</p>
            <div className='credentials-signup'>
                <input id='sign-up-username' placeholder='Username'></input>
                <input id='sign-up-pswd' placeholder='Password' type="password"></input>
                <button onClick={createMyAccount}>Sign Up</button>
            </div>
            <p>By clicking on Sign up, you agree to our Terms of service and Privacy policy.</p>
            <hr />
            <p>Already have and account? <a href={logMeIN} onClick={logMeIN} style={{cursor:"pointer"}}>Sign in</a></p>
        </div>
    </div>
    </>
    )
}

export default SignupModal