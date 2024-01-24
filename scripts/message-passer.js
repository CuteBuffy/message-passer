const submitBtnElem = document.querySelector('.js-submit');
const inputElem = document.querySelector('.js-input-field');
const lastMessageElem = document.querySelector('.js-last-message');
const invalidMessageElem = document.querySelector('.js-invalid-message');

// last-message-info

lastMessageElem.classList.add('last-message-info');
lastMessageElem.textContent = localStorage.getItem('lastMessage') || '';

submitBtnElem.addEventListener('click', () => {
  passMessage();
})

let timeoutId;

function passMessage() {
  let message = inputElem.value;
  if (!message || message === ' ') {
    invalidMessageElem.classList.add('invalid-message');
    invalidMessageElem.innerHTML = 'Enter valid Message!';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      invalidMessageElem.classList.remove('invalid-message');
      invalidMessageElem.innerHTML = '';
    }, 2000);
  } else {
    lastMessageElem.classList.add('last-message-info');
    lastMessageElem.textContent = message;
    saveLastMessage();
  }
}

function saveLastMessage() {
  localStorage.setItem('lastMessage', lastMessageElem.textContent);
}