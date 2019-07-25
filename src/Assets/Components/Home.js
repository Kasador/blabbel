import React from 'react';
import Background from '../Images/main-background.png';

function Home() {
    return (
        <div className="Home">
            <img src={Background} alt="backgroud art" className="MainBackground" />
            <div>
                <div className="HomeHeader">
                    <h1>Welcome to Blabbel</h1>
                    <p>Start chatting now with random strangers for free.</p>
                    <button>Chat Now</button>
                </div>
            </div>
        </div>
    );
}

export default Home;