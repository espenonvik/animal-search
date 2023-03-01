import {Animal} from "../shared/interfaces/animal.interface";

const AnimalListItem = ({name, age, type}: Animal) => {
  return (
      <li>
        <strong>{type}</strong> {name} {age} years old
      </li>
  )
}

export default AnimalListItem