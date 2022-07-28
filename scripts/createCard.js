function createCard() {
  const cardDeleteButton = document.querySelector('.element__delete-btn');
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__text').textContent = inputPlace.value;
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = inputLink.value;
  cardImage.alt = inputPlace.value;
  cardDeleteButton.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-btn_active');
  });
  cardElement.querySelector('.element__delete-btn').addEventListener('click', function (event) {
    event.currentTarget.closest('.element').remove();
  });
  cardImage.addEventListener('click', function () {
    openPopup(popupImage);
    document.querySelector('.pop-up__image').src = cardImage.src;
    document.querySelector('.pop-up__caption').textContent = cardElement.querySelector('.element__text').textContent;
    document.querySelector('.pop-up__image').alt = cardElement.querySelector('.element__text').textContent;
  });
  return cardElement;
}
