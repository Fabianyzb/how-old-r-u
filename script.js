const dateInput = document.querySelector('input');
const pElement = document.querySelector('p');
const myImage = document.querySelector('img');

dateInput.addEventListener('change', () => {
    const birthDate = new Date(dateInput.value);
    const currentDate = new  Date();
    const newDate = new Date(currentDate - birthDate);

    const years = newDate.getFullYear() - 1970;
    const months = newDate.getMonth();
    const days = newDate.getDate() - 1;

    pElement.innerText = `You're ${years} years, ${months} months, ${days} days old!`;

    if (years >= 6) {
        myImage.src = '/img/toradora.gif'; // Cambia 'ruta_de_la_imagen.png' por la ruta de la imagen que deseas mostrar
        myImage.alt = 'Imagen activada'; // Cambia 'Imagen activada' por el texto alternativo de la imagen activada
    } else {
        myImage.src = '/img/question.png'; // Ruta de la imagen original
        myImage.alt = 'Imagen original'; // Texto alternativo de la imagen original
    }
}) 

/img/okanim.png
/img/question.png