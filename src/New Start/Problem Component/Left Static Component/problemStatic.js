import React from 'react';
import './problemStatic.css';

const LeftStaticComponent=props=>{
    return (
    <div className='left-static-problemSet'>
        <div className='status-of-ques'>
            <div className='session-heading' style={{color:"#fff",fontWeight:"800"}}>
                <p>Session</p>
                <p>Session 1</p>
            </div>
            <div className='amount-ques'>
                <div className='circle-chart'>
                 <p style={{color:"#fff",margin:"0px"}}>0</p>
                 <hr  width="60%" style={{color:"#fff",margin:"0px"}}/>
                 <p style={{color:"#fff",margin:"0px"}}>300</p>
                </div>
                <div className='value-of-chart'>
                    <pre style={{color:"rgb(0 184 163)",fontSize:"16px",fontWeight:"10"}}>Easy    0</pre>
                    <pre style={{color:"orange",fontSize:"16px"}}>Medium  0</pre>
                    <pre style={{color:"red",fontSize:"16px"}}>Hard    0</pre>
                </div>
            </div>
        </div>

        <div className="calender-left">
            <p>Day 1, April</p>
            <pre style={{fontWeight:"800",fontSize:"21px"}}>S  M  T  W  T  F  S</pre>
            <hr width="73%" style={{color:"white"}}/>
            <pre>1    2    3    4    5    6    7</pre>
            <pre>8    9    10   11   12   13   14</pre>
            <pre>15   16   17   18   19   20   21</pre>
            <pre>22   23   24   25   26   27   28</pre>
            <pre>29   30   31</pre>

            

        </div>
    </div>
    )
}

export default LeftStaticComponent;