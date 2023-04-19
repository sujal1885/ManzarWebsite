import { Component } from "react";
import "./header.css";
import rcoemlogo from "../assets/rcoemLogo.png";
import { Link } from "react-router-dom";

class Header extends Component{

    state ={ clicked:false};
    handleClick = () => {
        this.setState( {clicked:!this.state.clicked})
    }
    
    render(){
        return (
            <>

                <header>
                    <Link to="/" style={{color:'white',textDecoration:'none'}}>
                    <div >
                        <img src={rcoemlogo} alt="" />
                        <p>Shri Ramdeobaba College <br/>  Of Engineering and Management</p>
                    </div>
                    </Link>
                    <div>
                        <ul className={this.state.clicked ? "ul active" : "ul"}>
                            <Link to="/" style={{color:'white',textDecoration:'none'}}><li>Home</li></Link>
                            <Link to="/About" style={{color:'white',textDecoration:'none'}}><li>About</li></Link>
                            <Link to="/Achievements" style={{color:'white',textDecoration:'none'}}><li>Achievements</li></Link>
                            <Link to='/faculty' style={{color:'white',textDecoration:'none'}}><li>Faculty</li></Link>
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