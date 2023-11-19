import { NewTask } from "./newTask";
import { renderWithProviders } from "../../test/test-utils";

describe("New Task tests", () => {
  test("Snapshot test", () => {
    const newTask = renderWithProviders(<NewTask />);
    expect(newTask).toMatchSnapshot();
  });
});
