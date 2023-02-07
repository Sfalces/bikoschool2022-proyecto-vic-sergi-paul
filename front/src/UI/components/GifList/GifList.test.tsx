import { render, screen } from "@testing-library/react";
import { GifList } from "./GifList";
import { gifs } from "../../../mocks/resources/gifList";
import { MemoryRouter } from "react-router-dom";
import { apiMemeRepository } from "../../../core/infrastructure/apiMemeRepository";
import { init } from "../../../core/aplication/searchMemes";

describe("GifList", () => {
  init(apiMemeRepository);

  it("Se muestra el titulo de la lista de gifs", async () => {
    render(
      <MemoryRouter>
        <GifList search="" />
      </MemoryRouter>
    );
    const title = screen.getAllByText(/los guif más trendings del momento/i);
    expect(title[0]).toBeVisible();
    expect(title[1]).toBeVisible();
  });

  it("Se muestra la imagen de la lista de gifs", () => {
    render(
      <MemoryRouter>
        <GifList search="" />
      </MemoryRouter>
    );
    const imageTitle = screen.getByTitle(/trending arrow/i);
    expect(imageTitle).toBeInTheDocument();
  });

  it("Se muestra una lista de gifs", async () => {
    render(
      <MemoryRouter>
        <GifList search="" />
      </MemoryRouter>
    );
    for (let gifItem of gifs) {
      const gif = await screen.findByRole("img", { name: gifItem.title });
      expect(gif).toHaveAttribute("src", gifItem.url);
      expect(gif).toBeVisible();
    }
  });
});
