export const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${'-22.661281'}&lon=${'-43.117614'}&units=metric&lang=pt_br&appid=66f9981ff477ce00ce5bd98ad04a72f3`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
