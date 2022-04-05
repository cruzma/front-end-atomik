import React from 'react'


const Biography = ({authorName, authorBio}) => {

    return(
        <div className='px-7  pt-1 pb-1 mt-12 w-full mb-7 bg-white rounded-lg'>
            <h2>{"Biografía de " + authorName}</h2>
            <p>{authorBio}</p>
        </div>
    )
}

export default Biography;