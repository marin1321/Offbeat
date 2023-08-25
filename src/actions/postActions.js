import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const createPost = (postData) => async (dispatch) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
    dispatch({ type: 'CREATE_POST', payload: response.data });
};