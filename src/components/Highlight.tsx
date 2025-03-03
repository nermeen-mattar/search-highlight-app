import React from "react";
import { styled } from "@mui/system";

const HighlightSpan = styled("span")({
  backgroundColor: "yellow",
  fontWeight: "bold",
});

interface HighlightProps {
  text: string;
  searchTerm: string;
}

const Highlight: React.FC<HighlightProps> = ({ text, searchTerm }) => {
  if (!searchTerm) return <>{text}</>;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? <HighlightSpan key={index}>{part}</HighlightSpan> : part
      )}
    </>
  );
};

export default Highlight;
