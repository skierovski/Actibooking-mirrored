import styles from "./SearchBar.module.css";
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const SearchBar = () =>{
    return(
        <>
        <BiSearchAlt size={50} className={styles.searchIcon}/>
        <input className={styles.searchBar} maxLength={50} placeholder="Search..."/>
        <HiOutlineLocationMarker size={50} className={styles.locationIcon}/>
        </>
    )
}

export default SearchBar;