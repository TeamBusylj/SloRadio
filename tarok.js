function adaptColor(bg, txt, btn, dialog, txtDialog) {
    document.body.style.setProperty('--bgColor', bg);
    document.body.style.setProperty('--colorTxt', txt)
    document.body.style.setProperty('--colorBtn', btn)
    document.body.style.setProperty('--colorDialog', dialog)
    document.body.style.setProperty('--colorTxtDialog', txtDialog)
}
function addScore() {
    listOfPlayersCopy = JSON.parse(JSON.stringify(listOfPlayers));
    try {
        Android.hideButton()
    } catch (error) {
        console.log(error);
    }
    var newElement = addElement("div", null, "whlScreen")
    document.querySelector(".cntScreen").style.filter = "brightness(.3)"; document.querySelector(".crezultLine").style.filter = "brightness(.3)"
    dodajOpis(newElement, "Tukaj lahko izberete katera igra je bila igrana.")
    var iks = addElement("div", newElement, "iks")
    iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
    iks.addEventListener("click", function (e) {
        hideElement(newElement)
        try {
            Android.showButton()
        } catch (error) {
            console.log(error);
        }
    })
    var games = {  // "Ime igre": ["Koliko šteje igra","razlika","dobil true, ni dobil false", "s partnerjem, brez"]
        "Tri": [10, true, "", true],
        "Dve": [20, true, "", true],
        "Ena": [30, true, "", true],
        "Solo brez talona": [80, false, "", false],
        "Solo tri": [40, true, "", false],
        "Solo dve": [50, true, "", false],
        "Solo ena": [60, true, "", false],
        "Klop": ["", false, "", true],
        "Valat": [250, false, "", true],
        "Barvni Valat": [125, false, "", true],
        "Berač": [70, false, "", false],
        "Odprti Berač": [90, false, "", false],
        "Po meri": ["", false, "", true],
        "Dodaj radlce": ["", false, "", true]
    }
    for (const key in games) {
        let btn = document.createElement("button")
        btn.innerHTML = key
        btn.addEventListener("click", function () {
            newElement.innerHTML = ""
            if (key == "Klop" || key == "Po meri") { klop(newElement, key) } else {
                if (key == "Dodaj radlce") {
                    radlciDodaj()
                    document.querySelector(".cntScreen").remove()
                    document.querySelector(".crezultLine").remove()
                    hideElement(newElement)
                    count()
                } else {
                    calculate(key, games[key], newElement)
                }
            }
        })
        newElement.appendChild(btn)
    }
    document.body.appendChild(newElement)
}
function radlciDodaj() {
    if (navigator.userAgent.includes("wv")) {
        try {
            let names = JSON.stringify(Object.keys(listOfPlayers).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", ")
            console.log(names);
            Android.showRadlci(names)
        } catch (error) {
            console.log(error);
        }
    } else {
        for (const key in listOfPlayers) {
            listOfPlayers[key][0] += "*"
        }
        document.querySelector(".cntScreen").remove()
        document.querySelector(".crezultLine").remove()
        count()
    }
}
function androidRadlci(list) {
    let listRadlc = list
    for (const key in listOfPlayers) {
        if (listRadlc.includes(key)) {
            console.log(key + " includes");
            listOfPlayers[key][0] += "*"
        }
    }
    document.querySelector(".cntScreen").remove()
    document.querySelector(".crezultLine").remove()
    count()
}
function klop(newElement2, gamename) {
    var newElement = addElement("div", document.body, "whlScreen")
    document.querySelector(".cntScreen").style.filter = "brightness(.3)"; document.querySelector(".crezultLine").style.filter = "brightness(.3)"
    dodajOpis(newElement, "Tukaj vpišite koliko točk je dobil posamezen igralec. Pišite brez predznaka minus.")
    var iks = addElement("div", newElement, "iks")
    iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
    iks.addEventListener("click", function (e) {
        hideElement(newElement)
        try {
            Android.showButton()
        } catch (error) {
            console.log(error);
        }
    })
    for (const user in listOfPlayers) {
        if (user == "!gamesData!") {
            continue
        }
        let klopPlayer = addElement("input", newElement, "klopPlayer")
        klopPlayer.type = "number"
        klopPlayer.min = 0
        klopPlayer.name = user
        klopPlayer.placeholder = "Točke osebe " + user + "..."
    }
    addElement("div", newElement, "break")
    var btn = addElement("button", newElement, null)
    btn.innerHTML = "Končano"
    addElement("div", newElement, "break")
    btn.addEventListener("click", function () {
        let isfull = true
        var plNombers = document.getElementsByClassName("klopPlayer");
        for (var i = 0; i < plNombers.length; i++) {
            if (gamename == "Klop") {
                if (Array.from(document.querySelectorAll('.klopPlayer')).every(input => input.type === 'submit' || input.value.trim() !== '')) {
                    aloneplusScore(plNombers[i].name, -Math.abs(parseInt(plNombers[i].value)))
                } else {
                    isfull = false
                }
            }
            else {
                if (plNombers[i].value !== "") {
                    listOfPlayers[plNombers[i].name].push(parseInt(plNombers[i].value))
                }
            }
        }
        if (gamename == "Klop") {
            if (Array.from(document.querySelectorAll('.klopPlayer')).every(input => input.type === 'submit' || input.value.trim() !== '')) {
                listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = ["Klop", "Vsi", null, null, null, null, null, null]
            }
        }
        else {
            listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = ["Po meri", "Vsi", null, null, null, null, null, null]
        }
        console.log("cdcdsdc");
        if (isfull) {
            hideElement(newElement)
            newElement2.remove()
            document.querySelector(".cntScreen").remove()
            document.querySelector(".crezultLine").remove()
            count()
        }

    })
}
function calculate(gameName, properties, newElement) {
    var iks = addElement("div", newElement, "iks")
    iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
    iks.addEventListener("click", function (e) {
        hideElement(newElement)
        try {
            Android.showButton()
        } catch (error) {
            console.log(error);
        }
    })
    if (Object.keys(listOfPlayers).length == 4) {

        partner(newElement, gameName, properties, false)
    } else {
        var btn = addElement("button", null, null)
        var btn2 = addElement("button", null, null)
        var points = properties[0]
        var razlikaTF = properties[1]
        var teamWork = properties[3]
        let lnbrk = addElement("div", newElement, "break")
        lnbrk.style.height = "50px"
        dodajOpis(newElement, "Tukaj izberite ali sta bila v igri 2 igralca ali eden.")
        newElement.setAttribute("class", "whlScreen");

        //if(gameName.includes('Valat') || gameName.includes('Berač') ) {radlciDodaj()}
        if (teamWork) {
            btn.innerHTML = "Solo"
            btn2.innerHTML = "S partnerjem"
            newElement.appendChild(btn)
            newElement.appendChild(btn2)
        } else {
            partner(newElement, gameName, properties, false)
        }
        btn.addEventListener("click", function () {
            this.remove();
            btn2.remove();
            partner(newElement, gameName, properties, false)
        })
        btn2.addEventListener("click", function () {
            btn.remove(); btn2.remove();
            partner(newElement, gameName, properties, true)
        })
    }
}
function partner(newElement, gameName, properties, teamWork) {
    dodajOpis(newElement, "Tukaj uredite podatke o igri. Ko končate pritisnite 'Zmaga' ali 'Izguba'")
    var razlika = 0
    var difNu = document.createElement("input")
    if (properties[1]) {
        difNu.type = "number"
        difNu.min = 0
        difNu.placeholder = "Razlika..."
        difNu.max = 34
        newElement.appendChild(difNu)
        difNu.focus()
        var razlika
        difNu.addEventListener("change", function () {
            razlika = difNu.value
            let nearestMultipleOf5 = Math.round(razlika / 5) * 5;
            difNu.value = nearestMultipleOf5;
        })
    }

    var btn22 = addElement("button", null, null)
    var btn23 = addElement("button", null, null)
    var slct = addElement("select", newElement, null)
    var slct2 = addElement("select", null, null)
    slct2.innerHTML = "<option>Partner</option>"
    slct.innerHTML = "<option>Glavni igralec</option>"
    for (const user in listOfPlayers) {
        if (user == "!gamesData!") {
            continue
        }
        slct.innerHTML += "<option>" + user + "</option>"
        slct2.innerHTML += "<option>" + user + "</option>"
    }
    if (teamWork) {
        newElement.appendChild(slct2)
    } else {
        slct2.value = 2
    }
    addElement("div", newElement, "break")
    btn22.innerHTML = "Zmaga"
    btn23.innerHTML = "Poraz"
    addElement("div", newElement, "break")
    var bonusi = {  // "Ime igre": ["Koliko šteje igra","razlika","dobil true, ni dobil false", "s partnerjem, brez"]
        "Trula": [10, 20, null, false, false],
        "Kralji": [10, 20, null, false, false],
        "Pagat ultimo": [25, 50, null, false, false],
        "Kralj ultimo": [10, 20, null, false, false]
    }
    var bonusTočke = 0
    var bnsi = []
    if (properties[1]) {
        for (const key in bonusi) {
            let btn = document.createElement("button")
            btn.innerHTML = key
            btn.style.transition = " all .2s";
            btn.style.opacity = ".6"
            btn.addEventListener("click", function () {
                var bonusDialog = addElement("div", document.body, "whlScreen")
                var iks = addElement("div", bonusDialog, "iks")
                iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
                iks.addEventListener("click", function (e) {
                    bonusDialog.style.animation = "hideScreen .2s forwards";
                    setTimeout(() => {
                        bonusDialog.remove()
                    }, 200);
                    newElement.style.filter = "brightness(1)"
                })
                let lnbrk = addElement("div", bonusDialog, "break")
                lnbrk.style.height = "50px"
                bonusDialog.style.filter = "brightness(1)"
                newElement.style.filter = "brightness(.4)"
                var napovedanboolean = true
                var dobil = true
                let napovedano = addElement("button", bonusDialog, null)
                napovedano.innerHTML = "Napovedano"
                let ninapoved = addElement("button", bonusDialog, null)
                ninapoved.addEventListener("click", function () { napovedanboolean = false; napovedano.click() })
                ninapoved.innerHTML = "Ne napovedano"
                napovedano.addEventListener("click", function () {
                    bonusDialog.innerHTML = ""
                    bonusDialog.appendChild(iks)
                    let izgubil = addElement("button", bonusDialog, null)
                    izgubil.innerHTML = "Izgubljeno"
                    izgubil.addEventListener("click", function () { dobil = false; zmagal.click() })
                    let zmagal = addElement("button", bonusDialog, null)
                    zmagal.innerHTML = "Dobljeno"
                    zmagal.addEventListener("click", function () {
                        if (dobil) {
                            bonusi[key][2] = true
                        } else {
                            bonusi[key][2] = false
                        }
                        if (napovedanboolean) {
                            bonusi[key][3] = true
                        } else {
                            bonusi[key][3] = false
                        }
                        console.log(bonusi);
                        newElement.style.filter = "brightness(1)"
                        hideElement(bonusDialog)
                    })
                })
            })
            newElement.appendChild(btn)
        }
    }
    addElement("div", newElement, "break")
    newElement.appendChild(btn22)
    newElement.appendChild(btn23)
    //document.body.appendChild(newElement)
    btn22.addEventListener("click", function () {
        for (const key in bonusi) {
            if (bonusi[key][2] !== null) {
                if (bonusi[key][2]) {
                    if (bonusi[key][3]) {
                        bonusTočke += bonusi[key][1]
                    } else {
                        bonusTočke += bonusi[key][0]
                    }
                } else {
                    if (bonusi[key][3]) {
                        bonusTočke -= bonusi[key][1]
                    } else {
                        bonusTočke -= bonusi[key][0]
                    }
                }
            }
        }
        console.log(bonusTočke);
        if (difNu.value !== "" || properties[1] == false) {
            if ((slct.selectedIndex !== 0 && slct2.selectedIndex !== 0) || (teamWork && slct.selectedIndex !== 0)) {
                let nearestMultipleOf5 = Math.round(razlika / 5) * 5;
                razlika = nearestMultipleOf5;
                this.remove();
                btn23.remove();
                if (properties[1]) {
                    if (teamWork) {
                        plusScore(slct.value, slct2.value, parseInt(properties[0] + parseInt(razlika) + bonusTočke))
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), String(slct2.value), parseInt(properties[0]) + parseInt(razlika) + (bonusTočke), listOfPlayers[slct.value][0].length > 0, parseInt(razlika), true, bnsi, bonusTočke]
                    } else {
                        aloneplusScore(slct.value, parseInt(parseInt(properties[0]) + parseInt(razlika) + bonusTočke), true)
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), null, parseInt(properties[0]) + parseInt(razlika) + (bonusTočke), listOfPlayers[slct.value][0].length > 0, parseInt(razlika), true, bnsi, bonusTočke]
                    }
                } else {
                    if (teamWork) {
                        plusScore(slct.value, slct2.value, parseInt(properties[0]) + bonusTočke)
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), String(slct2.value), parseInt(properties[0] + (bonusTočke)), listOfPlayers[slct.value][0].length > 0, null, true, bnsi, bonusTočke]
                    } else {
                        aloneplusScore(slct.value, parseInt(properties[0]) + bonusTočke, true)
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), null, parseInt(properties[0] + (bonusTočke)), listOfPlayers[slct.value][0].length > 0, null, true, bnsi, bonusTočke]
                    }
                }
                document.querySelector(".cntScreen").remove()
                document.querySelector(".crezultLine").remove()
                hideElement(newElement)
                count()
            }
        }
    })
    btn23.addEventListener("click", function () {
        for (const key in bonusi) {
            if (bonusi[key][2] !== null) {
                if (bonusi[key][2]) {
                    if (bonusi[key][3]) {
                        bonusTočke += bonusi[key][1]
                    } else {
                        bonusTočke += bonusi[key][0]
                    }
                } else {
                    if (bonusi[key][3]) {
                        bonusTočke -= bonusi[key][1]
                    } else {
                        bonusTočke -= bonusi[key][0]
                    }
                }
            }
        }
        console.log(bonusTočke);
        if (difNu.value !== "" || properties[1] == false) {
            if (slct.selectedIndex !== 0 && slct2.selectedIndex !== 0) {
                let nearestMultipleOf5 = Math.round(razlika / 5) * 5;
                razlika = nearestMultipleOf5;
                this.remove();
                btn23.remove();
                if (properties[1]) {
                    if (teamWork) {
                        plusScore(slct.value, slct2.value, -Math.abs(parseInt(properties[0] + parseInt(razlika) + bonusTočke)))
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), String(slct2.value), -Math.abs(parseInt(properties[0]) + parseInt(razlika) + (bonusTočke)), listOfPlayers[slct.value][0].length > 0, parseInt(razlika), false, bnsi, bonusTočke]
                    } else {
                        aloneplusScore(slct.value, -Math.abs((parseInt(properties[0]) + parseInt(razlika) + bonusTočke)), true)
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), null, -Math.abs(parseInt(properties[0]) + parseInt(razlika) + (bonusTočke)), listOfPlayers[slct.value][0].length > 0, parseInt(razlika), false, bnsi, bonusTočke]
                    }
                } else {
                    if (teamWork) {
                        plusScore(slct.value, slct2.value, -Math.abs(parseInt(properties[0] + bonusTočke)))
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), String(slct2.value), -Math.abs(parseInt(properties[0]) + (bonusTočke)), listOfPlayers[slct.value][0].length > 0, null, false, bnsi, bonusTočke]
                    } else {
                        aloneplusScore(slct.value, -Math.abs(parseInt(properties[0] + bonusTočke)), true)
                        listOfPlayers["!gamesData!"][Object.keys(listOfPlayers["!gamesData!"]).length + 1] = [String(gameName), String(slct.value), null, -Math.abs(parseInt(properties[0]) + (bonusTočke)), listOfPlayers[slct.value][0].length > 0, null, false, bnsi, bonusTočke]
                    }
                }
                document.querySelector(".cntScreen").remove()
                document.querySelector(".crezultLine").remove()
                count()
                hideElement(newElement)
            }
        }
    })
}




