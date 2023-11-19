import axios from "axios";

const backendUrl = "http://localhost:8000";

// GET Tiles
export const getTiles = async (status = "live") => {
  try {
    const response = await axios({
      method: "GET",
      url: "/tiles",
      baseURL: backendUrl,
      params: {
        ordering: "launch_date",
        status: status,
      },
    });
    return await response.data;
  } catch (error) {
    console.error("error in http request: ", error);
  }
};

// POST Tile
export const postTile = async (data = null) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/tiles/",
      baseURL: backendUrl,
      data: { ...data },
    });
    return await response.data;
  } catch (error) {
    console.error("error in http request: ", error);
  }
};

// PUT Tile
export const putTile = async (tileID = null, data = null) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `/tiles/${tileID}/`,
      baseURL: backendUrl,
      data: { ...data },
    });
    return await response.data;
  } catch (error) {
    console.error("error in http request: ", error);
  }
};

// DELETE Tile
export const deleteTile = async (tileID = null) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/tiles/${tileID}`,
      baseURL: backendUrl,
    });
    return await response.data;
  } catch (error) {
    console.error("error in http request: ", error);
  }
};

// GET Tasks
export const getTasks = async (tile_id = null) => {
  try {
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
  } catch (error) {
    console.error("error in http request: ", error);
  }
};

// POST Task
export const postTask = async (data = null) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/tasks/",
      baseURL: backendUrl,
      data: { ...data },
    });
    return await response.data;
  } catch (error) {
    console.error("error in http request: ", error);
  }
};

// PUT Task
export const putTask = async (taskID = null, data = null) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `/tasks/${taskID}/`,
      baseURL: backendUrl,
      data: { ...data },
    });
    return await response.data;
  } catch (error) {
    console.error("error in http request: ", error);
  }
};

// DELETE TASK
export const deleteTask = async (taskID = null) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/tasks/${taskID}`,
      baseURL: backendUrl,
    });
    return await response.data;
  } catch (error) {
    console.error("error in http request: ", error);
  }
};
