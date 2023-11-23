export const fetchWeather = async (step) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${"-22.661281"}&lon=${"-43.117614"}&units=metric&lang=pt_br&appid=66f9981ff477ce00ce5bd98ad04a72f3`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();

        const { weather, main } = json;
        const firstObject = {
            description: weather[0].description,
            main: weather[0].main,
        };
        const originalObject = { ...firstObject, ...main };
        
        const modifiedObject = {};

        for (const key in originalObject) {
            if (Object.prototype.hasOwnProperty.call(originalObject, key)) {
                const newKey = key + `_${step}`;
                modifiedObject[newKey] = originalObject[key];
            }
        }
        return modifiedObject;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
