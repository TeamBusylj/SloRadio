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
    

function myFunction(y, x, z) {
    loads()
    var audio = document.getElementById("zvok")
    document.getElementById("audioId").setAttribute('src', y);
    var element = document.getElementById("radioan");
    element.classList.add("animated");
    audio.load();
    if (x != "sloradio.svg") {
        setTimeout(function() {
            document.getElementById("radioan").setAttribute('src', x);
        }, 200);
    }
    if (x == "sloradio.svg") {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTimeout(function() {
                document.getElementById("radioan").setAttribute('src', 'sloradiobel.svg');
            }, 200);
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTimeout(function() {
                document.getElementById("radioan").setAttribute('src', 'sloradio.svg');
            }, 200);
        }
    }
    document.getElementById("p").innerHTML = z;
    audio.play();

}


window.onscroll = function() {
    if (screen.availHeight > screen.availWidth) {
        scrollFunction()
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("radioan").style.height = "300px";
        

    } else {
        document.getElementById("radioan").style.height = "600px";
        
    }
}
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
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

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
}

function myShow() {
    var element = document.getElementById("screensaver");
    element.classList.remove("screen");
    let elem = document.querySelector("body");

    ContactJsInterface.showToast()
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
 }


 