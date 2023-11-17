// import React from "react";
import PropTypes from "prop-types";

export const Task = ({
  id = "null",
  title = "null",
  order = "null",
  description = "null",
  type = "null",
}) => {
  return (
    <section className="border border-gray-600 rounded-md w-[200px] p-10 text-center text-lg bg-white">
      <p>Task {id}</p>
      <p>{title}</p>
      <p>{order}</p>
      <p>{description}</p>
      <p>{type}</p>
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
