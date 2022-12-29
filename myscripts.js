

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
  
    document.cookie = y;

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

let inactivityTime = function() {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
        screensaver()
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 60000)
    }
};
inactivityTime();

function screensaver() {
    var element = document.getElementById("screensaver");
    element.classList.add("screen");
}

function myShow() {
    var element = document.getElementById("screensaver");
    element.classList.remove("screen");
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