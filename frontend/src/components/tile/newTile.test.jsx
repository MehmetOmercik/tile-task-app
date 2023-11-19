import { NewTile } from "./newTile";
import { renderWithProviders } from "../../test/test-utils";

describe("New Tile tests", () => {
  test("Snapshot test", () => {
    const newTile = renderWithProviders(<NewTile />);
    expect(newTile).toMatchSnapshot();
  });
});
