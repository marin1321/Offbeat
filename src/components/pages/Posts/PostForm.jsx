import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../actions/postActions';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = { title };
        dispatch(createPost(postData));
        setTitle('');
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
