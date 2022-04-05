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
        
    <div className='m-5 rounded-lg cursor-pointer w-80 h-[32rem] hover:shadow-inner' onClick={routeChange}>
        <img src={props.data.featured_media.medium} className="rounded-t-lg h-3/5 w-full"/>
        <div className='bg-white text-center rounded-b-lg h-2/5'>
            <h1 className='text-[#8b8f98] text-xl font-bold pt-6'>{props.data.title}</h1>
            <h2 className='text-[#acb3be] text-sm font-light pt-6 px-1'>{props.data.excerpt}</h2>
        </div>     
    </div>

    )

}



export default ArticleCard;