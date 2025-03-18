'use client';

import Link from 'next/link';
import styles from './navbar.module.css';


export default function Navbar () {
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
            <iv className={styles.icons}>
                <Link href="/cart">🛒</Link> 
                <Image src="/menu.png"</Image>

            </div>
        </nav>
    );
};

