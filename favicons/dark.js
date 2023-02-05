if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  var color = '#071636';
  document.getElementById("colorka").innerHTML=color;
}else{
    var color = '#57b3ff';
    document.getElementById("colorka").innerHTML=color;
}