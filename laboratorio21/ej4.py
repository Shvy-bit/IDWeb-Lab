import requests
response = requests.get("https://pokeapi.co/api/v2/pokemon?limit=10")
data = response.json()
pokemon_list = data.get("results", [])
for pokemon in pokemon_list:
    print(pokemon.get("name"))
    