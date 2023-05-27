import{G as b,r as e,j as m,a,R as S,N as v,f as C,_ as r,g as y,h as f}from"./index-90995241.js";import{t}from"./tripleIco-3adce790.js";import{p as N}from"./pymuIco-6c1b0f00.js";function O(o){return b({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"}}]})(o)}const Re=({temario:o,urlMain:s})=>{const l=o.temas,[i,c]=e.useState(!1),d=()=>{c(!i)};return e.useEffect(()=>{function n(){c(!1)}return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),m("div",{className:"contenedor-side",children:[a("div",{className:"btn-menu",children:i?a(S,{className:i?"cerrar-menu active":"cerrar-menu",onClick:d}):a(O,{className:i?"abrir-menu":"abrir-menu active",onClick:d})}),m("nav",{className:i?"SideBarCurso active":"SideBarCurso",children:[a("h1",{className:"titulo",children:o.titulo}),a("div",{className:"subtitulo",children:o.subtitulo}),a("ul",{children:l.map(n=>a("li",{children:a(v,{to:`/cursos/${s}/${n.url}`,className:({isActive:p})=>p?"active":null,onClick:d,rel:"stylesheet",children:n.titulo})},n.id))})]})]})};const _=({presentacion:o})=>m("div",{className:"PresentacionCurso",children:[m("div",{className:"titulos",children:[a("h1",{children:o.titulo}),a("h2",{children:o.mascota})]}),a("div",{className:"img-mascota",children:a("img",{src:o.img,alt:"mascota-curso"})}),a("div",{className:"descripcion",children:a("p",{dangerouslySetInnerHTML:{__html:o.descripcion}})})]}),A=C.createContext({}),B="/assets/DiagProbBasic1-c5568659.png",z="/assets/DiagProbBasic2-00f32990.png",L="/assets/DiagProbBasic3-024310f4.png",P="/assets/DiagProbBasic4-58a13194.png",T="/assets/DiagProbBasic5-522abb45.png",D="/assets/DiagProbInter1-3e122e8e.png",q="/assets/DiagProbInter2-b2cfd6fb.png",h="/assets/DiagProbInter3-647e18bb.png",F="/assets/DiagProbInter4-2a249aac.png",j="/assets/DiagProbInter5-8474d978.png",M="/assets/DiagProbInter6-be61fe7c.png",V="/assets/DiagProbInter7-62055390.png",x="/assets/DiagProbAva1-1bbbaaba.png",G="/assets/DiagProbAva2-65471019.png",H="/assets/DiagProbAva3-971c3dc8.png",U="/assets/DiagProbAva4-ca0c59d5.png",k="/assets/DiagProbAva5-31cd9fe6.png",w="/assets/DiagProbAva6-74f8a037.png",Y={nivel:"básico",imagen:t,descripcion:`Aquí empieza tu momento de aplicar y resolver problemas en base a todo lo que hemos
    aprendido hasta el momento. Recuerda intentar todo por tu cuenta, repasar alguna
    lección si te atoras o revisar las soluciones propuestas como último recurso o
    para comparar tus respuestas, en la programación se puede llegar a un mismo
    resultado con distintos métodos o caminos. ¡Éxito! ( •̀ ω •́ )✧`},$=[{id:"1Fu",problema:"Escribe un programa que solicite al usuario dos números y los almacene en dos variables. En otra variable, almacenarás el resultado de la suma de esos dos números y luego mostrarás ese resultado en pantalla.<br />A continuación, el programa debe solicitar al usuario que ingrese un tercer número, el cual se debe almacenar en una nueva variable. Por último, mostrarás en pantalla el resultado de la multiplicación de este nuevo número por el resultado de la suma anterior.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar 4 variables: num1, num2, num3 y resultado.
                2. Solicitar y almacenar el valor de num1.
                3. Solicitar y almacenar el valor de num2.
                4. Sumar num1 y num2, y guardar el resultado en la variable resultado.
                5. Mostrar por pantalla el valor de resultado.
                6. Solicitar y almacenar el valor de num3.
                7. Multiplicar el valor actual de resultado por num3 y guardar el resultado en la variable resultado.
                8. Mostrar por pantalla el valor de resultado.
                `},{idSub:1.2,diagrama:B},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:z},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:L},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:P},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:T},{idSub:1.3,pseudo:`
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
            `}]}],K={nivel:"intermedio",imagen:t,descripcion:"Es momento de una vez más aplicar todo lo que hemos aprendido hasta el momento. En esta ocasión, te alentamos a que intentes hacer pruebas de escritorio como un extra en cada problema que vamos a plantear para que practiques más ese aspecto, así como entiendas de mejor manera lo que estás programando y no lo olvides intenta TODO por tu cuenta, solo ve las respuestas para comparar con las tuyas o por si te atoras de manera definitiva. ¡Éxito! (ง •_•)ง"},J=[{id:"1Fu",problema:"Haciendo uso de if-else (Si-SiNo), crea un programa que pida al usuario ingresar un número entero, y determine si es positivo, negativo o cero.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una variable "numero" de tipo entero.
                2. Solicitar y almacenar el valor de "numero".
                3. Verificar si "numero" es mayor a cero.
                4. Si es así, mostrar por pantalla que el número es positivo.
                5. Si no, verificar si "numero" es menor a cero.
                6. Si es así, mostrar por pantalla que el número es negativo.
                7. Si no, mostrar por pantalla que el número es cero.
                `},{idSub:1.2,diagrama:D},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:h},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:F},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:j},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:M},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:V},{idSub:1.3,pseudo:`
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
            `}]}],W={nivel:"avanzado",imagen:t,descripcion:"Es momento de una vez más aplicar todo lo que hemos aprendido hasta el momento. Los ejercicios, como podrás notar, serán algo más complicados de resolver, pero no te desanimes. Si bien la programación puede ser complicada a veces, no te des por vencido/a. Recuerda que siempre que te atores, puedes repasar alguna lección o revisar las respuestas que proponemos para cada problema. ¡Éxito! (ง •_•)ง"},Q=[{id:"1Fu",problema:"Escribe un programa que solicite al usuario ingresar 5 números enteros y luego muestre por pantalla el resultado de multiplicar todos los elementos. Utiliza un bucle for (Para) para recorrer el array.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar un arreglo llamado "numeros" de tamaño 5.
                2. Inicializar una variable "producto" en 1.
                3. Utilizar un bucle for (Para) para pedir al usuario que ingrese los 5 números y almacenarlos en el arreglo "numeros".
                4. Recorrer el arreglo "numeros" utilizando un bucle for, multiplicando cada uno de sus elementos con la variable "producto".
                5. Mostrar por pantalla el valor final de la variable "producto".
                `},{idSub:1.2,diagrama:x},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:G},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:H},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:U},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:k},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:w},{idSub:1.3,pseudo:`
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
            `}]}],X={nivel:"master",imagen:t,descripcion:`
    Llegamos al tramo final de nuestro curso de Fundamentos de Programación de IziCode. En esta etapa, nos enfrentaremos a los últimos tres desafíos, los cuales te permitirán aplicar todos los conocimientos adquiridos hasta ahora. Estos problemas serán especialmente desafiantes, ya que requerirán que utilices casi todo lo aprendido a lo largo del curso. No te preocupes si te encuentras con dificultades, es normal en esta etapa del aprendizaje. Recuerda que siempre puedes consultar nuestras respuestas sugeridas, pero te animamos a intentar resolverlos por ti mismo antes de recurrir a ellas. ¡Vamos, estás cerca de completar este curso con éxito! (ง •_•)ง`},Z=[{id:"1Fu",problema:'Escribe un programa que solicite al usuario ingresar un número entero positivo y calcule su factorial. El factorial de un número se calcula multiplicando todos los números enteros desde 1 hasta ese número. Crea una función llamada "calcularFactorial" que reciba como parámetro el número ingresado y devuelva el factorial calculado.',respuestas:[{idSub:1.1,algoritmo:`
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
            `}]}],ee=e.lazy(()=>r(()=>import("./DiagramPseudoIntroFu-72ace620.js"),["assets/DiagramPseudoIntroFu-72ace620.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/DiagramPseudoIntroFu-096abf77.css"])),u=e.lazy(()=>r(()=>import("./EjerciciosFundamentos-adf95dd4.js"),["assets/EjerciciosFundamentos-adf95dd4.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/EjerciciosFundamentos-0682de4f.css"])),ae=e.lazy(()=>r(()=>import("./IndagandoFu-917d4eac.js"),["assets/IndagandoFu-917d4eac.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-6e839c40.js","assets/MascotaTip-3a0859f1.css","assets/DiagramPseudoIntroFu-096abf77.css"])),oe=e.lazy(()=>r(()=>import("./IntroduccionFu-1572f428.js"),["assets/IntroduccionFu-1572f428.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/IntroduccionFu-c3992025.css"])),re=e.lazy(()=>r(()=>import("./LogicaFu-6a1b95f2.js"),["assets/LogicaFu-6a1b95f2.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-6e839c40.js","assets/MascotaTip-3a0859f1.css","assets/OpcionMultipleCard-ea022c15.js","assets/index.esm-cbae793c.js","assets/OpcionMultipleCard-00aac59e.css","assets/DiagramPseudoIntroFu-096abf77.css"])),ie=e.lazy(()=>r(()=>import("./ResolvAprenAvaFu-8c5179cc.js"),["assets/ResolvAprenAvaFu-8c5179cc.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/javiIco-2b9c03bd.js","assets/MascotaTip-6e839c40.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenAvaFu-63c14573.css"])),ne=e.lazy(()=>r(()=>import("./ResolvAprenBasicFu-391b54e5.js"),["assets/ResolvAprenBasicFu-391b54e5.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/MascotaTip-6e839c40.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenBasicFu-f063cbc0.css"])),se=e.lazy(()=>r(()=>import("./ResolvAprenInterFu-8edaff22.js"),["assets/ResolvAprenInterFu-8edaff22.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/MascotaTip-6e839c40.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenInterFu-efea1937.css"])),le=e.lazy(()=>r(()=>import("./SintaxBasicPruebasFu-63f062d2.js"),["assets/SintaxBasicPruebasFu-63f062d2.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/javiIco-2b9c03bd.js","assets/SintaxBasicPruebasFu-da6192fa.css"])),de=e.lazy(()=>r(()=>import("./TiposDatosFu-6660f691.js"),["assets/TiposDatosFu-6660f691.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/OpcionMultipleCard-ea022c15.js","assets/index.esm-cbae793c.js","assets/OpcionMultipleCard-00aac59e.css","assets/javiIco-2b9c03bd.js","assets/ejercicio-51ad8792.js","assets/DiagramPseudoIntroFu-096abf77.css"])),te=e.lazy(()=>r(()=>import("./IntroduccionPy-af35db2e.js"),["assets/IntroduccionPy-af35db2e.js","assets/index-90995241.js","assets/index-c6930a3a.css"])),ce=e.lazy(()=>r(()=>import("./ResolvAprenMastFu-79cc2a6f.js"),["assets/ResolvAprenMastFu-79cc2a6f.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/MascotaTip-6e839c40.js","assets/MascotaTip-3a0859f1.css","assets/DiagramPseudoIntroFu-096abf77.css"])),ue=e.lazy(()=>r(()=>import("./ConclusionesFu-2fa2e1b4.js"),["assets/ConclusionesFu-2fa2e1b4.js","assets/index-90995241.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/cecyIco-5a0f09a4.js","assets/javiIco-2b9c03bd.js","assets/ConclusionesFu-b99f8b5f.css"])),E={introduccion_fu:{component:oe},conceptos_bas_fu:{component:ae},tipos_datos_fu:{component:de},logica_fu:{component:re},diagram_pseudo_fu:{component:ee},sintax_bas_pruebas_esc_fu:{component:le},resolviendo_aprendiendo_bas_fu:{component:ne},resolviendo_aprendiendo_inter_fu:{component:se},resolviendo_aprendiendo_avan_fu:{component:ie},resolviendo_aprendiendo_mast_fu:{component:ce},conclusiones_fu:{component:ue},ejercicios_resolv_apren_basic_fu:{component:u,props:{descripcionEjercicio:Y,ejercicios:$}},ejercicios_resolv_apren_inter_fu:{component:u,props:{descripcionEjercicio:K,ejercicios:J}},ejercicios_resolv_apren_avan_fu:{component:u,props:{descripcionEjercicio:W,ejercicios:Q}},ejercicios_resolv_apren_mast_fu:{component:u,props:{descripcionEjercicio:X,ejercicios:Z}},introduccion_py:te},Ee=()=>{const{temaUrl:o,ejerUrl:s}=y(),l=s?E[s]:E[o],i=l?l.component:null,c=l?l.props||{}:{},d=e.useContext(A),n=e.useRef(null),p=e.useRef(null),[g,I]=e.useState(!1),R=e.useMemo(()=>`${o}-${s}`,[o,s]);return e.useEffect(()=>{I(!0),setTimeout(()=>{I(!1)},300)},[R]),a("div",{className:"ContenidoCurso",ref:n,children:g?a(f,{}):a("div",{ref:p,children:i?a(i,{...c}):a(_,{presentacion:d})})},R)},ge={titulo:"fundamentos de la programación",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_fu"},{id:1,titulo:"conceptos básicos",url:"conceptos_bas_fu"},{id:2,titulo:"variables y tipos de datos",url:"tipos_datos_fu"},{id:3,titulo:"lógica en la programación",url:"logica_fu"},{id:4,titulo:"diagramas de flujo y pseudocódigos",url:"diagram_pseudo_fu"},{id:5,titulo:"sintaxis básica y pruebas de escritorio",url:"sintax_bas_pruebas_esc_fu"},{id:6,titulo:"resolviendo y aprendiendo: básico",url:"resolviendo_aprendiendo_bas_fu"},{id:7,titulo:"resolviendo y aprendiendo: intermedio",url:"resolviendo_aprendiendo_inter_fu"},{id:8,titulo:"resolviendo y aprendiendo: avanzado",url:"resolviendo_aprendiendo_avan_fu"},{id:9,titulo:"resolviendo y aprendiendo: master",url:"resolviendo_aprendiendo_mast_fu"},{id:10,titulo:"conclusiones",url:"conclusiones_fu"}]},be={titulo:"Curso de Python",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_py"},{id:1,titulo:"¿dondé empezamos?",url:"donde_empezamos_py"},{id:2,titulo:"sintaxis y comentarios",url:"sintaxis_comentarios_py"},{id:3,titulo:"variables y tipos de datos",url:"variables_tipos_datos_py"},{id:4,titulo:"strings",url:"strings_py"}]},Se={titulo:"Bienvenido al curso de Fundamentos de la programación",mascota:"En este curso te hara compañia las 3 mascotas de IziCode (╹ڡ╹ )",img:t,descripcion:"¡Bienvenidos al curso de Fundamentos de Programación en IziCode! <br/><br/> En este curso aprenderás los conceptos básicos de programación y cómo utilizar el pseudocódigo para crear programas simples. Exploraremos diferentes técnicas de resolución de problemas y cómo aplicarlas a través del pseudocódigo. <br /><br/> No se requiere experiencia previa en programación, solo curiosidad y ganas de aprender. ¡Ven y únete a nuestra comunidad de programadores en IziCode para adquirir las habilidades necesarias para comenzar a programar!"},ve={titulo:"Bienvenido al curso de Python",mascota:"En este curso te hara compañia Pymu",img:N,descripcion:"¡Bienvenidos al curso de Python en IziCode! <br /><br/> En este curso aprenderás los conceptos básicos de programación utilizando Python, uno de los lenguajes de programación más populares y versátiles. Aprenderás cómo crear programas simples y complejos, explorarás las estructuras de datos y las técnicas de programación, y desarrollarás habilidades que te permitirán enfrentar desafíos en el mundo de la programación. <br /><br/> No se requiere experiencia previa en programación, solo curiosidad y ganas de aprender. ¡Ven y únete a nuestra comunidad de programadores en IziCode para adquirir las habilidades necesarias para convertirte en un experto en Python!"};export{Ee as C,ge as F,A as P,Re as S,be as a,Se as f,ve as p};
