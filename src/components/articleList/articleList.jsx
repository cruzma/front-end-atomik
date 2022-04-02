import React from 'react';


import ArticleCard from '../articleCard/articleCard';



const ArticleList = (props) => (
        <div>
            
            {
                props.articles.data.map((article) =>
                    <ArticleCard key={article.id} data={article} /> 
                   
                )
            }
            
            {/* <h1>Articles</h1>
            <ArticleCard data={props.articles} />  */}
            {/* {console.log(props.articles.data[0].id)} */}

        </div>
)

export default ArticleList;