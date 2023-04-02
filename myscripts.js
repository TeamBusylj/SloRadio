async function onloayde() {
	if(localStorage.getItem('vsiradii') == null){localStorage.setItem('vsiradii','')}
	if(!window.location.href.includes('favorit')  && !window.location.href.includes('world')){getSrcki()}
	var iscira = document.getElementById('isciradio');
	var elaas = document.getElementById('butt');
	var elasas = document.getElementById('rig');
	var elas = document.getElementById('bottom');
	var elaws = document.getElementById('favorit');
	var ela = document.getElementById('radioan');
	var el = document.querySelectorAll('.radii');
	fa()
	setTimeout(function () {
		ela.classList.add("radian");
	}, 20);
	document.getElementById('iscilupa').classList.add("radian");
	iscira.classList.add("radian");
	ela.classList.add("radian");
	elaas.classList.add("buta");
	
	elas.classList.add("buta");
	elasas.classList.add("buta");

	for (let i = 0; i < el.length; i++) {
		await delay(90);
			el[i].classList.add("radia");
			removelasses(el, i);
			await delay(40);
	}
	async function removelasses(es, a){
		await delay(501);
		es[a].style.opacity = "1";
			es[a].classList.remove("radia");
		}
		
}
function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
  }

 
function getSrcki(){
	var vsi = document.querySelectorAll('.radii');

		

		for (var i = 2; i < vsi.length; i++) {
		var tale = document.getElementsByTagName('a')[i].getAttribute('alt');
	
			if(localStorage.getItem('vsiradii').includes(tale)){
				console.log(tale)
					var kk = vsi[i].querySelector("#favi");
					kk.setAttribute('src', './assets/favfill.svg') ;
			}

		}
	
}



function getFavi() {
	var j = 1;
	document.getElementById("nofavi").style.display = "block";
	document.getElementById("scre").style.display = "none";
	document.getElementById("scre2").style.display = "none";
	for(var i = 1; i<100; i++){
		document.getElementById("favi"+j).style.display = "none";
var useSkup = localStorage.getItem(i);
if (useSkup != null){
	
		document.getElementById("scre").style.display = "block";
	document.getElementById("scre2").style.display = "block";
	document.getElementById("nofavi").style.display = "none";
var link = useSkup.substring(0, useSkup.indexOf(' @ ')); 
var useSkup2 = useSkup.replace(link+" @ ", "");

var slika = useSkup2.substring(0, useSkup2.indexOf(' % ')); 
var useSkup3 = useSkup2.replace(slika+" % ", "")

var ime = useSkup3;


var ahref = "javascript:myFunction("+ "'https://" + link + "'" + ",'" + slika + "'" +  ",'" + ime + "')";
var favica = "javascript:favi("+ "'" + link + "'" + ",'" + slika + "'" +  ",'" + ime + "', this)";
console.log(ahref + 'k');
document.getElementById("favi"+j).style.display = "block";
document.getElementById("a"+j).setAttribute('href', ahref);
document.getElementById("favica"+j).setAttribute('onclick', favica);
document.getElementById("imga"+j).setAttribute('src', './assets/'+slika);
document.getElementById("asp"+j).innerHTML = ime;
j=j+1}}

}



function favi(y, x, z, thi) {

	var jeye ;
	for(var i = 1;i<100;i++){
		
	if(localStorage.getItem(i) === y + ' @ ' + x +  ' % ' + z){
		localStorage.removeItem(i);
		jeye = 'ja';
console.log(jeye)
thi.setAttribute('src', './assets/fav.svg') 
var ha = localStorage.getItem('vsiradii');

	localStorage.setItem('vsiradii', ha.replace(z+';', ""));

		break;}
		
	}
	if(jeye === undefined){
	for(var i = 1;i<100;i++){
		thi.setAttribute('src', './assets/favfill.svg') 
		if(localStorage.getItem(i) == null){
			if(localStorage.getItem('vsiradii') !== null){
				localStorage.setItem('vsiradii', localStorage.getItem('vsiradii') +z + ';');
			}else{localStorage.setItem('vsiradii', z + ';');}
		localStorage.setItem(localStorage.length+1, y + ' @ ' + x +  ' % ' + z);
		console.log(jeye+'k')
		break;
}
	}

}
if(window.location.href.includes('favorit')){getFavi()}
console.log(localStorage);
}

