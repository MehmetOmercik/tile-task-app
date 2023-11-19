import { Task } from "./task";
import { useState } from "react";
export const TaskSlider = ({ tasks, setOverlaySection }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? tasks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === tasks.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const taskIndex = tasks[currentIndex];

  return (
    <section>
      {tasks.length > 0 ? (
        <div className="flex items-center gap-x-4">
          {tasks.length > 1 && (
            <div
              onClick={goToPrevious}
              className="text-4xl cursor-pointer hover:text-blue-500"
            >
              ❰
            </div>
          )}

          <Task
            key={`Task ${taskIndex?.id}`}
            taskID={taskIndex?.id}
            title={taskIndex?.title}
            order={taskIndex?.order}
            description={taskIndex?.description}
            type={taskIndex?.type}
            setOverlaySection={setOverlaySection}
          />

          {tasks.length > 1 && (
            <div
              onClick={goToNext}
              className="text-4xl cursor-pointer hover:text-blue-500"
            >
              ❱
            </div>
          )}
        </div>
      ) : (
        <p className="h-[200px] w-[200px] text-center text-6xl">
          No tasks found
        </p>
      )}
      <div className="flex justify-center">
        {tasks.map((_, slideIndex) => (
          <div
            className={`mx-3 mt-3 cursor-pointer text-2xl hover:scale-125 hover:text-blue-500
                ${currentIndex === slideIndex ? " text-green-500" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </section>
  );
};
