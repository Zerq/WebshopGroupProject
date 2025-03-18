'use client'
/* Runs on serverside expect components that runs client side*/


import Link from 'next/link';
import styles from './topNavigation.module.css';
import Menu from './Menu';
import Theme from './Theme'
import SearchBar from './SearchBar';



export default function TopNavigation () {
    return (  
        <nav className={styles.topNavigationContainer}>
            
        {/* MOBILE SCREENS  */}
        <div className={styles.mobileView}>
            <Link className={styles.siteLogo} href="/">webshoppen</Link> 
            <Menu/>
        </div>


        {/* LAPTOP SCREENS  */}
        <div className={styles.tabletView}> 
            <div className={styles.tabletContainerUno}> 
                <Link className={styles.siteLogo} href="/">webshoppen</Link> 
            </div> 
            <div className={styles.tabletContainerDos}>  
                <SearchBar/>
                <Theme/>
                <Link href="/cart">🛒</Link>
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
                <Theme/>
                <Link href="/cart">🛒</Link>
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



