// == Import
import Header from '../Header';
import Ingredients from '../Ingredients';
import Steps from '../Steps';

import data from '../../data/recipe';

import './styles.css';

const {title, thumbnail, difficulty, author, ingredients, instructions} = data;

// == Composant
const App = () => (
  <div className="recipe">
    <Header 
    title={title}
    thumbnail={thumbnail}
    author={author}
    difficulty={difficulty}
    />
    <Ingredients ingredients={ingredients} />
    <Steps steps={instructions} />
  </div>
);

// == Export
export default App;
