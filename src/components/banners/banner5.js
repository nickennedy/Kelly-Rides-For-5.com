import nomvLogo from '../../images/nomvLogo.png'
import nomvPic from '../../images/nomvPic.jpg'
import vday from '../../images/vday.jpg'

const banner5 = () =>{
    return (
        <header id='home-header'>
            <img id="header-img-1" className='header-img' src={vday} alt="Happy Veterinarians Day" />
            <img id="nomv-logo" className='header-img' src={nomvLogo} alt="Not One More Vet Logo" />
            <img id="header-img-3" className='header-img' src={nomvPic} alt="Help reduce the suicide rate of Veterinarians " />
        </header>
    )
}

export default banner5;