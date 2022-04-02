import React from 'react';


import ArticleCard from '../articleCard/articleCard';



const ArticleList = (props) => (
        <div>
            
            {
                props.articles.data.map((article) =>
                    <ArticleCard key={article.id} data={article} /> 
                   
                )
            }
            

        </div>
)

export default ArticleList;