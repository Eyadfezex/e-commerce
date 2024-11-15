import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="bg-zinc-100 rounded-full p-2 w-full max-w-[557px] lg:max-w-[700px] hidden md:block">
      <div className="flex items-center gap-[1.5rem] text-zinc-400">
        {/* ---search Icon--- */}
        <IoSearch size={24} />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent text-lg font-medium w-full placeholder:text-zinc-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
