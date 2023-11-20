import trashCan from "../../assets/trashCan.svg";
import editIcon from "../../assets/editIcon.svg";
import PropTypes from "prop-types";
import { deleteTile, getTasks } from "../../utils/http";
import { capitalise, formatDate } from "../../utils/helpers";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateCurrentTileID,
  updateEditTile,
  updateEditTileObject,
} from "./tileSlice";

export const Tile = ({
  tileID = "null",
  launchDate = "null",
  status = "null",
  handleOverlay,
  setOverlaySection,
  setTasks,
}) => {
  const [tileHover, setTileHover] = useState(false);
  const dispatch = useDispatch();

  const handleViewTasks = async () => {
    const getTasksResponse = await getTasks(tileID);
    handleOverlay(); //Opens the overlay when viewing tasks
    setTasks(getTasksResponse); //Sets tasks on App.jsx
    setOverlaySection("tasks");
    dispatch(updateCurrentTileID(tileID));
  };

  const handleEditTile = () => {
    const tilePayload = { tileID, launchDate, status };
    handleOverlay();
    setOverlaySection("edit_tile");
    dispatch(updateEditTile(true));
    dispatch(
      updateEditTileObject({ type: "UPDATE_OBJECT", payload: tilePayload })
    );
  };

  const handleDeleteTile = async () => {
    await deleteTile(tileID);
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
      className="border border-gray-600 rounded-xl w-[220px] h-[210px] text-center text-lg bg-white flex flex-col"
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
            className="text-red-700 bg-slate-300 hover:bg-slate-200 p-2 h-16"
          >
            View Tasks
          </button>
          <div className="flex justify-between px-6 mb-6">
            <img
              onClick={handleEditTile}
              className="rounded-lg hover:cursor-pointer hover:bg-gray-200 p-2"
              src={editIcon}
              width="60px"
            />
            <img
              onClick={handleDeleteTile}
              className="rounded-lg hover:cursor-pointer hover:bg-gray-200 p-2"
              src={trashCan}
              width="60px"
            />
          </div>
        </div>
      )}
      {!tileHover && (
        <div className="h-full flex flex-col justify-evenly">
          <p>Tile {tileID}</p>
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
  tileID: PropTypes.number,
  launchDate: PropTypes.string,
  status: PropTypes.string,
  handleOverlay: PropTypes.func,
  setOverlaySection: PropTypes.func,
  setTasks: PropTypes.func,
};
