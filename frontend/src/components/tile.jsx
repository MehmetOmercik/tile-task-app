import React from "react";

export const Tile = () => {
  return (
    <section className="border border-gray-600 rounded-md w-[200px] p-5 text-center text-lg">
      <p>Tile id</p>
      <p>Launch Date</p>
      <p>Status</p>
      <button className="text-red-700 bg-gray-400 hover:bg-gray-200">
        View Tasks
      </button>
    </section>
  );
};
