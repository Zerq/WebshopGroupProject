'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';


export default function Navbar () {
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
            <div className={styles.icons}>
                <Link href="/cart">🛒</Link>      
            </div>
        </nav>
    );
};

