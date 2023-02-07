import "./GifCard.css";

interface Props {
  title: string;
  src: string;
  alt: string;
}

export const GifCard = ({ title, src, alt }: Props) => {
  return <img className="gifCard" title={title} alt={alt} src={src} />;
};
