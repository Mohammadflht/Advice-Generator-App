document.querySelector('.dice').addEventListener('click', () => {
    fetch(`https://api.adviceslip.com/advice?${new Date().getTime()}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.advice-random-id').textContent = data.slip.id;
        document.querySelector('.advice-random-text').textContent = data.slip.advice;
    })
    .catch(error => console.error('Error:', error));
});

// rotation in dice
const diceImage = document.querySelector(".dice-image");

document.querySelector(".dice").addEventListener('click', () => {
    diceImage.classList.add("dice-rotate");

    // Listen for the end of the animation
    diceImage.addEventListener('animationend', () => {
        diceImage.classList.remove("dice-rotate");
    }, {once: true});
});