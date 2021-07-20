import React from 'react'
import Header1 from './headers/header1'
import Header2 from './headers/header2'
import Header3 from './headers/header3'
import Header4 from './headers/header4'
import Header5 from './headers/header5'
import Header6 from './headers/header6'
class HomeHeader extends React.Component {
    state = {
        count:3,
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
                <Header1/>
            )
        }
        else if(this.state.count === 1){
            return (
                <Header2/>
            )
        }
        else if(this.state.count === 2){
            return (
                <Header3/>
            )
        }
        else if(this.state.count === 3){
            return (
                <Header4/>
            )
        }
        else if(this.state.count === 4){
            return (
                <Header5/>
            )
        }
        else if(this.state.count === 5){
            return (
                <Header6/>
            )
        }
        
    }

}

export default HomeHeader;