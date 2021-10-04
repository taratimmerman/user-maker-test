# User Maker App Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Inconvienient Dependencies

A function in testing may have inconvenient dependencies on other objects. To isolate the behavior of the function, it's often desirable to replace the other objects with mocks that simulate the behavior of the real objects. Replacing objects is especially useful if the actual objects are impractical to incorporate into the unit test.

Another use of mocks is as "spies" because they let us spy on the behavior of a function that is called by some other code. Mock functions can keep track of calls to the function and the parameters passed in those calls. We can even define an implementation for the mock, but that's optional. Simpler mocks that implement only enough behavior to execute test code are sometimes called "stubs."

### Lambda School 3.1 React Testing Notes

Module Study Guide: [Testing React](https://learn.lambdaschool.com/tracks/web-development/units/webapplications-ii/sprints/advanced-web-applications/)

Let's implement a helper function with an uncomfortable dependency that makes the helper impure (reliant on something outside of its scope) and, therefore, harder to test:

1. Install the uuid npm library using ```npm i uuid``` and make use of it in the following simple component:
    ```javascript
    import uuid from "uuid";

    export const makeUser = (firstName, lastName) => {
        return {
        id: uuid(),
        fullName: `${firstName} ${lastName}`
        };
    };
    ```

2. Testing expected output against actual output would be complex because ```uuid()``` generates a new, random id each time. We can give it a try, though. Note the use of ```.toEqual()``` to make our assertion. It compares the nested properties of objects, which we need to check here:
    ```javascript
    import { makeUser } from "../utils/makeUser";

    test("generates a user with an id and a full name", () => {
        // Arrange
        const expected = { id: "abcde", fullName: "Peter Parker" }; // fishy...

        // Act
        const actual = makeUser("Peter", "Parker");

        // Assert
        expect(actual).toEqual(expected);
    });
    ```
![Random ID complexity error](/src/assets/error.png)

>By the way, this kind of test is called a unit test - a test for a single unit of code, like an isolated function like makeUser. You'll learn more about unit testing in the backend unit, but we can see what is happening here with the AAA framework.

3. To get around this problem, we can stub out (create) a fake version of uuid that will replace the real one during the execution of the test. Outside of the test block, at the top level of the test file, place the following code:
    ```javascript
    jest.mock("uuid", () => () => "abcde");
    ```

Let's break it down. As the first argument to ```jest.mock()```, we pass the path to the module we want to replace. As the second argument, we pass a callback that returns whatever it is we want the faked thing to be. We wish for ```uuid``` to become a silly stub function that always returns the same string: ```uuid() // "abcde"```. Our tests should be passing now!

#### Challenge
There is a way to centralize mocks that are often used (think  ```uuid```, or ```axios```) in external files to be used in test suites without even bothering with imports. Go to the Jest docs and see if you can find out how!