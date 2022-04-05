import React from "react";

const Pagination = ({ articlesPerPage, totalArticles, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div>
            <ul className="flex justify-center items-center my-4">
                {pageNumbers.map(number => (
                    <li key={number} 
                        className="cursor-pointer py-2 px-4 text-gray-500 border-b-8 text-green-500 border-green-500"   
                        onClick={() => paginate(number)}
                    >
                            {number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination