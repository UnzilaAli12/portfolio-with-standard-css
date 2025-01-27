import React from 'react'
import styles from '@/app/About/about.module.css';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Skills = () => {
  return (
    <div>
        <Header/>
    <div className={styles.skills}>
        <h2> Skills </h2>  <p>•	Time Management <br />
•	Effective Communication <br />
•	Teamwork <br />
•	Problem solving <br />
•	Quick Learner <br />
•	Multi Tasking 
</p>

    </div>
    <Footer/>
    </div>
  )
}

export default Skills