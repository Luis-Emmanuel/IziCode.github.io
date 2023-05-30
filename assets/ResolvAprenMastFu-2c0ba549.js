import{j as a,a as e,L as s}from"./index-6d317ad1.js";import{p as n}from"./pymuIco-54c3c2da.js";import{M as r}from"./MascotaTip-d9c57f34.js";const i="/assets/recetas-7321eb38.png",l="/assets/colaborativo-4bdfabf4.png",c="/assets/herencia-052d3af0.png",m=()=>{const o={mascota:n,contenido:`
        En el ejemplo de los cubos de Minecraft, las propiedades definen sus características como el tamaño del cubo, el material, su durabilidad, etc. Por otro lado, los métodos son acciones que puedes realizar con ese cubo dentro del juego. Por ejemplo, en el caso de los cubos de lava, pueden expsandirse y quemar otros cubos.
        `,contenido2:`
        La programación orientada a objetos (POO) es un enfoque de programación que se basa en la creación de objetos con propiedades y comportamientos, permitiendo una mejor organización y reutilización del código. Dicho de otra manera es todo lo que hemos estado haciendo desde el tema de "objetos".
        `};return a("div",{className:"curso-pagina resolv-apren-mast-fu",children:[e("div",{className:"titular-curso",children:e("h1",{children:"resolviendo y aprendiendo nivel: master"})}),e("section",{children:a("div",{className:"parrafo-flex",children:[e("img",{src:n,alt:"pymu"}),e("p",{children:"Finalmente, llegamos a la parte final del curso, donde veremos lo que consideramos los últimos dos temas clave para cubrir todo lo básico dentro de la programación. Presta atención, ya que abordaremos las funciones y los objetos, que son herramientas ampliamente utilizadas en programación. Durante esta etapa, te animamos a resolver problemas más complejos y a poner en práctica todo lo que has aprendido hasta ahora. Si en algún momento te encuentras con dificultades, recuerda que siempre puedes repasar las lecciones anteriores y consultar nuestras respuestas para ayudarte a avanzar. ¡No te desanimes y continúa esforzándote, el éxito está al alcance de tus manos! (╹ڡ╹ )"})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"funciones"})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[e("p",{children:'Las funciones son herramientas poderosas en programación que nos permiten organizar y reutilizar el código de manera eficiente. Podemos pensar en ellas como "mini programas" especializados que realizan tareas específicas. (⊙ˍ⊙)'}),e("p",{children:"Imagínate que estás preparando una receta para hacer un pastel, en lugar de escribir la receta completa en un solo bloque de instrucciones, divides el proceso en pasos más pequeños. Cada paso sería una función. Por ejemplo, una función para mezclar los ingredientes secos, otra función para batir los huevos, y así sucesivamente. Luego, puedes combinar estas funciones en el orden necesario para obtener el resultado final: el delicioso pastel."}),e("picture",{children:e("img",{src:i,alt:"recetas"})}),e("p",{children:"La analogía de la receta de pastel nos muestra cómo las funciones pueden ser útiles. Al dividir una tarea compleja en partes más pequeñas y manejables, podemos mantener el código más organizado y legible. Además, cuando necesitamos hacer el mismo proceso varias veces, podemos reutilizar la función sin tener que repetir todo el código nuevamente."}),e("p",{children:"Las funciones también nos permiten trabajar en equipo de manera más eficiente. Imagina que estás trabajando en un proyecto con otros programadores, cada uno puede encargarse de escribir diferentes funciones y luego combinarlas para construir una aplicación completa. Esto se asemeja a un equipo de cocina donde cada miembro tiene una tarea específica, y todos trabajan juntos para lograr un resultado final exitoso."}),e("picture",{children:e("img",{src:l,alt:"colaborativo"})}),e("p",{children:"Ahora, con todo el contexto explicado, pasemos a ver cómo podemos hacer uso de las funciones, así como su sintaxis en nuestros pseudocódigos. (ง •_•)ง"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
FUNCIÓN sumarNumeros(num1, num2){
    VAR
        suma: ENTERO;
    
    INICIO

        suma = num1 + num2;
        RETORNA suma;

    FIN
}

ALORITMO ejemploFuncion;

    VAR
        num1, num2, suma: ENTERO;

    INICIO

        ESCRIBIR("Ingresa el primer número:");
        LEER(num1);
        ESCRIBIR("Ingresa el segundo número:");
        LEER(num2);

        suma = sumarNumero(num1, num2);

        ESCRIBIR("El resultado de la suma es:", suma);

    FIN
          `})})}),a("p",{children:["Hay bastante que explicar con el ejemplo anterior dado, como te habrás dado cuenta definimos y creamos la función ",e("span",{children:"sumarNumeros"})," e incluso la colocamos antes de lo que llevamos haciendo como nuestros programas principales, esto es porque dependiendo del lenguaje que trabajes, casi que por norma general, las funciones se suelen colocar al principio de todo nuestro código y no van dentro de lo que llamamos ",e("span",{children:"función main"}),", que en este caso lleva el nombre de",e("span",{children:" ejemploFunción"}),"."]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
FUNCIÓN sumarNumeros(num1, num2){
    VAR
        suma: ENTERO;
    
    INICIO

        suma = num1 + num2;
        RETORNA suma;

    FIN
}
          `})})}),a("p",{children:["Vamos a enfocarnos solo en la función, estas dependiendo del lenguaje se definen de una u otra forma, nosotros con pseudocódigo las escribiremos tal cual como ",e("span",{children:"FUNCIÓN"}),". Estas siempre deben llevar un nombre, por lo general deberá ser lo más descriptivo posible ya que eso nos hará más fácil de leer el código y saber qué hace la función con solo leer su nombre."]}),a("p",{children:["Seguido de eso, notarás que hay unos paréntesis ",e("span",{children:"()"}),", dentro de estos por lo general, es donde le decimos a la función si va a recibir o no alguna variable, comúnmente llamados ",e("span",{children:"parámetros"}),". Estos pueden estar vacíos o no. En este caso, no lo están y le estamos enviando dos números. Si no hacemos esto, la función no podría trabajar con dichas variables y no funcionaría, luego podrás ver que podemos declarar variables dentro de ella. Estas variables ",e("span",{children:"son exclusivas de la función"}),", lo que significa que no podemos acceder a ellas de manera convencional en otras partes del código."]}),a("p",{children:["Finalmente, tenemos un ",e("span",{children:"RETORNA"}),". Con esto, es la única forma de hacer que una o más variables dentro de una función puedan interactuar con otras funciones o con nuestro código principal, como es el caso de este ejemplo. En este caso, le estamos diciendo a la función que va a retornar el valor de una variable, en este caso, el de ",e("span",{children:"suma"}),"."]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALORITMO ejemploFuncion;

    VAR
        num1, num2, suma: ENTERO;

    INICIO

        ESCRIBIR("Ingresa el primer número:");
        LEER(num1);
        ESCRIBIR("Ingresa el segundo número:");
        LEER(num2);

        suma = sumarNumero(num1, num2);

        ESCRIBIR("El resultado de la suma es:", suma);

    FIN
          `})})}),a("p",{children:['Ahora, si observamos el código principal, verás que se parece a todos los que hemos estado haciendo hasta el momento, salvo por un par de detalles que debemos considerar. El primero es que notarás que también estamos declarando una variable llamada "suma". Como expliqué antes, esto no afectará a la variable "suma" que está dentro de la función. El otro detalle es la línea de código ',e("span",{children:"suma = sumarNumero(num1, num2);"}),'. Observarás que estamos asignando a "suma" lo que la función "sumarNumero" retorna, y también estamos enviando los parámetros a la función. En caso de que sea una función que ',e("span",{children:"no retorna nada"}),", simplemente la escribiríamos sin más. Veamos cómo se vería este código sin el ",e("span",{children:"RETORNA"}),":"]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
FUNCIÓN sumarNumeros(num1, num2){
    VAR
        suma: ENTERO;
    
    INICIO

        suma = num1 + num2;
        ESCRIBIR("El resultado de la suma es:", suma);

    FIN
}

ALORITMO ejemploFuncion;

    VAR
        num1, num2: ENTERO;

    INICIO

        ESCRIBIR("Ingresa el primer número:");
        LEER(num1);
        ESCRIBIR("Ingresa el segundo número:");
        LEER(num2);

        sumarNumero(num1, num2);
    FIN
          `})})}),a("p",{children:["Habiendo explicado todo lo anterior, pasemos a resolver un problema relacionado. Necesitamos crear un programa que calcule el área de un triángulo. Para ello, debemos hacer uso de una función llamada ",e("span",{children:"calcularAreaTriangulo"}),", que recibirá como parámetros la base y la altura del triángulo."]}),e("p",{children:"Empezando por el algoritmo, puede ser algo así:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[a("li",{children:["1. Definir una función llamada ",e("span",{children:"calcularAreaTriangulo"})," que tome como parámetros la base y la altura del triángulo."]}),e("li",{children:"2. Dentro de la función, calcular el área del triángulo utilizando la fórmula: área = (base * altura) / 2."}),e("li",{children:"3. Retornar el valor del área calculada."}),e("li",{children:"4. En el algoritmo principal, solicitar al usuario ingresar la base y la altura del triángulo."}),a("li",{children:["5. Llamar a la función ",e("span",{children:"calcularAreaTriangulo"})," pasando como argumentos la base y la altura ingresadas por el usuario."]}),a("li",{children:["6. Almacenar el resultado retornado por la función en una variable llamada ",e("span",{children:"areaTriangulo"}),"."]}),e("li",{children:"7. Mostrar por pantalla el valor del área del triángulo."})]})}),e("p",{children:"Finalmente su pseudocódido es el siguiente:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
FUNCION calcularAreaTriangulo(base, altura){
    VAR
        area: FLOTANTE;

    INICIO
        area = (base * altura) / 2;
        RETORNA area;
    FIN
}

ALGORITMO ejemploAreaTriangulo;
    VAR
        base, altura, areaTriangulo: FLOTANTE;

INICIO

    ESCRIBIR("Ingrese la base del triángulo:");
    LEER(base);
    ESCRIBIR("Ingrese la altura del triángulo:");
    LEER(altura);

    areaTriangulo = calcularAreaTriangulo(base, altura);

    ESCRIBIR("El área del triángulo es: ", areaTriangulo);

FIN
          `})})}),e("p",{children:"Te habrás dado cuenta de que omití el diagrama de flujo. Esto se debe a que, en este punto, puede volverse confuso y contraproducente para tu aprendizaje, a partir de ahora nos centraremos únicamente en algoritmos, pseudocódigos y, como siempre, te alentamos a que realices pruebas de escritorio. ( •̀ ω •́ )✧"})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"funciones dentro de funciones"})}),e("section",{children:a("div",{className:"parrafo-no-flex",children:[e("p",{children:"Algo muy común en el aspecto de las funciones es tener que llamar a otras funciones dentro de una misma. Esto puede sonar algo confuso, pero en realidad no lo es, veamos un ejemplo para que lo entiendas mejor:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
FUNCION funcion2() {

    INICIO

        ESCRIBIR("¡Hola desde la función 2!");
    
    FIN
}

FUNCION funcion1() {

    INICIO

        ESCRIBIR("¡Hola desde la función 1!");
        funcion2();

    FIN
}

ALGORITMO ejemploFuncionesAnidadas;

INICIO
    funcion1();
FIN

          `})})}),a("p",{children:["Como te darás cuenta, es algo muy simple pero ilustrativo de cómo podemos organizar y modularizar nuestro código utilizando funciones. En este ejemplo, tenemos dos funciones:",e("span",{children:" funcion1"})," y ",e("span",{children:"funcion2"}),". La función ",e("span",{children:"funcion1"}),"realiza una acción específica, que en este caso es mostrar un mensaje por pantalla, luego realiza el llamado a la función ",e("span",{children:"funcion2"}),". A su vez, la función",e("span",{children:" funcion2"})," también tiene su propia tarea, que es mostrar otro mensaje por pantalla."]}),a("p",{children:["Al organizar nuestro código de esta manera, podemos reutilizar la función",e("span",{children:" funcion2"})," en otros lugares si es necesario, evitando repetir el mismo código en diferentes partes del programa. Además, al tener funciones anidadas, podemos crear una secuencia de acciones más complejas y estructuradas. Por ejemplo, podríamos llamar a ",e("span",{children:"funcion2"})," varias veces dentro de ",e("span",{children:"funcion1"}),"para repetir una serie de tareas."]})]})}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"objetos"})}),a("section",{children:[e("div",{className:"parrafo-no-flex",children:a("p",{children:["Llegamos al tema final de este curso de fundamentos de programación, y no por ello menos importante: ",e("span",{children:"los objetos"}),". Los objetos desempeñan un papel crucial en múltiples áreas de la programación y son una herramienta poderosa que seguramente encontrarás muy interesante. (⌐■_■)"]})}),a("div",{className:"parrafo-tip-flex",children:[a("div",{className:"parrafo",children:[e("p",{children:"Los objetos son una parte fundamental de la programación orientada a objetos. Podemos entender un objeto como una entidad que combina características (propiedades) y acciones (métodos) relacionadas entre sí. Los objetos nos permiten representar y modelar entidades del mundo real de una manera más cercana."}),e("p",{children:"Imaginemos un ejemplo utilizando el popular videojuego Minecraft. En Minecraft, los cubos son elementos fundamentales del juego, y cada uno tiene sus propias características y acciones. Podemos considerar a los cubos como objetos. Cada cubo tiene una propiedad como su tipo (madera, piedra, tierra, etc.) y puede realizar acciones como ser colocado, destruido o interactuar con otros objetos."})]}),e(r,{mascota:o.mascota,contenido:o.contenido})]}),a("div",{className:"parrafo-no-flex",children:[e("p",{children:"La importancia de los objetos radica en su capacidad de encapsular datos y comportamientos relacionados en una sola entidad. Esto nos permite organizar y estructurar nuestro código de una manera más eficiente y modular. Los objetos nos permiten crear código más legible, mantenible y reutilizable, ya que podemos definir plantillas (clases) que representan a los objetos y luego crear múltiples instancias (objetos individuales) basadas en esas plantillas."}),e("p",{children:"Manteniendo la idea de los cubos de Minecraft veamos un ejemplo de como se vería en nuestros pseudocódigos el uso de objetos:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
OBJETO Cubo{
    PROPIEDAD
        tipo: TEXTO;
        posicionX: ENTERO;
        posicionY: ENTERO;
        posicionZ: ENTERO;

    METODO Colocar(){
        INICIO
            ESCRIBIR("Colocando el cubo de tipo", tipo, "en la posición (", posicionX, ",", posicionY, ",", posicionZ, ")");
        FIN
    }

    METODO Destruir(){
        INICIO
            ESCRIBIR("Destruyendo el cubo de tipo", tipo, "en la posición (", posicionX, ",", posicionY, ",", posicionZ, ")");
        FIN
    }
}

ALGORITMO EjemploObjetoCubo;

VAR
    miCubo: Cubo;

INICIO

    // Crear un cubo
    miCubo.tipo = "Piedra";
    miCubo.posicionX = 5;
    miCubo.posicionY = 0;
    miCubo.posicionZ = 10;

    // Llamar al método Colocar del cubo
    miCubo.Colocar();

    // Llamar al método Destruir del cubo
    miCubo.Destruir();

FIN
          `})})}),e("p",{children:"Hay mucho que comentar en el ejemplo que acabo de darte así que vamos parte por parte revisando el ejemplo, lo primero que notarás es que el objeto al igual que las funciones se define fuera del codigo principal, siempre debe ir al principio de todo, incluso si tu programa hace uso de funciones como las del tema anterior, los objetos deben ir por encima de estas. Ahora veamos mas a profundidad el objeto en si mismo:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
OBJETO Cubo{
    PROPIEDAD
        tipo: TEXTO;
        posicionX: ENTERO;
        posicionY: ENTERO;
        posicionZ: ENTERO;

    METODO Colocar(){
        INICIO
            ESCRIBIR("Colocando el cubo de tipo...");
        FIN
    }

    METODO Destruir(){
        INICIO
            ESCRIBIR("Destruyendo el cubo de tipo...");
        FIN
    }
}
          `})})}),a("p",{children:["Usamos la palabra ",e("span",{children:"OBJETO"})," para declararlos, seguida del nombre del objeto, en este caso ",e("span",{children:"cubo"}),". A continuación, definimos sus ",e("span",{children:"propiedades"}),", que son equivalentes a declarar variables, especificando su nombre y tipo de dato a almacenar. Por último, los ",e("span",{children:"metodos"})," son funciones asociadas al objeto, pero utilizamos la palabra ",e("span",{children:"METODO"})," para diferenciarlos claramente. Al igual que una función, los métodos pueden recibir parámetros o llamar a otros métodos dentro de ellos."]}),e("p",{children:"Ahora pasemos a ver de nuevo el código principal:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
ALGORITMO EjemploObjetoCubo;

VAR
    miCubo: Cubo;

INICIO

    // Crear un cubo
    miCubo.tipo = "Piedra";
    miCubo.posicionX = 5;
    miCubo.posicionY = 0;
    miCubo.posicionZ = 10;

    // Llamar al método Colocar del cubo
    miCubo.Colocar();

    // Llamar al método Destruir del cubo
    miCubo.Destruir();

FIN
          `})})}),a("p",{children:["Verás que en el apartado de las variables tenemos algo diferente, una variable de nombre",e("span",{children:" miCubo"})," de tipo ",e("span",{children:"cubo"})," y no es un error, por lo general cuando queremos hacer uso de un objeto debemos decirle al programa (ya sea con una sintaxis u otra) que queremos una variable del tipo objeto, así ",e("span",{children:"miCubo"}),"tiene todas las propiedades y métodos que antes definimos dentro del objeto",e("span",{children:" cubo"}),"."]}),a("p",{children:["Luego de eso verás algo que no habíamos hecho uso antes, los apuntadores, si bien de momento no vamos a profundizar en ello ya que será cosa de otros cursos, lo que debes entender es que para poder asignar los valores a nuestras propiedades necesitamos colocar el nombre de la variable en este caso ",e("span",{children:"miCubo"})," seguido de un punto, el cual es el apuntador, y luego de esto el nombre de la propiedad a la que queremos acceder para luego, en este caso, asignarles un valor."]}),a("p",{children:["De la misma forma se hace uso de los metodos, con el apuntador le decimos al programa que metodo queremos hacer uso, en este caso hacemos uso de ambos metodos, ",e("span",{children:"Colocar()"})," y",e("span",{children:" Destruir()"}),"."]})]})]}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"herencia de objetos"})}),a("section",{children:[a("div",{className:"parrafo-tip-flex",children:[a("div",{className:"parrafo",children:[e("p",{children:"La herencia es un concepto importante en la programación orientada a objetos que nos permite crear nuevos objetos basados en objetos existentes. Imagina que en Minecraft existen diferentes tipos de cubos, como cubo de hierro, cubo de madera y cubo de piedra. Cada uno de estos cubos tiene características y comportamientos únicos, pero también comparten algunas propiedades y acciones similares, como su tamaño y la capacidad de ser colocado en el mundo del juego."}),e("p",{children:'En lugar de tener que definir todas las propiedades y métodos para cada tipo de cubo desde cero, podemos utilizar la herencia para crear una estructura en la que un objeto "hijo" pueda heredar las propiedades y métodos de un objeto "padre". Esto nos permite ahorrar tiempo y esfuerzo en la programación.'})]}),e(r,{mascota:o.mascota,contenido:o.contenido2})]}),a("div",{className:"parrafo-no-flex",children:[a("p",{children:["Por ejemplo, podemos tener un objeto ",e("span",{children:'"padre"'})," llamado ",e("span",{children:'"Cubo"'})," que contiene propiedades y métodos básicos compartidos por todos los tipos de cubos. Luego, podemos crear objetos ",e("span",{children:'"hijos"'})," como ",e("span",{children:'"CuboHierro"'}),", ",e("span",{children:'"CuboMadera"'}),"y ",e("span",{children:'"CuboPiedra"'}),", que heredan todas las propiedades y métodos del objeto",e("span",{children:' "Cubo"'})," y, además, pueden tener sus propias características específicas."]}),e("picture",{children:e("img",{src:c,alt:"herencia"})}),a("p",{children:["Esto significa que, si queremos agregar un nuevo tipo de cubo, podemos crear un objeto",e("span",{children:'"hijo"'})," con solo las propiedades y métodos adicionales que lo hacen único, sin tener que volver a escribir todo el código común a todos los cubos. Veamos un ejemplo para entender un poco mejor esto de la herencia:"]}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
OBJETO CuboBase{
    PROPIEDAD
        lado: ENTERO
}

OBJETO CuboDecorado HEREDA DE CuboBase{
    PROPIEDAD
        color: CADENA

    METODO Construir(lado, color){
        CuboBase.lado = lado
        CuboDecorado.color = color
        ESCRIBIR("Construyendo un cubo decorado de lado", lado, "y color", color)
    }
}

ALGORITMO EjemploHerencia

VAR
    miCuboDecorado: CuboDecorado

INICIO

    miCuboDecorado = NUEVO CuboDecorado
    miCuboDecorado.Construir(5, "rojo")
    ESCRIBIR("Cubo decorado construido con éxito.")

FIN
          `})})}),a("p",{children:["En este ejemplo, tenemos dos objetos: ",e("span",{children:"CuboBase"})," y ",e("span",{children:"CuboDecorado"}),". El objeto ",e("span",{children:"CuboDecorado"})," hereda las propiedades y métodos del objeto",e("span",{children:" CuboBase"}),". La clase ",e("span",{children:"CuboBase"})," tiene una propiedad lado, mientras que la clase ",e("span",{children:"CuboDecorado"})," tiene una propiedad adicional color. El método Construir en la clase ",e("span",{children:"CuboDecorado"})," asigna los valores de lado y color a las propiedades correspondientes y muestra un mensaje indicando la construcción del cubo decorado."]}),a("p",{children:["En el algoritmo principal, creamos una instancia del objeto ",e("span",{children:"CuboDecorado"}),"llamada ",e("span",{children:"miCuboDecorado"})," y luego llamamos al método Construir para construir el cubo decorado con un lado de 5 y color rojo. Finalmente, se muestra un mensaje indicando que el cubo decorado ha sido construido con éxito."]}),e("p",{children:"Esto es solo un ejemplo básico para ilustrar el concepto de herencia en la programación orientada a objetos. En aplicaciones más complejas, la herencia se utiliza para establecer jerarquías de clases y reutilizar el código de forma eficiente. (╹ڡ╹ )"}),e("p",{children:"Bueno vamos a resolver un sencillo problema para terminar de interiorizar todo lo que hemos aprendido, Vamos a crear un programa que maneje diferentes tipos de cubos, incluyendo cubos decorados y cubos especiales. Cada tipo de cubo tiene propiedades y comportamientos distintos."}),e("p",{children:"Nuestro algoritmo puede quedar de esta manera:"}),e("div",{className:"lista-no-flex",children:a("ol",{children:[a("li",{children:["1. Definir la clase base ",e("span",{children:"CuboBase"})," con la propiedad ",e("span",{children:"lado"})," y el método ",e("span",{children:"CalcularVolumen"}),"."]}),a("li",{children:["2. Definir la clase ",e("span",{children:"CuboDecorado"})," que hereda de ",e("span",{children:"CuboBase"})," con la propiedad adicional color y el método Pintar."]}),a("li",{children:["3. Definir la clase ",e("span",{children:"CuboEspecial"})," que hereda de ",e("span",{children:"CuboBase"})," con la propiedad adicional material y el método ",e("span",{children:"CambiarMaterial"}),"."]}),e("li",{children:"4. Crear instancias de cubos decorados y cubos especiales."}),e("li",{children:"5. Establecer los valores de las propiedades de cada cubo."}),e("li",{children:"6. Realizar operaciones específicas para cada tipo de cubo, como pintar el cubo decorado o cambiar el material del cubo especial."}),e("li",{children:"7. Calcular el volumen de cada cubo y mostrar los resultados."})]})}),e("p",{children:"Finalmente nuestro pseudocódigo queda de esta forma:"}),e("div",{className:"code-contenedor",children:e("pre",{children:e("code",{children:`
OBJETO CuboBase{
    PROPIEDAD
        lado: ENTERO;

    METODO CalcularVolumen()
        RETORNA lado * lado * lado;
}

OBJETO CuboDecorado HEREDA DE CuboBase{
    PROPIEDAD
        color: CADENA;

    METODO Pintar()
        ESCRIBIR("Pintando el cubo decorado de color", color);
}

OBJETO CuboEspecial HEREDA DE CuboBase{
    PROPIEDAD
        material: CADENA;

    METODO CambiarMaterial(nuevoMaterial)
        material = nuevoMaterial;
}

ALGORITMO EjemploHerenciaCubos

VAR
    miCuboDecorado: CuboDecorado;
    miCuboEspecial: CuboEspecial;
    volumen: ENTERO;

INICIO

    miCuboDecorado = NUEVO CuboDecorado;
    miCuboDecorado.lado = 5;
    miCuboDecorado.color = "rojo";
    miCuboDecorado.Pintar();
    volumen = miCuboDecorado.CalcularVolumen();

    ESCRIBIR("El volumen del cubo decorado es:", volumen);

    miCuboEspecial = NUEVO CuboEspecial;
    miCuboEspecial.lado = 3;
    miCuboEspecial.material = "acero";
    miCuboEspecial.CambiarMaterial("madera");
    volumen = miCuboEspecial.CalcularVolumen();

    ESCRIBIR("El volumen del cubo especial es:", volumen);

FIN
          `})})})]})]}),e("div",{className:"subtitulo-curso",children:e("h2",{children:"prácticas y ejercicios"})}),e("section",{children:e("div",{className:"parrafo-no-flex",children:e("p",{children:"Con todo lo visto hasta el momento, creo que ya estamos más que listos para que comiences a resolver por tu cuenta algunos ejercicios. Deberás intentar seguir las instrucciones de cada problema y hacer lo que se te pida en cada uno, recuerda que de igual manera te dejaré las posibles soluciones a cada problema por si en algún momento te atoras puedas echar un vistazo, pero trata de resolver todo por tu cuenta. (▀̿Ĺ̯▀̿ ̿)"})})}),e("div",{className:"btn-ejercicio",children:e(s,{to:"ejercicios_resolv_apren_mast_fu",children:e("button",{className:"link-ejercicio",children:"comenzar ejercicios nivel: master"})})})]})};export{m as default};
