import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/login';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import DataProvider, { DataContext } from './context/DataProvider';
import { useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const AuthRoute = () => {
  const { isAuthenticated } = useContext(DataContext);
  return isAuthenticated ? <Outlet /> : <Navigate replace to='/login' />;
}

function App() {
  const { isDarkMode } = useContext(DataContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <DataProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<AuthRoute />}>
                <Route index element={<Navigate to="/users" replace />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Routes>
          </main>
          <Toaster
              position="top-right"
              reverseOrder={false}
          />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
