import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Biography from '../../components/Biography/Biography'

import './ArticlePage.style.css'

const ArticlePage = () => {

    const {state} = useLocation();

    const { id } = state

    const [articleData, setArticleData] = useState([])

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
              setArticleData(data);

            })
            .catch((err) => {
              console.error(err);
            });
        }

        fetchArticles();

    }, [])



    if(articleData.length === 0){
      return(
        <div className='flex flex-col w-full items-center min-h-screen bg-[#f2f2f2]'></div>
      )
    } else {

      let apiPublishedDate = articleData.published
      let timeStamp = new Date(apiPublishedDate).getTime()
      let Day = new Date(timeStamp).getDate()
      let Month = new Date(timeStamp).getMonth() + 1;
      let Year = new Date(timeStamp).getFullYear()

      let writtenMonth = ''

      switch(Month){
        case 1:
          writtenMonth = 'enero'
          break;
        case 2:
          writtenMonth = 'febrero'
          break;
        case 3:
          writtenMonth = 'marzo'
          break;
        case 4:
          writtenMonth = 'abril'
          break;
        case 5:
          writtenMonth = 'mayo'
          break;
        case 6:
          writtenMonth = 'junio'
          break;
        case 7:
          writtenMonth = 'julio'
          break;
        case 8:
          writtenMonth = 'agosto'
          break;
        case 9:
          writtenMonth = 'septiembre'
          break;
        case 10:
          writtenMonth = 'octubre'
          break;
        case 11:
          writtenMonth = 'noviembre'
          break;
        case 12:
          writtenMonth = 'diciembre'
          break;
      }
      let authorBio = articleData.metas.schema['@graph'][4].description
      
  


      return (
        <div className='flex flex-col w-full items-center min-h-screen bg-[#f2f2f2]'>
            <div className='w-10/12 lg:w-7/12'>
              <div className='w-full text-center'>
                <h1 className="text-5xl">Atomik Frontend Test</h1>

                <h2 className='text-4xl font-bold pb-9'>{articleData.title}</h2>
                <p>{"fecha de publicación: " + Day + ' ' + writtenMonth + ', ' + Year}</p>
                <p>{"Escrito por: " + articleData.metas['article:author']}</p>
                <p>{"categoría: " + articleData.metas['article:section']}</p>

                <div className='flex w-full justify-center items-center space-x-4'>
                  <p>etiquetas: </p>
                  {
                    articleData.tags.map( (tag) => <p className="bg-white rounded-lg p-2">{tag.name}</p> )
                  }
                </div>
              </div>
              
              <div dangerouslySetInnerHTML={{__html: articleData.content}} className="text-lg flex flex-col leading-9" ></div>
              <Biography authorName={articleData.metas['article:author']} authorBio={authorBio} />
              
              
            </div>
        </div>
      )
    }
    
    

}

export default ArticlePage;