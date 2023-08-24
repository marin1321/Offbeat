import axios from 'axios';
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from './actions';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPostsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(fetchPosts(response.data),console.log(response.data));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const createPostAsync = (post) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, post);
    dispatch(createPost(response.data));
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

export const updatePostAsync = (post) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${post.id}`, post);
    dispatch(updatePost(response.data));
  } catch (error) {
    console.error('Error updating post:', error);
  }
};

export const deletePostAsync = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${postId}`);
    dispatch(deletePost(postId));
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
