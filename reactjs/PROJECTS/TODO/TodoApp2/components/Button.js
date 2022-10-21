import ButtonStyle from "../assets/css/Button.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RestoreIcon from "@mui/icons-material/Restore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
//Its not recommended to use direct switch statement inside return/render function. Use self invoking function or a component
const switchFunction = (params, isDone) => {
  switch (params) {
    case "DELETE":
      return <DeleteIcon />;
    case "OK":
      return isDone ? <CheckCircleIcon /> : null;
    case "RESET":
      return <RestoreIcon />;
    case "ADD":
      return <AddCircleIcon />;
    default:
      return "";
  }
};

export default function Button({ type, className, value, onClick, isDone }) {
  return (
    <>
      <button
        type={type}
        className={`${ButtonStyle.btn} ${ButtonStyle[className]}`}
        onClick={onClick}
      >
        {switchFunction(value, isDone)}
        {value}
      </button>
    </>
  );
}
