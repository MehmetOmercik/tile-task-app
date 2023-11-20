import { Task } from "./task";
import { renderWithProviders } from "../../test/test-utils";

describe("Task tests", () => {
  test("Snapshot test", () => {
    const task = renderWithProviders(<Task />);
    expect(task).toMatchSnapshot();
  });

  test("Properties test", () => {
    const task = renderWithProviders(
      <Task
        taskID={1}
        title="test title"
        order={1}
        description="test description"
        type="survey"
      />
    );
    const titleElement = task.getByTestId("task-title-h1");
    const descriptionElement = task.getByTestId("task-description-p");
    const orderElement = task.getByTestId("task-order-p");
    const idElement = task.getByTestId("task-taskID-p");
    const typeElement = task.getByTestId("task-type-p");

    expect(titleElement).toHaveTextContent("test title");
    expect(descriptionElement).toHaveTextContent("test description");
    expect(orderElement).toHaveTextContent(1);
    expect(idElement).toHaveTextContent(1);
    expect(typeElement).toHaveTextContent("Survey");
  });
});
