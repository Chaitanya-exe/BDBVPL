'use client';

import { useRef } from 'react';

const videos = [
  { id: 1, src: '/videos/video1.mp4' },
  { id: 2, src: '/videos/video2.mp4' },
  { id: 3, src: '/videos/video3.mp4' },
];

export default function VideoCarousel() {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current[index]?.play();
  };

  const handlePause = (index) => {
    videoRefs.current[index]?.pause();
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="w-full flex-shrink-0 snap-center relative"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="w-screen h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover"
              muted
              loop
              onMouseEnter={() => handlePlay(index)}
              onMouseLeave={() => handlePause(index)}
              onClick={() => handlePlay(index)}
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity">
              Click or Hover to Play
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
