
function buttonClicked() {
    const button = document.getElementById('myButton');
    const number = document.getElementById('output');

    let count = 0;

    if (button) {
        button.addEventListener('click', () => {
            count++;
            console.log('Has been clicked tho');
            number.innerHTML = count;
        })
    }
}
buttonClicked();