export interface RelatedMeme {
  url: string;
  id: string;
}

export interface ResponseMeme {
  title: string;
  url: string;
  id: string;
  tags: string[];
}

export interface ResponseMemeWithRelated extends ResponseMeme {
  relatedMemes: RelatedMeme[];
}
