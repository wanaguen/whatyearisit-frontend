

fetch('https://whatyearisit-backend-inky-chi.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    })