import { Overlay } from "./overlay";
import { renderWithProviders } from "../test/test-utils";

describe("Overlay tests", () => {
  test("Snapshot test", () => {
    const overlay = renderWithProviders(<Overlay />);
    expect(overlay).toMatchSnapshot();
  });
});
