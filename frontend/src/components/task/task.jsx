import trashCan from "../../assets/trashCan.svg";
import editIcon from "../../assets/editIcon.svg";
import PropTypes from "prop-types";
import { capitalise } from "../../utils/helpers";
import { deleteTask } from "../../utils/http";
import { useDispatch, useSelector } from "react-redux";
import { updateEditTask, updateEditTaskObject } from "./taskSlice";

export const Task = ({
  taskID = "null",
  title = "null",
  order = "null",
  description = "null",
  type = "null",
  setOverlaySection,
}) => {
  const dispatch = useDispatch();
  const { currentTileID } = useSelector((state) => state.tile);

  const handleEditTask = () => {
    const taskPayload = {
      id: taskID,
      title,
      order,
      description,
      type,
      tile: currentTileID,
    };
    setOverlaySection("edit_task");
    dispatch(updateEditTask(true));
    dispatch(
      updateEditTaskObject({ type: "UPDATE_OBJECT", payload: taskPayload })
    );
  };

  const handleDeleteTask = async () => {
    await deleteTask(taskID);
    window.location.reload();
  };

  return (
    <section
      id="task-container"
      className="border border-gray-600 rounded-md w-[320px] text-center text-lg bg-white"
    >
      <div className="p-4">
        <h1
          data-testid="task-title-h1"
          className="text-2xl font-bold break-words"
        >
          {title}
        </h1>
      </div>
      <div className="border"></div>
      <h2 className="text-left m-2 font-semibold">Description</h2>
      <p
        data-testid="task-description-p"
        className="w-full resize-none break-words p-2"
      >
        {description}
      </p>
      <div className="flex justify-between p-2 font-semibold">
        <p data-testid="task-type-p">{capitalise(type)}</p>
        <p data-testid="task-taskID-p">Task ID: {taskID}</p>
        <p data-testid="task-order-p">Order NO: {order}</p>
      </div>
      <div className="flex justify-between px-2 mb-6">
        <img
          onClick={handleEditTask}
          className="rounded-lg hover:cursor-pointer hover:bg-gray-200 p-2"
          src={editIcon}
          width="60px"
        />
        <img
          onClick={handleDeleteTask}
          className="rounded-lg hover:cursor-pointer hover:bg-gray-200 p-2"
          src={trashCan}
          width="60px"
        />
      </div>
    </section>
  );
};

Task.propTypes = {
  taskID: PropTypes.number,
  title: PropTypes.string,
  order: PropTypes.number,
  description: PropTypes.string,
  type: PropTypes.string,
  setOverlaySection: PropTypes.func,
};
