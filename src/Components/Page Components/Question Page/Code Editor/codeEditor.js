import React from 'react';
import './codeEditor.css'

// Code Mirror Imports --------------------------------------
import {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import axios from 'axios';
// ----------------------------------------------------------
// import axios from 'axios';
// const code='//Write Something here'
const CodeEditor=props=>{
    // =======================================================================================================================
    // =======================================================================================================================
    // =======================================================================================================================
    const [code,setCode]=useState('//Write Something here')
    const [outputField,setOutputField]=useState("No Output ...")
    const [themeEditor,setThemeEditor]=useState("dark")
    const [outputLoadingClass,setOutputLoadingClass]=useState("")
    const [progLang,setProgLang]=useState("py")
    // const [isLoading,setIsLoading]=useState(0)

    function getOutput(){
        // console.log(code)
        setOutputField(<p>Loading Output, Please wait ...</p>)
        setOutputLoadingClass("loading-output")
        // console.log(outputLoadingClass)
        document.getElementById('output-id').classList.add('loading-output')
        const lang=progLang;
        const userInput=document.getElementById('inputs-code').value
        axios
        .post('http://localhost:80/python',{code,lang,userInput})
        .then((res)=>{ 
            console.log(res.data)
            
            setOutputField(res.data)
            document.getElementById('output-id').classList.remove('loading-output')

        }).catch((err)=>{
            setOutputField(<p>Connection Refused! Network Error.</p>)
            console.log(err)
            document.getElementById('output-id').classList.remove('loading-output')

        })
        setOutputLoadingClass("")

        // setIsLoading(0)
    }

    function submitCode(){
        setOutputField(<p>Loading Output, Please wait ...</p>)
        setOutputLoadingClass("loading-output")
        // console.log(outputLoadingClass)
        document.getElementById('output-id').classList.add('loading-output')
        const lang=progLang;
        // const userInput=document.getElementById('inputs-code').value
        const dataques=1
        axios
        .post('http://localhost:80/submittingCode',{code,lang,dataques})
        .then((res)=>{ 
            console.log(res.data)
            
            setOutputField(res.data)
            document.getElementById('output-id').classList.remove('loading-output')

        }).catch((err)=>{
            setOutputField(<p>Connection Refused! Network Error.</p>)
            console.log(err)
            document.getElementById('output-id').classList.remove('loading-output')

        })
        setOutputLoadingClass("")
    }

    function changingProgrammingLanguage(event){
        console.log(event.target.value)
        if(event.target.value==="Python"){
            setProgLang("py")
        }
        else if(event.target.value==="C++ 17"){
            setProgLang("cpp")
        }
        else if(event.target.value==="JAVA"){
            setProgLang("java")
        }
        console.log(progLang)
    }

    // =======================================================================================================================
    // =======================================================================================================================
    // =======================================================================================================================
    // =======================================================================================================================


    return <div className='code-editor'>
        <div className='nav-for-editor'>
            <select onChange={changingProgrammingLanguage}>
            <option>Python</option>
            <option>C++ 17</option>
            <option>JAVA</option>
            
            </select>
            <button onClick={()=>{setCode("")}}>Clear</button>
            <button onClick={()=>{themeEditor==="dark"?setThemeEditor("light"):setThemeEditor("dark")}}>Theme</button>
        </div>
        <CodeMirror
            value={code}
            height="60vh"
            theme={themeEditor}
            color='white'
            font-size="40px"
            
            options={{
                theme:'dracula',
                keyMap: 'sublime',
                mode:'jsx'
            }}
            // extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
                setCode(value)
            }}
            
    />
    <div className='editor-user-input'>
        <textarea id='inputs-code' cols='100' row='10' placeholder='Leave blank if no Inputs' ></textarea>
    </div>
    <div className='editor-handling-btn'>
        <button id="btn-runCode" onClick={getOutput}>Run Code</button>
        <button id='btn-submitCode' onClick={submitCode}>Submit Code</button>
    </div>

    <div className={`code-output ${outputLoadingClass}`} id="output-id">
        {outputField}
    </div>

    </div>
}

export default CodeEditor;