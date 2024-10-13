const WORDS = [ "land", "dexal", "enkho"];


const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]

console.log(rightGuessString)

function initBoard() {
    let board = document.getElementById("game-board");

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < rightGuessString.length; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            box.innerHTML = "&nbsp;"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
    setTimeout(() => {
        document.getElementsByClassName("letter-row")[0].style.height="110%"

    }, 300);
}

function shadeKeyBoard(letter, color) {
    for (const elem of document.getElementsByClassName("keyboard-button")) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            console.log(oldColor);
            
            if (oldColor == 'rgb(57, 105, 176)' ||oldColor === 'rgb(243, 210, 77)') {
                return
            }

            elem.style.backgroundColor = color
            elem.style.color = (color == '#f3d24d') ? "#000000" : "#ffffff"
            break
        }
    }
}

function deleteLetter () {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    animateCSS(box, "unpulse")
    currentGuess.pop()
    nextLetter -= 1
}

function checkGuess () {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    row.style.height="100%"
    let guessString = ''
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length != rightGuessString.length) {
        console.log("Not enough letters!")
       row.style.height="110%"
        return
    }
    
    for (let i = 0; i < rightGuessString.length; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        
        let letterPosition = rightGuess.indexOf(currentGuess[i])
        // is letter in the correct guess
        if (letterPosition === -1) {
            console.log(box.style.backgroundColor);
            
            letterColor = '#363636'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position 
            if (currentGuess[i] === rightGuess[i]) {
                // shade green 
                letterColor = '#3969b0'
            } else {
                // shade box yellow
                letterColor = '#f3d24d'
            }

            rightGuess[letterPosition] = "#"
        }

        let delay = 250 * i
        setTimeout(()=> {
            animateCSS(box, 'backflip')
            setTimeout(() => {
                box.style.backgroundColor = letterColor
              
                box.style.color = "#ffffff"
            }, 400);
            shadeKeyBoard(letter, letterColor)
            if (guessString === rightGuessString && i === rightGuessString.length - 1) {
                console.log("You guessed right! Game over!")
                guessesRemaining = 0
                setTimeout(() => {
                    guessAnimation(row)
                }, 1000);
                
                return
            }

            if (guessString !== rightGuessString && i === rightGuessString.length - 1) {
                setTimeout(() => {
                    document.getElementsByClassName("letter-row")[6 - guessesRemaining].style.height="110%"
                }, 1000);
            }
        }, delay)
    }

    if (guessString !== rightGuessString){
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;
        if (guessesRemaining === 0) {
           console.log("You've run out of guesses! Game over!")
           console.log(`The right word was: "${rightGuessString}"`)
        }
    }
}
function guessAnimation(row) {
 
  row.classList.add("animateRow")
  const rect = row.getBoundingClientRect();
const offsetFromBottom = window.visualViewport.height - rect.bottom - 100;
row.style.setProperty('--offsetBottom', `${Math.floor(offsetFromBottom)}px`);
  let rows = document.querySelectorAll(".letter-row:not(.animateRow)")
  rows =[...rows]
  rows.push(document.getElementById("keyboard-cont"))
  rows.forEach((rowa) => {
    rowa.classList.add("fadeOut")
  })
  var brand = addElement("div", null, "brand")
  row.appendChild(brand)
  brand.innerHTML = `<img src='assets/brands/${rightGuessString}.png' alt='${rightGuessString}' class='logoBrand'>`
}

function insertLetter (pressedKey) {
    if (nextLetter === rightGuessString.length) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    animateCSS(box, "animateBox")
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
}
function addElement(e, t, a) {
    var n = document.createElement(e);
    return a && n.classList.add(a),
    t && t.appendChild(n),
    n
}
const animateCSS = (element, animationName) =>
  new Promise((resolve, reject) => {
      const node = element
   element.classList.add(animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(animationName);
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

document.addEventListener("keyup", (e) => {

    if (guessesRemaining === 0) {
        return
    }

    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === "Enter") {
        checkGuess()
        return
    }

    let found = pressedKey.match(/[a-zčšž ]/gi);
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    var target = e.target
    console.log(target.tagName);
    
    if(target.tagName == "svg") target = target.parentNode; 
    if(target.tagName == "path") target = target.parentNode.parentNode; 
    if (!target.classList.contains("keyboard-button")) {
        return
    }
    let key = target.textContent


    if (target.classList.contains("backspace")) {
        key = "Backspace"
    } 
    if (target.classList.contains("enter")) {
        key = "Enter"
    } 
    if (target.classList.contains("space")) {
        key = " "
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

initBoard()

function scaleElementToFitHeight() {
    const container = document.body; // Adjust to your container selector
    const element = document.querySelector('#game-board'); // Adjust to your element selector
    const kbHeight = document.getElementById("keyboard-cont").clientHeight;
    // Get the container's height
    const containerHeight = container.clientHeight;

    // Calculate the required width to maintain the aspect ratio based on the container's height
    const requiredWidth = containerHeight - kbHeight -100; // Since aspect-ratio is 1, width = height

    // Set the element's width to the calculated value while keeping its height at 100%
    element.style.height = `${requiredWidth}px`;
    element.style.scale = `1`;
    if(element.scrollWidth >window.innerWidth){
        element.style.scale = `${(window.innerWidth-100)/element.scrollWidth}`;
        document.querySelector('#game-board2').style.scale = `${(window.innerWidth-100)/element.scrollWidth}`;
    }   
}

// Call the function on window resize to keep it responsive
window.addEventListener('resize', scaleElementToFitHeight);

// Initial call to scale the element
scaleElementToFitHeight();
