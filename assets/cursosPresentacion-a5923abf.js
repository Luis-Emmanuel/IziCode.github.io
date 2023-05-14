import{G as R,r as a,j as m,a as e,R as E,N as S,f as y,_ as o,g as _,h as C}from"./index-a8113376.js";import{t as c}from"./tripleIco-3adce790.js";import{p as f}from"./pymuIco-6c1b0f00.js";function h(r){return R({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"}}]})(r)}const oe=({temario:r,urlMain:i})=>{const u=r.temas,[n,t]=a.useState(!1),l=()=>{t(!n)};return a.useEffect(()=>{function s(){t(!1)}return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),m("div",{className:"contenedor-side",children:[e("div",{className:"btn-menu",children:n?e(E,{className:n?"cerrar-menu active":"cerrar-menu",onClick:l}):e(h,{className:n?"abrir-menu":"abrir-menu active",onClick:l})}),m("nav",{className:n?"SideBarCurso active":"SideBarCurso",children:[e("h1",{className:"titulo",children:r.titulo}),e("div",{className:"subtitulo",children:r.subtitulo}),e("ul",{children:u.map(s=>e("li",{children:e(S,{to:`/cursos/${i}/${s.url}`,className:({isActive:d})=>d?"active":null,onClick:l,rel:"stylesheet",children:s.titulo})},s.id))})]})]})};const N=({presentacion:r})=>m("div",{className:"PresentacionCurso",children:[m("div",{className:"titulos",children:[e("h1",{children:r.titulo}),e("h2",{children:r.mascota})]}),e("div",{className:"img-mascota",children:e("img",{src:r.img,alt:"mascota-curso"})}),e("div",{className:"descripcion",children:e("p",{dangerouslySetInnerHTML:{__html:r.descripcion}})})]}),O=y.createContext({}),L="/assets/DiagProbBasic1-c5568659.png",P="/assets/DiagProbBasic2-00f32990.png",B="/assets/DiagProbBasic3-024310f4.png",A="/assets/DiagProbBasic4-58a13194.png",D="/assets/DiagProbBasic5-522abb45.png",T="/assets/DiagProbInter1-3e122e8e.png",q="/assets/DiagProbInter2-b2cfd6fb.png",F="/assets/DiagProbInter3-647e18bb.png",M="/assets/DiagProbInter4-2a249aac.png",z="/assets/DiagProbInter5-8474d978.png",V="/assets/DiagProbInter6-be61fe7c.png",j="/assets/DiagProbInter7-62055390.png",x={nivel:"básico",imagen:c,descripcion:`Aquí empieza tu momento de aplicar y resolver problemas en base a todo lo que hemos
    aprendido hasta el momento. Recuerda intentar todo por tu cuenta, repasar alguna
    lección si te atoras o revisar las soluciones propuestas como último recurso o
    para comparar tus respuestas, en la programación se puede llegar a un mismo
    resultado con distintos métodos o caminos. ¡Éxito! ( •̀ ω •́ )✧`},k=[{id:"1Fu",problema:"Escribe un programa que solicite al usuario dos números y los almacene en dos variables. En otra variable, almacenarás el resultado de la suma de esos dos números y luego mostrarás ese resultado en pantalla.<br />A continuación, el programa debe solicitar al usuario que ingrese un tercer número, el cual se debe almacenar en una nueva variable. Por último, mostrarás en pantalla el resultado de la multiplicación de este nuevo número por el resultado de la suma anterior.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar 4 variables: num1, num2, num3 y resultado.
                2. Solicitar y almacenar el valor de num1.
                3. Solicitar y almacenar el valor de num2.
                4. Sumar num1 y num2, y guardar el resultado en la variable resultado.
                5. Mostrar por pantalla el valor de resultado.
                6. Solicitar y almacenar el valor de num3.
                7. Multiplicar el valor actual de resultado por num3 y guardar el resultado en la variable resultado.
                8. Mostrar por pantalla el valor de resultado.
                `},{idSub:1.2,diagrama:L},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO SumaMultiplicar;

VAR
    num1, num2, num3, resultado: ENTERO;
                    
INICIO

    ESCRIBIR("Ingrese el primer número:");
    LEER(num1);

    ESCRIBIR("Ingrese el segundo número:");
    LEER(num2);
                    
    resultado = num1 + num2;
                    
    ESCRIBIR("El resultado de la suma es: ", resultado);

    ESCRIBIR("Ingrese el tercer número:");
    LEER(num3);

    resultado = resultado * num3

    ESCRIBIR("El resultado de multiplicar el resultado anterior por el nuevo número es:", resultado);

FIN
                    </code>
                </pre>
            `}]},{id:"2Fu",problema:"Escribe un programa que solicite al usuario ingresar la cantidad de kilómetros recorridos por una motocicleta y la cantidad de litros de combustible que consumió durante ese recorrido. A continuación, calcular el consumo de combustible por kilómetro y mostrar el resultado en pantalla.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar 3 variables: kmRecorridos, litrosConsumidos y consumoPorKm.
                2. Solicitar y almacenar el valor de kmRecorridos.
                3. Solicitar y almacenar el valor de litrosConsumidos.
                4. Dividir litrosConsumidos entre kmRecorridos, y guardar el resultado en la variable consumoPorKm.
                5. Mostrar por pantalla el valor de consumoPorKm.
                `},{idSub:1.2,diagrama:P},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO ConsumoCombustible;

VAR
    kmRecorridos, litrosConsumidos, consumoPorKm: FLOTANTE;
                    
INICIO

    ESCRIBIR("Ingrese la cantidad de kilómetros recorridos:");
    LEER(kmRecorridos);

    ESCRIBIR("Ingrese la cantidad de litros de combustible consumidos:");
    LEER(litrosConsumidos);

    consumoPorKm = litrosConsumidos / kmRecorridos;
                
    ESCRIBIR("El consumo de combustible por kilómetro es: ", consumoPorKm);

FIN
                    </code>
                </pre>
            `}]},{id:"3Fu",problema:"Escribe un programa que solicite al usuario ingresar una temperatura en escala Fahrenheit (puede contener decimales) y muestre el equivalente en grados Celsius. La fórmula de conversión que se utiliza para este cálculo es: Celsius = (5/9) * (Fahrenheit - 32)",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar 2 variables: fahrenheit y celsius.
                2. Solicitar y almacenar el valor de la temperatura y almacenarlo en fahrenheit.
                3. Aplicar la fórmula dada y almacenar el resultado en la variable celsius.
                4. Mostrar por pantalla el valor de celsius.
                `},{idSub:1.2,diagrama:B},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO FahrenheitToCelsius;

