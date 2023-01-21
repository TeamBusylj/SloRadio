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



function getFavi() {
	console.log('kk');
	loading = 'no';
	var aka = 1;
	var oma = 1;
	for (let i = 0; i < (localStorage.length); i++) {

		let img = 'imga'+oma;
		let radiiShow = 'favi'+oma;
		let favicak = 'favica'+oma;
	let ajevHref = 'a'+oma;
	let kaka = 'asp'+oma;
	var ahref = "javascript:myFunction('"+'https://'+localStorage.getItem(aka+"B")+"', '"+localStorage.getItem(aka+"A")+"', '"+localStorage.getItem(aka+"C")+"')";
	console.log(ahref);
	console.log(radiiShow);
	document.getElementById(radiiShow).style.display = "none";
	var name = localStorage.getItem(aka+"C");
	document.getElementById(ajevHref).href = ahref;
	document.getElementById(favicak).setAttribute(   "onclick" ,"javascript:favi('v', 'v', '"+name+"' )"   );
	if (ahref.includes("null")){console.log(ahref);}else{
	document.getElementById(radiiShow).style.display = "block";}
	document.getElementById(kaka).textContent = localStorage.getItem(aka+"C") ;
	var koko = localStorage.getItem(aka+"A");
	console.log(koko);
	if (koko !== null) {
	if(koko.includes(" copy")){
		document.getElementById(img).src = './assets/'+localStorage.getItem(aka+"A").replace(' copy',''); ;
	}else{
	document.getElementById(img).src = './assets/'+localStorage.getItem(aka+"A") ;
	}
}
	oma = oma+1;
	if(aka===1){
		aka = 3;
	}else{aka = aka+3;}

}

}



function favi(y, x, z) {
	if(localStorage.getItem("radiki").indexOf(z) !== -1){
		if (this.src = ('./assets/fav.svg')) {
			this.src = './assets/favfill.svg';
		} else {
			this.src = './assets/fav.svg';
		}
		var radioOba = localStorage.getItem("radiki").indexOf(z)+z.length;
		let radioObs = localStorage.getItem("radiki").charAt(radioOba);
		localStorage.removeItem(radioObs+'A');
		localStorage.removeItem(radioObs+'B');
		localStorage.removeItem(radioObs+'C');
		var radikil = localStorage.getItem("radiki");
		var kora = radikil.replace(z+radioObs,'');
		localStorage.setItem('radiki', kora);
		console.log(localStorage.getItem("radiki"))
		console.log(localStorage);
		if(document.title === 'SloRadio-favi'){
		getFavi()
		}
	
	}
	
	else{

if (localStorage.length===1){
	var lol = 1;
} else{
	var lol = localStorage.length-1;
}
			
	localStorage.setItem(lol+'A', x);
	localStorage.setItem(lol+'B', y);
	localStorage.setItem(lol+'C', z);
	
	console.log(localStorage);
	var img = document.getElementById('favi').src;
	if (document.querySelector(".favorite").src = ('./assets/fav.svg')) {
		document.querySelector(".favorite").src = './assets/favfill.svg';
	} else {
		document.querySelector(".favorite").src = './assets/fav.svg';
	}
let radikia= localStorage.getItem("radiki")+' '+z+lol;
localStorage.setItem('radiki', radikia);
 
	}

 
	
}


function mayno() {
	alert("Mogoče ne bo delovalo.");
}


	


var loading;
function myFunction(y, x, z) {

if(loading === 'no'){
	
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
	loading = 'yes';
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


	loading = 'no'
	elemento.classList.remove("animated");
	elemento.classList.add("animated2");
	setTimeout(function() {
		element.classList.remove("animated2");
		elemento.classList.remove("animated2");
	}, 500);






}
localStorage.setItem('radiki', localStorage.getItem('radiki'));

function onloade() {
	var audio = document.getElementById("zvok")
	document.getElementById("audioId").setAttribute('src', "example.com");
	var elemento = document.getElementById("radioan");
	elemento.classList.remove("animated2");
	document.getElementById("radioan").setAttribute('src', "./assets/wifi.svg");
	document.getElementById("radioan").setAttribute('src', "./assets/sloradio.svg");

	onlinea = 'yes'
}