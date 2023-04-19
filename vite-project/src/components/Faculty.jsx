import "./faculty.css";
import avinash from "../assets/avinash.png"
import borikar from "../assets/borikar.jpg"
import abhijeet from "../assets/Abhijeet.jpg"
import chandak from "../assets/chandak.jpg"
import './facultyB.css'

function Faculty (){
    return (
        <> 
        <div className="headeri">Faculty</div>

            <div className="squircle">
                <div className="squircle1">
                    <img src={avinash} alt="image description"/>
                </div>
                <div className="details">
                    <div className="name">Dr.Avinash Agrawal</div>
                    <div className="designation">HOD</div>
                </div>
                <div className="btn">Check Profile</div>
            </div>

            <div className="squircle">
                <div className="squircle1">
                    <img src={borikar} alt="image description"/>
                </div>
                <div className="details">
                    <div className="name">Dr.Dilipkumar Borikar</div>
                    <div className="designation">Professor</div>
                </div>
                <div className="btn">Check Profile</div>
            </div>

            <div className="squircle">
                <div className="squircle1">
                    <img src={abhijeet} alt="image description"/>
                </div>
                <div className="details">
                    <div className="name">Dr.Abhijeet Raipurkar</div>
                    <div className="designation">Professor</div>
                </div>
                <div className="btn">Check Profile</div>
            </div>

            <div className="squircle" style={{marginBottom:'100px'}}>
                <div className="squircle1">
                    <img src={chandak} alt="image description"/>
                </div>
                <div className="details">
                    <div className="name">Dr.Manoj Chandak</div>
                    <div className="designation">Professor</div>
                </div>
                <div className="btn">Check Profile</div>
            </div>


        
        </>
    )
} 
export default Faculty;