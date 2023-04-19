import React from "react";
import './faculty.css'
import Abhijeet from '../assets/Abhijeet.jpg'

function Faculty3() {
    return (
        <>
            <div className="faculty-content">
                <div className="faculty-head">
                <div id="faculty-head-info">
                    <h4 >Abhijeet Raipurkar</h4>
                    <p>
                        ⭐  Assistant Professor
                    </p>
                    <p>📆  31 Jul 1982.</p>
                    <p>💼  13 years</p>
                </div>

                <div id="faculty-head-box">
                <img src={Abhijeet}
                    alt="hod" className="img" />

                    <div><a href="https://www.linkedin.com/in/dr-abhijeet-r-raipurkar-ph-d-cse-360b00136"
                        target="_blank" className="l1" style={{textDecoration:'none',color:'black',}}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="linkedin" height="45px" width="45px" className="linkedin" />
                                Abhijeet Raipurkar
                    </a></div>
                    <div><a href="mailto:raipurkarar@rknec.edu" target="_blank" className="l2" style={{textDecoration:'none',color:'black',}}> <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                        alt="gmail" height="35px" width="45px" className="gmail" />
                            raipurkarar@rknec.edu
                    </a></div>
                </div>
                </div>

                            <div id="qualification">
                                <h1>
                                      🎓 Graduation
                                </h1>
                               
                                      <p> Raipurkar Sir received a ME degree in Computer Science and Engineering (CSE) from PRIMTR, Badnera in the year
                                        2000. He also attended KITS, Ramtek and Mathuradas Mohta Science College, Nagpur for his education.</p>


                        </div>
                        <br/>
                            <div id="achievement">
                                <h1>
                                       🏆 Achievements / Awards
                                </h1>

                                <p>
                                      First Merit in SGB Amravati University during M.E. (CSE) programme Year 2013. Best Employee of the Quarter
                                        (Year 2008-09) award in Leansoft Solutions Pvt. Ltd. Nagpur
                                </p>


                            </div>
                            <br/>
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

                        export default Faculty3