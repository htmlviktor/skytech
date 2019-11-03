const cardMainTitle = document.querySelector('.card-main__character-title');
const cardMainSize = document.querySelector('.card-main__character-title--size');
const cardActiveLabel = document.querySelector('.card-main__character-title--active');

const cardMainList = document.querySelector('.card-main__character-list');
const cardMainTable = document.querySelector('.card-main__character-table');

cardMainSize.addEventListener('click', () => {
    cardMainTitle.classList.remove('card-main__character-title--active');
    cardMainSize.classList.add('card-main__character-title--active');

    cardMainList.classList.remove('card-main__character--active-display');
    cardMainTable.classList.add('card-main__character--active-display');
})

cardMainTitle.addEventListener('click', () => {
    cardMainSize.classList.remove('card-main__character-title--active');
    cardMainTitle.classList.add('card-main__character-title--active');

    cardMainTable.classList.remove('card-main__character--active-display');
    cardMainList.classList.add('card-main__character--active-display');
})