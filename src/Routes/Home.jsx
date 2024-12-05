import React from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentists(res.data);
    })
  }, []);

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