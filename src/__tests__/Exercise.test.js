import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Exercise from '../Components/Exercise';

describe(`Form Testing`, () => {
    const mockSubmitFunction = jest.fn();
    const data = "savannah";
    const emailInfo = "sav@abc.com";

  
    it(`Check if username updates`, () => {
        //arrange
        const {container} =  render(<Exercise submit={mockSubmitFunction}/>);
        const userNameInput = container.querySelector(`[name="username"]`);
        expect(userNameInput.value).toEqual(``); // passing - wohoo
        
        // act - simulated typing
        userEvent.type(userNameInput,data); 
        
        // assert
        expect(userNameInput.value).toEqual(data);
        expect(userNameInput.value).toEqual("savannah");
    });
    
    it(`should check if the email updates`, () => {
        //arrange
        const {container} =  render(<Exercise submit={mockSubmitFunction}/>);
        const emailInput = container.querySelector(`[name="email"]`);
        expect(emailInput.value).toEqual(``);

        // act - simulated typing
        userEvent.type(emailInput, "sav@abc.com");

        // assert
        expect(emailInput.value).toEqual("sav@abc.com");

    });

    it(`should call the handleSubmit function`, () => {
        const { container } = render(<Exercise submit={mockSubmitFunction} />);
        const userNameInput = container.querySelector(`[name="username"]`);
        const emailInput = container.querySelector(`[name="email"]`);
        const submitButton = container.querySelector(`[type="submit"]`);

        //act - do something with our form
        userEvent.type(userNameInput, data);
        userEvent.type(emailInput, emailInfo );
        fireEvent.click(submitButton); // clicks the submit button

        // assert
        expect(mockSubmitFunction).toHaveBeenCalled(); // its calling the function 
        expect(mockSubmitFunction).toHaveBeenCalledTimes(1);
        expect(mockSubmitFunction).toHaveBeenCalledWith({ username : data, email : emailInfo });
    });
});