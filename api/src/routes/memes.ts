import { Router, Request, Response } from "express";
import low from "lowdb";
import { DataBaseSchema, DBMeme } from "../db/memes";
import { ResponseMeme, ResponseMemeWithRelated } from "../core/domain/memes";
import { getRelatedMemes } from "../core/domain/relatedMemes";

export const memesRouter = (db: low.LowdbSync<DataBaseSchema>) => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const limit = parseInt(String(req.query.limit)) || 50;

    const memes = db
      .get("memes")
      .take(limit)
      .map((meme: DBMeme) => {
        const responseMeme: ResponseMeme = {
          title: meme.title,
          url: meme.images.original.url,
          id: meme.id,
          tags: meme.tags,
        };
        return responseMeme;
      });

    res.json(memes);
  });

  router.get("/search", (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 20;
    const search = (req.query.search as string) || "";

    const memes = db
      .get("memes")
      .filter((meme: DBMeme) =>
        meme.title.toLowerCase().includes(search.toLowerCase())
      )
      .take(limit)
      .map((meme: DBMeme) => {
        const responseMeme: ResponseMeme = {
          title: meme.title,
          url: meme.images.original.url,
          tags: meme.tags,
          id: meme.id,
        };
        return responseMeme;
      });

    res.json(memes);
  });

  router.get("/match", (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 20;
    const search = (req.query.search as string) || "";

    const memes = db
      .get("memes")
      .filter(
        (meme: DBMeme) =>
          meme.title.toLowerCase().match(search.toLowerCase()) == null
      )
      .take(limit)
      .map((meme: DBMeme) => {
        const responseMeme: ResponseMeme = {
          title: meme.title,
          url: meme.images.original.url,
          tags: meme.tags,
          id: meme.id,
        };
        return responseMeme;
      });

    res.json(memes);
  });

  router.get(
    "/id/:memeID",
    (req: Request<{ memeID: string }>, res: Response) => {
      const memeID = req.params.memeID;

      const memes = db
        .get("memes")
        .filter((meme: DBMeme) => meme.id == memeID)
        .take(1)
        .map((meme: DBMeme) => {
          const responseMeme: ResponseMemeWithRelated = {
            title: meme.title,
            url: meme.images.original.url,
            id: meme.id,
            tags: meme.tags,
            relatedMemes: getRelatedMemes(meme, db),
          };
          return responseMeme;
        })
        .value();

      if (memes.length === 0) {
        res.sendStatus(404);
        return;
      }

      res.json(memes[0]);
    }
  );

  return router;
};