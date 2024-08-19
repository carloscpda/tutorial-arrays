import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as c}from"./index-BrnU7xv7.js";import{M as o}from"./playground-eTlRKK5b.js";import"./index-DJO9vBfz.js";import"./extends-CF3RwP-h.js";function a(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"método-reduce",children:"Método .reduce()"}),`
`,e.jsxs(n.p,{children:["El método ",e.jsx(n.code,{children:"reduce()"})," ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor."]}),`
`,e.jsx(n.h2,{id:"sintaxis",children:"Sintaxis"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const resultado = array.reduce(
  (acumulador, currentValue, index, originalArray) => {
    // Lógica para actualizar el acumulador
    return nuevoAcumulador;
  },
  valorInicial
);
`})}),`
`,e.jsxs(n.p,{children:["El método ",e.jsx(n.code,{children:"reduce()"})," recibe una función de callback que se ejecuta una vez por cada elemento del array (excepto el primer valor si se proporciona un ",e.jsx(n.code,{children:"valorInicial"}),"). Esta función recibe hasta cuatro argumentos:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"acumulador"}),": El acumulador que guarda el valor acumulado de la operación."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currentValue"}),": El elemento actual que se está procesando en el array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index"})," (Opcional): El índice del elemento actual que se está procesando en el array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"originalArray"})," (Opcional): El array sobre el que se llamó ",e.jsx(n.code,{children:"reduce"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ejemplo",children:"Ejemplo"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const numbers = [1, 2, 3, 4, 5];

const suma = numbers.reduce((acumulador, number) => acumulador + number, 0);

// 15
`})}),`
`,e.jsx(n.h2,{id:"usos-comunes",children:"Usos comunes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sumar todos los elementos de un array."}),`
`,e.jsx(n.li,{children:"Concatenar todos los elementos de un array en una sola cadena."}),`
`,e.jsx(n.li,{children:"Contar la ocurrencia de elementos en un array."}),`
`]}),`
`,e.jsx(n.h2,{id:"ahora-te-toca-a-ti",children:"Ahora te toca a ti"}),`
`,e.jsx(n.h3,{id:"ejercicio-1-fácil",children:"Ejercicio 1 (Fácil)"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de números, devuelve la suma de todos los elementos."}),`
`,e.jsx(o,{initialValue:`
function myFunction(numbers = [1, 2, 3, 4, 5]) {
  return numbers.reduce(/* your code */);
}
  `,testCases:[{input:[[]],output:0},{input:[[1,2,3]],output:6},{input:[[5,10,15]],output:30}],solution:"numbers.reduce((acumulador, number) => acumulador + number, 0);"}),`
`,e.jsx(n.h3,{id:"ejercicio-2",children:"Ejercicio 2"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de strings, devuelve una cadena que sea la concatenación de todos los elementos."}),`
`,e.jsx(o,{initialValue:`
function myFunction(words = ["Hello", " ", "World", "!"]) {
  return words.reduce(/* your code */);
}
  `,testCases:[{input:[[]],output:""},{input:[["Hello"," ","World"]],output:"Hello World"},{input:[["JavaScript"," ","es","genial"]],output:"JavaScript es genial"}],solution:'words.reduce((acumulador, word) => acumulador + word, "");'}),`
`,e.jsx(n.h3,{id:"ejercicio-3",children:"Ejercicio 3"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de objetos que representan productos en un carrito de compras, devuelve el precio total de todos los productos."}),`
`,e.jsx(o,{initialValue:`
function myFunction(cart = [{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }]) {
  return cart.reduce(/* your code */);
}
  `,testCases:[{input:[[]],output:0},{input:[[{price:10,quantity:1},{price:5,quantity:2}]],output:20},{input:[[{price:100,quantity:1},{price:200,quantity:1}]],output:300}],solution:"cart.reduce((acumulador, item) => acumulador + item.price * item.quantity, 0);"}),`
`,e.jsx(n.h2,{id:"recursos-adicionales",children:"Recursos adicionales"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",rel:"nofollow",children:"MDN Web Docs - Array.prototype.reduce()"})}),`
`]})]})}function d(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{d as default};
