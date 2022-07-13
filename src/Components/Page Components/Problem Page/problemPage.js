
import './problemPage.css'

// Importing Files
import Advertisemet from './Sections/advertisementSection'
import SearchBar from './Sections/Search Bar/searchBar'
import QuesCardPage from './Sections/Question CardPage/quesCardPage'

const ProblemPage=props=>{
    function transferID(item){
        props.changeIDofQues(item)
    }
    return <div className="problem-page-main">
        <Advertisemet />
        <SearchBar />
        <QuesCardPage ques_id={transferID} />
    </div>

}

export default ProblemPage