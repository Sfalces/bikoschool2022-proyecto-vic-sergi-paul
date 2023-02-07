import { render, screen } from "@testing-library/react";
import { GifDetail } from "./GifDetail";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { init } from "../../../core/aplication/getMeme";
import { apiMemeRepository } from "../../../core/infrastructure/apiMemeRepository";

describe("GifDetail", () => {
  init(apiMemeRepository);

  it("Se renderiza un gif", async () => {
    render(
      <MemoryRouter initialEntries={["/gif/git-merge1"]}>
        <Routes>
          <Route path="/gif/:gifID" element={<GifDetail />} />
        </Routes>
      </MemoryRouter>
    );
    const card = await screen.findByRole("img", { name: "git-merge1" });
    expect(card).toHaveAttribute(
      "src",
      "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif"
    );
    expect(card).toBeVisible();
  });

  it("Se pinta NOT FOUND cuando el meme no existe", async () => {
    render(
      <MemoryRouter initialEntries={["/gif/pollo"]}>
        <Routes>
          <Route path="/gif/:gifID" element={<GifDetail />} />
        </Routes>
      </MemoryRouter>
    );
    const text = await screen.findByText(/not found/i);
    expect(text).toBeVisible();
  });

  it("Se ve el logo de la aplicación", () => {
    render(
      <MemoryRouter initialEntries={["/gif/git-merge1"]}>
        <Routes>
          <Route path="/gif/:gifID" element={<GifDetail />} />
        </Routes>
      </MemoryRouter>
    );
    const logo = screen.getByTitle(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
