export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function loginSuccess(userData) {
  return { type: LOGIN_SUCCESS, payload: userData };
}

export function logout() {
  return { type: LOGOUT };
}

export const CHECK_AUTH_STATUS = 'CHECK_AUTH_STATUS';

export function checkAuthStatus() {
  return { type: CHECK_AUTH_STATUS };
}

export const fetchPosts = (posts) => (console.log(posts),{
    type: FETCH_POSTS,
    payload: posts,
});
  
export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post,
});
  
export const updatePost = (post) => ({
    type: UPDATE_POST,
    payload: post,
});
  
export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId,
});
