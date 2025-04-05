const weatherform=document.querySelector(".weatherform")
const cityinput=document.querySelector(".cityname")
console.log(weatherform);
const card=document.querySelector(".card")
const apikey="7ea4d065eafb11d8583caf395e3dabd1";

weatherform.addEventListener("submit", async event=>{
    event.preventDefault();
    const city=cityinput.value

    if(city){
        try{
          const weatherdata =await getweatherdata(city)
          showweatherinfo(weatherdata)
        }catch(error){
            console.error(error)
            displayError(error)

        }

    }else{
        displayError("enter city name")
    }
})

async function getweatherdata(city) {
    const apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const response=await fetch(apiurl)
    console.log(response)
    if(!response.ok){
        throw new Error("could not fetch data")
    }
    return await response.json()
}    
function showweatherinfo(data){
  console.log(data)
  const{name:city,
        main:{temp,humidity},
        weather:[{description,id}]}=data;

   const cityname=document.createElement("h1")
   const tempDisplay=document.createElement("p")
   const humidityDisplay=document.createElement("p")
   const descDisplay=document.createElement("p")
   const weatheremogi=document.createElement("p")
   card.textContent=''
   card.style.display="flex"
   cityname.textContent=city;
   tempDisplay.textContent=`${(temp-273).toFixed(1)}°C`;
   humidityDisplay.textContent=`humidity:${humidity}%`;
   descDisplay.textContent=description;
   weatheremogi.textContent=getweatheremogi(id);

   cityname.classList.add("DisplayCity")
   tempDisplay.classList.add("Displaytemp")
   humidityDisplay.classList.add("Dispalyhumidity")
   descDisplay.classList.add("descDisplay")
   weatheremogi.classList.add("weatheremogi")
   card.appendChild(cityname)
   card.appendChild(tempDisplay)
   card.appendChild(humidityDisplay)
   card.appendChild(weatheremogi)
   card.appendChild(descDisplay)
   

}
function getweatheremogi(id) {
    switch (true) {
      case (id >= 200 && id < 300): return "⛈️"; // Thunderstorm
      case (id >= 300 && id < 400): return "🌦️"; // Drizzle
      case (id >= 500 && id < 600): return "🌧️"; // Rain
      case (id >= 600 && id < 700): return "❄️"; // Snow
      case (id > 700 && id < 800): return "🌫️"; // Atmosphere (fog, dust)
      case (id === 800): return "☀️";            // Clear
      case (id > 800 && id < 900): return "☁️"; // Clouds
      default: return "❓";
    }
  }

function displayError(message){

const errordisplay=document.createElement("p")
errordisplay.textContent=message;
errordisplay.classList.add("errorDisplay")

card.textContent=""
card.style.display="flex"
card.appendChild(errordisplay)
}