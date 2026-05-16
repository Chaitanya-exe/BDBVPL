import React from "react";
import VideoCarousel from "@/components/sections/videoCarousel";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Conatiner from "@/components/Conatiner";
function Gallery() {
  return (
    <div>
      <VideoCarousel />
      <Conatiner
        textAllign={"text-center text-white px-4 md:px-8 lg:px-12 mx-auto"}
        title={"Our Projects"}
        h1={
          "Our Successful Solar Panel Installations"
        }
        h2={
          "Browse through our gallery to see how we’ve powered homes and businesses with sustainable solar solutions, delivering clean energy and reducing carbon footprints."
        }
      />
      <GalleryGrid />
    </div>
  );
}

export default Gallery;
