// Fonction pour appliquer les styles aux éléments en fonction de la position de défilement
function applyScrollEffect() {
  if (window.scrollY > 650) {
    slam.style.opacity = 1;
    slam.style.transform = "none";
    sisr.style.opacity = 1;
    sisr.style.transform = "none";
  }
  if (window.scrollY > 1100) {
    pro.style.opacity = 1;
    pro.style.transform = "none";
  }
  if (window.scrollY > 1500) {
    parcours.style.opacity = 1;
    parcours.style.transform = "none";
  }
  if (window.scrollY > 2500) {
    const projets = document.querySelectorAll("#projet");
    projets.forEach((projet) => {
      projet.style.opacity = 1;
      projet.style.transform = "none";
      projet.style.transition = "1s ease-in";
    });
  }
}

// Ajouter l'événement de défilement
window.addEventListener("scroll", applyScrollEffect);

// Vérifier la position de défilement lorsque la page est chargée
document.addEventListener("DOMContentLoaded", applyScrollEffect);
// Fonction d'initialisation de la carte
function initMap() {
  // Coordonnées de l'emplacement (par exemple, Paris)
  var location = { lat: 48.8566, lng: 2.3522 };

  // Créez la carte centrée sur l'emplacement
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });

  // Ajoutez un marqueur à l'emplacement
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Ajoutez des validations supplémentaires si nécessaire
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Tous les champs doivent être remplis.");
      event.preventDefault(); // Empêche l'envoi du formulaire
    } // Vous pouvez ajouter d'autres validations ici, comme vérifier le format de l'email
  });
