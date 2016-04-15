var clickNav = document.getElementById("openMenu"); 
clickNav.addEventListener("click", displayMenu, false); 

function displayMenu(){
	var elem = document.getElementById("navMenu");
    elem.classList.toggle("opened");
}


var clickBeaute = document.getElementById("openBeaute"); 
clickBeaute.addEventListener("click", displayBeaute, false); 

function displayBeaute(){
	var elem2 = document.getElementById("menuBeaute");
    elem2.classList.toggle("slide");
}

var clickCoiffure = document.getElementById("openCoiffure"); 
clickCoiffure.addEventListener("click", displayCoiffure, false); 

function displayCoiffure(){
	var elem2 = document.getElementById("menuCoiffure");
    elem2.classList.toggle("slide");
}