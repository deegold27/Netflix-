import React,{ SetStateAction, useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link";
//import debounce from 'lodash/debounce';
//import { debounce } from "lodash"



  return (
    <div>
       
<input
      name="searchbar"
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
      //  onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={() => onSearch(searchTerm)}
      />
 {/*     <button  onClick={handleSearch} >Search</button>*/}
      <Link href={`/home/searched?searchTerm=${encodeURIComponent(searchTerm)}`} passHref>
        <button onClick={handleSearch}>Search</button>
      </Link>
       
      
    </div>
  );
  
  }

  export default SearchBar;