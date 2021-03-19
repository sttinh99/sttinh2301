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
                    <p>This is <strong>EarthyBlue</strong>, a free, fully standards-compliant CSS template designed by <Link href="http://templated.co" rel="nofollow">TEMPLATED</Link>. The photos in this template are from <Link href="http://fotogrph.com/"> Fotogrph</Link>. This free template is released under the <Link href="http://templated.co/license">Creative Commons Attribution</Link> license, so you're pretty
              much
              free to do whatever you want with it (even use it commercially) provided you give us credit for it.
              Have
              fun :) </p>
                    <img src='https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/160850607_1384958958518426_865445129359427111_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=A5eARUFQl24AX9l0QrJ&_nc_ht=scontent-sin6-1.xx&oh=80d41714e3f78c8ce6565e4d1814e167&oe=60783219' className="image image-full" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;