import React from 'react'

export const PostCard = ({key,title,body, handleButton, value}) => {
    return (
        <li key={key}>
            <div className='mx-2 border-x-blue-500 border-t-blue-500 border-2 rounded p-2 bg-white'>
                <h3 className='text-center text-lg m-2 text-purple-600 font-medium'>{title}</h3>
                <p className='text-justify m-2 text-sm text-black'>{body}</p>
            </div>
            <button className='mx-2 mb-2 border-blue-500  border-2 rounded p-2 bg-white text-black' onClick={handleButton} value={value}>comentarios</button>
        </li>
    )
}
