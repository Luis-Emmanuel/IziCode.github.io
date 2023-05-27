import{j as a,a as e,L as o}from"./index-90995241.js";import{c as n}from"./cecyIco-5a0f09a4.js";import{M as i}from"./MascotaTip-6e839c40.js";const l="/assets/DiagramInterEjem1-11ab2381.png",d="/assets/DiagramInterEjem2-4f91040f.png",s="/assets/DiagramInterEjem3-8f05c400.png",c="/assets/DiagramInterEjem4-d207c235.png",t="/assets/DiagramInterEjem5-1f8b37c8.png",m="/assets/DiagramInterEjem6-6bae72a0.png",g=()=>{const r={mascota:n,contenido:`
        Siempre recuerda que los condicionales son una herramienta muy útil en programación, pero también pueden generar errores si no se usan correctamente. Por eso, es importante ser preciso en las comparaciones y verificar que todas las ramas del condicional estén cubiertas. Además, es recomendable mantener los condicionales lo más simples posibles y evitar anidar demasiados if-else, ya que esto puede hacer que el código sea difícil de leer y mantener.
        `,contenido2:`
        Algo muy importante a tener en cuenta al trabajar con bucles es asegurarse de que la condición de salida se cumpla en algún momento, de lo contrario, podemos terminar con bucles infinitos que nunca se detendrán y provocarán que el programa se bloquee o se vuelva muy lento. ⊙﹏⊙∥ Por lo tanto, siempre es importante que la condición se ajuste a la lógica de nuestro programa.
        `,contenido3:`
        Un buen consejo para trabajar con bucles while y do-while es asegurarse de tener una condición de salida clara y definida para evitar caer en bucles infinitos. Además, para el bucle do-while, es importante tener en cuenta que el código dentro del bucle se ejecutará al menos una vez antes de verificar la condición de salida.
        `};return a("div",{className:"curso-pagina resolv-apren-inter-fu",children:[e("div",{className:"titular-curso",children:e("h1",{children:"resolviendo y aprendiendo nivel: intermedio"})}),e("section",{children:a("div",{className:"parrafo-flex",children:[e("img",{src:n,alt:"cecy"}),e("p",{children:"Muy bien, es hora de empezar a subir el nivel y comprender de manera más práctica temas que vimos antes como los condicionales, bucles y los operadores lógicos. Aquí vamos a abordar problemas algo más complejos y las pruebas de escritorio van a tener un mayor protagonismo que antes. (⌐■_■)"})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:'condicionales "if" y "else" ("Si" y "SiNo")'})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[a("p",{children:["El condicional ",e("span",{children:'"if-else"'})," es una de las estructuras de control más importantes en la programación, ya que permite la toma de decisiones dentro de un programa, esto significa que se puede ejecutar un bloque de código si se cumple una condición determinada (",e("span",{children:'con el "if"'}),"), y en caso contrario, se puede ejecutar otro bloque de código (",e("span",{children:'con el "else"'}),"). Esto es esencial para hacer que un programa sea más dinámico y adaptable, ya que se puede programar diferentes respuestas según las diferentes entradas o situaciones que se presenten."]}),e("p",{children:"Recordarás que antes vimos los operadores lógicos, los cuales nos permiten evaluar si una o varias condiciones son verdaderas o falsas. Ahora es momento de aplicar esos conocimientos en la programación utilizando el condicional if y else. Estos condicionales nos permiten ejecutar un bloque de código si se cumple una condición determinada (if) y otro bloque de código si la condición no se cumple (else). Los operadores lógicos son fundamentales en la creación de estas condiciones ya que nos permiten evaluar diferentes expresiones y determinar si son verdaderas o falsas."}),e("p",{children:"Pero bueno, vamos por partes y con ejemplos porque así entenderemos de mejor manera cómo funciona todo esto. Empecemos por el siguiente ejemplo:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO PrimerEjemploSi;

VAR
    numero: ENTERO;

INICIO

    numero = 10;

    Si (numero > 10) {
        ESCRIBIR("numero es mayor que 10");
    }

FIN
          `})})}),a("p",{children:["Ahora analicemos un poco el ejemplo que te acabo de dar, a primera vista notaras que tiene una estructura particular de escribirse, empezando por que damos inicio al",e("span",{children:" if"})," con el ",e("span",{children:"Si"}),", como estamos haciendo uso de pseudocodigo lo haremos de esta manera, ahora veras que entre los parentesis tenemos lo siguiente:",e("br",{}),e("strong",{children:"numero > 10"}),e("br",{}),"Esta es la regla a cumplir por el ",e("span",{children:" Sí "})," y aquí introduciré un tema que no había hecho mención y esos son los ",e("span",{children:" operadores condicionales "}),", estos los usaremos mucho en este tema así como en próximos temas a ver. ",e("br",{}),"Estos operadores nos permiten comparar valores y tomar decisiones en base a si se cumplen o no ciertas condiciones. Algunos de los operadores condicionales más comunes son el igual que (",e("span",{children:"=="}),"), el distinto que (",e("span",{children:"!="}),"), el mayor que (",e("span",{children:">"}),"), el menor que (",e("span",{children:"<"}),"), el mayor o igual que (",e("span",{children:">="}),") y el menor o igual que (",e("span",{children:"<="}),'). A lo largo de esta sección, veremos cómo usar estos operadores en conjunto con los condicionales if y else para crear programas que tomen decisiones de manera automatizada."']}),a("p",{children:["Pero bueno, continuemos analizando el ejemplo. La condición o regla que tenemos es si nuestra variable número es mayor que 10. Seguido de esto, notarás unas llaves",e("span",{}),", las cuales indican el cuerpo o bloque de código que corresponde al ",e("span",{children:"Si"}),". Dicho de otra forma, todo lo que esté dentro de las llaves es lo que el programa deberá realizar en caso de que se cumpla la condición del",e("span",{children:" Si"}),", la cual en este caso es solo un mensaje por pantalla. También notarás que dicho contenido tiene una sangría o espaciado. Como mencionamos antes, estas sangrías son importantes porque nos ayudan a ver de una mejor manera qué está dentro y qué no del ",e("span",{children:"Si"}),", y otras estructuras que estaremos viendo."]}),e("p",{children:"Ahora pasemos al siguiente ejemplo:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO SegundoEjemploSi;

VAR
    numero: ENTERO;

INICIO

    numero = 10;

    Si (numero > 10) {
        ESCRIBIR("numero es mayor que 10");
    } SiNo{
        ESCRIBIR("numero en menor o igual que 10");
    }

FIN
          `})})}),a("p",{children:["Notarás que se agregó un ",e("span",{children:"SiNo"}),", este es el ",e("span",{children:"else"})," en pseudocódigo, como expliqué antes. Es lo que hará el programa en caso de que la condición del ",e("span",{children:"Si"}),' no se cumpla, lo cual es el caso ya que "numero" no es mayor que 10. Así que lo que se verá por pantalla es el mensaje del',e("span",{children:" SiNo"}),". (⊙ˍ⊙)"]}),e("p",{children:"Pasemos a resolver un problema, imaginemos que tenemos que hacer un programa que reciba la edad del usuario y tengamos que validar si es menor de edad o no. Para ello, hagamos lo siguiente:"}),e("p",{children:"Si pensamos en el algoritmo a seguir sería algo asi:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:"1. Definir una variable edad"}),e("li",{children:"2. Pedir al usuario su edad y guardarla en la variable edad"}),e("li",{children:"3. Usar un Si para verificar su mayoria de edad"}),e("li",{children:'4. Si es mayor de edad imprimir en pantalla "Eres mayor de edad"'}),e("li",{children:'5. Si no es mayor de edad imprimir en pantalla "No eres mayor de edad"'})]})}),e("p",{children:"Ahora el diagrama de flujo correspondiente quedaría de esta manera:"}),e("picture",{className:"diagrama-flujo-ejemplo",id:"diagrama-mod-1",children:e("img",{src:l,alt:"diagrama-ejemplo-intermedio-1"})}),e("p",{children:"Finalmente nuestro pseudocódigo quedaría de la siguiente manera:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO MayoriaEdad;

VAR
    edad: ENTERO;

INICIO

    Si(edad > 18){
        ESCRIBIR("Eres mayor de edad");
    }SiNo{
        ESCRIBIR("No eres mayor de edad");
    }

FIN
          `})})}),e("p",{children:"Fácil, ¿verdad? Bueno, intentemos otro problema sencillo antes de continuar. Ahora hay que hacer un programa que al ingresar un número determine si es par o impar, para ello hagamos lo siguiente:"}),e("p",{children:"Algoritmo del problema:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:"1. Definir una variable numero"}),e("li",{children:"2. Pedir al usuario que ingrese un número y guardarlo en numero"}),e("li",{children:"3. Verificar si el número es divisible entre 2 utilizando el operador módulo (%)."}),e("li",{children:"4. Si el residuo de la división es igual a cero, imprimir en pantalla que el número es par."}),e("li",{children:"5. Si el residuo de la división es diferente de cero, imprimir en pantalla que el número es impar."})]})}),e("p",{children:"Nuestro diagrama de flujo:"}),e("picture",{className:"diagrama-flujo-ejemplo",id:"diagrama-mod-2",children:e("img",{src:d,alt:"diagrama-ejemplo-intermedio-2"})}),e("p",{children:"Finalmente nuestro pseudocódigo:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO MayoriaEdad;

VAR
    numero: ENTERO;

INICIO

    Si(numero % 2 == 0){
        ESCRIBIR("El numero es par");
    }SiNo{
        ESCRIBIR("El numero es impar");
    }

FIN
          `})})})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:'condicional "if" y los operadores lógicos'})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[a("p",{children:["Como mencionamos al principio, podremos hacer uso de los operadores lógicos con los condicionales ",e("span",{children:"if"}),", principalmente el ",e("span",{children:"AND"})," y el ",e("span",{children:"OR "}),"suelen ser los más usados."]}),e("p",{children:"Pero bueno, mejor veamos el siguiente problema para que lo entiendas de mejor manera. Supongamos que necesitamos saber si un estudiante aprueba o no su materia, las condiciones son que necesita obtener una calificación de 70 o más en su examen final y además necesita obtener una calificación de 80 o más en su proyecto final."}),e("p",{children:"Bien el algoritmo a seguir del problema sería algo así:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:"1. Definir dos variables, califExamen y califProyecto"}),e("li",{children:"2. Pedir al usuario la calificación de examen y guardarla en califExamen"}),e("li",{children:"3. Pedir al usuario la calificación de proyecto y guardarla en califProyecto"}),e("li",{children:"4. Verificar que califExamen sea mayor o igual a 70 y califProyecto sea mayor o igual a 80"}),e("li",{children:'5. Si se cumple lo anterior mostrar en pantalla "El alumno aprobó la materia"'}),e("li",{children:'6. Si no se cumple lo anterior mostrar en pantalla "El alumno no aprobó la materia"'})]})}),e("p",{children:"El diagrama se vería de esta forma:"}),e("picture",{className:"diagrama-flujo-ejemplo",id:"diagrama-mod-3",children:e("img",{src:s,alt:"diagrama-ejemplo-intermedio-3"})}),e("p",{children:"Finalmente el pseudocodigó sería algo así:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO Calificaciones;

VAR
    califExamen, califProyecto: ENTERO;

INICIO

    Si (califExamen >= 70 AND califProyecto >= 80) {
        ESCRIBIR("El alumno aprobo la materia");
    }SiNo{
        ESCRIBIR("El alumno reprobo la materia");
    }

FIN
          `})})}),a("p",{children:["Analiza un poco el problema, verás que no hay mayor dificultad más que agregar AND dentro de nuestra condición ",e("span",{children:"Si"}),", además de aplicar lo que ya sabemos de los operadores lógicos. (╹ڡ╹ )"]}),e("div",{className:"tip-flex",children:e(i,{mascota:r.mascota,contenido:r.contenido})})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:'"if" anidados'})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[a("p",{children:["Finalmente quedaría por ver los if anidados los cuales son simplemente una forma de tener múltiples condicionales if dentro de otro condicional if. Es como una especie de ",e("span",{children:'"condicional dentro de otro condicional"'}),". En otras palabras, se comprueba una condición en un if y, si se cumple, se comprueba otra condición en un if interno."]}),e("p",{children:"Por ejemplo, imagina que quieres hacer un programa que determine si un número es positivo, negativo o cero. Podrías hacerlo con un if simple, pero también podrías anidar múltiples if para manejar cada caso específico. Sería algo así:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO IfAnidados;

VAR
    numero: ENTERO;

INICIO

    Si (numero > 0) {
        ESCRIBIR("El número es positivo");
    }SiNo {
        Si(numero < 0) {
            ESCRIBIR("El número es negativo");
        }SiNo {
            ESCRIBIR("El número es cero");
        }
    }

FIN
          `})})}),a("p",{children:["Como puedes ver, se usa un ",e("span",{children:"Si"})," para verificar si el número es mayor que cero, y si es así, se ejecuta el código correspondiente. Si no, se comprueba otra condición interna ",e("span",{children:"Si"})," para ver si es menor que cero. Si lo es, se ejecuta el código correspondiente. Si no, se ejecuta el código para el caso de que sea cero."]}),a("p",{children:["Es importante mencionar que el uso excesivo de condicionales anidados (también conocido como ",e("span",{children:'"triángulo de la muerte"'}),") puede hacer que el código sea difícil de leer y mantener. En lugar de anidar demasiados condicionales, es recomendable dividir el problema en subproblemas más pequeños y abordarlos por separado utilizando funciones o métodos. Pero esos los veremos más adelante, por el momento sería todo en lo que a ",e("span",{children:"if-else"})," respecta. ( •̀ ω •́ )✧"]})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:'bucles "for" ("Para")'})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[e("p",{children:"Seguramente en algún momento has tenido que repetir alguna tarea varias veces, ya sea sumar una serie de números, mostrar una lista de elementos, entre otros. Repetir estas tareas manualmente puede ser tedioso y propenso a errores, por lo que en programación existen los bucles, los cuales nos permiten repetir una acción un número determinado de veces o mientras se cumpla una determinada condición."}),a("p",{children:["Como recordarás, vimos un poco de esto en el tema de lógica de la programación, pero solo fue una definición algo sencilla. Ahora entraremos de lleno en esto, empezando por el ",e("span",{children:"bucle for"}),", el cual nos permite repetir una acción un número específico de veces, y es sobre este bucle que hablaremos a continuación."]}),e("p",{children:"La estructura básica de un bucle for consta de tres partes:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[a("li",{children:[e("span",{children:"1. Inicialización:"})," en esta parte se declara y/o inicializa la variable de control del bucle. Esta variable llevará un seguimiento de cuántas veces se ha ejecutado el bucle."]}),a("li",{children:[e("span",{children:"2. Condición:"})," en esta parte se establece la condición que debe cumplirse para que el bucle se siga ejecutando. Mientras la condición sea verdadera, el bucle seguirá ejecutándose."]}),a("li",{children:[e("span",{children:"3. Incremento/decremento:"})," en esta parte se modifica la variable de control del bucle para que se acerque al final del bucle."]})]})}),e("p",{children:"Dependiendo del lenguaje de programación que se use la manera en que esto se escribe puede variar bastante pero al final todos siguen esa misma logica de una u otra forma, por el momento para nuestros pseudocodigós lo veremos de la siguiente manera:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
INICIO

    Para (<variable> = <valor "inicial"> ; Hasta <valor "final"> ; Con <incremento>) {
        <codigo "a repetir">
    }

FIN
          `})})}),e("p",{children:"Un ejemplo rapido para entender mejor como lo usaremos podría ser el hacer un programa que deba mostrar por pantalla o imprimir, los números del 1 al 10, para lo cual podemos hacer lo siguiente:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO ImprimiendoNumeros

VAR
    i: ENTERO;

INICIO

    Para (i = 1 ; Hasta i <= 10 ; Con 1) {
        ESCRIBIR( i );
    }

FIN
          `})})}),e("p",{children:"¿Te diste cuenta de que aquí también usamos operadores condicionales? Pues sí, en los bucles estos operadores son muy importantes porque nos sirven para definir cuándo se termina el bucle. Si aún no te queda 100% claro esto, probemos con una prueba de escritorio, estas son especialmente útiles en estos casos que involucran bucles:"}),e("div",{className:"contenedor-tabla",children:e("table",{children:a("tbody",{children:[a("tr",{children:[e("th",{children:"Iteración"}),e("th",{children:'Variable "i"'}),e("th",{children:"¿i <= 10?"}),e("th",{children:"Acción del bucle"})]}),a("tr",{children:[e("td",{children:"1"}),e("td",{children:"1"}),e("td",{children:"True"}),e("td",{children:'imprimir "1"'})]}),a("tr",{children:[e("td",{children:"2"}),e("td",{children:"2"}),e("td",{children:"True"}),e("td",{children:'imprimir "2"'})]}),a("tr",{children:[e("td",{children:"3"}),e("td",{children:"3"}),e("td",{children:"True"}),e("td",{children:'imprimir "3"'})]}),a("tr",{children:[e("td",{children:"..."}),e("td",{children:"..."}),e("td",{children:"..."}),e("td",{children:"..."})]}),a("tr",{children:[e("td",{children:"10"}),e("td",{children:"10"}),e("td",{children:"True"}),e("td",{children:'imprimir "10"'})]}),a("tr",{children:[e("td",{children:"11"}),e("td",{children:"11"}),e("td",{children:"False"}),e("td",{children:"Salir del bucle"})]})]})})}),e("div",{className:"tip-flex",children:e(i,{mascota:r.mascota,contenido:r.contenido2})}),e("p",{children:"Pasemos a resolver otro problema antes de continuar, supongamos que necesitamos mostrar la tabla de multiplicar del 5. Para lograr esto, podemos hacer lo siguiente:"}),e("p",{children:"Para nuestro algoritmo tendríamos algo así:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:'1. Declarar una variable contador "i" y otra de resultado.'}),e("li",{children:'2. Crear un bucle "Para" donde "i" aumentara de 1 en 1 hasta 10.'}),e("li",{children:'3. En cada iteración, multiplicar 5 por el valor de "i".'}),e("li",{children:'4. Almacenar el resultado de la multiplicación en la variable "resultado".'}),e("li",{children:'5. Imprimir por pantalla el valor de la variable "resultado" en cada iteración del bucle.'})]})}),e("p",{children:"El diagrama de flujo de esta forma:"}),e("picture",{className:"diagrama-flujo-ejemplo",id:"diagrama-mod-4",children:e("img",{src:c,alt:"diagrama-ejemplo-intermedio-4"})}),e("p",{children:"Finalmente el pseudocódigo quedaría de la siguiente manera:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO TablaDel5

VAR
    i, resultado: ENTERO;

INICIO

    Para (i = 1 ; Hasta i <= 10 ; Con 1) {
        resultado = i * 5;
        ESCRIBIR(resultado);
    }

FIN
          `})})}),e("p",{children:"Como bonus también te mostrare como quedaría nuestra prueba de escritorio:"}),e("div",{className:"contenedor-tabla",children:e("table",{children:a("tbody",{children:[a("tr",{children:[e("th",{children:"Iteración"}),e("th",{children:'Variable "i"'}),e("th",{children:"¿i <= 10?"}),e("th",{children:"Resultado"})]}),a("tr",{children:[e("td",{children:"1"}),e("td",{children:"1"}),e("td",{children:"True"}),e("td",{children:"5"})]}),a("tr",{children:[e("td",{children:"2"}),e("td",{children:"2"}),e("td",{children:"True"}),e("td",{children:"10"})]}),a("tr",{children:[e("td",{children:"3"}),e("td",{children:"3"}),e("td",{children:"True"}),e("td",{children:"15"})]}),a("tr",{children:[e("td",{children:"..."}),e("td",{children:"..."}),e("td",{children:"..."}),e("td",{children:"..."})]}),a("tr",{children:[e("td",{children:"10"}),e("td",{children:"10"}),e("td",{children:"True"}),e("td",{children:"50"})]}),a("tr",{children:[e("td",{children:"11"}),e("td",{children:"11"}),e("td",{children:"False"}),e("td",{})]})]})})})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:'bucles "while" y "do-while" ("Mientras" y "Hacer-Mientras")'})}),a("section",{children:[a("div",{className:"parrafo-no-flex",children:[e("p",{children:"Toca el turno de conocer al bucle while y do-while, que al igual que el bucle for, son estructuras de control de flujo que permiten la repetición de una o varias acciones. Sin embargo, a diferencia del bucle for, el bucle while y el do-while no tienen un número específico de veces que se van a ejecutar, sino que dependen de una condición que se evalúa en cada iteración, en otras palabras, mientras se cumpla la condición, el bucle se seguirá ejecutando. Pero vayamos por partes, empezando por el bucle while. (ง •_•)ง"}),e("h3",{className:"titulo-interno",children:"Bucle while (Mientras)"}),e("p",{children:"La sintaxis de un bucle while es en realidad bastante sencilla, observa:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
INICIO

    Mientras(<condición>) {
        <codigo "a repetir">
    }

FIN
          `})})}),e("p",{children:"Es como un for, pero más simplificado, donde por lo general nuestras condiciones, al igual que en el for, estarán dadas por operadores condicionales, lógicos o ambos. Por ejemplo, vamos a resolver el siguiente problema: necesitamos hacer un programa que realice la suma de los números del 1 al 10."}),e("p",{children:"El algoritmo quedaría algo así:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:'1. Declarar dos variables, "suma" y "contador".'}),e("li",{children:"2. Asignarles los valores de 0 y 1 respectivamente."}),e("li",{children:'3. Crear un bucle "Mientras" donde la condición sea: "contador" <= 10.'}),e("li",{children:'4. Dentro del bucle, hacer que "suma" sea igual a ella misma más el valor de "contador".'}),e("li",{children:'5. Aumentar "contador" en 1.'}),e("li",{children:'6. Terminado el bucle, mostrar el valor de "suma" por pantalla.'})]})}),e("p",{children:"El diagrama de flujo de esta forma:"}),e("picture",{className:"diagrama-flujo-ejemplo",id:"diagrama-mod-5",children:e("img",{src:t,alt:"diagrama-ejemplo-intermedio-5"})}),e("p",{children:"Finalmente el pseudocódigo sería algo así:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO SumaDel1Al10

VAR
    suma, contador:ENTERO;

INICIO

    suma = 0;
    contador = 1;

    Mientras(contador <= 10) {
        suma = suma + contador;
        contador = contador + 1;
    }

    ESCRIBIR("La suma total es: ", suma);

FIN
          `})})}),e("p",{children:"Revisa y analiza bien el ejemplo, para un mayor entendimiento te daré la prueba de escritorio:"}),e("div",{className:"contenedor-tabla",children:e("table",{children:a("tbody",{children:[a("tr",{children:[e("th",{children:"Iteración"}),e("th",{children:'Variable "contador"'}),e("th",{children:'Variable "suma"'}),e("th",{children:"¿Contador <= 10?"})]}),a("tr",{children:[e("td",{children:"1"}),e("td",{children:"1"}),e("td",{children:"1"}),e("td",{children:"False"})]}),a("tr",{children:[e("td",{children:"2"}),e("td",{children:"2"}),e("td",{children:"3"}),e("td",{children:"False"})]}),a("tr",{children:[e("td",{children:"3"}),e("td",{children:"3"}),e("td",{children:"6"}),e("td",{children:"False"})]}),a("tr",{children:[e("td",{children:"4"}),e("td",{children:"4"}),e("td",{children:"10"}),e("td",{children:"False"})]}),a("tr",{children:[e("td",{children:"..."}),e("td",{children:"..."}),e("td",{children:"..."}),e("td",{children:"..."})]}),a("tr",{children:[e("td",{children:"10"}),e("td",{children:"10"}),e("td",{children:"55"}),e("td",{children:"True"})]})]})})}),e("h3",{className:"titulo-interno",children:"Bucle do-while (Hacer-Mientras)"})]}),a("div",{className:"parrafo-tip-flex",children:[a("div",{className:"parrafo",children:[e("p",{children:"El bucle do-while, al igual que el while, es un tipo de bucle que se utiliza para repetir una sección de código mientras se cumpla una determinada condición. La principal diferencia entre el do-while y el while es que en el do-while, la condición se evalúa después de cada iteración, mientras que en el while se evalúa antes de cada iteración. Esto significa que el cuerpo del do-while se ejecutará al menos una vez, independientemente de si la condición es verdadera o falsa."}),e("p",{children:"Para entender esto mejor hagamos el siguiente problema: Supongamos que queremos pedirle al usuario que introduzca un número entre 1 y 5, y mientras no lo haga correctamente, vamos a seguir preguntándole. Usaremos un do-while para asegurarnos de que se pida al menos una vez la entrada del usuario, y luego se compruebe si cumple con la condición."})]}),e(i,{mascota:r.mascota,contenido:r.contenido2})]}),a("div",{className:"parrafo-no-flex",children:[e("p",{children:"Comencemos por el algoritmo:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[e("li",{children:'1. Declarar una variable "numero".'}),e("li",{children:'2. Asignarle a "numero" el valor de 0.'}),e("li",{children:"3. Declarar bucle Hacer-Mientras"}),e("li",{children:'4. Dentro de "Hacer", escribiremos el mensaje "Introduce un número entre 1 y 5:".'}),e("li",{children:'5. Leeremos el número introducido y lo guardaremos en "numero".'}),e("li",{children:'6. En el "Mientras", revisaremos que: "numero > 1 OR numero < 5".'}),e("li",{children:"7. Si se cumple la condición, el Hacer-Mientras se volverá a ejecutar. Si no, terminaremos el programa."})]})}),e("p",{children:"El diagrama de flujo de esta forma:"}),e("picture",{className:"diagrama-flujo-ejemplo",id:"diagrama-mod-6",children:e("img",{src:m,alt:"diagrama-ejemplo-intermedio-6"})}),e("p",{children:"Finalmente nuestro pseudocódigo sería:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO NumeroEntre1y5

VAR
    numero:ENTERO;

INICIO

    Hacer {

        ESCRIBIR("Ingresa un número entre el 1 y 5:");
        LEER(numero);

    }Mientras(numero < 1 OR numero > 5);

FIN
          `})})})]})]}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"prácticas y ejercicios"})}),e("section",{children:e("div",{className:"parrafo-no-flex",children:e("p",{children:"Con todo lo visto hasta el momento, creo que ya estamos más que listos para que comiences a resolver por tu cuenta algunos ejercicios. Deberás intentar seguir las instrucciones de cada problema y hacer lo que se te pida en cada uno, recuerda que de igual manera te dejaré las posibles soluciones a cada problema por si en algún momento te atoras puedas echar un vistazo, pero trata de resolver todo por tu cuenta. (▀̿Ĺ̯▀̿ ̿)"})})}),e("div",{className:"btn-ejercicio",children:e(o,{to:"ejercicios_resolv_apren_inter_fu",children:e("button",{className:"link-ejercicio",children:"comenzar ejercicios nivel: intermedio"})})})]})};export{g as default};
