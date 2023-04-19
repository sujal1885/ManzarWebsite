import React from "react"
import './carousel.css'
import core from '../assets/core.jpg'
import dataScience from '../assets/dataScience.jpg'
import cyber from '../assets/cyber.jpg'
import aiml from '../assets/aiml.jpg'
import { Link } from "react-router-dom"


function Carousel() {
    return (
        <>
            <div className="Home">
                <div className="wrapper">
                    <div className="outer">
                        <Link to="/About"> 
                        <div className="card" style={{'--delay':'-1'}}>
                            <div className="content">
                                <div className="img"><img src={core} alt="core" /></div>
                                <div className="details">
                                    <span>CSE Core</span>
                                    <p>Core</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to="/About">                        
                        <div className="card" style={{'--delay':'0'}}>
                            <div className="content">
                                <div className="img"><img src={dataScience} alt="" /></div>
                                <div className="details">
                                    <span>Data Science</span>
                                    <p>Specialization</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to="/About">
                        <div className="card" style={{'--delay':'1'}}>
                            <div className="content">
                                <div className="img"><img src={cyber} alt="" /></div>
                                <div className="details">
                                    <span >Cyber Security</span>
                                    <p>Specialization</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to="/About">
                        <div className="card" style={{'--delay':'2'}}>
                            <div className="content">
                                <div className="img"><img src={aiml} alt="" /></div>
                                <div className="details">
                                    <span>AIML</span>
                                    <p>Specialization</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Carousel