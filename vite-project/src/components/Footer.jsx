import "./header.css";
import rcoemlogo from "../assets/rcoemLogo.png";    
import footerimg from "../assets/footimg.jpg";
import { Link } from "react-router-dom";

function Footer (){
    return (
        <>
            <div className="footer">
                <div className="heading" >
                    <img src={rcoemlogo} alt="" />
                    <p>Shri Ramdeobaba College <br/>  Of Engineering and Management</p>
                </div>
                <div className="content">
                    <div className="important">
                        <h4>Important Links</h4>
                        <ul>
                            <Link to="/About" style={{color:'white',textDecoration:'none'}}><li className="footerli" >About</li></Link>
                            <Link to="/Achievements" style={{color:'white',textDecoration:'none'}}><li className="footerli" >Achievements</li></Link>
                            <Link to="/faculty" style={{color:'white',textDecoration:'none'}}><li className="footerli" >Faculty</li></Link>
                            <Link to="/alumni" style={{color:'white',textDecoration:'none'}}><li className="footerli" >Alumni</li></Link>
                        </ul>
                    </div>
                        <hr />
                    
                    <div className="contact">
                        <h4>Contact Us</h4>
                        <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <h6>Shri Ramdeobaba College <br />  of  Engineering and Management, <br /> Katol Rd, Lonand, Gittikhadan, <br /> Nagpur, Maharashtra 440013</h6>
                        </div>
                        <div>
                        <i class="fa-solid fa-phone"></i>
                        <h6>9607980531/2/3/4/5</h6>
                        </div>
                    </div>
                </div>

                <div className="socialmd">
                        <a href="https://www.instagram.com/rcoem__official/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/school/sri.-ramdeobaba-kamla-nehru-engineering-college-katol-road/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/RCOEM_Official" target="_blank"><i className="fa-brands fa-twitter"></i></a> 
                </div>
            </div>
            
        </>
    )
} 
export default Footer;