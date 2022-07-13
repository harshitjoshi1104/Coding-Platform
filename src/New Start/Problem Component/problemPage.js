import React from 'react';
// import Header from '../Header/header';
// import LeftStaticComponent from './Left Static Component/problemStatic';
import RightComponent from './Right Component/rightProblemSet';
import './problemPage.css';


const ProblemsPage=(props)=>{
    const data1=[{id:"1", status:"False",title:"1. Two Sum",acceptance:"48.5%",difficulty:"Easy",frequency:"10"},
    {id:"2", status:"False",title:"2. Add Two Numbers",acceptance:"39.0%",difficulty:"Medium",frequency:"10"},
    {id:"3", status:"False",title:"3. Longest Substring Without Repeating Characters",acceptance:"33.5%",difficulty:"Medium",frequency:"10"},
    {id:"4", status:"False",title:"4. Median of Two Sorted Arrays",acceptance:"34.4%",difficulty:"Hard",frequency:"10"},
    {id:"5", status:"False",title:"5. Longest Palindromic Substring",acceptance:"32.2%",difficulty:"Medium",frequency:"10"},
    {id:"6", status:"False",title:"6. Zigzag Conversion",acceptance:"42.0%",difficulty:"Medium",frequency:"10"},
    {id:"7", status:"False",title:"7. Reverse Integer",acceptance:"26.9%",difficulty:"Medium",frequency:"10"},
    {id:"8", status:"False",title:"8. String to Integer (atoi)",acceptance:"16.6%",difficulty:"Medium",frequency:"10"},
    {id:"9", status:"False",title:"9. Palindrome Number",acceptance:"52.6%",difficulty:"Easy",frequency:"10"},
    {id:"10", status:"False",title:"10. Regular Expression Matching",acceptance:"28.3%",difficulty:"Hard",frequency:"10"},
    {id:"11", status:"False",title:"11. Container With Most Water",acceptance:"54.1%",difficulty:"Medium",frequency:"10"},
    {id:"12", status:"False",title:"12. Integer to Roman",acceptance:"58.8%",difficulty:"Medium",frequency:"10"},
    {id:"13", status:"False",title:"13. Roman to Integer",acceptance:"57.9%",difficulty:"Easy",frequency:"10"},
    {id:"14", status:"False",title:"14. Longest Common Prefix",acceptance:"39.9%",difficulty:"Easy",frequency:"10"},
    {id:"15", status:"False",title:"15. 3Sum",acceptance:"31.5%",difficulty:"Medium",frequency:"10"},
    {id:"16", status:"False",title:"16. 3Sum Closest",acceptance:"46.8%",difficulty:"Medium",frequency:"10"},
    {id:"17", status:"False",title:"17. Letter Combinations of a Phone Number",acceptance:"54.6%",difficulty:"Medium",frequency:"10"},
    {id:"18", status:"False",title:"18. 4Sum",acceptance:"37.3%",difficulty:"Medium",frequency:"10"},
    {id:"19", status:"False",title:"19. Remove Nth Node From End of List",acceptance:"38.7%",difficulty:"Medium",frequency:"10"},
    {id:"20", status:"False",title:"20. Valid Parentheses",acceptance:"40.9%",difficulty:"Easy",frequency:"10"}]
    function clickedQues(item){
        props.changeIDofQues(item)
    }

    // const ArrayOfQues=localStorage.getItem('solvedQuestions')

    return (
        <div className='main-div-problemset'>
            {/* <Header /> */}
            <div className='mid-div-problemset'>
                {/* <LeftStaticComponent /> */}
                <RightComponent mainData={data1} questionID={clickedQues}/>
            </div>
            <div style={{backgroundColor:"rgba(0,0,0,0.5)",color:"rgba(255,255,255,0.6)",width:"80%",height:"3rem",marginTop:"5mm",marginBottom:"5mm",paddingLeft:"5mm",display:"flex",alignItems:"center"}}>Copyright @ 2021</div>
        </div>

    )
}

export default ProblemsPage