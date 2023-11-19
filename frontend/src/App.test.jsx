import App from "./App";
import { renderWithProviders } from "./test/test-utils";

describe("app tests", () => {
  test("snapshot test", () => {
    const app = renderWithProviders(<App />);
    expect(app).toMatchSnapshot();
  });
});
