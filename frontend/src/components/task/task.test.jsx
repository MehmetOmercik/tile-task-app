import { Task } from "./task";
import { renderWithProviders } from "../../test/test-utils";

describe("Task tests", () => {
  test("Snapshot test", () => {
    const task = renderWithProviders(<Task />);
    expect(task).toMatchSnapshot();
  });
});
