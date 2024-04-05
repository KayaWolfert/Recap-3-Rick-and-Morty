export default function CharacterCard(character) {
  console.log(character);
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `<div class="card__image-container">
  <img
    class="card__image"
    src=${character.image}
    alt=""
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${character.name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">status</dt>
    <dd class="card__info-description">${character.status}</dd>
    <dt class="card__info-title">type</dt>
    <dd class="card__info-description">${character.type}</dd>
    <dt class="card__info-title">occurrences</dt>
    <dd class="card__info-description">${character.episode.length}</dd>
  </dl>
</div>`;
  return newCard;
}
