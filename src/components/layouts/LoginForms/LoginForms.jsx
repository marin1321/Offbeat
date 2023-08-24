import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from "../../../actions";

export const LoginForms = () =>{
    const [users, setUsers] = useState({username: "oscmarin", password: "Agosto2113"});
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [data, setData]=useState({
        form:{
            "name":"",
            "password":""
        },
        error:false
        })

    const handleLogin = (e) =>{
        e.preventDefault()
        const user = document.getElementById("userName").value
        const password = document.getElementById("password").value
        setData(
            data.form.name=user,
            data.form.password=password
        )
        if (data.form.name === users.username && data.form.password === users.password) {
            const userData = { name: data.form.name, password: data.form.password };
            dispatch(loginSuccess(userData));
            window.location.href = '/Home';
        }
    }

    return(
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-gray-200 h-screen flex justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-500 md:text-5xl lg:text-6xl">LOGIN</h1>
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="userName" placeholder="Username" />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="password" placeholder="Password" />
                </div>
                <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
