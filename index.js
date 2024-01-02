//Async Await
// console.log("before");

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then(console.log);
// console.log("after");

//Expect output-

//Before , After, product data,

const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");

const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");

let target = "Haritha";

form.addEventListener("submit", search);

function search(e) {
  e.preventDefault(); //It will not let your data losed
  console.log("Searching");
  target = searchField.value;
  fetchData(target);
  console.log("button search");
}

async function fetchData(target) {
  let endpoint = `http://api.weatherapi.com/v1/current.json?key=32502d69646743089d5121926230211&q=${target}&aqi=no`;
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);

  let currentTemp = data.current.temp_c;
  console.log(currentTemp);
  let locationName = data.location.name;
  console.log(locationName);

  let localTime = data.location.localtime;
  console.log(localTime);
  let currentCondition = data.current.condition.text;
  console.log(currentCondition);
  let currentLogo = data.current.condition.icon;
  console.log(currentLogo);
  updateWeatherData(
    locationName,
    currentTemp,
    localTime,
    currentCondition,
    currentLogo
  );
}

function updateWeatherData(
  cityName,
  temperature,
  localTime,
  currentCondition,
  currentLogo
) {
  cityField.innerText = cityName;
  temperatureField.innerText = temperature;
  dateField.innerText = localTime;
  weatherField.innerText = currentCondition;
  emojiField.src = currentLogo;
}
fetchData("Mumbai");
