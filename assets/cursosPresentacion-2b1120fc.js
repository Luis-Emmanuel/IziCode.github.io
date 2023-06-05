import{G as S,r as e,j as d,a,d as v,N as C,R as y,_ as o,e as f,f as _}from"./index-05365979.js";import{t as c}from"./tripleIco-3adce790.js";import{c as N,p as O}from"./pymuIco-54c3c2da.js";function A(r){return S({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"}}]})(r)}const Se=({temario:r,urlMain:s})=>{const t=r.temas,[n,u]=e.useState(!1),[I,b]=e.useState(!0),m=()=>{let i=document.querySelector(".tool-tip");i.classList.contains("active")&&(i.classList.add("disable"),setTimeout(()=>{b(!1)},300))},l=()=>{u(!n),m()},p=()=>{m()};return e.useEffect(()=>{function i(){u(!1)}return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),d("div",{className:"contenedor-side",children:[d("div",{className:"btn-menu",children:[n?a(v,{className:n?"cerrar-menu active":"cerrar-menu",onClick:l}):a(A,{className:n?"abrir-menu":"abrir-menu active",onClick:l}),a("div",{className:I?"tool-tip active":"tool-tip disable",onClick:p,children:"Botón del menú del curso"})]}),d("nav",{className:n?"SideBarCurso active":"SideBarCurso",children:[a("h1",{className:"titulo",children:r.titulo}),a("div",{className:"subtitulo",children:r.subtitulo}),a("ul",{children:t.map(i=>a("li",{children:a(C,{to:`/cursos/${s}/${i.url}`,className:({isActive:E})=>E?"active":null,onClick:l,rel:"stylesheet",children:i.titulo})},i.id))})]})]})};const P=({presentacion:r})=>d("div",{className:"PresentacionCurso",children:[d("div",{className:"titulos",children:[a("h1",{children:r.titulo}),a("h2",{children:r.mascota})]}),a("div",{className:"img-mascota",children:a("img",{src:r.img,alt:"mascota-curso"})}),a("div",{className:"descripcion",children:a("p",{dangerouslySetInnerHTML:{__html:r.descripcion}})})]}),B=y.createContext({}),z="/assets/DiagProbBasic1-c5568659.png",L="/assets/DiagProbBasic2-00f32990.png",T="/assets/DiagProbBasic3-024310f4.png",h="/assets/DiagProbBasic4-58a13194.png",j="/assets/DiagProbBasic5-522abb45.png",q="/assets/DiagProbInter1-3e122e8e.png",D="/assets/DiagProbInter2-b2cfd6fb.png",F="/assets/DiagProbInter3-647e18bb.png",M="/assets/DiagProbInter4-2a249aac.png",V="/assets/DiagProbInter5-8474d978.png",x="/assets/DiagProbInter6-be61fe7c.png",G="/assets/DiagProbInter7-62055390.png",H="/assets/DiagProbAva1-1bbbaaba.png",U="/assets/DiagProbAva2-65471019.png",k="/assets/DiagProbAva3-971c3dc8.png",w="/assets/DiagProbAva4-ca0c59d5.png",Y="/assets/DiagProbAva5-31cd9fe6.png",$="/assets/DiagProbAva6-74f8a037.png",K={nivel:"básico",imagen:c,descripcion:`Aquí empieza tu momento de aplicar y resolver problemas en base a todo lo que hemos
    aprendido hasta el momento. Recuerda intentar todo por tu cuenta, repasar alguna
    lección si te atoras o revisar las soluciones propuestas como último recurso o
    para comparar tus respuestas, en la programación se puede llegar a un mismo
    resultado con distintos métodos o caminos. ¡Éxito! ( •̀ ω •́ )✧`},J=[{id:"1Fu",problema:"Escribe un programa que solicite al usuario dos números y los almacene en dos variables. En otra variable, almacenarás el resultado de la suma de esos dos números y luego mostrarás ese resultado en pantalla.<br />A continuación, el programa debe solicitar al usuario que ingrese un tercer número, el cual se debe almacenar en una nueva variable. Por último, mostrarás en pantalla el resultado de la multiplicación de este nuevo número por el resultado de la suma anterior.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar 4 variables: num1, num2, num3 y resultado.
                2. Solicitar y almacenar el valor de num1.
                3. Solicitar y almacenar el valor de num2.
                4. Sumar num1 y num2, y guardar el resultado en la variable resultado.
                5. Mostrar por pantalla el valor de resultado.
                6. Solicitar y almacenar el valor de num3.
                7. Multiplicar el valor actual de resultado por num3 y guardar el resultado en la variable resultado.
                8. Mostrar por pantalla el valor de resultado.
                `},{idSub:1.2,diagrama:z},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:L},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:T},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:h},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:j},{idSub:1.3,pseudo:`
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
            `}]}],W={nivel:"intermedio",imagen:c,descripcion:"Es momento de una vez más aplicar todo lo que hemos aprendido hasta el momento. En esta ocasión, te alentamos a que intentes hacer pruebas de escritorio como un extra en cada problema que vamos a plantear para que practiques más ese aspecto, así como entiendas de mejor manera lo que estás programando y no lo olvides intenta TODO por tu cuenta, solo ve las respuestas para comparar con las tuyas o por si te atoras de manera definitiva. ¡Éxito! (ง •_•)ง"},Q=[{id:"1Fu",problema:"Haciendo uso de if-else (Si-SiNo), crea un programa que pida al usuario ingresar un número entero, y determine si es positivo, negativo o cero.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una variable "numero" de tipo entero.
                2. Solicitar y almacenar el valor de "numero".
                3. Verificar si "numero" es mayor a cero.
                4. Si es así, mostrar por pantalla que el número es positivo.
                5. Si no, verificar si "numero" es menor a cero.
                6. Si es así, mostrar por pantalla que el número es negativo.
                7. Si no, mostrar por pantalla que el número es cero.
                `},{idSub:1.2,diagrama:q},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:D},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:V},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:x},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:G},{idSub:1.3,pseudo:`
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
            `}]}],X={nivel:"avanzado",imagen:c,descripcion:"Es momento de una vez más aplicar todo lo que hemos aprendido hasta el momento. Los ejercicios, como podrás notar, serán algo más complicados de resolver, pero no te desanimes. Si bien la programación puede ser complicada a veces, no te des por vencido/a. Recuerda que siempre que te atores, puedes repasar alguna lección o revisar las respuestas que proponemos para cada problema. ¡Éxito! (ง •_•)ง"},Z=[{id:"1Fu",problema:"Escribe un programa que solicite al usuario ingresar 5 números enteros y luego muestre por pantalla el resultado de multiplicar todos los elementos. Utiliza un bucle for (Para) para recorrer el array.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar un arreglo llamado "numeros" de tamaño 5.
                2. Inicializar una variable "producto" en 1.
                3. Utilizar un bucle for (Para) para pedir al usuario que ingrese los 5 números y almacenarlos en el arreglo "numeros".
                4. Recorrer el arreglo "numeros" utilizando un bucle for, multiplicando cada uno de sus elementos con la variable "producto".
                5. Mostrar por pantalla el valor final de la variable "producto".
                `},{idSub:1.2,diagrama:H},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO MultiplicacionDeElementos;

VAR
    numeros: ARRAY[5] DE ENTERO;
    i, producto: ENTERO;
                    
INICIO

    producto = 1;
                    
    Para (i = 0 ; Hasta i < 5 ; Con 1) {
        ESCRIBIR("Ingrese el número", i+1, ":");
        LEER(numeros[i]);
        producto = producto * numeros[i];
    }

    ESCRIBIR("El producto de los números ingresados es: ", producto);
                    
FIN                
                    </code>
                </pre>
            `}]},{id:"2Fu",problema:"Crea un programa que pida al usuario ingresar 10 números enteros y luego cuente cuántos de ellos son números pares. Utiliza bucles while y for (Mientras, Para) para este ejercicio.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar un arreglo llamado "numeros" de tamaño 10.
                2.  Inicializar una variable "contador" en 0.
                3. Utilizar un bucle while (Mientras) para pedir al usuario que ingrese los 10 números y almacenarlos en el arreglo "numeros".
                4. Recorrer el arreglo "numeros" utilizando un bucle while (Mientras), verificando si cada elemento es par.
                5. Si el elemento es par, incrementar la variable "contador" en 1.
                6. Mostrar por pantalla el valor final de la variable "contador".
                `},{idSub:1.2,diagrama:U},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO ConteoElementosPares;

