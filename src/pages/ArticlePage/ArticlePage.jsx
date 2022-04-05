import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './ArticlePage.style.css'

const ArticlePage = () => {

    const {state} = useLocation();

    const { id } = state

    const [articleData, setArticleData] = useState('')

    useEffect(() => {
      
        const fetchArticles = async () => {
          fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/${id}`)
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
              console.log(data);
              setArticleData(data);
            })
            .catch((err) => {
              console.error(err);
            });
        }

        fetchArticles();

    }, [])
 
    // const authorName = articleData.metas['article:author']
    // const category = articleData.metas['article:section']

    return (
        <div className='flex flex-col w-full items-center min-h-screen bg-[#f2f2f2]'>
            <div className='w-10/12 lg:w-5/12'>
              <div className='w-full text-center'>
                <h1 className="text-5xl">Atomik Frontend Test</h1>
                <h2 className='text-4xl font-bold pb-9'>{articleData.title}</h2>
                <p>{articleData.published}</p>
                {/* <p>{{articleData.metas['article:author']}}</p>
                <p>{category}</p> */}
              </div>
              <div dangerouslySetInnerHTML={{__html: articleData.content}} className="text-lg flex flex-col leading-9"></div>
            </div>
        </div>
    )
}

export default ArticlePage;