function download() {
    var text = JSON.stringify(listOfPlayers)
    console.log(text);
    var result = "https://teambusylj.github.io/SloRadio/tarok.html#" + encodeURIComponent(text)
    var newElement = addElement("div", document.body, "whlScreen")
    document.querySelector(".cntScreen").style.filter = "brightness(.3)"; document.querySelector(".crezultLine").style.filter = "brightness(.3)"
    var iks = addElement("div", newElement, "iks")
    iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
    iks.addEventListener("click", function (e) {
        document.getElementById("game").style.animation = "none"
        hideElement(newElement)
    })
    console.log(result);
    var shareButton = document.createElement("button")
    shareButton.innerHTML = "Deli"
    var copyButton = document.createElement("button")
    copyButton.innerHTML = "Kopiraj"
    newElement.appendChild(copyButton)
    if (navigator.userAgent.includes("wv"))
        newElement.appendChild(shareButton)
    shareButton.addEventListener("click", function () {
        try {
            Android.share(result)
        } catch (error) {
            console.log(error);
        }
    })
    copyButton.addEventListener("click", function () {
        try {
            var copyText = document.createElement("input")
            copyText.value = result

            document.body.appendChild(copyText)
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices

            navigator.clipboard.writeText(copyText.value);
        } catch (error) {
            console.log(error);
        }
    })
}
document.body.onload = function () { if (location.hash !== "") { upload(location.hash.slice(1)) }; };