VAR
    numeros: ARRAY[10] DE ENTERO;
    i, contador: ENTERO;
                    
INICIO
                    
    contador = 0;
    i = 0;
                    
    Mientras (i < 10) {
        ESCRIBIR("Ingrese un número:");
        LEER(numeros[i]);
        i = i + 1;
    }

    Para (i = 0 ; Hasta i < 10 ; Con 1) {
        Si (numeros[i] % 2 == 0){
            contador = contador + 1;
        }
    }
              
    ESCRIBIR("La cantidad de números pares ingresados es: ", contador);

FIN
                    </code>
                </pre>
            `}]},{id:"3Fu",problema:"Diseña un programa que solicite al usuario ingresar 8 palabras y luego permita buscar una palabra específica. El programa debe indicar si la palabra se encuentra en el array o no. Utiliza un bucle do-while (Hacer Mientras) para recorrer el array.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar un arreglo llamado "palabras" de tamaño 8.
                2. Utilizar un bucle do-while para pedir al usuario que ingrese las 8 palabras y almacenarlas en el arreglo "palabras".
                3. Solicitar al usuario que ingrese una palabra a buscar.
                4. Utilizar un bucle do-while para recorrer el arreglo "palabras" y verificar si la palabra buscada se encuentra en el arreglo.
                5. Si se encuentra la palabra, mostrar por pantalla un mensaje indicando que se encontró.
                6. Si no se encuentra la palabra, mostrar por pantalla un mensaje indicando que no se encontró.
                `},{idSub:1.2,diagrama:k},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO BusquedaDeElementos;

VAR
    palabras: ARRAY[8] DE CADENA;
    i: ENTERO;
    palabraBuscada: CADENA;
    encontrado: BOOLEANO;
                    
INICIO

    i = 0;
    encontrado = FALSO;

    Hacer {
        ESCRIBIR("Ingrese una palabra:");
        LEER(palabras[i]);
        i = i + 1;
    } Mientras (i < 8);

    ESCRIBIR("Ingrese una palabra a buscar:");
    LEER(palabraBuscada);

    i = 0;

    Hacer {
        SI (palabras[i] == palabraBuscada) {
            encontrado = VERDADERO;
        }
        i = i + 1;
    } Mientras (i < 8);

    Si (encontrado) {
        ESCRIBIR("La palabra fue encontrada en el arreglo.");
    } SiNo {
        ESCRIBIR("La palabra no fue encontrada en el arreglo.");
    }

