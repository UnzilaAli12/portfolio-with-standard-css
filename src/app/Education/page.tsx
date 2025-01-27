import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from "../About/about.module.css";

const page = () => {
  return (
    <div>
<div>
<Header/>
</div>
    <div className={styles.Education}>
      <h1>My Education </h1>
        <p>
•	GIAIC:Currently studying Certified Cloud Applied Generative Artificial Intelligence at Governor House Sindh to become Full stack AI Engineer <br />
•	Master’s in International Relations (IR): (1st Division), University of Karachi. (2020-2022). <br />
•	Bachelor of Commerce:(1st Division), Government College of Commerce and Economics Karachi (affiliated with University of Karachi). (2017-2019). <br />
•	Intermediate: Pre-medical (Grade C), Govt. Degree College for Women Nazimabad, Karachi. (2015-2017). <br />
•	Matriculation: (Grade A), White Rose Grammar School, Karachi. (2012-2014). <br />
</p> 
    </div>
    <Footer/>
    </div>
  )
}

export default page
