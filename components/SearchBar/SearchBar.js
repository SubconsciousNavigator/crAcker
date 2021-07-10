import React from "react";
import styles from "./Search.module.css";

const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.coin_search}>
      <input {...rest} className={styles.coin_input}></input>
    </div>
  );
};

export default SearchBar;
