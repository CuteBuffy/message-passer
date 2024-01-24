const submitBtnElem = document.querySelector('.js-submit');
const inputElem = document.querySelector('.js-input-field');
const lastMessageElem = document.querySelector('.js-last-message');
const invalidMessageElem = document.querySelector('.js-invalid-message');
const succesMessageElem = document.querySelector('.js-success-message');

// last-message-info

lastMessageElem.classList.add('last-message-info');
lastMessageElem.textContent = localStorage.getItem('lastMessage') || '';

submitBtnElem.addEventListener('click', () => {
  passMessage();
})

inputElem.addEventListener('keydown', (event) => {
  detectEnter(event);
})

let timeoutId;
let timeoutId2;
let successTimeout;

function passMessage() {
  let message = inputElem.value;
  if (!message || message === ' ') {
    invalidMessageElem.classList.add('invalid-message');
    invalidMessageElem.textContent = 'Enter valid Message!';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      invalidMessageElem.classList.remove('invalid-message');
      invalidMessageElem.textContent = '';
    }, 2000);
  }
  else if (message.length > 100) {
    invalidMessageElem.classList.add('invalid-message');
    invalidMessageElem.textContent = 'Enter Less Enormous Message!';
    clearTimeout(timeoutId2);
    timeoutId2 = setTimeout(() => {
      invalidMessageElem.classList.remove('invalid-message');
      invalidMessageElem.textContent = '';
    }, 2000);
  } else {
    succesMessageElem.classList.add('success-message');
    succesMessageElem.textContent = 'Success!';
    clearTimeout(successTimeout);
    successTimeout = setTimeout(() => {
      succesMessageElem.classList.remove('success-message');
      succesMessageElem.textContent = '';
    }, 1000);
    lastMessageElem.classList.add('last-message-info');
    lastMessageElem.innerHTML = message;
    saveLastMessage();
  }
}

// lastMessageElem.classList.add('last-message-info');
// lastMessageElem.innerHTML = message;
// saveLastMessage();

function detectEnter(event) {
  if (event.key === 'Enter') {
    passMessage();
  }
}

function saveLastMessage() {
  localStorage.setItem('lastMessage', lastMessageElem.textContent);
}