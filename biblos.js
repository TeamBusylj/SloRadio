async function search() {
    try {
        document.querySelector(".listHolder").remove()
    } catch  {}
    let query = document.getElementById("query").value
    /*const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.biblos.si/json/search-results?q='+query);
        const response = await fetch(url);
        const movies = await response.json();
        console.log(movies.items);
        */
       const movies = JSON.parse(contentJson)
        let listHolder = addElement("div", document.body, "listHolder")
      
      for (const book in movies.items) {
        const element = movies.items[book];
        let item = addElement("md-filled-card", listHolder, "book")
        let divek = addElement("div", item, "divek")
        addElement("md-ripple", divek)
        let image = addElement("img", divek, "bookImage")
            image.src = element.icon
            let author = addElement("span",divek, "author")
            author.innerHTML = element.author + "<br>"
           
            let title = addElement("span", divek, "title")
            title.innerHTML = element.name
divek.addEventListener("click",  () => {
    
   
   createBook(element, item)
})         

      }
}
function createBook(element, item) {
  let inside = addElement("md-filled-card", item, "wholeScreen")
   inside.style.top= item.getBoundingClientRect().top  +"px";
   inside.style.left= item.getBoundingClientRect().left +"px";
   inside.style.width = item.offsetWidth + "px";
   inside.style.height = item.offsetHeight + "px";
   inside.style.animation ="toggle 0.5s forwards 0.2s cubic-bezier(0.05, 0.7, 0.1, 1)"
   inside.style.opacity="1"
   addElement("md-elevation", inside)
  item.querySelector(".divek").style.opacity="0"
  item.style.setProperty('--_container-color', 'var(--md-sys-color-surface)');
   item.classList.toggle("waa")
   let container = inside
    let scrim = addElement("div",document.body, "scrim")
    setTimeout(() => {
        scrim.style.opacity = ".42"
    }, 200);
    let iks = addElement("md-icon-button", container, "iks")
    iks.innerHTML ="<md-icon>close</md-icon>"
    iks.addEventListener("click", () => {
      item.style.zIndex = "5"
      inside.style.animation =""
    setTimeout(() => {
      inside.style.animation ="toggle .3s forwards cubic-bezier(1, 0.1, 0.8, 1) reverse"
 
    }, 0.9);
      scrim.style.opacity = "0"
      
      item.querySelector(".divek").style.opacity="1"
      item.style.setProperty('--_container-color', 'var(--md-sys-color-surface-container-highest)');
       item.classList.toggle("waa")
      setTimeout(() => {
        scrim.remove()
      container.style.opacity = "0"
      setTimeout(() => {
        item.style.zIndex = "1"
        container.remove()
      }, 400);
      }, 300);
    })
   let coontainerData = addElement("div", container, "containerData")
    const url = 'https://corsproxy.io/?' + encodeURIComponent("https://www.biblos.si"+element.url);
    const image = addElement("img", container, "bigImage")
    const author = addElement("span",coontainerData, "authorBig")
    const title = addElement("span", coontainerData, "titleBig")

    image.src = element.icon
    author.innerHTML = element.author
    title.innerHTML = "<br>"+element.name
addElement("md-divider", coontainerData, "divideOpis")
    fetch(url).then(response => response.text()).then(movies => {
        var doc = new DOMParser().parseFromString(movies, "text/html")
        var opisTxt = doc.querySelector("#content > div.container > div:nth-child(1) > div.col-12.col-md-8.order-2.order-md-2 > div > div > p.text-muted.text-sm").innerHTML 
        const opis = addElement("span", coontainerData, "opis")
        opis.innerHTML = opisTxt
        addElement("md-elevation", image)  
        let tbl = doc.querySelector("#book-detail-table")
        coontainerData.appendChild(tbl)
    })
}

function addElement(tag, parent, className) {
    var element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }