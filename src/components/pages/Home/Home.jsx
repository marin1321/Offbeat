import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Home = () => {
    const url="https://jsonplaceholder.typicode.com/"
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(url+'posts')
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.error('Error al obtener posts:', error);
          });
      }, []);
    return (
        <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-gray-200 h-screen'>
            <h2 className='ml-2 mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl'>Posts</h2>
            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <div className='m-2 border-blue-500 border-2 rounded p-2 bg-white'>
                        <h3 className='text-center text-lg m-2 text-purple-600 font-medium'>{post.title}</h3>
                        <p className='text-justify m-2 text-sm'>{post.body}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}
