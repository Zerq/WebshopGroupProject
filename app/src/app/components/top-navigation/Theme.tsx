'use client';

import { useState } from 'react';
import styles from './topNavigation.module.css';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    
    return (
        <span 
            className={styles.themeToggle}
            onClick={() => setIsDark(!isDark)}
        >
            {isDark ? '☀️' : '🌙'}
        </span>
    );
}