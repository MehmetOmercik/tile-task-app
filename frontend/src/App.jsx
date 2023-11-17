import { useEffect, useState } from "react";
import { Tile } from "./components/tile";
import { getTiles } from "./utils/http";
import { Task } from "./components/task";
import { Overlay } from "./components/overlay";

export default function App() {
  const [tiles, setTiles] = useState([]);
  const [openOverlay, setOpenOverlay] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      const response = await getTiles();
      setTiles(response);
    };
    handleMount();
  }, []);

  const handleOverlay = () => {
    setOpenOverlay(!openOverlay);
  };

  return (
    <>
      <button onClick={handleOverlay} className="bg-white">
        Open Overlay
      </button>
      {/* <div className="overlay"></div> */}
      <div className="flex items-start gap-2 m-4">
        {tiles.map((tile, index) => {
          return (
            <Tile
              key={index}
              id={tile.id}
              launchDate={tile.launch_date}
              status={tile.status}
            />
          );
        })}
        <Overlay isOpen={openOverlay} onClose={handleOverlay}>
          <Task />
        </Overlay>
      </div>
    </>
  );
}
