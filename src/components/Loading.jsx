const StylishLoadingComponent = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            {/* Loading Spinner with animation */}
            <div className="relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                <div className="absolute top-0 left-0 w-32 h-32 border-8 border-t-transparent border-indigo-500 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
            </div>

            {/* Optional Text */}
            <p className="absolute text-2xl text-white font-bold mt-20 animate-pulse">
                Loading, please wait...
            </p>
        </div>
    );
};

export default StylishLoadingComponent;
