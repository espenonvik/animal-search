import express, {Response} from 'express';
import cors from 'cors';
import Chance from "chance";

const chance = new Chance();
const numbers = Array(100).keys();

interface Animal {
  id: number;
  type: string;
  name: string;
  age: number;
}

const animals: Animal[] = [...numbers].map((id) => ({
      id,
      type: chance.animal(),
      name: chance.name({prefix: true}),
      age: chance.age(),
    })
);

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get('', (req, res: Response<Animal[]>) => {
  const type = req.query?.type?.toString().toLowerCase() || '';

  const result = animals.filter(animal => {
    return animal.type.toLowerCase().includes(type);
  });

  res.send(result);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
