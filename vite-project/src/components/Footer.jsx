import "./header.css";
import rcoemlogo from "../assets/rcoemLogo.png";    
import footerimg from "../assets/footimg.jpg";

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
                            <li>About</li>
                            <li>Achievements</li>
                            <li>Faculty</li>
                            <li>Alumni</li>
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
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a> 
                </div>
            </div>
            
        </>
    )
} 
export default Footer;