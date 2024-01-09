// Write all the code here

import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Burger Shop</h2>
                <p>Best burgers that you can find.</p>
                <br />
                <em>We appreciate your feedback and suggestions.</em>
                <strong>All rights reserved @burgershop</strong>
            </div>

            <aside>
                <h4>Follow Us</h4>
                <a href="https://youtube.com/abc" alt="Youtube icon"   target="_blank" rel="noopener noreferrer">
                    <AiFillYoutube alt="YouTube" />
                </a>
                <a href="https://instagram.com/abc"  alt="Instagram icon"  target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram alt="Instagram" />
                </a>
                <a href="https://github.com/Alisha1213" alt="Github icon"  target="_blank" rel="noopener noreferrer">
                    <AiFillGithub alt="GitHub" />
                </a>
            </aside>
        </footer>
    );
};

export default Footer;