FIN
                    </code>
                </pre>
            `}]},{id:"4Fu",problema:"Se desea crear un programa que permita al usuario ingresar una matriz de tamaño 3x3 que contiene números enteros. El programa deberá calcular la suma de los elementos de cada columna y mostrar las sumas obtenidas. Utiliza bucles for anidados (Para).",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una matriz de tamaño 3x3 llamada "matriz".
                2. Declarar un array (arreglo) llamado "sumas" de tamaño 3 para almacenar las sumas de cada columna.
                3. Utilizar dos bucles for (Para) anidados para recorrer cada elemento de la matriz.
                4. En cada iteración, sumar el elemento actual de la matriz al elemento correspondiente en el arreglo "sumas".
                5. Mostrar por pantalla las sumas obtenidas en el arreglo "sumas".
                `},{idSub:1.2,diagrama:w},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO SumaPorColumnaEnMatriz;

VAR
    matriz: ARRAY[3, 3] DE ENTERO;
    sumas: ARRAY[3] DE ENTERO;
    i, j: ENTERO;
                                        
INICIO

    Para(i = 0 ; Hasta i < 3 ; Con 1){
        Para(j = 0 ; Hasta < 3 ; Con 1){
            ESCRIBIR("Ingrese el elemento [", i, "][", j, "]: ");
            LEER(matriz[i][j]);
            sumas[j] = sumas[j] + matriz[i][j];
        }
    }

    Para(i = 0 ; Hasta i < 3 ; Con 1){
        ESCRIBIR("La suma de la columna ", i, " es: ", sumas[i]);
    }
                                        
FIN 
                    </code>
                </pre>
            `}]},{id:"5Fu",problema:"Se desea crear un programa que solicite al usuario ingresar una matriz de tamaño 4x4 que contiene números enteros. El programa deberá encontrar y mostrar el número mayor presente en la matriz. Utiliza bucles for anidados (Para).",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una matriz de tamaño 4x4 llamada "matriz".
                2. Declarar una variable llamada "mayor" e inicializarla con el primer elemento de la matriz.
                3. Utilizar dos bucles for anidados para recorrer cada elemento de la matriz.
                4. En cada iteración, comparar el elemento actual de la matriz con el valor almacenado en la variable "mayor".
                5. Si el elemento actual es mayor que "mayor", actualizar el valor de "mayor" con dicho elemento.
                6. Al finalizar los bucles, mostrar por pantalla el valor de "mayor".
                `},{idSub:1.2,diagrama:Y},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO MayorEnMatriz;

VAR
    matriz: ARRAY[4, 4] DE ENTERO;
    mayor: ENTERO;
    i, j: ENTERO;
                    
INICIO

    ESCRIBIR("Ingrese los elementos de la matriz:");
                    
    Para(i = 0 ; Hasta i < 4 ; Con 1){
        Para(j = 0 ; Hasta i < 4 ; Con 1){
            ESCRIBIR("Ingrese el elemento [", i, "][", j, "]: ");
            LEER(matriz[i][j]);

            Si(i == 0 AND j == 0){
                mayor = matriz[0][0];
            }SiNo Si(matriz[i][j] > mayor){
                mayor = matriz[i][j];
            }
        }
    }

    ESCRIBIR("El número mayor en la matriz es: ", mayor);
                    
FIN                    
                    </code>
                </pre>
            `}]},{id:"6Fu",problema:"Se desea crear un programa que permita al usuario ingresar una matriz de tamaño 3x3 que contiene números enteros. El programa deberá realizar la transposición de la matriz (intercambiar filas por columnas) y mostrar la matriz resultante. Utiliza bucles for anidados (Para).",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una matriz de tamaño 3x3 llamada "matriz".
                2. Declarar una matriz de tamaño 3x3 llamada "matrizTranspuesta" para almacenar la matriz transpuesta.
                3. Utilizar dos bucles for anidados para recorrer cada elemento de la matriz.
                4. En cada iteración, asignar el valor del elemento actual de la matriz a la posición correspondiente en la matriz transpuesta (intercambiando fila por columna).
                5. Mostrar por pantalla la matriz transpuesta resultante.
                `},{idSub:1.2,diagrama:$},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO TransponerMatriz;

VAR
    matriz: ARRAY[3, 3] DE ENTERO;
    matrizTranspuesta: ARRAY[3, 3] DE ENTERO;
    i, j: ENTERO;
                    
INICIO

    ESCRIBIR("Ingrese los elementos de la matriz:");

    Para(i = 0 ; Hasta i < 3 ; Con 1){
        Para(j = 0 ; Hasta i < 3 ; Con 1){
            ESCRIBIR("Ingrese el elemento [", i, "][", j, "]: ");
            LEER(matriz[i][j]);
            matrizTranspuesta[j][i] = matriz[i][j];
        }
    }

    ESCRIBIR("La matriz transpuesta es:");

    Para(i = 0 ; Hasta i < 3 ; Con 1){
        Para(j = 0 ; Hasta i < 3 ; Con 1){
            ESCRIBIR(matrizTranspuesta[i][j], " ");
        }
        ESCRIBIR();
    }

