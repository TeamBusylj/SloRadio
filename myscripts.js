
function onloayde() {
    var elaas = document.getElementById('butt');
    var elasas = document.getElementById('rig');
    var elas = document.getElementById('bottom');
    var ela = document.getElementById('radioan');
var el = document.querySelectorAll('.radii');
elaas.classList.add("buta");
ela.classList.add("radian");
elas.classList.add("buta");
elasas.classList.add("buta");

for(var i = 0; i < el.length; i++) {
    el[i].classList.add("radia");
}
setTimeout(function() {
    ela.style.opacity = "1";
    ela.classList.remove("radian");
    for(var i = 0; i < el.length; i++) {
        el[i].classList.remove("radia");
        el[i].style.opacity = "1";
    }


}, 2000);
    
}


function getFavi(y, x, z) {
    const items = {localStorage } 
    console.log(items)
    var favi = document.getElementById("radio")
   
}


function favi(y, x, z) {
    localStorage.setItem(z, x + y + z); 
    console.log(localStorage)
    var img = document.getElementById('favi').src;
    if (img.indexOf('fav.svg')!=-1) {
        document.getElementById('favi').src  = 'favfill.svg';
    }
     else {
       document.getElementById('favi').src = 'fav.svg';
   }

}
    function mayno(){
        alert("Mogoče ne bo delovalo.");
    }
    window.addEventListener('offline', (event) => { ofline()});
function ofline(){
     document.getElementById("audioId").setAttribute('src', 'nn');
var element = document.getElementById("radioan");
element.classList.add("animated");
        document.getElementById("radioan").setAttribute('src', './assets/wifi.svg');
document.getElementById("p").innerHTML = 'No internet connection';
loaded()
onlinea = 'no'
}
window.addEventListener('offline',  updateOnlineStatuss);
window.addEventListener('online',  updateOnlineStatus);
 function updateOnlineStatus() {
  
    console.log("You are now connected to the network.");

    document.getElementById("zvok").volume = 0;
    var element = document.getElementById("radioan");
    element.style.filter = "invert(100%)";
    element.classList.add("animated");
            document.getElementById("radioan").setAttribute('src', './assets/sloradio.svg');
    document.getElementById("p").innerHTML = '';
    loaded()

    onlinea = 'yes';
  }
  function updateOnlineStatuss() {
    document.getElementById("zvok").volume = 1;
    var element = document.getElementById("radioan");
    console.log("You are not connected to the network.");
    onlinea = 'no';
    element.style.filter = "invert(100%)";
  }
var onlinea;

function myFunction(y, x, z) {
   
if (onlinea === 'yes'){
    loads()
    var audio = document.getElementById("zvok")
    document.getElementById("audioId").setAttribute('src', y);
    var element = document.getElementById("radioan");
    element.style.filter = "invert(0%)";
    element.classList.add("animated");
    audio.load();

        setTimeout(function() {
            document.getElementById("radioan").setAttribute('src', './assets/'+x);
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
        var element = document.getElementById("radioan");
        element.classList.remove("animated2");
        element.classList.add("muted");
        vid.muted = true;
    } else {
        var element = document.getElementById("radioan");
        element.classList.remove("animated2");
        element.classList.remove("muted");

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

function loads(){
    
    var element = document.getElementById("loader");
    element.classList.remove("hide");
    element.classList.add("show");
    element.classList.remove("animated");
    element.classList.add("animated2");
    var elemento = document.getElementById("radioan");
    elemento.classList.remove("animated2");
    elemento.classList.add("animated");
}
function loaded(){
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
onlinea = 'yes'
 }


 