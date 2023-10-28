import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Left from './components/leftBar/LeftBar';
import Right from './components/rightBar/RightBar';
import './app.scss';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { DarkModeContext, DarkModeContextProvider } from './context/darkModeContext';
import { AuthContext, AuthContextProvider } from './context/authContext';
import { useContext } from 'react';

function App() {


  const Layout = () => {

    const { darkMode } = useContext(DarkModeContext);

    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Left />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Right />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
      return <Navigate to={'/login'} />
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="app">
      <DarkModeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </div>
  )
}
export default App;
