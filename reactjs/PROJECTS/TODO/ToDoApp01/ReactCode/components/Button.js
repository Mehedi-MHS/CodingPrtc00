import ButtonStyle from "../assets/css/Button.module.css";
export default function Button({ type, className, value, onClick }) {
  //Then add onClick in the params

  return (
    <>
      <button
        type={type}
        className={`${ButtonStyle.btn} ${ButtonStyle[className]}`}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
}
