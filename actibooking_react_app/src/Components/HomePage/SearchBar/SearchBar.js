import { useState } from "react";
import styles from "./SearchBar.module.css";
import { BiSearchAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState(null)

    const searchValueHandler = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
    }

    const searchPhrase = () =>{
        
    }

    return(
        <>
            <input className={styles.searchBar} type="search" maxLength={50} value={searchValue} onChange={searchValueHandler} placeholder="Search Courses..."/>
            <BiSearchAlt size={40} className={styles.searchIcon}  onClick={() => searchPhrase()}/>
        </>
    )
}

export default SearchBar;