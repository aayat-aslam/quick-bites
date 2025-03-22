import { useState, useEffect } from "react";

const LoadingScreen = ({
                           loadingText = "Preparing your delicious meal...",
                           icons = ["🍽️", "🍔", "🍕", "🍛", "🍣"] // Default food icons
                       }) => {
    console.log(loadingText)
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const [nextIconIndex, setNextIconIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true); // Start slide animation

            setTimeout(() => {
                setCurrentIconIndex(nextIconIndex);
                setNextIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
                setIsAnimating(false); // Reset animation
            }, 500); // Match animation duration
        }, 2000); // Change icon every 2 seconds

        return () => clearInterval(interval);
    }, [nextIconIndex]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-orange-200">
            {/* Animated Food Icon Container */}
            <div className="relative w-36 h-36 overflow-hidden text-8xl bg-white rounded-full">
                {/* Current Icon (Sliding Left & Fading Out) */}
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isAnimating ? "animate-slideRight" : ""}`}>
                  {icons[currentIconIndex]}
                </span>

                        {/* Next Icon (Sliding Right & Fading In) */}
                        <span className={`absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 ${isAnimating ? "opacity-100 animate-slideLeft" : ""}`}>
                  {icons[nextIconIndex]}
                </span>
            </div>

            {/* Loading Text */}
            <div className="mt-6 text-xl font-semibold text-gray-900 animate-pulse">
                {loadingText}
            </div>
        </div>
    );
};

export default LoadingScreen;