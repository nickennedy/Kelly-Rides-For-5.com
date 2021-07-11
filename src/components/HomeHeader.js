import React from 'react'
import nomvLogo from '../images/nomvLogo.png'
import alsLogo from '../images/alsLogo.png'
import vFoundationLogo from '../images/vFoundationLogo.jpg'
import worldVetsLogo from '../images/worldVetsLogo.jpg'
import ocraLogo from '../images/ocraLogo.png'
import kellyOnBike from '../images/kellyOnBike.png'
import kellyWithSign from '../images/kellyWithSign.jpg'
import kellysBike from '../images/kellysBike.png'
import jersey5 from '../images/jersey5.jpg'
import kellyWV from '../images/kellyWV.JPG'
import puppy from '../images/puppy.png'
import worldVetsPic from '../images/worldVetsPic.jpg'
import kellysFriends from '../images/kellysFriends.jpg'
import kellyMountain from '../images/kellyMountain.jpg'
import mountain from '../images/mountain.jpg'
class HomeHeader extends React.Component {
    state = {
        kellysPics: [
            {
                src: kellyWV,
                key: 'kelly-img4'
            },
            {
                src: kellyWithSign,
                key: 'kelly-img1'
            },
            {
                src: kellyOnBike,
                key: 'kelly-img2'
            },
            {
                src: jersey5,
                key: 'kelly-img5'
            },
            
            {
                src: kellysBike,
                key: 'kelly-img3'
            },
        ],

        pics: [
            {
                src: worldVetsPic ,
                key: 'pic1'
            },
            {
                src: mountain,
                key: 'pic2'
            },
            {
                src: kellysFriends,
                key: 'pic3'
            },
            {
                src: kellyMountain,
                key: 'pic4'
            },
            {
                src: puppy,
                key: 'pic5'
            },


        ],

        logos: [ 
            {
                src: worldVetsLogo,
                key: 'world-vets-logo'
            },
            {
                src: alsLogo,
                key: 'als-logo'
            },
            {
                src: ocraLogo,
                key: 'ocra-logo'
            },
            
            {
                src: vFoundationLogo,
                key: 'v-foundation-logo'
            },
            {
                src: nomvLogo,
                key: 'nomv-logo'
            }
        ],
        count: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.count === 4) {
                this.setState({ count: 0 })
            } else {
                this.setState({
                    count: this.state.count + 1
                })
            }
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }


    render() {
        return (
            <header id='home-header'>
                <img id="header-img-1" className='header-img' src={this.state.kellysPics[this.state.count].src} alt="kelly riding his bike" />
                <img id={this.state.logos[this.state.count].key} className='header-img' src={this.state.logos[this.state.count].src} alt="" />
                <img id="header-img-3" className='header-img' src={this.state.pics[this.state.count].src} alt="" />
            </header>
        )
    }

}

export default HomeHeader;