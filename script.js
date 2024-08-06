    document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('calculator-screen');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.innerText;
            if (buttonText === 'AC') {
                display.value = '';
            }
            else if (buttonText === '⌫') {
                display.value = display.value.slice(0, -1);
            }
            else if (buttonText === '()') {
                display.value = display.value + '(';
            }
            else if (buttonText === '=') {
                if (!display.value) {
                    return (0)
                }
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += buttonText;
            }
        });
    });
});





   