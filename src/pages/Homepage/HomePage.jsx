import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';


const query = new URLSearchParams(SearchBar).get('s');

console.log(query)

const HomePage = () => {
    return (
        <div>
            <h1>this is the home page</h1>
            <SearchBar />
        </div>
    )
}

export default HomePage;