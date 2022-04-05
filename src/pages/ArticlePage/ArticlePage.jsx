import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ArticlePage = () => {

    const {state} = useLocation();

    const { id } = state

    const [articleData, setArticleData] = useState('')

    useEffect(() => {

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
    }, [])
 



    return (
        <div className='flex flex-col w-full items-center min-h-screen bg-[#f2f2f2]'>
            <div className='w-10/12'>
              <div className='w-full text-center'>
                <h1 className='text-5xl font-bold pb-9'>{articleData.title}</h1>
                <p>{articleData.published}</p>
                <p>{articleData.metas['article:author']}</p>
                <p>{articleData.metas['article:section']}</p>
                {console.log(articleData.metas['article:author'])}
              </div>
              <div dangerouslySetInnerHTML={{__html: articleData.content}} className="text-lg"></div>
            </div>
        </div>
    )
}

export default ArticlePage;