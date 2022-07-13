
import './quesCards.css';

const QuestionCard=props=>{
    let bg_color="rgba(26,26,26,0.5)"
    if(props.id%2===0){
        bg_color="rgba(255,255,221,0.3)"
    }

    function clickedOnThisQues(){
        console.log("Card")
        console.log(props.id)
        props.quesNoClicked(props.id)
    }

    return (
        <div className='ques-card' style={{backgroundColor:bg_color}} >
            <h1 onClick={clickedOnThisQues}>1. Two Sums</h1>
            
                <div className='company-tags'>
                    <p>Status : --</p>
                    <p>Difficulty : Easy</p>
                    <p>Acceptance : 48.7%</p>
                    </div>
            </div>
    )
}

export default QuestionCard;