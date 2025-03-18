'use client';

import Link from 'next/link';
import styles from './navbar.module.css';
import {useState} from "react"


export default function Navbar () {
    const hamburgermenu = () => {
        const [open, setOpen] = useState(false)
    } 

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logo}>
                <Link href="/">WEBSHOPPEN</Link>
            </div>
            <div className={styles.menu}>
                <Link href="#">Newsletter</Link>
                <Link href="#">Contact</Link>
                <Link href="#">About</Link>
            </div>
            <div className={styles.icons}>
                <Link href="/cart">🛒</Link> 
                src="/.png" 
                    alt="Menu" 
                    width={28} 
                    height={28} 
                    className={styles.hamburgerIcon} 
                    onClick={() => setOpen(!open)}
            </div>
        </nav>
    );
};

