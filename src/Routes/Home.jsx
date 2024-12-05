import Card from '../Components/Card'
import { useDentistState } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists } = useDentistState();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        { dentists.map((dentist) => {
          return <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
          } )}
      </div>
    </main>
  )
}

export default Home