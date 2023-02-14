import React from "react";
import MyNavbar from "./components/Navbar";
import MyCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function App() {
    return (
        <div>
            <MyNavbar />
            <MyCarousel />
            <Body />
            <Footer />
        </div>
    )
}