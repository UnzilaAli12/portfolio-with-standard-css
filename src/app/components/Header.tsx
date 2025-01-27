import React from 'react'
import Link from 'next/link';
import styles from '@/app/About/about.module.css';


const Header = () => {
      return (

        <header className={styles.header}>
<div >

<nav> 
<ul className={styles.navList}>
    <li className={styles.navItem}><Link href="/Home" className={styles.link} target='block'>Home</Link> </li>
    <li className={styles.navItem}><Link href="/About" className={styles.link} target='block'>About</Link> </li>
    <li className={styles.navItem}><Link href="/Contact" className={styles.link} target='block'>Contact</Link> </li>
</ul>
</nav>
    </div>
</header>
      );

      };

      export default Header;

