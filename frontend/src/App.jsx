import { useEffect, useState } from "react";
import { Tile } from "./components/tile";
import { TaskSlider } from "./components/taskSlider";
import { getTiles } from "./utils/http";
import { Overlay } from "./components/overlay";
import { NewTile } from "./components/newTile";

export default function App() {
  const [tiles, setTiles] = useState([]);
  const [tileStatus, setTileStatus] = useState("live");
  const [tasks, setTasks] = useState([]);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [overlaySection, setOverlaySection] = useState(null);

  useEffect(() => {
    const handleMount = async () => {
      const response = await getTiles(tileStatus);
      setTiles(response);
    };
    handleMount();
  }, [tileStatus]);

  const handleOverlay = async () => {
    setOpenOverlay(!openOverlay);
  };
  const filterButtonStyle =
    "border p-4 border-red-700 bg-blue-400 rounded-2xl hover:bg-blue-200";

  return (
    <>
      <div className="bg-blue-500 p-5 my-10 flex gap-x-10 justify-center items-center text-3xl">
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
        {tiles.map((tile) => {
          return (
            <Tile
              key={tile.id}
              id={tile.id}
              launchDate={tile.launch_date}
              status={tile.status}
              handleOverlay={handleOverlay}
              setOverlaySection={setOverlaySection}
              setTasks={setTasks}
            />
          );
        })}
        <Overlay isOpen={openOverlay} onClose={handleOverlay}>
          {overlaySection === "tasks" && <TaskSlider tasks={tasks} />}
          {overlaySection === "edit_tile" && <NewTile />}
        </Overlay>
      </div>
    </>
  );
}
