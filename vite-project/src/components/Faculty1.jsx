import React from "react";
import './faculty.css'
import avinash from '../assets/avinash.png'

function Faculty1() {
    return (
        <>
            <div className="faculty-content">
                <div className="faculty-head">
                    <div id="faculty-head-info">
                        <h4 >Avinash Agrawal</h4>
                        <p>⭐  Head of Department</p>
                        <p>📆  15 May 1977.</p>
                        <p>💼  23 years</p>
                    </div>
                    <div id="faculty-head-box">
                        <img src={avinash}
                            alt="hod" className="img" />
                        <div>
                            <a href="https://in.linkedin.com/in/avinash-agrawal-28a748102?original_referer=https%3A%2F%2Fwww.google.com%2F" style={{textDecoration:'none',color:'black',}}
                                target="_blank" className="l1"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                    alt="linkedin" height="45px" width="45px" className="linkedin" />
                                Avinash Agrawal
                            </a>
                        </div>
                        <div>
                            <a href="mailto:agrawalaj@rknec.edu" target="_blank" className="l2" style={{textDecoration:'none',color:'black'}}> <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                                alt="gmail" height="35px" width="45px" className="gmail" />
                                agrawalaj@rknec.edu
                            </a>
                        </div>
                    </div>
                </div>
                

                <div id="qualification">
                    <h1>
                        🎓 Graduation
                    </h1>

                    <p>   Avinash Agrawal is an accomplished individual with a Bachelor of Engineering in Computer Technology,
                        a Master of Technology in Computer Technology, and a Doctor of Philosophy in Computer Science and Engineering.
                        His academic background demonstrates his expertise in these fields and reflects his dedication to learning
                        and professional growth. His achievements are a testament to his hard work and commitment to excellence.</p>


                </div>
                <br />
                <div id="achievement">
                    <h1>
                        🏆 Achievements / Awards
                    </h1>

                    <p>    Received "Distinguished Associate Professor" award by CSI Mumbai Chapter in 2017 at IIT Mumbai.</p>


                </div>
                <br />
                <div id="spec">
                    <h1>
                        🖥️ Specialization
                    </h1>

                    <p>   Information Retrieval, NLP, Pattern Recognition Compiling for High Performance Architecture, Language
                        Processors, Artificial Intelligence, Theoretical Computation, Mobile Application Design
                    </p>


                </div>
            </div>
        </>
    )
}

export default Faculty1
