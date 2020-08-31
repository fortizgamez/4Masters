const toggleFocus = ({ currentTarget }) => {
  const parent = currentTarget.closest('div');
  const placeholder = parent.querySelector('.placeholder');
  if (currentTarget.value) placeholder.classList.add('hide');
  else placeholder.classList.remove('hide');
  parent.classList.toggle('focus');
};

document.querySelectorAll('input, textarea').forEach((elem) => {
  elem.addEventListener('focus', toggleFocus);
  elem.addEventListener('blur', toggleFocus);
});
