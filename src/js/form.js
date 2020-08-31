import { gsap } from 'gsap';
import { validateEmail } from './utils';

const input = document.querySelector('#contact__form input');
const textarea = document.querySelector('#contact__form textarea');
const button = document.querySelector('#contact__form button');
const formMessage = document.querySelector('#contact__form .form-message');

const handleOnActive = (elem) => {
  const placeHolder = elem.closest('div').querySelector('.placeholder');
  if (!elem.value) {
    gsap.fromTo(placeHolder,
      { y: 0, fontSize: '100%' },
      { duration: 0.7, y: -elem.offsetHeight, fontSize: '80%' });
  }
};

const handleOnDeactivate = (elem) => {
  const placeHolder = elem.closest('div').querySelector('.placeholder');
  if (!elem.value) gsap.to(placeHolder, 0.7, { y: 0, fontSize: '100%' });
};

input.addEventListener('focus', ({ currentTarget }) => handleOnActive(currentTarget));
input.addEventListener('blur', ({ currentTarget }) => handleOnDeactivate(currentTarget));
textarea.addEventListener('focus', ({ currentTarget }) => handleOnActive(currentTarget));
textarea.addEventListener('blur', ({ currentTarget }) => handleOnDeactivate(currentTarget));

button.addEventListener('click', (e) => {
  if (!input.value) {
    formMessage.classList.add('error');
    formMessage.innerHTML = 'Email field is required';
    e.preventDefault();
  } else if (!validateEmail(input.value)) {
    formMessage.classList.add('error');
    formMessage.innerHTML = 'Email value is not correct';
    e.preventDefault();
  } else if (!textarea.value) {
    formMessage.classList.add('error');
    formMessage.innerHTML = 'Message field is required';
    e.preventDefault();
  } else {
    formMessage.classList.remove('error');
  }
});

if (input.value) handleOnActive(input);

if (textarea.value) handleOnActive(textarea);
