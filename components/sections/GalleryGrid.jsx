"use client";
import { useState } from "react";

const images = [
  { src: "/images/apic1.png", alt: "Image 1", description: "This is image 1" },
  { src: "/images/apic2.png", alt: "Image 2", description: "This is image 2" },
  { src: "/images/apic3.png", alt: "Image 3", description: "This is image 3" },
  { src: "/images/p4.png", alt: "Image 4", description: "This is image 4" },
  { src: "/images/apic5.png", alt: "Image 5", description: "This is image 5" },
  { src: "/images/p1.png", alt: "Image 6", description: "This is image 6" },
  { src: "/images/p2.png", alt: "Image 7", description: "This is image 7" },
  { src: "/images/p3.png", alt: "Image 8", description: "This is image 8" },
  { src: "/images/s1Img.png", alt: "Image 9", description: "This is image 9" },
  {
    src: "/images/s2Img.png",
    alt: "Image 10",
    description: "This is image 10",
  },
  {
    src: "/images/image11.jpg",
    alt: "Image 11",
    description: "This is image 11",
  },
  {
    src: "/images/image12.jpg",
    alt: "Image 12",
    description: "This is image 12",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-3xl"
            >
              &times;
            </button>

            {/* Image and Description */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-4 text-center text-lg">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
