import './App.css';
import './Loader.css';
import { useState, useEffect } from 'react';
import Nutritions from './Nutritions';
import LoaderPage from './LoaderPage';
import Recipe from './Recipe';
import getNutriotionData from './requestApi';
import Swal from 'sweetalert2';

function App() {

  const [recipe, setRecipe] = useState('1 salmon, 1 orange');
  const [analyzedRecipe, setAnalyzedRecipe] = useState('');
  const [nutritions, setNutritions] = useState('');
  const [stateLoader, setStateLoader] = useState(false);

  const fetchData = async (ingr) => {

    setStateLoader(true);
    const response = await getNutriotionData(ingr);

    if (response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setNutritions(data);
    } else {
      setStateLoader(false);
      Swal.fire("Ingredients entered incorrectly. Please, enter ingredient and quantity");
    }

  };

  useEffect(() => {
    if (analyzedRecipe !== '') {
      let ingr = analyzedRecipe.split(/[,,;,\n,\r]/);
      fetchData(ingr);
    }
  }, [analyzedRecipe]);

  const { calories, cautions, totalNutrients, ingredients } = nutritions;


  return (
    <div className="App">

      {stateLoader && <LoaderPage />}

      <div>
        <h1>Nutrition Analyzer: Enter an ingredient list and quantity for what you are cooking</h1>
      </div>

      <Recipe
        recipe={recipe}
        setRecipe={setRecipe}
        setAnalyzedRecipe={setAnalyzedRecipe}
        analyzedRecipe={analyzedRecipe}
        nutritions={nutritions}
      />

      <Nutritions
        calories={calories}
        cautions={cautions}
        totalNutrients={totalNutrients}
        ingredients={ingredients}
        nutritions={nutritions}
      />
    </div>
  );
}

export default App;
