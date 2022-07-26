const userEditButton = document.querySelector('.profile__edit-btn')
const popupUser = document.querySelector('.pop-up')
const userCloseButton = document.querySelector('.pop-up__close-btn')
const inputName = document.querySelector('.pop-up__input_type_name')
const inputJob = document.querySelector('.pop-up__input_type_job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const cardsContainer = document.querySelector('.elements')
const cardTemplate = document.querySelector('.card-template').content
const popupPlace = document.querySelector('.pop-up_type_place')
const placeCloseButton = document.querySelector('.pop-up__close-btn_type_place')
const placeAddButton = document.querySelector('.profile__add-btn')
const inputPlace = document.querySelector('.pop-up__input_type_title')
const inputLink = document.querySelector('.pop-up__input_type_link')
const placeTitle = document.querySelector('.element__text')
const placeLink = document.querySelector('.element__image')
const cardDeleteButton = document.querySelector('.element__delete-btn')
const popupImage = document.querySelector('.pop-up_type_image')
const imageCloseButton = document.querySelector('.pop-up__close-btn_type_image')
const userForm = document.querySelector('.pop-up__form');
const placeForm = document.querySelector('.pop-up__form_type_place');

function openPopup(elem) {
  elem.classList.add('pop-up_active')
}

function closePopup(elem) {
  elem.classList.remove('pop-up_active')
}

function saveUser(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupUser);
}

function createCard(event) {
  event.preventDefault();
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__text').textContent = inputPlace.value
  cardElement.querySelector('.element__image').src = inputLink.value
  cardElement.querySelector('.element__image').alt = inputPlace.value
  cardElement.querySelector('.element__like-btn').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-btn_active');
  })
  cardElement.querySelector('.element__delete-btn').addEventListener('click', function (event) {
    event.currentTarget.closest('.element').remove();
  })
  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
    popupImage.classList.toggle('pop-up_active')
    document.querySelector('.pop-up__image').src = cardElement.querySelector('.element__image').src
    document.querySelector('.pop-up__caption').textContent = cardElement.querySelector('.element__text').textContent
  })
  closePopup(popupPlace);
  cardsContainer.prepend(cardElement);
  inputLink.value = '';
  inputPlace.value = '';
}

function renderCards() {
  initialCards.forEach(function (item) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__text').textContent = item.name
    cardElement.querySelector('.element__image').src = item.link
    cardElement.querySelector('.element__image').alt = item.name
    cardElement.querySelector('.element__like-btn').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like-btn_active');
    })
    cardElement.querySelector('.element__delete-btn').addEventListener('click', function (event) {
      event.currentTarget.closest('.element').remove();
    })
    cardElement.querySelector('.element__image').addEventListener('click', function (event) {
      popupImage.classList.toggle('pop-up_active')
      document.querySelector('.pop-up__image').src = item.link
      document.querySelector('.pop-up__caption').textContent = item.name
    })
    cardsContainer.append(cardElement)
  })
}

renderCards()

userEditButton.addEventListener('click', function () {
  popupUser.classList.add('pop-up_active')
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
})

userCloseButton.addEventListener('click', function () {
  closePopup(popupUser)
})

placeCloseButton.addEventListener('click', function () {
  popupPlace.classList.remove('pop-up_active');
  inputLink.value = '';
  inputPlace.value = '';
})

placeAddButton.addEventListener('click', function () {
  popupPlace.classList.add('pop-up_active')
})

imageCloseButton.addEventListener('click', function () {
  closePopup(popupImage)
})

userForm.addEventListener('submit', saveUser)
placeForm.addEventListener('submit', createCard)
