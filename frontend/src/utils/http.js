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
