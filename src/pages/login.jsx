import { useState, useContext } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { signInUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(DataContext);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await signInUser({ email, password });
      if (response.data && response.data.token) {
        login(response.data.token);
        toast.success("Login Successfully completed !!!")
        navigate('/users');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      toast.error("Invalid email or password !!");
      setError('Invalid email or password');
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-950 to-gray-900 p-4'>
      <div className='max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-2xl shadow-2xl transform transition-all ease-in-out duration-300 hover:scale-[1.02]'>
        <div className="text-center">
          <h2 className='text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
        
        <form className='mt-8 space-y-6' onSubmit={handleLogin}>
          <div className='space-y-4'>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-4placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200'
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200'
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300'
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className='bg-red-900/20 border border-red-800 text-red-400 px-4 py-3 rounded-md text-sm'>
              {error}
            </div>
          )}

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
