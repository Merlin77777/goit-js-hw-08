import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onStore);
form.addEventListener('submit', onSubmit);

const keyFormState = 'feedback-form-state';
let formValues = JSON.parse(localStorage.getItem(keyFormState));

const { email, message } = form.elements;

function onStore() {
  formValues = { email: email.value, message: message.value };
  localStorage.setItem(keyFormState, JSON.stringify(formValues));
}
throttle(onStore, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

function onSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return console.log('Please fill all fields!');
  }

  console.log(formValues);
  localStorage.clear();
  event.currentTarget.reset();
}
