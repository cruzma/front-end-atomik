import React from 'react';


import ArticleCard from '../articleCard/articleCard';



const ArticleList = ({articles, loading}) => {

    if(loading){
        return <h2>loading...</h2>
    }
    return(
        <div className='flex flex-wrap justify-center items-center'>
            
            {
                articles.map((article) =>
                    <ArticleCard key={article.id} data={article} /> 
                   
                )
            }
            

        </div>
    )

}



export default ArticleList;