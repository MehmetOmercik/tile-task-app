import axios from "axios";

const backendUrl = "http://localhost:8000";

// GET Tiles
export const getTiles = async (status = "live") => {
  const response = await axios({
    method: "GET",
    url: "/tiles",
    baseURL: backendUrl,
    params: {
      status: status,
    },
  });
  return await response.data;
};

// EDIT Tile
export const editTile = async (tileID = null, data = null) => {
  const response = await axios({
    method: "PUT",
    url: `/tiles/${tileID}/`,
    baseURL: backendUrl,
    data: { ...data },
  });
  console.log(response.data);
  return await response.data;
};

// DELETE Tile
export const deleteTile = async (tileID = null) => {
  const response = await axios({
    method: "DELETE",
    url: `/tiles/${tileID}`,
    baseURL: backendUrl,
  });
  return await response.data;
};

// GET Tasks
export const getTasks = async (tile_id = null) => {
  const response = await axios({
    method: "GET",
    url: "/tasks",
    baseURL: backendUrl,
    params: {
      ordering: "order",
      tile_id: tile_id,
    },
  });
  return await response.data;
};
