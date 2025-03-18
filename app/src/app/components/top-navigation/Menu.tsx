'use client';

import Image from 'next/image';
import Link from 'next/link'
import { useState} from 'react';
import styles from './topNavigation.module.css';

export default function Menu() {
    const [open, setOpen] = useState(false); // statevariable

    return (
        <div className={styles.menuContainer}>
        <Image 
            src='/menu.svg'      
                alt=""
                width={36} 
                height={36}
                className={styles.menuIcon}
                onClick={() => setOpen((prev) => !prev)}
            />  {open && (
                    <div className={styles.dropdownMenu}>
                        <Link href="#">Newsletter</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">About</Link>
                        <Link href="./cart">Cart</Link>
                    </div>
                 )}
        </div>
    )
};