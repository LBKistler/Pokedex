// POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// using the first 150 pokemon (aka IDs/Objects) in the PokeAPI
const numOfPokemon = 150;

// the createPokeCard function creates a new card (aka section element) and adds the new card to the webpage/document inside of the div (ala pokeContainer) with the id of "container"
// note: the value/argument that will be passed in for the "pokemon" parameter will be the response received from an Axios request to the PokeAPI
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter; also using toUpperCase method on the pokemon name so it displays in UPPERCASE text
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}

// the getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/Number then takes the returneddata and passes it into the createPokeCard function
// note: the argument/value passed into the "id" parameter will be a number created in the loop in the next function (aka the getPokemon function)
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData.data);
    console.log(pokemonData.data.sprites.front_shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}

// the getPokemon function loops through all the pokemon IDs from 1 to 150 and runs/executes the getPokemonData function for each id
// note: using async/await on this function because the code in the getPokemonData function is asynchronous (there is an axios in the function)
async function getPokemon(){
    for(i = 1; i <= numOfPokemon; i++){
        console.log(i);
        await getPokemonData(i);
    }
}
// running/executing the getPokemon function which runs/executes the getPokemonData function each time through the loop
getPokemon();