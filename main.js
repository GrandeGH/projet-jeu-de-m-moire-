// const btnDifficultés = document.querySelectorAll(".difficulté")
// const grille = document.getElementById("grille")
// const coupsDisplay = document.querySelector(".coups span")
// const tempsDisplay = document.querySelector(".temps span") 
// const nouvellePartie = document.querySelector(".btnNG")

// let premiereCarte = null
// let deuxiemeCarte = null 
// let bloque2cartes = false
// let coups = 0
// let temps = 0
// let interval 
// let nombredDePairs = 6 // nombre de pairs maximum
// let pairsTrouvees = 0

// let carte0 = document.getElementById("carte0")
// let carte1 = document.getElementById("carte1")
// let carte2 = document.getElementById("carte2")
// let carte3 = document.getElementById("carte3")
// let carte4 = document.getElementById("carte4")
// let carte5 = document.getElementById("carte5")
// let carte6 = document.getElementById("carte6")
// let carte7 = document.getElementById("carte7")
// let carte8 = document.getElementById("carte8")
// let carte9 = document.getElementById("carte9")
// let carte10 = document.getElementById("carte10")
// let carte11 = document.getElementById("carte11")

// const emojis = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍋", "🥝", "🍍", "🥥", "🍑", "🥭", "🍓"];

// // mélange aléatoirement les cartes
// function melanger(tableau) {
//     return tableau.sort(()=> Math.random() -0.5)  
//     }

// // initialisation du jeu 
// function startGame(pairs) {
//     nombredDePairs = pairs //définir le nombre de paires
//     grille.innerHTML = "" // vider la grille 
//     coups = 0
//     temps = 0
//     coupsDisplay.textContent = coups
//     interval = setInterval(updateTemps, 1000)
//     updateTemps()
//     clearInterval(interval)
//     interval = setInterval(updateTemps(0, pairs))

//     let selectionEmojis = emojis.slice(0, pairs).concat(emojis.slice(0, paires))
//     let cartesMelangées = melanger(selectionEmojis)

//     // /////////////// crééer une carte ///////////////////////// 

//         cartesMelangées.forEach(value => {
//             const carte = document.createElement("div")
//             carte.classList.add("carte, hidden") //afficher et tourner 
//             carte.textContent = value
//             carte.dataset.value = value
//             carte.addEventListener("click", tournerCarte)
//             grille.appendChild(carte)
//         })

//     }

//     function updateTemps() {
//         temps++
//         let minutes = Math.floor(temps / 60) 
//         let secondes = temps % 60
//         tempsDisplay.textContent = `${minutes}:${secondes < 10 ? "0" : ""}${secondes}` // Met à jour l'affichage du temps
//     }

//     function tournerCarte() {
//         if (bloque2cartes || this === premiereCarte) return

//         this.classList.remove("hidden")
//         this.style.color = "#1e3a71"

//         if (!premiereCarte) {
//             premiereCarte = this
//         }
//         else {
//             deuxiemeCarte = this
//             bloque2cartes = true
//             checkForMatch()
//         }
//     }
    
//     function checkForMatch() {
//         coups++ // incrémenter le nombre de coups
//         coupsDisplay.textContent = coups

//         if (premiereCarte.dataset.value === deuxiemeCarte.dataset.value) {
//             //si les deux cartes sont identiques, on les laisse visible 
//             premiereCarte.removeEventListener("click", tournerCarte)
//             deuxiemeCarte.removeEventListener("click", tournerCarte)
//             resetCartes()
//             verifierFinPartie()
//             if (pairsTrouvees === nombredDePairs) {
//                 clearInterval(interval)
//                 setTimeout(()=> alert("Félcitation"))
//             }
//         }
//         else {
//             // sinon on retourne après un court delai 
//             setTimeout(() => {
//                 premiereCarte.classList.add("hidden")
//                 deuxiemeCarte.classList.add("hidden")
//                 premiereCarte = null
//                 deuxiemeCarte = null
//                 bloque2cartes = false
//             }, 1000) // atente d'une seconde avant de retouner la carte 
//         }
//     }

 

//     //Gestion des boutons de difficultés 
//     btnDifficultés.forEach(button => {
//         button.addEventListener("click", () => {
//             const niveau = button.dataset.difficulte
//             if (niveau === facile) startGame(6)
//             else if (niveau === "moyen") startGame(9)
//             else if (niveau === "difficile") startGame (12)
//         })
//     })

// // nouvelle partie 
// nouvellePartie.addEventListener("click", ()=> startGame(nombredDePairs))




