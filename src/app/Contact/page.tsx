import React from "react";
import Link from "next/link";
import styles from "../About/about.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
    <div>
      <Header/>
    </div>

      

<div className={styles.contactContainer} >
        <h1>Contact Me</h1>
        <h2> FEEL FREE TO REACH OUT VIA</h2>
        <div className= "form-container" >
          <form>
          <h2>FILL THIS FORM</h2>
<fieldset><section><input type="text" placeholder='Your Name' required className={styles.input} /> </section></fieldset>
<fieldset><section><input type="email" placeholder='Your Email' required className={styles.input} /> </section></fieldset>
<fieldset><section><input type="contact" placeholder='Phone Number' required className={styles.input} /> </section></fieldset>
<fieldset><section><input type="adsress" placeholder='Your Address' required className={styles.input} /> </section></fieldset>
<fieldset><section><textarea placeholder="Your Message" required className={styles.textarea} ></textarea> </section></fieldset>
           
            <button type='submit' className={styles.submitButton} > Submit Now</button> <br/> <h2>OR</h2>
    <h3>OFFICE LOCATION</h3> <p>Office # 105 XYZ Buildig, Karachi, Pakistan</p>
    <h3>OFFICE HOURS</h3> <p>Monday to Friday(11am to 8pm) <br /> Saturday(11am to 5pm) <br />Sunday Off</p> 
    <h3>EMAIL</h3> <p>Unzila@gmail.com</p>
    <h3>CONTACT NO</h3><p> +921234567893</p>
        </form>
        
      </div>

    

</div>
<Footer/>
</div>

  )
}

export default Contact;