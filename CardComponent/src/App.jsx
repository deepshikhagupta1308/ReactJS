import { useState } from "react";
import "./App.css";
import Card from "./Component/card";
import { ThemeProvider } from "./context/Theme";
import GoolgeSignIn from "./Component/SignIn";

function App() {
  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  const [theme, setTheme] = useState(lightTheme);

  const toggle = () => {
    //console.log(darkTheme.backgroundColor);
    if (theme.backgroundColor === lightTheme.backgroundColor) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <ThemeProvider value={{ theme, setTheme }}>
        <button onClick={toggle}>Change Theme</button>
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
