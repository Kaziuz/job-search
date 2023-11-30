https://www.markdownguide.org/cheat-sheet/

### WHAT IS TESTING

- Testing means writing code that validates that our implementation code works as expected
- We write assertions to validate certain expectations of our code
- Reduces manual testing

### WHAT IS A UNIT TEST ?

- A **unit test** a single piece of your program in isolation
- A **unit test** should be lightweight and should run fast
- If there are dependencies, the unit test should mock or stub them out

## Quick Fix for testing issues

Before starting to run test units, open the package.json in your project and make sure the test:unit command has the following script:

> "test:unit": "vitest --environment jsdom"

### Vitest - Framework

- Test runner that uses Vite build tool; super-fast
- Similar syntax to jest
- Vue testing library is going to simulate rendering or mounting our component in a browser like environment in which we can intecract with it much like a user can

[Vite-native testing framework](https://vitest.dev/)

### Github repo vitest

Wraps vue test utils and dom testing library under the hood

[vue-testing-library-github-repo](https://github.com/testing-library/vue-testing-library)

## Order for executing diferents testing:

1. Unit test
2. Integration test
3. E2E Test (UI Testing point to point)

### Minimal example for unit testing

```javascript
import { describe, it, expect } from 'vitest'

/*
 * Describe: used to define a set or "suite" of related tests. Allows you to
 * benchmarks (performance test) so that the reports are clearer and more structured
 * It's a way to provide a chapter heading and a organizational structure
 * https://vitest.dev/api/#describe
 */
describe('describe name', () => {
  /*
   * it: is an alias for test, and both are used to define an individual test within a block
   * describe or at the top level from the test file.
   * NORMALLY THE NAME THAT IS PASSED TO THE TEST DOES NOT FOCUS ON THE IMPLEMENTATION,BUT IN * FUNCTIONALITY.
   * Example1: Does it or does that
   * Example2: Show this component, shoe modal on the screen
   * https://vitest.dev/api/#test
   */
  it('it name', () => {
    /**
     * expect: used to create assertions within tests. Assertions are functions
     * that can be called to assert a statement about the expected behavior of the code.
     * This is where you check if the value of a variable is equal to a specific value, or the * invocation of a function or a class
     * if it fails, it will throw an error and the test will fail
     * HERE IS WRITTEN THE BEHAVIOUR WE ARE TESTING
     * https://vitest.dev/api/expect.html
     */
    expect('assertion').chaiFunction()
  })
})
```

For run test unit write in terminal

```sh
npm run test:unit
```