VAR
    fahrenheit, celsius: FLOTANTE;
                    
INICIO

    ESCRIBIR("Ingrese la temperatura en Fahrenheit:");
    LEER(fahrenheit);

    celsius = (5/9) * (fahrenheit - 32);
                
    ESCRIBIR("La temperatura equivalente en grados Celsius es: ", celsius);

FIN
                    </code>
                </pre>
            `}]},{id:"4Fu",problema:"Escribe un programa que solicite al usuario ingresar tres números para luego mostrarle el promedio de los tres.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar 4 variables num1, num2, num3 y promedio.
                2. Solicitar y almacenar el valor de num1.
                3. Solicitar y almacenar el valor de num2.
                4. Solicitar y almacenar el valor de num3.
                5. Calcular el promedio y almacenarlo en la variable promedio.
                6. Mostrar el valor de promedio por pantalla.
                `},{idSub:1.2,diagrama:A},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO PromedioTresNumeros;

VAR
    num1, num2, num3, promedio: FLOTANTE;
                    
INICIO

    ESCRIBIR("Ingrese el primer número:");
    LEER(num1);

    ESCRIBIR("Ingrese el segundo número:");
    LEER(num2);

    ESCRIBIR("Ingrese el tercer número:");
    LEER(num3);

    promedio = (num1 + num2 + num3) / 3;

    ESCRIBIR("El promedio de los tres números ingresados es:", promedio);

FIN
                    </code>
                </pre>
            `}]},{id:"5Fu",problema:"Escribe un programa que solicite al usuario un número y le reste el 15%, almacenando el resultado en una variable. A continuación, mostrar el resultado final en pantalla.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una variable num de tipo flotante.
                2. Solicitar al usuario que ingrese un número y almacenarlo en la variable num.
                3. Calcular el 15% del número ingresado y almacenarlo en una variable llamada descuento. Esto se puede hacer multiplicando num por 0.15.
                4. Restar descuento de num y almacenar el resultado en una variable llamada resultado.
                5. Mostrar el resultado final en pantalla.
                `},{idSub:1.2,diagrama:D},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO RestarPorcentaje;

