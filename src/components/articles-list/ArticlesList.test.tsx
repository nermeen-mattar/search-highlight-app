import { render, screen } from "@testing-library/react";
import ArticlesList from "./ArticlesList";

jest.mock("../articles-card/ArticleCard", () => ({
  __esModule: true,
  default: () => <div data-testid="article-card">ArticleCard</div>,
}));

describe("ArticlesList Component", () => {
  it("renders the correct number of articles", () => {
    render(<ArticlesList searchTerm="" />);
    expect(screen.getByText("2 posts found.")).toBeInTheDocument();
    expect(screen.getAllByTestId("article-card")).toHaveLength(2);
  });

  it("filters articles based on search term", () => {
    render(<ArticlesList searchTerm="GitHub" />);
    expect(screen.getByText("1 posts found.")).toBeInTheDocument();
    expect(screen.getAllByTestId("article-card")).toHaveLength(1);
  });

  it("renders no articles when no match is found", () => {
    render(<ArticlesList searchTerm="Angular" />);
    expect(screen.getByText("0 posts found.")).toBeInTheDocument();
    expect(screen.queryByTestId("article-card")).not.toBeInTheDocument();
  });
});
