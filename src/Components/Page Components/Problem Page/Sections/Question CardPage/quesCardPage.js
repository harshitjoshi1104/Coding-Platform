
import './quesCardPage.css'

// Importing Files
import QuestionCard from './Question Cards/quesCards';


const QuesCardPage=props=>{
    function quesID(item){
        props.ques_id(item)
    }
    return (
        <div className='ques-card-page'>
            <QuestionCard id={1} quesNoClicked={quesID}/>
            <QuestionCard id={2} quesNoClicked={quesID}/>
            <QuestionCard id={3} quesNoClicked={quesID}/>
            <QuestionCard id={4} quesNoClicked={quesID}/>
            <QuestionCard id={5} quesNoClicked={quesID}/>
            <QuestionCard id={6} quesNoClicked={quesID}/>
            <QuestionCard id={7} quesNoClicked={quesID}/>
            <QuestionCard id={8} quesNoClicked={quesID}/>
            <QuestionCard id={9} quesNoClicked={quesID}/>
            <QuestionCard id={10} quesNoClicked={quesID}/>
            <QuestionCard id={11} quesNoClicked={quesID}/>
            <QuestionCard id={12} quesNoClicked={quesID}/>
            <QuestionCard id={13} quesNoClicked={quesID}/>
            <QuestionCard id={14} quesNoClicked={quesID}/>
            <QuestionCard id={15} quesNoClicked={quesID}/>


        </div>
    )
}

export default QuesCardPage;