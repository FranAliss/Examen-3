import verificar from "./verificador";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#crear-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titulo.value;
  const desc = descripcion.value;

  div.innerHTML = "<p> Publicacion: <br><br>"+ verificar(title) + "<br>"+ desc +"</p>";
});
