import { create , act } from 'react-test-renderer';
import Form from '../Components/Form';

describe(`Form testing`, () => {
    describe(`Name input testing`, () => {
        it(`Should update the value in name when onChange is fired`, () => {
            const data = `Billy`;
            const instance = create(<Form/>);
            const formRoot = instance.root; 

            const input = formRoot.findByProps({name:`name`});

            expect(input.props.value).toEqual(``);

            // act()
            act( () => input.props.onChange({target:{value:data}}));

            // assert that the value of the input is billy
            expect(input.props.value).toEqual(data);
        })
    })
})