import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../actions/postActions';
import { PostCard } from '../../layouts/PostCard/PostCard';
import axios from 'axios';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [components, setcomments] = useState([])

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleButton = (e) => {
        axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + e.target.value)
            .then(response => {
                setcomments(response.data);
            })
            .catch(error => {
                console.error('Error al obtener comentarios:', error);
            });
        window.my_modal_1.showModal()
    };

    return (
        <div className='bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800'>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@3.6.1/dist/full.css" rel="stylesheet" type="text/css" />
            <script src="https://cdn.tailwindcss.com"></script>
            <h2 className='ml-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-700 md:text-5xl lg:text-6xl'>Posts</h2>
            <ul className='mx-4 grid grid-cols-3 gap-4'>
                {posts.map((post) => (
                    <PostCard key={post.id} title={post.title} body={post.body} handleButton={handleButton} value={post.id} />
                ))}
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                        {components.map((comment) => (
                            <div>
                                <h3 className="text-sm mt-2">{comment.name}</h3>
                                <p className="pb-2 text-xs">{comment.body}</p>
                            </div>
                        ))}
                        <div className="modal-action">
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            </ul>
        </div>
    );
};

export default PostList;
