import { useState } from 'react';
import './App.css';
import { TextField, Container} from "@mui/material";
import ArticlesList from './components/articles-list/ArticlesList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
    <TextField
      fullWidth
      label="Search"
      variant="outlined"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <ArticlesList searchTerm={searchTerm} />
  </Container>
  );
}

export default App;
