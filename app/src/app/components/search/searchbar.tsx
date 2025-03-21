'use client';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void; // i reallty need to do it like this?
  }

import styles from '../search/searchbar.module.css';

export default function SearchBar({ searchQuery, setSearchQuery, handleSubmit}: SearchBarProps) {
    
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
                placeholder="Search ... " 
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)} // lifting state to page.tsx / perhaps should put the searchlogic in own component to keep code cleaner?
            />
            </div>
        </form>
    );
}