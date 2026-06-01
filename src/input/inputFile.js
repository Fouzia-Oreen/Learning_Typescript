const inputElement = document.getElementById('username');
const button = document.getElementById('btn') ;

button.addEventListener('click', () => {
    const userInput = inputElement.value;
    alert(`You entered: ${userInput}`);
});