VAR
    numero, resultado: FLOTANTE;
                    
INICIO

    ESCRIBIR("Ingrese un número:");
    LEER(numero);

    resultado = numero - (numero * 0.15);

    ESCRIBIR("El resultado de restar el 15% del número ingresado es: ", resultado);

FIN
                    </code>
                </pre>
            `}]}],G={nivel:"intermedio",imagen:c,descripcion:"Es momento de una vez más aplicar todo lo que hemos aprendido hasta el momento. En esta ocasión, te alentamos a que intentes hacer pruebas de escritorio como un extra en cada problema que vamos a plantear para que practiques más ese aspecto, así como entiendas de mejor manera lo que estás programando y no lo olvides intenta TODO por tu cuenta, solo ve las respuestas para comparar con las tuyas o por si te atoras de manera definitiva. ¡Éxito! (ง •_•)ง"},H=[{id:"1Fu",problema:"Haciendo uso de if-else (Si-SiNo), crea un programa que pida al usuario ingresar un número entero, y determine si es positivo, negativo o cero.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una variable "numero" de tipo entero.
                2. Solicitar y almacenar el valor de "numero".
                3. Verificar si "numero" es mayor a cero.
                4. Si es así, mostrar por pantalla que el número es positivo.
                5. Si no, verificar si "numero" es menor a cero.
                6. Si es así, mostrar por pantalla que el número es negativo.
                7. Si no, mostrar por pantalla que el número es cero.
                `},{idSub:1.2,diagrama:T},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO DeterminarSigno;

VAR
    numero: ENTERO;
                    
INICIO

    ESCRIBIR("Ingrese un número entero: ");
    LEER(numero);
                    
    Si (numero > 0) {
        ESCRIBIR("El número ingresado es positivo.");
    }
    SiNo Si (numero < 0) {
        ESCRIBIR("El número ingresado es negativo.");
    }
    SiNo {
        ESCRIBIR("El número ingresado es cero.");
    }
                    
FIN                
                    </code>
                </pre>
            `}]},{id:"2Fu",problema:"Haciendo uso de if-else (Si-SiNo), crea un programa que pida al usuario ingresar un número entero, y determine si es positivo, negativo o cero.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar cuatro variables "num1", "num2", "num3" y "mayor" de tipo entero.
                2. Solicitar y almacenar el valor de "num1", "num2" y "num3".
                3. Asignar el valor de "num1" a la variable "mayor".
                4. Verificar si "num2" es mayor que "mayor".
                5. Si es así, asignar el valor de "num2" a la variable "mayor".
                6. Verificar si "num3" es mayor que "mayor".
                7. Si es así, asignar el valor de "num3" a la variable "mayor".
                8. Mostrar por pantalla que el número mayor es "mayor".
                `},{idSub:1.2,diagrama:q},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO MayorDeTresNumeros;

VAR
    num1, num2, num3, mayor: ENTERO;
                    
INICIO
                    
    ESCRIBIR("Ingrese el primer número:");
    LEER(num1);
                    
    ESCRIBIR("Ingrese el segundo número:");
    LEER(num2);
                    
    ESCRIBIR("Ingrese el tercer número:");
    LEER(num3);
                    
    mayor = num1;
                    
    Si (num2 > mayor) {
        mayor = num2;
    }
                    
    Si (num3 > mayor) {
        mayor = num3;
    }
                    
    ESCRIBIR("El número mayor es: ", mayor);
                    
FIN
                    </code>
                </pre>
            `}]},{id:"3Fu",problema:"Haciendo uso de if-else (Si-SiNo), crea un programa que solicite al usuario ingresar dos números enteros y luego determine cuál es el mayor de los dos. Si los números son iguales, el programa debe imprimir un mensaje indicando que son iguales.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar dos variables: num1 y num2.
                2. Solicitar y almacenar el valor de num1 y num2.
                3. Verificar si num1 es mayor que num2.
                4. Si num1 es mayor que num2, mostrar por pantalla que num1 es el mayor.
                5. Si num2 es mayor que num1, mostrar por pantalla que num2 es el mayor.
                6. Si num1 y num2 son iguales, mostrar por pantalla que ambos son iguales.
                `},{idSub:1.2,diagrama:F},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO MayorDeDosNumeros;

