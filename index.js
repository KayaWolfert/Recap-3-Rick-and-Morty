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
let currentPage = 1;
let maxPageCount = 1;
let searchQuery = ""; // Assuming you will update this dynamically
nextButton.addEventListener("click", () => {
  if (currentPage < maxPageCount) {
    currentPage++;
    fetchDataAndRender();
  }
});
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchDataAndRender();
  }
});

// Function to fetch characters for a given page
export async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${searchQuery}`
  );
  const data = await response.json();
  maxPageCount = data.info.pages;

  // Filter characters based on search query (assuming name property)
  const filteredCharacters = data.results.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredCharacters);
  pagination.textContent = `Page ${currentPage} of ${maxPageCount}`;
  return filteredCharacters;
}
searchBar.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Update searchQuery state with current search bar text
  searchQuery = event.target.query.value; // Trim leading/trailing spaces
  console.log(searchQuery);
  // Reset current page to 1 for new search results
  currentPage = 1;

  // Trigger data fetching and rendering with updated search query
  fetchDataAndRender();
});

fetchDataAndRender();
async function fetchDataAndRender() {
  const serienCharacters = await fetchCharacters();
  cardContainer.innerHTML = "";

  serienCharacters.forEach((character) => {
    const newCard = CharacterCard(character);

    // Check if character name matches search query (assuming name property)

    cardContainer.append(newCard);
  });
}
