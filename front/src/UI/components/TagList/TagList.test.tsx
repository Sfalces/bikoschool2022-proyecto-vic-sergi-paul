import { render, screen } from "@testing-library/react";
import { TagList } from "./TagList";

describe("TagList", () => {
  it("Se muestra una lista de tags", () => {
    const tags = ["some-tag", "another-tag"];
    render(<TagList title="esto sobra" tags={tags} />);
    for (const tagText of tags) {
      const tag = screen.getByText(tagText);
      expect(tag).toBeVisible();
    }
  });
});
