https://www.markdownguide.org/cheat-sheet/

### WHAT IS TESTING

- Testing means writing code that validates that our implementation code works as expected:
- we write assertions to validate certain expectations of our code
- Reduces manual testing.

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
3. E2E Test (UI TEesting point to point)
