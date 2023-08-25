import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/authActions';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const authError = useSelector((state) => state.auth.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }));
        window.location.href = '/posts/read/';
    };

    return (
        <div className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 h-screen flex justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-500 md:text-5xl lg:text-6xl">LOGIN</h1>
                </div>
                {authError && <p style={{ color: 'red' }}>{authError}</p>}
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
