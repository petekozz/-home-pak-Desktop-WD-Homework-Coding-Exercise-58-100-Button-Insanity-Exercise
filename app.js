const containerDiv = document.querySelector('#container');
for (let i = 1; i < 101; i++) {
    let button = document.createElement('button');
    button.innerText = "Colt!";
    containerDiv.appendChild(button);
}