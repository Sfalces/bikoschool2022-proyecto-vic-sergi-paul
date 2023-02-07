import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export interface DataBaseSchema {
  memes: DBMeme[];
}

export interface DBMeme {
  title: string;
  images: {
    original: {
      url: string;
    };
  };
  id: string;
  tags: string[];
}

const adapter = new FileSync<DataBaseSchema>("./data/db.json");

export const db = low(adapter);
