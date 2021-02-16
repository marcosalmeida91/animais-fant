const animais = document.getElementById('animais');
console.log(animais);

// vai selecionar todos os itens que tiver a classe em questão, chamada de NodeList
const gridSectionNode = document.querySelectorAll('.grid-section');

// seleciona todas as classes em questão e retorna uma HTML Collection, possui menos metodos que o NodeList
const gridSectionHTML = document.getElementsByClassName('grid-section');

console.log(gridSectionNode);

console.log(gridSectionHTML);