import { useEffect, useState } from 'react';
import { transformLabels } from './Labels';
import { getRandomClass } from './RandomColor';


function Nutritions({ calories, cautions, totalNutrients, ingredients }) {

    const [randomColors, setRandomColors] = useState([]);

    useEffect(() => {
        if (totalNutrients) {
            const newRandomColors = Object.values(totalNutrients).map(() => getRandomClass());
            setRandomColors(newRandomColors);
        }
    }, [totalNutrients]);

    return (
        <div>
            <p className="calories">{calories && `Total ${calories} kcal`}</p>
            {ingredients && ingredients.map((ingredient) => (
                ingredient.parsed.map((parsedIngredient, index) => (
                    <p className="ingredients-list" key={index}>{parsedIngredient.quantity} {parsedIngredient.foodMatch + ' '}
                        <b>{parsedIngredient.nutrients.ENERC_KCAL.quantity + ' kcal'}</b>
                    </p>
                ))
            ))}
            <p className="cautions">{cautions && 'Cautions: can contains ' + String(cautions).toLowerCase()}</p>

            <div className='nutrients'>
                {totalNutrients && Object.values(totalNutrients).map((value, index) => {
                    const { label, quantity, unit } = value;
                    const newLabel = transformLabels(label);

                    return newLabel !== null ?
                        <div className={`nutrient ${randomColors[index]}`} key={index}>
                            <p className="label">{newLabel.split(',')[0]}</p>
                            <p className="quantity">{quantity && quantity.toFixed(1) + ' ' + unit}</p>
                        </div >
                        : null;
                })}
            </div >
        </div >
    );
};

export default Nutritions;