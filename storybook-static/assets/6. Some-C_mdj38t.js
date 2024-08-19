import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{M as o}from"./playground-eTlRKK5b.js";import"./index-DJO9vBfz.js";import"./extends-CF3RwP-h.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"método-sort",children:"Método .sort()"}),`
`,e.jsxs(n.p,{children:["El método ",e.jsx(n.code,{children:"sort()"})," ordena los elementos de un array ",e.jsx(n.strong,{children:"in place"})," y devuelve el array. La ordenación no es necesariamente estable. La forma en que se ordenan los elementos depende de la implementación de la función de comparación."]}),`
`,e.jsx(n.h2,{id:"sintaxis",children:"Sintaxis"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`array.sort((a, b) => {
  // Lógica de comparación
});
`})}),`
`,e.jsxs(n.p,{children:["El método ",e.jsx(n.code,{children:"sort()"})," recibe una función de comparación que compara dos valores. Esta función debe retornar:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Un número negativo si el primer valor debe aparecer antes que el segundo."}),`
`,e.jsx(n.li,{children:"Un número positivo si el segundo valor debe aparecer antes que el primero."}),`
`,e.jsx(n.li,{children:"Cero si son equivalentes."}),`
`]}),`
`,e.jsx(n.h2,{id:"ejemplo",children:"Ejemplo"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const numbers = [3, 1, 4, 1, 5, 9];

numbers.sort((a, b) => a - b);

// [1, 1, 3, 4, 5, 9]
`})}),`
`,e.jsx(n.h2,{id:"usos-comunes",children:"Usos comunes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ordenar números de menor a mayor o viceversa."}),`
`,e.jsx(n.li,{children:"Ordenar cadenas de texto alfabéticamente."}),`
`,e.jsx(n.li,{children:"Ordenar objetos en función de una propiedad."}),`
`]}),`
`,e.jsx(n.h2,{id:"ahora-te-toca-a-ti",children:"Ahora te toca a ti"}),`
`,e.jsx(n.h3,{id:"ejercicio-1-fácil",children:"Ejercicio 1 (Fácil)"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de números, ordénalos de mayor a menos."}),`
`,e.jsx(o,{initialValue:`
function myFunction(numbers = [5, 3, 8, 1, 2]) {
  return numbers.sort(/* your code */);
}
  `,testCases:[{input:[[]],output:[]},{input:[[5,3,8]],output:[8,5,3]},{input:[[9,1,4]],output:[9,4,1]}],solution:"numbers.sort((a, b) => b - a);"}),`
`,e.jsx(n.h3,{id:"ejercicio-2",children:"Ejercicio 2"}),`
`,e.jsx(n.p,{children:"Dado el siguiente array de objetos que representan productos con un precio, ordénalos por precio de mayor a menor."}),`
`,e.jsx(o,{initialValue:`
function myFunction(products = [{ name: "A", price: 30 }, { name: "B", price: 10 }, { name: "C", price: 20 }]) {
  return products.sort(/* your code */);
}
  `,testCases:[{input:[[]],output:[]},{input:[[{name:"A",price:30},{name:"B",price:10},{name:"C",price:20}]],output:[{name:"A",price:30},{name:"C",price:20},{name:"B",price:10}]},{input:[[{name:"X",price:50},{name:"Y",price:15},{name:"Z",price:25}]],output:[{name:"X",price:50},{name:"Z",price:25},{name:"Y",price:15}]}],solution:"products.sort((a, b) => b.price - a.price);"}),`
`,e.jsx(n.h2,{id:"recursos-adicionales",children:"Recursos adicionales"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",rel:"nofollow",children:"MDN Web Docs - Array.prototype.sort()"})}),`
`]})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
