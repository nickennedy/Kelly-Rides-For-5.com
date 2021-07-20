import vFoundationLogo from '../../images/vFoundationLogo.jpg'
import jd from '../../images/jd.png'
import jimmyQuote from '../../images/jimmyQuote.jpg'

const banner4 = () =>{
    return (
        <header id='home-header'>
            <img id="jd-img" className='header-img' src={jd} alt="kelly friend JD holding a cat" />
            <img id="v-foundation-logo" className='header-img' src={vFoundationLogo} alt="the V foundation Logo" />
            <img id="jimmy-img" className='header-img header-img-3' src={jimmyQuote} alt="Dont give up, dont ever give up. -Jimmy Valvano" />
        </header>
    )
}

export default banner4;