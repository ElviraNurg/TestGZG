

const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
nav.classList.remove('navigation--nojs');

const toggleClass = () => {
    if (nav.classList.contains('navigation--open')) {
        nav.classList.remove('navigation--open');
        nav.classList.add('navigation--close');
    } else {
        nav.classList.add('navigation--open');
        nav.classList.remove('navigation--close');
    }
};
navToggle.addEventListener('click', () => toggleClass());


const toggle = (el, class1, class2) => {
    if (el.classList.contains(class1)) {
        el.classList.remove(class1);
        el.classList.add(class2);
    }
}

const searchLink = document.querySelector('.navigation__search-form');
const input = document.querySelector('.navigation__search-input');


searchLink.addEventListener('click', () => toggle(searchLink, 'navigation__search-form--label', 'navigation__search-form--input'));

document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
        toggle(searchLink, 'navigation__search-form--input', 'navigation__search-form--label')
    }
});

//Закрытие по клику вне области input

 /* document.addEventListener('click', function(event) {
    const input = document.querySelector('.navigation__search-input');
    if (!input.contains(event.target)&&searchLink.classList.contains('navigation__search-form--input'))
        toggle(searchLink, 'navigation__search-form--input', 'navigation__search-form--label')
  });  */