import NavbarStyle from "../assets/css/NavbarStyle.module.css";
import Button from "./Button";
export default function Navbar({ resetTodo }) {
  return (
    <>
      <nav className={NavbarStyle.nav}>
        <ul>
          <li>ToDo</li>
          <li>
            {" "}
            <Button
              type="button"
              onClick={resetTodo}
              className="success"
              value="RESET"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
