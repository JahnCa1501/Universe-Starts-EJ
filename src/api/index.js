//Ruta de la API
const api = "https://api.nasa.gov/";

export const nasaApod = async () => {
    const endpoint = `${api}planetary/apod?api_key=VWggYB9qMo71gJQighU4xx19dPVghXdTwRhm9ZhU`;
 
    //Realizar la peticion a la api
    const response = await fetch(endpoint);
    const data = await response.json();
 
    console.log(data);
 
    return data;
 };

 export const neoNasa = async () => {

     const endpoint = `${api}neo/rest/v1/feed/today?detailed=true&api_key=VWggYB9qMo71gJQighU4xx19dPVghXdTwRhm9ZhU`;

     //Realizar la peticion a la api
    const response = await fetch(endpoint);
    const data = await response.json();
 
    console.log(data);
 
    return data;
 }

 export const roverPhotos = async () => {

    const endpoint = `${api}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=VWggYB9qMo71gJQighU4xx19dPVghXdTwRhm9ZhU`;

    //Realizar la peticion a la api
   const response = await fetch(endpoint);
   const data = await response.json();

   console.log(data);

   return data;
}


   const api2 = "https://eonet.sci.gsfc.nasa.gov/";
export const event = async () => {
   const endpoint = `${api2}api/v2.1/events?days=2`;

   //Realizar la peticion a la api
   const response = await fetch(endpoint);
   const data = await response.json();

   console.log(data);

   return data;
};
