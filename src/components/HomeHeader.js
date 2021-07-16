import React from 'react'
import Banner1 from './banners/banner1'
import Banner2 from './banners/banner2'
import Banner3 from './banners/banner3'
import Banner4 from './banners/banner4'
import Banner5 from './banners/banner5'
import Banner6 from './banners/banner6'
class HomeHeader extends React.Component {
    state = {
        count: 0,
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