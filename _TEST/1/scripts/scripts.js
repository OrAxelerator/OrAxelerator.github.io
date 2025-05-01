let pages = 1
let position = 1 // 1 = haut, flèche haut ; 0 = bas, fleche bas

const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

const arrow = document.getElementById('scroll');
const arrowContainer = document.getElementById('container-arrow')
arrowContainer.classList.add("sens-arrow-bas")



function MyFunctionTop(x) {
      if (x === 1) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // pour un défilement fluide vers le haut
        });
      } else {
        console.log("rien faire top()")
      }
};

MyFunctionTop(1)

function screen1to2() {
  screen1.classList.remove('active');
      screen2.classList.add('active');
};

function screen2to1 () {
       screen2.classList.remove('active');
      screen1.classList.add('active');
      document.body.style.height = screen1.scrollHeight + 'px';
};
// Init : s’assure que la popup a la bonne taille au chargement
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.height = screen1.scrollHeight + 'px';
});






    function changeArrow(x) {
       

      if (x === 1) {
        console.log("déplacement vers le bas")
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth' 
        });
        position = position -1;
        arrowContainer.classList.toggle("sens-arrow-bas")
        arrowContainer.classList.toggle('sens-arrow-haut')
        
      }if (x === 0) { 
        
        console.log("déplacement vers le haut")
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        position ++;
        arrowContainer.classList.toggle("sens-arrow-bas")
        arrowContainer.classList.toggle('sens-arrow-haut')
      }
      console.log(x)
      
    };


    document.getElementById('to-screen2').addEventListener('click', () => {
      MyFunctionTop(1);
      screen1to2();

      position = 0;
      changeArrow(position)
      // Ajuste la hauteur du body (Chrome s’adapte automatiquement à la hauteur réelle du contenu)
      document.body.style.height = screen2.scrollHeight + 'px';
    });

    document.getElementById('back-to-screen1').addEventListener('click', () => {
      MyFunctionTop(1);
      screen2to1();

      position = 0;
      changeArrow(position)
    });



document.getElementById("container-arrow").addEventListener('click', () => {

console.log(" ------------------------  position = " + position + "   ------------------------ ")
changeArrow(position);
  




});
