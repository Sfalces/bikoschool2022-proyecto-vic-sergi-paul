import { render, screen } from "@testing-library/react";
import { DetailedGif } from "./DetailedGif";
import { MemoryRouter } from "react-router-dom";
import { Meme } from "../../../core/domain/meme";

describe("DetailedGif", () => {
  it("Se muestra el gif detallado", () => {
    const meme: Meme = {
      title: "git-merge",
      url: "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif",
      id: "git-merge",
      tags: ["merge", "soldier"],
      relatedMemes: [
        {
          url: "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif",
          id: "git-merge",
        },
        {
          url: "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif",
          id: "git-merge",
        },
      ],
    };
    render(
      <MemoryRouter>
        <DetailedGif meme={meme} isLoading={false} />
      </MemoryRouter>
    );
    const title = screen.getByText("git-merge");
    expect(title).toBeVisible();
    const gif = screen.getByRole("img", { name: "git-merge" });
    expect(gif).toBeVisible();
    // Titulo de los tags
    const tagMerge = screen.getByText("merge");
    expect(tagMerge).toBeVisible();
    const tagSoldier = screen.getByText("merge");
    expect(tagSoldier).toBeVisible();
    const referedGifTitle = screen.getByText(
      /Si te gusto este guif te gustarán/i
    );
    expect(referedGifTitle).toBeVisible();
  });

  it("Se muestra NOT FOUND", () => {
    render(<DetailedGif meme={undefined} isLoading={false} />);
    const notGif = screen.getByText(/not found/i);
    expect(notGif).toBeVisible();
  });

  it("Se muestra Loading...", () => {
    render(<DetailedGif meme={undefined} isLoading={true} />);
    const loadingGif = screen.getByText(/loading/i);
    expect(loadingGif).toBeVisible();
  });
});

it("Se muestra una lista de gifs referenciados", async () => {
  const meme: Meme = {
    title: "git-merge",
    url: "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif",
    id: "git-merge",
    tags: ["merge", "soldier"],
    relatedMemes: [
      {
        url: "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif",
        id: "git-merge",
      },
      {
        url: "https://media.tenor.com/D12KYBUCOBAAAAAC/git-merge.gif",
        id: "git-merge",
      },
    ],
  };
  render(
    <MemoryRouter>
      <DetailedGif meme={meme} isLoading={false} />
    </MemoryRouter>
  );
  for (let gifItem of meme.relatedMemes) {
    const gif = await screen.findAllByRole("img", { name: "git-merge" });
    expect(gif[0]).toHaveAttribute("src", gifItem.url);
    expect(gif[0]).toBeVisible();
  }
});
