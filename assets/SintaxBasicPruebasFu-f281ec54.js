import{j as a,a as e}from"./index-05365979.js";import{j as o}from"./javiIco-2b9c03bd.js";const n=()=>a("div",{className:"curso-pagina sintaxis-pruebas-fu",children:[e("div",{className:"titular-curso",children:e("h1",{children:"sintaxis básica del pseudocódigo y pruebas de escritorio"})}),e("section",{children:a("div",{className:"parrafo-flex",children:[e("img",{src:o,alt:"javi"}),e("p",{children:"En este tema vamos a empezar a aplicar ciertos conocimientos que ya hemos visto, principalmente variables y tipos de datos, los necesitaremos porque ya vamos a comenzar a ver cómo podemos empezar a escribir nuestros primeros programas en pseudocódigo y pronto comenzaremos a combinar esto con los diagramas de flujo para la resolución de futuros problemas. ( ﾉ ﾟｰﾟ)ﾉ"})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"estructura básica del pseudocódigo"})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[a("p",{children:["Si recuerdas los ejemplos antes dados por Cecy, los pseudocódigos tenían un título indicado con la palabra ",e("span",{children:"ALGORITMO"}),", un ",e("span",{children:"INICIO"}),", una sección",e("span",{children:"VAR"})," y un ",e("span",{children:"FIN"}),":"]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO NombreDelAlgoritmo;

VAR

INICIO

FIN
          `})})}),a("p",{children:["Esta va a ser nuestra estructura básica que vamos a seguir para escribir nuestros pseudocódigos, la cual, si lo ves, es bastante sencilla, dondé primero definimos un nombre para nuestro algoritmo, con el cual damos a entender de manera rápida de qué trata nuestro programa. Seguido por el apartado ",e("span",{children:"VAR"}),", en el cual escribiremos las variables que vayamos a necesitar para nuestros programas. Además, recuerda que las variables pueden tener distintos tipos de datos, los cuales ya vimos con anterioridad:"]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
VAR
    numero1, numero2, resultado: ENTERO;
    numeroDecimal: REAL;
    cadenaCaracteres: CADENA;
    booleano: BOOLEANO;
          `})})}),a("p",{children:["Como puedes notar en el ejemplo, suceden cosas interesantes, como el hecho de que si vamos a declarar más de una variable del mismo tipo, podemos ponerlas todas en una sola línea y al final de ésta colocar de qué tipo de variable se tratan, como es en el caso de las variables de tipo ",e("span",{children:"ENTERO"}),". Otra cosa a destacar es que estamos usando mayúsculas para dejar en claro los tipos de variables o de la sección a la que pertenece ese bloque del pseudocódigo. Finalmente, otra cosa muy importante a destacar son las ",e("span",{children:"sangrías"}),". Estas son importantes en pseudocódigo (y en otros lenguajes de programación) porque ayudan a organizar y estructurar el código de manera clara y legible. Conforme vayamos viendo más elementos del pseudocódigo y más ejemplos, te darás cuenta de la gran importancia de éstas. (⌐■_■)"]}),e("p",{children:"Ahora pasemos a ver un ejemplo parecido a los que Cecy te dejo con anterioridad:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO SumaDosNumeros;

VAR
    numero1, numero2, resultado: ENTERO;

INICIO
    numero1 = 5;
    numero2 = 7;

    resultado = numero1 + numero2;

    ESCRIBIR("El resultado de la suma es: ", resultado);
FIN
          `})})}),e("p",{children:"Analizalo un poco por tu cuenta antes de leer la explicación. (⌐■_■)"}),a("p",{children:["¿Ya lo analizaste? Bueno ahora pasare a explicarte que sucede, este pseudocódigo representa un algoritmo que suma dos números (5 y 7 en este caso) y muestra el resultado por pantalla. Las variables ",e("span",{children:'"numero1"'}),", ",e("span",{children:'"numero2"'})," y ",e("span",{children:'"resultado"'})," son de tipo ",e("span",{children:'"ENTERO"'})," y se declaran en la sección ",e("span",{children:'"VAR"'}),". En la sección ",e("span",{children:'"INICIO"'})," se asignan los valores de los números y se realiza la operación de suma, guardando el resultado en la variable ",e("span",{children:'"resultado"'}),". Finalmente, en la última línea se muestra el resultado por pantalla utilizando la función ",e("span",{children:'"ESCRIBIR"'}),"."]}),a("p",{children:["Como podras darte cuenta la estrucutra de lo que hace nuestro programa siempre va a estar dentro de ",e("span",{children:"INICIO"})," y ",e("span",{children:"FIN"}),". También con esto te daras cuenta en la forma en la que se ",e("span",{children:"asignan valores a las variables"}),", para ello estamos usando el signo ",e("span",{children:'"="'}),", que en programación NO es lo mismo que igualdad como sucede en las matemáticas y un ultimo detalle. ¿Notaste los",e("span",{children:" ;"})," al final de cada linea de codigo? Estos nos ayudan a definir cuando termina una linea de codigo y pasar a la siguiente, si bien lenguajes como",e("span",{children:"Python"})," no hacen uso de esta caracteristica o en ",e("span",{children:"JavaScript"})," que es algo opcional, hay otros que es una obligación usarlos como viene siendo ",e("span",{children:"C"})," o ",e("span",{children:"Java"}),"."]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO SumaDosNumeros;

VAR
    numero1, numero2, resultado: ENTERO;
    numeroDecimal: REAL;
    cadenaCaracteres: CADENA;
    booleano: BOOLEANO;

INICIO
    numero1 = 5;
    numero2 = 7;
    numeroDecimal = 12.5;
    cadenaCaracteres = "hola soy Javi";
    booleano = True;
FIN
          `})})})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"lectura y escritura de información"})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[a("p",{children:["Algo que hemos estado usando, pero no me he detenido a explicarte del todo bien, es el proceso de leer y escribir datos por ",e("span",{children:'"pantalla"'}),". Muchas veces te habrás topado con programas que te piden que ingreses algún dato para que éste haga algo con eso. El ejemplo más sencillo que podemos pensar ahora es una calculadora básica, donde para sumar dos números debemos ingresarlos y después recibimos el resultado en pantalla."]}),a("p",{children:["Pues para esto utilizaremos las funciones ",e("span",{children:"LEER"})," y ",e("span",{children:"ESCRIBIR"}),", volvamos al ejemplo de sumar dos números como el que Cecy te mostró anteriormente:"]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO SumarDosNumeros;

VAR
    numero1, numero2, resultado: ENTERO;

INICIO

    ESCRIBIR("Ingrese el primer número:");
    LEER(numero1);

    ESCRIBIR("Ingrese el segundo número:");
    LEER(numero2);

    resultado = numero1 + numero2;

    ESCRIBIR("El resultado de la suma es:", resultado);

FIN
          `})})}),a("p",{children:["Como te puedes dar cuenta, usamos la etiqueta ",e("span",{children:"ESCRIBIR"})," para poder mostrar algún mensaje en pantalla. Si te fijas, lo que los caracteriza también es el hecho de que dichos mensajes están ",e("span",{children:"entre comillas"}),". Esto es un estándar en prácticamente todos los lenguajes de programación al momento de querer mostrar algo en pantalla. Otro detalle es que si te fijas en el último",e("span",{children:"ESCRIBIR"}),", notarás que después del mensaje hay una ",e("span",{children:"coma seguida de la variable resultado"}),", esto lo hacemos para indicar que queremos mostrar el valor de la variable junto con el mensaje. Esto también es algo común en la mayoría de los lenguajes de programación, donde solo varía la forma en que se escribe dicha línea de código."]}),a("p",{children:["Y finalmente, solo nos queda analizar ",e("span",{children:"LEER"}),", que no es más que la acción de asignar a una variable el valor que reciba del usuario. De igual forma, lo podemos encontrar en diversos lenguajes. Este siempre lo vamos a colocar justo después de un ",e("span",{children:"ESCRIBIR"}),", donde le solicitemos al usuario que ingrese un valor."]})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"hagamos pruebas de escritorio"})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[e("p",{children:"Ahora bien, aunque el pseudocódigo es una herramienta muy útil para planificar y estructurar algoritmos, no es un lenguaje de programación real que pueda ser ejecutado directamente en una computadora. ⊙﹏⊙∥"}),a("p",{children:["Por lo tanto, es importante verificar si nuestro pseudocódigo está funcionando correctamente antes de empezar a escribir el código en algún lenguaje de programación. Para lograr esto, podemos hacer uso de las ",e("span",{children:"pruebas de escritorio"}),", que consisten en simular la ejecución del algoritmo paso a paso en papel o en una pizarra, y así analizar el comportamiento del programa en diferentes situaciones o escenarios. Con estas pruebas, podemos detectar posibles errores o problemas en nuestro algoritmo, lo que nos permite corregirlos antes de implementar el código en un lenguaje de programación real y ahorrar tiempo y esfuerzo en el proceso de depuración."]}),e("p",{children:"Para que esto quede más claro veamos una prueba de escritorio del ejemplo anterior:"}),e("div",{className:"contenedor-tabla",children:e("table",{children:a("tbody",{children:[a("tr",{children:[e("th",{children:"Variables"}),e("th",{children:"Valor inicial"}),e("th",{children:"Valor después de la instrucción"})]}),a("tr",{children:[e("td",{children:"numero1"}),e("td",{children:"5"}),e("td",{children:"5"})]}),a("tr",{children:[e("td",{children:"numero2"}),e("td",{children:"3"}),e("td",{children:"3"})]}),a("tr",{children:[e("td",{children:"resultado"}),e("td",{children:"0"}),e("td",{children:"8"})]})]})})}),e("p",{children:"Analízala un poco, ya que en los próximos temas empezaremos a profundizar en todo esto. Resolveremos problemas, haremos diagramas de flujo, seguidos de pseudocódigos y sus respectivas pruebas de escritorio. (ง •_•)ง"})]})})]});export{n as default};
