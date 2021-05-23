import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  const [images, _] = useState([
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
  ]);
  return (
    <div className="relative">
      <div className="absolute bottom-0 bg-gradient-to-t from-gray-100 to-transparent w-full h-32 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        {images.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              height={600}
              width={1500}
              objectFit="contain"
              layout="responsive"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
