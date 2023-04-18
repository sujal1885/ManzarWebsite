import React from "react"
import './carousel.css'
import core from '../assets/core.jpg'
import dataScience from '../assets/dataScience.jpg'
import cyber from '../assets/cyber.jpg'
import aiml from '../assets/aiml.jpg'


function Carousel() {
    return (
        <>
            <div className="Home">
                <div className="wrapper">
                    <div className="outer">
                        <div className="card" style={{'--delay':'-1'}}>
                            <div className="content">
                                <div className="img"><img src={core} alt="core" /></div>
                                <div className="details">
                                    <span className="name">CSE Core</span>
                                    <p>The greatest branch</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{'--delay':'0'}}>
                            <div className="content">
                                <div className="img"><img src={dataScience} alt="" /></div>
                                <div className="details">
                                    <span className="name">Data Science</span>
                                    <p>Chaman chutiya</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{'--delay':'1'}}>
                            <div className="content">
                                <div className="img"><img src={cyber} alt="" /></div>
                                <div className="details">
                                    <span className="name">Cyber Security</span>
                                    <p>Mahachutiya</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{'--delay':'2'}}>
                            <div className="content">
                                <div className="img"><img src={aiml} alt="" /></div>
                                <div className="details">
                                    <span className="name">AIML</span>
                                    <p>Akhand chutiya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Carousel