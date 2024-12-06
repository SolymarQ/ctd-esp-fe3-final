import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState({});
  // const params = useParams();
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  useEffect(() => {
    axios(url).then((res) => {
      setDentist(res.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Detail Dentist {dentist.id} </h1>
      </header>
      <section className="detail">
        <img src="/public/images/doctor.jpg" alt="Doctor" />
        <div>
          <h2>Nombre: {dentist.name}</h2>
          <h3>Email: {dentist.email}</h3>
          <h3>Telefono: {dentist.phone}</h3>
          <h3>Website: {dentist.website}</h3>
        </div>
      </section>
    </div>
  );
};

export default Detail;
