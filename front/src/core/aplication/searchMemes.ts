import { Meme, MemeRepository } from "../domain/meme";

let memeRepository: MemeRepository;

export const init = (repo: MemeRepository): void => {
  memeRepository = repo;
};

export const searchMemes = async (search: string): Promise<Meme[]> => {
  return await memeRepository.searchMemes({
    limit: 15,
    search: search,
  });
};
