import React from "react";
import './faculty.css'

function Faculty4() {
    return (
        <>
            <div className="faculty-content">
                <div className="faculty-head">
                    <div id="faculty-head-info">
                        <h4 class="info">Dr. Manoj Chandak</h4>
                        <p>
                            ⭐  Dean Academics
                        </p>
                        <p>📆  23 Jul 1969.</p>
                        <p>💼  25 years</p>
                    </div>
                    <br />
                    <div id="faculty-head-box">
                        <img src="http://www.rknec.edu/Faculty/UserPhotos/chandakmb/DR.%20M.%20B.%20CHandak%20(5).JPG"
                            alt="hod" class="img" />

                        <div><a href="https://in.linkedin.com/in/dr-manoj-b-chandak-ph-d-cse-6390b121"
                            target="_blank" class="l1"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                alt="linkedin" height="45px" width="45px" class="linkedin" />
                                M.B. Chandak
                        </a></div>
                        <div><a href="mailto:chandakmb@rknec.edu" target="_blank" class="l2"> <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                            alt="gmail" height="35px" width="45px" class="gmail" />
                            chandakmb@rknec.edu
                        </a></div>

                    </div>
                </div>

                <div id="qualification">
                    <h1>
                          🎓 Graduation
                    </h1>

                      <p>  Chandak sir completed his schooling from School Of Scholars, Nagpur. His academic achievements are
                        not specified, and has demonstrated leadership qualities and an interest in extracurricular
                        activities. Chandak sir's educational background at this institution reflects his formative years which have
                        played a role in shaping his values and personal growth.</p>


                </div>
                <br />
                <div id="achievement">
                    <h1>
                           🏆 Achievements / Awards
                    </h1>

                    <p>    SECOND MERIT IN B.E., FIRST MERIT IN M.E</p>


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

export default Faculty4