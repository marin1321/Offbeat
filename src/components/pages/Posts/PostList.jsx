import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAsync } from '../../../api';

const PostList = ({ posts, fetchPostsAsync }) => {
  useEffect(() => {
    fetchPostsAsync();
    console.log(posts);
  }, [fetchPostsAsync]);

  return (
    <div>
      <h2>Lista de Publicaciones</h2>
      <ul>
      {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
    posts: state.posts,
  });
  
  export default connect(mapStateToProps, {
    fetchPostsAsync
  })(PostList);
