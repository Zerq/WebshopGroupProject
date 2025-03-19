'use client';

import { useState } from 'react';
import styles from './topNavigation.module.css';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Search term:', searchQuery);
       
       // CODELOGIC INPUT LATER HERE - USE A SEARCH FILTER / CHECK KARLAXEL CODE FIRST 
    };
    return (
        <form 
            className={styles.searchContainer}
            onSubmit={handleSubmit}
        >
            <input 
                className={styles.searchInput}
                type="text" 
                placeholder="Search for products!" 
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button 
                className={styles.searchButton}
                type="submit" 
            >
                🔍
            </button>
        </form>
    );
}