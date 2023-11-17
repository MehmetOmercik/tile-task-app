import PropTypes from "prop-types";
import { getTasks } from "../utils/http";
import { capitalise } from "../utils/helpers";
import { useState } from "react";

export const Tile = ({
  id = "null",
  launchDate = "null",
  status = "null",
  handleOverlay,
  setTasks,
}) => {
  const [tileHover, setTileHover] = useState(false);
  const handleViewTasks = async () => {
    const getTasksResponse = await getTasks(id);
    handleOverlay(); //Opens the overlay when viewing tasks
    setTasks(getTasksResponse); //Sets tasks on App.jsx
  };

  const statusMapColour = {
    live: "bg-green-500",
    pending: "bg-blue-500",
    archived: "bg-red-500",
  };

  return (
    <section
      onMouseOver={() => {
        setTileHover(true);
      }}
      onMouseOut={() => {
        setTileHover(false);
      }}
      className="border border-gray-600 rounded-xl w-[200px] h-[200px] text-center text-lg bg-white flex flex-col"
    >
      <div
        className={`h-14 w-full rounded-t-xl ${
          statusMapColour[status] || "bg-gray-500"
        }`}
      ></div>
      {tileHover && (
        <button
          onClick={handleViewTasks}
          className="text-red-700 bg-slate-300 hover:bg-slate-200 p-2 "
        >
          View Tasks
        </button>
      )}
      {!tileHover && (
        <div className="h-full flex flex-col justify-evenly">
          <p>Tile {id}</p>
          <p>{launchDate}</p>
          <p>{capitalise(status)}</p>
        </div>
      )}
    </section>
  );
};

Tile.propTypes = {
  id: PropTypes.number,
  launchDate: PropTypes.string,
  status: PropTypes.string,
  handleOverlay: PropTypes.func,
  setTasks: PropTypes.func,
};
