# 09 - Efectos - II

## Preparaci贸n del ejercicio

隆Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 馃

## Enunciado

Esta vez no te daremos tantas pistas! All谩 vamos...!

Crea una aplicaci贸n que muestre la hora actual en formato HH:mm:ss.

1. En el componente `App`, crea un estado llamado `time` que inicialmente tenga como valor un string vac铆o `''`.
2. Utiliza la funci贸n `setInterval` para que en cada segundo (1000 ms) se actualice el estado `time` con la hora actual en formato `HH:mm:ss`.
3. Utiliza la funci贸n `clearInterval` para limpiar el intervalo cuando el componente se desmonte. Recuerda que para esto, puedes devolver una funci贸n al final de tu funci贸n principal de useEffect para limpiar intervalos, aqu铆 un ejemplo:

```jsx
useEffect(() => {
  // Contenido de mi useEffect...

  return () => {
    // C贸digo que se lanza cuando el componente se demonta o rerenderiza, 煤til para limpiar intervalos y eventos globales.
  };
}, []);
```

4. Muestra la hora actual en la pantalla.
5. 隆Dale estilos para que parezca un reloj digital! 鈴?
