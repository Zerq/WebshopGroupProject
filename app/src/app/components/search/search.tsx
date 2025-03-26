'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Product } from '../../types';
import { Products } from '../../actions';
import styles from './search.module.css'; 


// Debounce Utility
function debounce(myfunc: (...args: any[]) => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => myfunc(...args), delay);
  };
}

// Search
export default function Search() {
  const [userInput, setUserInput] = useState('');
  const [matchingProducts, setMatchingProducts] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const debouncedProductSearch = debounce(async (query: string) => {
    
    const trimmedQuery = query.trim();
   
    if (!trimmedQuery) {
      setMatchingProducts([]);
      setIsDropdownVisible(false);
      return;
    }

    // deb-search triggered -> API fetching
    const debouncedSearch = Products.GetProductBySearch(trimmedQuery); 
    const data = await debouncedSearch.fetch(); 
    const results: Product[] = data.products || []; // 
    //making search results case insensitive
    const caseInsensitiveMatching = results.filter(p =>
      p.title.toLowerCase().includes(trimmedQuery.toLowerCase())
    );
    setMatchingProducts(caseInsensitiveMatching);
    setIsDropdownVisible(true); //
  }, 1000);



  // BBB Handler for input in the searchbox
  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setUserInput(inputValue);
    debouncedProductSearch(inputValue);
    if (!inputValue) {
      // Hiding the dropdown right away so closes/rerender
      setIsDropdownVisible(false);
    }
  }

  // Handle Form-Submit
  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = userInput.trim();
    const params = new URLSearchParams(searchParams.toString());
    
    if (!trimmed) {
      params.delete('q');
    } else {
      params.set('q', trimmed);
    }
    router.push(`${pathname}?${params.toString()}`);
    setIsDropdownVisible(false);

  }

  // Handle dropdown produktval
  function handleDropdownProductSelction(prod: Product) {
    // Go to the product detail page for the selected suggestion
    router.push(`/products/${prod.id}`);
    setIsDropdownVisible(false);
  }



  // Handle dropdown-seeMoreResults
  function handleSeeMoreResults() {
    setIsDropdownVisible(false);
  }

  return (
    <div className={styles.searchContainer}>
        <div className={styles.inputOuterWrapper }> 
            <div className={styles.inputInnerWrapper}>
                <form onSubmit={handleSearchSubmit} className={styles.searchbox}>
                    <input
                    type="text"
                    value={userInput}
                    onChange={handleSearchInput}
                    placeholder="Search..."
                    className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>
                    🔍
                    </button>
                </form>
            </div>
        </div>
      {isDropdownVisible && (
        <ul className={styles.dropdownContainer}>
          {matchingProducts.length > 0 ? (  
            <>  
              {matchingProducts.slice(0, 8).map(prod => (
                <li
                    className={styles.dropdownList}
                    key={prod.id}
                    onMouseDown={() => handleDropdownProductSelction(prod)}   // better to use than OnEven since flicker
                >
                  {prod.title} 
                </li>
              ))}
                <li
                    className={`${styles.liveSeachItem} ${styles.seeMoreResults}`}
                    onMouseDown={handleSeeMoreResults}
                >
                <span>Show more results</span>
              </li>
            </>
          ) : (
            <li className={styles.noResult}>No result</li>
          )}
        </ul>
      )}
    </div>
  );
}
