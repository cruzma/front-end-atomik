import React from 'react'


const SearchBar = ({ handleSubmit, handleChange, }) => {

    return(
        <form onSubmit={handleSubmit} className="flex w-1/2 justify-end">
            <input
                type="text"
                id="header-search"
                placeholder="Buscar artículos"
                className='py-3 px-4 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100' 
                onChange={handleChange}
            />
            <button type="submit" className='m-2 rounded px-4 px-4 py-2 font-semibold bg-gray-500 text-gray-100'>buscar</button>
        </form>
    )
}

export default SearchBar;