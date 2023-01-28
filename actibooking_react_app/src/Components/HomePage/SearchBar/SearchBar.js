import { useState } from "react";
import styles from "./SearchBar.module.css";
import { BiSearchAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState(null)

    const searchValueHandler = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <>
            <input className={styles.searchBar} maxLength={50} value={searchValue} onChange={searchValueHandler} placeholder="Search Courses..."/>
            <BiSearchAlt size={40} className={styles.searchIcon}/>
            {searchValue && <CgClose size={25} className={styles.closeIcon} onClick={() => setSearchValue('')}/>}
        </>
    )
}

export default SearchBar;