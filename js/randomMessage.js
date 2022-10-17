const container = document.querySelector('.js-container');

container.innerHTML = `
    <p>Today's random numbers are:</p>
    <ul>
        <li>${ Math.floor( Math.random() * 10 ) + 1 }</li>
        <li>${ Math.floor( Math.random() * 10 ) + 1 }</li>
        <li>${ Math.floor( Math.random() * 10 ) + 1 }</li>
    </ul>
`;