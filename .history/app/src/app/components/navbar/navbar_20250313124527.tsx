'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>
        <div>
            <span>ICON</span>
            <span>TEXT</span>
        </div>
        <div>
            <link href="/home">
            Home
            </link>
        </div>
        </nav>
    );
};

