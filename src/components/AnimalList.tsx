import AnimalListItem from "./AnimalListItem";
import {Animal} from "../shared/interfaces/animal.interface";

const AnimalList = ({animals}: { animals: Animal[] }) => {
  const hasAnimals = animals.length > 0

  return (
      <>
        {hasAnimals && (
            <ul>
              {animals.map(animal => <AnimalListItem key={animal.id} {...animal} />)}
            </ul>
        )}

        {!hasAnimals && <p>Animal list is empty</p>}
      </>
  );
}

export default AnimalList