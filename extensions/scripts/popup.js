document.getElementById("save").addEventListener("click", () => {
    const valeur1 = document.getElementById("valeur1").value;
    const valeur2 = document.getElementById("choix").value;
    const afficherDevoir = document.getElementById("choix2").value;
    const bruitage = document.getElementById("choix3").value;

    // Stocker les valeurs dans chrome.storage
    chrome.storage.local.set({ 
        valeurs: [valeur1, valeur2, afficherDevoir, bruitage] 
    }, () => {
        console.log("Valeurs sauvegardées !");


    });
});
