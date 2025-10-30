// Referencia a los elementos del formulario

const cardNumber = document.getElementById("cardNumber");
const cvcNumber = document.getElementById("cvc");
const amount = document.getElementById("amount");
const fName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postalCode");
const payment = document.getElementById("payment-type");
const message = document.getElementById("message");
const form = document.getElementById("paymentForm");
const globalAlert = document.getElementById("globalError");

// Limpiar todos los errores de los inputs

const inputs = [
  cardNumber,
  cvcNumber,
  amount,
  fName,
  lastName,
  city,
  state,
  postalCode,
  message,
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log("El envío ha sido detenido. Iniciando validación");

  // 1. Establecer semáforo:
  let isValid = true;

  // 2. Limpieza de campos (Campos tarjeta y global)
  globalAlert.classList.add("d-none");
  inputs.forEach((input) => {
    input.classList.remove("is-invalid", "bg-error");
  });
  payment.classList.remove("is-invalid");

  if (cardNumber.value.trim() === "" || cardNumber.value.trim().length !== 16) {
    cardNumber.classList.add("is-invalid");
    cardNumber.classList.add("bg-error");
    isValid = false;
  }

  if (cvcNumber.value.trim() === "" || cvcNumber.value.trim().length < 3) {
    cvcNumber.classList.add("is-invalid");
    cvcNumber.classList.add("bg-error");
    isValid = false;
  }

  const amountValue = parseFloat(amount.value.trim());
  if (amount.value.trim() === "" || isNaN(amountValue) || amountValue <= 0) {
    amount.classList.add("is-invalid");
    amount.classList.add("bg-error");
    isValid = false;
  }

  if (fName.value.trim() === "") {
    fName.classList.add("is-invalid");
    fName.classList.add("bg-error");
    isValid = false;
  }

  if (lastName.value.trim() === "") {
    lastName.classList.add("is-invalid");
    lastName.classList.add("bg-error");
    isValid = false;
  }

  if (city.value.trim() === "") {
    city.classList.add("is-invalid");
    city.classList.add("bg-error");
    isValid = false;
  }

  if (state.value === "") {
    state.classList.add("is-invalid");
    state.classList.add("bg-error");
    isValid = false;
  }

  if (postalCode.value.trim() === "" || postalCode.value.trim().length !== 5) {
    postalCode.classList.add("is-invalid");
    postalCode.classList.add("bg-error");
    isValid = false;
  }

  const cardTypes = document.querySelectorAll('input[name="cardType"]');
  const isCardSelected = Array.from(cardTypes).some((radio) => radio.checked);
  if (!isCardSelected) {
    payment.classList.add("is-invalid");
    payment.classList.add("bg-error");
    isValid = false;
  }

  if (message.value.trim() === "") {
    message.classList.add("is-invalid");
    message.classList.add("bg-error");
    isValid = false;
  }

  if (isValid === false) {
    globalAlert.classList.remove("d-none");
  } else {
    console.log("Formulario enviado correctamente");

    // Limpieza visual y reseteo del formulario
    form.reset();

    // Quitar estilos de error después del reset
    inputs.forEach((input) => {
      input.classList.remove("is-invalid", "bg-error");
    });
    payment.classList.remove("is-invalid", "bg-error");
    cvcNumber.classList.remove("is-invalid", "bg-error");
  }
});








