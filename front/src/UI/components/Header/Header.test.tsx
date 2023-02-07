import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  it("Se ve el logo de la aplicación", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByTitle(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
