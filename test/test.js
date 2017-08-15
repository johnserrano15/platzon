// Tener en cuenta que estamos usando requeri la forma de usar modulos en node porque al final esto,
// Se va correr en la terminal con mocha.
const expect = require('chai').expect
// Con el .. va arriba entonces el file que va requerir es el que esta en el main del package.json
const platzon = require('..').default

describe('#platzon', function () {

  it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
    const translation = platzon("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
    const translation = platzon("Zorro")
    const translation2 = platzon("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
    const translation = platzon("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
    const translation = platzon("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})