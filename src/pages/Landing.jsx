import { Link } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500 p-6 relative overflow-hidden">
            {/* Animated Background Circles */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse opacity-30 bg-white rounded-full w-72 h-72 z-0"></div>
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 animate-pulse opacity-20 bg-white rounded-full w-96 h-96 z-0"></div>

            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn">
                    Welcome to My Internship Project!
                </h1>
                <p className="text-lg text-white mb-8 max-w-lg mx-auto animate__animated animate__fadeIn animate__delay-1s">
                    I'm excited to showcase my skills and work on this amazing internship opportunity. Log in to explore more!
                </p>

                {/* Google Sign In Button */}
                <Link
                    to="/login"
                    className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-blue-600 bg-white rounded-lg group shadow-xl hover:bg-blue-100 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110"
                >
                    {/* Glowing effect on hover */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg opacity-40 group-hover:opacity-100 transition-all duration-300"></span>

                    {/* Text with fancy animation */}
                    <span className="relative z-10 text-lg font-semibold text-blue-600 group-hover:text-white transition-all duration-300">Sign In with Google</span>

                    {/* Custom hover effect for glowing outline */}
                    <span className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-blue-500 transition-all duration-300"></span>
                </Link>
            </div>

            {/* My Details Section */}
            <div className="relative z-10 mt-16 text-white text-center px-6 py-4 bg-black bg-opacity-50 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-md mb-2">👋 Hi, I'm Saquib! A passionate developer with a love for clean code and innovative projects.</p>
                <p className="text-md mb-2">📍 I'm currently based in India, working on building responsive and modern web applications.</p>
                <p className="text-md mb-4">💻 Check out my portfolio and GitHub to see more about the projects I’ve worked on!</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/md-hussain28" target="_blank" rel="noopener noreferrer">
                        <button
                            className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-300"
                        >
                            GitHub
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/md-saquib-hussain/" target="_blank" rel="noopener noreferrer">
                        <button
                            className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                        >
                            LinkedIn
                        </button>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-4 text-white text-sm">
                <p>🚀 Built for a coding internship assignment</p>
                <p className="mt-2">📅 Deadline: 3 Days</p>
            </footer>
        </div>
    );
};

export default Landing;




