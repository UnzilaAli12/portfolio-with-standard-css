import React from 'react'
import styles from '@/app/About/about.module.css';
import Link from 'next/link';
import Image from 'next/image'



const Hero = () => {
    return (
      <div>
<section className={styles.Hero}>
    <div className='container' >
    <h1>Unzila Ali </h1>
  
<Image src="/1.jfif" alt="Profile Picture" width={200} height={200}/>
  <h2>Frontend Developer and Graphic Designer </h2> 
  
  <p>
  I am someone who likes setting goals and can handle lots of tasks at once. I can adapt to different situations and I am good at talking through problems and finding solutions. I learn quickly and being outgoing helps me work well in teams. I can guide and lead people by understanding their points of view. In my studies in International Relations, I have learned about global trends, which gives me an edge in understanding what is happening worldwide. On top of that, I know graphic design, so I can help businesses make their visuals look great. I am a friendly team player who can bring a mix of learning and practical skills to get things done effectively.
</p> 
  </div>
  <div className={styles.button} >
  <Link href="/Education" target="_blank" ><button className={styles.button} > 
  <h4> Education </h4></button></Link>
  <Link href="/Expertise" target="_blank" ><button className={styles.button} > 
  <h4> Expertise </h4></button></Link>
  <Link href="/Skills" target="_blank" ><button className={styles.button} > 
  <h4> Skills </h4></button></Link>
  </div>
</section>
    </div>
  );
};

export default Hero;
