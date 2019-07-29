var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log(currentHour);
var buildingModals = document.getElementsByClassName('modalcontent'); // get all elements
if (8 < currentHour && currentHour <= 18) {
    document.body.style.backgroundImage = "url('morning.svg')";
	for(var i = 0; i < buildingModals.length; i++){
		buildingModals[i].style.backgroundColor = "#6DAF84";
	}
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
var exit = document.getElementsByClassName("close");

function dropModal(modal, building) {
            document.getElementById(modal).style.display = "block";
            g.style.visibility = "hidden";
            h.style.visibility = "hidden";
            m.style.visibility = "hidden";
            c.style.visibility = "hidden";
            document.getElementById(building).style.transform = "scale(1.2) translate(0px, -30px)";
        for (var i = 0; i < exit.length; i++) {
        exit[i].onclick = function() {
            document.getElementById(modal).style.display = "none";
            g.style.visibility = "visible";
            h.style.visibility = "visible";
            m.style.visibility = "visible";
            c.style.visibility = "visible";
            document.getElementById(building).style.transform = "scale(1) translate(0px, 0px)";
        }
    }
    }

