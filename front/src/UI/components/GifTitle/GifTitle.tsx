interface Props {
  title: string;
}

export const GifTitle = ({ title }: Props) => {
  const splitted = title.split(/\s+by\s+/i);
  if (splitted.length === 1) {
    return (
      <h1>
        <span aria-label="gif title" className="font-h2">
          {title}
        </span>
      </h1>
    );
  }

  return (
    <h1>
      <span aria-label="gif title" className="font-h2">
        {splitted[0]}
      </span>
      <span aria-label="gif owner" className="font-h2-light">
        {" "}
        by {splitted[1]}
      </span>
    </h1>
  );
};
