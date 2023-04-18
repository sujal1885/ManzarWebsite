import React from "react";
import Header from '../components/Header'
import Carousel from "../components/Carousel";
import HOD from "../components/HOD"
import Footer from "../components/Footer";

function Homepage(){
    return(
        <>
            <Header />
            <Carousel />
            <HOD />
            <Footer />
        </>
    )
}

export default Homepage