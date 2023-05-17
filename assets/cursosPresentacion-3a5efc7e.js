import{G as f,r as a,j as d,a as e,R as O,N,f as z,_ as o,g as A,h}from"./index-5fd20af4.js";import{t as m}from"./tripleIco-3adce790.js";import{p as L}from"./pymuIco-6c1b0f00.js";function B(r){return f({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"}}]})(r)}const ie=({temario:r,urlMain:s})=>{const l=r.temas,[n,t]=a.useState(!1),u=()=>{t(!n)};return a.useEffect(()=>{function i(){t(!1)}return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),d("div",{className:"contenedor-side",children:[e("div",{className:"btn-menu",children:n?e(O,{className:n?"cerrar-menu active":"cerrar-menu",onClick:u}):e(B,{className:n?"abrir-menu":"abrir-menu active",onClick:u})}),d("nav",{className:n?"SideBarCurso active":"SideBarCurso",children:[e("h1",{className:"titulo",children:r.titulo}),e("div",{className:"subtitulo",children:r.subtitulo}),e("ul",{children:l.map(i=>e("li",{children:e(N,{to:`/cursos/${s}/${i.url}`,className:({isActive:c})=>c?"active":null,onClick:u,rel:"stylesheet",children:i.titulo})},i.id))})]})]})};const P=({presentacion:r})=>d("div",{className:"PresentacionCurso",children:[d("div",{className:"titulos",children:[e("h1",{children:r.titulo}),e("h2",{children:r.mascota})]}),e("div",{className:"img-mascota",children:e("img",{src:r.img,alt:"mascota-curso"})}),e("div",{className:"descripcion",children:e("p",{dangerouslySetInnerHTML:{__html:r.descripcion}})})]}),D=z.createContext({}),q="/assets/DiagProbBasic1-c5568659.png",T="/assets/DiagProbBasic2-00f32990.png",F="/assets/DiagProbBasic3-024310f4.png",M="/assets/DiagProbBasic4-58a13194.png",V="/assets/DiagProbBasic5-522abb45.png",E="/assets/DiagProbInter1-3e122e8e.png",R="/assets/DiagProbInter2-b2cfd6fb.png",v="/assets/DiagProbInter3-647e18bb.png",S="/assets/DiagProbInter4-2a249aac.png",y="/assets/DiagProbInter5-8474d978.png",_="/assets/DiagProbInter6-be61fe7c.png",j="/assets/DiagProbInter7-62055390.png",x={nivel:"básico",imagen:m,descripcion:`Aquí empieza tu momento de aplicar y resolver problemas en base a todo lo que hemos
    aprendido hasta el momento. Recuerda intentar todo por tu cuenta, repasar alguna
    lección si te atoras o revisar las soluciones propuestas como último recurso o
    para comparar tus respuestas, en la programación se puede llegar a un mismo
    resultado con distintos métodos o caminos. ¡Éxito! ( •̀ ω •́ )✧`},H=[{id:"1Fu",problema:"Escribe un programa que solicite al usuario dos números y los almacene en dos variables. En otra variable, almacenarás el resultado de la suma de esos dos números y luego mostrarás ese resultado en pantalla.<br />A continuación, el programa debe solicitar al usuario que ingrese un tercer número, el cual se debe almacenar en una nueva variable. Por último, mostrarás en pantalla el resultado de la multiplicación de este nuevo número por el resultado de la suma anterior.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar 4 variables: num1, num2, num3 y resultado.
                2. Solicitar y almacenar el valor de num1.
                3. Solicitar y almacenar el valor de num2.
                4. Sumar num1 y num2, y guardar el resultado en la variable resultado.
                5. Mostrar por pantalla el valor de resultado.
                6. Solicitar y almacenar el valor de num3.
                7. Multiplicar el valor actual de resultado por num3 y guardar el resultado en la variable resultado.
                8. Mostrar por pantalla el valor de resultado.
                `},{idSub:1.2,diagrama:q},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:T},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:F},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:M},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:V},{idSub:1.3,pseudo:`
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
            `}]}],k={nivel:"intermedio",imagen:m,descripcion:"Es momento de una vez más aplicar todo lo que hemos aprendido hasta el momento. En esta ocasión, te alentamos a que intentes hacer pruebas de escritorio como un extra en cada problema que vamos a plantear para que practiques más ese aspecto, así como entiendas de mejor manera lo que estás programando y no lo olvides intenta TODO por tu cuenta, solo ve las respuestas para comparar con las tuyas o por si te atoras de manera definitiva. ¡Éxito! (ง •_•)ง"},G=[{id:"1Fu",problema:"Haciendo uso de if-else (Si-SiNo), crea un programa que pida al usuario ingresar un número entero, y determine si es positivo, negativo o cero.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una variable "numero" de tipo entero.
                2. Solicitar y almacenar el valor de "numero".
                3. Verificar si "numero" es mayor a cero.
                4. Si es así, mostrar por pantalla que el número es positivo.
                5. Si no, verificar si "numero" es menor a cero.
                6. Si es así, mostrar por pantalla que el número es negativo.
                7. Si no, mostrar por pantalla que el número es cero.
                `},{idSub:1.2,diagrama:E},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:R},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:v},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:S},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:y},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:_},{idSub:1.3,pseudo:`
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
            `}]}],U={nivel:"avanzado",imagen:m,descripcion:"Es momento de una vez más aplicar todo lo que hemos aprendido hasta el momento. Los ejercicios, como podrás notar, serán algo más complicados de resolver, pero no te desanimes. Si bien la programación puede ser complicada a veces, no te des por vencido/a. Recuerda que siempre que te atores, puedes repasar alguna lección o revisar las respuestas que proponemos para cada problema. ¡Éxito! (ง •_•)ง"},w=[{id:"1Fu",problema:"Escribe un programa que solicite al usuario ingresar 5 números enteros y luego muestre por pantalla el resultado de multiplicar todos los elementos. Utiliza un bucle for (Para) para recorrer el array.",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar un arreglo llamado "numeros" de tamaño 5.
                2. Inicializar una variable "producto" en 1.
                3. Utilizar un bucle for (Para) para pedir al usuario que ingrese los 5 números y almacenarlos en el arreglo "numeros".
                4. Recorrer el arreglo "numeros" utilizando un bucle for, multiplicando cada uno de sus elementos con la variable "producto".
                5. Mostrar por pantalla el valor final de la variable "producto".
                `},{idSub:1.2,diagrama:E},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:R},{idSub:1.3,pseudo:`
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
                `},{idSub:1.2,diagrama:v},{idSub:1.3,pseudo:`
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
                3. Inicializar todos los elementos del arreglo "sumas" en 0.
                4. Utilizar dos bucles for (Para) anidados para recorrer cada elemento de la matriz.
                5. En cada iteración, sumar el elemento actual de la matriz al elemento correspondiente en el arreglo "sumas".
                6. Mostrar por pantalla las sumas obtenidas en el arreglo "sumas".
                `},{idSub:1.2,diagrama:S},{idSub:1.3,pseudo:`
                <pre>
                    <code>
ALGORITMO SumaPorColumnaEnMatriz;

VAR
    matriz: ARRAY[3, 3] DE ENTERO;
    sumas: ARRAY[3] DE ENTERO;
    i, j: ENTERO;
                                        
INICIO

    Para(i = 1 ; Hasta i < 3 ; Con 1){
        sumas[i] = 0;
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
                `},{idSub:1.2,diagrama:y},{idSub:1.3,pseudo:`
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
            `}]},{id:"6Fu",problema:"Se desea crear un programa que permita al usuario ingresar una matriz de tamaño 3x3 que contiene números enteros. El programa deberá realizar la transposición de la matriz (intercambiar filas por columnas) y mostrar la matriz resultante. Utiliza bucles for anidados (Para).",respuestas:[{idSub:1.1,algoritmo:`
                1. Declarar una matriz de tamaño 3x3 llamada "matriz".
                2. Declarar una matriz de tamaño 3x3 llamada "matrizTranspuesta" para almacenar la matriz transpuesta.
                3. Utilizar dos bucles for anidados para recorrer cada elemento de la matriz.
                4. En cada iteración, asignar el valor del elemento actual de la matriz a la posición correspondiente en la matriz transpuesta (intercambiando fila por columna).
                5. Mostrar por pantalla la matriz transpuesta resultante.
                `},{idSub:1.2,diagrama:_},{idSub:1.3,pseudo:`
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
            `}]}],$=a.lazy(()=>o(()=>import("./DiagramPseudoIntroFu-b57c38bf.js"),["assets/DiagramPseudoIntroFu-b57c38bf.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/DiagramPseudoIntroFu-fec66354.css"])),p=a.lazy(()=>o(()=>import("./EjerciciosFundamentos-d0508769.js"),["assets/EjerciciosFundamentos-d0508769.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/EjerciciosFundamentos-7b433db6.css"])),K=a.lazy(()=>o(()=>import("./IndagandoFu-644ac9e2.js"),["assets/IndagandoFu-644ac9e2.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-191ab803.js","assets/MascotaTip-3a0859f1.css","assets/DiagramPseudoIntroFu-fec66354.css"])),Y=a.lazy(()=>o(()=>import("./IntroduccionFu-f7e32326.js"),["assets/IntroduccionFu-f7e32326.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/IntroduccionFu-ef24127f.css"])),W=a.lazy(()=>o(()=>import("./LogicaFu-3a00e601.js"),["assets/LogicaFu-3a00e601.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/ejercicio-51ad8792.js","assets/MascotaTip-191ab803.js","assets/MascotaTip-3a0859f1.css","assets/OpcionMultipleCard-47f79b08.js","assets/index.esm-284fc421.js","assets/OpcionMultipleCard-00aac59e.css","assets/DiagramPseudoIntroFu-fec66354.css"])),J=a.lazy(()=>o(()=>import("./ResolvAprenAvaFu-438b1b43.js"),["assets/ResolvAprenAvaFu-438b1b43.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/javiIco-2b9c03bd.js","assets/MascotaTip-191ab803.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenAvaFu-d84db85a.css"])),Q=a.lazy(()=>o(()=>import("./ResolvAprenBasicFu-7790e460.js"),["assets/ResolvAprenBasicFu-7790e460.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/pymuIco-6c1b0f00.js","assets/MascotaTip-191ab803.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenBasicFu-5cbd903d.css"])),X=a.lazy(()=>o(()=>import("./ResolvAprenInterFu-f77a6689.js"),["assets/ResolvAprenInterFu-f77a6689.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/cecyIco-5a0f09a4.js","assets/MascotaTip-191ab803.js","assets/MascotaTip-3a0859f1.css","assets/ResolvAprenInterFu-b75cf35c.css"])),Z=a.lazy(()=>o(()=>import("./SintaxBasicPruebasFu-cb81df2f.js"),["assets/SintaxBasicPruebasFu-cb81df2f.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/javiIco-2b9c03bd.js","assets/SintaxBasicPruebasFu-6757aef5.css"])),ee=a.lazy(()=>o(()=>import("./TiposDatosFu-ea869a6e.js"),["assets/TiposDatosFu-ea869a6e.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css","assets/OpcionMultipleCard-47f79b08.js","assets/index.esm-284fc421.js","assets/OpcionMultipleCard-00aac59e.css","assets/javiIco-2b9c03bd.js","assets/ejercicio-51ad8792.js","assets/DiagramPseudoIntroFu-fec66354.css"])),ae=a.lazy(()=>o(()=>import("./IntroduccionPy-24ce568c.js"),["assets/IntroduccionPy-24ce568c.js","assets/index-5fd20af4.js","assets/index-c6930a3a.css"])),I={introduccion_fu:{component:Y},conceptos_bas_fu:{component:K},tipos_datos_fu:{component:ee},logica_fu:{component:W},diagram_pseudo_fu:{component:$},sintax_bas_pruebas_esc_fu:{component:Z},resolviendo_aprendiendo_bas_fu:{component:Q},resolviendo_aprendiendo_inter_fu:{component:X},resolviendo_aprendiendo_avan_fu:{component:J},ejercicios_resolv_apren_basic_fu:{component:p,props:{descripcionEjercicio:x,ejercicios:H}},ejercicios_resolv_apren_inter_fu:{component:p,props:{descripcionEjercicio:k,ejercicios:G}},ejercicios_resolv_apren_avan_fu:{component:p,props:{descripcionEjercicio:U,ejercicios:w}},introduccion_py:ae},se=()=>{const{temaUrl:r,ejerUrl:s}=A(),l=s?I[s]:I[r],n=l?l.component:null,t=l?l.props||{}:{},u=a.useContext(D),i=a.useRef(null),c=a.useRef(null),[C,b]=a.useState(!1),g=a.useMemo(()=>`${r}-${s}`,[r,s]);return a.useEffect(()=>{b(!0),setTimeout(()=>{b(!1)},300)},[g]),e("div",{className:"ContenidoCurso",ref:i,children:C?e(h,{}):e("div",{ref:c,children:n?e(n,{...t}):e(P,{presentacion:u})})},g)},le={titulo:"fundamentos de la programación",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_fu"},{id:1,titulo:"conceptos básicos",url:"conceptos_bas_fu"},{id:2,titulo:"variables y tipos de datos",url:"tipos_datos_fu"},{id:3,titulo:"lógica en la programación",url:"logica_fu"},{id:4,titulo:"diagramas de flujo y pseudocódigos",url:"diagram_pseudo_fu"},{id:5,titulo:"sintaxis básica y pruebas de escritorio",url:"sintax_bas_pruebas_esc_fu"},{id:6,titulo:"resolviendo y aprendiendo: básico",url:"resolviendo_aprendiendo_bas_fu"},{id:7,titulo:"resolviendo y aprendiendo: intermedio",url:"resolviendo_aprendiendo_inter_fu"},{id:8,titulo:"resolviendo y aprendiendo: avanzado",url:"resolviendo_aprendiendo_avan_fu"},{id:9,titulo:"resolviendo y aprendiendo: master",url:"resolviendo_aprendiendo_mast_fu"},{id:10,titulo:"conclusiones",url:"conclusiones_fu"}]},ue={titulo:"Curso de Python",subtitulo:"indice de lecciones",temas:[{id:0,titulo:"introducción",url:"introduccion_py"},{id:1,titulo:"¿dondé empezamos?",url:"donde_empezamos_py"},{id:2,titulo:"sintaxis y comentarios",url:"sintaxis_comentarios_py"},{id:3,titulo:"variables y tipos de datos",url:"variables_tipos_datos_py"},{id:4,titulo:"strings",url:"strings_py"}]},te={titulo:"Bienvenido al curso de Fundamentos de la programación",mascota:"En este curso te hara compañia las 3 mascotas de IziCode (╹ڡ╹ )",img:m,descripcion:"¡Bienvenidos al curso de Fundamentos de Programación en IziCode! <br/><br/> En este curso aprenderás los conceptos básicos de programación y cómo utilizar el pseudocódigo para crear programas simples. Exploraremos diferentes técnicas de resolución de problemas y cómo aplicarlas a través del pseudocódigo. <br /><br/> No se requiere experiencia previa en programación, solo curiosidad y ganas de aprender. ¡Ven y únete a nuestra comunidad de programadores en IziCode para adquirir las habilidades necesarias para comenzar a programar!"},de={titulo:"Bienvenido al curso de Python",mascota:"En este curso te hara compañia Pymu",img:L,descripcion:"¡Bienvenidos al curso de Python en IziCode! <br /><br/> En este curso aprenderás los conceptos básicos de programación utilizando Python, uno de los lenguajes de programación más populares y versátiles. Aprenderás cómo crear programas simples y complejos, explorarás las estructuras de datos y las técnicas de programación, y desarrollarás habilidades que te permitirán enfrentar desafíos en el mundo de la programación. <br /><br/> No se requiere experiencia previa en programación, solo curiosidad y ganas de aprender. ¡Ven y únete a nuestra comunidad de programadores en IziCode para adquirir las habilidades necesarias para convertirte en un experto en Python!"};export{se as C,le as F,D as P,ie as S,ue as a,te as f,de as p};
