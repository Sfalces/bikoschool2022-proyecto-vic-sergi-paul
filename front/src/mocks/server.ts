import { rest } from "msw";
import { setupServer } from "msw/node";
import { gifs } from "./resources/gifList";
import { SERVER } from "../core/infrastructure/apiMemeRepository";

export const server = setupServer(
  rest.get(`http://${SERVER}/memes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(gifs));
  }),
  rest.get(`http://${SERVER}/memes/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(gifs));
  }),
  rest.get(`http://${SERVER}/memes/id/:memeID`, (req, res, ctx) => {
    const { memeID } = req.params;
    const filteredGifs = gifs.filter((gif) => gif.id === memeID);
    if (filteredGifs.length === 0) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(filteredGifs[0]));
  })
);
