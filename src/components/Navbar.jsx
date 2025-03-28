import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import { Menu, X , LogOut, Users } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useContext(DataContext);
    const isLoginPage = location.pathname === '/login';

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            User Management
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {!isLoginPage && (
                            <button
                                onClick={() => navigate('/users')}
                        className="flex items-center gap-2 w-full text-left text-gray-200 hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                <Users size={18} />
                                Users
                            </button>
                        )}
                        {!isLoginPage && (
                            <button
                                onClick={handleLogout}
                        className="flex items-center gap-2 w-full text-left text-red-500 hover:text-red-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                              {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

          { !isLoginPage && <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {!isLoginPage && (
                        <button
                            onClick={() => {
                                navigate('/users');
                                setIsOpen(false);
                            }}
                        className="flex items-center gap-2 w-full text-left text-gray-200 hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            <Users size={20} />

                            Users
                        </button>
                    )}
                    {!isLoginPage && (
                        <button
                            onClick={() => {
                                handleLogout();
                                setIsOpen(false);
                            }}
                        className="flex items-center gap-2 w-full text-left text-red-500 hover:text-red-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                           <LogOut size={20} />
                            Logout
                        </button>
                    )}
                </div>
            </div>}
        </nav>
    );
};

export default Navbar;


 