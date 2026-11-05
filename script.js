
// Attendre le chargement du contenu HTML
document.addEventListener("DOMContentLoaded", function() {

    // Sélectionner les éléments HTML
    let colorBox = document.getElementById("color-box");
    let button = document.getElementById("change-color-btn");

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {

        let letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {

            let randomIndex = Math.floor(Math.random() * 16);

            color = color + letters[randomIndex];

        }

        return color;
    }

    // Ajouter un événement au bouton
    button.addEventListener("click", function() {

        // Générer une nouvelle couleur
        let newColor = getRandomColor();

        // Modifier la couleur de la boîte
        colorBox.style.backgroundColor = newColor;

    });

});
