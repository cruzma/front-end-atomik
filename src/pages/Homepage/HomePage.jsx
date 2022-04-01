import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';





const HomePage = () => {   
    
    const [searchInput, setSearchInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchInput);
    }

    const handleChange =(event) => {
        setSearchInput(event.target.value)
    }


    return (
        <div>
            <h1>this is the home page</h1>
            <SearchBar 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    )
}

export default HomePage;