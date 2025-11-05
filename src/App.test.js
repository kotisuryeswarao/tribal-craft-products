import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Tribal Craft Marketplace home heading", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Verify that main site heading or hero text is visible
  const headingElement = screen.getByText(/Tribal Craft Marketplace/i);
  expect(headingElement).toBeInTheDocument();
});
