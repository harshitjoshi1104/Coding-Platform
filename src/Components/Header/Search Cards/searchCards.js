// import { useState } from 'react';
// import {Link} from 'react-router-dom';
import './searchCards.css';

const SearchCards=props=>{
    const isSearching=props.searchOn
    function checkLogoutBtn(){
        if(props.title==="Logout"){
            props.onPressed()
        }
        if(props.title==="View Profile"){
            console.log("Profile Clicked")
            props.onProfile1()
        }
    }
    // const [isProfile,setIsProfile]=useState(false)
    // if (props.title==="View Profile"){
    //     setIsProfile(true)
    // }
    return <div className='search-card' onClick={checkLogoutBtn}>
        <h4>{props.title}</h4>
        {/* <p>All basic technique to solve BinarySearch Problems</p> */}
        {isSearching && <button>Study Card</button>}
    </div>
}

export default SearchCards;