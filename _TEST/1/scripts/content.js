(function() {
    // Fonction qui applique les modifications
    function appliquerModifications() {
      // Vérifie si les modifications ont déjà été appliquées
      if (document.body.hasAttribute("data-modifie")) {
        return; // Si déjà modifié, ne rien faire
      }
      //load();
  
      // Marque le DOM comme modifié pour éviter les répétitions
      document.body.setAttribute("data-modifie", "true");
  
      console.log("Début des modifications");


    // Récupérer les valeurs stockées
    chrome.storage.local.get("valeurs", (data) => {
      if (data.valeurs) {
          console.log("Valeurs récupérées :", data.valeurs);
          changeName();
          putMod(data.valeurs[1][2], data.valeurs[2][0], data.valeurs[2][1] )
      }

      function changeName() {    
        let userElement = document.querySelector(".user li");
        let surnom = data.valeurs[1][0]
        if ( surnom === "") {
          userElement.textContent = "sans nom ...";
        }else {
          userElement.textContent = surnom;
        }
      };

    });
    


//  --------------------------------------- outside  ---------------------------------------------------------- //
    //change icone de l'onglet
    document.querySelector('link[rel="shortcut icon"]').href = chrome.runtime.getURL("assets/images/ico.ico");

//  --------------------------------------- outside  ---------------------------------------------------------- ||


//  --------------------------------------- MENU  ---------------------------------------------------------- //
function changeAllMenu() {
  organizeMenu();
  changeMenuOneByOne();
  changeSousTitre();
  changeNameMenu();
}; 
changeAllMenu();
  function changeMenuOneByOne(){
    changeMenu3();
    changeMenu4();
    changeMenu6();
    changeMenu7();
};

// ----------------------------------- MENU - fonction -----------------------/


function organizeMenu(){
  // Modification de la liste des éléments de raccourcis
  let list = document.querySelectorAll('li.services-shortcut__item');
  
  if (list.length > 5) { 
    let parent = list[0].parentNode; // Récupère le parent des <li>
    let item4 = list[4]; // 5e élément (index 4)
    let item5 = list[5]; // 6e élément (index 5)
    
    // Trouver où les insérer (juste après leur position actuelle)
    let referenceNode = list[6] ? list[6].nextSibling : null;
    
    // Déplacer les éléments
    parent.insertBefore(item4, referenceNode);
    parent.insertBefore(item5, referenceNode);
  }
    
};


function changeMenu3(){
  // modifications de l'Emploi du TEMPS
  let list = document.querySelectorAll('li.services-shortcut__item');
  let emploi_du_temps = list[2]?.querySelector("a");
    emploi_du_temps.href = "https://joseph-vallot.mon-ent-occitanie.fr/sg.do?PROC=CDT_AFFICHAGE";


    let nouvellesHeures = ["08:15\n09:10", "", "09:15\n10.10","récré",  "10:25\n11:20", "", "11:25\n12:20", "12:20\n13:15", "13:14\n14:10","", "14:15\n15:10" ,"récré", "15:25\n16:20" ,"", "16:25\n17:20" , "17:25\n18:20"]; 

    document.querySelectorAll("span.scheduler__time").forEach((el, index) => {
    if (index < nouvellesHeures.length) {
        el.textContent = nouvellesHeures[index]; // Applique l'heure correspondante
    }; 
  });

};
function advecementWork () {
  let txtVisaul = document.createElement('p')
  txtVisaul.textContent = "eee"
  txtVisaul.style.marginLeft = "333px"
  document.body.appendChild(txtVisaul)
  

};

advecementWork();

function gif(){//Pour MENU 4

  let divCible = document.querySelector(".timeline.timeline--lg.js-timeline"); 

  if (divCible) {
      let gif = document.createElement("img");
      gif.src = chrome.runtime.getURL("/assets/gif/lofi.gif");
      gif.style.transform = 'rotateY(180deg)';  
      
      gif.style.width = "200px"; 
      gif.style.marginLeft = "-30px"
      gif.style.marginBottom = "-40px"
      
      // Ajouter le GIF dans la div
      divCible.appendChild(gif);
      console.log("gif appliquer")
  } else {
     //bas la dov est pas trouvé
  }


  

      

};
function changeMenu4(){
  //Devoir a FAIRE
  let list = document.querySelectorAll('li.services-shortcut__item');
  let travail = list[3]?.querySelector("a");
  travail.href = "https://joseph-vallot.mon-ent-occitanie.fr/sg.do?PROC=TRAVAIL_A_FAIRE&ACTION=AFFICHER_ELEVES_TAF&filtreAVenir=true&withTypesRemise=true&withRessourcesConsigne=true";
  
  gif();

};

      
function changeMenu6(){
  let list = document.querySelectorAll('li.services-shortcut__item');
  let cloud = list[5]?.querySelector("a");
  cloud.href = "https://joseph-vallot.mon-ent-occitanie.fr/sg.do?PROC=PORTE_DOCUMENT&ACTION=browse"
  let spans = document.querySelectorAll('span.icon--nexus-menu, span.services-shortcut__icon');


  if (list.length > 6) {
    let liElement = list[5]; // L'élément à l'index 6

    // Sélectionner tous les <span> à l'intérieur de cet élément <li>
    let spans = liElement.querySelectorAll('span.icon');

    spans.forEach(span => {
        span.remove();
    });}
  
};

function changeMenu7(){
  let list = document.querySelectorAll('li.services-shortcut__item');
  let classeur = list[6]?.querySelector("a");
  classeur.href = "https://joseph-vallot.mon-ent-occitanie.fr/sg.do?PROC=CLASSEUR_PEDA&ACTION=AFFICHER_ELEVES_ACCUEIL_CLASSEUR"


  
   

    // Sélectionner tous les <span> à l'intérieur de cet élément <li>
    let spans = document.querySelectorAll('span.icon');

    // Pour chaque <span> qui a la classe "icon", on le supprime
    spans.forEach(span => {
        span.remove();
    });


};
            

function changeSousTitre() {
  let nouveaux_sous_Titres = ["Accueil", "Messagerie", "Emploi du temps", "Devoir(s)", "Pronote", "Nuage", "Classeur"]; 
  let sous_titre = document.querySelectorAll(".services-shortcut__item");

  sous_titre.forEach((el, index) => {
          el.title = nouveaux_sous_Titres[index];
  });
};


function changeNameMenu(){

  const titre = document.querySelectorAll('.services-shortcut__label');
  //console.log(titre)
  const nouveau_titre = ["🏠 - Accueil", "📫 - Messagerie", "🕓 - Emploi du temps", "🗒️ - Devoir" ,"🍃 - Pronote" , "☁️ - Cloud" , "🗄️ - Classeur"];
  
  let sous_titre = document.querySelectorAll(".services-shortcut__item");
  let nouveaux_sous_Titres = ["Accueil", "Messagerie", "Emploi du temps", "Devoir(s)", "Pronot", "", "Nuage", "", "Classeur"]; 

  titre.forEach((el, index) => {
    if (index < nouveau_titre.length) { 
      el.innerText = nouveau_titre[index]; // Attribue chaque valeur au bon élément
      el.title = nouveaux_sous_Titres[index];
    }
  });
};


// ----------------------------------- MENU - fonction -----------------------\


//  --------------------------------------- MENU  ---------------------------------------------------------- ||





//  --------------------------------------- COULEUR  ---------------------------------------------------------- //

//changeColorTxtMenu();

// ----------------------------------- couleur - fonction -----------------------/



function putMod(data1,data2, data3, ){
  // Basic, blue, blue night,  

  function putModX () {
    //   -- variable -- 
    //une valuer vide car 0 = pas de changement
    // "" = couleur de base 
    let bg_body = ["", "rgb(39, 53, 127)", "rgb(0, 28, 75)"] //fond "GENERAL"
    let bg_menu = ["" , "", "rgb(0, 31, 63)"]
    let c_user = ["", "blue", "red"] //pseudo MENU
    let c_accueil = ["" , "black", "rgb(16, 158, 235)"]  //texte ACCEUIL
    let c_titre = ["", "rgb(128, 162, 235)" , "rgb(128, 162, 235)"] //like h5 de ACCUEIL
    let bg_panel = ["", "rgb(185, 213, 246)","rgb(0, 31, 63)"] //panel "bloc" ACCUEIL quasi tout sauf annonce de con
    let bg_panel_alert = ["" , "rgb(176, 214, 249)", "rgb(0, 31, 63)"] // ACCUEIL
    let c_body = ["" , "rgb(16, 158, 235)", "rgb(16, 158, 235)"]
    let c_texte = ["", "rgb(16, 158, 235)", "rgb(16, 158, 235)"] //couleur menu 
    //#B9D5F6
    let bg_success = ["" ,"#2EA5FA", "#2d1870"] //panel -> fond bloc et enfant
    let trou = ["", "red", "red"]


    // messageri : 
    let bg_left_message = ["", "rgb(191, 213, 243)", "rgb(8, 28, 72)"]



    //  -- code --
    


  


    document.body.style.background = bg_body[data1]; //fond
    document.querySelectorAll('.msg--alert').forEach(el => el.style.backgroundColor = bg_panel_alert[data1]);// fond message alert
    document.body.style.color = c_body[data1];

    document.querySelectorAll('.panel').forEach(el => el.style.color = c_accueil[data1]);//séance + travail a faire + vie sco + dernier message + actualité

    
    document.documentElement.style.backgroundColor = ""; // -> html {} <-----------------------------------------------------------------
    
 
        
     



    //METTRE IMG FOND ?
//    document.documentElement.style.backgroundImage = chrome.runtime.getURL('assets/images/cat.png');
  //  document.documentElement.style.backgroundSize = "cover";
  //  document.documentElement.style.backgroundPosition = "center center";
  //  document.documentElement.style.backgroundAttachment = "fixed";
  //  document.documentElement.style.height = "100%";  // Assurer que le HTML prend toute la hauteur de la fenêtre




    //MENU
    document.querySelectorAll('.user').forEach(el => el.style.color = c_user[data1]); //name USER
    document.querySelectorAll('.menu').forEach(el => el.style.backgroundColor = bg_menu[data1]);// FOND
    function changeColorTxtMenu(c_texte){document.head.appendChild(Object.assign(document.createElement("style"), {innerHTML: `@media screen {.menu a, .menu button {color: ${c_texte} !important;}}`}));}
    document.querySelectorAll('.text--slate-dark').forEach(el => el.style.color = "white"); //TXT gris
    
    changeColorTxtMenu(c_texte[data1]);

  //aceuil

  function changeLienDevoir() {

    const nouveauLien = "https://joseph-vallot.mon-ent-occitanie.fr/sg.do?PROC=TRAVAIL_A_FAIRE&ACTION=AFFICHER_ELEVES_TAF&filtreAVenir=true&withTypesRemise=true&withRessourcesConsigne=true";
    const liens = document.querySelectorAll('a.b-like');
  
    // Remplacement des href
    liens.forEach(lien => {
      lien.href = nouveauLien;
    });
  };
  

    // MESSAGE
    
    waitForElement('ul[class="jstree-container-ul jstree-children jstree-wholerow-ul jstree-no-checkboxes jstree-no-dots"]', () => { //CASE TRAVAIL A FAIRE ACCEUIL
      document.querySelectorAll('.panel--bg-lightest').forEach(el => el.style.backgroundColor = bg_left_message[data1]);// FOND
    });

    document.querySelectorAll('.jstree-anchor .jstree-default').forEach(el => { el.style.color = c_texte[data1] });// FOND



    function afficherDevoir() {
      if (data2 === "on") {
        document.querySelectorAll('.panel').forEach(el => {
          document.querySelectorAll('.panel').forEach(el => {el.style.backgroundColor = bg_panel[data1];}); //travail fini 
          document.querySelectorAll('.panel.panel--full').forEach(el => {el.style.backgroundColor = "#E5CA50"; el.style.padding = "10px";}); //travail  "pas fini" (jaune)
          document.querySelectorAll('.panel.panel--full.panel--success').forEach(el => {el.style.backgroundColor = "#6FFAAD"; el.style.padding = "10px";}); //travail fini 
          el.style.border = '2px solid blue';  
          el.style.borderRadius = '10px';      
          
        });
        document.querySelectorAll('.msg--neutral').forEach(el => {
          el.style.backgroundColor = bg_panel_alert[data1];
        })
      }else {
        document.querySelectorAll('.panel.panel--full.panel--no-margin.panel--success.js-travail-a-faire').forEach(el => el.style.display = 'none'); //Affiche pas les devoirs
      };
    };

      
        document.querySelectorAll('.panel--outlined.panel').forEach(div => {
        div.style.backgroundColor = bg_panel[data1]; // fond bloc
        document.querySelectorAll('.h5-like').forEach(el => el.style.color = c_titre[data1]) //titre
        
        
        
      });
    


    function removeCheck() {
      document.querySelectorAll('input[id^="travail-"]').forEach(input => {
        const span = input.closest('span');
        if (span) {
          span.remove();
        }
      });
    }
    

//-------------------- SNIPPET ----------------------------||

    function waitForElement(selector, callback, options = {}) {
      const defaultOptions = {
        once: true, // Si on appelle le callback qu'une seule fois
        root: document.body,
        timeout: 10000 // en ms, optionnel
      };
    
      const config = Object.assign({}, defaultOptions, options);
    
      const observer = new MutationObserver((mutations, obs) => {
        const element = document.querySelector(selector);
        if (element) {
          callback(element);
          if (config.once) obs.disconnect();
        }
      });
    
      observer.observe(config.root, {
        childList: true,
        subtree: true
      });
    
      // Sécurité : si l'élément est déjà là au moment du call
      const initialCheck = document.querySelector(selector);
      if (initialCheck) {
        callback(initialCheck);
        if (config.once) observer.disconnect();
      }
    
      // Optionnel : stoppe après X secondes si timeout est donné
      if (config.timeout) {
        setTimeout(() => observer.disconnect(), config.timeout);
      }
    }
    
//-------------------- SNIPPET ----------------------------||

    waitForElement('input[id^="travail-"]', () => { //CASE TRAVAIL A FAIRE ACCEUIL
      document.documentElement.style.marginTop = "-24px"; // -> html {} 
      
      afficherDevoir();
      removeCheck();
      changeLienDevoir();
    });


    waitForElement('div.content-toolbar, div.content-toolbar--tabs, div.content-toolbar--buttons', () => { //CASE TRAVAIL A FAIRE ACCEUIL
      function removeMenuUseless() {//enleve menu qui est inutile

        document.querySelectorAll('div.content-filter').forEach(function(element) {
          console.log(element)
          element.remove();
      });
      document.querySelectorAll('div.content-toolbar, div.content-toolbar--tabs, div.content-toolbar--buttons').forEach(function(element) {
        element.remove();
      });
      }
      
      removeMenuUseless();
    });














document.addEventListener('click', function (event) {
  const label = event.target.closest('btn.btn--sm.btn--secondary.js-async.js-taf__btn-marquer-fait-non-fait');
    if (data3 === "on") {
      console.log("audio ?")
      function playLocalAudio() {
        
        const audioURL = chrome.runtime.getURL('assets/musics/XP.mp3');  
        const audio = new Audio(audioURL);
        audio.play();
      }
      playLocalAudio();
    }
  
  
  setTimeout(() => {
    console.log("attention RELOADD ")
      //location.reload();
  }, 1000);

});







  };

  putModX();  
};









function taFonctionUnique() {
  console.log("Ceci ne s'exécutera qu'une seule fois après l'installation !");

}







//  --------------------------------------- COULEUR  ---------------------------------------------------------- ||


//  --------------------------------------- AUTRE  ---------------------------------------------------------- //

function secret() {
  let divCible = document.querySelector(".col--xs-12.col--md-6"); 

  if (divCible) {
    
    
    let gif = document.createElement("img");
    gif.src = chrome.runtime.getURL("/assets/images/cat.png");
    gif.style.width = "50px"; 
    divCible.appendChild(gif);

    let texte = document.createElement("p")
    texte.textContent = "bravo, tu as trouvé le yepicat caché ! \n (pour l'instant il est pas tres bie cahcé ... mais trql) "
    texte.style.color = 'yellow';
    divCible.appendChild(texte);
    

      console.log("gif appliquer")
  } else {
     //  console.log("⚠️(SECRET) si gif/image pas appliquer alors pas normal");
  }
};
secret();



function changeAnonce(){


  const nouveauxTexte = [
    "Texte du premier bloc modifié.",
    "Texte du deuxième bloc modifié.",
    "Texte du troisième bloc modifié."
  ];
  
  // Sélectionner tous les éléments
  const blocs = document.querySelectorAll(".col.col--full.col--flex-grow");
  
  // Appliquer un nouveau texte à chaque bloc
  blocs.forEach((bloc, index) => {
    const textDiv = bloc.querySelector("div");
    if (nouveauxTexte[index]) {
      textDiv.textContent = nouveauxTexte[index];
    }
  });

}


changeAnonce();

//  --------------------------------------- AUTRE  ---------------------------------------------------------- ||


//  ----------------------------------------------- FIN  ---------------------------------------------------------- ||

      console.log("Modifications appliquées"); //  <-- Fin des modifications.
    }
  
    // Exécuter la fonction dès le chargement de la page
    document.addEventListener("DOMContentLoaded", appliquerModifications);
  
    // Observer les changements dans l'URL ou dans le DOM pour ré-appliquer les modifications si nécessaire
    window.addEventListener("popstate", appliquerModifications);
    window.addEventListener("hashchange", appliquerModifications);
  
    const observer = new MutationObserver(appliquerModifications);
    observer.observe(document.body, { childList: true, subtree: true });
  })();
  