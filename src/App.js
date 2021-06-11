import { Circulo } from "./componentes/Circulo";

function App() {
  const circulos = Array.from(new Array(5), (elemento, i) => i + 1);
  return (
    <div className="contenedor">
      {circulos.map((circulo) => (
        <Circulo key={circulo} />
      ))}
    </div>
  );
}

export default App;
