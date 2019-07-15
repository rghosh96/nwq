var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log(currentHour);
if (8 < currentHour && currentHour <= 18) {
    document.body.style.backgroundImage = "url('morning.svg')";
}
else if (18 < currentHour && currentHour <= 20) {
    document.body.style.backgroundImage = "url('dusk.svg')";
}
else if (5 <= currentHour && currentHour < 8) {
    document.body.style.backgroundImage = "url('dawn.svg')";
}
else {
    document.body.style.backgroundImage = "url('night.svg')";
}