function mayno() {
	alert("Mogoče ne bo delovalo.");
}
function fa(){
const boxes = document.getElementsByClassName('radii')
for (const box of boxes) {
	box.addEventListener('click', function onClick() {
		var geta = box.getElementsByTagName('a')[0];
		var gg = geta.getAttribute('href');
		var gg = gg.replace('ff', '');
		eval(gg)
		
	});
}
}
var loading;
function myFunction(y, x, z) {
	if (loading === 'no') {

		loads()
		var audio = document.getElementById("zvok")
		document.getElementById("audioId").setAttribute('src', y);
		var element = document.getElementById("radioan");
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			element.style.filter = "invert(0%) brightness(70%)";
		}else{
		element.style.filter = "invert(0%)";
		}
		element.classList.add("animated");
		audio.load();

		setTimeout(function () {
			document.getElementById("radioan").setAttribute('src', './assets/' + x);
		}, 200);


		document.getElementById("p").innerHTML = z;
		if (navigator.userAgent.includes("wv")) {
			console.log('PLaying Android')
			AndroidInterface.playAudio(y);
			
		}else{
		audio.play();
console.log('PLaying web')
		}

	}



}




window.onscroll = function () {
	if (screen.availHeight > screen.availWidth) {
		scrollFunction()
	}
}

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 120) {
		document.getElementById("ggg").style.height = "220px";
		document.getElementById("ggg").style.marginTop = "50px";
	} else {
		document.getElementById("ggg").style.height = "350px";
		document.getElementById("ggg").style.marginTop = "150px";

	}
}
function scrollFunction() {
	if (document.documentElement.scrollTop > 300) {
		document.getElementById("radioan").style.height = '300px';
		
	} else {
		var gs = document.documentElement.scrollTop;
		
		if (gs < 0) {	document.getElementById("radioan").style.height = '600px';}else{
		var sj = reverseNumber(document.documentElement.scrollTop, 0, 600);
			document.getElementById("radioan").style.height = sj+'px';
		}
}
var gs = document.documentElement.scrollTop; if (gs < 2) {	document.getElementById("radioan").style.height = '600px';}}
function reverseNumber(num,min,max) {
    return (max + min) - num;
}
function mutefVid(k) {
	if (k == 'ff'){
console.log('mk');
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
}


function screensaver() {
	/*
	var element = document.getElementById("screensaver");
	element.classList.add("screen");
	let elem = document.querySelector("body");
	*/

	
	if (navigator.userAgent.includes("wv")) {
		AndroidInterface.showToast();
	AndroidInterface.screensaver();
	}else{
	var element = document.getElementById("screensaver");
	element.classList.add("screen");
	let elem = document.querySelector("body");
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	  } else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	  }
	}

}

function myShow() {
	
	
	if (navigator.userAgent.includes("wv")) {
		AndroidInterface.showmy();
	}else{
		var element = document.getElementById("screensaver");
		element.classList.remove("screen");
		let elem = document.querySelector("body");
		if (document.exitFullscreen) {
			document.exitFullscreen();
		  } else if (document.webkitExitFullscreen) { /* Safari */
			document.webkitExitFullscreen();
		  } else if (document.msExitFullscreen) { /* IE11 */
			document.msExitFullscreen();
		  }

}}

function loads() {
	
	loading = 'yes';
	var element = document.getElementById("loader");
	element.classList.remove("hide");
	element.classList.add("show");
	element.classList.remove("animated");
	element.classList.add("animated2");
	var elemento = document.getElementById("radioan");
	elemento.classList.remove("show");
	elemento.classList.add("hide");
	elemento.classList.remove("animated2");
	elemento.classList.add("animated");

}

function loaded() {
	var element = document.getElementById("loader");
	var elemento = document.getElementById("radioan");

	
	element.classList.remove("show");
	element.classList.add("hide");
	elemento.classList.remove("hide");
	elemento.classList.add("show");
		elemento.style.borderRadius = "50px";
	loading = 'no'
	elemento.classList.remove("animated");
	elemento.classList.add("animated2");
	setTimeout(function () {
		
		element.classList.remove("animated2");
	}, 500);






}
function onloade() {

	 

	var audio = document.getElementById("zvok")
	document.getElementById("audioId").setAttribute('src', "example.com");
	var elemento = document.getElementById("radioan");
	elemento.classList.remove("animated2");
	document.getElementById("radioan").setAttribute('src', "./assets/wifi.svg");
	document.getElementById("radioan").setAttribute('src', "./assets/sloradio.svg");

	document.getElementById('iscilupa').style.display = "block";
	onlinea = 'yes';
	if (document.getElementById("radioan").src.includes("svg")) {
		document.getElementById("radioan").style.borderRadius = "0px";
	} else {
		document.getElementById("radioan").style.borderRadius = "50px";
	}
}

