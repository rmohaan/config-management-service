import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <nav className="bg-blue-600 text-white py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="ml-5 text-2xl font-bold">
                    <a href="/">Config Service</a>
                </div>
                <div className="space-x-3 mr-5">
                    {!isAuthenticated ? (
                        <>
                            <a href="/login" className="hover:text-blue-200">Login</a>
                            <a href="/register" className="hover:text-blue-200">Register</a>
                        </>
                    ) : (
                        <>
                            <a href="/" className="hover:text-blue-200">Home</a>
                            <button onClick={handleLogout} className="hover:text-blue-200">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
