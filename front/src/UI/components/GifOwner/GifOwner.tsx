import { TagsLogo } from "../Logos/TagsLogo";
import "./GifOwner.css";

interface Props {
  title: string;
}

export const GifOwner = ({ title }: Props) => {
  const splitted = title.split(/\s+by\s+/i);
  if (splitted.length > 1) {
    return (
      <div className="title">
        <TagsLogo />
        <h2 className="spanHeader">
          <span aria-label="gif owner" className="font-h3">
            {" "}
            {splitted[1]}
          </span>
        </h2>
      </div>
    );
  }
  return null;
};
