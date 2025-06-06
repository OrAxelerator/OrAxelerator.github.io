(function () {
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
        putMod(data.valeurs[1][2], data.valeurs[2][0], data.valeurs[2][1], data.valeurs[2][2])
        changeName(data.valeurs[1][0]);
        changeNameSchool(data.valeurs[1][1]);
        
      }

      function changeName(pseudoUser) {
        let userElement = document.querySelector(".user li");
        if (pseudoUser === "") {
          userElement.textContent = "sans nom ...";
        } else {
          userElement.textContent = pseudoUser;
        }
      };

    });


      function changeNameSchool (name) {
        document.querySelector(".hide-lt--lg.text--ellipsis").innerText = name;
      };


    // ----------- variable -------------------
    mode = 1
    //------------------------------------------


    // ------------- Dev tool --------------------------------------



    function print(activation, message, importance) {
      if (activation === 1) {

        if (importance === "warn") {
          console.warn(message)
          return null
        } if (importance === "error") {
          console.error(message)
          return null
        }
        if (importance === "") {
          console.log(message)
        }

      };
    };


    print(mode, "", ""); // -> rien = rien, error, warn

    //-------------------------------------



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
    function changeMenuOneByOne() {
      changeMenu3();
      changeMenu4();
      changeMenu6();
      changeMenu7();
    };

    document.querySelectorAll(".header__help").forEach(el => { el.style.display = "none"; }) // SUPR bouton aide dans menu

    // ----------------------------------- MENU - fonction -----------------------/


    function organizeMenu() {
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


    function changeMenu3() {
      // modifications de l'Emploi du TEMPS
      let list = document.querySelectorAll('li.services-shortcut__item');
      let emploi_du_temps = list[2]?.querySelector("a");
      emploi_du_temps.href = "https://joseph-vallot.mon-ent-occitanie.fr/sg.do?PROC=CDT_AFFICHAGE";


      let nouvellesHeures = ["08:15\n09:10", "", "09:15\n10.10", "récré", "10:25\n11:20", "", "11:25\n12:20", "12:20\n13:15", "13:14\n14:10", "", "14:15\n15:10", "récré", "15:25\n16:20", "", "16:25\n17:20", "17:25\n18:20"];

      document.querySelectorAll("span.scheduler__time").forEach((el, index) => {
        if (index < nouvellesHeures.length) {
          el.textContent = nouvellesHeures[index]; // Applique l'heure correspondante
        };
      });

    };
    function advecementWork() {
      let txtVisaul = document.createElement('p')
      txtVisaul.textContent = "eee"
      txtVisaul.style.marginLeft = "333px"
      document.body.appendChild(txtVisaul)


    };

    advecementWork();

    function gif() {//Pour MENU 4

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

      } else {
        //bas la dov est pas trouvé
      }






    };
    function changeMenu4() {
      //Devoir a FAIRE
      let list = document.querySelectorAll('li.services-shortcut__item');
      let travail = list[3]?.querySelector("a");
      travail.href = "https://joseph-vallot.mon-ent-occitanie.fr/sg.do?PROC=TRAVAIL_A_FAIRE&ACTION=AFFICHER_ELEVES_TAF&filtreAVenir=true&withTypesRemise=true&withRessourcesConsigne=true";

      gif();

    };


    function changeMenu6() {
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
        });
      }

    };

    function changeMenu7() {
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


    function changeNameMenu() {

      const titre = document.querySelectorAll('.services-shortcut__label');
      //console.log(titre)
      const nouveau_titre = ["🏠 - Accueil", "📫 - Messagerie", "🕓 - Emploi du temps", "🗒️ - Devoir", "🍃 - Pronote", "☁️ - Cloud", "🗄️ - Classeur"];

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



    function putMod(b2, a0, a1, a2) {
      // Basic, blue, blue night,  

      function putModX() {
        //   -- variable -- 
        //il ya une valuer vide car 0 = pas de changement
        // "" = couleur de base 
        let bg_body = ["", "rgb(43, 53, 123)", "rgb(0, 28, 75)", "rgb(93, 42, 161)"]       //fond "GENERAL"
        let bg_menu = ["", "", "rgb(0, 31, 63)", "rgb(123, 71, 195)"]                    //bg menu gauche
        let bg_menuHover = ["" , "rgb(43, 53, 123)" , "rgb(2	,0,	255	) ", "rgb(93, 42, 161)" ]
        let bg_header = ["", "rgb(67,74,	126)	", "rgb(0, 31, 63)", "rgb(123, 71, 195)"]                          //bg barre menu top
        let c_user = ["", "rgb(13, 0, 255)", "rgb(153, 36, 159)", "rgb(255, 112, 245)"]                                                    //pseudo MENU

        let c_accueil = ["", "black", "rgb(16, 158, 235)", "black"]  //texte ACCEUIL
        let c_titre = ["", "rgb(128, 162, 235)", "rgb(62, 76, 177)", "white"] //like h5 de ACCUEIL
        let bg_panel = ["", "rgb(185, 213, 246)", "rgb(0, 31, 63)", "rgb(123, 71, 195)"] //panel "bloc" ACCUEIL quasi tout sauf annonce de ...
        let bg_panel_alert = ["", "rgb(185, 213, 246)", "rgb(0, 31, 63)", "rgb(123, 71, 195)"] // ACCUEIL les 3 annonces  et éventuelle message alert dans message
        let c_body = ["", "rgb(16, 158, 235)", "rgb(29, 91, 124)", "white"]//couleur texte un peu partout
        let c_texte = ["", "rgb(16, 158, 235)", "rgb(32, 90, 121)"] //couleur texte menu 
        let c_messageSubtitles = ["", "white", "white"]
        //#B9D5F6

        let bg_homeworkEnd = ["", "rgb(111, 250, 173)", "rgb(111, 250, 173)", "rgb(111, 250, 173)"]
        let bg_homeworkToEnd = ["", "rgb(229, 202, 80)", "rgb(229, 202, 80)", "rgb(229, 202, 80)"]

        let bd_homework = ["", "blue", "blue", "pink"] //BD = border

        // messageri : 
        let bg_left_up_message = ["", "rgb(191, 213, 243)", "rgb(8, 28, 72)"] //fond gauche et haut dans message





        // [ CLASS , CIBLE, COULEUR]
        let change = [
          [".menu", "background", bg_menu],
          ["panel", "background", bg_panel],
          [".msg--neutral", "background", bg_panel_alert],
          [".msg--alert", "background", bg_panel_alert],
          [".header", "background", bg_header], // barre top 
          [".bar", "background", bg_header], // même que .header mais vue que ent mal foutu faut aussi changer sa pour avoir une barre homogène
          [".burger", "background", bg_body],
          [".services-shortcut__item--current .services-shortcut__link", "background", bg_body],
          [".services-shortcut__link:is(:hover,:focus)", "background", bg_body],

          [".services-shortcut__item--current .services-shortcut__link", "color", c_titre],
          [".burger", "color", c_titre],
          //[".panel—bg-lightest" , "background" , bg_left_up_message] // sa sa merde car faut attendre waitélément()
          [".user", "color", c_user],
          [".panel", "color", c_accueil],
          [".h5-like", "color", c_titre],
          [".text--slate-dark", "color", c_messageSubtitles]

        ];
        //  document.querySelectorAll('.header').forEach(el => { el.style.backgroundColor = "red" });// BARRE TOP


        function setCSSVariableRGB(cssVarName, colorArray, index) {
          const color = colorArray[index];

          if (typeof color === 'string' && color.startsWith('rgb')) {
            document.documentElement.style.setProperty(cssVarName, color);
          } else {
            console.error(`Couleur invalide à l'index ${index} :`, color);
          }
        }




        setCSSVariableRGB('--services-shortcut-a-hover--background-color', bg_menuHover, b2);
        

        setCSSVariableRGB('--menu-a-hover--color', c_user, b2);
        








        function applyColorToClass(classSelector, styleProperty, colorArray, index) {
          if (!Array.isArray(colorArray)) {
            console.error("colorArray n'est pas un tableau valide.");
            return;
          }

          const color = colorArray[index];
          if (!color) {

            print(mode, `Pas de couleur à l'index ${index}. ou rine donc -> garde couleur de base`, "0");
            return;
          }

          const elements = document.querySelectorAll(classSelector);
          elements.forEach(el => {
            el.style[styleProperty] = color;
          });
        }

        function putChangeQueryselectorAll(tableau, index) {
          for (let i = 0; i < tableau.length; i++) {
            const [selector, styleProp, colorArray] = tableau[i];
            applyColorToClass(selector, styleProp, colorArray, index);
            // console.log("theme appliqué" + i)
          }
        }

        putChangeQueryselectorAll(change, b2);




        //  -- code --






        document.body.style.background = bg_body[b2]; //fond de base
        document.body.style.color = c_body[b2];

        document.documentElement.style.backgroundColor = ""; // -> html {} <-----------------------------------------------------------------





        //MENU




        function changeColorTxtMenu(c_texte) { document.head.appendChild(Object.assign(document.createElement("style"), { innerHTML: `@media screen {.menu a, .menu button {color: ${c_texte} !important;}}` })); }
        changeColorTxtMenu(c_texte[b2]);

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
          document.querySelectorAll('.panel--bg-lightest').forEach(el => el.style.backgroundColor = bg_left_up_message[b2]);// FOND
        });

        document.querySelectorAll('.jstree-anchor .jstree-default').forEach(el => { el.style.color = "red" });// AUCUNE IDÉe ????? marche pas ???



        function dispalyHomework() {



          // a0 = 0 pas de changement
          // si a0 = 1, plus de devoir FINI
          if (a0 === "0") {
          } else {
            document.querySelectorAll('.panel.panel--full.panel--no-margin.panel--success.js-travail-a-faire').forEach(el => el.style.display = 'none'); //Affiche pas les devoirs
          }

          if (b2 === "0") { //b2 -> thème 
            return null
          } else {
            document.querySelectorAll('.panel').forEach(el => {
              document.querySelectorAll('.panel').forEach(el => { el.style.backgroundColor = bg_panel[b2]; });//carré dans acceuil sauf annonces et carré devoir dans onglet devooir
              document.querySelectorAll('.panel.panel--full').forEach(el => { el.style.backgroundColor = bg_homeworkToEnd[b2]; el.style.padding = "10px"; }); //travail  "pas fini" (jaune)
              document.querySelectorAll('.panel.panel--full.panel--success').forEach(el => { el.style.backgroundColor = bg_homeworkEnd[b2]; el.style.padding = "10px"; }); //travail fini vert
              el.style.border = '2px solid ' + bd_homework[b2];
              el.style.borderRadius = '10px';
              document.querySelectorAll('.panel--outlined.panel').forEach(div => {div.style.backgroundColor = bg_panel[b2]; // fond bloc  
              });


            })
          }
        }



        function removeUserMessage() {
          if (a2 === "1") {
          } if (a2 === "0") {
            document.querySelectorAll('span.text--slate-dark').forEach(subtitles => { subtitles.style.display = "none" });
          }

        }

        removeUserMessage()







        function removeCheck() {
          document.querySelectorAll('input[id^="travail-"]').forEach(input => {
            const span = input.closest('span');
            if (span) {
              span.remove();
            }
          });
        };


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
        };

        //-------------------- SNIPPET ----------------------------||
        //document.documentElement.style.marginTop = "-24px"; // -> html {} 

        waitForElement('input[id^="travail-"]', () => { //CASE TRAVAIL A FAIRE ACCEUIL


          dispalyHomework();
          removeCheck();
          changeLienDevoir();
        });


        waitForElement('div.content-toolbar, div.content-toolbar--tabs, div.content-toolbar--buttons', () => { //CASE TRAVAIL A FAIRE ACCEUIL

          function removeMenuUseless() {//enleve menu qui est inutile

            document.querySelectorAll('div.content-filter').forEach(function (element) {

              element.remove();
            });
            document.querySelectorAll('div.content-toolbar, div.content-toolbar--tabs, div.content-toolbar--buttons').forEach(function (element) {
              element.remove();
            });
          };
          // => content-toolbar content-toolbar--tabs content-toolbar--buttons
         // removeMenuUseless();
        });


//<input type="button" value="Rédiger un message" class="btn btn--primary js-afficherNouveauMessage">









        function playAudio() {
          document.addEventListener('click', function (event) {
            const label = event.target.closest('btn.btn--sm.btn--secondary.js-async.js-taf__btn-marquer-fait-non-fait');
            if (a1 === "on") {
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
        }








      };

      putModX();
    };





//devien la page sélectionner

function checkActivePage () {

  let ACTIVE_PAGE = document.querySelector("title");
  //console.log(document.querySelector(".hide.js-dnma"));

  // Sélectionne l'élément avec la classe js-dnma
let element = document.querySelector('.js-dnma');

// Récupère la valeur de l'attribut data-service
let dataService = element.dataset.service;

//console.log(dataService);


let service = document.querySelectorAll("ul.service-shortcut");

console.log(service);

let list = document.querySelectorAll('li.services-shortcut__item');
//<li class="services-shortcut__item services-shortcut__item--current" aria-current="true" title="Emploi du temps">…</li>
console.log(list[2]);
if (list[2]?.contains("services-shortcut__item--current") ) {
  console.log("list 2")
}
console.log(list[3]);
  

  //data-service

}

//checkActivePage()



 //<title>Reçus - Messagerie - LYCEE JOSEPH VALLOT</title>






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



      } else {
        //  console.log("⚠️(SECRET) si gif/image pas appliquer alors pas normal");
      }
    };
    secret();



    function changeAnonce() {


      const nouveauxTexte = [
        "Texte du premier bloc modifié.",
        "Texte du deuxième bloc modifié.",
        "Est ce qu'il y a vrmt des gens qui lisent c annonces ?"
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
