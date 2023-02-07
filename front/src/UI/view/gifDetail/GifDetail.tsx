import { useState, useEffect } from "react";
import "./GifDetail.css";
import { Layout } from "../../layout/Layout";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { Meme } from "../../../core/domain/meme";
import { DetailedGif } from "../../components/DetailedGif/DetailedGif";
import { getMeme } from "../../../core/aplication/getMeme";

export const GifDetail = () => {
  const { gifID } = useParams();
  const [meme, setMeme] = useState<Meme | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMeme = async () => {
      const response = await getMeme(gifID as string);
      setMeme(response);
      setIsLoading(false);
    };
    loadMeme();
  }, [gifID]);

  return (
    <div className="App">
      <Layout>
        <Header />
        <DetailedGif meme={meme} isLoading={isLoading} />
      </Layout>
    </div>
  );
};
