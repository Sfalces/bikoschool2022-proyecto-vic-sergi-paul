import React from "react";
import { render, screen } from "@testing-library/react";
import { Logueate } from "./Login";

describe("Login component", () => {
  it("Se renderiza un icono de login", () => {
    render(<Logueate />);
    const blueIcon = screen.getByRole("icono");
    expect(blueIcon).toBeVisible();
  });

  it("Se renderiza un boton Logueate", () => {
    render(<Logueate />);
    const buttonLogueate = screen.getByRole("button", { name: /logueate/i });
    expect(buttonLogueate).toBeVisible();
  });
});
