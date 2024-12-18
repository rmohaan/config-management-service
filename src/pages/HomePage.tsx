import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ConfigList from '../components/ConfigList';

const HomePage = () => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-4xl font-semibold text-center mb-6 text-gray-800">Configuration Management</h1>
            <ConfigList />
        </div>
    )
};

export default HomePage;
