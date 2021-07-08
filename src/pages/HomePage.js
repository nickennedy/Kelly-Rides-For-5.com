import React from 'react'
import HomeHeader from '../components/HomeHeader'
import NavBar from '../components/NavBar'
import CharitiesList from '../components/CharitiesList'
import Footer from '../components/Footer'
import KellysWhy from '../components/KellysWhy'
class HomePage extends React.Component{
    render(){
        return(
            <>
                <HomeHeader/>
                <NavBar/>
                <KellysWhy/>
                <div id="charities-container">
                    <CharitiesList/>
                </div>
                <Footer/>
            </>
        )
    }
}

export default HomePage;