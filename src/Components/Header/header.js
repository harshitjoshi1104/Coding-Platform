import React,{useState} from 'react';
import './header.css';
import {Link,Outlet} from 'react-router-dom';
import SearchCards from './Search Cards/searchCards';

const Header=props=>{
    const isAuthenticated=props.isAuth;

    
    const [accountModal,setAccountModal]=useState(0)
    const [searchModal,setsearchModal]=useState(0)
    function SearchAnim(){
        if(searchModal===0){
            if (accountModal===1){
                let val=document.getElementsByClassName('account-icon-header')[0]
                val.classList.remove('do-search-animation')
                val.classList.add('do-search-hidden')
                setAccountModal(accountModal^1)
            }
            let val=document.getElementsByClassName('search-icon-header')[0]
            val.classList.remove('do-search-hidden')
            val.classList.add('do-search-animation')
            setsearchModal(searchModal^1)
        }
        else{
            let val=document.getElementsByClassName('search-icon-header')[0]
            val.classList.remove('do-search-animation')
            val.classList.add('do-search-hidden')
            setsearchModal(searchModal^1)
        }
    }

    function LogoutBtn(){
        console.log("Clicked")
        if(accountModal===1){
            let val=document.getElementsByClassName('account-icon-header')[0]
            val.classList.remove('do-search-animation')
            val.classList.add('do-search-hidden')
            setAccountModal(0)
        }

        props.logMeOut()
    }

    function LoginBtnClicked(){
        if(isAuthenticated===true){
            if(accountModal===0){
                if (searchModal===1){
                    let val=document.getElementsByClassName('search-icon-header')[0]
                    val.classList.remove('do-search-animation')
                    val.classList.add('do-search-hidden')
                    setsearchModal(searchModal^1)
                }
                let val=document.getElementsByClassName('account-icon-header')[0]
                val.classList.remove('do-search-hidden')
                val.classList.add('do-search-animation')
                setAccountModal(accountModal^1)
            }
            else{
                let val=document.getElementsByClassName('account-icon-header')[0]
                val.classList.remove('do-search-animation')
                val.classList.add('do-search-hidden')
                setAccountModal(accountModal^1)
            }
        }
        else{
            if (searchModal===1){
                let val=document.getElementsByClassName('search-icon-header')[0]
                val.classList.remove('do-search-animation')
                val.classList.add('do-search-hidden')
                setsearchModal(searchModal^1)
            }
            props.onLogin()
        }
        
    }

    function clickedOnProfile(){
        let val=document.getElementsByClassName('account-icon-header')[0]
        val.classList.remove('do-search-animation')
        val.classList.add('do-search-hidden')
        setsearchModal(0)
        props.onProfile()
    }

    return <><div className='main-header'>
        <div className='icon-header'>icon</div>
        <div className='nav-bar'>
            <ul>
            <li className='nav-links'><span class="material-symbols-outlined">bolt </span><Link to='/' style={{textDecoration:"none",fontSize:"15px",color: "rgba(255, 255, 255, 0.6)",fontWeight:"500"}}>Explore</Link></li>
                <li><span class="material-symbols-outlined">bug_report </span><Link to='/problems' style={{textDecoration:"none",fontSize:"15px",color: "rgba(255, 255, 255, 0.6)",fontWeight:"500"}}> Problems</Link></li>
                <li><span class="material-symbols-outlined">devices </span><Link to='/' style={{textDecoration:"none",fontSize:"15px",color: "rgba(255, 255, 255, 0.6)",fontWeight:"500"}}> Contest</Link></li>
                <li title='This Option is not available'><span class="material-symbols-outlined" >message </span><Link to='/dicuss' style={{textDecoration:"none",fontSize:"15px",color: "rgba(255, 255, 255, 0.6)",fontWeight:"500"}}> Discuss</Link></li>
                {/* <li>...</li> */}
                <li onClick={SearchAnim}><span class="material-symbols-outlined" style={{width:"1cm"}}>search</span> Search</li>
                <div className='search-icon-header'>
                    <input placeholder='Search'></input>
                    
                    <p style={{color:'rgba(255,255,255,0.4)'}}>Quick Links ---------------------------<hr style={{width:'20%',color:'rgba(255,255,255,0.4)',border:'none'}}/></p>
                    <SearchCards title="Binary Search" searchOn={true}/>
                    <SearchCards title="Algorithms" searchOn={true}/>
                    <SearchCards title="Graphs" searchOn={true}/>
                    <SearchCards title="DP" searchOn={true}/>

                    <p style={{color:'rgba(255,255,255,0.4)'}}>Quick Guidance ------------------------<hr style={{width:'20%',color:'rgba(255,255,255,0.4)',border:'none'}}/></p>
                    <SearchCards title="Algorithm Course" searchOn={true}/>
                    <SearchCards title="Advance DS Course" searchOn={true}/>

                </div>
                    
                <li onClick={LoginBtnClicked}><span class="material-symbols-outlined">group</span>{isAuthenticated && "✅"}</li>
                <div className='account-icon-header'>
                    <SearchCards onProfile1={clickedOnProfile} title="View Profile" searchOn={false}/>
                    <SearchCards title="Status" searchOn={false}/>
                    <SearchCards title="Points" searchOn={false}/>
                    <SearchCards onPressed={LogoutBtn} title="Logout" searchOn={false}/>
                </div>
            </ul>
        </div>
    </div>
    <Outlet />

    </>
}

export default Header