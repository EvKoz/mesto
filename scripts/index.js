function openPopup(item) {                                           //открытие попапа
  item.classList.add('pop-up_active')
}

function closePopup(item) {                                          //закрытие попапа
  item.classList.remove('pop-up_active')
}

const userEditButton = document.querySelector('.profile__edit-btn')  //открытие и закрытие попапа пользователя
const userPopup = document.querySelector('.pop-up')
const userCloseButton = document.querySelector('.pop-up__close-btn')

userEditButton.addEventListener('click', function () {
  editUser()
})

userCloseButton.addEventListener('click', function () {
  closePopup(userPopup)
})

const profileName = document.querySelector('.profile__name')         //редактирование пользователя
const profileJob = document.querySelector('.profile__job')
const inputName = document.querySelector('.pop-up__input_type_name')
const inputJob = document.querySelector('.pop-up__input_type_job')

function editUser() {
  openPopup(userPopup)
  inputName.value = profileName.textContent
  inputJob.value = profileJob.textContent
}

const userForm = document.querySelector('.pop-up__form')             //сохранение пользователя

function userHandler(evt) {
  evt.preventDefault()
  profileName.textContent = inputName.value
  profileJob.textContent = inputJob.value
  closePopup(userPopup)
}

userForm.addEventListener('submit', userHandler)

placeAddButton = document.querySelector('.profile__add-btn')         //открытие и закрытие попапа карточки
placeCloseButton = document.querySelector('.pop-up__close-btn_type_place')
const placePopup = document.querySelector('.pop-up_type_place')

placeAddButton.addEventListener('click', function () {
  openPopup(placePopup)
})

placeCloseButton.addEventListener('click', function () {
  closePopup(placePopup)
})

const placeForm = document.querySelector('.pop-up__form_type_place') //создание карточки
const placeInputName = document.querySelector('.pop-up__input_type_title')
const placeInputLink = document.querySelector('.pop-up__input_type_link')
const cardsContainer = document.querySelector('.elements')
const popupImage = document.querySelector('.pop-up_type_image')


function createCard(name, link) {
  const cardTemplate = document.querySelector('.card-template').content.querySelector('.element').cloneNode(true)
  cardTemplate.querySelector('.element__text').textContent = name
  cardTemplate.querySelector('.element__image').alt = name
  cardTemplate.querySelector('.element__image').src = link
  cardTemplate.querySelector('.element__like-btn').addEventListener('click', clickLike)
  cardTemplate.querySelector('.element__delete-btn').addEventListener('click', deleteCard)
  cardTemplate.querySelector('.element__image').addEventListener('click', openImage)
  document.querySelector('.pop-up__close-btn_type_image').addEventListener('click', closeImage)
  cardsContainer.appendChild(cardTemplate)
}

function clickLike(event) {                                          //постановка лайка
  event.target.classList.toggle('element__like-btn_active')
}

function deleteCard(event) {                                         //удаление карточки
  event.currentTarget.closest('.element').remove()
}

function openImage(event) {                                           //открытие картинки
  document.querySelector('.pop-up__image').src = event.currentTarget.closest('.element__image').src
  document.querySelector('.pop-up__caption').textContent = event.currentTarget.closest('.element__image').alt
  document.querySelector('.pop-up__image').alt = event.currentTarget.closest('.element__image').alt
  popupImage.classList.toggle('pop-up_active')
}

function closeImage(){
  closePopup(popupImage)
}

function addCard() {                                                 //добавление карточки в верстку
  placeForm.addEventListener('submit', function (event) {
    event.preventDefault()
    createCard(placeInputName.value, placeInputLink.value)
    closePopup(placePopup)
    placeInputName.value = ''
    placeInputLink.value = ''
  })
}

function renderInitialCards() {                                      //обработка массива
  initialCards.forEach(item => createCard(item.name, item.link))
}


addCard()
renderInitialCards()
