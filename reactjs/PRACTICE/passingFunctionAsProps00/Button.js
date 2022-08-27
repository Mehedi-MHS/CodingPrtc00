export default function Button({ title, onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
        {title}
      </button>
    </>
  );
}
