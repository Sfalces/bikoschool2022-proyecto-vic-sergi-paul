import { Meme, MemeRepository } from "../domain/meme";

let memeRepository: MemeRepository;

export const init = (repo: MemeRepository): void => {
  memeRepository = repo;
};

export const getMeme = async (memeID: string): Promise<Meme | undefined> => {
  return await memeRepository.getMeme(memeID);
};
