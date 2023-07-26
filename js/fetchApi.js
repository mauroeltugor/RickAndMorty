const api = 'https://rickandmortyapi.com/api/character';
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
};

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
};

fullCard(api);

const load = document.getElementById("button");
let page = 2;
load.addEventListener('click', async () => {
        await fullCard(`https://rickandmortyapi.com/api/character/?page=${page}`);
        page++;
});

// const search = document.querySelector("#search");

// const searchBar = async () => {
//         const searchTerm = search.value.toLowerCase();
//         await fullCard(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
// };

// search.addEventListener('keydown', searchBar);















































// const api = 'https://rickandmortyapi.com/api/character';
// const cardSection = document.querySelector("#card");
// const template = document.querySelector("#template");

// let allCharacters = []; // Lista para almacenar todos los personajes obtenidos
// let filteredCharacters = []; // Lista para almacenar los personajes filtrados por búsqueda
// let currentPage = 1;

// const getData = async (url) => {
//         const getCharacters = await fetch(url);
//         const finalData = await getCharacters.json();
//         const people = await finalData.results;
//         const finalPeople = people.map((character) => ({
//                 image: character.image,
//                 name: character.name,
//                 status: character.status,
//                 locationC: character.location.name,
//                 specie: character.species
//         }));
//         return finalPeople;
// };

// const fullCard = async () => {
//         let data;
//         if (filteredCharacters.length > 0) {
//                 data = filteredCharacters;
//         } else {
//                 const newUrl = `${api}/?page=${currentPage}`;
//                 data = await getData(newUrl);
//                 allCharacters = [...allCharacters, ...data]; // Agregar nuevos personajes a la lista global
//                 currentPage++;
//         }

//         const fragment = document.createDocumentFragment();
//         data.forEach((character) => {
//                 const card = template.content.cloneNode(true);
//                 const image = card.querySelector("#image");
//                 const name = card.querySelector("#name");
//                 const status = card.querySelector("#status");
//                 const locationCh = card.querySelector("#location");
//                 const specie = card.querySelector("#specie");

//                 image.src = character.image;
//                 name.textContent = character.name;
//                 status.textContent = character.status;
//                 locationCh.textContent = character.locationC;
//                 specie.textContent = character.specie;

//                 if (character.status === 'Alive') {
//                         status.textContent = character.status;
//                         status.style.color = 'green';
//                 } else if (character.status === 'Dead') {
//                         status.textContent = character.status;
//                         status.style.color = 'red';
//                 } else {
//                         status.textContent = character.status;
//                         status.style.color = 'gray';
//                 }

//                 fragment.appendChild(card);
//         });
//         cardSection.appendChild(fragment);
// };

// fullCard();

// const load = document.getElementById("button");
// load.addEventListener('click', fullCard);

// const search = document.querySelector("#search");

// const searchBar = async () => {
//         const searchTerm = search.value.toLowerCase();
//         filteredCharacters = allCharacters.filter((character) => {
//                 const characterName = character.name.toLowerCase();
//                 return characterName.includes(searchTerm);
//         });

//         // Reiniciar la paginación y mostrar los personajes filtrados
//         currentPage = 1;
//         cardSection.innerHTML = '';
//         fullCard();
// };

// search.addEventListener('input', searchBar);