
import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';
import userEvent from '@testing-library/user-event';

describe('Greetings component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greetings/>);
    
        //Act
        //...nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders Good to see you if button was not clicked', () => {
        //Arrange
        render(<Greetings/>)

         //Act
        //...nothing

        //Assert
        const outputElement = screen.getByText("good to see you", {exact: false});
        expect(outputElement).toBeInTheDocument();
    })
    test('renders changed! if the button was clicked', () => {
        //Arrange
        render(<Greetings />)

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });
    test('does not render good to see you if the button was click', () => {
        //Arrange
        render(<Greetings />)

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText("good to see you", {exact: false});
        expect(outputElement).toBeNull();
    });
});
