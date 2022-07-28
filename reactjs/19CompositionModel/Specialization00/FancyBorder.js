const FancyBorder = function (props) {
  return (
    <>
      <div className={"fancyborder bg-" + props.color}>{props.children}</div>
    </>
  );
};

export default FancyBorder;
