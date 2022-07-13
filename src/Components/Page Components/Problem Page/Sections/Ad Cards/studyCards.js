import React from 'react';
import './studyCards.css';

const StudyCard=props=>{
    const image="url('{props.bc_image}')"
    return (
        <div className='study-card' style={{backgroundImage:image}} >
            <img src={props.image_src} alt="" style={{width:"100%", heigt:"100%",borderRadius:"20px"}}/>
            <p style={{fontSize:"16px",fontWeight:"600",color:"#fff"}}>{props.card_details}</p>
        </div>
        
    )
}

export default StudyCard;