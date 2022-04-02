import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ArticlePage = () => {

    const {state} = useLocation();

    const { id } = state

    const [articleData, setArticleData] = useState('')

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

    return (
        <div>
            <h1>{articleData.title}</h1>
            <div dangerouslySetInnerHTML={{__html: articleData.content}}></div>
        </div>
    )
}

export default ArticlePage;