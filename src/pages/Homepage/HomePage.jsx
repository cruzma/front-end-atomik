import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import ArticleList  from '../../components/articleList/articleList';
import Pagination from '../../components/pagenation/pagenation';


const HomePage = () => {   

    const [searchInput, setSearchInput] = useState('')
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage] = useState(4)

    

    let searchString = JSON.stringify(searchInput)

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        fetch(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${searchString}`)
        .then((response) => {
            if (
              // check if response's status is 200
              response.ok &&
              // check if API return data is in JSON format
              response.headers.get("Content-Type").includes("application/json") &&

              response.headers.get("Content-Length") > 0
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
        
        
        // fetch(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc`)
        //   .then((response) => {
        //       if (
        //         // check if response's status is 200
        //         response.ok &&
        //         // check if API return data is in JSON format
        //         response.headers.get("Content-Type").includes("application/json")
        //       ) {
        //         return response.json();
        //       } else {
        //         throw new Error("something went wrong");
        //       }
        //     })
        //     .then((data) => {
        //       setArticles(data);
        //     })
        //     .catch((err) => {
        //       console.error(err);
        //     });
      setLoading(false);
      
    }
    const handleChange =(event) => {
        setSearchInput(event.target.value)
    }

    const orderByRelevance = (event) => {
        event.preventDefault();

        fetch(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${searchString}&page=1&orderby=relevance`)
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
    }

    //get current article
    const indexOfLastArticle = currentPage * articlesPerPage
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    
    const getCurrentArticles = () => {
      if(articles.length === 0){
        return []
      } else {
        return articles.data.slice(indexOfFirstArticle, indexOfLastArticle);
      }
    }


    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // if(loading === true){
    //   return (
    //     <div className='flex flex-col w-full items-center min-h-screen bg-[#f2f2f2]'></div>
    //   )
    // } else {
      return (
          <div className='flex min-h-screen flex-col w-full items-center justify-center bg-[#f2f2f2]'>
              <h1 className='text-5xl font-bold mb-4'>Atomik Frontend Test</h1>
              <div className='w-full flex justify-center'>
                  <SearchBar 
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                  />

                  <form onSubmit={orderByRelevance}>
                    { articles.length !== 0 && <button type='submit' className="m-2 rounded px-4 px-4 py-2 font-semibold bg-gray-500 text-gray-100">Mas Relevantes</button>} 
                  </form>
              </div>         
              


              { articles.length === 0 ? <div>Ingrese en la barra de búsqueda para ver artículos</div> : <div>encontrado un total de {articles.data.length} artículos</div> }
              { articles.length !== 0 && <ArticleList articles={getCurrentArticles()} loading={loading}/> }
              { articles.length !== 0 && <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.data.length} paginate={paginate}></Pagination> }
              
          </div>
      )

    // }


}

export default HomePage;