//retornar todas as imagens  do site
const imagens = document.querySelectorAll('img');
console.log(imagens);


//retornar apenas as imagens  que começam com  a palavra imagem
const imagens2 = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens2);

//selecionar todos os links internos(onde o href começa com # ) 
const apenasLinks = document.querySelectorAll('[href^="#"]');
console.log(apenasLinks);

//selecionar o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

//selecionar o último p do site
const ultimoP = document.getElementsByClassName('copy p');
console.log(ultimoP);