# Jest testing
- In this project, code includes how to test a react application using jest
- Focusing on Component with props
- Mocking functions
- Axios requests
- Forms
- Snapshot Testing
- and more...

To run tests execute command:
`npm test`

Coverage: 
`npm test -- --coverage`

Specific files
`npm test -- filename.test.js`


## Break down 
- Testing in React
    1.  Objectives
        1.  Using Jest to test React application
        2.  We need to unit test components
        3.  Including snapshots, dom testing and other
        4.  Overview of jest testing library
        5.  Run and access code-coverage reports for tests
    2.  Setting up the test environment
        1.  If created with -create-react-app we already have everything we need in the package.json file, testinglibrary, jest, react, and user events already installed
        2.  `npm test` will be used to run test - hotloads so it will update and run all of them as and when needed
        3.  default test should pass
        4.  Tests should have .test. extension - tests dont need to be stored in the same files.
        5.  folderstructure - __test__ - identified as non production code folder
    3. Jest
       1. Focuses on simplicity, works on all js and other frameworks such as Vue, Angular and more
       2. Follows BDD - to ensure that each line of JS is properly unit tested.
       3. PRovides small syntax to test small units of entire application instead of testing it as a whole
       4. Advantages:
          1. Doesn't depend on any other framework
          2. Doesn't require any DOM
          3. Clean and obvious syntax
       5. Suite
          1. Basic building block of the framework
          2. Collections of similar type test cases written for a specific file / function
          3. Can be nested
          4. Contain a `descibe` function and atleast one call to an `it` or `test` function
             1. The descibe function is not necessarily required though
             2. Descibe() - call to this function requires a string, used to identify the suite and a function that contains calls to the `it` or `test` functions
             3. `it()` or `test()` - Calls to these require a string, used to identify the test case it represents and a function that defines how the test will be evaluated - through calls to the `expect` function. - no difference between the two - `it()` is just an alias for `test()`
             4. `expect()` - can have more than one expect call in a test but discouraged. 
       6. Matcher
          1. Matchers - how to compare the expected result with the actual 
          2. Theres a LOAD of inbuild matchers
          3. Each does a boolean comparison of the actual and expected outputs
          4. Common examples:
             1. `.anything()` = Matches anything expect null or undefined
             2. `.toBe(expected), .toEqual(expected)` = Expect the actual value to be === to the expected, for toEqual, objects and their properties can be compared
             3. `toBeFalsy(), toBeNull(), toBeUndefined()` = Expect the actual value to be falsy, expicitly null or explicitly undefined
             4. `.toContain(expected)` = actual to contain expected - can be in an array as well as a substring in a string
             5. `toBeGreaterThan(expected), toBeGreaterThanOrEqualTo(expected)` = actual to be > or >= expected
             6. `toBeLessThan(expected), toBeLessThanOrEqualTo(expected)` = actual to be < or <= expected
             7. `.not.` = Invert the result of the matcher
       7. Coverage - `npm test -- --coverage` - result stored in /coverage folder
       8. Demo `demo/app.test.js`
       9. The what and how of testing
          1.  react takes data and displays it, we should test such aspects
          2.  We could either render a component tree and assert on its output or run end-to-end tests, which isn't really concerned with react components
          3.  "The more your tests resemble the way your software is used, the more confidence they can give you"
          4.  Components that don't change on their output - use snapshot testing, to check if the render is the same 
          5.  Component that has interactivity - check to see if it renders exactly as we expect
          6.  We need to be able to test components with dependencies - mocking strategies
          7.  hooks - some are inbuilt- no need to check the hook but check the behaviour 
          8.  Routing - react-router-dom - little need to test because it is already tested extensively 
       10. Snapshot testing - useful for making sure the UI will not change unexpectedly - react-test-renderer - needs to be installed 
           1.  Create() - passed to any component
           2.  Makes pure JS object as a representation of the react component
           3.  use ToJson() and toMatchSnapshot() in an expect statement to compare 
           4.  toMatchSnapshot() compares the created component with the snapshot (and creates a snapshot) if one doesn't exist
           5.  Process:
               1.  Render a ui component (use create() - doesn't use a real dom)
               2.  take a snapshot 
               3.  compare snapshot to reference snapshot file stored - the test should assert if the two are the same
               4.  Test fails if two snapshots don't match:
                   1.  Because the change was unexpected
                   2.  Because the snapshot needs to be updated to a new version of the UI Component
            6. demo `App.test.js`
         11. Testing components with props
             1.  Should we test if props are rendered? Yesss!
             2.  Aaprt from any defualt props - DP are part of the core react code and so already tested. Same with proptypes
             3.  We should see if the value of props received are rendered.
             4.  To test the component that has props, use the test-renderer and find elemetns in the components based on the props - findallbytype findallbyprops()
             5.  Demo `ComponentWithProps.test.js`
         12. Mocking components for testing
             1.  Why mock components? - to unit test a component that renders other compontents
             2.  Not interested in the subcomponents implementations
             3.  jest.Mock() - string of the path
                 1.  Supply a callback in options that returns a function to mock the component
                     ```js
                     jest.mock(`.component/componentToMock`, () => {
                        return function MyMockedComponent(){
                           return <span>Mocked component </span>
                        }
                     });
                     ```
                  2. Put componentwithprops in the App - snapshot will not fail - press u - could cause issues as the component is rendered in the future with new values - we should mock the component in this case
                  3. Demo `App.test.js`
         13. Testing State Event Interactions
             1.  Don't need to test setState function because this is done through the core react stuff
             2.  Events that causes side effects should be tested if its fired by the user, we should test the associated function to check if the output we get is correct
             3.  We can render a form and check if the initial value is the same, then fire an onchange, then assert the value of the input is what we changed it to. 
             4.  We need a function that will actually trigger the event - ACT. 
             5.  Act() -> prepares a component for assertion, it can wrap function calls within the component such as triggering event handlers. If an event is to change a value, an object with a target object that sets a value has to be supplied
         14. Mocking Functions
             1.  Useful for when fuctions are passed in as props to a component
             2.  Allows spying on function calls to ensure that things happen 
             3.  Sometimes, state is held in teh parent (inverse data flow), if trying to unit test - its difficult 
             4.  `const functionToMock = jest.fn()`
             5.  jest.fn() - returns a new unused mock function with an optional implementation
             6.  Can then be used as a prop when creating components
                  ```js
                  const testRenderer = create(<MyComponent functionAsProp={functionToMock}/>);
                  ```
             7. Not concerned about implementation of mock function, just happy to if its called with the correct argument 
             8. Matchers - 
                1. toHaveBeenCalled() = expects the function to have been called atleast once 
                2. toHaveBeenCalledWith(obj) = Expect the function spied on to have been called with these particular arguments atleast once
             9. Demo - `FormWithPropsfn.jsx` - need to use reacttestinglibrary
         15. Testing Components Asynchronously
             1.  Need to test teh asynchronous calls made
                 1.  Is the data handled correctly
                 2.  Are error handled
                 3.  Do conditional renders work
             2. There are so many moving parts and time delays to deal with, need a simple method for testing.
             3. `App2.jsx`