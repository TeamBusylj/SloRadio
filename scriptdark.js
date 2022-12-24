function darkMode(){

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    var element = document.getElementById("radioan");
    element.classList.remove("radioan");
    element.classList.add("radioana");
    var element1 = document.getElementById("body");
    element1.classList.add("bodyd");
  } else {
    //light mode
  }
})
}
darkMode()