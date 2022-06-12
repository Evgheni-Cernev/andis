import React from "react";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";

function CategoryName(props) {
  const { name } = props;

  return (
    <div className="flex items-baseline justify-between w-10/12 m-auto pt-8 pb-4 border-b border-neutral-800 mb-8">
      <div className="text-4xl text-white font-bold">{name}</div>

      <div className="flex items-center">
        <div className="text-neutral-500 text-base">Go to menu {name}</div>
        <ChevronRightIcon className="h-6 w-6 ml-1 text-neutral-500" />
      </div>
    </div>
  );
}

export default CategoryName;
