import { Component } from "react";
import './search-box.style.css'

const SearchBox = (props) => {
        const { onChangeHandler, placeholder, className } = props;
        return (
            <input 
                className={`search-box ${className}`} 
                type="search" 
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />
        )
}

export default SearchBox