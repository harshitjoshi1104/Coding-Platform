
import './advertise_cards.css'

const AdvertiseCards=props=>{
    return (
        <div className='advertise-card-panel'>
            <img src={props.image_src} width="100%" height="100%" alt="" />
        </div>
    )
}

export default AdvertiseCards;