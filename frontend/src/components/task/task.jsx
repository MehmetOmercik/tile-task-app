// import React from "react";
import PropTypes from "prop-types";
import { capitalise } from "../../utils/helpers";

export const Task = ({
  id = "null",
  title = "null",
  order = "null",
  description = "null",
  type = "null",
}) => {
  return (
    <section className="border border-gray-600 rounded-md w-[320px] text-center text-lg bg-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold break-words">{title}</h1>
      </div>
      <div className="border"></div>
      <h2 className="text-left m-2 font-semibold">Description</h2>
      <p className="w-full resize-none break-words p-2">{description}</p>
      <div className="flex justify-between p-2">
        <p>{capitalise(type)}</p>
        <p>Task ID: {id}</p>
        <p>Order NO: {order}</p>
      </div>
    </section>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  order: PropTypes.number,
  description: PropTypes.string,
  type: PropTypes.string,
};
