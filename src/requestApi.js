const getNutriotionData = async (ingr) => {
    const apiURL = 'https://api.edamam.com/api/nutrition-details?';
    const apiId = 'e0f2eaa9';
    const apiKey = 'e2ac61056c661a135d8161f23a73b02c';

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
    return response;
};

export default getNutriotionData;