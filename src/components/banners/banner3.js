import ocraLogo from '../../images/ocraLogo.png'
import shelly from '../../images/shelly.jpg'
import ribbon from '../../images/ribbon.png'

const banner3 = () =>{
    return (
        <header id='home-header'>
            <img id="shelly-img" className='header-img' src={shelly} alt="kelly riding his bike" />
            <img id="ocra-logo" className='header-img' src={ocraLogo} alt="ovarian cancer research alliance logo" />
            <img id="ribbon-img" className='header-img' src={ribbon} alt="ovarian cancer ribbon" />
        </header>
    )
}

export default banner3;