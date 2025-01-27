import React from "react";
import styles from "../About/about.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
<div>
<div>
<Header/>
</div>

    <div className={styles.aboutcontainer}>
     



      <h1> About Me</h1>
       
        <p>
          I am a Frontend Developer and Graphic Designer passionate about
          creating innovative solutions. With expertise in TypeScript, Next.js,
          and Adobe Suite, I bring both technical and creative skills to the
          table. My background in International Relations enhances my global
          perspective, while my experience as a freelance virtual assistant has
          honed my problem-solving abilities. Currently, I am expanding my
          knowledge in cloud-based AI technologies to become a Full Stack AI
          Engineer.
        </p>

    </div>
    <Footer/>
    </div>
  );
};

export default About;
