"use client";
// import { useState } from "react";
import { useState, memo } from "react"; // Make sure to import 'memo' from React
const images = [
  {
    src: "/images/apic1.png",
    alt: "Image 1",
    description:
      "Transforming agriculture with sustainable energy solutions: Solar panels efficiently powering lush farmlands while preserving nature's beauty.",
  },
  {
    src: "/images/apic2.png",
    alt: "Image 2",
    description:
      "Expert technicians ensuring precise solar panel installation for maximum energy efficiency. Empowering homes with sustainable and reliable rooftop solutions.",
  },
  {
    src: "/images/apic3.png",
    alt: "Image 3",
    description:
      "Solar panels installed in agricultural fields, harnessing clean energy to support sustainable farming practices. Empowering rural communities with eco-friendly solutions.",
  },
  {
    src: "/images/p4.png",
    alt: "Image 4",
    description:
      "Professional rooftop solar panel installation ensuring maximum efficiency and durability. Empowering homes with clean and sustainable energy solutions.",
  },
  {
    src: "/images/apic5.png",
    alt: "Image 5",
    description:
      "Enhance agricultural productivity with solar panel solutions tailored for farms. Our installations bring sustainable energy to your fields while maximizing efficiency and profitability.",
  },
  {
    src: "/images/p1.png",
    alt: "Image 6",
    description:
      "Harness the power of the sun with our high-performance solar panels, designed for maximum efficiency and sustainability. Join the renewable energy revolution and create a greener future with clean, reliable energy solutions.",
  },
  {
    src: "/images/p2.png",
    alt: "Image 7",
    description:
      "Join us in creating a sustainable future with expertly installed solar panels.",
  },
  {
    src: "/images/p3.png",
    alt: "Image 8",
    description:
      "Our solar panel installations bring sustainable energy solutions to your home or business!",
  },
  {
    src: "/images/herobgl.png",
    alt: "Image 9",
    description:
      "Powering a sustainable tomorrow with large-scale solar solutions tailored for efficiency. Discover the limitless potential of solar energy with our expert installations!",
  },
  {
    src: "/images/s2Img.png",
    alt: "Image 10",
    description:
      "Transform your home into an energy-efficient powerhouse with our rooftop solar solutions. Start saving on electricity bills while contributing to a sustainable future!",
  },
  {
    src: "/images/2.jpg",
    alt: "Image 11",
    description:
      "Transform vast spaces into energy-efficient solar farms with our cutting-edge solar panel solutions. Join us in building a sustainable future powered by the sun!",
  },
  {
    src: "/images/3.jpg",
    alt: "Image 12",
    description:
      "Revolutionizing agriculture with sustainable energy: Solar panels seamlessly power thriving farmlands while safeguarding nature's harmony.",
  },
  {
    src: "/images/4.jpg",
    alt: "Image 13",
    description:
      "Solar panels seamlessly powering fertile farmlands while harmonizing with nature's beauty.",
  },
  {
    src: "/images/5.jpg",
    alt: "Image 14",
    description:
      "Solar panels effortlessly powering fertile farmlands, blending harmoniously with the natural beauty of the landscape.",
  },
  {
    src: "/images/s4Img.png",
    alt: "Image 15",
    description:
      "Solar panels seamlessly integrated into fertile farmlands, harmonizing renewable energy production with the natural beauty of the environment.",
  },
  {
    src: "/images/14.jpg",
    alt: "Image 16",
    description:
      "Revolutionizing agriculture with sustainable energy: Solar panels seamlessly powering fertile farmlands while maintaining the harmony of nature's beauty.",
  },
  {
    src: "/images/download.jpeg",
    alt: "Image 17",
    description:
      "Solar panels efficiently energizing lush farmlands, blending seamlessly with the natural landscape to promote sustainability.",
  },
  {
    src: "/images/s1Img.png",
    alt: "Image 18",
    description:
      "Solar panels harmoniously powering vibrant farmlands, integrating effortlessly with the natural environment to support sustainable agriculture.",
  },
  {
    src: "/images/s5Img.png",
    alt: "Image 19",
    description:
      "Extensive planning and consulting for all your agriculture,business and household power needs.",
  },
  {
    src: "/images/s3Img.png",
    alt: "Image 20",
    description:
      "Expert technicians ensuring precise solar panel installation for maximum energy efficiency. Empowering homes with sustainable and reliable rooftop solutions.",
  },
];
const GalleryImage = memo(({ image, onClick }) => {
  return (
    <div
      key={image.src}
      className="relative cursor-pointer group overflow-hidden rounded-lg"
      onClick={() => onClick(image)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out transform"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
    </div>
  );
});

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {images.map((image) => (
          <GalleryImage key={image.src} image={image} onClick={openModal} />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-all duration-300 ease-in-out">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative shadow-lg transform scale-95 transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-4xl font-bold hover:text-red-600 transition-colors"
            >
              &times;
            </button>

            {/* Image and Description */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="mt-4 text-center text-lg text-gray-800">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Gallery Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//         {images.map((image) => (
//           <div
//             key={image.src}
//             className="relative cursor-pointer"
//             onClick={() => openModal(image)}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300 hover:scale-105"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-black text-3xl"
//             >
//               &times;
//             </button>

//             {/* Image and Description */}
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="w-full h-auto rounded-lg"
//             />
//             <p className="mt-4 text-center text-lg">
//               {selectedImage.description}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
