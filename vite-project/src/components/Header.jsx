import { Component } from "react";
import "./header.css";
import rcoemlogo from "../assets/rcoemLogo.png";

class Header extends Component{

    state ={ clicked:false};
    handleClick = () => {
        this.setState( {clicked:!this.state.clicked})
    }
    
    render(){
        return (
            <>

                <header>
                    <div >
                        <img src={rcoemlogo} alt="" />
                        <p>Shri Ramdeobaba College <br/>  Of Engineering and Management</p>
                    </div>
                    <div>
                        <ul className={this.state.clicked ? "ul active" : "ul"}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Achievements</li>
                            <li>Faculty</li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <id id="bar"
                            className={
                                this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                                ></id>
                    </div>
                </header>

            </>
            
            )
            
        }
    }
    export default Header