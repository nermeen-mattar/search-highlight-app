import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Highlight from "./Highlight";

interface ArticleCardProps {
  title: string;
  date: string;
  content: string;
  searchTerm: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, content, searchTerm }) => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6"><Highlight text={title} searchTerm={searchTerm} /></Typography>
        <Typography variant="caption" color="textSecondary">{date}</Typography>
        <Typography variant="body2"><Highlight text={content} searchTerm={searchTerm} /></Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
