// callbacks, promises, axios method
const fetch = require('node-fetch');


function simpleFunction () {
    return "hello";
}

async function asyncFunc1(){
    return 1; // Promise.resolve(1);
}

describe("async functions", () => {
    it(`testing simple function`, () => {
        expect(simpleFunction()).toEqual("hello");
    });

    it(`Asyncfunc1() returns 1`, () => {
        expect(asyncFunc1()).resolves.toEqual(1);
    });

    test(`await function`, () => {
        // await
        async function iUseawait(){
            let promise = new Promise((resolve, reject) => {
                setTimeout( () => resolve("bazinga"),2000);
            });
            let result = await promise; 
        };
        expect(iUseawait()).resolves.toMatch("bazinga");
    })

    test(`await function reject`, () => {
        // await
        function fetchData(){
            return new Promise((resolve, reject) => {
                reject("error");
            });
        }
        expect.assertions(1); 
        return fetchData().catch(e => expect(e).toMatch("error"));
    });
});

describe(`function for testing external data`, () => {
    test(`Get info from an api`, () => {
        function getUsers(){
            return new Promise(async(resolve, reject) => {
                let response = await fetch("https://api.github.com/users");
                let users = response.json(); 

                for(let i=0; i<users.length; i++){
                    console.log(users[i].login);
                }

                if(users !== null){
                    try{
                        resolve("Got all the info I need!");
                    }catch(error){
                        reject("Something went wrong");
                    }
                }
            }); 
        }
        expect(getUsers()).resolves.toMatch("Got all the info I need!");
    })
})