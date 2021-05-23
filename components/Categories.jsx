import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Categories = () => {
  const [categories, _] = useState([
    {
      id: 1,
      name: "Best Sellers",
      screen: "all",
    },
    {
      id: 2,
      name: "Mobiles",
      screen: "all",
    },
    {
      id: 3,
      name: "New Releases",
      screen: "medium",
    },
    {
      id: 4,
      name: "Today's Deals",
      screen: "medium",
    },
    {
      id: 5,
      name: "Electronics",
      screen: "medium",
    },
    {
      id: 6,
      name: "Computers",
      screen: "large",
    },
    {
      id: 7,
      name: "Fashion",
      screen: "large",
    },
    {
      id: 8,
      name: "Home & Kitchen",
      screen: "large",
    },
    {
      id: 9,
      name: "Amazon Pay",
      screen: "large",
    },
  ]);
  return (
    <div className="flex items-center bg-amazon_blue-light space-x-4 p-2 pl-6 text-white">
      <p className="link flex items-center">
        <MenuIcon className="h-6 mr-1" />
        All
      </p>
      {categories.map((item) => (
        <p
          key={item.id}
          className={`${
            item.screen === "medium"
              ? "link hidden md:inline-flex"
              : item.screen === "large"
              ? "link hidden lg:inline-flex"
              : "link"
          }`}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default Categories;
