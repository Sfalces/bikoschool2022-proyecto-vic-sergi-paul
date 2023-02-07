import { Meme, MemeRepository, RelatedMeme } from "../domain/meme";

export const SERVER = "localhost:4000";

interface MemeDTO {
  title: string;
  url: string;
  tags: string[];
  id: string;
  relatedMemes: RelatedMeme[];
}

export const apiMemeRepository: MemeRepository = {
  getMeme: async (memeID: string) => {
    const url = `http://${SERVER}/memes/id/${memeID}`;

    const response: MemeDTO | undefined = await fetch(url).then((response) => {
      if (response.status === 200) return response.json();
      return undefined;
    });

    if (response === undefined) return undefined;
    const meme: Meme = {
      title: response.title,
      url: response.url,
      tags: response.tags,
      id: response.id,
      relatedMemes: response.relatedMemes,
    };
    console.log(meme);
    return meme;
  },

  searchMemes: async ({ limit = 50, search = "" }) => {
    const url = `http://${SERVER}/memes/search?limit=${limit}&search=${search}`;

    const response = await fetch(url).then((memes) => memes.json());
    return response.map((serverMeme: MemeDTO) => {
      const meme: Meme = {
        title: serverMeme.title,
        url: serverMeme.url,
        tags: serverMeme.tags,
        id: serverMeme.id,
        relatedMemes: serverMeme.relatedMemes,
      };
      return meme;
    });
  },
};
