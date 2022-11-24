import styles from "./SearchBar.module.css";
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () =>{
    return(
        <>
        <BiSearchAlt size={50} className={styles.searchIcon}/>
        <input className={styles.searchBar} maxLength={50} placeholder="Search..."/>
        </>
    )
}

export default SearchBar;