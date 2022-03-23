import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./components/useContext/ThemeContext";
import Button from "./components/useContext/Button";

function App() {
  return (
    <ThemeProvider>
      <Button></Button>
    </ThemeProvider>
  );
}

export default App;
