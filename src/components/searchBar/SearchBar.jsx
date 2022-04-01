import React, { useState } from 'react'


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchInput);
    }

    return(
        <form onSubmit={handleSubmit} >
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s" 
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;