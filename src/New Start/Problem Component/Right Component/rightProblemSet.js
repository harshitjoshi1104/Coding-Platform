import QuestionComponent from '../../Questions Component/quesComponent';
import StudyCard from '../Study Cards/studyCards'; 
import AdvertiseCards from '../Advertisement Cards/advertise_cards';
import './rightProblemSet.css'
import dp_StudyPlan from './dp_study_plan.webp';
import bst_StudyPlan from './bst_study_plan.png';
import sql_StudyPlan from './sql_study_plan.png';

import ad1 from '../../../Assets/contests/advertise1.png'
import ad2 from '../../../Assets/contests/advertise1.png'
import ad3 from '../../../Assets/contests/advertise1.png'

// import bst_StudyPlan from './bst_study_plan.png';

const RightComponent=props=>{
    const val=props.title
    console.log(val)

    function selectedQuesID(item){
        props.questionID(item)
    }

    function mapData(item){
        if(item.id%2===0){
            return <QuestionComponent quesID={selectedQuesID} color="" id={item.id} status="--" title={item.title} acceptance={item.acceptance} difficulty={item.difficulty} frequency="===="/>
        }
        else{
            return <QuestionComponent quesID={selectedQuesID} color="#313131" id={item.id} status="--" title={item.title} acceptance={item.acceptance} difficulty={item.difficulty} frequency="===="/>
        }
        
    }

    const showData=props.mainData.map(mapData)


    return (
        
        <div className='right-problemSet'>
            <div className='ads-div1'>
                <div className="study-bar">
                    <AdvertiseCards image_src={ad1}/>
                    <AdvertiseCards image_src={ad2}/>
                    <AdvertiseCards image_src={ad3}/>
                </div>
                <div className="study-bar"> 

                    <StudyCard image_src={sql_StudyPlan} card_details="SQL Study Plan"/>
                    <StudyCard image_src={bst_StudyPlan}  card_details="Binary Search"/>
                    <StudyCard image_src={dp_StudyPlan}  card_details="14 Days of DP"/>
                    <StudyCard image_src={bst_StudyPlan}  card_details="14 Days of Algo"/>
                    <StudyCard image_src={bst_StudyPlan}  card_details="14 Days of Graph"/>


                </div>
            </div>
            <hr className='horizontol-line' />
            <QuestionComponent color="" status="Status" title="Title" acceptance="Acceptance" difficulty="Difficulty" frequency="Frequency"/>
            <hr className='horizontol-line' style={{width:"100%"}}/>
            {showData}
            {/* <QuestionComponent color="#313131" status="--" title="1. Two Sum" acceptance="45.6%" difficulty="Easy" frequency="===="/>
            <QuestionComponent color="" status="--" title="2. Add two numbers" acceptance="38.6%" difficulty="Medium" frequency="===="/>
            <QuestionComponent color="#313131" status="--" title="342. Word Break II" acceptance="24.9%" difficulty="Hard" frequency="===="/>
            <QuestionComponent color="" status="--" title="21. Merge List" acceptance="60.6%" difficulty="Medium" frequency="===="/> */}

        </div>
    )
}

export default RightComponent;