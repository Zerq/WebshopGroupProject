'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logo}>
                <span>ICON</span>
                <span>TEXT</span>
            </div>
            <div className={styles.menu}>
                <Link href="/home">Home</Link>
                <Link href="/home">About</Link>
                <Link href="/home">Contact</Link>
            </div>
            <div className={styles.}>>
                <Link href="/cart">🛒</Link>      
            </div>
        </nav>
    );
};

export default Navbar;