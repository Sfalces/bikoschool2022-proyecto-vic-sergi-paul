export interface RelatedMeme {
  url: string;
  id: string;
}

export interface Meme {
  title: string;
  url: string;
  id: string;
  tags: string[];
  relatedMemes: RelatedMeme[];
}

export interface MemeRepository {
  getMeme: (memeID: string) => Promise<Meme | undefined>;
  searchMemes: (options: { limit: number; search: string }) => Promise<Meme[]>;
}

export interface UserRepository {
  login: (username: string, password: string) => Promise< Token | undefined>;
}

export interface Token{
  token: string;
  image: string;
}