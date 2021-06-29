import React from 'react'
import nomvLogo from '../images/nomvLogo.png'
import alsLogo from '../images/alsLogo.png'
import vFoundationLogo from '../images/vFoundationLogo.jpg'
import worldVetsLogo from '../images/worldVetsLogo.jpg'
import ocraLogo from '../images/ocraLogo.png'
class HomeHeader extends React.Component {
    state = {
        logos: [
            {
                src: nomvLogo,
                key: 'nomv-logo'
            },
            {
                src: alsLogo,
                key: 'als-logo'
            },
            {
                src: vFoundationLogo,
                key: 'v-foundation-logo'
            },
            {
                src: worldVetsLogo,
                key: 'world-vets-logo'
            },
            {
                src: ocraLogo,
                key: 'ocra-logo'
            }
        ],
        count: 0,
    }

    componentDidMount(){
        this.myInterval = setInterval(() => {
            if(this.state.count === 4){
                this.setState({count: 0})
            }else{
            this.setState({
                count: this.state.count + 1
            })}
        }, 1900)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
    
    
    render(){
        return(
            <header id='home-header'>
                <img id="header-img-1" className='header-img' src="https://images.unsplash.com/photo-1505814079773-a76e8dbb4204?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGN5Y2xpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                <img id={this.state.logos[this.state.count].key} className='header-img' src={this.state.logos[this.state.count].src} alt="" />
                <img id="header-img-3" className='header-img' src="https://picsum.photos/202" alt="" />
            </header>
        )
    }
    
}

export default HomeHeader;