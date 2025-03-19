'use client';

import Link from 'next/link';
import styles from './topNavigation.module.css';

import Menu from './Menu';
import Theme from './Theme'
import SearchBar from './SearchBar';
import { useCart } from "../../generalprovider"
import { useEffect } from 'react';


export default function TopNavigation() {
    const { cartItems } = useCart();

    useEffect(() => {
        console.log("cartItems updated:", cartItems);
    }, [cartItems]);
    return (
        <nav className={styles.topNavigationContainer}>
            <div className={styles.siteLogo}>
                <Link href="/">WEBSHOPPEN</Link>
            </div>


            {/* MOBILE SCREENS  */}
            <div className={styles.mobileView}>
                <div>
                    <Theme />
                    <Menu />
                </div>
            </div>


            {/* LAPTOP SCREENS  */}
            <div className={styles.tabletView}>
                <div>
                    <SearchBar />
                    <Theme />
                </div>
            </div>

            {/* DESKTOPSCREENS */}
            <div className={styles.desktopView}>
                <div className={styles.navLinks}>
                    <Link href="/">Newsletter</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <SearchBar />
                <Theme />
                <div className={styles.shoppingcart}>
                    <Link href="/cart">🛒</Link>
                    <span className={styles.cartCount}>
                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                </div>
            </div>
        </nav>
    )
}







{/*
        
                <HamburgerMenu />
            </div>

            "DESKTOP" SCREENS 
            <div className={styles.navbarContainerDesktop}> 
                <div className={styles.siteLogo}>
                    <Link href="/">WEBSHOPPEN</Link>
                </div>
                <div className={styles.links}>
                <Link href="#">Newsletter</Link>
                <Link href="#">Contact</Link>
                <Link href="#">About</Link>
                </div>
                <div className={styles.icons}>
                <Link href="/cart">🛒</Link>
                </div>
            </div>
        </nav>  
    )
}

*/}




