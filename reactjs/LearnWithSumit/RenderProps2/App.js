import Counter from "./libs/Counter";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

export default function App() {
  return (
    <>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </>
  );
}
