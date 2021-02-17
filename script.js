// o index serve para identificar a posiçao do item dentro da array
const img = document.querySelectorAll('img');
img.forEach(function(item, index, array) {
  //console.log(item, index, array);
});

// o array.from serve para transformar um objeto em array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  //console.log(item);
});

//arrow function serve para encurtar a expressao da função
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
  //console.log(item, index);
});

// se tiver apenas 1 item, não precisa usar parentêses.
const imgs2 = document.querySelectorAll('img');
imgs.forEach(item => {
  //console.log(item);
});

// se não possuir argumentos, deve colocar parentêses
// let i = 0;
// const imgs3 = document.querySelectorAll('img');
// imgs.forEach(() => {
//   console.log(i++);
// });

// quando tiver uma linha de código também funciona dessa maneira:
let i = 0;
imgs.forEach(() => console.log(i++));