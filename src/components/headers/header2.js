import jersey5 from '../../images/jersey5.jpg'
import alsLogo from '../../images/alsLogo.png'
import dugout from '../../images/dugout.png'

const banner2 = () =>{
    return (
        <header id='home-header'>
            <img id="jersey-5" className='header-img' src={jersey5} alt="kelly riding his bike" />
            <img id="als-logo" className='header-img' src={alsLogo} alt="ALS Association Logo" />
            <img id="dugout-img" className='header-img header-img-3' src={dugout} alt=" two men in a baseball dugout" />
        </header>
    )
}

export default banner2;