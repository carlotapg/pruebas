EJERCICIO:

Haz un script, con el lenguaje de programación de tu preferencia, que imprima por
pantalla una lista ordenada de números del 1 al 100 sustituyendo los múltiplos de 3
por la cadena “cyber”, los múltiplos de 5 por la cadena “click” y los que son múltiplos
de 3 y de 5 por “cyberclick”. 2. Haz un script que soluciona la siguiente situación

PRIMERA PARTE:

Imagina que estás en la cola para alquilar un coche, pero no avanza. La persona de la
empresa está desesperada… Nadie puede hacer log in en la aplicación! Y preguntan
si hay algun developer en la sala. Miras alrededor y eres la única persona que tiene
los conocimientos. Te acercas y te comentan el problema:

La base de datos de contraseñas parece que está corrupta, algunas de las
contraseñas que aparecen listadas no deberían de estar, ya que incumplen la política
de empresa respecto contraseñas.
Para debugar el problema, han creado una lista de contraseñas guardadas en el
sistema corrupto y la política que deben de cumplir esas contraseñas
or ejemplo:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Cada línea representa la política y la contraseña que debe cumplirla. La política de
contraseñas indica el número mínimo y el número máximo de veces que se debe repetir la
letra que hay a continuación. Así pues, “1-3 a” significa que la contraseña debe de contener
la letra “a” un mínimo de 1 y un máximo de 3 veces. Siguiendo esta norma, en el ejemplo
anterior hay un total de 2 contraseñas válidas.
¿Cuántas contraseñas válidas hay en tu input?

COMENTARIOS:
He considerado preferible comentar directamente en el código para describir el paso a paso con
más detalle.
Al principio me ha costado saber como trabajar con input.txt, ya que nunca antes había utilizado
fs.readFileSync. Por suerte ha sido fácil de averiguar y me llevo un nuevo aprendizaje 😊

SEGUNDA PARTE:

Aparentemente, has validado las contraseñas anteriores de forma correcta, pero el sistema
sigue sin recibir lo que espera. La persona del mostrador se da cuenta de su error… Te ha
explicado la política de contraseñas de su trabajo anterior!! 🙈.

En realidad, la política describe lo siguiente: dos posiciones en la contraseña donde el
número indica la posición del carácter (siendo 1 el primero, 2 el segundo… es decir, no hay
índice 0). Entonces, exactamente 1 de las dos posiciones que aparecen deben de contener
el carácter marcado, otras ocurrencias del carácter son irrelevantes.
Entonces:

1-3 a: abcde es válida: la posición 1 contiene a y la posición 3 no.
1-3 b: cdefg es no válida: Ni la posición 1 ni la 3 contienen el carácter b.
2-9 c: ccccccccc es no válida. Las dos posiciones 2 y 9
contienen el carácter c.

Con esta política: ¿Cuántas contraseñas son válidas en el input?
