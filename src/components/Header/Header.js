import React, { Component } from 'react';
import './Header.css';

const img ='./assets/images/headerBG.jpg'

class Header extends Component {
    render() {
        return (
            <header className='header' style={{ backgroundImage: `url(${img})` }}>
                <div className='headerContainer'>
                    <h1>Clicky Game!</h1>
                    <h2>Click on all images to win, but don't click the same image more than once!</h2>
                </div>
            </header>
        );
    }
}

export default Header;
