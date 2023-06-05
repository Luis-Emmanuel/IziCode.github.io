import{j as a,a as e,L as s}from"./index-05365979.js";import{p as r}from"./pymuIco-54c3c2da.js";import{M as n}from"./MascotaTip-ec587e15.js";const i="/assets/DiagramBasicEjem1-297ea4fb.png",l="/assets/DiagramBasicEjem2-c8cf8936.png",m=()=>{const o={mascota:r,contenido:`
        En algunos lenguajes como C, donde se especifica el tipo de datos que almacenan las variables, no se puede asignar un valor de un tipo de dato diferente al que se le ha asignado a la variable. Por ejemplo, si tienes una variable de tipo entero X, no podrás asignarle un valor de tipo carácter o booleano, ya que esto dará un error debido a que el tipo de dato es incompatible con el tipo de variable. En cambio, en otros lenguajes como Python, donde no es necesario especificar el tipo de variable, se puede asignar un valor numérico a una variable y luego asignarle caracteres sin problemas.
        `,contenido2:`
        Para practicar, puedes tomar cualquier expresión aritmética y aplicar el orden de las operaciones para verificar que el resultado sea el mismo al usar diferentes combinaciones de operadores y paréntesis. También puedes crear tus propios ejercicios para mejorar tu comprensión del PEMDAS.
        `};return a("div",{className:"curso-pagina resolv-apren-basic-fu",children:[e("div",{className:"titular-curso",children:e("h1",{children:"resolviendo y aprendiendo nivel: básico"})}),a("section",{children:[a("div",{className:"parrafo-flex",children:[e("img",{src:r,alt:"pymu"}),a("p",{children:["Muy bien, hasta ahora hemos visto todo lo básico tanto de la teoría como de lo que son tanto los diagramas de flujo, como los pseudocódigos, así que, es momento de que entremos a las secciones de IziCode de nombre ",e("span",{children:'"resolviendo y aprendiendo"'}),', dependiendo del nivel iremos aumentando la complejidad de los temas y los problemas en sí mismos que iremos viendo a lo largo de cada bloque. Lo que hace especial a "resolviendo y aprendiendo", es el hecho de que vamos a estar haciendo todo el tiempo ejercicios y explicando cada detalle de estos para que aprendas de una manera más practica y con ello sea más fácil de entender. ( •̀ ω •́ )✧']})]}),e("div",{className:"parrafo-no-flex",children:e("p",{children:"Al final de cada bloque, te proporcionaremos ejercicios para que puedas practicar y reforzar los conocimientos adquiridos. No te preocupes si te atascas en algún punto, cada ejercicio y problema tendrá su solución propuesta por nosotros. En programación, la práctica y el refuerzo de los conocimientos son fundamentales para su dominio. (⌐■_■)"})})]}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"Escribiendo, leyendo y reasignando"})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[e("p",{children:"Hechemos un vistaso al siguiente pseudocódigo:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO Renombrando;

VAR
    nombre: CADENA;

INICIO

    ESCRIBIR("Ingresa tu nombre:");
    LEER(nombre);

    nombre = "Pymu";

    ESCRIBIR("El valor de nombre es:", nombre);

FIN
          `})})}),e("p",{children:"¿Cuál crees tú que sea el valor de nombre? ¿El que recibió con la función de LEER? ¿O el que se le asigna posteriormente? Pues la respuesta es el nombre que se le asigna después. Esto sucede porque es posible asignarle nuevos valores a una variable conforme se va avanzando a lo largo del programa, las computadoras siguen cada línea de código una por una, teniendo en cuenta eso, mira el siguiente ejemplo:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO Renombrando;

VAR
    nombre: CADENA;

INICIO

    nombre = "Cecy";
    nombre = "Pymu";

    ESCRIBIR("El valor de nombre es:", nombre);

    nombre = "Javi";

FIN
          `})})}),e("p",{children:"¿Cuál es el nombre que se mostrará en la función de ESCRIBIR? Pues el de Pymu, como mencioné antes, al ir en orden se manda el mensaje primero y después se le asigna el nombre de Javi. Sencillo, ¿verdad? (╹ڡ╹ )"}),e("div",{className:"tip-flex",children:e(n,{mascota:o.mascota,contenido:o.contenido})}),e("p",{children:"Ahora para poner en práctica lo que hemos aprendido con algoritmos, diagramas de flujo y pseudocódigos, vamos a resolver un pequeño problema. Se nos pide hacer un programa que reciba dos números, después a esos dos números debemos sumarlos y restarlos entre sí, seguido de mostrar su resultado por pantalla, pero haciendo uso de solo 3 variables."}),e("p",{children:"Si pensamos en el algoritmo a seguir sería algo asi:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:"1. Definir 3 variables, una para el primer número, otra para el segundo y otra para el  resultado"}),e("li",{children:"2. Pedir al usuario el primer número y guardarlo"}),e("li",{children:"3. Pedir al usuario el tercer número y guardarlo"}),e("li",{children:"4. Sumar ambos números y guardarlo en resultado"}),e("li",{children:"5. Mostrar por pantalla el resultado de la suma"}),e("li",{children:"6. Restar ambos números y guardarlo en resultado"}),e("li",{children:"7. Mostrar por pantalla el resultado de la resta"})]})}),e("p",{children:"Ahora el diagrama de flujo correspondiente quedaría de esta manera:"}),e("picture",{className:"diagrama-flujo-ejemplo",children:e("img",{src:i,alt:"deagrama-ejemplo-basico-1"})}),e("p",{children:"Finalmente nuestro pseudocódigo quedaría de la siguiente manera:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO Renombrando;

VAR
    num1, num2, resultado: ENTERO;

INICIO

    ESCRIBIR("Ingresa el primer número:");
    LEER(num1);

    ESCRIBIR("Ingresa el segundo número:");
    LEER(num2);

    resultado = num1 + num2;

    ESCRIBIR("El resultado de sumar ambos números es de:", resultado);

    resultado = num1 - num2;

    ESCRIBIR("El resultado de restar ambos números es de:", resultado);

FIN
          `})})}),e("p",{children:"¿Sencillo verdad? Analiza bien todo lo que acabamos de hacer para resolver el problema antes planteado, poco a poco irás interiorizando todo esto y serás capaz de resolver problemas cada vez más complejos. (ง •_•)ง"})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"El orden importa"})}),a("section",{children:[a("div",{className:"parrafo-tip-flex",children:[e("div",{className:"parrafo",children:a("p",{children:["Este tema es corto pero importante, seguramente alguna vez en tus cursos de matemáticas te habán explicado que cirtas operaciones tienen mayor prioridad que otras, esto para definir el orden de las operaciones a seguir o dicho de otro modo la regla PEMDAS (Parentesis, Exponentes, Multiplicación y División, Suma y Resta), la cuál indica que se deben realizar primero las operaciones entre paréntesis, luego las potencias, seguido de la multiplicación y división, y finalmente la suma y resta.",e("br",{}),e("br",{}),"En caso de tener operaciones con el mismo nivel de prioridad, se realiza de izquierda a derecha. Es importante tener en cuenta que se pueden usar paréntesis para indicar el orden de las operaciones, incluso si no es estrictamente necesario."]})}),e(n,{mascota:o.mascota,contenido:o.contenido2})]}),a("div",{className:"parrafo-no-flex",children:[e("p",{children:"Por ejemplo, si tenemos la expresión: 4 + 5 * 3 - 2, el resultado será diferente dependiendo del orden de las operaciones. Si seguimos la regla PEMDAS, primero debemos multiplicar 5 por 3 y luego sumar 4, para finalmente restar 2:"}),e("p",{children:"(4 + (5 * 3)) - 2 = 17"}),e("p",{children:"Si no seguimos el orden de las operaciones, podríamos obtener un resultado incorrecto. Por ejemplo, si sumamos 4 y 5 primero y luego multiplicamos por 3, el resultado sería:"}),e("p",{children:"((4 + 5) * 3) - 2 = 27"}),e("p",{children:"En cuanto a los operadores lógicos and, or y not, también tienen un orden de prioridad definido. El operador not tiene la mayor prioridad, seguido de and y finalmente or."}),a("p",{children:["Por ejemplo, en la expresión ",e("span",{children:"A and B or not C and D"}),", el orden de evaluación es el siguiente:"]}),e("div",{className:"lista-no-flex",children:a("ol",{children:[a("li",{children:["1. Primero, se evalúa ",e("span",{children:"not C"})," (negación)"]}),a("li",{children:["2. Luego, se evalúa ",e("span",{children:"A and B"})," (conjunción)"]}),a("li",{children:["3. Finalmente, se evalúa el resultado anterior ",e("span",{children:"and D y or"})," el resultado de la negación de ",e("span",{children:"C"}),"."]})]})}),e("p",{children:"Es importante recordar que si hay paréntesis en la expresión, estos tienen precedencia sobre cualquier otro operador, incluyendo los operadores lógicos."}),e("p",{children:"Vamos a practicar un poco con el siguiente problema: Escribir un programa donde se le solicite al usuario que ingrese dos números decimales, estos se sumarán, seguido el resultado de dicha operación se multiplicará por 5 y finalmente se dividirá entre dos."}),e("p",{children:"Si pensamos en el algoritmo a seguir sería algo así:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:"1. Definir 3 variables, una para cada número decimal y una para el resultado."}),e("li",{children:"2. Pedir el primer número."}),e("li",{children:"3. Pedir el segundo número"}),e("li",{children:"4. Armar la operación solicitada según la regla PEMDAS"}),e("li",{children:"5. Mostrar el resultado en pantalla"})]})}),e("p",{children:"Ahora, el diagrama de flujo de esto quedará de la siguiente manera:"}),e("picture",{className:"diagrama-flujo-ejemplo",children:e("img",{src:l,alt:"deagrama-ejemplo-basico-2"})}),e("p",{children:"Finalmente nuestro pseudocódigo quedaría de la siguiente manera:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO OperacionPEMDAS;

VAR
    num1, num2, resultado: FLOTANTE;

INICIO

    ESCRIBIR("Ingresa el primer número:");
    LEER(num1);

    ESCRIBIR("Ingresa el segundo número:");
    LEER(num2);

    resultado = ((num1 + num2) * 5) / 2;

    ESCRIBIR("El resultado la operación es de:", resultado);
FIN
          `})})})]})]}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"prácticas y ejercicios"})}),e("section",{children:e("div",{className:"parrafo-no-flex",children:e("p",{children:"Con todo lo visto hasta el momento, creo que ya estamos más que listos para que comiences a resolver por tu cuenta algunos ejercicios. Deberás intentar seguir las instrucciones de cada problema y hacer lo que se te pida en cada uno, recuerda que de igual manera te dejaré las posibles soluciones a cada problema por si en algún momento te atoras puedas echar un vistazo, pero trata de resolver todo por tu cuenta. (▀̿Ĺ̯▀̿ ̿)"})})}),e("div",{className:"btn-ejercicio",children:e(s,{to:"ejercicios_resolv_apren_basic_fu",children:e("button",{className:"link-ejercicio",children:"comenzar ejercicios nivel: básico"})})})]})};export{m as default};
