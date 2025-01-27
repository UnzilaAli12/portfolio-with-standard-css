import React from 'react'
import styles from '@/app/About/about.module.css';
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer";

const Expertise = () => {
  return (
    <div>
        <Header/>
    <div className={styles.Expertise}>
      <h2>Expertise</h2> <p>•	Graphic Designing <br />
•	Typescript/ Javascript <br />
•	HTML <br />
•	CSS <br />
•	Next.JS <br />
•	Amazon <br />
•	EBay <br />
•	Shopify <br />
</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Expertise