import Button from "./Button";
import ResultContainerStyle from "../assets/css/ResultContainerStyle.module.css";
export default function ResultContainer({ todo, checkTodo, removeTodo }) {
  return (
    <>
      <div className={ResultContainerStyle.resultContainer}>
        {todo.length < 1
          ? "Empty TO DO"
          : todo.map((obj) => (
              <div key={obj.id} className={ResultContainerStyle.result}>
                <div className={ResultContainerStyle.values}>
                  <p className={obj.isDone ? "done" : null}>{obj.text}</p>
                </div>
                <div className={ResultContainerStyle.btn_group}>
                  <Button
                    onClick={() => checkTodo(obj.id)}
                    type="button"
                    className="primary"
                    value="OK"
                    isDone={obj.isDone}
                  />
                  <Button
                    type="button"
                    onClick={() => removeTodo(obj.id)}
                    className="danger"
                    value="DELETE"
                  />
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
