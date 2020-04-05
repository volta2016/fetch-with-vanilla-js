let pokemon = document.getElementById('pokemon');
let imagen = document.querySelectorAll('.modal__image');
let pokename = document.getElementById('name');
let before = document.getElementById('before');
let next = document.getElementById('next');
let openmodal = document.getElementById('openModal');
let close = document.querySelectorAll('.modal');


function showModal() {
  openmodal.style.display = 'flex';
}


function closeModal() {
  // document.getElementById('modal').style.display = 'none';
  modal.style.animationName="modalOut"
}

//si defino la var con el numero con del id del pokémon se refiere a que esta es la
//data con la cual voy estar trabajando con las promesas por eso es "importante"
//ver bien que estoy definiendo afuera o dentro de la promesa sobre todo 
//si es una function, también ver lo que estoy retornando
let data = 1;
function promesa(data) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${data}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    renderImage(data.sprites.front_default);
    // renderName(data)
    pokename.innerHTML = `${(data.name).toUpperCase()}`;
  })
  .catch(() => {
    renderImage('imagen.png')
    pokename.innerHTML= ``
  })
  console.log(data);
  console.log(data.name);
}
promesa(data);

function renderImage(image) {
  pokemon.setAttribute("src", image);
}
// function renderName(data) {
//   pokename.innerHTML = `${(data.name).toUpperCase()}`
// }

before.addEventListener("click", () => { 
  data--;
  promesa(data);
})
next.addEventListener("click", () => {
  data++;
  promesa(data);
})




