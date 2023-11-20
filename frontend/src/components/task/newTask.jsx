import { useDispatch, useSelector } from "react-redux";
import { updateEditTaskObject } from "./taskSlice";
import { DropdownComponent } from "../dropdown";
import { putTask, postTask } from "../../utils/http";
import { useEffect, useState } from "react";

export const NewTask = ({ setOverlaySection }) => {
  const dispatch = useDispatch();
  const { editTask: editTaskBoolean, editTaskObject } = useSelector(
    (state) => state.task
  );
  const { currentTileID } = useSelector((state) => state.tile);
  const [taskValidation, setTaskValidation] = useState(false);

  useEffect(() => {
    setTaskValidation(
      editTaskObject.title &&
        editTaskObject.description &&
        editTaskObject.type &&
        editTaskObject.order
    );
  }, [editTaskObject]);

  const handleProperty = (e, property) => {
    const value = e.target.value;

    dispatch(
      updateEditTaskObject({
        type: "UPDATE_PROPERTY",
        property,
        value,
      })
    );
  };

  const handleTypeOptionSelect = (selectedOption) => {
    dispatch(
      updateEditTaskObject({
        type: "UPDATE_PROPERTY",
        property: "type",
        value: selectedOption,
      })
    );
  };

  // const handleTileOptionSelect = (selectedOption) => {
  //   console.log(selectedOption);
  //   dispatch(
  //     updateEditTaskObject({
  //       type: "UPDATE_PROPERTY",
  //       property: "tile",
  //       value: selectedOption,
  //     })
  //   );
  // };

  const handleTaskSubmission = async (e) => {
    e.preventDefault();
    const taskPayload = {
      // id: editTaskObject.id
      title: editTaskObject.title,
      description: editTaskObject.description,
      order: +editTaskObject.order,
      type: editTaskObject.type,
      tile: currentTileID,
    };

    editTaskBoolean
      ? await putTask(editTaskObject.id, taskPayload)
      : await postTask(taskPayload);

    // TODO: Make going back to tasks work
    window.location.reload();
    // setOverlaySection("tasks");
  };

  return (
    <section className="bg-white  w-[300px] rounded-xl p-4">
      <h1 className="text-2xl mb-4">
        {editTaskBoolean
          ? `Update Task ${editTaskObject.id} for Tile ${currentTileID}`
          : `Create Task for Tile ${currentTileID}`}
      </h1>
      <form onSubmit={(e) => handleTaskSubmission(e)}>
        <label>Title</label>
        <input
          maxLength="30"
          value={editTaskObject.title}
          onChange={(e) => handleProperty(e, "title")}
          className="bg-gray-200 rounded-lg p-1 w-[97%] mb-3"
        ></input>

        <label htmlFor="">Description</label>
        <textarea
          value={editTaskObject.description}
          onChange={(e) => handleProperty(e, "description")}
          className="resize-none bg-gray-200 rounded-lg h-20 w-[97%] p-1 mb-3"
          maxLength="256"
        ></textarea>

        <label htmlFor="">Order</label>
        <input
          value={editTaskObject.order}
          onChange={(e) => handleProperty(e, "order")}
          className="bg-gray-200 rounded-lg p-1 w-[97%] mb-3"
        ></input>

        <label>Type</label>
        <DropdownComponent
          options={["survey", "discussion", "diary"]}
          onSelect={handleTypeOptionSelect}
          defaultValue={editTaskObject.type}
        />
        {/* <label>Tile</label>
        <DropdownComponent
          options={[1, 2, 3]}
          onSelect={handleTileOptionSelect}
          defaultValue={editTaskObject.tile}
        /> */}
        <button
          type="submit"
          disabled={!taskValidation}
          className="bg-slate-400 rounded-lg p-2 text-lg hover:bg-slate-300 disabled:bg-red-600 mb-1"
        >
          {editTaskBoolean ? "Update" : "Create"}
        </button>
      </form>
    </section>
  );
};
