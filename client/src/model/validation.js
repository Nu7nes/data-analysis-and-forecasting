export const expectedKeys = [
    'date_init',
    'weight_init',
    'color_cassava',
    'state_cassava',
    'texture_cassava',
    'external_help',
    'date_end',
    'weight_end',
    'starch_end',
    'how_fermented'
]

export function validObjectKeys(obj) {
    return expectedKeys.every(key => obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== '');
}

export function validObjectValues(obj) {
    return Object.values(obj).every(value => value !== undefined && value !== null && value !== '');
}

export function missingKeysList(obj) {
    return expectedKeys.filter(key => !obj.hasOwnProperty(key) || obj[key] === undefined || obj[key] === null || obj[key] === '');
}