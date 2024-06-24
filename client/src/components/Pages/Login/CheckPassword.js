

import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from './../../Redux/userSlice';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export default function CheckPassword() {
  const [data, setData] = useState({
    userId: '',
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isAdmin = data.email === 'admin@gmail.com' && data.password === 'admin123';
      const URL = isAdmin ? 'http://localhost:5800/api/admin' : 'http://localhost:5800/api/password';
      const response = await axios.post(URL, {
        userId: data.userId,
        password: data.password,
        email: data.email
      }, { withCredentials: true });
      console.log('Response:', response.data); // Debugging line

      if (response.data.success) {
        toast.success(isAdmin ? 'Admin Login Successfully' : response.data.message);
        dispatch(setToken(response.data.token));
        localStorage.setItem('Token', response.data.token);
        setData({ password: '', userId: '', email: '' });
        navigate('/');
      } else {
        toast.error(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error); // Debugging line
      toast.error(error?.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  useEffect(() => {
    if (location?.state) {
      console.log('Location state:', location.state); // Debugging line
      setData((prev) => ({
        ...prev,
        userId: location.state._id,
        email: location.state.email
      }));
    } else {
      navigate('/email');
    }
  }, [location, navigate]);

  if (!location?.state) {
    return null; // Render nothing or a fallback UI if location.state is not defined
  }

  return (
    <div className='mt-5 bg-white w-full max-w-md mx-2 rounded overflow-hidden p-4 md:mx-auto'>
      <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
        <Avatar
          size={80}
          name={location.state.name}
          ImageUrl={location?.state?.profile_pic}
        />
        <h2 className='font-semibold text-lg mt-1'>{location?.state?.name}</h2>
      </div>
      <div>
        <h3>Welcome to Employee Management System</h3>
        <form className='grid gap-3 mt-3' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your Password'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
            Login
          </button>
        </form>
        <p className='my-3 text-center'>
          <Link to={'/forgot-password'} className='hover:text-primary font-semibold'>Forgot Password</Link>
        </p>
      </div>
    </div>
  );
}
