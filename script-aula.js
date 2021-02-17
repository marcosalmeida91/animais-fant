// retornar cada paragrafo do site:
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => console.log(item));

//mostrar o texto dos paragrafos:(o .innerText serve para mostrar apenas o texto das tags selecionadas)
paragrafos.forEach((item) => console.log(item.innerText));

