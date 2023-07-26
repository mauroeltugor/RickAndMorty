const api = 'https://rickandmortyapi.com/api/character/?page=';
const cardSection = document.querySelector("#card");
const template = document.querySelector("#template");

const getData = async (url) => {
        const getCharacters = await fetch(url);
        const finalData = await getCharacters.json();
        const people = await finalData.results;
        const finalPeople = people.map((character) => ({
                image: character.image,
                name: character.name,
                status: character.status,
                locationC: character.location.name,
                specie: character.species
        }));
        return finalPeople;
}

const fullCard = async (newUrl) => {
        const data = await getData(newUrl);
        const fragment = document.createDocumentFragment();
        data.forEach((character) => {
                const card = template.content.cloneNode(true);
                const image = card.querySelector("#image");
                const name = card.querySelector("#name");
                const status = card.querySelector("#status");
                const locationCh = card.querySelector("#location");
                const specie = card.querySelector("#specie");

                image.src = character.image;
                name.textContent = character.name;
                status.textContent = character.status;
                locationCh.textContent = character.locationC;
                specie.textContent = character.specie;

                if (character.status === 'Alive') {
                        status.textContent = character.status;
                        status.style.color = 'green';
                } else if (character.status === 'Dead') {
                        status.textContent = character.status;
                        status.style.color = 'red';
                } else {
                        status.textContent = character.status;
                        status.style.color = 'gray';
                }

                fragment.appendChild(card);
        });
        cardSection.appendChild(fragment);
}

fullCard(api);

const load = document.getElementById("button")
let page = 2
load.addEventListener('click', async () => {
        await fullCard(`https://rickandmortyapi.com/api/character/?page=${page}`);
        page++;
});


const search = document.querySelector("#search");























search.addEventListener('')

"https://rickandmortyapi.com/api/character/?name="





const searchBar = async () => {
        const data = await getData(newUrl);
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));

        // Mostramos los resultados de la búsqueda
        displayResults(filteredData);
}

// Función para mostrar los resultados de la búsqueda
function displayResults(results) {
        searchResults.innerHTML = ''; // Limpiamos resultados previos

        if (results.length === 0) {
                const noResultsItem = document.createElement('li');
                noResultsItem.textContent = 'No se encontraron resultados';
                searchResults.appendChild(noResultsItem);
        } else {
                results.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.textContent = item;
                        searchResults.appendChild(listItem);
                });
        }
}

// Agregamos el evento de búsqueda al input
searchInput.addEventListener('input', search);