import WithCounter from "./HOC/WithCounter";

const HoverCounter = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <h1 onMouseOver={increment}> Hovered {count} Times..</h1>
    </div>
  );
};

export default WithCounter(HoverCounter);
