import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/dashboard" className="hover:text-gray-200">IDK Academy</Link>
      </div>
      <ul className="flex gap-2 items-center">
        <li>
          <Link
            to="/dashboard"
            className="px-3 py-2 rounded-md transition-colors duration-150 hover:bg-blue-700 hover:text-white text-white/90 font-medium"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/upload"
            className="px-3 py-2 rounded-md transition-colors duration-150 hover:bg-blue-700 hover:text-white text-white/90 font-medium"
          >
            Upload Score
          </Link>
        </li>
        <li>
          <Link
            to="/scores"
            className="px-3 py-2 rounded-md transition-colors duration-150 hover:bg-blue-700 hover:text-white text-white/90 font-medium"
          >
            History
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="px-3 py-2 rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium shadow-sm hover:from-red-600 hover:to-pink-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
