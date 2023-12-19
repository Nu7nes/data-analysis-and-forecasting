import { selectNeededKeys } from "./filterData.js";
import {
    renameKeys,
    validateData,
    validateDateSequence,
} from "./adjustData.js";

function makeRequest(url) {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(url);
        if (!response.ok) {
            reject(new Error(`HTTP error! status: ${response.status}`));
        } else {
            const data = await response.json();
            if (data.items.length === 0)
                reject(new Error(`Nenhum dado encontrado`));
            resolve(data.items);
        }
    });
}

export async function getWeatherData(date_init, date_end) {
    if (!validateDateSequence(date_init, date_end))
        throw new Error("Data inicial maior que data final");
    const myLocation = "9014021";
    const assistLocation = "9000545";
    const dataWeather = [];

    const urls = [
        `https://www.agritempo.gov.br/agritempo/controlador?objeto=ClimaDiario&acao=PesquisaWeb&idEstacao=${myLocation}&dataInicial=${date_init}&dataFinal=${date_end}`,
        `https://www.agritempo.gov.br/agritempo/controlador?objeto=ClimaDiario&acao=PesquisaWeb&idEstacao=${assistLocation}&dataInicial=${date_init}&dataFinal=${date_end}`,
    ];

    const promisses = Promise.all(urls.map((url) => makeRequest(url)))
        .then(async (responses) => {
            console.log("Todas as requisições foram concluídas:");

            const filteredObject = await selectNeededKeys(responses);
            console.log("Objetos filtrados");

            if (!validateData(date_init, date_end, filteredObject.length))
                return {
                    error: true,
                    message: "Dados insuficientes para o período selecionado",
                };

            const renamedObjects = await renameKeys(filteredObject);

            const unifiedObject = {
                ...renamedObjects.reduce((combinedObj, obj) => {
                    return { ...combinedObj, ...obj };
                }, {}),
                error: false,
            };
            console.log("Objetos renomeados");

            console.log("Objetos prontos para serem salvos no banco de dados");
            console.log(unifiedObject);
            return unifiedObject;
        })
        .catch((error) => {
            return { error: true, message: error.message };
        });

    return promisses;
}

