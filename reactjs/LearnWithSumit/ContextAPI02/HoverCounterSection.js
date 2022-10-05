import HoverCounter from "./HoverCounter";
import Counter from "./components/Counter";
import { useContext } from "react";
import { ThemeContext } from "./App";
function HoverCounterSection() {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <>
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
          />
        )}
      />
      <button type="button" onClick={switchTheme}>
        Change Theme
      </button>
    </>
  );
}
export default HoverCounterSection;
