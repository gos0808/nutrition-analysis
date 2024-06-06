export const transformLabels = label => {
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