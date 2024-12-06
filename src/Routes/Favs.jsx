import Card from "../Components/Card";
import { useDentistState } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state: { favs } } = useDentistState();
  console.log(favs)
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        { favs.map((dentist) =>(
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
        ))}
        { }
      </div>
    </>
  );
};

export default Favs;
