import "./DetailedGif.css";
import { GifCard } from "../GifCard/GifCard";
import { Meme } from "../../../core/domain/meme";
import { GifTitle } from "../GifTitle/GifTitle";
import { TagList } from "../TagList/TagList";
import { LikeLogo } from "../Logos/LikeLogo";
import { Link } from "react-router-dom";

interface Props {
  meme: Meme | undefined;
  isLoading: boolean;
}

export const DetailedGif = ({ meme, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div>
        <p>Loading gif...</p>
      </div>
    );
  }

  if (meme === undefined) {
    return (
      <div>
        <p>GIF NOT FOUND</p>
      </div>
    );
  }
  return (
    <div className="detailedGifContainer">
      <div className="headerList">
        <GifTitle title={meme.title} />
      </div>
      <div className="detailedGif">
        <GifCard title={meme.title} alt={meme.title} src={meme.url} />
        <TagList title={meme.title} tags={meme.tags} />
      </div>
      <div className="refTitle font-h3">
        <div className="related_text">
          <div>
            <LikeLogo />
          </div>
          <div>
            <span className="refTitle__text">
              Si te gusto este guif te gustarán...
            </span>
          </div>
        </div>
        <div className="related_memes">
          {meme.relatedMemes.map((relatedMeme, idx) => (
            <div key={idx} className="related_memes--display">
              <Link to={`/gif/${relatedMeme.id}`}>
                <GifCard title={""} alt={""} src={relatedMeme.url} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
