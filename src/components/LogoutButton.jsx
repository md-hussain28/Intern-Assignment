// components/LogoutButton.jsx
import { useAuth } from "../auth/AuthContext";

const LogoutButton = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
