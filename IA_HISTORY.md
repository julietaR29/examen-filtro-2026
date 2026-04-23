# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Julieta Rodriguez
**Fecha:** 23/04/2026

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Este primer prompt lo utilice al finalizar los cambios en el HTML (punto 1).Sabia que tenia errores, mas que nada en la Accesibilidad y queria corroborar cuales era."
-->
```

### Lo que le pedí a la IA

```
<!--Necesito que mires con exactitud esta estructura de HTML, y me digas si ves errores de accesibilidad u algún otro.
Contesta simplemente lo que te pedí, sin explicaciones ni mucho texto. -->
```

### Análisis del resultado obtenido

```
<!--
La IA tomo un enfoque de "profesor", utilice el chat de Gemini con el cual venia analizando las diapositivas del curso durante estos dias.
Si y no, tuvo errores que pude notar facilmente y otros que logre notarlos con la repeticion de la pregunta desde distintos puntos de vista u horizonte.
Me resulto util la ayuda al momento de estructura, me faltaban alguno cierres y sin querer repeti un bloque dos veces.
-->
```

### Qué debí corregir manualmente y por qué

```
<!-
  - Tenia errores semanticos, me corrigio la accesibilidad ( u eso creo) pero utilizo muchos <DIV> innecesarios, al darme cuenta y decirle cambio su respuesta-
  - Lo note al leer el codigo, antes de hacer algun cambio en mi repo.
  - Desde mi punto de vista estaba incorrecto por el abuso de <DIV>, no llegue a darme cuenta de otros.
  - Utilice etiquetas semanticas.
 
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
 Al principio del punto 5, cuando tuve que comenzar el script. Si bien tengo conocimientos en codigo, me maree y no sabia por donde arrancar.
-->
```

### Lo que le pedí a la IA

```
<!-- Necesito que me ayudes con esta consigna, no me digas la solucion, simplemente necesito que me orientes con los pasos a seguir.Si tengo mas dudas te voy a ir preguntando (pegue la consigna)-->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - El mismo enfoque que en el prompt 1, segui utilizando el mismo chat. Antes de hacerlo le pregunte si habia superado los tokens posibles, por si se empezaba a olvidar.
  - Esta vez si, me ayudo bastante. Me guio para que cree el archivo, y despues para realizar algunas funciones.
  - Crear el script, al confudirme no me habia dado cuenta que al momento de preguntarle ni siquiera habia creado el archivo.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
 Si bien propuso las funciones de lógica matemática correctamente, inicialmente no incluía todas las funciones requeridas por la tabla de la consigna, como getPresentation. También detecté que en los ejemplos de uso por consola se estaban utilizando 'números mágicos' en lugar de las constantes declaradas (attack, defense). Corregí esto manualmente pasando las variables como argumentos en cada llamado a función para cumplir estrictamente con las buenas prácticas obligatorias y evitar penalizaciones técnicas.
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - Se olvidaba de la accesibilidad y tenia errores de anidacion.
  - No, siempre tuvo errores. (al menos los que yo pude notar)
  - Si,primero cambiaria. Utilizaria algun agente en vez del chat GPT/Gemini. La verdad es que nunca utilice uno y no tuve tiempo de hacer las pruebas suficientes para hacer el examen con ellas.
-->
```
