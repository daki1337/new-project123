// const obj = {
//     prop:12,
//     hi(){
//         return 'hi';
//     }
// }
// console.log(obj.prop);

console.dir(document);

const h1 = document.getElementById('main-title');
// h1.style.textAlign = 'center';

// h1.style.color = 'blue'; //setter
// console.log(h1.style.color); //getter

// h1.style.backgroundColor = 'yellow';

h1.className = 'heading';

h1.textContent = 'hi from javascript!'

console.dir(h1);

const word = 'image';
const img = document.getElementById(word);
console.dir(img);
console.log(img);

img.src = '';
img.alt = 'turtle';
img.width = '400';
img.heoght = '400';
img.style.objectFit = 'cover';
