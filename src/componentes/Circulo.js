import { useState } from "react";

export const Circulo = () => {
  const [activo, setActivo] = useState(false);
  const toggle = () => {
    setActivo(!activo);
  };
  return (
    <>
      {/* <div className={`circulo${activo ? " activo" : ""}`} onClick={toggle}></div> */}
      <div
        className="circulo"
        style={{ backgroundColor: activo ? "orange" : "grey" }}
        onClick={toggle}
      ></div>
    </>
  );
};