FIN                    
                    </code>
                </pre>
            `}]}],ee={nivel:"master",imagen:c,descripcion:`
    Llegamos al tramo final de nuestro curso de Fundamentos de Programación de IziCode. En esta etapa, nos enfrentaremos a los últimos tres desafíos, los cuales te permitirán aplicar todos los conocimientos adquiridos hasta ahora. Estos problemas serán especialmente desafiantes, ya que requerirán que utilices casi todo lo aprendido a lo largo del curso. No te preocupes si te encuentras con dificultades, es normal en esta etapa del aprendizaje. Recuerda que siempre puedes consultar nuestras respuestas sugeridas, pero te animamos a intentar resolverlos por ti mismo antes de recurrir a ellas. ¡Vamos, estás cerca de completar este curso con éxito! (ง •_•)ง`},ae=[{id:"1Fu",problema:'Escribe un programa que solicite al usuario ingresar un número entero positivo y calcule su factorial. El factorial de un número se calcula multiplicando todos los números enteros desde 1 hasta ese número. Crea una función llamada "calcularFactorial" que reciba como parámetro el número ingresado y devuelva el factorial calculado.',respuestas:[{idSub:1.1,algoritmo:`
                1. Leer un número entero positivo ingresado por el usuario y almacenarlo en la variable "numero".
                2. Validar que el número sea positivo. Si es negativo, mostrar un mensaje de error y terminar el programa.
                3. Crear una función llamada "calcularFactorial" que reciba como parámetro el número ingresado.
                4. Inicializar una variable "factorial" en 1.
                5. Utilizar un ciclo para multiplicar todos los números enteros desde 1 hasta el número ingresado y almacenar el resultado en la variable "factorial".
                6. Devolver el valor del factorial calculado.
                7. En el programa principal llamar a la función "calcularFactorial" pasando el número ingresado como argumento.
                8. Mostrar el resultado del factorial calculado.
                `},{idSub:1.2,pseudo:`
                <pre>
                    <code>
FUNCIÓN calcularFactorial(num){
    VAR
        factorial: ENTERO;
    
    INICIO

        factorial = 1;
        Para(i = 1; i <= num; Con 1){
            factorial = factorial * i;
        }
                            
        RETORNAR factorial;

    FIN
}

ALGORITMO CalculoFactorial;
    
    VAR
        numero: ENTERO;

    INICIO
        
        ESCRIBIR("Ingrese un número entero positivo:");
        LEER(numero);
                        
        Si(numero < 0){
            ESCRIBIR("Error: el número debe ser positivo.");
        }SiNo{
            factorialCalculado = calcularFactorial(numero);
                
            ESCRIBIR("El factorial de ", numero, " es:", factorialCalculado);
        }

    FIN                   
                    </code>
                </pre>
            `}]},{id:"2Fu",problema:`Escribe un programa para gestionar la información de los empleados de una empresa. El programa debe permitir agregar nuevos empleados, buscar empleados por su número de identificación y mostrar un reporte de todos los empleados registrados. Cada empleado se representará mediante los siguientes arreglos: identificaciones[], nombres[], edades[] y salarios[].
        <br/>
        <br/>
        - Crea una función llamada <span>"agregarEmpleado"</span> que reciba como parámetros los datos de un empleado y los agregue a los arreglos correspondientes.
        <br/>
        <br/>
        - Crea una función llamada <span>"buscarEmpleado"</span> que reciba como parámetro un número de identificación y devuelva el índice del empleado encontrado o -1 si no se encuentra.
        <br/>
        <br/>
        - Crea una función llamada <span>"mostrarReporteEmpleados"</span> que recorra los arreglos de empleados y muestre la información de cada empleado.
        `,respuestas:[{idSub:1.1,algoritmo:`
                1. Definir arreglos estáticos para almacenar la información de los empleados: identificaciones[], nombres[], edades[] y salarios[].
                2. Definir una variable "contador" inicializada en 0 para llevar la cuenta de empleados registrados.
                3. Crear una función llamada "agregarEmpleado" que reciba como parámetros los datos de un empleado: identificación, nombre, edad y salario.
                4. En la función "agregarEmpleado", verificar que el arreglo de identificaciones[] no esté lleno.
                5. Agregar los datos del empleado en los arreglos correspondientes utilizando el índice "contador".
                6. Crear una función llamada "buscarEmpleado" que reciba como parámetro un número de identificación.
                7. En la función "buscarEmpleado", recorrer el arreglo de identificaciones[] hasta el valor del contador - 1.
                8. Si se encuentra un empleado con el número de identificación buscado, devolver el índice del empleado encontrado.
                9. Si no se encuentra, devolver -1.
                10. Crear una función llamada "mostrarReporteEmpleados" que recorra los arreglos de empleados hasta el valor del contador - 1 y muestre la información de cada empleado.
                11. Utilizar el contador como límite en el bucle de la función "mostrarReporteEmpleados".
                `},{idSub:1.2,pseudo:`
                <pre>
                    <code>
FUNCIÓN agregarEmpleado(identificacion, nombre, edad, salario) {

    INICIO

        Si(contador < 100){
            identificaciones[contador] = identificacion;
            nombres[contador] = nombre;
            edades[contador] = edad;
            salarios[contador] = salario;
            contador = contador + 1;
        }

    FIN
}
                    
FUNCIÓN buscarEmpleado(identificacion){

    VAR
        i: ENTERO;

    INICIO

        Para(i = 0; i <= contador; i = i + 1){
            Si (identificaciones[i] == identificacion){
                RETORNAR i;
            }
        }
        RETORNAR -1;

    FIN
}
                                        
FUNCIÓN mostrarReporteEmpleados(){

    INICIO

        ESCRIBIR("Reporte de empleados:");

        Para(i = 0; i < contador; i = i + 1){
            ESCRIBIR("Empleado ", i + 1, ":");
            ESCRIBIR("Identificación:", identificaciones[i]);
            ESCRIBIR("Nombre:", nombres[i]);
            ESCRIBIR("Edad:", edades[i]);
            ESCRIBIR("Salario:", salarios[i]);
        }

    FIN
}
                    
