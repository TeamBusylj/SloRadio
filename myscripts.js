function onloayde() {
	var elaas = document.getElementById('butt');
	var elasas = document.getElementById('rig');
	var elas = document.getElementById('bottom');
	var ela = document.getElementById('radioan');
	var el = document.querySelectorAll('.radii');
	elaas.classList.add("buta");
	
	elas.classList.add("buta");
	elasas.classList.add("buta");

	for (var i = 0; i < el.length; i++) {
		el[i].classList.add("radia");
	}
	ela.classList.add("radian");
	setTimeout(function() {
		ela.style.opacity = "1";
		ela.classList.remove("radian");
		for (var i = 0; i < el.length; i++) {
			el[i].classList.remove("radia");
			el[i].style.opacity = "1";
		}


	}, 2000);

}

function favi(x, y, z){
	localStorage.setItem([
	'1',	x, y, z
	]);

}

function getFavi() {
document.getElementById("imga").src = (localStorage.x)
	for (var i = 0; i < localStorage.length; i++) {
		
	}
	console.log(items)
	var favi = document.getElementById("radio")

}


function favi(y, x, z) {
	let lol = localStorage.length + 1;
	localStorage.setItem(lol, x + ', ' + y + ', ' + z);
	console.log(localStorage)
	var img = document.getElementById('favi').src;
	if (document.querySelector(".favorite").src = ('./assets/fav.svg')) {
		document.querySelector(".favorite").src = './assets/favfill.svg';
	} else {
		document.querySelector(".favorite").src = './assets/fav.svg';
	}

}

function mayno() {
	alert("Mogoče ne bo delovalo.");
}





function myFunction(y, x, z) {

	
		loads()
		var audio = document.getElementById("zvok")
		document.getElementById("audioId").setAttribute('src', y);
		var element = document.getElementById("radioan");
		element.style.filter = "invert(0%)";
		element.classList.add("animated");
		audio.load();

		setTimeout(function() {
			document.getElementById("radioan").setAttribute('src', './assets/' + x);
		}, 200);


		document.getElementById("p").innerHTML = z;
		audio.play();
	
}



window.onscroll = function() {
	if (screen.availHeight > screen.availWidth) {
		scrollFunction()
	}
}

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 120) {
		document.getElementById("radioan").style.height = "300px";


	} else {
		document.getElementById("radioan").style.height = "600px";

	}
}


function mutefVid() {

	var vid = document.getElementById("zvok");
	if (vid.muted == false) {
		document.getElementById("mute").setAttribute('src', './assets/mute.svg');
		document.getElementById("murk").innerHTML = 'Brez zvoka';
		document.getElementById("murk").style.fontSize = "55px";
		document.getElementById("murk").style.bottom = "75%";
		vid.muted = true;
	} else {
		document.getElementById("murk").style.bottom = "";
		document.getElementById("mute").setAttribute('src', './assets/unmute.svg');
		document.getElementById("murk").innerHTML = 'Zvok';
		document.getElementById("murk").style.fontSize = "";
		vid.muted = false;
	}
}



function screensaver() {
	var element = document.getElementById("screensaver");
	element.classList.add("screen");
	let elem = document.querySelector("body");
	AndroidInterface.showToast();

}


function myShow() {
	var element = document.getElementById("screensaver");
	element.classList.remove("screen");
	let elem = document.querySelector("body");
	AndroidInterface.showmy();


}

function loads() {

	var element = document.getElementById("loader");
	element.classList.remove("hide");
	element.classList.add("show");
	element.classList.remove("animated");
	element.classList.add("animated2");
	var elemento = document.getElementById("radioan");
	elemento.classList.remove("animated2");
	elemento.classList.add("animated");
}

function loaded() {
	var element = document.getElementById("loader");
	var elemento = document.getElementById("radioan");

	elemento.classList.add("animated");
	element.classList.remove("show");
	element.classList.add("hide");


	elemento.classList.remove("animated");
	elemento.classList.add("animated2");
	setTimeout(function() {
		element.classList.remove("animated2");
		elemento.classList.remove("animated2");
	}, 500);






}

function onloade() {
	var audio = document.getElementById("zvok")
	document.getElementById("audioId").setAttribute('src', "example.com");
	var elemento = document.getElementById("radioan");
	elemento.classList.remove("animated2");
	document.getElementById("radioan").setAttribute('src', "./assets/wifi.svg");
	document.getElementById("radioan").setAttribute('src', "./assets/sloradio.svg");

	onlinea = 'yes'
}