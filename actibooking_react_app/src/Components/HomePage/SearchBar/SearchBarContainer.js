import styles from "./SearchBarContainer.module.css";
import SearchBar from "./SearchBar";

const SearchBarContainer = () =>{

    return(
        <div className={styles.searchBar_container}>
            <SearchBar/>
        </div>
    )
}

export default SearchBarContainer;