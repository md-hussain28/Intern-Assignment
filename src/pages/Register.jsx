// // pages/Register.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig"; // Make sure this is the correct import path for your firebaseConfig

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(""); // For error handling
//     const navigate = useNavigate();

//     const handleRegister = async (e) => {
//         e.preventDefault();

//         try {
//             // Register the user with Firebase
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // You can also set the display name if you want to use it
//             await user.updateProfile({
//                 displayName: name,
//             });

//             navigate("/login");

//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-200 to-purple-500 animate-fade-in">
//             <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform transition-transform duration-300 hover:scale-105">
//                 <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
//                     Create an Account
//                 </h2>
//                 <p className="text-sm text-center text-gray-500 mb-6">
//                     Join us and start your journey!
//                 </p>

//                 {/* Error message display */}
//                 {error && <p className="text-red-500 text-center">{error}</p>}

//                 <form onSubmit={handleRegister} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                             Full Name
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter your name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
//                         />
//                     </div>

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
//                             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
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
//                             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
//                         />
//                     </div>

//                     <Button text="Register" onClick={handleRegister} />
//                 </form>

//                 <p className="mt-6 text-center text-sm text-gray-500">
//                     Already have an account?{" "}
//                     <span
//                         onClick={() => navigate("/login")}
//                         className="text-purple-500 hover:underline cursor-pointer"
//                     >
//                         Login
//                     </span>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database"; // Import Realtime DB functions

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Register user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user data to Realtime Database
            const userRef = ref(getDatabase(), "users/" + user.uid); // Create a reference for the user in the 'users' node
            await set(userRef, {
                fullName: name,
                email: user.email,
            });

            console.log("User registered:", user);

            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-200 to-purple-500 animate-fade-in">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
                    Create an Account
                </h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Join us and start your journey!
                </p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                        />
                    </div>

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
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
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
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                        />
                    </div>

                    <Button text="Register" onClick={handleRegister} />
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-purple-500 hover:underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
