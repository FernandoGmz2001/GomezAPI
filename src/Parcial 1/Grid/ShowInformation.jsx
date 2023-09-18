import './ShowInformation.css'
import { useEffect, useState } from "react";
export default function ShowInformation() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8080/alumnos")
      .then((response) => response.json())
      .then((alumno) => {
        setData(alumno);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Cargando...</h1>;
  return (
    <div>
      <h1>API Data</h1>
      <table className="table__container">
        <thead>
          <th>Nombre</th>
          <th>Apellido paterno</th>
          <th>Apellido materno</th>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key="edad">
                <td>{item.nombre}</td>
                <td>{item.apellido_paterno}</td>
                <td>{item.apellido_materno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
