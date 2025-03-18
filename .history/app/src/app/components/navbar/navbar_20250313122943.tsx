'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div classname

        /*
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            MyWebshop
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/products" className={styles.link}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  */

  <Link href="/products" className={styles.link}>
  Products
</Link>

  export default Navbar;