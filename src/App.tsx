import {useEffect, useState} from 'react'
import './App.css'
import AnimalList from "./components/AnimalList";
import {Animal} from "./shared/interfaces/animal.interface";

function App() {
  const [animals, setAnimals] = useState<Animal[]>([])


  useEffect(() => {
    searchForAnimalType('').then(() => console.log('Initial animal list loaded'));
  }, []);

  const searchForAnimalType = async (type: string): Promise<void> => {
    const urlSearchParams = new URLSearchParams({type});
    const response = await fetch(`${import.meta.env.VITE_API_URL}?${urlSearchParams}`);
    const data = await response.json()
    setAnimals(data)
  }

  return (
      <main>
        <h1>Animal search</h1>
        <input type="text" placeholder="Search for an animal type..." onChange={e => searchForAnimalType(e.target.value)}/>
        <AnimalList animals={animals}/>
      </main>
  )
}

export default App
