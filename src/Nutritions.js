function Nutritions({ calories, cautions, totalNutrients, ingredients }) {

    const transformIngredientLabel = label => {
        switch (label) {
            case 'Total lipid (fat)':
                return 'Total Fat';
            case 'Fatty acids, total saturated':
                return 'Saturated Fat';
            case 'Fiber, total dietary':
                return 'Dietary Fiber';
            case 'Carbohydrate, by difference':
                return 'Total Carbohydrate';
            case 'Sugars, total including NLEA':
                return 'Total Sugars';
            case 'Vitamin E (alpha-tocopherol)':
                return 'Vitamin E';
            case 'Vitamin K (phylloquinone)':
                return 'Vitamin K';
            case 'Fatty acids, total polyunsaturated':
                return null;
            case 'Fatty acids, total monounsaturated':
                return null;
            case 'Folate, food':
                return null;
            default:
                return label;
        }
    };

    const colorClasses = [
        'first-color',
        'second-color',
        'third-color',
        'fourth-color',
        'fifth-color'
    ];

    const getRandomClass = () => {
        const randomIndex = Math.floor(Math.random() * colorClasses.length);
        return colorClasses[randomIndex];
    };

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
                    const newLabel = transformIngredientLabel(label);
                    return newLabel !== null ?
                        <div className={`nutrient ${getRandomClass()}`} key={index}>
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