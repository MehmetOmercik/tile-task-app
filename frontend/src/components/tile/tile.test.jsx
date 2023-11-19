import { Tile } from "./tile";
import { renderWithProviders } from "../../test/test-utils";

describe("Tile tests", () => {
  test("Snapshot test", () => {
    const tile = renderWithProviders(<Tile />);
    expect(tile).toMatchSnapshot();
  });
});
