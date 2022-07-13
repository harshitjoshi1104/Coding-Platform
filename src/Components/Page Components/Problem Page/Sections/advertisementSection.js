
import './advertisementSection.css'

// Importing files
import AdvCards from './Ad Cards/advCards';
import StudyCard from './Ad Cards/studyCards';

// importing pictures
import ad1 from '../../../../Assets/contests/advertise1.png'
import ad2 from '../../../../Assets/contests/advertise2.png';
import ad3 from '../../../../Assets/contests/advertise3.png';

import dp_studyCard from '../../../../Assets/studyCard/dp_study_plan.webp';
import bst_studyCard from '../../../../Assets/studyCard/bst_study_plan.png';
import sql_studyCard from '../../../../Assets/studyCard/sql_study_plan.png';



const Advertisemet=props=>{
    return  (
        <div className='advertisement-main'>
            <div className='ads'>
                <AdvCards image_src={ad1}/>
                <AdvCards image_src={ad2}/>
                <AdvCards image_src={ad3}/>
            </div>
            <div className='ads'>
                <StudyCard image_src={dp_studyCard} card_details="14 days of DP"/>
                <StudyCard image_src={bst_studyCard} card_details="Binary Search"/>
                <StudyCard image_src={sql_studyCard} card_details="14 days of SQL"/>
                <StudyCard image_src={sql_studyCard} card_details="14 days of SQL"/>

                <StudyCard image_src={dp_studyCard} card_details="14 days of DP"/>
                <StudyCard image_src={dp_studyCard} card_details="14 days of DP"/>

            </div>
        </div>
    )
}

export default Advertisemet;