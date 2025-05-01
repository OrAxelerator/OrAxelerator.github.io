


document.querySelectorAll('.save').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Un bouton save a été cliqué !'); // je vois pas ou sa s'affiche mais trql ...



      console.log("clique ");
      const c0 = false;
      //Changé pour chercherr classe 
      const b0 = document.getElementById("valeur1").value;
      const b1 = document.getElementById("nomLycée").value;
      const b2 = document.getElementById("choix").value;
      const a0 = document.getElementById("choix2").value;
      const a1 = document.getElementById("choix3").value;
      let valeurs = [[c0], [b0, b1, b2], [a0,a1]];
      console.log(valeurs);
      // Stocker les valeurs dans chrome.storage
      chrome.storage.local.set({ 
          
          valeurs: [[c0], [b0, b1, b2], [a0,a1]]
      }, () => {
          console.log("Valeurs sauvegardées !");
  
  
      });




    });
  });
