import worldVetsLogo from '../../images/worldVetsLogo.jpg'
import wvGroup from '../../images/wvGroup.jpg'
import puppy from '../../images/puppy.png'

const banner1 = () =>{
    return (
        <header id='home-header'>
            <img id="header-img-1" className='header-img' src={wvGroup} alt="group photo" />
            <img id="world-vets-logo" className='header-img' src={worldVetsLogo} alt="world vets logo" />
            <img id="header-img-3" className='header-img' src={puppy} alt="kelly holding a puppy" />
        </header>
    )
}

export default banner1;