
let index = 1;




function loadPoke(index)
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then(respuesta => respuesta.json())
      .then(datos => {
        document.getElementById("name").innerText = datos.name;
        const pokemonImage = document.getElementById('image');
        pokemonImage.src = datos.sprites.other.dream_world.front_default;
      });
}

loadPoke(index);


document.getElementById("buttonLeft").addEventListener("click", () =>
{
    if (index > 1)
    {
        index--;
    }
    else
    {
        index = 151;
    }

    loadPoke(index);

});



document.getElementById("buttonRight").addEventListener("click", () =>
{
    if (index == 151)
    {
        index = 1;
    }
    else
    {
        index++;
    }

    loadPoke(index);

});

