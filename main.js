document.querySelector('.dice').addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.advice-random-id').textContent = data.slip.id;
        document.querySelector('.advice-random-text').textContent = data.slip.advice;
    })
    .catch(error => console.error('Error:', error));
});