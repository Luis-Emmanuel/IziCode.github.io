import{j as o,a as e,L as r,u as n,r as s}from"./index-5fd20af4.js";import{c}from"./cecyIco-5a0f09a4.js";import{p as i}from"./pymuIco-6c1b0f00.js";import{j as t}from"./javiIco-2b9c03bd.js";import{t as d}from"./tripleIco-3adce790.js";import{a as l,b as m}from"./index.esm-284fc421.js";const p=[{id:0,titulo:"Fundamentos de la programación",mascota:d,info:"En este curso aprenderás todo lo básico para empezar en el mundo de la programación. Pymu, Cecy y Javi te acompañarán en esta aventura enseñándote, aconsejándote y retándote con ejercicios para que pongas en práctica lo aprendido (╹ڡ╹ )",lecciones:"10 lecciones",duracion:"15 horas",url:"fundamentos_curso"},{id:1,titulo:"Lenguaje C",mascota:c,info:"En este curso aprenderás todo lo básico para aprender a programar con el lenguaje C, Cecy te acompañará en esta aventura enseñándote, aconsejándote y retándote con ejercicios para que pongas en práctica lo aprendido (╹ڡ╹ )",lecciones:"20 lecciones",duracion:"30 horas",url:"C_curso"},{id:2,titulo:"Python",mascota:i,info:"En este curso aprenderás todo lo básico para aprender a programar con el lenguaje de Python, Pymu te acompañará en esta aventura enseñándote, aconsejándote y retándote con ejercicios para que pongas en práctica lo aprendido (╹ڡ╹ )",lecciones:"25 lecciones",duracion:"27 horas",url:"Python_curso"},{id:3,titulo:"Java",mascota:t,info:"En este curso aprenderás todo lo básico para aprender a programar con el lenguaje de Java, Javi te acompañará en esta aventura enseñándote, aconsejándote y retándote con ejercicios para que pongas en práctica lo aprendido (╹ڡ╹ )",lecciones:"24 lecciones",duracion:"28 horas",url:"Java_curso"}];const u=({curso:a})=>o("div",{className:"tarjeta",children:[e("picture",{children:e("img",{src:a.mascota,alt:"mascota"})}),o("div",{className:"contenido",children:[o("div",{className:"info",children:[e("h1",{children:a.titulo}),e("p",{children:a.info})]}),o("div",{className:"inferior",children:[o("div",{className:"detalles",children:[o("div",{className:"lecciones det",children:[e(l,{}),e("span",{children:a.lecciones})]}),o("div",{className:"duracion det",children:[e(m,{}),e("span",{children:a.duracion})]})]}),e("div",{className:"botones",children:e(r,{to:a.url,children:e("button",{className:"btn",children:"comencemos"})})})]})]})]}),h=()=>o("div",{className:"CursosGrid",children:[e("div",{className:"caja-cursos",children:p.map(a=>e(u,{curso:a},a.id))}),e("div",{className:"mensaje",children:e("h1",{children:"¡próximamente más cursos!"})})]});const N=()=>{const{pathname:a}=n();return s.useEffect(()=>{window.scrollTo(0,0)},[a]),e("div",{className:"Cursos",children:e(h,{})})};export{N as default};
