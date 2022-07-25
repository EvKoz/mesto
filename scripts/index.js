const userEditButton = document.querySelector('.profile__edit-btn')
const popupUser = document.querySelector('.pop-up')
const userCloseButton = document.querySelector('.pop-up__close-btn')
const inputName = document.querySelector('.pop-up__input_type_name')
const inputJob = document.querySelector('.pop-up__input_type_job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const userSaveButton = document.querySelector('.pop-up__submit-profile')
const cardsContainer = document.querySelector('.elements')
const cardTemplate = document.querySelector('.card-template').content
const popupPlace = document.querySelector('.pop-up_type_place')
const placeCloseButton = document.querySelector('.pop-up__close-btn_type_place')
const placeAddButton = document.querySelector('.profile__add-btn')
const inputPlace = document.querySelector('.pop-up__input_type_title')
const inputLink = document.querySelector('.pop-up__input_type_link')
const placeTitle = document.querySelector('.element__text')
const placeLink = document.querySelector('.element__image')
const placeSaveButton = document.querySelector('.pop-up__submit-place')
const cardDeleteButton = document.querySelector('.element__delete-btn')
const popupImage = document.querySelector('.pop-up_type_image')
const imageCloseButton = document.querySelector('.pop-up__close-btn_type_image')


function renderCards() {
  initialCards.forEach(function (item) {
    const cardElement = cardTemplate.cloneNode(true);
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

function saveCard(event) {
  event.preventDefault();
  const cardElement = cardTemplate.cloneNode(true);
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
    document.querySelector('.pop-up__image').src = placeLink.src
    document.querySelector('.pop-up__caption').textContent = placeTitle.textContent
  })
  closePlacePopup();
  cardsContainer.prepend(cardElement);
  inputLink.value = '';
  inputPlace.value = '';
}

renderCards()

function openUserPopup() {
  popupUser.classList.toggle('pop-up_active')
}

function closeUserPopup() {
  popupUser.classList.toggle('pop-up_active')
}

function editUser() {
  openUserPopup()
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function saveUser(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closeUserPopup();
}

function openPlacePopup() {
  popupPlace.classList.toggle('pop-up_active')
}

function closePlacePopup() {
  popupPlace.classList.toggle('pop-up_active')
}

function openImage(event) {
  popupImage.classList.toggle('pop-up_active')
  popupImage.src = event.target.src
}

function closeImage() {
  popupImage.classList.toggle('pop-up_active')
}

userEditButton.addEventListener('click', editUser)
userCloseButton.addEventListener('click', closeUserPopup)
userSaveButton.addEventListener('click', saveUser)
placeCloseButton.addEventListener('click', closePlacePopup)
placeAddButton.addEventListener('click', openPlacePopup)
placeSaveButton.addEventListener('click', saveCard)
imageCloseButton.addEventListener('click', closeImage)
