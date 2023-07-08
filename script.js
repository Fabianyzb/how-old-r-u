const dateInput = document.querySelector('input');
const pElement = document.querySelector('p');

dateInput.addEventListener('change', () => {
    const birthDate = new Date(dateInput.value);
    const currentDate = new  Date();
    const newDate = new Date(currentDate - birthDate);

    const years = newDate.getFullYear() - 1970;
    const months = newDate.getMonth();
    const days = newDate.getDate() - 1;

    pElement.innerText = `You're ${years} years, ${months} months, ${days} days old!`;
})