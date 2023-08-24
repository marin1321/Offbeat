import {
    FETCH_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
} from './actions';

const initialState = {
    posts: [],
};

console.log(initialState.posts);

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, posts: action.payload };
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE_POST:
            const updatedPosts = state.posts.map((post) =>
                post.id === action.payload.id ? action.payload : post
            );
            return { ...state, posts: updatedPosts };
        case DELETE_POST:
            const filteredPosts = state.posts.filter(
                (post) => post.id !== action.payload
            );
            return { ...state, posts: filteredPosts };
        default:
            return state;
    }
};

export default postReducer;
