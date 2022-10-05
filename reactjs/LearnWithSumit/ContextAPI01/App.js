import Counter from "./components/Counter";
import ClickCounter from "./ClickCounter";
import HoverCounterSection from "./HoverCounterSection";
import { useState, createContext } from "react";
export const ThemeContext = createContext();
export default function App() {
  const [theme] = useState("dark");
  return (
    <>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <ThemeContext.Provider value={theme}>
        <HoverCounterSection />
      </ThemeContext.Provider>
    </>
  );
}
