// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

describe("Just a random one", () => {
    test("1+1=2", () => {
        let expression = 1+1; 
        expect(expression).toEqual(2);
    });
});