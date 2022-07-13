import React from "react";
import './quesComponent.css';
import {Link} from 'react-router-dom';
const QuestionComponent=props=>{
    let coloring="#fff";
    if (props.difficulty==="Easy"){
        coloring="rgb(0 184 163)";
    }
    else if (props.difficulty==="Medium"){
        coloring="orange";
    }
    else if (props.difficulty==="Hard"){
        coloring="red";
    }
    // let statusOfQues="--";
    
    // if(props.solvedQues.indexOf(props.id)!==-1){
    //     statusOfQues="✔️"
    // }
    function quesClicked(){
        console.log(props.id)
        console.log(props.title)
        props.quesID(props.id)
    }
    function changeHover(event){
        event.style.color="tomato"
    }
    return(
        <div className="ques-component" style={{backgroundColor:props.color}} onClick={quesClicked}>
            <div className="ques-status"><h3>{props.status}</h3></div>

            <div className="ques-title"><h3><Link to='/questions'style={{textDecoration:"none",color:"rgba(255,255,255,0.7)"}} onMouseOver={changeHover}>{props.title}</Link></h3></div>

            <div className="ques-acceptance"><h3>{props.acceptance}</h3></div>
            
            <div className="ques-difficulty"><h3 style={{color:coloring}}>{props.difficulty}</h3></div>

            <div className="ques-frequency"><h3>{props.frequency}</h3></div>

        </div>
    )
}

export default QuestionComponent