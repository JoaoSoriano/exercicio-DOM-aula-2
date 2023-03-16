let body = document.querySelector('body');

let tituloTrybeTrip = document.createElement('h1');
tituloTrybeTrip.innerHTML = 'TrybeTrip - Agência de Viagens';

body.appendChild(tituloTrybeTrip);


const main = document.createElement('main');
main.classList.add('main-content');

body.appendChild(main);

const section = document.createElement('section');


main.appendChild(section);

const filhoDoSection = document.createElement ('p');
filhoDoSection.innerText = 'Preços Acessíveis';

section.appendChild(filhoDoSection);


section.classList.add('left-content');

let img1 = document.createElement('img');
img1.src = 'https://picsum.photos/200';
img1.classList.add('small-image');
section.appendChild(img1);

let titles1 = document.createElement('h3');
titles1.innerText = 'New York';
main.appendChild(titles1);

let titles2 = document.createElement('h3');
titles2.innerText = 'Miami';
main.appendChild(titles2);

let titles3 = document.createElement('h3');
titles3.innerText = 'Los Angeles';
main.appendChild(titles3);