function upload(encrypted) {
    var text = JSON.parse(decodeURIComponent(encrypted))
    var newElement = addElement("div", document.body, "whlScreen")
    var iks = addElement("div", newElement, "iks")
    iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
    iks.addEventListener("click", function (e) {
        document.getElementById("game").style.animation = "none"
        hideElement(newElement)
    })
    dodajOpis(newElement, "Ali želite uvoziti igro z igralci " + JSON.stringify(Object.keys(text).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", ") + "?")
    var shareButton = document.createElement("button")
    shareButton.innerHTML = "Da"
    var copyButton = document.createElement("button")
    copyButton.innerHTML = "Ne"
    newElement.appendChild(copyButton)

    newElement.appendChild(shareButton)
    shareButton.addEventListener("click", function () {



        localStorage.setItem(JSON.stringify(Object.keys(text).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", "), JSON.stringify(text))
        localStorage.setItem(JSON.stringify(Object.keys(listOfPlayers).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", ")['!gamesData'], JSON.stringify(text['!gamesData']))
        try { Android.saveStorage(JSON.stringify(localStorage)) } catch { }
        hideElement(newElement)
    })
    copyButton.addEventListener("click", function () {
        hideElement(newElement)
    })

}
function plusScore(playedUser, user, score) {
    if (listOfPlayers[playedUser][0] !== '') {
        listOfPlayers[user].push(score * 2)
        listOfPlayers[playedUser].push(parseInt(score * 2) + "*")
        if (score > 0 && listOfPlayers[playedUser][0].length > 0) {
            listOfPlayers[playedUser][0] = listOfPlayers[playedUser][0].replace('*', '')
        }
    }
    else {
        listOfPlayers[user].push(score)
        listOfPlayers[playedUser].push(score)
    }
}
function aloneplusScore(user, score) {
    if (listOfPlayers[user][0] !== '') {
        listOfPlayers[user].push(parseInt(score * 2) + "*")
        if (score > 0 && listOfPlayers[user][0].length > 0) {
            listOfPlayers[user][0] = listOfPlayers[user][0].replace('*', '')
        }
    } else {
        listOfPlayers[user].push(score)
    }
}
function hideElement(newElement) {
    newElement.style.animation = "hideScreen .2s forwards";
    try { document.querySelector(".cntScreen").style.filter = ""; document.querySelector(".crezultLine").style.filter = "" } catch { }
    setTimeout(() => {
        newElement.remove()
    }, 200);
}
function Game() {
    var newElement = document.createElement("div")
    newElement.setAttribute("class", "whlScreen");
    dodajOpis(newElement, "Izberite igro.")
    var iks = addElement("div", newElement, "iks")
    iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
    iks.addEventListener("click", function (e) {
        document.getElementById("game").style.animation = "none"
        hideElement(newElement)
        // hideElement(newElement)
    })
    var slct = document.createElement("select")
    slct.innerHTML += "<option>Select</option>"
    document.body.appendChild(newElement)
    for (var i = 0; i < localStorage.length; i++) {
        let user = Object.keys(localStorage)[i];
        if (user !== "!gamesData!") {
            slct.innerHTML += "<option>" + user + "</option>"
        }
    }
    newElement.appendChild(slct)
    slct.addEventListener("change", function () {
        if (slct.value !== "Select") {
            listOfPlayers = JSON.parse(localStorage[slct.value])
            hideElement(newElement)
            listOfPlayersCopy = JSON.parse(JSON.stringify(listOfPlayers));
            if (listOfPlayers["!gamesData!"] == null) {
                listOfPlayers["!gamesData!"] = {}
            }
            count()
        }
    })
}
function undo() {
    listOfPlayers = JSON.parse(JSON.stringify(listOfPlayersCopy));
    document.querySelector(".cntScreen").remove()
    count()
}
var listOfPlayers = {}
var listOfPlayersCopy = {}
function newGame() {
    var newElement = document.createElement("div")
    newElement.setAttribute("class", "whlScreen");
    var iks = addElement("div", newElement, "iks")
    iks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.05 26.55 13.7 36.9q-.6.6-1.325.6t-1.275-.6q-.6-.55-.6-1.275 0-.725.6-1.275l10.4-10.4-10.45-10.4q-.55-.55-.55-1.275 0-.725.55-1.275.55-.55 1.275-.55.725 0 1.325.55L24 21.35 34.35 11q.55-.55 1.275-.55.725 0 1.325.55.55.6.55 1.35 0 .75-.55 1.3L26.6 24l10.35 10.4q.55.55.55 1.275 0 .725-.55 1.275-.55.55-1.275.55-.725 0-1.225-.55Z"/></svg>'
    iks.addEventListener("click", function (e) {
        hideElement(newElement)
    })
    let lnbrk = addElement("div", newElement, "break")
    lnbrk.style.height = "50px"
    var onePl = document.createElement("input")
    var newPl = document.createElement("button")
    var endPl = document.createElement("button")
    newPl.setAttribute("id", "addPlayer");
    newPl.innerHTML = "Dodaj igralca"
    newPl.setAttribute("class", "child");
    onePl.setAttribute("class", "child");
    onePl.placeholder = "Ime..."
    endPl.setAttribute("class", "child");
    endPl.innerHTML = "Končano"
    newElement.appendChild(onePl)
    onePl.focus()
    newElement.appendChild(newPl)
    newElement.appendChild(endPl)
    document.body.appendChild(newElement)
    newPl.addEventListener("click", function () {
        let onePl2 = addElement("input", newElement, "child")
        onePl2.placeholder = "Ime..."
        newElement.insertBefore(onePl2, newPl);
        onePl2.focus()
    })
    endPl.addEventListener("click", function () {
        listOfPlayers['!gamesData!'] = {}
        for (var i = 0; i < document.getElementsByTagName('input').length; i++) {
            let input = document.getElementsByTagName('input')[i].value
            listOfPlayers[input] = ['']
        }
        newElement.style.display = "none"
        localStorage.setItem(JSON.stringify(Object.keys(listOfPlayers).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", "), JSON.stringify(listOfPlayers))
        listOfPlayersCopy = JSON.parse(JSON.stringify(listOfPlayers));
        count()
    })
}
function padArraysToLongest(obj) {
    // Find the length of the longest array
    let maxLength = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const currentArray = obj[key];
            const currentLength = currentArray.length;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        }
    }
    // Pad arrays to the length of the longest array
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const currentArray = obj[key];
            while (currentArray.length < maxLength) {
                currentArray.push("&nbsp");
            }
        }
    }
}
function count() {
    try {
        Android.showButton()
    } catch (error) {
        console.log(error);
    }
    padArraysToLongest(listOfPlayers);
    localStorage.setItem(JSON.stringify(Object.keys(listOfPlayers).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", "), JSON.stringify(listOfPlayers))
    localStorage.setItem(JSON.stringify(Object.keys(listOfPlayers).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", ")['!gamesData'], JSON.stringify(listOfPlayers['!gamesData']))
    try { Android.saveStorage(JSON.stringify(localStorage)) } catch { }
    document.getElementById("newgame").style.display = "none"
    document.getElementById("game").style.display = "none"
    var newElement = addElement("div", document.body, "cntScreen")
    var rezultLine = document.createElement("div")
    for (const key in listOfPlayers) {
        if (key == "!gamesData!") {
            continue
        }
        let stGame = 1
        let name = key
        if (listOfPlayers[key][1] + 1 == NaN) {
            listOfPlayers[key].unshift(' ')
            console.log("ggg")
        }
        let pnts = listOfPlayers[key]
        var chl = document.createElement("div")
        let i = 1
        let points = 0
        var prnt = document.createElement("div")
        prnt.innerHTML = '<p class="namePlayers" > ' + name + listOfPlayers[key][0] + ' </p>'
        chl.innerHTML = String(chl.innerHTML).replace('undefined', '');
        chl.innerHTML += '<p style = "" class="noText" ></p>'
        while (i < pnts.length) {
            var kkk = document.createElement("p")
            kkk.innerHTML = pnts[i]
            chl.appendChild(kkk)
            kkk.style.marginTop = "-15px"
            if (pnts[i] !== '&nbsp') {
                kkk.setAttribute('onclick', 'gameData("' + stGame + '")')
                kkk.classList.add("word_" + stGame)
            } else {
                kkk.classList.add("noText")
            }
            kkk.addEventListener("click", function () {
                console.log("ccc");
                gameData(listOfPlayers["!gamesData!"][stGame], stGame)
            })
            stGame++
            if (pnts[i] !== '&nbsp') {
                points += parseInt(pnts[i].toString().replace(/\*/g, ""))
            }
            i++
        }
        chl.innerHTML += ' <p style = "" class="noText" ></p>'
        chl.setAttribute("class", "chl");
        chl.style.display = "inline-block;"
        rezultLine.innerHTML += ' <p style = "flex: 1;        color: var(--colorTxtDialog);    background-color:var(--colorDialog); padding: 15px; border-top-left-radius: 30px; border-top-right-radius: 30px; margin-left:10px;margin-right:10px;" > ' + points + ' </p>'
        prnt.setAttribute("class", "prnt");
        prnt.appendChild(chl)
        newElement.appendChild(prnt)
    }
    rezultLine.setAttribute("class", "crezultLine");
    rezultLine.addEventListener("click", function () { addScore() })
    document.body.appendChild(rezultLine)
    document.body.appendChild(newElement)
}
function dodajOpis(newElement, text) {
    try { newElement.getElementsByClassName("opis")[0].remove() } catch { }
    var opisek = addElement("p", newElement, "opis")
    opisek.innerHTML = text
    let lnbrk = addElement("div", newElement, "break")
}
function addElement(tag, parent, className) {
    var element = document.createElement(tag)
    if (className !== null) {
        element.classList.add(className)
    }
    if (parent !== null) {
        parent.appendChild(element)
    }
    return element
}
function gameData(infom, number) { // gamename, prvi igralc, drug igralc, tocke, ima radlc, razlika, dobil zgubil, bonusi, bonusi točke
    var info = listOfPlayers["!gamesData!"][infom]
    console.log(infom);
    console.log(info)
    var newElement = addElement("div", document.body, "whlScreen")
    document.querySelector(".cntScreen").style.filter = "brightness(.3)"; document.querySelector(".crezultLine").style.filter = "brightness(.3)"
    dodajOpis(newElement, "Tukaj lahko vidite podatke o igri in jih spremenite.")
    if (info[0] !== "Po meri" && info[0] !== "Klop") {
        var changeValue = document.createElement("input")
        changeValue.type = "number"
        changeValue.value = info[3]
        changeValue.placeholder = "Točke..."
        newElement.appendChild(changeValue)
    }
    var table = addElement("table", null, "gameData")
    var podatki = ["Igra", "Igralec", "Partner", "Razlika", "Radlc", "Uspeh", "Bonusi", "Točke"]
    var line = document.createElement("div")
    line.style.display = "flex"
    line.style.flexWrap = "wrap"
    line.style.justifyContent = "center"
    table.appendChild(line)
    for (let i = 0; i < podatki.length; i++) {
        const element1 = podatki[i];
        let element = info[i];
        if (i == 3) { element = info[5] }
        if (i == 7) { element = info[3] }
        if (element == null || element == "" || element == []) { continue; }
        if (i == 6) { element = info[7].toString().replace(/,/g, ", ") }
        if (i == 5 && element) { element = "Ja" } else { if (i == 5) { element = "Ne" } }
        if (i == 4 && element) { element = "Ja" } else { if (i == 4) { element = "Ne" } }
        let tdVelk = addElement("div", line, "gameTdDiv")
        let td1 = addElement("div", tdVelk, "gameDataTd")
        td1.innerHTML = element1
        let td = addElement("div", tdVelk, "gameDataTdBottom")
        td.innerHTML = element
    }
    newElement.appendChild(table)
    addElement("div", newElement, "break")
    console.log(info[0]);

    var iks = document.createElement("button")
    iks.innerHTML = "Končano"
    newElement.appendChild(iks)
    iks.addEventListener("click", function (e) {
        if (info[0] !== "Po meri" && info[0] !== "Klop") {
            listOfPlayers[info[1]][infom] = changeValue.value
            listOfPlayers["!gamesData!"][infom][3] = changeValue.value
            if (info[2] !== null) {
                listOfPlayers[info[2]][infom] = changeValue.value
            }
        }
        hideElement(newElement)
        document.querySelector(".cntScreen").remove()
        document.querySelector(".crezultLine").remove()
        count()
        try {
            Android.showButton()
        } catch (error) {
            console.log(error);
        }
    })

    document.body.appendChild(newElement)
}
function deleteGame() {
    localStorage.removeItem(JSON.stringify(Object.keys(listOfPlayers).filter(key => key !== "!gamesData!")).replace(/"/g, '').replace("[", "").replace("]", "").replace(/,/g, ", "));
    location.reload()
}
function createRipple(event) {

    if (event.target.tagName == "BUTTON") {
        console.log(event.target, event.currentTarget);
        const button = event.target;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = radius + "px";
        const rect = button.getBoundingClientRect();

        console.log(event.touches[0].clientX, "-----", event.touches[0].clientX);
        circle.style.left = event.touches[0].clientX - rect.left - 10 + "px";
        circle.style.top = event.touches[0].clientY - rect.top - 10
    } +"px";
    circle.classList.add("ripple");
    console.log(event.touches[0]);
    let mouse = false
    let animation = false
    document.body.addEventListener("touchend", function () {
        mouse = true
        if (animation) {
            setTimeout(() => {
                circle.style.transform = "scale(4)"
                circle.classList.add("fadeOutIt")
                setTimeout(() => {
                    circle.remove()
                }, 200);
            }, 100);

        }
    })
    circle.addEventListener("animationend", function () {
        console.log(mouse);
        animation = true
        if (mouse) {
            setTimeout(() => {
                circle.style.transform = "scale(4)"
                circle.classList.add("fadeOutIt")
                setTimeout(() => {
                    circle.remove()
                }, 200);
            }, 100);

        }
    });
    button.appendChild(circle);
}

document.body.addEventListener("touchstart", createRipple);
