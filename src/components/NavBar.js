import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import rideFor5Logo from '../images/rideFor5Logo.png'

const NavBar = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <div id="nav-container">
            <img id='title-five' src={rideFor5Logo} alt=" Kelly Rides For 5 Logo"/>
            <Nav id="nav-bar">
                <NavItem className="nav-cause">
                    <NavLink className="nav-link" target="_blank" href="https://www.gofundme.com/f/kellys-ride-across-america-for-not-one-more-vet?utm_campaign=p_nacp+share-sheet&utm_medium=email&utm_source=customer">Not One More Vet</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink className="nav-link" target="_blank"  href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fsecure.givelively.org%2Fdonate%2Fworld-vets%2Fride-for-5-fundraiser-for-world-vets&data=04%7C01%7Ckelly.okeefe%40boehringer-ingelheim.com%7Cda5a7191fe4e4fc5bbdd08d945668b23%7Ce1f8af86ee954718bd0d375b37366c83%7C1%7C0%7C637617129714103191%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&sdata=9qkrioH2jaeYHWZUj3NcXtU3tLx%2B5EI9gyeVlq0QmDU%3D&reserved=0">World Vets</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink className="nav-link animate__pulse" target="_blank" href="https://www.alsa-midamerica.org/">ALS Association</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink className="nav-link" target="_blank" href="https://give.ocrahope.org/fundraiser/3330286">Ovarian Cancer Research Alliance</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink className="nav-link" target="_blank" href="https://thevictoryride.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=1927">The V Foundation</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    <i id='menu-icon' className="fas fa-bars"></i>
                </DropdownToggle>
                <DropdownMenu right id="drop-down">
                    <DropdownItem header>Causes</DropdownItem>
                    <DropdownItem><NavLink href="https://www.gofundme.com/f/kellys-ride-across-america-for-not-one-more-vet?utm_campaign=p_nacp+share-sheet&utm_medium=email&utm_source=customer" target="_blank" >Not One More Vet</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fsecure.givelively.org%2Fdonate%2Fworld-vets%2Fride-for-5-fundraiser-for-world-vets&data=04%7C01%7Ckelly.okeefe%40boehringer-ingelheim.com%7Cda5a7191fe4e4fc5bbdd08d945668b23%7Ce1f8af86ee954718bd0d375b37366c83%7C1%7C0%7C637617129714103191%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&sdata=9qkrioH2jaeYHWZUj3NcXtU3tLx%2B5EI9gyeVlq0QmDU%3D&reserved=0" target="_blank" >World Vets</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://www.alsa-midamerica.org/" target="_blank" >ALS Association</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://give.ocrahope.org/fundraiser/3330286" target="_blank" >Ovarian Cancer Research Alliance</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://thevictoryride.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=1927" target="_blank" >The V Foundation</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Follow Kelly</DropdownItem>
                    <DropdownItem> <NavLink href="https://www.facebook.com/KellysRidefor5" target="_blank"><i className="fab fa-facebook-f"></i></NavLink></DropdownItem>
                    <DropdownItem> <NavLink href="https://www.instagram.com/kellyridesfor5/" target="_blank"><i className="fab fa-instagram"></i></NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Shop</DropdownItem>
                    <DropdownItem><NavLink href="https://designlab.jakroo.com/store-front?storeId=SkXKdkeAO" target="_blank">The Kelly's Ride For Five Store!</NavLink></DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem header>The Kelly's Ride For 5 Blog</DropdownItem>
                    <DropdownItem>*** Coming Soon***</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Gallery</DropdownItem>
                    <DropdownItem >Photos</DropdownItem>
                    <DropdownItem>Videos</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Support Page</DropdownItem>
                    <DropdownItem>Thank You's</DropdownItem>
                </DropdownMenu>
        </Dropdown>
            </Nav>
            
        </div>
    )
}

export default NavBar;