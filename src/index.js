const root = document.querySelector(".root");
const numPokemon = 152;
const URL = "https://pokeapi.co/api/v2/pokemon/";

const promises = [];
for (let i = 1; i <= numPokemon; i++) {
  const url = URL + i;
  const promise = fetch(url)
    .then(response => response.json())
    .then(data => data);
  promises.push(promise);
}

Promise.all(promises)
  .then(responses => {
    responses.forEach(({ name, sprites, types }) => {
      console.log(types);
      const newPokemon = {
        name,
        image: sprites.front_default,
        type: types[0].type.name
      };
      createPokemon(newPokemon);
    });
  });

const createPokemon = (pokemon) => {
  const pokeInfo = `
      <div class="pokemon-card-container ${pokemon.type}">
        <div class="pokemon-card">
          <div class="pokemon-image">
            <img src="${pokemon.image}" alt="${pokemon.name}" />
            <span class="pokemon-type ${pokemon.type}">${pokemon.type.toUpperCase()}</span>
          </div>
          <div class="pokemon-info">
            <p>${pokemon.name}</p>
          </div>
      </div>
      </div>
    `;

  root.innerHTML += pokeInfo;
};
