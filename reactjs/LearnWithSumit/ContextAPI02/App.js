import Counter from "./components/Counter";
import ClickCounter from "./ClickCounter";
import HoverCounterSection from "./HoverCounterSection";
import { useState, createContext } from "react";
export const ThemeContext = createContext();
export default function App() {
  const [theme, setTheme] = useState("dark");
  function switchTheme() {
    setTheme((previousTheme) => {
      return previousTheme === "dark" ? "light" : "dark";
    });
  }
  return (
    <>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        <HoverCounterSection />
      </ThemeContext.Provider>
    </>
  );
}
