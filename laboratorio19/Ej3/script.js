const id = parseFloat(prompt("Ingrese el id del pokemon que desea buscar"));
async function buscarPokemon(pokemonId) {
    if (isNaN(pokemonId) || pokemonId <= 0) {
        console.error("Error: Ingrese un ID de Pokémon válido (un número positivo).");
        return;
    }
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!res.ok) throw new Error(`Pokémon no encontrado (Código: ${res.status})`);
        const data = await res.json();
        console.log("Nombre:", data.name);
    } catch (error) {
        console.error("Error al buscar Pokémon:", error.message);
    }
}
buscarPokemon(id)