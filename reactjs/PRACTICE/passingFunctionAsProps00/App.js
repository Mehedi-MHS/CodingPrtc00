import Button from "./Button";
import HandleClick from "./Functionality";

export default function App() {
  return (
    <Button
      title="Show Messege"
      onClick={() => HandleClick("lorem ipsum dolor sit amet...")}
    />
  );
}
