import axios from "axios";

const backendUrl = "http://localhost:8000";

// GET Tiles
export const getTiles = async () => {
  const response = await axios({
    method: "GET",
    url: "/tiles/",
    baseURL: backendUrl,
  });
  return await response.data;
};
