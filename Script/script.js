
fetchData();
async function fetchData(){


    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("Coulde not found!");

        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"; 


    }
    catch(Error){
        console.error(error);

    }

}