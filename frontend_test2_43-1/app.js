// Задание 1

function extractNumbers(str) {
    return Array.from(str).filter(char => /\d/.test(char)).map(Number);
}

console.log(extractNumbers("a1fg5hj6"));

// Задание 2





// Задание 3





// Задание 4


const container = document.querySelector('div');
container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});


// Задание 5




// Задание 6


const counterElement = document.getElementById('counter');
let count = 0;

const intervalId = setInterval(() => {
    count++;
    counterElement.textContent = count;

    if (count >= 100) {
        clearInterval(intervalId);
    }
}, 1);




// Задание 7


document.getElementById('jsonData').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '../data/test.json', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            console.error(`ERROR: ${xhr.status}`);
        }
    };

    xhr.onerror = function () {
        console.error('ERROr');
    };
    xhr.send();
});