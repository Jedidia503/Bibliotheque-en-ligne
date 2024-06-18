const liste = document.getElementById("liste")
const ajouter = document.getElementById("ajouter-btn")
const divAjouter = document.getElementById("ajouter")
const annuler = document.getElementById("annuler")

// Afficher le champ pour l'ajout des livres
ajouter.addEventListener("click", () => {
    divAjouter.style.display = "block"
})


// Annuler l'ajout des livres
annuler.addEventListener("click", () => {
    divAjouter.style.display = "none"
})

// Récupération des données dans le fichier json
fetch("livre.json")
    .then(res => res.json())
    .then(data => data.livres.forEach(livre => {
        const div = document.createElement("div")
        div.classList.add("livre")

        const img = document.createElement("img")
        img.setAttribute("src", livre.image)
        img.setAttribute("width", "200")
        img.setAttribute("height", "278")

        const titre = document.createElement("h4")
        titre.textContent = "Titre: " + livre.titre

        const genre = document.createElement("span")
        genre.textContent = "Genre: " + livre.genre

        div.appendChild(img)
        div.appendChild(titre)
        div.appendChild(genre)
        liste.appendChild(div)
    }))