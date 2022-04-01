import React from 'react'


const SearchBar = ({ handleSubmit, handleChange}) => {

    // const [searchInput, setSearchInput] = useState('')

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(searchInput);
    // }

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
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;