import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const NavBar = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <div id="nav-container">
            <h1 id='title-five'>Kelly Rides For 5</h1>
            <Nav id="nav-bar">
                <NavItem className="nav-cause" >
                    <NavLink href="#">Cause 1</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink href="#" >Cause 2</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink href="#" >Cause 3</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink href="#" >Cause 4</NavLink>
                </NavItem>
                <NavItem className="nav-cause">
                    <NavLink href="#" >Cause 5</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    <i id='menu-icon' className="fas fa-bars"></i>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header>Causes</DropdownItem>
                    <DropdownItem><NavLink href="https://www.v.org/" target="_blank" >The V Foundation</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://www.v.org/" target="_blank" >World Vets</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://www.v.org/" target="_blank" >Not One More Vet</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://www.v.org/" target="_blank" >ALS Association</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="https://www.v.org/" target="_blank" >Ovarian Cancer Research Alliance</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Kelly's Ride For 5 Blog</DropdownItem>
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