import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostList from './components/pages/Posts/PostList';
import PostForm from './components/pages/Posts/PostForm';
import Login from './components/pages/Login/Login';

function App() {
  // const loggedInUser = useSelector((state) => state.auth.user);

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/posts/read' element={<PostList />} />
          <Route path='/posts/create' element={<PostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
