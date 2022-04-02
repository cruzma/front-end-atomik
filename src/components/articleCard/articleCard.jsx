import React from 'react';

const ArticleCard = (props) => (
    <div>
    

        
        <h1>{props.data.title}</h1>
        <h2>{props.data.headline}</h2>

        {/* {console.log(props.data.title)} */}

    </div>
)

export default ArticleCard;