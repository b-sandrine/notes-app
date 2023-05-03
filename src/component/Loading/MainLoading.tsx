import './MainLoading.css'
import Loading_image from '../../assets/loading-image.png'

export default function MainLoading () {
    
    return (
        <div className="mainloading--container">
            <img src={Loading_image} alt="A place holder image for loading page" />
            {/* <p>Loading ...</p> */}
        </div>
    )
}