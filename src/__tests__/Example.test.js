describe("A suite is just a function", () => {

    //parent level variables

    let a; 
    let b;

    it.skip(`it is just a spec/test`, () => {
        a = true; 
        expect(a).toBe(true);
        // expect(expected).toBe(received);
    });

    test.skip(`either test or it can be used`, () => {
        a = false; 
        b = `some String`; 
        expect(b).toContain(`me`);
    });

    test.skip(`there should only really be one expect call but more can be made`, () => {
        // if a parent level value is changed inside a spec/test, it will change for all other specs/tests
        // expect(a).toBeTruthy(); //fails
        expect(a).not.toBeTruthy();
    });

    it(`a should be undefined`, () => {
        expect(a).toBeUndefined();
    });
});

describe( "Testing Matchers",() => {
    //  - .toBe() - exact equality

    test("exact Equality", () => {
        expect(10+9).toBe(19);
    });

    // toEqual()  - it recursively checks every field in an object/array 
    test(`Object assignment`, () => {
        const data = {ham:true}; 
        data['cheese'] = false;
        expect(data).toEqual({ham:true, cheese:false});
    });

    // .not. - negation of any matcher

    test("Adding positive numbers is not zero", () => {
        for(let a=1; a<10; a++){
            for(let b=1; b<10; b++){
                expect(a+b).not.toBe(0);
            }
        }
    });


    // truthiness - distinguish between undefined, null and false 
    test("null", () => {
        const n = null; 
        expect(n).toBeNull(); // true; 
        expect(n).toBeDefined(); // true
        expect(n).not.toBeUndefined(); //true
        expect(n).toBeFalsy(); // true
        expect(n).not.toBeTruthy(); // true
    });

    test(`common matchers for numbers (2+2)`, ()=>{
        const expression = 2+2; 
        expect(expression).toBeGreaterThan(1); 
        expect(expression).toBeGreaterThanOrEqual(4); 
        expect(expression).toBeLessThan(5); 
        expect(expression).toBeLessThanOrEqual(4); 
        expect(expression).toBeGreaterThanOrEqual(2.5); // undefined, null, false, 
    });

    test(`decimal number`, () => {
        const value = 0.1 + 0.2; 
        // expect(value).toBe(0.3); // strict equality - this fails because its 0.3000000000004 not 0.3
        expect(value).toBeCloseTo(0.3);
    });


    test(`There is no i in team`, () => {
        expect("team").not.toMatch(/i/)
    });

    test("But there is a lie in believe", () => {
        expect("believe").toMatch(/lie/)
    });

    const shoppingList = ["apples", "chicken", "cheese", "wine", "watermelon"];

    test(`Is there wine in my list?`, () => {
        expect(shoppingList).toContain("wine");
    });

    // tests for errors/exceptions
    function compileCode(){
        throw new Error("oops.. something went wrong, use the correct JDK");
    }

    test(`CompileCode() function`, () => {
        expect(compileCode).toThrow();
        expect(compileCode).toThrow(Error); // expect Error Object
        // compileCode();
        // expect(compileCode).toHaveBeenCalled();
    })


});

// Create your own application - specifically for testing 
//  - .toEqual()
//  - .not.
//  - .toBeNull()
//  - toBeDefined()
//  - .not.toBeDefined()
//  - .toBeFalsy() / negation
//  - matcher for rouding numbers
//  - matcher for numbers, big, smaller, equal to
//  - RegExp
//  - array/Object
//  - a for loop of numbers 
// https://jestjs.io/docs/en/expect
