// // pages/Login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleEmailLogin = (e) => {
//         e.preventDefault();
//         console.log("Email:", email, "Password:", password);
//         // Add your login logic here
//     };

//     const handleGoogleSignIn = () => {
//         console.log("Google Sign-In clicked!");
//         // Add Google Sign-In logic here
//     };

//     return (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-blue-200 to-blue-500 animate-gradient-xy">
//             <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                 <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
//                     Welcome Back
//                 </h2>
//                 <p className="mb-6 text-sm text-center text-gray-500">
//                     Login to your account
//                 </p>

//                 <form onSubmit={handleEmailLogin} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Email Address
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//                         />
//                     </div>

//                     <Button text="Login" onClick={handleEmailLogin} />
//                 </form>

//                 <div className="relative my-6">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-gray-300"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                         <span className="px-2 bg-white text-gray-500">OR</span>
//                     </div>
//                 </div>

//                 <Button
//                     text="Sign in with Google"
//                     onClick={handleGoogleSignIn}
//                     className="bg-red-500 hover:bg-red-600"
//                 />

//                 <p className="mt-6 text-center text-sm text-gray-500">
//                     Don’t have an account?{" "}
//                     <span
//                         onClick={() => navigate("/register")}
//                         className="text-blue-500 hover:underline cursor-pointer"
//                     >
//                         Register
//                     </span>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;

// pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "../firebase/firebaseConfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Email login handler
    const handleEmailLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            //console.log("Logged in with email:", email);
            navigate("/dashboard"); // Redirect to the dashboard or home page
        } catch (error) {
            console.error("Error logging in with email:", error.message);
            alert("Failed to login with email: " + error.message);
        }
    };

    // Google login handler
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            //console.log("Logged in with Google:", user);
            navigate("/dashboard"); // Redirect to the dashboard or home page
        } catch (error) {
            console.error("Error logging in with Google:", error.message);
            alert("Failed to login with Google: " + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-blue-200 to-blue-500 animate-gradient-xy">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
                    Welcome Back
                </h2>
                <p className="mb-6 text-sm text-center text-gray-500">
                    Login to your account
                </p>

                <form onSubmit={handleEmailLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <Button text="Login" onClick={handleEmailLogin} />
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                </div>

                <Button
                    text="Sign in with Google"
                    onClick={handleGoogleSignIn}
                    className="bg-red-500 hover:bg-red-600"
                />

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-blue-500 hover:underline cursor-pointer"
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
