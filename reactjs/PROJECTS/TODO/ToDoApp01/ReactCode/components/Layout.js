import "../assets/css/Style.css";

export default function Layout({ children }) {
  return (
    <>
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
