import React from 'react'
import HomeHeader from '../components/HomeHeader'
import NavBar from '../components/NavBar'
import CharitiesList from '../components/CharitiesList'
import Footer from '../components/Footer'
import KellysWhy from '../components/KellysWhy'
import theFive from '../images/theFive.png'
import goFundMe from '../images/gofundme.png'
class HomePage extends React.Component{
    render(){
        return(
            <>
                <HomeHeader/>
                <NavBar/>
                <div id="main-container">
                    <KellysWhy/>
                    <div id="charities-container" className="card blurred-box">
                        <div className="title-background">
                            <img src={theFive} id="charity-container-title" alt="The Five Causes"/>
                        </div>
                        <CharitiesList/>
                    </div>
                </div>
                
                <Footer/>
            </>
        )
    }
}

export default HomePage;