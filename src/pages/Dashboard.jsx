import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import LogoutButton from "../components/LogoutButton";
import StylishLoadingComponent from "../components/Loading";

const Dashboard = () => {
    const { user, userData, loading } = useAuth(); // Changed `currentUser` to `user` based on your AuthContext
    const [darkMode, setDarkMode] = useState(false);
    //console.log("UserData", userData);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    if (loading) {
        return <StylishLoadingComponent />; // Optional: show a loading component if data is still loading
    }
    return (
        <div
            className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            {/* Header Section */}
            <header className="w-full px-6 py-4 shadow-md flex justify-between items-center">
                <h1 className="text-3xl font-extrabold tracking-widest">
                    Dashboard
                </h1>
                <button
                    onClick={toggleDarkMode}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${darkMode
                        ? "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                        }`}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </header>

            {/* Welcome Message */}
            <div
                className="p-6 mt-10 bg-white shadow-lg rounded-lg w-11/12 sm:w-1/2 transform transition duration-500 hover:scale-105"
                style={{
                    backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "white",
                }}
            >
                <h2 className="text-2xl font-semibold">
                    Welcome, {userData?.fullName || "User"}!
                </h2>
                <p className="text-lg mt-2">
                    Email: <span className="font-medium">{user?.email || "N/A"}</span>
                </p>
                <p className="text-lg mt-2">
                    Last Login:{" "}
                    <span className="font-medium">
                        {user?.metadata?.lastSignInTime || "N/A"}
                    </span>
                </p>
            </div>

            {/* Logout Button */}
            <div className="mt-6">
                <LogoutButton />
            </div>

            {/* Footer Section */}
            <footer className="mt-auto py-4">
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Md Saquib Hussain All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Dashboard;
