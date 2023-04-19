import React from "react";
import './faculty.css'
import borikar from '../assets/borikar.jpg'


function Faculty2() {
    return (
        <>
            <div className="faculty-content">
                <div className="faculty-head">
                    <div id="faculty-head-info">
                        <h4 >Dr. Dilipkumar Borikar</h4>
                        <p>⭐  Assistant professor</p>
                        <p>📆  30 Dec 1976.</p>
                        <p>💼  21 years</p>
                    </div>
                    <div id="faculty-head-box">
                        <img src={borikar}
                            alt="hod" className="img" />

                        <div><a href="https://in.linkedin.com/in/shakuntaleya"
                            target="_blank" className="l1" style={{textDecoration:'none',color:'black',}}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                                alt="linkedin" height="45px" width="45px" className="linkedin" />
                            D.A. Borikar
                        </a></div>
                        <div><a href="mailto:borikarda@rknec.edu" target="_blank" className="l2" style={{textDecoration:'none',color:'black',}}> <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" 
                            alt="gmail" height="35px" width="45px" className="gmail" />
                            borikarda@rknec.edu
                        </a></div>
                    </div>
                </div>
                {/* "mailto:sujalagrawalgondia.com" */}

                <div id="qualification">
                    <h1>
                        🎓 Graduation
                    </h1>
                    <p>
                        D.A. Borikar is an accomplished individual with a Bachelor of Engineering in Computer Technology,
                        a Master of Technology in Computer Technology, and a Doctor of Philosophy in Computer Science and Engineering.
                        His academic background demonstrates his expertise in these fields and reflects his dedication to learning
                        and professional growth. His achievements are a testament to his hard work and commitment to excellence.</p>


                </div>
                <br />
                <div id="achievement">
                    <h1>
                        🏆 Achievements / Awards
                    </h1>

                    <p>    Institute Silver Medal of Indian Institute of Technology, Kharagpur for being the Best Student of M. Tech. of
                        School of Information Technology during 2007-2009.</p>


                </div>
                <br />
                <div id="spec">
                    <h1>
                        🖥️ Specialization
                    </h1>

                    <p>   Data Structures and Algorithms, Database Systems, Distributed Databases, Software Engineering, Digital
                        Image Processing Course Information and ACM ICPC Activity.
                    </p>


                </div>
            </div>
        </>
    )
}

export default Faculty2