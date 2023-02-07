import { RelatedMeme } from "./memes";
import low from "lowdb";
import { DataBaseSchema, DBMeme } from "../../db/memes";

const tagsIntersection = (tags1: string[], tags2: string[]): string[] => {
  let tags1_set = new Set(tags1);
  let tags2_set = new Set(tags2);
  return [...tags1_set].filter((tag) => tags2_set.has(tag));
};

interface MemeWithMatches {
  meme: DBMeme;
  matches: string[];
}

const addMatches = (sourceMeme: DBMeme) => {
  return (meme: DBMeme): MemeWithMatches => ({
    meme: meme,
    matches: tagsIntersection(sourceMeme.tags, meme.tags),
  });
};

const sortByMatchesAsc = (a: MemeWithMatches, b: MemeWithMatches) =>
  b.matches.length - a.matches.length;

const memeWithMatches2RelatedMeme = (meme: MemeWithMatches): RelatedMeme => ({
  url: meme.meme.images.original.url,
  id: meme.meme.id,
});

export const getRelatedMemes = (
  sourceMeme: DBMeme,
  db: low.LowdbSync<DataBaseSchema>
): RelatedMeme[] => {
  const matchedMemes = db
    .get("memes")
    .filter((meme: DBMeme) => sourceMeme.id != meme.id)
    .map(addMatches(sourceMeme))
    .value()
    .sort(sortByMatchesAsc)
    .slice(0, 5)
    .map(memeWithMatches2RelatedMeme);

  return matchedMemes;
};
