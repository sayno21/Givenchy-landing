const popup = document.querySelector('.header__popup');
const menuOpen = document.querySelector('.header__menu-image');
const menuClose = document.querySelector('.header__popup-image');

menuOpen.addEventListener('click', function() {
  popup.classList.add('header__popup_type_opened');
})

menuClose.addEventListener('click', function() {
  popup.classList.remove('header__popup_type_opened');
})
