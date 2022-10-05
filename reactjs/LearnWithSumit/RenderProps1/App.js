import User from "./components/User";
export default function App() {
  return (
    <>
      <User name={(isLoggedIn) => (isLoggedIn ? "Mehedi" : "Guest")} />
    </>
  );
}
