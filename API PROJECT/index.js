fetchData();
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("could not fetch the resources");
        }
        const data = await response.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("PokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display ="block";
    }
    catch(error){
       console.log(error)
    }

    
    }



