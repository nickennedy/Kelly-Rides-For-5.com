import React from 'react'
import HomeHeader from '../components/HomeHeader'
import NavBar from '../components/NavBar'

class HomePage extends React.Component{
    render(){
        return(
            <>
                <HomeHeader/>
                <NavBar/>
            </>
        )
    }
}

export default HomePage;