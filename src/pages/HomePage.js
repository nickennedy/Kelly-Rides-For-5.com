import React from 'react'
import HomeHeader from '../components/HomeHeader'
import NavBar from '../components/NavBar'
import CharitiesList from '../components/CharitiesList'
class HomePage extends React.Component{
    render(){
        return(
            <>
                <HomeHeader/>
                <NavBar/>
                <div id="charities-container">
                    <CharitiesList/>
                </div>
            </>
        )
    }
}

export default HomePage;