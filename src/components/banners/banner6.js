import orchard from '../../images/orchard.jpeg'
import blueJersey from '../../images/blueJersey.jpg'
import tealJersey from '../../images/tealJersey.jpg'

const banner6 = () =>{
    return (
        <header id='home-header'>
            <img id="blue-jersey-img" className='header-img' src={blueJersey} alt="Happy Veterinarians Day" />
            <img id="orchard-img" className='header-img' src={orchard} alt="Not One More Vet Logo" />
            <img id="teal-jersey-img" className='header-img' src={tealJersey} alt="Help reduce the suicide rate of Veterinarians " />
        </header>
    )
}

export default banner6;