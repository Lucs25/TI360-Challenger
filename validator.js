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

const showError = (input) => {
  input.nextElementSibling.classList.remove('error-hidden');
};

const hideError = (input) => {
  input.nextElementSibling.classList.add('error-hidden');
};

const nameValidate = () => {
  if (!nameInput.value) {
    showError(nameInput);
    return false;
  } else {
    hideError(nameInput);
    return true;
  }
};

const emailValidate = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = emailInput.value.trim();

  if (email === '' || !emailRegex.test(email.toLowerCase())) {
    showError(emailInput);
    return false;
  } else {
    hideError(emailInput);
    return true;
  }
};

const passwordValidate = () => {
  if (passwordInput.value === '' || passwordInput.value.length <= 8) {
    showError(passwordInput);
    return false;
  } else {
    hideError(passwordInput);
    return true;
  }
};

const phoneValidate = () => {
  const regexPhone = /^\d{2}-\d{8}$/;
  const phone = phoneInput.value.trim();

  if (phone === '' || !regexPhone.test(phone)) {
    showError(phoneInput);
    return false;
  } else {
    hideError(phoneInput);
    return true;
  }
};

const cellPhoneValidate = () => {
  const regexCellPhone = /^\d{2}-\d{9}$/;
  const cellPhone = cellPhoneInput.value.trim();

  if (cellPhone === '' || !regexCellPhone.test(cellPhone)) {
    showError(cellPhoneInput);
    return false;
  } else {
    hideError(cellPhoneInput);
    return true;
  }
};

const streetValidate = () => {
  const regexStreet = /^[a-zA-Z\s]+$/;
  const street = streetInput.value.trim();

  if (street === '' || !regexStreet.test(street)) {
    showError(streetInput);
    return false;
  } else {
    hideError(streetInput);
    return true;
  }
};

const numberAddressValidate = () => {
  const regexNumberAddress = /^[a-zA-Z0-9]+$/;
  const numberAddress = numberAddressInput.value.trim();

  if (numberAddress === '' || !regexNumberAddress.test(numberAddress)) {
    showError(numberAddressInput);
    return false;
  } else {
    hideError(numberAddressInput);
    return true;
  }
};

const zipValidate = () => {
  const regexZip = /^[0-9]+$/;
  const zip = zipInput.value.trim();

  if (zip === '' || !regexZip.test(zip)) {
    showError(zipInput);
    return false;
  } else {
    hideError(zipInput);
    return true;
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (
    nameValidate() &&
    emailValidate() &&
    passwordValidate() &&
    phoneValidate() &&
    cellPhoneValidate() &&
    streetValidate() &&
    numberAddressValidate() &&
    zipValidate()
  ) {
    console.log('Formulário válido. Enviar...');
  } else {
    console.log('Formulário inválido. Corrija os campos destacados.');
  }
});
