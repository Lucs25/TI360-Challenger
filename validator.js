const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const phoneInput = document.querySelector('#phone');
const cellPhoneInput = document.querySelector('#cell-phone');
const streetInput = document.querySelector('#street');
const numberAddressInput = document.querySelector('#number-address');
const complementInput = document.querySelector('#complement');
const cityInput = document.querySelector('#city');
const zipInput = document.querySelector('#zip');
const error = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  passwordValidate();
  phoneValidate();
  cellPhoneValidate();
  streetValidate();
  numberAddressValidate();
  zipValidate();
});

const nameValidate = () => {
  if (!nameInput.value)
    nameInput.nextElementSibling.classList.remove('error-hidden');
  else nameInput.nextElementSibling.classList.add('error-hidden');
};

const emailValidate = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  if (emailInput.value === '' || emailInput.length) {
    emailInput.nextElementSibling.classList.remove('error-hidden');
    return emailRegex.test(String(email).toLocaleLowerCase());
  } else return emailInput.nextElementSibling.classList.add('error-hidden');
};

const passwordValidate = (password) => {
  if (password === '') {
    return passwordInput.nextElementSibling.classList.add('error-hidden');
  } else
    return passwordInput.nextElementSibling.classList.remove('error-hidden');
};

//VALIDAR
const phoneValidate = (phone) => {
  const regexPhone = /^\(\d{2}\) ?(?:\d{4}-\d{4}|\d \d{4}-\d{4})$/;
  if (phone === '') {
    return phoneInput.nextElementSibling.classList.add('erro-hidden');
  } else phoneInput.nextElementSibling.classList.remove('error-hidden');
  regexPhone.test(phone);
  console.log('ok');
  return;
};

//VALIDAR
const cellPhoneValidate = (cellphone) => {
  const regexCelPhone = /^[0-9.-]$/;
  if (cellPhoneInput.value === '' || cellPhoneInput.length) {
    cellPhoneInput.nextElementSibling.classList.remove('error-hidden');
    return regexCelPhone.test(cellphone);
  } else return cellPhoneInput.nextElementSibling.classList.add('error-hidden');
};

const streetValidate = (street) => {
  const regexStreet = /^[a-zA-Z:]$/;
  if (streetInput.value === '' || streetInput.length) {
    streetInput.nextElementSibling.classList.remove('error-hidden');
    return regexStreet.test(street);
  } else return streetInput.nextElementSibling.classList.add('error-hidden');
};
const numberAddressValidate = (numberAdress) => {
  const regexAddress = /^[a-zA-Z:]$/;
  if (numberAddressInput.value === '' || numberAddressInput.length) {
    numberAddressInput.nextElementSibling.classList.remove('error-hidden');
    return regexAddress.test(numberAdress);
  } else
    return numberAddressInput.nextElementSibling.classList.add('error-hidden');
};

const zipValidate = (zip) => {
  const regexNumberAdress = /^[0-9]$/;
  if (zipInput.value === '' || zipInput.length) {
    zipInput.nextElementSibling.classList.remove('error-hidden');
    return regexNumberAdress.test(zip);
  } else return zipInput.nextElementSibling.classList.add('error-hidden');
};
