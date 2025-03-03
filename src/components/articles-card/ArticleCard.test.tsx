import { render, screen } from "@testing-library/react";
import ArticleCard from "./ArticleCard";

jest.mock("../Highlight", () => ({
  __esModule: true,
  default: ({ text }: { text: string }) => <span data-testid="highlight">{text}</span>,
}));

describe("ArticleCard Component", () => {
  const article = {
    title: "CSS Grid Layout",
    date: "Jan 01, 2022",
    content: "Understanding grid-template and grid-auto",
    searchTerm: "grid",
  };

  it("renders the article title, date, and content", () => {
    render(<ArticleCard {...article} />);
    
    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.date)).toBeInTheDocument();
    expect(screen.getByText(article.content)).toBeInTheDocument();
  });

  it("highlights the search term in title and content", () => {
    render(<ArticleCard {...article} />);

    const highlights = screen.getAllByTestId("highlight");
    expect(highlights[0]).toHaveTextContent(article.title);
    expect(highlights[1]).toHaveTextContent(article.content);
  });
});
