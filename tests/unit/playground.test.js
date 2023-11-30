import { describe, it, expect } from 'vitest'
// Vamos a escribir por ejemplo una prueba en este banco de pruebas (test suite)
// que se centren en matemáticas básicas en javascript
// Solo estamos describiendo lo que vamos a testear
describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })
})

/*
NOTAS FINALES:
// DESCRIBE
// Entonces por ejemplo en describe escribiriamos en un string
// el nombre del componente que vamos a probar
*/
