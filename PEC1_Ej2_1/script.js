const form = document.getElementById("form");
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(input.value)
    ? showSuccess(input)
    : showError(input, "Email is not valid");
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    return input.value.toString().trim() !== ""
      ? showSuccess(input)
      : showError(input, `${getFieldName(input)} is required`);
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`,
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`,
    );
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

function checkAge(input) {
  return 0 <= input.value && input.value < 1000 && input.value.length !== 0
    ? showSuccess(input)
    : showError(input, `${getFieldName(input)} must be between 0 and 999`);
}

function checkPassword(input) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_+\-=\{\}\|\[\]\\:";'<>?,.])[A-Za-z\d~`!@#$%^&*()_+\-=\{\}\|\[\]\\:";'<>?,.]{8,}$/;

  return re.test(input.value)
    ? showSuccess(input)
    : showError(input, `${getFieldName(input)} not valid`);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, age, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkAge(age);
  checkPassword(password);
});
