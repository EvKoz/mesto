const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.pop-up__close-btn');
const popupElement = document.querySelector('.pop-up');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const newName = document.querySelector('.pop-up__input_type_name');
const newJob = document.querySelector('.pop-up__input_type_job');
const saveUserButton = document.querySelector('.pop-up__input_type_submit-profile');

function editUser() {
  popupElement.classList.toggle('pop-up_active');
  newName.value = profileName.textContent;
  newJob.value = profileJob.textContent;
}

function closeUser() {
  popupElement.classList.toggle('pop-up_active');
}

function saveUser(evt) {
  evt.preventDefault();
  profileName.textContent = newName.value;
  profileJob.textContent = newJob.value;
  closeUser();
  }

editButton.addEventListener('click', editUser);
closeButton.addEventListener('click', closeUser);
saveUserButton.addEventListener('click', saveUser);
