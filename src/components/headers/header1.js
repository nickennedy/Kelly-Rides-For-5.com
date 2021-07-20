import worldVetsLogo from '../../images/worldVetsLogo.jpg'
import wvGroup from '../../images/wvGroup.jpg'
import puppy from '../../images/puppy.png'

const banner1 = () =>{
    return (
        <header id='home-header'>
            <img id="wv-group-photo" className='header-img' src={wvGroup} alt="world vets group" />
            <img id="world-vets-logo" className='header-img' src={worldVetsLogo} alt="world vets" />
            <img id="kelly-puppy" className='header-img header-img-3' src={puppy} alt="kelly holding a puppy" />
        </header>
    )
}

export default banner1;