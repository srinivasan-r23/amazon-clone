import Image from "next/image";
import {
  ShoppingCartIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Categories from "./Categories";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/1.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
          <span className="lg:inline text-white font-bold items-center mb-4 -ml-4 mr-8 text-sm hidden">
            .in
          </span>
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="flex-grow p-2 rounded-l-md flex-shrink focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="hidden lg:inline cursor-pointer">
            <Image
              src="/india.svg"
              height={20}
              width={30}
              className="relative"
            />
            <ChevronDownIcon className="inline h-4 text-gray-400 absolute" />
          </div>
          <div className="link hover:border-2 border-white-200 p-1 rounded-sm">
            <p>Hello Srini</p>
            <p className="font-extrabold md:text-sm ">Account & Lists</p>
          </div>
          <div className="link hover:border-2 border-white-200 p-1 rounded-sm	">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">& Orders</p>
          </div>
          <div className="relative link flex items-end hover:border-2 border-white-200 rounded-sm	">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline">Cart</p>
          </div>
        </div>
      </div>
      <Categories />
    </header>
  );
};

export default Header;
