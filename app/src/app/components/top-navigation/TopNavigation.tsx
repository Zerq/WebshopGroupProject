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
        <div className={styles.mobileViewContainer}>
            <Link className={styles.siteLogo} href="/">webshoppen</Link> 
            <Menu/>
        </div>


        {/* TABLET SCREENS  */}
        <div className={styles.tabletViewContainer}> 
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
        <div className={styles.desktopViewContainer}> 
            <div className={styles.logoWrapper}> 
                <Link className={styles.siteLogo} href="/">webshoppen</Link> 
            </div>  
                <div className={styles.navLinksWrapper}>
                    <Link href="#">Newsletter</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Contact</Link>           
                <div className={styles.navIconsWrapper}>
            <Theme/>
            <Link href="/cart">🛒</Link>

            </div>
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



