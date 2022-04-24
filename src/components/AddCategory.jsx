
import React, { useState } from 'react'

import PropTypes from "prop-types";


const AddCategory = ({ addCategory }) => {
    
    const [inputValue, setInputValue] = useState("");

    const handleOnChangeInput = (e) => {
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(inputValue);
        setInputValue("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={inputValue}
        onChange={handleOnChangeInput}
        />
        </form>
        );
    }

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired,
}
export default AddCategory;