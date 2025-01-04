export function renameKeys(array, daysLenght) {
    return array.map((obj, index) => {
        const renamedKeys = {
            temperaturaMinima: `minTemp_day_${index}`,
            temperaturaMedia: `medTemp_day_${index}`,
            temperaturaMaxima: `maxTemp_day_${index}`,
            precipitacao: `precipitation_day_${index}`,
            umidadeMinima: `minHum_day_${index}`,
            umidadeMaxima: `maxHum_day_${index}`,
        };

        const newObj = {};

        Object.keys(obj).forEach((key) => {
            const newKey = renamedKeys[key] || key;
            newObj[newKey] = obj[key];
        });

        return newObj;
    });
}


export function validateData(date_init, date_end, dataLenght) {
    const daysDiferrence = calcDaysDifference(date_init, date_end);
    return daysDiferrence === dataLenght - 1;
}

function calcDaysDifference(date_init, date_end) {
  const init = new Date(date_init);
  const end = new Date(date_end);
  const differernceMileseconds = Math.abs(end - init);
  const daysDiferrence = Math.ceil(differernceMileseconds / (1000 * 60 * 60 * 24));
  return daysDiferrence;
}

export function validateDateSequence(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return firstDate < secondDate;
}