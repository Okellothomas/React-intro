import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function App() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Body />
            <Footer />
        </div>
    )
}