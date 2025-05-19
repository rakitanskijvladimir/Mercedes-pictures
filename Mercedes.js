import { initialCards } from "./MercedesImg.js";

function createCard (cardData, deleteCallback) {
    // клонирование шаблона 
    const cardTemplate = document.querySelector('#card-template');
    const cardElement = cardTemplate.content.cloneNode(true);

    // заполнение значения элементов карточки
    const imageElement = cardElement.querySelector('.card__image');
    imageElement.src=cardData.link;
    imageElement.alt=cardData.name;
    imageElement.text=cardData.text;

    const titleElement = cardElement.querySelector('.card__title');
    titleElement.textContent = cardData.name;

    const textElement = cardElement.querySelector('.card__text');
    textElement.textContent = cardData.text;

    // добавляем обработчик клика на кнопку удаления
    const deleteButton = cardElement.querySelector('.card__heart-button');
    deleteButton.addEventListener('click', () => {
        // deleteCallback(cardElement);
    });

    return cardElement;
}
 
// функция для удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// функция для добавления карточек на страницу
function addCardsToPage (cards) {
    const placeContainer = document.querySelector('.list');
    cards.forEach((cardData) => {
        const cardElement = createCard(cardData, deleteCard);
        placeContainer.appendChild(cardElement);
    }) 

 }
 addCardsToPage(initialCards);
 



// document.querySelectorAll('.cards img').forEach(img =>{
// img.onclick = () => {
//     document.querySelector('.pop-up').style.display = 'block';
//     document.querySelector('.pop-up img').src = img.getAttribute('src');
// }
// });

// document.querySelector('.pop-up span').onclick = () => {
//     document.querySelector('.pop-up').style.display = 'none';
// }


 

 function changeTheme(theme) {
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }
  
  (function initTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      changeTheme(theme);
    }
  })();
  
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeButtons = document.querySelectorAll('.theme-menu__button');
  
    function setDisabled(theme) {
      themeButtons.forEach((item) => {
        if (item.getAttribute('data-theme') === theme) {
          item.setAttribute('disabled', true);
        } else {
          item.removeAttribute('disabled');
        }
      });
    }
  
    if ([...root.classList].includes('theme-light')) {
      setDisabled('light');
    } else if ([...root.classList].includes('theme-dark')) {
      setDisabled('dark');
    }
  
    themeButtons.forEach((button) => {
      button.onclick = () => {
        changeTheme(button.getAttribute('data-theme'));
        setDisabled(button.getAttribute('data-theme'));
      };
    });
  });
  










const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__heart-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
}











