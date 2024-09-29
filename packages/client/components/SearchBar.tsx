import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="bg-zinc-100 rounded-full p-4 w-full max-w-[557px]">
      <div className="flex items-center gap-[1.5rem] text-zinc-400">
        <IoSearch size={24} />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent text-lg font-medium placeholder:text-zinc-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
