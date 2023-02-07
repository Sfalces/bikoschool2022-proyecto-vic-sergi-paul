import React from "react";
import { render, screen } from "@testing-library/react";
import { GuifAffinity } from "./GuifAffinity";
const getMemeService = require("../../core/aplication/getMeme");
//import { getMeme } from "../../core/aplication/getMeme";

describe("GuifAffinity", () => {
  it("Se realiza una llamada a la api", async () => {
    jest.spyOn(getMemeService, "getMeme").mockResolvedValue("asd");
    render(<GuifAffinity />);
    expect(getMemeService).toHaveBeenCalledTimes(1);
  });

  it("Se muestra un gif en la página", async () => {
    render(<GuifAffinity />);
    const gif = await screen.findByAltText(/git-merge/i);
    expect(gif).toBeInTheDocument();
  });
});
