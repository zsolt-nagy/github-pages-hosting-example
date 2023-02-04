const container = document.querySelector('.js-container');

container.innerHTML = `
    <p>Today's random numbers are:</p>
    <ul>
        <li>${ Math.floor( Math.random() * 10 ) + 1 }</li>
        <li>${ Math.floor( Math.random() * 10 ) + 1 }</li>
        <li>${ Math.floor( Math.random() * 10 ) + 1 }</li>
    </ul>
`;

fetch('https://first-azure-project.azurewebsites.net/api/features')
    .then(x => x.json()) 
    .then(console.log);
