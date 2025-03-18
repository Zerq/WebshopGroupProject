'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>
            <div className{}>
                <span>ICON</span>
                <span>TEXT</span>
            </div>
            <div>
                <Link href="/home">Home</Link>
                <Link href="/home">About</Link>
                <Link href="/home">Contact</Link>
            </div>
            <div>
                <Link href="/cart">🛒</Link>      
            </div>
        </nav>
    );
};

export default Navbar;