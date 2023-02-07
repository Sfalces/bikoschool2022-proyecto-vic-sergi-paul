import { render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  beforeAll(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });

  it("Se renderiza una barra de búsqueda", () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    const searchBar = screen.getByRole("textbox", { name: /search bar/i });
    expect(searchBar).toBeVisible();
  });

  it("Se renderiza un boton para buscar", () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    const searchButton = screen.getByRole("button", { name: /search button/i });
    expect(searchButton).toBeVisible();
  });

  it("Se muestra el texto por el cual se está filtrando", () => {
    render(<SearchBar search="pollo" setSearch={() => {}} />);
    const searchBar: HTMLInputElement = screen.getByRole("textbox", {
      name: /search bar/i,
    });
    expect(searchBar.value).toEqual("pollo");
  });
});
