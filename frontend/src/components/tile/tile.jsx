import PropTypes from "prop-types";
import { deleteTile, getTasks } from "../../utils/http";
import { capitalise, formatDate } from "../../utils/helpers";
import { useState } from "react";
import trashCan from "../../assets/trashCan.svg";
import editIcon from "../../assets/editIcon.svg";
import { useDispatch } from "react-redux";
import { updateEditTile, updateEditTileObject } from "./tileSlice";

export const Tile = ({
  id = "null",
  launchDate = "null",
  status = "null",
  handleOverlay,
  setOverlaySection,
  setTasks,
}) => {
  const [tileHover, setTileHover] = useState(false);
  const dispatch = useDispatch();
  const handleViewTasks = async () => {
    const getTasksResponse = await getTasks(id);
    handleOverlay(); //Opens the overlay when viewing tasks
    setTasks(getTasksResponse); //Sets tasks on App.jsx
    setOverlaySection("tasks");
  };

  const handleEditTile = () => {
    const tilePayload = { id, launchDate, status };
    console.log(tilePayload);
    handleOverlay();
    setOverlaySection("edit_tile");
    dispatch(updateEditTile(true));
    dispatch(
      updateEditTileObject({ type: "UPDATE_OBJECT", payload: tilePayload })
    );
  };

  const handleDeleteTile = () => {
    deleteTile(id);
    window.location.reload();
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
      className="border border-gray-600 rounded-xl w-[220px] h-[200px] text-center text-lg bg-white flex flex-col"
    >
      <div
        className={`h-14 w-full rounded-t-xl ${
          statusMapColour[status] || "bg-gray-500"
        }`}
      ></div>
      {tileHover && (
        <div className="h-full flex flex-col justify-between">
          <button
            onClick={handleViewTasks}
            className="text-red-700 bg-slate-300 hover:bg-slate-200 p-2 h-14"
          >
            View Tasks
          </button>
          <div className="flex justify-between px-6 mb-6">
            <img
              onClick={handleEditTile}
              className="hover:cursor-pointer"
              src={editIcon}
              width="40px"
            />
            <img
              onClick={handleDeleteTile}
              className="hover:cursor-pointer"
              src={trashCan}
              width="40px"
            />
          </div>
        </div>
      )}
      {!tileHover && (
        <div className="h-full flex flex-col justify-evenly">
          <p>Tile {id}</p>
          <div className="border " />
          <div className="flex justify-between px-4">
            <p>{formatDate(launchDate)}</p>
            <p>{capitalise(status)}</p>
          </div>
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
  setOverlaySection: PropTypes.func,
  setTasks: PropTypes.func,
};
