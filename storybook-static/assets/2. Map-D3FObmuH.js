import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{M as r}from"./playground-eTlRKK5b.js";import"./index-DJO9vBfz.js";import"./extends-CF3RwP-h.js";function o(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"método-map",children:"Método .map()"}),`
`,e.jsxs(n.p,{children:["El método ",e.jsx(n.code,{children:"map()"})," crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos."]}),`
`,e.jsx(n.h2,{id:"sintaxis",children:"Sintaxis"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const nuevoArray = array.map((currentValue, index, originalArray) => {
  // Retorna valor para nuevoArray
});
`})}),`
`,e.jsxs(n.p,{children:["El método ",e.jsx(n.code,{children:"map()"})," recibe una función de callback que se ejecuta una vez por cada elemento del array. Esta función recibe hasta tres argumentos:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currentValue"}),": El elemento actual que se está procesando en el array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index"})," (Opcional): El índice del elemento actual que se está procesando en el array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"originalArray"})," (Opcional): El array sobre el que se llamó ",e.jsx(n.code,{children:"map"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ejemplo",children:"Ejemplo"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const numbers = [1, 2, 3, 4, 5];

numbers.map((number) => number * 2);

// [2, 4, 6, 8, 10]
`})}),`
`,e.jsx(n.h2,{id:"usos-comunes",children:"Usos comunes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Transformar un array de números aplicando una operación matemática."}),`
`,e.jsx(n.li,{children:"Modificar las propiedades de un array de objetos."}),`
`]}),`
`,e.jsx(n.h2,{id:"ahora-te-toca-a-ti",children:"Ahora te toca a ti"}),`
`,e.jsx(n.h3,{id:"ejercicio-1",children:"Ejercicio 1"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array, crea un nuevo array de los numeros elevados al cuadrado."}),`
`,e.jsx(r,{initialValue:`
function myFunction(numbers = [1, 2, 3, 4, 5]) {
  return numbers.map(/* your code */);
}
  `,testCases:[{input:[[]],output:[]},{input:[[1,2,3]],output:[1,4,9]},{input:[[5,10,15]],output:[25,100,225]}],solution:"numbers.map((number) => number ** 2);"}),`
`,e.jsx(n.h3,{id:"ejercicio-2",children:"Ejercicio 2"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de objetos con el nombre y la edad de personas, crea un nuevo array con los nombres de las personas."}),`
`,e.jsx(r,{initialValue:`
function myFunction(persons = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]) {
  return persons.map(/* your code */);
}
  `,testCases:[{input:[[]],output:[]},{input:[[{name:"Alicia",age:25},{name:"Pedro",age:30}]],output:["Alicia","Pedro"]},{input:[[{name:"Alicia",age:35}]],output:["Alicia"]}],solution:"persons.map((person) => person.name);"}),`
`,e.jsx(n.h2,{id:"recursos-adicionales",children:"Recursos adicionales"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map",rel:"nofollow",children:"MDN Web Docs - Array.prototype.map()"})}),`
`]})]})}function u(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{u as default};
