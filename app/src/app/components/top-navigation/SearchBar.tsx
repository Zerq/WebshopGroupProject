'use client';

import { useState } from 'react';
import styles from './topNavigation.module.css';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Search term:', searchQuery); // check done, works 
       
       // CODELOGIC INPUT LATER HERE - USE A SEARCH FILTER / CHECK KARLAXEL CODE FIRST 
    };
    return (
        <form 
            className={styles.searchBarOuterWrapper}
            onSubmit={handleSubmit}
        >
            <div className={styles.searchBarInnerWrapper}>
            <button 
                className={styles.searchButton}
                type="submit" 
            >
                🔍
            </button>
            <input 
                className={styles.searchInput}
                type="text" 
                placeholder="What are you looking for?" 
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            </div>
        </form>
    );
}