import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmit);

const keyFormState = 'feedback-form-state';
let formValues = JSON.parse(localStorage.getItem(keyFormState));

const { email, message } = form.elements;

const onStore = throttle(event => {
  formValues = { email: email.value, message: message.value };
  localStorage.setItem(keyFormState, JSON.stringify(formValues));
}, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

form.addEventListener('input', onStore);

function onSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return console.log('Please fill all fields!');
  }

  console.log(formValues);
  localStorage.clear();
  event.currentTarget.reset();
}
