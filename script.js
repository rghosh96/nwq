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

//duty button
var g = document.getElementById("g");
var h = document.getElementById("h");
var m = document.getElementById("m");
var c = document.getElementById("c");
var modal = document.getElementById("modal");
var building = document.getElementById("gatewood");
var exit = document.getElementsByClassName("close")[0];
g.onclick = function() {
    modal.style.display = "block";
    g.style.visibility = "hidden";
    h.style.visibility = "hidden";
    m.style.visibility = "hidden";
    c.style.visibility = "hidden";
    building.style.transform = "scale(1.5)";
}
exit.onclick = function() {
    modal.style.display = "none";
    g.style.visibility = "visible";
    h.style.visibility = "visible";
    m.style.visibility = "visible";
    c.style.visibility = "visible";
    building.style.transform = "scale(1)";
}
