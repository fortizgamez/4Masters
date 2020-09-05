const validateEmail = (email) => (/\S+@\S+\.\S+/).test(email);

const randomIn = (maxValue) => Math.floor(Math.random() * maxValue) + 1;

const isLargeScreen = () => window.matchMedia('(min-width: 1024px)').matches;

export {
  validateEmail,
  randomIn,
  isLargeScreen,
};
