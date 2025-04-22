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
          putMod(data.valeurs[1], data.valeurs[2], data.valeurs[3])
      }

      function changeName() {    
        let userElement = document.querySelector(".user li");
        let surnom = data.valeurs[0]
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
      console.log("⚠️ (gif cat) La div avec la classe .ma-div n'a pas été trouvée !");
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
  console.log(titre)
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



function putMod(data1,data2, data3 ){
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
      if (data2 === "true") {
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
    if (data3 === "true") {
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

function overlay(){
  // Créer la div principale
const overlayDiv = document.createElement('div');
overlayDiv.id = 'superOverlay';


// Contenu de test (tu peux le changer ou ajouter plus ensuite)
overlayDiv.innerHTML = `
  <div id="overlayContent">
    <div id="fullScreenOverlay" style="height:100vh; width: 100vw; background-color: rgba(3, 255, 205, 0.956); top: 0; left: 0;position: fixed; z-index: 999; overflow: hidden; align-items: center;">


    
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .titre1 {
        background-color: rgb(255, 255, 255);
        width: 90%;
        height: auto ;
        margin: auto;
        border-radius: 5px;
        margin-bottom: 15px;
        
    }
    .main {
        background-color: blueviolet;
        width: 95%;
        margin: 0 auto;
        border-radius: 20px;
        padding-top: 10px;
        padding-right:5px ;
        padding-left: 5px;
    }
    .logo {
        width: 100%;
    }
    
    
   
    
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition-duration: 0.001s !important;
      }
    }
    .container {
      background: linear-gradient(100deg, #402, #006);
      padding: 2em;
      min-height: 100vh;
      align-items: center;
      background-color: #ffffff;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 55'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23fff' stroke-width='7' opacity='.1'%3E%3Cpath d='M-345 34.5s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 48.3 0 48.3s115-13.8 115-13.8 57.5-13.8 115-13.8 115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8'/%3E%3Cpath d='M-345 20.7s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 34.5 0 34.5s115-13.8 115-13.8S172.5 6.9 230 6.9s115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8m-920 27.6s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 62.1 0 62.1s115-13.8 115-13.8 57.5-13.8 115-13.8 115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8'/%3E%3Cpath d='M-345 6.9s57.5-13.8 115-13.8S-115 6.9-115 6.9-57.5 20.7 0 20.7 115 6.9 115 6.9 172.5-6.9 230-6.9 345 6.9 345 6.9s57.5 13.8 115 13.8S575 6.9 575 6.9'/%3E%3Cpath d='M-345-6.9s57.5-13.8 115-13.8S-115-6.9-115-6.9-57.5 6.9 0 6.9 115-6.9 115-6.9s57.5-13.8 115-13.8S345-6.9 345-6.9 402.5 6.9 460 6.9 575-6.9 575-6.9m-920 69s57.5-13.8 115-13.8 115 13.8 115 13.8S-57.5 75.9 0 75.9s115-13.8 115-13.8 57.5-13.8 115-13.8 115 13.8 115 13.8 57.5 13.8 115 13.8 115-13.8 115-13.8'/%3E%3C/g%3E%3C/svg%3E%0A"), linear-gradient(80deg, #202, #006);
      background-position: 50% 50%;
      animation: background-move 10s linear infinite;
      background-size: 100vw auto, 100% 100%;
      background-size: max(100vw, 30em) auto, 100% 100%;
    }
    
    @keyframes background-move {
      0% {
        background-position: 0 0, 0 0;
      }
      100% {
        background-position: 100vw 0, 0 0;
        background-position: max(100vw, 40em) 0, 0 0;
      }
    }
    
    p {
        text-align: center;
    }
    
    .row {
        display: flex;
        flex-direction: column;
    }
    
    input, select, option {
        width: 70%;
        gap : 10px;
        margin: 0 auto;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: #C2AAF2;
    }
    button {
        width: 50%;
        margin :    0 auto;
        border-radius: 5px;
        margin-bottom: 10px;
        background-color: #6FEFFC;
        height: 34px;
    }
    h3, h5 {
                text-align: center;
                margin-bottom: 15px;
    }
    .debut-liste {
        text-decoration: underline;
        margin-left: -20px;
        margin-top: -10px;
        margin-bottom: -1px;
        text-align: left;
    }
    ul {
        margin-left: 25px;
        margin-top: 10px;
    }
    
    .contact {
        width: 50%;
        margin: 0 auto ;
        margin-left: 25%;
        margin-right: 25%;
        transition: transform 0.3s ease;
    }
    .contact:hover{
        transform: scale(1.2);
    }

    .gif {
        width: 20%; 
        margin-left: 50%;
          
    }
    </style>
    
    
    
    <div class="container">
       
    
        
        
        
                <div class="titre1">  
                   
               </div>
    
    
               <div class="main">
                       <h3>Veuillez rentrer vos choix pour pouvoir créer VOTRE ent Personnalisé 🤗 </h3>
                        
                        <div class="row">
    
                            <input type="text" id="valeur1" placeholder="Pseudo">
                          
                           
           
                            <select id="choix">
                               <option value="0">Basique (nul)</option>
                               <option value="1">blue</option>
                               <option value="2">bleu foncé</option>
                               <option value="0"> darkmod (pas encore disp)</option>
                           </select>
    
                           <select id="choix2">
                                <option value="true">Afficher les devoirs fini</option>
                                <option value="false">Arreter d'afficher les devoirs fini</option>
                           </select>
    
                           <select id = "choix3">
                                <option value="false"> ne pas mettre de bruitage (normal)</option>
                                <option value="true"> mettre bruitage</option>
                           </select>
    
                           <button id="save">Sauvegarder</button>
                           <script src="/scripts/popup.js"></script>
                        </div>
                     <h5><i><mark>sauvegarder</mark> puis recharger la page  <mark>crtl + r</mark> pour appliquer les modifications</i></h5>
                    
               
               <p class="trait" style="width: 100%; background-color: black; height: 0.25ch;"></p>
                        <ul> <p class="debut-liste">un problème ?</p>
                            <li> vérifier votre connecxion 🛜</li>
                            <li> recharger la page 🔄</li>
    
    
                        </ul>
                        <p class="trait" style="width: 100%; background-color: black; height: 0.25ch;"></p>
                        <ul>
    
                            <li>un bug trouvé ❗️</li>
                            <li>une idée de fonctionnalité 💡</li>
                            <li>autre ...</li>
                        </ul>
    
                        <p style="text-align: left;"> .➡️ me contacter :    </p>
    
    
    
    <p> oui j'ai rien d'autre mais c déjà mieux qu'un mail ou un ID brawls stars ...</p>
    
    
    <p class="trait" style="width: 100%; background-color: black; height: 0.25ch;"></p>
    <p> <a href="https://github.com/OrAxelerator/myEnt/blob/main/README%20-%20privacy.md">VOIR POLITIQUE DE CONFIDENTIALITÉ</a></p>
                   </div>
    
    
    <div style= "top:0; width: 100%; left:0; position:fixed; z-index:999999; overflow:hidden; display:flex; margin-right: -14px;">
       
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
        
        
        
        
        
        
      
    </div>
    
        
    <div id="fullScreenOverlay" style="height:100vh; width:100vw; top:0; left:0; position:fixed; z-index:999999; overflow:hidden; display:flex;">
        <div id="leftPanel" style="width:50vw; height:100vh; background-color:blueviolet; transition: transform 1s ease;"></div>
        <div id="rightPanel" style="width:50vw; height:100vh; background-color:white; transition: transform 1s ease;"></div>
      </div>
      
      <script>
        // Lancement de l'animation après 2 secondes
        setTimeout(() => {
          document.getElementById("leftPanel").style.transform = "translateX(-100%)";
          document.getElementById("rightPanel").style.transform = "translateX(100%)";
        }, 2000);
      
        // Suppression des éléments après l'animation (3.2s total)
        setTimeout(() => {
          const left = document.getElementById("leftPanel");
          const right = document.getElementById("rightPanel");
      
          if (left) left.remove();
          if (right) right.remove();
        }, 3200);
      </script>
    <button id="closeOverlay" style="margin-top: 60px; padding: 10px 20px;">Fermer</button>
  </div>
`;

// Ajouter la div au début du body
document.body.prepend(overlayDiv);

// Bouton pour fermer l'overlay
document.getElementById('closeOverlay').addEventListener('click', () => {
  overlayDiv.remove();
});

}







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
      console.log("⚠️(SECRET) si gif/image pas appliquer alors pas normal");
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
  