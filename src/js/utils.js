const validateEmail = (email) => (/\S+@\S+\.\S+/).test(email);

const randomIn = (maxValue) => Math.floor(Math.random() * maxValue) + 1;

export { validateEmail, randomIn };
