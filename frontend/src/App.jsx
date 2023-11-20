import { useEffect, useState } from "react";
import { Tile } from "./components/tile/tile";
import { NewTile } from "./components/tile/newTile";

import { TaskSlider } from "./components/task/taskSlider";
import { getTiles } from "./utils/http";
import { Overlay } from "./components/overlay";
import { useDispatch } from "react-redux";
import {
  updateEditTile,
  updateEditTileObject,
} from "./components/tile/tileSlice";
import { isoStringDateFunc } from "./utils/helpers";
import { NewTask } from "./components/task/newTask";

export default function App() {
  const dispatch = useDispatch();
  const [tiles, setTiles] = useState([]);
  const [tileStatus, setTileStatus] = useState("live");
  const [tileState, setTileState] = useState({
    state: "loading",
    statusMessage: "",
  });
  const [tasks, setTasks] = useState([]);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [overlaySection, setOverlaySection] = useState(null);

  useEffect(() => {
    const handleMount = async () => {
      try {
        setTileState({ state: "loading" });
        const response = await getTiles(tileStatus);
        setTiles(response);
        setTileState({ state: "loaded" });
      } catch (error) {
        console.error("GET tiles request not working: ", error);
        setTileState({ state: "error", statusMessage: error.message });
      }
    };
    handleMount();
  }, [tileStatus]);

  const handleOverlay = async () => {
    setOpenOverlay(!openOverlay);
  };

  const handleNewTile = () => {
    const isoStringDate = isoStringDateFunc();
    const emptyTilePayload = {
      launchDate: isoStringDate,
      status: "",
    };
    handleOverlay();
    setOverlaySection("new_tile");
    dispatch(updateEditTile(false));
    dispatch(
      updateEditTileObject({ type: "UPDATE_OBJECT", payload: emptyTilePayload })
    );
  };
  const filterButtonStyle =
    "border p-4 border-red-700 bg-blue-400 rounded-2xl hover:bg-blue-200";
  return (
    <>
      <button
        onClick={handleNewTile}
        className="absolute bg-gray-400 right-5 mt-3 text-7xl border px-2 rounded-xl hover:bg-gray-200"
      >
        +
      </button>
      <div className="bg-blue-500 p-5 my-10 flex flex-col gap-x-10 gap-y-3 justify-center items-center text-3xl lg:flex-row">
        <p className="mr-5">Status Filter: </p>
        <button
          onClick={() => {
            setTileStatus("live");
          }}
          className={filterButtonStyle}
        >
          Live
        </button>
        <button
          onClick={() => {
            setTileStatus("pending");
          }}
          className={filterButtonStyle}
        >
          Pending
        </button>
        <button
          onClick={() => {
            setTileStatus("archived");
          }}
          className={filterButtonStyle}
        >
          Archived
        </button>
      </div>
      <div className="flex items-start justify-center gap-x-10 gap-y-4 m-4 flex-wrap">
        {tiles?.map((tile) => {
          return (
            <Tile
              key={tile.id}
              tileID={tile.id}
              launchDate={tile.launch_date}
              status={tile.status}
              handleOverlay={handleOverlay}
              setOverlaySection={setOverlaySection}
              setTasks={setTasks}
            />
          );
        })}
        {tileState?.state === "loaded" && tiles?.length === 0 && (
          <div className="text-lg mt-2 text-center">
            <h1 className="text-3xl font-semibold">
              No {tileStatus} tiles found{" "}
            </h1>
            <p>To add one, please click the + button on the top right</p>
          </div>
        )}
        {tileState?.state === "error" && (
          <h1 className="text-red-600 text-3xl text-center">
            Something is wrong with the tile http request, please check if the
            backend is online: <p>{tileState?.statusMessage}</p>
          </h1>
        )}
        <Overlay
          isOpen={openOverlay}
          onClose={handleOverlay}
          overlaySection={overlaySection}
          setOverlaySection={setOverlaySection}
        >
          {overlaySection === "tasks" && (
            <TaskSlider tasks={tasks} setOverlaySection={setOverlaySection} />
          )}

          {(overlaySection === "edit_tile" ||
            overlaySection === "new_tile") && <NewTile />}

          {(overlaySection === "edit_task" ||
            overlaySection === "new_task") && (
            <NewTask setOverlaySection={setOverlaySection} />
          )}
        </Overlay>
      </div>
    </>
  );
}
