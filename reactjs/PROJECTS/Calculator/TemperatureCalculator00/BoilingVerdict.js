export default function BoilingVedict(props) {
  const temperature = parseFloat(props.temperature);
  if (Number.isNaN(temperature)) {
    return null;
  }
  return temperature && temperature >= 100 ? (
    <p style={{ color: "green" }}>Water would boil !.</p>
  ) : (
    <p style={{ color: "red" }}>Water would not boil </p>
  );
}
