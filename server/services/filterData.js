export function selectNeededKeys(array) {
    const myNeededKeys = [
        'temperaturaMinima',
        'temperaturaMedia',
        'temperaturaMaxima',
        'precipitacao'
    ];
    const assistNeededKeys = [
        'umidadeMinima',
        'umidadeMaxima'
    ];

    const result = array[0].map((object) => {
        const filteredObject = {};

        myNeededKeys.forEach((key) => {
            filteredObject[key] = object[key];
        });

        assistNeededKeys.forEach((key) => {
            filteredObject[key] = array[1].find((obj) => obj.data === object.data)[key];
        });

        return filteredObject;
    });

    return result;
}