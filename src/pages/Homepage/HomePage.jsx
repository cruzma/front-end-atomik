import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import ArticleList  from '../../components/articleList/articleList';


const HomePage = () => {   
    
    const [searchInput, setSearchInput] = useState('')
    const [articles, setArticles] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        let searchString = JSON.stringify(searchInput)
        
        fetch(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${searchString}`)
        .then((response) => {
            if (
              // check if response's status is 200
              response.ok &&
              // check if API return data is in JSON format
              response.headers.get("Content-Type").includes("application/json")
            ) {
              return response.json();
            } else {
              throw new Error("something went wrong");
            }
          })
          .then((data) => {
            setArticles(data);
          })
          .catch((err) => {
            console.error(err);
          });

        // event.target.reset();
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
            {/* <ArticleList articles={articles} /> */}
            
            { articles.length === 0 ? <div>Enter in search bar to view articles</div> : <ArticleList articles={articles} /> }
        </div>
    )
}

export default HomePage;