////search//////

async function iscimo() {
	if(window.innerHeight > window.innerWidth){
	window.scrollTo({ left: 0, top: 285, behavior: 'smooth' })}
	document.getElementById('bottom').style.display = "none";

	var checkno = 0;
	var data = document.getElementById("isciradio").value.toLowerCase();
	if (data === '') { neiscimo(); console.log('jjjj') } else {
		var vsi = document.querySelectorAll('.radii');
		const radiji = []
		for (var i = 0; i < vsi.length; i++) {

			var name = document.getElementsByTagName('a')[i].getAttribute('alt').toLowerCase();
			radiji.push("\n" + i + ' ' + name);

			document.getElementsByTagName('a')[i].parentElement.style.scale = ".8";
			document.getElementsByTagName('a')[i].parentElement.style.opacity = "0";
			if (name.includes(data)) {
				await new Promise(resolve => setTimeout(resolve, 10));
				showRadio(i);

			} else {
				hideRadio(i)
				checkno = checkno + 1;
			};

		}

		checkifno(i, checkno)
		document.getElementById('iscilupa').style.display = "none";
		document.getElementById('isci').style.display = "block";

	}
}
/////////

//close search///////////
async function neiscimo() {
	document.getElementById('bottom').style.display = "block";

	window.scrollTo({ left: 0, top: 300, behavior: 'smooth' })
	var data = '';
	document.getElementById('isci').style.display = "none";
	document.getElementById('iscilupa').style.display = "block";
	var vsi = document.querySelectorAll('.radii');
	const radiji = []

	for (var i = 0; i < vsi.length; i++) {
		var name = document.getElementsByTagName('a')[i].getAttribute('alt').toLowerCase();
		radiji.push("\n" + i + ' ' + name);

		document.getElementsByTagName('a')[i].parentElement.style.scale = "0.8";
		document.getElementsByTagName('a')[i].parentElement.style.opacity = "0";
		if (name.includes(data)) {

			showRadio(i)
		} else {
			hideRadio(i)

		};
	}
	document.getElementById("isciradio").value = '';

}
/////////////
async function hideRadio(i) {


	var radioanim = document.getElementsByTagName('a')[i].parentElement;
	radioanim.style.opacity = "0";
	await new Promise(resolve => setTimeout(resolve, 200));
	radioanim.style.display = "none";

}
async function showRadio(i) {

	document.getElementById('noresults').style.display = "none";
	var radioanim = document.getElementsByTagName('a')[i].parentElement;
	await new Promise(resolve => setTimeout(resolve, 201));
	radioanim.style.opacity = "0";
	radioanim.style.scale = "0.8";
	radioanim.style.display = "block";
	await new Promise(resolve => setTimeout(resolve, 10));
	radioanim.style.scale = "1";
	radioanim.style.opacity = "1";
}


async function checkifno(i, checkno) {
	console.log(i + ', ' + checkno)
	var radioanim = document.getElementById('noresults')
	if (i === checkno) {
		await new Promise(resolve => setTimeout(resolve, 201));
		radioanim.style.scale = "0";
		radioanim.style.display = "block";
		radioanim.style.opacity = "0";
		await new Promise(resolve => setTimeout(resolve, 10));
		radioanim.style.scale = "1";
		radioanim.style.opacity = "1";
	}
}
var android = 'no'
function checkUserAgent() {

	if (/Android|iPhone/i.test(navigator.userAgent)) {
		document.getElementById('noresults').style.display = "none";
	}
}
function remov(){
	document.getElementsByTagName("BODY")[0].style.backgroundColor = "transparent";
	document.getElementById("toper").style.backgroundColor = "transparent"
	document.getElementById("p").style.backgroundColor = "transparent"
	
}
function changeCol(color, c2, c3){
	remov();
	var el = document.querySelectorAll('.radii');
	for (let i = 0; i < el.length; i++) {
		
			el[i].style.backgroundColor = color
			el[i].style.borderColor = 'transparent'

	}
	document.getElementById("toper").style.backgroundColor = c2
	document.getElementById("radioano").style.backgroundColor = c2
	document.getElementById("loader").style.backgroundColor = c2
	document.getElementById("isciradio").style.backgroundColor = c3
	document.getElementById("isciradio").style.opacity = '1'
	android = 'yes'
}

