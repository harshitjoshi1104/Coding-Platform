import React,{useEffect, useState} from 'react';
import './questionsPage.css';
import CodeEditor from './Code Editor/codeEditor';
import questionBank from '../../QuestionsDB/questionBank'
// import {Link} from 'react-router-dom';
// import Header from '../../Header/header';
const QuestionsPage=props=>{
    const [aboutQuesBox,setaboutQuesBox]=useState(0)
    const [aboutQuesBoxData,setAboutQuesBoxData]=useState(<p>See Details</p>)
    console.log("QuesPage : ",props.dataQues)
    const data=questionBank[props.dataQues]
    console.log(data)
    useEffect(()=>{window.scrollTo(0,0)
        // clearInterval(countDown)
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
        }


        let count=0;
        let countDown=setInterval(()=>{
            var mins=Math.floor(count/60);
            var secs=count%60;
            document.getElementById('minutes').innerHTML=mins;
            if(secs<10){
                document.getElementById('seconds').innerHTML=`0${secs}`
            }
            else{
                document.getElementById('seconds').innerHTML=`${secs}`
            }
            
            count+=1;
            if(count===15*60){
                clearInterval(countDown)
            }
        },1000)
    },[])


    

    function changeWidth(){
        if (aboutQuesBox===0){
            document.getElementById("aboutQues").style.height="300px";
            setAboutQuesBoxData(<>
                <h3>Difficulty : {data.difficulty}</h3>
                <h3>Acceptance : {data.acceptance}</h3>
                <h3>Tags       : {data.tags}</h3>
                <h3>Company    :  Amazon, Google, Wallmart, Uber</h3>
            </>)
            setaboutQuesBox(1)
        }
        else{
            document.getElementById("aboutQues").style.height="50px";
            setaboutQuesBox(0)
            setAboutQuesBoxData(<p>See Details</p>)
        }
        
    }
    
    console.log("Inside Question page : ",props.dataQues)
    return <div className='quesPage'>
        <div className='quesPage-quesDesc'>
            <div className='quesPage-description'>
                {data.title}
                {data.description}
                
                <div className='quesPage-example' style={{color:"rgba(255,255,255,0.5)"}}>
                    <h5>Example 1 :</h5>
                    <p>Input  : {data.example[0].input}</p>
                    <p>Output : {data.example[0].output}</p>
                    <br />
                    <h5>Example 2 :</h5>
                    <p>Input  : {data.example[1].input}</p>
                    <p>Output : {data.example[1].output}</p>
                    <br />

                </div>
                <p className='avg-time'>Avg Time : 15 mins</p>
                <div className='current-time'>
                    <p>Current Time :</p>
                    <p id='minutes'>0</p>
                    <p>:</p>
                    <p id='seconds'>00</p>
                </div>
            </div>
            <div className='quesPage-aboutQues' id="aboutQues" onClick={changeWidth}>
                {aboutQuesBoxData}
                
            </div>
            
        </div>
        {/* <div className='editor-integerated'>

        </div> */}
        <CodeEditor isAuth={props.isAuth} />
    </div>
}

export default QuestionsPage