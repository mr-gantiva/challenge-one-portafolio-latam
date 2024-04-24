//Haz tú validación en javascript acá
window.addEventListener("scroll", function () {
  var menu = document.getElementById("menu");
  if (window.scrollY > 0) {
    // Si el usuario ha hecho scroll hacia abajo
    menu.classList.add("menu-scrolled"); // Agregar la clase para el fondo diferente
  } else {
    menu.classList.remove("menu-scrolled"); // Quitar la clase si el usuario está en la parte superior
  }
});
