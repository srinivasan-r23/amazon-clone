import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 z-20 p-10 bg-white rounded-md ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon className="h-5 text-yellow-500" key={index} />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={Math.floor(price * 69)} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/10.png" alt="Prime" />
          <p className="text-sm text-gray-500">FREE One-day delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product;
