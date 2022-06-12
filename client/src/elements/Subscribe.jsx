import React from "react";
import LogoElement from "./LogoElement";

function Subscribe() {
  return (
    <div>
      <div className="text-white text-xl mb-6">Подписаться на рассылку</div>
      <input className="w-64 h-12 bg-white pl-4" placeholder="Message"></input>
      <button className="w-32 h-14 bg-black border-2 border-neutral-700 rounded-md text-white ml-2">
        Subscribe
      </button>
      <div className="mt-8">
        <LogoElement src="https://www.andys.md/assets/img/pays.png" />
      </div>
    </div>
  );
}

export default Subscribe;
