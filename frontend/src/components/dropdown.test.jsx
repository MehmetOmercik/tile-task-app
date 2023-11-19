import { DropdownComponent } from "./dropdown";
import { renderWithProviders } from "../test/test-utils";

describe("Dropdown tests", () => {
  test("Snapshot test", () => {
    const dropdownComponent = renderWithProviders(<DropdownComponent />);
    expect(dropdownComponent).toMatchSnapshot();
  });
});