ALGORITMO GestionEmpleados;

    VAR
        identificaciones: ARREGLO[100] DE ENTERO;
        nombres: ARREGLO[100] DE CADENA;
        edades: ARREGLO[100] DE ENTERO;
        salarios: ARREGLO[100] DE FLOTANTE;
        contador, opcion, identificacion, edad, indice: ENTERO;
        nombre: CADENA;
        salario: FLOTANTE;

    INICIO

        contador = 0;

        Hacer{
            ESCRIBIR("Seleccione una opción:");
            ESCRIBIR("1. Agregar un nuevo empleado");
            ESCRIBIR("2. Buscar un empleado por identificación");
            ESCRIBIR("3. Mostrar reporte de empleados");
            ESCRIBIR("4. Salir");
            LEER(opcion);
                                
            Si(opcion == 1){
                ESCRIBIR("Ingrese la identificación del empleado:");
                LEER(identificacion);
                ESCRIBIR("Ingrese el nombre del empleado:");
                LEER(nombre);
                ESCRIBIR("Ingrese la edad del empleado:");
                LEER(edad);
                ESCRIBIR("Ingrese el salario del empleado:");
                LEER(salario);
                                    
                agregarEmpleado(identificacion, nombre, edad, salario);
                ESCRIBIR("Empleado agregado exitosamente.");

            }SiNo Si(opcion == 2){
                ESCRIBIR("Ingrese la identificación del empleado a buscar:");
                LEER(identificacion);
                                    
                indice = buscarEmpleado(identificacion);
                                    
                Si(indice != -1){
                    ESCRIBIR("Empleado encontrado:");
                    ESCRIBIR("Identificación:", identificaciones[indice]);
                    ESCRIBIR("Nombre:", nombres[indice]);
                    ESCRIBIR("Edad:", edades[indice]);
                    ESCRIBIR("Salario:", salarios[indice]);
                }SiNo{
                    ESCRIBIR("Empleado no encontrado.");
                }

            }SiNo Si(opcion == 3){
                mostrarReporteEmpleados();
            }
                                
        }Mientras(opcion != 4);
    FIN                                   
                    </code>
                </pre>
            `}]},{id:"3Fu",problema:`Una tienda desea implementar un programa para gestionar su inventario de productos. Cada producto tiene los siguientes datos: código, nombre, precio y cantidad disponible. El programa debe permitir al usuario realizar las siguientes acciones: agregar un nuevo producto, actualizar la cantidad disponible de un producto, buscar un producto por su código y mostrar el reporte de todos los productos. Haz uso de objetos y todo lo que hayas aprendido para resolver este problema.
        `,respuestas:[{idSub:1.1,algoritmo:`
                1. Se crea el objeto "Producto" con los atributos: "codigo", "nombre", "precio" y "cantidad".
                2. Se declaran las variables: "productos" y "contador".
                3. Se define el método "buscarProducto" que recibe como parámetro un código.
                4. Se inicia el algoritmo principal "GestionProductos".
                5. Se declara la variable "opcion".
                6. Se muestra un menú de opciones para que el usuario seleccione una.
                7. Si la opción es 1, se verifica si el contador es igual a 10.
                8. Si es igual a 10, se muestra un mensaje indicando que no es posible agregar más productos.
                9. Si no es igual a 10, se solicita al usuario ingresar el código, nombre, precio y cantidad del nuevo producto.
                10. Se crea un objeto de la clase Producto y se asignan los valores ingresados.
                11. Se guarda el objeto Producto en la posición del arreglo indicada por el contador.
                12. Si la opción es 2, se solicita al usuario ingresar el código del producto a actualizar.
                13. Se llama al método "buscarProducto" pasando como argumento el código ingresado.
                14. Si el producto no es encontrado, se muestra un mensaje indicando que no se encontró el producto.
                15. Si el producto es encontrado, se solicita al usuario ingresar la nueva cantidad disponible.
                16. Se actualiza la cantidad del producto con el valor ingresado.
                17. Se muestra un mensaje indicando que la cantidad ha sido actualizada.
                18. Si la opción es 3, se solicita al usuario ingresar el código del producto a buscar.
                19. Se llama al método "buscarProducto" pasando como argumento el código ingresado.
                20. Si el producto no es encontrado, se muestra un mensaje indicando que no se encontró el producto.
                21. Si el producto es encontrado, se muestra en pantalla el código, nombre, precio y cantidad del producto.
                22. Si la opción es 4, se muestra un encabezado indicando que se mostrará el reporte de productos.
                23. Se recorre el arreglo de productos desde la posición 0 hasta el valor de contador.
                24. Por cada producto, se muestra en pantalla su número de orden, código, nombre, precio y cantidad.
                25. El programa continúa repitiendo el proceso desde el paso 6 hasta que la opción ingresada sea igual a 5 (salir).
                `},{idSub:1.2,pseudo:`
                <pre>
                    <code>
OBJETO Producto{
    ATRIBUTOS:
        codigo: ENTERO;
        nombre: CADENA;
        precio: FLOTANTE;
        cantidad: ENTERO;
                                    
    VAR
        productos: ARREGLO[10] DE Producto;
        contador: ENTERO;
                                    
    METODO buscarProducto(codigo){
        VAR
            i: ENTERO;
        INICIO
            Para(i = 0; i < contador; Con 1){
                Si(productos[i].codigo == codigo) Entonces
                    RETORNAR productos[i];
                }
            }
                        
            RETORNAR NULO;
        FIN
    }
}
                
ALGORITMO GestionProductos;

    VAR
        opcion, codigo, cantidad, nuevaCantidad: ENTERO;
        nombre: CADENA;
        precio: FLOTANTE;
        producto: Producto;
                                    
