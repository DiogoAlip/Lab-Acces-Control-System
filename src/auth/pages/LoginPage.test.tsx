import { screen, render } from "@testing-library/react";
import { LoginPage } from "./LoginPage";

describe("<Login Page />", () => {
  test("Should return an alert if ", () => {
    render(<LoginPage />);

    console.log(screen.findAllByTitle(""));
  });
});
