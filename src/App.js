import './App.css';
import './Loader.css';
import { useState, useEffect } from 'react';
import Nutritions from './Nutritions';
import LoaderPage from './LoaderPage';
import Recipe from './Recipe';
// import ApiCall from './ApiCall';
import Swal from 'sweetalert2';

function App() {

  const apiURL = 'https://api.edamam.com/api/nutrition-details?';
  const apiId = 'e0f2eaa9';
  const apiKey = 'e2ac61056c661a135d8161f23a73b02c';

  const [recipe, setRecipe] = useState('1 salmon, 1 orange');
  const [analyzedRecipe, setAnalyzedRecipe] = useState('');
  const [nutritions, setNutritions] = useState('');
  const [stateLoader, setStateLoader] = useState(false);

  // <ApiCall
  //   setStateLoader={setStateLoader}
  //   setNutritions={setNutritions}
  //   analyzedRecipe={analyzedRecipe} />;

  const fetchData = async (ingr) => {

    setStateLoader(true);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'ingr': ingr
      })
    };

    const response = await fetch(`${apiURL}app_id=${apiId}&app_key=${apiKey}`, requestOptions);

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
      let ingr = analyzedRecipe.split(/[;,\n,\r]/);
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
      />

      <Nutritions
        calories={calories}
        cautions={cautions}
        totalNutrients={totalNutrients}
        ingredients={ingredients}
      />
    </div>
  );
}

export default App;
