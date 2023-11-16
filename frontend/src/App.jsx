import { Tile } from "./components/tile";
import { getTiles } from "./utils/http";

export default function App() {
  const handleButton = async () => {
    const response = await getTiles();
    console.log(response[0]);
  };

  return (
    <>
      <button onClick={handleButton}>click here</button>
      <Tile />
    </>
  );
}
