import { render, screen } from "@testing-library/react";
import { GifCard } from "./GifCard";

describe("GifCard", () => {
  it("Se renderiza un gif", () => {
    render(
      <GifCard
        title="git-merge"
        src="https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif"
        alt="git-merge"
      />
    );

    const card = screen.getByRole("img", { name: "git-merge" });
    expect(card).toHaveAttribute(
      "src",
      "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif"
    );
    expect(card).toBeVisible();
  });
});
