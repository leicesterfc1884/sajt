// PROMENA SLIKE NA KLIK
function promeniSliku() {
  var slika = document.getElementById("slika");
  if (slika.src.endsWith("slika1.png")) {
    slika.src = "slika2.png";
    slika.alt = "Slika 2";
  } else {
    slika.src = "slika1.png";
    slika.alt = "Slika 1";
  }
}



// CHECKBOX
function onCheckboxClick(event) {
  var checkboxes = document.getElementsByName("ligaCheckbox");
  checkboxes.forEach(function(checkbox) {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
  });
}



// PRIKAZ PORUKE
function prikaziPoruku() {
  var premierLigaCheckbox = document.getElementById("premierLigaCheckbox");
  var ligaOneCheckbox = document.getElementById("ligaOneCheckbox");
  var porukaElement = document.getElementById("poruka");

  if (premierLigaCheckbox.checked) {
    porukaElement.innerText = "Leicester City je osvojio Premier Ligu jednom, 2015/2016 sezone.";
  } else if (ligaOneCheckbox.checked) {
    porukaElement.innerText = "Leicester City je osvojio League One jednom, u sezoni 2008/2009.";
  } else {
    porukaElement.innerText = "Niste izabrali nijednu opciju.";
  }
}

function ispisiPoruku() {
  var unosTeksta = document.getElementById("unosTeksta").value;
  var porukaElement = document.getElementById("poruka1");

  if (unosTeksta.toLowerCase() === "leicester city") {
    porukaElement.innerText = "Leicester City je osvojio Premier Ligu u sezoni 2015/2016 i bio je jedan od najvećih iznenađenja u istoriji fudbala.";
  } else {
    porukaElement.innerText = "Niste uneli odgovarajući tekst. Pokušajte ponovo.";
  }
}



var bojaPromenjena = false;
var velicinaPromenjena = false;

//FUNKCIJA 1
function promeniBoju() {
  var leicesterText = document.getElementById("leicesterText");
  if (!bojaPromenjena) {
    leicesterText.style.color = "red";
    bojaPromenjena = true;
  } else {
    leicesterText.style.color = "black";
    bojaPromenjena = false;
  }
}

//FUNKCIJA 2
function promeniVelicinu() {
  var leicesterText = document.getElementById("leicesterText");
  if (!velicinaPromenjena) {
    leicesterText.style.fontSize = "24px";
    velicinaPromenjena = true;
  } else {
    leicesterText.style.fontSize = "18px";
    velicinaPromenjena = false;
  }
}