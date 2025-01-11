let compteur = 0;

function deplacer(){
    // Récupérer la valeur de la textarea
    const clavier = document.getElementById("clavier"); // Utilisation de getElementById
    const texte = clavier.value;

    // Vérifier si le texte est vide
    if (texte.trim() === "") {
        alert("La zone de texte est vide !");
        return;
    }

    // Créer un nouvel élément <div>
    const nouveauDiv = document.createElement("div");

    // Ajouter le texte à l'intérieur du nouveau <div>
    nouveauDiv.innerHTML = texte;

    // Ajouter les styles
    if(compteur%2===0){
        nouveauDiv.classList.add("texte");
        nouveauDiv.classList.add("droite");
    }else{
        nouveauDiv.classList.add("texte");
        nouveauDiv.classList.add("gauche");
    }

    // Ajouter le nouveau <div> à la zone d'affichage
    const affichage = document.querySelector(".affichage"); // Utilisation de querySelector
    affichage.appendChild(nouveauDiv);

    // incrementer le compter
    compteur ++;

    // Effacer le contenu de la textarea
    clavier.value = "";

}


// Cette fonction modifie l'apparence du clavier a partir de son 'ID "clavier" :
// - Permet le redimensionnement vertical de l'élément (resize: "vertical").
// - Active le défilement automatique si le contenu dépasse les limites (overflow: "auto").
// - Définit une largeur de 50% de la fenêtre (width: "50%").
// - Impose une largeur minimale de 400 pixels (minWidth: "400px").
function modifierAspectClavier() {
    const clavier = document.querySelector("#clavier");
    clavier.style.resize = "vertical";
    clavier.style.overflow = "auto";
    clavier.style.width = "50%";
    clavier.style.minWidth = "400px";
}

// Ajoute un écouteur d'événement sur le chargement de la fenêtre (load).
// Une fois que tous les éléments du DOM sont chargés, la fonction modifierAspectClavier est exécutée.
window.addEventListener("load", modifierAspectClavier);