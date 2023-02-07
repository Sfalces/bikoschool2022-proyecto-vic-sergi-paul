import { render, screen } from "@testing-library/react";
import { GifOwner } from "./GifOwner";
describe("GifOwner", () => {
  it("Se muestra el logo del autor", () => {
    render(<GifOwner title="Huevo by gallina" />);
    const tagTitle = screen.getByTitle(/logo-author/i);
    expect(tagTitle).toBeInTheDocument();
  });

  it("Se muestra el texto del autor", () => {
    render(<GifOwner title="Huevo by gallina" />);
    const tag = screen.getByText("gallina");
    expect(tag).toBeVisible();
  });

  it("Si no hay autor no se muestra nada", () => {
    render(<GifOwner title="Huevo" />);
    expect(() => screen.getByTitle(/logo-author/i)).toThrow();
  });
});
