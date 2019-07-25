import React from 'react';
import Logo from '../Images/logo.png';

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="LogoWrapper">
                <img src={Logo} alt="logo for blabbel" className="Logo" />
                <span className="HeaderTitle">Blabbel</span>
            </div>
            <div className="Online">
                <span><span id="NumOnline">0</span> online now</span>
            </div>
        </nav>
    );
}

export default Navbar;