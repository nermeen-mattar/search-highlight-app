import React, { useMemo } from "react";
import { Typography } from "@mui/material";
import ArticleCard from "./ArticleCard";

const articles = [
  { id: 1, title: "Understanding the difference between grid-template and grid-auto", date: "Oct 09, 2018", content: "With all the new properties related to CSS Grid Layout..." },
  { id: 2, title: "Recreating the GitHub Contribution Graph with CSS Grid", date: "Nov 12, 2019", content: "A deep dive into creating GitHub’s contribution graph..." },
];

export const ArticlesList: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const filteredArticles = useMemo(() => {
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      <Typography variant="h6" sx={{ mt: 2 }}>
        {filteredArticles.length} posts found.
      </Typography>
      {filteredArticles.map((article) => (
        <ArticleCard title={article.title} content={article.content} date={article.date} searchTerm={searchTerm}/>
      ))}
    </>
  );
};