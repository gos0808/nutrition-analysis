function Recipe({ recipe, setRecipe, setAnalyzedRecipe, nutritions }) {

    const handleInputChange = (e) => {
        setRecipe(e.target.value);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        setAnalyzedRecipe(recipe);
    };

    return (
        <div>
            <div>
                <textarea
                    placeholder="Enter ingredients and quantity"
                    value={recipe}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <button onClick={handleButtonClick}>
                    Analyze Recipe
                </button>
            </div>
        </div >

    );
}

export default Recipe;