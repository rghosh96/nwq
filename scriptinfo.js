let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    if (document.getElementById('mobileNav').style.visibility == 'visible') {
        document.getElementById('mobileNav').style.visibility = 'hidden';
        document.getElementById("darkLayer").style.display = "none";
    }
    else {
        document.getElementById('mobileNav').style.visibility = 'visible';
        document.getElementById("darkLayer").style.display = "";
    }
});