INICIO
                                    
    Hacer{
        ESCRIBIR("Seleccione una opción:");
        ESCRIBIR("1. Agregar un nuevo producto");
        ESCRIBIR("2. Actualizar la cantidad disponible de un producto");
        ESCRIBIR("3. Buscar un producto por su código");
        ESCRIBIR("4. Mostrar reporte de productos");
        ESCRIBIR("5. Salir");
        LEER(opcion);
                                    
        Si(opcion == 1){
            Si(contador == 10){
                ESCRIBIR("No es posible agregar más productos.");
            }SiNo{
                ESCRIBIR("Ingrese el código del producto:");
                LEER(codigo);
                ESCRIBIR("Ingrese el nombre del producto:");
                LEER(nombre);
                ESCRIBIR("Ingrese el precio del producto:");
                LEER(precio);
                ESCRIBIR("Ingrese la cantidad disponible del producto:");
                LEER(cantidad);
                                    
                producto = Producto();
                producto.codigo = codigo;
                producto.nombre = nombre;
                producto.precio = precio;
                producto.cantidad = cantidad;
                
                productos[contador] = producto;
                                    
                contador = contador + 1;
            }
                
        }SiNo Si(opcion == 2){
            ESCRIBIR("Ingrese el código del producto:");
            LEER(codigo);
            producto = buscarProducto(codigo);
                                    
            Si(producto == NULO){
                ESCRIBIR("Producto no encontrado.");
            }SiNo{
                ESCRIBIR("Ingrese la nueva cantidad disponible:");
                LEER(nuevaCantidad);
                producto.cantidad = nuevaCantidad;
                ESCRIBIR("Cantidad actualizada exitosamente.");
            }

        }SiNo Si(opcion == 3){
            ESCRIBIR("Ingrese el código del producto:");
            LEER(codigo);
            producto = buscarProducto(codigo);
                                    
            Si(producto == NULO){
                ESCRIBIR("Producto no encontrado.");
            }SiNo{
                ESCRIBIR("Producto encontrado:");
                ESCRIBIR("Código:", producto.codigo);
                ESCRIBIR("Nombre:", producto.nombre);
                ESCRIBIR("Precio:", producto.precio);
                ESCRIBIR("Cantidad disponible:", producto.cantidad);
            }
                        
        }SiNo Si(opcion == 4){
            ESCRIBIR("Reporte de productos:");
                                    
            Para(i = 0; i < contador; Con 1){
                ESCRIBIR("Producto ", i + 1, ":");
                ESCRIBIR("Código:", productos[i].codigo);
                ESCRIBIR("Nombre:", productos[i].nombre);
                ESCRIBIR("Precio:", productos[i].precio);
                ESCRIBIR("Cantidad disponible:", productos[i].cantidad);
            }
        }               
    }Mientras(opcion != 5);
                                    
