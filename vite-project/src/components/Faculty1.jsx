import React from "react";
import './faculty.css'


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
                        <img src="data:image/jpeg;base64,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"
                            alt="hod" className="img" />
                        <div>
                            <a href="https://in.linkedin.com/in/avinash-agrawal-28a748102?original_referer=https%3A%2F%2Fwww.google.com%2F"
                                target="_blank" className="l1"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                    alt="linkedin" height="45px" width="45px" className="linkedin" />
                                Avinash Agrawal
                            </a>
                        </div>
                        <div>
                            <a href="agrawalaj@rknec.edu" target="_blank" className="l2"> <img
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
