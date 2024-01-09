// Write all the code here

import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";
const About = () => {
 return (
 <section className="about">
 <main>
 <h1>About Us</h1>
 <article>
 <h4>Burger Shop</h4>
 <p>You're welcome to our Burger Shop. The place for the most tasty burgers on the entire 
neighbourhood.</p>
 <p>Explore the various types of food and burgers. Click below to see the menu</p>
 <Link to="/">
 <RiFindReplaceLine />
 </Link>
 </article>
 <div>
 <h2>Founder</h2>
 <article>
 <div>
 <img src={me} alt="Founder" />
 <h3>Nilson</h3>
 </div>
 <p>I am Nilson, the founder of Burger Shop. Affiliated to God Taste...</p>
 </article>
 </div>
 </main>
 </section>
 );
};
export default About;