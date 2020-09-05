const validateEmail = (email) => (/\S+@\S+\.\S+/).test(email);

const randomIn = (maxValue) => Math.floor(Math.random() * maxValue) + 1;

const getRandomBackgroundPosition = () => {
  const random1 = Math.floor(Math.random() * 100) + 1;
  const random2 = Math.floor(Math.random() * 100) + 1;
  return `${random1}% ${random2}%`;
};

const isLargeScreen = () => window.matchMedia('(min-width: 1024px)').matches;

export {
  validateEmail,
  randomIn,
  getRandomBackgroundPosition,
  isLargeScreen,
};
