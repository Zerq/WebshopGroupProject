'use client';

import Link from 'next/link';
import styles from './topNavigation.module.css';

import Menu from './Menu';
import Theme from './Theme'
import SearchBar from './SearchBar';

import {useState} from "react"
import Image from 'next/image';



export default function TopNavigation () {
    return (  
        <nav className={styles.topNavigationContainer}>
            <div className={styles.siteLogo}>
                <Link href="/">WEBSHOPPEN</Link>
            </div>


        {/* MOBILE SCREENS  */}
        <div className={styles.mobileView}>
            <div> 
                <Theme/>
                <Menu/>
            </div>
        </div>


        {/* LAPTOP SCREENS  */}
        <div className={styles.tabletView}> 
            <div> 
                <SearchBar/>
                <Theme/>
            </div>   
        </div>

         {/* DESKTOPSCREENS */}
            <div className={styles.desktopView}>  
                <div className={styles.navLinks}>
                    <Link href="/">Newsletter</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <SearchBar/>
                <Theme />
                <div>
                    <span className="cart-badge"></span>
                    <Link href="/cart">🛒</Link>
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




