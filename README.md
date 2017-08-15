# Platzon

Platzon es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install platzon
```

## Uso

```
import platzon from 'platzon'

platzon("Programar") // Program
platzon("Zorro") // Zorrope
platzon("Zarpar") // Zarppe
platzon("abecedario") // abece-dario
platzon("sometemos") // SoMeTeMoS
```

## Créditos
- [John Serrano](https://twitter.com/@jandrey15)

## Licencia

[MIT](https://opensource.org/licenses/MIT)