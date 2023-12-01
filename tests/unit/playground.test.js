import { describe, it, expect } from 'vitest'
// import { evenOrOdd } from '../../src/playground'
import { evenOrOdd } from '@/playground'

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  // we can have nested describe function
  // it's only a way to organizate this outputs in terminal
  describe('even or odd', () => {
    describe('when number is even', () => {
      it('indicates the number is even', () => {
        expect(evenOrOdd(4)).toBe('Even')
      })
    })
    describe('when number is odd', () => {
      it('indicates the number is odd', () => {
        expect(evenOrOdd(15)).toBe('Odd')
      })
    })
  })
})

/*
NOTAS FINALES:
// DESCRIBE
// Entonces por ejemplo en describe escribiriamos en un string
// el nombre del componente que vamos a probar
*/
