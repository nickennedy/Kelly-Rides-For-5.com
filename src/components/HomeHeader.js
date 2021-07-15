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
import Banner1 from './banners/banner1'
import Banner2 from './banners/banner2'
import Banner3 from './banners/banner3'
import Banner4 from './banners/banner4'
import Banner5 from './banners/banner5'
import Banner6 from './banners/banner6'
class HomeHeader extends React.Component {
    state = {
        count: 2,
    }

    changeCount = () => {
        setInterval(() => {
            if (this.state.count === 5) {
                this.setState({ count: 0 })
            } else {
                this.setState({
                    count: this.state.count + 1
                })
            }
        }, 6000)
    }

    componentDidMount() {
        this.changeCount()
    }

    
    componentWillUnmount() {
        clearInterval(this.changeCount)
    }


    render() {
        if(this.state.count === 0){
            return (
                <Banner1/>
            )
        }
        else if(this.state.count === 1){
            return (
                <Banner2/>
            )
        }
        else if(this.state.count === 2){
            return (
                <Banner3/>
            )
        }
        else if(this.state.count === 3){
            return (
                <Banner4/>
            )
        }
        else if(this.state.count === 4){
            return (
                <Banner5/>
            )
        }
        else if(this.state.count === 5){
            return (
                <Banner6/>
            )
        }
        
    }

}

export default HomeHeader;