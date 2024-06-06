export const colorClasses = [
    'first-color',
    'second-color',
    'third-color',
    'fourth-color',
    'fifth-color'
];

export const getRandomClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
};