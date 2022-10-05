import HoverCounter from "./HoverCounter";
import Counter from "./components/Counter";
import { useContext } from "react";
import { ThemeContext } from "./App";
function HoverCounterSection() {
  const theme = useContext(ThemeContext);
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
    </>
  );
}
export default HoverCounterSection;
