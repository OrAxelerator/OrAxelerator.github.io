document.querySelectorAll('.save').forEach(button => {
    button.addEventListener('click', () => {
     



      console.log("clique ");
      const c0 = false;
      //Changé pour chercherr classe 
      const b0 = document.getElementById("name").value;
      const b1 = document.getElementById("nameOfSchool").value;
      const b2 = document.getElementById("choix").value;
      const a0 = document.getElementById("a0").value;
      const a1 = document.getElementById("a1").value;
      const a2 =document.getElementById("a2").value;
     
      
      // Stocker les valeurs dans chrome.storage
      chrome.storage.local.set({ 
          
          valeurs: [[c0], [b0, b1, b2], [a0, a1, a2]]
      }, () => {
          console.log("Valeurs sauvegardées !");
  
  
      });




    });
  });


