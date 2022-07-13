import './profilePage.css';
import sideImg from '../../../Assets/picture-signupModal.png'
const ProfilePage=props=>{
    function clickedOnBackground(){
        props.closeProfile()
    }
    return <div className='profilePage'>
        <div className='backdrop-profile' onClick={clickedOnBackground}/>
        <div className='profile-left'>
            <img src={sideImg} alt=""/>
        </div>

        <div className='profile-right'>
            <h1>Profile View</h1>
            <div>
                <label>First Name </label>
                <input value="Harshit"></input>
            </div>
            <div>
                <label>Last Name </label>
                <input value="Harshit"></input>
            </div>
            <div>
                <label>Email </label>
                <label>"joshi.harshit1104@gmail.com"</label>
                
            </div>
            <div>
                <label>Password </label>
                <input value="12345" type="password"></input>
            </div>
            <button>Save Changes</button>
            <div className='questions-done'>

            </div>
        </div>

    </div>
}

export default ProfilePage
