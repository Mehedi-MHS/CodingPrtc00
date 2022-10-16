import { NavLink } from "react-router-dom";
import "../assets/css/Style.css";

const pages = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "about" },
  { id: 3, name: "Services", path: "services" },
];

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          {pages.map((values) => (
            <li key={values.id}>
              <NavLink
                to={values.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {values.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
