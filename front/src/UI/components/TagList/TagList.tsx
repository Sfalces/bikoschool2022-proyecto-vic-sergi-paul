import { GifOwner } from "../GifOwner/GifOwner";
import "./TagList.css";

interface Props {
  tags: string[];
  title: string;
}
export const TagList = ({ tags, title }: Props) => {
  return (
    <div>
      <div className="tagsList__TitleContainer">
        <div className="tagsList__TitleText">
          <GifOwner title={title} />{" "}
        </div>
      </div>
      <div className="tag_list">
        {tags.map((tag: string, idx) => (
          <div key={idx} className="tag font-h4">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
