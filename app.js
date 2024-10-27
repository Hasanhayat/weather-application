let city = document.querySelector("#city").value;
const apiKey = "0b3a4560180a457daa0152104242510";
const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

let icon = document.querySelector("img");
let temp = document.querySelector(".tempInCel");
let details = document.getElementsByTagName("li");

function checkWeather() {
  //axios method
  axios
    .get(URL)
    .then(function (respone) {
      console.log(respone.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// function checkWeather(){
//fetch method

// fetch(URL)
// .then(function(respone){
//   return respone.json();
// })
// .then(function(data){
//   console.log(data);

// })
// .catch(function(err){
//   console.log(err);

// })
// }
