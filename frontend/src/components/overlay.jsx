import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateEditTask } from "./task/taskSlice";

export const Overlay = ({
  isOpen,
  onClose,
  overlaySection,
  setOverlaySection,
  children,
}) => {
  const dispatch = useDispatch();
  const handleCreateTask = () => {
    setOverlaySection("new_task");
    dispatch(updateEditTask(false));
  };
  return (
    <>
      {isOpen && (
        <section className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div
              className={`flex items-center ${
                overlaySection === "tasks" ? "justify-between" : "justify-end"
              }`}
            >
              {overlaySection === "tasks" && (
                <button
                  className="text-3xl py-1 px-2 m-1 rounded-md hover:bg-gray-300"
                  type="button"
                  onClick={handleCreateTask}
                >
                  +
                </button>
              )}
              <button
                className="text-2xl py-1 px-2 m-1 rounded-md hover:bg-gray-300"
                type="button"
                onClick={onClose}
              >
                x
              </button>
            </div>
            <div className="flex items-center gap-x-10">{children}</div>
          </div>
        </section>
      )}
    </>
  );
};
