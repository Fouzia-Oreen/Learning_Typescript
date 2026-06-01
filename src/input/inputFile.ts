

// function showInput() {
//     const inputElement = document.getElementById('username') as HTMLInputElement;
//     const button = document.getElementById('btn') as HTMLButtonElement;
//     button.addEventListener('click', () => {
//         const userInput = inputElement.value;
//         alert(`You entered: ${userInput}`);
//     });
// }

const inputElement = document.getElementById('username') as HTMLInputElement | null;
const button = document.getElementById('btn') as HTMLButtonElement | null;

button?.addEventListener('click', () => {
    const userInput = inputElement?.value;
    alert(`You entered: ${userInput}`);
});