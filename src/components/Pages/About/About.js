import React from 'react';
import { Link } from 'react-router-dom'

import "../About/About.css"

import logo from '../../../images/bg2.jpg'
import about from '../../../images/about.jpg'

function About() {
    return (
        <div className="about">
            <div id="page-wrapper">
                <div id="welcome" className="container">
                    <div className="title">
                        <h2>Welcome to our website</h2>
                    </div>
                    <img src='https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/160850607_1384958958518426_865445129359427111_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=A5eARUFQl24AX9l0QrJ&_nc_ht=scontent-sin6-1.xx&oh=80d41714e3f78c8ce6565e4d1814e167&oe=60783219' className="image image-full" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;