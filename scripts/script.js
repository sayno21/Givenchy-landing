const popup = document.querySelector('.header__popup');
const menuOpen = document.querySelector('.header__menu-image');
const menuClose = document.querySelector('.header__popup-image');
const about = document.getElementById('about');
const looks = document.getElementById('looks');
const subscribe = document.getElementById('subscribe');
const headerButton = document.querySelector('.header__button');
const emailInput = document.getElementById('email');
const sectionAbout = document.querySelector('.about');
const sectionLooks = document.querySelector('.looks');



//Opening and closing menu
menuOpen.addEventListener('click', function() {
  popup.classList.add('header__popup_type_opened');
})

menuClose.addEventListener('click', function() {
  popup.classList.remove('header__popup_type_opened');
})

function closePopup(item) {item.classList.remove('header__popup_type_opened')};


//Scrolling
headerButton.addEventListener('click', function () {
  emailInput.scrollIntoView({
      behavior: 'smooth'
  });
  emailInput.select();
});

about.addEventListener('click', function () {
  sectionAbout.scrollIntoView({
      behavior: 'smooth'
  });
  closePopup(popup);
});

looks.addEventListener('click', function () {
  sectionLooks.scrollIntoView({
      behavior: 'smooth'
  });
  closePopup(popup);
});

subscribe.addEventListener('click', function () {
  emailInput.scrollIntoView({
      behavior: 'smooth'
  });
  emailInput.select();
  closePopup(popup);
});