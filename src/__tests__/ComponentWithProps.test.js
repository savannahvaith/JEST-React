import { create } from 'react-test-renderer';
import ComponentWithProps from '../Components/ComponentWithProps';

describe(`Component with props render Tests`, () => {

    const props = { 
        headerText:`A header`,
        contentProp: `Some Content`,
        numericProp: 100, 
        valueProp: 10000, 
        expressionProp: 2+2, 
        functionProp: () =>`hello world`,
        objectProp:{
            key1: `key1 value`,
            key2: 2,
            key3: [`key3`,`array`,`values`]
        },
        arrayProp:[1,2,3]
    }


    let componentToTest; 

    beforeEach( () => {
        const TestInstance = create(<ComponentWithProps {...props}/>)
        componentToTest = TestInstance.root;
        console.log(componentToTest);
    });

    it.skip(`Should render "A header" in a h1`, () => {
        const h1Render = componentToTest.findByType(`h1`); // one specific elemeent in the tree
        // console.log(h1Render.children);
        expect(h1Render.children).toEqual([props.headerText]);
    });

    it.skip(`should render the text "Some Content¬ in the first P element`, () => {
        const firstP = componentToTest.findAllByType(`p`)[0];
        expect(firstP.children).toEqual([props.contentProp]);
    });

    it(`should render the first p tag`, () => {
        const num = componentToTest.findByProps({ className: "cpo"});
        console.log("NUM: "+ num);
        console.log("NUM.CHILDREN " + num.children);
        expect(num.children).toEqual([props.contentProp])
    });

    it.skip(`should render the text array`, () => {
        const num = componentToTest.findAllByProps({className: "nnd"});
        for(let i=0; i<props.arrayProp.length; i++){
            expect(num[i].children).toContain(props.arrayProp[i].toString());
        }
    });
})