"use client";
import { useRef, useState } from "react";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videos = [
  { id: 1, src: "/videos/sample1.mp4" },
  { id: 2, src: "/videos/sample2.mp4" },
  { id: 3, src: "/videos/sample3.mp4" },
];

export default function VideoCarousel() {
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null); // Track which video is playing

  // Handle Play/Pause Toggle
  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(index); // Update state to reflect the video being played
      } else {
        video.pause();
        setIsPlaying(null); // No video is playing
      }
    }
  };

  // Navigate Carousel
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videos.length - 1
    );
    setIsPlaying(null); // Stop playing any video when navigating
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < videos.length - 1 ? prevIndex + 1 : 0
    );
    setIsPlaying(null); // Stop playing any video when navigating
  };

  return (
    <div className="relative w-full overflow-hidden mb-10">
      {/* Video Display */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="w-full flex-shrink-0 relative"
            style={{ position: "relative" }} // Ensuring each video has a proper container
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="w-screen h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover"
              muted
              loop
            />
            {/* Play/Pause Button */}
            <button
              onClick={() => togglePlayPause(index)}
              className="absolute inset-0 flex items-center justify-center text-white bg-black/40 rounded-full w-16 h-16 opacity-90 hover:opacity-100 transition-opacity z-50" // Ensure button has higher z-index
              style={{
                position: "absolute",
                zIndex: 50, // Enforcing the highest z-index
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centering the button
              }}
            >
              {isPlaying === index ? (
                <FaPause size={24} />
              ) : (
                <FaPlay size={24} />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

// "use client";

// import { useRef } from "react";

// const videos = [
//   { id: 1, src: "/videos/sample1.mp4" },
//   { id: 2, src: "/videos/sample2.mp4" },
//   { id: 3, src: "/videos/sample3.mp4" },
// ];

// export default function VideoCarousel() {
//   const videoRefs = useRef([]);

//   const handlePlay = (index) => {
//     videoRefs.current[index]?.play();
//   };

//   const handlePause = (index) => {
//     videoRefs.current[index]?.pause();
//   };

//   return (
//     <div className="w-full overflow-hidden">
//       <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
//         {videos.map((video, index) => (
//           <div
//             key={video.id}
//             className="w-full flex-shrink-0 snap-center relative"
//           >
//             <video
//               ref={(el) => (videoRefs.current[index] = el)}
//               src={video.src}
//               className="w-screen h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover"
//               muted
//               loop
//               onMouseEnter={() => handlePlay(index)}
//               onMouseLeave={() => handlePause(index)}
//               onClick={() => handlePlay(index)}
//             />
//             <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity">
//               Click or Hover to Play
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
