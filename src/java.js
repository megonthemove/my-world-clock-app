function showCity(event) {
  if (event.target.value.length > 0) {
  let currentTime = moment().tz(event.target.value).format("dddd, MMMM D, YYYY h:mm P");
 
    alert(`It is ${currentTime} in ${event.target.value}`);
}
}
let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", showCity);