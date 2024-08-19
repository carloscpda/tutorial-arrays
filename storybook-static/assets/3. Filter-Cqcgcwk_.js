import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as a}from"./index-BrnU7xv7.js";import{M as o}from"./playground-eTlRKK5b.js";import"./index-DJO9vBfz.js";import"./extends-CF3RwP-h.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"método-filter",children:"Método .filter()"}),`
`,e.jsxs(n.p,{children:["El método ",e.jsx(n.code,{children:"filter()"})," crea un nuevo array con todos los elementos que cumplan con la condición implementada por la función dada."]}),`
`,e.jsx(n.h2,{id:"sintaxis",children:"Sintaxis"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const nuevoArray = array.filter((currentValue, index, originalArray) => {
  // Retorna true o false
});
`})}),`
`,e.jsxs(n.p,{children:["Si la función retorna ",e.jsx(n.code,{children:"true"}),", el elemento actual se incluirá en el nuevo array. Si retorna ",e.jsx(n.code,{children:"false"}),", el elemento actual no se incluirá."]}),`
`,e.jsx(n.h2,{id:"parámetros",children:"Parámetros"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currentValue"}),": El elemento actual que se está procesando en el array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index"})," (Opcional): El índice del elemento actual que se está procesando en el array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"originalArray"})," (Opcional): El array sobre el que se llamó ",e.jsx(n.code,{children:"filter"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ejemplo",children:"Ejemplo"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const numbers = [1, 2, 3, 4, 5];

numbers.filter((number) => number >= 0);
`})}),`
`,e.jsx(n.h2,{id:"usos-comunes",children:"Usos comunes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Filtrar elementos de un array que cumplan con una condición."}),`
`,e.jsx(n.li,{children:"Eliminar elementos no deseados de un array."}),`
`]}),`
`,e.jsx(n.h2,{id:"ahora-te-toca-a-ti",children:"Ahora te toca a ti"}),`
`,e.jsx(n.h3,{id:"ejercicio-1",children:"Ejercicio 1"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de numeros, crea un nuevo array con los numeros pares."}),`
`,e.jsx(o,{initialValue:`
function myFunction(numbers = [1, 2, 3, 4, 5]) {
  return numbers.filter(/* your code */);
}
  `,testCases:[{input:[[]],output:[]},{input:[[1,2,3]],output:[2]},{input:[[5,10,15,20]],output:[10,20]}],solution:"numbers.filter((number) => number % 2 === 0);"}),`
`,e.jsx(n.h3,{id:"ejercicio-2",children:"Ejercicio 2"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de objetos con el nombre y la edad de personas, crea un nuevo array con las personas mayores de edad."}),`
`,e.jsx(o,{initialValue:`
function myFunction(people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 30 }]) {
  return people.filter(/* your code */);
}
  `,testCases:[{input:[[]],output:[]},{input:[[{name:"Alice",age:25},{name:"Bob",age:17},{name:"Charlie",age:30}]],output:[{name:"Alice",age:25},{name:"Charlie",age:30}]}],solution:"people.filter((person) => person.age >= 18);"}),`
`,e.jsx(n.h2,{id:"recursos-adicionales",children:"Recursos adicionales"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",rel:"nofollow",children:"MDN Web Docs - Array.prototype.filter()"})}),`
`]})]})}function u(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