FIN                                                
                    </code>
                </pre>
            `}]}],oe=e.lazy(()=>o(()=>import("./IntroduccionFu-461eb88d.js"),["assets/IntroduccionFu-461eb88d.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/IntroduccionFu-c826a19f.css"])),re=e.lazy(()=>o(()=>import("./DiagramPseudoIntroFu-0fda81b2.js"),["assets/DiagramPseudoIntroFu-0fda81b2.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/DiagramPseudoIntroFu-11dc91c3.css"])),g=e.lazy(()=>o(()=>import("./EjerciciosFundamentos-2d256c12.js"),["assets/EjerciciosFundamentos-2d256c12.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/EjerciciosFundamentos-83fa9d3b.css"])),ie=e.lazy(()=>o(()=>import("./IndagandoFu-b6cb71da.js"),["assets/IndagandoFu-b6cb71da.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/DiagramPseudoIntroFu-11dc91c3.css"])),ne=e.lazy(()=>o(()=>import("./LogicaFu-aa3c517b.js"),["assets/LogicaFu-aa3c517b.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/OpcionMultipleCard-a714fa6b.js","assets/index.esm-d3bd80fb.js","assets/OpcionMultipleCard-00aac59e.css","assets/DiagramPseudoIntroFu-11dc91c3.css"])),se=e.lazy(()=>o(()=>import("./ResolvAprenAvaFu-ed20b7f2.js"),["assets/ResolvAprenAvaFu-ed20b7f2.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/javiIco-2b9c03bd.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenAvaFu-18b8efed.css"])),te=e.lazy(()=>o(()=>import("./ResolvAprenBasicFu-f35b5a8c.js"),["assets/ResolvAprenBasicFu-f35b5a8c.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenBasicFu-a8ca4884.css"])),le=e.lazy(()=>o(()=>import("./ResolvAprenInterFu-5db4dd91.js"),["assets/ResolvAprenInterFu-5db4dd91.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenInterFu-0ad7da80.css"])),de=e.lazy(()=>o(()=>import("./SintaxBasicPruebasFu-f281ec54.js"),["assets/SintaxBasicPruebasFu-f281ec54.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/javiIco-2b9c03bd.js","assets/SintaxBasicPruebasFu-f61bd2ba.css"])),ce=e.lazy(()=>o(()=>import("./TiposDatosFu-24e59d76.js"),["assets/TiposDatosFu-24e59d76.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/OpcionMultipleCard-a714fa6b.js","assets/index.esm-d3bd80fb.js","assets/OpcionMultipleCard-00aac59e.css","assets/javiIco-2b9c03bd.js","assets/ejercicio-51ad8792.js","assets/DiagramPseudoIntroFu-11dc91c3.css"])),ue=e.lazy(()=>o(()=>import("./ResolvAprenMastFu-446d0300.js"),["assets/ResolvAprenMastFu-446d0300.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/DiagramPseudoIntroFu-11dc91c3.css"])),me=e.lazy(()=>o(()=>import("./ConclusionesFu-85933680.js"),["assets/ConclusionesFu-85933680.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/javiIco-2b9c03bd.js","assets/ConclusionesFu-de5ed440.css"])),pe=e.lazy(()=>o(()=>import("./IntroduccionC-c1ba701f.js"),["assets/IntroduccionC-c1ba701f.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/IntroduccionC-3122fb15.css"])),ge=e.lazy(()=>o(()=>import("./ConceptosBasC-995690fe.js"),["assets/ConceptosBasC-995690fe.js","assets/index-05365979.js","assets/index-fafd17af.css","assets/pymuIco-54c3c2da.js","assets/MascotaTip-ec587e15.js","assets/MascotaTip-3a0859f1.css","assets/ConceptosBasC-0d003254.css"])),Ie=e.lazy(()=>o(()=>import("./IntroduccionPy-68f1ceaf.js"),["assets/IntroduccionPy-68f1ceaf.js","assets/index-05365979.js","assets/index-fafd17af.css"])),R={introduccion_fu:{component:oe},conceptos_bas_fu:{component:ie},tipos_datos_fu:{component:ce},logica_fu:{component:ne},diagram_pseudo_fu:{component:re},sintax_bas_pruebas_esc_fu:{component:de},resolviendo_aprendiendo_bas_fu:{component:te},resolviendo_aprendiendo_inter_fu:{component:le},resolviendo_aprendiendo_avan_fu:{component:se},resolviendo_aprendiendo_mast_fu:{component:ue},conclusiones_fu:{component:me},ejercicios_resolv_apren_basic_fu:{component:g,props:{descripcionEjercicio:K,ejercicios:J}},ejercicios_resolv_apren_inter_fu:{component:g,props:{descripcionEjercicio:W,ejercicios:Q}},ejercicios_resolv_apren_avan_fu:{component:g,props:{descripcionEjercicio:X,ejercicios:Z}},ejercicios_resolv_apren_mast_fu:{component:g,props:{descripcionEjercicio:ee,ejercicios:ae}},introduccion_c:{component:pe},conceptos_bas_c:{component:ge},introduccion_py:{component:Ie}},ve=()=>{const{temaUrl:r,ejerUrl:s}=f(),t=s?R[s]:R[r],n=t?t.component:null,u=t?t.props||{}:{},I=e.useContext(B),b=e.useRef(null),m=e.useRef(null),[l,p]=e.useState(!1),i=e.useMemo(()=>`${r}-${s}`,[r,s]);return e.useEffect(()=>{p(!0),setTimeout(()=>{p(!1)},300)},[i]),a("div",{className:"ContenidoCurso",ref:b,children:l?a(_,{}):a("div",{ref:m,children:n?a(n,{...u}):a(P,{presentacion:I})})},i)},Ce={titulo:"fundamentos de la programación",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_fu"},{id:1,titulo:"conceptos básicos",url:"conceptos_bas_fu"},{id:2,titulo:"variables y tipos de datos",url:"tipos_datos_fu"},{id:3,titulo:"lógica en la programación",url:"logica_fu"},{id:4,titulo:"diagramas de flujo y pseudocódigos",url:"diagram_pseudo_fu"},{id:5,titulo:"sintaxis básica y pruebas de escritorio",url:"sintax_bas_pruebas_esc_fu"},{id:6,titulo:"resolviendo y aprendiendo: básico",url:"resolviendo_aprendiendo_bas_fu"},{id:7,titulo:"resolviendo y aprendiendo: intermedio",url:"resolviendo_aprendiendo_inter_fu"},{id:8,titulo:"resolviendo y aprendiendo: avanzado",url:"resolviendo_aprendiendo_avan_fu"},{id:9,titulo:"resolviendo y aprendiendo: master",url:"resolviendo_aprendiendo_mast_fu"},{id:10,titulo:"conclusiones",url:"conclusiones_fu"}]},ye={titulo:"lenguaje C",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_c"},{id:1,titulo:"conceptos básicos",url:"conceptos_bas_c"},{id:2,titulo:"control de flujo",url:"control_flujo_c"},{id:3,titulo:"arreglos y cadenas",url:"arreglos_cadenas_c"},{id:4,titulo:"funciones",ulr:"funciones_c"},{id:5,titulo:"estructuras de datos",url:"estructuras_datos_c"},{id:6,titulo:"gestión de memoria",url:"gestion_memoria_c"},{id:7,titulo:"archivos",url:"archivos_c"},{id:8,titulo:"practicas y más practicas",url:"practicas_c"}]},fe={titulo:"Python",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_py"},{id:1,titulo:"conceptos básicos",url:"conceptos_basicos_py"},{id:2,titulo:"control de flujo",url:"control_flujo_py"},{id:3,titulo:"estructuras de datos",url:"estructuras_datos_py"},{id:4,titulo:"funciones y módulos",url:"funciones_modulos_py"},{id:5,titulo:"tratamiento de archivos",url:"tratamiento_archivos_py"},{id:6,titulo:"programacion orientada a objetos (POO)",url:"programacion_objetos_poo_py"},{id:7,titulo:"manejo de errorres y excepciones",url:"manejo_errores_py"},{id:8,titulo:"manipulacion de cadenas de texto",url:"manupular_cadenas_texto_py"},{id:9,titulo:"practicas y más practicas",url:"practicas_py"}]},_e={titulo:"Bienvenido al curso de Fundamentos de la programación",mascota:"En este curso te hara compañia las 3 mascotas de IziCode (╹ڡ╹ )",img:c,descripcion:`
    ¡Bienvenidos al emocionante curso de Fundamentos de Programación en IziCode!
    <br/>
    <br/>
    En este fascinante recorrido, te sumergirás en los conceptos básicos de programación de una manera clara y accesible. Acompañados por nuestras queridas mascotas Pymu, Cecy y Javi, te guiarán, te inspirarán y te desafiarán a medida que adquieras los fundamentos indispensables.
    <br/>
    <br/>
    A través de explicaciones concisas y ejemplos prácticos, exploraremos los conceptos esenciales, como variables, tipos de datos, lógica de programación, bucles y condicionales. Nuestras mascotas estarán presentes en cada paso del camino, ofreciendo consejos valiosos y ejercicios estimulantes para poner en práctica tus conocimientos.
    <br/>
    <br/>
    No se requiere experiencia previa en programación, solo curiosidad y ganas de aprender. Nuestro objetivo es proporcionarte una base sólida para que te sientas seguro y motivado para continuar tu viaje en el mundo de la programación.
    <br/>
    <br/>
    A medida que avances, también te prepararemos para los próximos cursos, donde Pymu, Cecy y Javi te acompañarán en aventuras más desafiantes en los lenguajes C y Python. Juntos, formaremos una comunidad de programadores apasionados en IziCode, listos para enfrentar cualquier desafío y crecer profesionalmente.
    <br/>
    <br/>
    ¡Ven y únete a nuestro curso de Fundamentos de Programación en IziCode! Descubre el poder de la programación y adquiere las habilidades esenciales con nuestras adorables mascotas como tus compañeros de aprendizaje. ¡Te esperamos para comenzar esta emocionante travesía juntos!`},Ne={titulo:"Bienvendo al curso de C",mascota:"En este curso te hara compañia Cecy",img:N,descripcion:`
    ¡Bienvenido al apasionante curso de Programación en C en IziCode!
    <br/>
    <br/>
    En esta emocionante aventura, te sumergirás en el mundo del lenguaje C y descubrirás cómo dominar su sintaxis poderosa. Con la guía experta de Cecy, nuestra increíble coneja programadora, aprenderás a desarrollar programas sólidos y eficientes en C.
    <br/>
    <br/>
    Previamente, es recomendable haber completado nuestro exitoso curso de Fundamentos de Programación, donde sentamos las bases para comprender los conceptos esenciales. Ahora, es el momento perfecto para llevar tus habilidades al siguiente nivel y desbloquear todo el potencial de C.
    <br/>
    <br/>
    No importa si eres un novato o si ya tienes algo de experiencia en programación, este curso te brindará los conocimientos y las herramientas necesarias para enfrentar desafíos más avanzados. A través de ejercicios prácticos y consejos expertos, Cecy te acompañará en cada paso del camino, compartiendo su pasión por el lenguaje C y revelando sus secretos.
    <br/>
    <br/>
    ¡Prepárate para abrirte paso en el fascinante mundo de la programación en C junto a Cecy y nuestra comunidad de entusiastas de IziCode! Desarrolla habilidades sólidas, expande tu mente y conviértete en un programador confiado y competente en C. ¡Únete a nosotros y desata tu potencial en el universo de la programación en C!`},Oe={titulo:"Bienvenido al curso de Python",mascota:"En este curso te hara compañia Pymu",img:O,descripcion:`
    ¡Te damos la bienvenida al apasionante curso de Programación en Python con la compañía de nuestra encantadora mascota, Pymu!
    <br/>
    <br/>
    En este emocionante viaje de aprendizaje, exploraremos las maravillas del lenguaje Python y descubriremos su versatilidad y poder. Con Pymu, nuestra querida patita programadora, como tu guía y aliada, te sumergirás en un mundo de posibilidades infinitas.
    <br/>
    <br/>
    Desde los fundamentos hasta técnicas más avanzadas, aprenderás a dominar la sintaxis elegante y sencilla de Python. Aprenderás a crear programas eficientes, a utilizar estructuras de datos, a trabajar con bibliotecas y a desarrollar soluciones innovadoras.
    <br/>
    <br/>
    No importa si eres un principiante curioso o si ya tienes experiencia en otros lenguajes, Pymu estará a tu lado para ofrecerte consejos, desafíos emocionantes y ejercicios prácticos que te permitirán aplicar lo que aprendas. Prepárate para sumergirte en la comunidad vibrante de programadores en Python y descubrir cómo este lenguaje puede impulsar tu creatividad y tus habilidades técnicas.
    <br/>
    <br/>
    Es recomendable haber completado previamente nuestro exitoso curso de Fundamentos de Programación, donde sentamos las bases esenciales para comprender los conceptos básicos. Ahora, es el momento perfecto para llevar tus habilidades al siguiente nivel y explorar el vasto mundo de Python con la inigualable guía de Pymu.
    <br/>
    <br/>
    ¡Únete a nosotros en este emocionante viaje de aprendizaje y descubre cómo Python puede abrirte las puertas a infinitas oportunidades en el campo de la programación! Con Pymu a tu lado, aprenderás, te divertirás y desarrollarás habilidades valiosas que te acompañarán en tu trayectoria como programador en Python. ¡Bienvenido a nuestro emocionante curso de Programación en Python con Pymu!`};export{ve as C,Ce as F,B as P,Se as S,ye as a,fe as b,Ne as c,_e as f,Oe as p};
