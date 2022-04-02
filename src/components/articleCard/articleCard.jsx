import React from 'react';
import { useNavigate } from "react-router-dom"




const ArticleCard = (props) => {

    let navigate = useNavigate();

    const routeChange = (event) => {
        event.preventDefault();
        let id = JSON.stringify(props.data.id)
        navigate('/articulo', { state: {id: id} })
        
    }
    return(
        
    <div>
    
        <a href={props.data.title} onClick={routeChange}>
            <h1>{props.data.title}</h1>
            <h2>{props.data.headline}</h2>
            
        </a>
    </div>

    )

}



export default ArticleCard;