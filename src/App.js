// Necessary Imports
import React , {useEffect, useState} from 'react';
import './App.css';

import {Routes,BrowserRouter,Route } from 'react-router-dom';  

// Page Imports
import SignupModal from './Components/Modals/Login Signup/signupModal';
import SignInModal from './Components/Modals/Login Signup/signinModal';
import Header from './Components/Header/header';
import QuestionsPage from './Components/Page Components/Question Page/questionsPage';
import ProblemPage from '../src/New Start/Problem Component/problemPage'
import ExplorePage from './Components/Page Components/Explore Page/explore';
import ProfilePage from './Components/Page Components/Profile Page/profilePage';

import bg_image from './Assets/explore-bg.webp'
function App() {
  const [showQuesPage,setShowQuesPage]=useState(0)
  const [showHeader,setShowHeader]=useState(0)
  const [quesNumber,setQuesNumber]=useState(2)
  const [isloggedIn,setLoggedIn]=useState(false)
  const [showProfile,setShowProfile]=useState(false)
  // const [showProblemPage,setShowProblemPage]=useState(0)
  // Checking is logged in or not
  useEffect(()=>{
    const getUser=localStorage.getItem('isLoggedIn')
    console.log(getUser)
    if(getUser==='1'){
      setLoggedIn(true)
    }
    else{
      setLoggedIn(false)
    }
  },[])

  function LogMeIn(item){
    setLoggedIn(true)
    localStorage.setItem('isLoggedIn','1')
    localStorage.setItem('Email',item)
    console.log("Data saved successfully")
    console.log(localStorage.getItem('isLoggedIn'))

  }
  function LogMeOut(){
    setLoggedIn(false)
    localStorage.clear()
    console.log("Logout ")
  }

  const [signupModal,setSignupModal]=useState(0)
  const [signinModal,setSigninModal]=useState(0)
  // const [signinModal,setSigninModal]=useState(0)

  function profilePageEnabled(){
    if(signinModal===1){
      setSigninModal(0)
    }

    setShowProfile(1)
  }
  function profilePageDisabled(){
    setShowProfile(0)
  }


  function signupPageEnabled(){
    if(signinModal===1){
      document.getElementById("signin-modal").style.transform="rotateX(90deg)";
      setTimeout(()=>{setSigninModal(0)},400)
    }
    setSignupModal(1)
    
    setTimeout(()=>{document.getElementById("signup-modal").style.transform="rotateX(0deg)"},300)
  }

  function signupPageDisabled(){
    document.getElementById("signup-modal").style.transform="rotateX(90deg)"
    setTimeout(()=>{setSignupModal(0)},400)
  }

  function loginPageEnabled(){
    if(signupModal===1){
      document.getElementById("signup-modal").style.transform="rotateX(90deg)";
      setTimeout(()=>{setSigninModal(0)},400)
    }
    console.log(signupModal)
    setSigninModal(1)
    
    setTimeout(()=>{document.getElementById("signin-modal").style.transform="rotateX(0deg)"},300)
  }
  function loginPageDisabled(){
    document.getElementById("signin-modal").style.transform="rotateX(90deg)"
    setTimeout(()=>{setSigninModal(0)},400)
  }

  function signinPageEnabled(){
    if(signupModal===1){
      document.getElementById("signup-modal").style.transform="rotateX(90deg)";
      setTimeout(()=>{setSignupModal(0)},400)
    }
    if(showProfile===true){
      setShowProfile(false)
    }
    setSigninModal(1)
    
    setTimeout(()=>{document.getElementById("signin-modal").style.transform="rotateX(0deg)"},300)
  }

  function openQuesPage(item){
    setQuesNumber(item)
    console.log(quesNumber)
    setShowQuesPage(1)
    setShowHeader(1)
  }  

  function clickedOnQuesID(item){
    console.log(item)
    // setShowProblemPage(0)
    setQuesNumber(item)
    setShowHeader(1)
    setShowQuesPage(1)
  }


  return <div className='app' style={{backgroundImage:bg_image}}>
      {signinModal && <SignInModal onClickBackdrop={loginPageDisabled} loggedIn={LogMeIn} onsignup={signupPageEnabled}/>}
      {signupModal && <SignupModal onClickBackdrop={signupPageDisabled} loggedIn={LogMeIn} onlogin={signinPageEnabled}/>}
      {showProfile && <ProfilePage closeProfile={profilePageDisabled} />}
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header onLogin={loginPageEnabled} onProfile={profilePageEnabled} isAuth={isloggedIn} logMeOut={LogMeOut}/>}>
          <Route index element={<ExplorePage />} />
          <Route path="problems" element={<ProblemPage clickedOnQues={openQuesPage} changeIDofQues={clickedOnQuesID}/>} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="questions" element={<QuestionsPage isAuth={isloggedIn} dataQues={quesNumber}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  



  </div>
}

export default App;
