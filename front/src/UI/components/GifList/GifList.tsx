import { useEffect, useState } from "react";
import { Meme } from "../../../core/domain/meme";
import { searchMemes } from "../../../core/aplication/searchMemes";
import "./GifList.css";
import upsideArrow from "../../assets/upside_arrow.svg";
import { GifCard } from "../GifCard/GifCard";
import { debounce } from "lodash";
import { Link } from "react-router-dom";

interface Props {
  search: string;
}

export const GifList = ({ search }: Props) => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const loadMemes = debounce(async () => {
      const memes = await searchMemes(search);
      setMemes(memes);
    }, 500);

    loadMemes();
  }, [search]);
  return (
    <div>
      <div className="headerList font-h2">
        <img src={upsideArrow} title="Trending arrow" alt=""></img>
        <div className="backs">
          <h2 className="back">Los guif más trendings del momento</h2>
          <h2 className="wave">Los guif más trendings del momento</h2>
        </div>
      </div>
      <div className="gifList gifColumns-6">
        {memes.map((gif) => (
          <Link key={gif.id} to={`/gif/${gif.id}`}>
            <GifCard title={gif.title} alt={gif.title} src={gif.url} />
          </Link>
        ))}
      </div>
    </div>
  );
};
