/* eslint-disable no-undef */
import { TaskSlider } from "./taskSlider";
import { renderWithProviders } from "../../test/test-utils";

describe("Task Slider tests", () => {
  test("Snapshot test", () => {
    const taskSlider = renderWithProviders(<TaskSlider tasks={[]} />);
    expect(taskSlider).toMatchSnapshot();
  });
});