VAR
    num1, num2: ENTERO;
                    
INICIO

    ESCRIBIR("Ingrese el primer número:");
    LEER(num1);

    ESCRIBIR("Ingrese el segundo número:");
    LEER(num2);

    Si (num1 > num2) {
        ESCRIBIR("El número mayor es: ", num1);
    }
    
    Si (num2 > num1) {
        ESCRIBIR("El número mayor es: ", num2);
    }

    Si (num1 == num2) {
        ESCRIBIR("Ambos números son iguales.");
    }

FIN
                    </code>
                </pre>
            `}]},{id:"4Fu",problema:"Haciendo uso del bucle for (Para), escribe un programa que imprima los números del 1 al 10 en orden descendente.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una variable num de tipo entero e inicializarla en 10.
                2. Crear un bucle for que vaya desde num hasta 1 con un decremento de 1.
                3. Dentro del bucle for, mostrar el valor actual de num por pantalla.
                4. Cuando el valor de num llegue a 1, salir del bucle.
                `},{idSub:1.2,diagrama:M},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO ImprimirNumerosDescendentes;

VAR
    num, i: ENTERO;
                                        
INICIO

    num = 10;
                                        
    Para(i = num ; Hasta i >= 1 ; Con -1){
        ESCRIBRI(i);
    }
                                        
FIN 
                    </code>
                </pre>
            `}]},{id:"5Fu",problema:"Haciendo uso del bucle for (Para), escribe un programa que solicite al usuario un número entero positivo y luego imprima los números impares del 1 hasta ese número. Por ejemplo, si el usuario ingresa el número 7, el programa debe imprimir 1, 3, 5 y 7.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una variable "numero" de tipo entero.
                2. Solicitar y almacenar el valor de "numero".
                3. Verificar si "numero" es un número positivo. Si no lo es, mostrar un mensaje de error.
                4. Dentro del bucle, verificar si el número actual es impar. Si es así, imprimirlo.
                5. Salir del bucle.
                `},{idSub:1.2,diagrama:z},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO NumerosImpares;

VAR
    numero, i: ENTERO;
                    
INICIO

    ESCRIBIR("Ingrese un número entero positivo: ");
    LEER(numero);
                    
    Si(numero < 0){
        ESCRIBIR("Error el número no es positivo");
    }

    Para(i = 1 ; Hasta 1 <= numero ; Con 1){
        Si(i % 2 != 0){
            ESCRIBIR(i);
        }
    }
                    
