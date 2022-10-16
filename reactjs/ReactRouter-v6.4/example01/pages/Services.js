export default function Services() {
  const services = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "App Development" },
    { id: 3, name: "AI " },
    { id: 4, name: "Machine Learning" },
  ];

  return (
    <>
      <h1>Services</h1>
      <p>Our services are .....</p>
      <ul>
        {services.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </>
  );
}
