console.log("extensions lancé !")


chrome.storage.local.get("valeurs", (data) => {
  if (data.valeurs) {
      console.log("Valeurs récupérées :", data.valeurs);
  }});

let b0 = document.getElementById("name").value;
b0.value = data[1][0]
console.log(data[1][0])
