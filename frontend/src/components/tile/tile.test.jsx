import { Tile } from "./tile";
import { renderWithProviders } from "../../test/test-utils";

describe("Tile tests", () => {
  test("Snapshot test", () => {
    const tile = renderWithProviders(<Tile />);
    expect(tile).toMatchSnapshot();
  });
  test("Properties test", () => {
    const tile = renderWithProviders(
      <Tile tileID={1} launchDate="2000-10-12" status="live" />
    );
    const idElement = tile.getByTestId("tile-tileID-p");
    const launchDateElement = tile.getByTestId("tile-launchDate-p");
    const statusElement = tile.getByTestId("tile-status-p");

    expect(idElement).toHaveTextContent("Tile 1");
    expect(launchDateElement).toHaveTextContent("12/10/2000");
    expect(statusElement).toHaveTextContent("Live");
  });
});
