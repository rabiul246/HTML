



async function fetchWeatherData(){

    
    try{
        const response = await("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bangladesh?unitGroup=metric&key=WKJJBPNN7VEJ6CZQWC3DXRPQS&contentType=json");

        if (!response.ok){
            throw new Error("Coulde not found!"); 
        }
        const data = await response.jsoon();
        console.log(data);
    }
    catch{
        console.error(error);
    }

}