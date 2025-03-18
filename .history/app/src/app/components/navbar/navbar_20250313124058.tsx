'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={Navb}>
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

  export default Navbar;