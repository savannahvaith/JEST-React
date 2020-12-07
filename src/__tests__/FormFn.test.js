import Form from '../Components/FormWithPropsFn';
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe(`Form Testing`, () => {
    describe(`onSubmit Tests`, () => {
        // create a fake function
        const mockSubmit = jest.fn(); 
        const data = "test name";

        it(`should update the name state when the text input is typed in`, () => {
            //arrange, act, assert

            //arrange
            const {container} = render(<Form submit={mockSubmit}/>);
            const nameInput = container.querySelector(`[name="name"]`);
            expect(nameInput.value).toEqual(``);

            // act - simulated typing
            userEvent.type(nameInput,data);

            // assert 
            expect(nameInput.value).toEqual(data);
        });

        it(`should call the handleSubmit() when the submit button is clicked`, () => {
            // arrange
            const {container} = render(<Form submit={mockSubmit}/>);
            const nameInput = container.querySelector(`[name="name"]`);
            const submitButton = container.querySelector(`[type="submit"]`);

            // act
            //1. simulated typing
            //2. click button
            userEvent.type(nameInput,data);
            fireEvent.click(submitButton);

            // assert
            expect(mockSubmit).toHaveBeenCalled(); 
            expect(mockSubmit).toHaveBeenCalledWith({name: data});
        })
    })
})