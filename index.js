import CharacterCard from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  maxPage = data.info.pages;
  pagination.textContent = `Page ${page} of ${maxPage}`;
  return data.results;

}


fetchDataAndRender();
async function fetchDataAndRender() {
  const serienCharacters = await fetchCharacters();
  console.log(serienCharacters);
  cardContainer.innerHTML = "";
  serienCharacters.forEach((character) => {
    const newCard = CharacterCard(character);
    cardContainer.append(newCard);
  });
}

nextButton.addEventListener("click" , () => {
  if (page < maxPage){
    page++;
    fetchDataAndRender();
  }


});

prevButton.addEventListener("click" , () => {
  if (page > 1){
    page--;
    fetchDataAndRender();
  }

});
