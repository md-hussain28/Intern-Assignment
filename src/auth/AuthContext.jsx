import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig"; // assuming auth is configured here
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    // Fetch user details from Realtime Database
    const fetchUserDetails = async (userId) => {
        try {
            const db = getDatabase();
            const userRef = ref(db, 'users/' + userId);
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
                setUserData(snapshot.val());
            } else {
                setUserData(null);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            setUserData(null);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                await fetchUserDetails(currentUser.uid); // Fetch user data from Realtime Database
            } else {
                setUser(null);
                setUserData(null);
            }
            setLoading(false); // End loading state once user data is fetched
        });
        return unsubscribe;
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, logout, loading, userData }}>
            {loading ? <LoadingComponent /> : children} {/* Show loading until data is ready */}
        </AuthContext.Provider>
    );
};

// Custom Hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Example Loading Component
const LoadingComponent = () => (
    <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div> {/* Spinner */}
    </div>
);
