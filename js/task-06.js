const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', (event) => {
    
event.currentTarget.value.length === Number(event.currentTarget.dataset.length)
    ? event.currentTarget.classList.add(`valid`)
    : event.currentTarget.classList.add(`invalid`);
});