FIN                    
                    </code>
                </pre>
            `}]},{id:"6Fu",problema:"Haciendo uso del bucle while (Mientras), escribe un programa que solicite al usuario un número entero positivo y luego calcule la suma de los números pares entre 1 y ese número. Por ejemplo, si el usuario ingresa el número 6, el programa debe imprimir 12, que es la suma de 2 + 4 + 6.",respuestas:[{idSub:1.1,algoritmo:`
                1. Solicitar al usuario un número entero positivo y almacenarlo en una variable llamada "numero".
                2. Inicializar una variable "suma" en cero.
                3. Inicializar una variable "contador" en 1.
                4. Declarar un "Mientras" donde "contador" sea menor o igual a "numero".
                5. Si el "contador" es par, agregarlo a "suma".
                6. Incrementar el "contador" en 1.
                7. Imprimir la "suma".
                `},{idSub:1.2,diagrama:V},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO SumaNumerosPares;

VAR
    numero, suma, contador: ENTERO;
                    
INICIO

    suma = 0;
    contador = 1;

    ESCRIBIR("Ingrese un número entero positivo: ");
    LEER(numero);
                    
    Mientras(contador <= numero){
        Si(contador % 2 == 0){
            suma = suma + contador;
        }

        contador = contador + 1;
    }

    ESCRIBIR("La suma de los números pares entre 1 y ", numero, " es: ", suma);

FIN                    
                    </code>
                </pre>
            `}]},{id:"7Fu",problema:"Haciendo uso del bucle do-while (Hacer-Mientras), escribe un programa que solicite al usuario un número entero positivo y luego imprima los números del 1 hasta ese número en orden descendente. Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 5, 4, 3, 2 y 1.",respuestas:[{idSub:1.1,algoritmo:`
                1. Solicitar al usuario un número entero positivo y almacenarlo en una variable llamada "numero".
                2. Inicializar una variable "contador" en "numero".
                3. Dentro de "Hacer" imprimiremos el valor actual de "contador".
                4. Decrementar el valor de "contador" en 1.
                5. Declarar un "Mientras" en el que "contador" sea distinto de cero.
                `},{idSub:1.2,diagrama:j},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO OrdenDescendente;

VAR
    numero, contador: ENTERO;
                    
INICIO

    ESCRIBIR("Ingrese un número entero positivo: ");
    LEER(numero);

    contador = numero;
                    
    Hacer{
        ESCRIBIR(contador);

        contador = contador - 1 ;
    }Mientras(contador != 0);
                    
FIN                    
                    </code>
                </pre>
            `}]}],w=a.lazy(()=>o(()=>import("./DiagramPseudoIntroFu-deccda84.js"),["assets/DiagramPseudoIntroFu-deccda84.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/IndagandoFu-fec66354.css"])),I=a.lazy(()=>o(()=>import("./EjerciciosFundamentos-b6bce332.js"),["assets/EjerciciosFundamentos-b6bce332.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/EjerciciosFundamentos-7b433db6.css"])),$=a.lazy(()=>o(()=>import("./IndagandoFu-7934ddec.js"),["assets/IndagandoFu-7934ddec.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-1d0a8b07.js","assets/MascotaTip-3a0859f1.css","assets/IndagandoFu-fec66354.css"])),K=a.lazy(()=>o(()=>import("./IntroduccionFu-1d3599fe.js"),["assets/IntroduccionFu-1d3599fe.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/IntroduccionFu-ef24127f.css"])),U=a.lazy(()=>o(()=>import("./LogicaFu-c60ddcd3.js"),["assets/LogicaFu-c60ddcd3.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-1d0a8b07.js","assets/MascotaTip-3a0859f1.css","assets/OpcionMultipleCard-69e53084.js","assets/index.esm-86f1394c.js","assets/OpcionMultipleCard-00aac59e.css","assets/IndagandoFu-fec66354.css"])),W=a.lazy(()=>o(()=>import("./ResolvAprenAvaFu-9530b386.js"),["assets/ResolvAprenAvaFu-9530b386.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/javiIco-2b9c03bd.js","assets/MascotaTip-1d0a8b07.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenAvaFu-d84db85a.css"])),J=a.lazy(()=>o(()=>import("./ResolvAprenBasicFu-7b3481bf.js"),["assets/ResolvAprenBasicFu-7b3481bf.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/MascotaTip-1d0a8b07.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenBasicFu-5cbd903d.css"])),Q=a.lazy(()=>o(()=>import("./ResolvAprenInterFu-f057b1d1.js"),["assets/ResolvAprenInterFu-f057b1d1.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/MascotaTip-1d0a8b07.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenInterFu-b75cf35c.css"])),X=a.lazy(()=>o(()=>import("./SintaxBasicPruebasFu-33968c9f.js"),["assets/SintaxBasicPruebasFu-33968c9f.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/javiIco-2b9c03bd.js","assets/SintaxBasicPruebasFu-6757aef5.css"])),Y=a.lazy(()=>o(()=>import("./TiposDatosFu-dde99c11.js"),["assets/TiposDatosFu-dde99c11.js","assets/index-a8113376.js","assets/index-c6930a3a.css","assets/OpcionMultipleCard-69e53084.js","assets/index.esm-86f1394c.js","assets/OpcionMultipleCard-00aac59e.css","assets/javiIco-2b9c03bd.js","assets/ejercicio-51ad8792.js","assets/IndagandoFu-fec66354.css"])),Z=a.lazy(()=>o(()=>import("./IntroduccionPy-26f7cd5e.js"),["assets/IntroduccionPy-26f7cd5e.js","assets/index-a8113376.js","assets/index-c6930a3a.css"])),b={introduccion_fu:{component:K},conceptos_bas_fu:{component:$},tipos_datos_fu:{component:Y},logica_fu:{component:U},diagram_pseudo_fu:{component:w},sintax_bas_pruebas_esc_fu:{component:X},resolviendo_aprendiendo_bas_fu:{component:J},resolviendo_aprendiendo_inter_fu:{component:Q},resolviendo_aprendiendo_avan_fu:{component:W},ejercicios_resolv_apren_basic_fu:{component:I,props:{descripcionEjercicio:x,ejercicios:k}},ejercicios_resolv_apren_inter_fu:{component:I,props:{descripcionEjercicio:G,ejercicios:H}},introduccion_py:Z},ne=()=>{const{temaUrl:r,ejerUrl:i}=_(),u=i?b[i]:b[r],n=u?u.component:null,t=u?u.props||{}:{},l=a.useContext(O),s=a.useRef(null),d=a.useRef(null),[v,p]=a.useState(!1),g=a.useMemo(()=>`${r}-${i}`,[r,i]);return a.useEffect(()=>{p(!0),setTimeout(()=>{p(!1)},300)},[g]),e("div",{className:"ContenidoCurso",ref:s,children:v?e(C,{}):e("div",{ref:d,children:n?e(n,{...t}):e(N,{presentacion:l})})},g)},se={titulo:"fundamentos de la programación",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_fu"},{id:1,titulo:"conceptos básicos",url:"conceptos_bas_fu"},{id:2,titulo:"variables y tipos de datos",url:"tipos_datos_fu"},{id:3,titulo:"lógica en la programación",url:"logica_fu"},{id:4,titulo:"diagramas de flujo y pseudocódigos",url:"diagram_pseudo_fu"},{id:5,titulo:"sintaxis básica y pruebas de escritorio",url:"sintax_bas_pruebas_esc_fu"},{id:6,titulo:"resolviendo y aprendiendo: básico",url:"resolviendo_aprendiendo_bas_fu"},{id:7,titulo:"resolviendo y aprendiendo: intermedio",url:"resolviendo_aprendiendo_inter_fu"},{id:8,titulo:"resolviendo y aprendiendo: avanzado",url:"resolviendo_aprendiendo_avan_fu"},{id:9,titulo:"resolviendo y aprendiendo: master",url:"algoritmos_estructuras_datos_fu_fu"}]},ie={titulo:"Curso de Python",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_py"},{id:1,titulo:"¿dondé empezamos?",url:"donde_empezamos_py"},{id:2,titulo:"sintaxis y comentarios",url:"sintaxis_comentarios_py"},{id:3,titulo:"variables y tipos de datos",url:"variables_tipos_datos_py"},{id:4,titulo:"strings",url:"strings_py"}]},ue={titulo:"Bienvenido al curso de Fundamentos de la programación",mascota:"En este curso te hara compañia las 3 mascotas de IziCode (╹ڡ╹ )",img:c,descripcion:"¡Bienvenidos al curso de Fundamentos de Programación en IziCode! <br/><br/> En este curso aprenderás los conceptos básicos de programación y cómo utilizar el pseudocódigo para crear programas simples. Exploraremos diferentes técnicas de resolución de problemas y cómo aplicarlas a través del pseudocódigo. <br /><br/> No se requiere experiencia previa en programación, solo curiosidad y ganas de aprender. ¡Ven y únete a nuestra comunidad de programadores en IziCode para adquirir las habilidades necesarias para comenzar a programar!"},le={titulo:"Bienvenido al curso de Python",mascota:"En este curso te hara compañia Pymu",img:f,descripcion:"¡Bienvenidos al curso de Python en IziCode! <br /><br/> En este curso aprenderás los conceptos básicos de programación utilizando Python, uno de los lenguajes de programación más populares y versátiles. Aprenderás cómo crear programas simples y complejos, explorarás las estructuras de datos y las técnicas de programación, y desarrollarás habilidades que te permitirán enfrentar desafíos en el mundo de la programación. <br /><br/> No se requiere experiencia previa en programación, solo curiosidad y ganas de aprender. ¡Ven y únete a nuestra comunidad de programadores en IziCode para adquirir las habilidades necesarias para convertirte en un experto en Python!"};export{ne as C,se as F,O as P,oe as S,ie as a,ue as f,le as p};
