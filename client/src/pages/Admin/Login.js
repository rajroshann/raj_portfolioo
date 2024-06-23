import React from 'react';
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';
import { useDispatch } from 'react-redux';


function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "" // Corrected the property name to lowercase
  });
  const dispatch = useDispatch();
   const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/admin-login", user);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message); // Changed from response.data.success to response.data.message
        localStorage.setItem("token", JSON.stringify(response.data)); // Set the token from response.data.token
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-slate-600'>
      <div className="flex flex-col gap-3 border border-gray-500 p-5 shadow-lg bg-slate-400 w-96">
        <h1 className='text-2xl font-semibold'> Admin_Login</h1>
        <hr className='border border-gray-700' />
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder='username'
        />
        <input
          type="password"
          value={user.password} // Changed from user.Password to user.password
          onChange={(e) => setUser({ ...user, password: e.target.value })} // Changed from user.Password to user.password
          placeholder='password'
        />
        <button className='bg-blue-600 p-2 rounded-lg font-semibold w-1/3' onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
