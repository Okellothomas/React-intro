import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <div>
                <a href="www.facebook.com"> <FaFacebook /></a>
                <a href="www.twitter.com"><FaTwitter /></a>
                <a href="www.instagram.com"><FaTwitter /></a>
            </div>
            <p> &copy, 2023 All rights Reserved!</p>
        </footer>
    )
}