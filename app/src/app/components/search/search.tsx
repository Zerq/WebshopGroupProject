'use client';

import { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import styles from '../search/search.module.css';


export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const params = new URLSearchParams(searchParams.toString());

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const trimmed = searchQuery.trim();
    
        if (trimmed.length === 0) {
            params.delete("q");
        } else {
            params.set("q", trimmed);
        }
        
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchWrapper}>
            <input
                id="searchInput"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
                🔍
            </button>
        </form>
    );
}