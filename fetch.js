let pokemon = document.querySelectorAll('#pokemon');
let imagen = document.querySelectorAll('.modal__image');
let pokename = document.querySelectorAll('.modal__name');
let before = document.getElementById('before');
let next = document.getElementById('next');
let close = document.querySelectorAll('.modal');


function showModal() {
  document.getElementById('openModal').style.display = 'flex';
}



function closeModal() {
  document.getElementById('modal').style.display = 'none';
}



let start = 1;
promesa(start)
function promesa(start) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${start}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    renderImage(data.sprites.front_default);
    pokename.innerHTML=`${(data.name).toUppercase()}`
  })
  .catch(() => {
    renderImage('imagen.png')
    pokename.innerHTML= ``
  })
}

function renderImage(image) {
  pokemon.setAttribute('src', image)
}

before.addEventListener('click', () => { 
  start--;
  promesa(start);
})
next.addEventListener('click', () => {
  start++;
  promesa(start);
})




