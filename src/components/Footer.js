import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import "../index.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="links">
                <a href="www.facebook.com"> <FaFacebook /></a>
                <a href="www.twitter.com"><FaTwitter /></a>
                <a href="www.instagram.com"><FaInstagram /></a>
            </div>
            <p className="copyright"> Okello Thomas @2023 All rights Reserved!</p>
        </footer>
    )
}