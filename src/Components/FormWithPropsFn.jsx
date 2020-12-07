import { useState } from 'react';

const Form = ({ submit }) => {
    const [name, setName] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        submit({name});
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="name">What is your name?&nbsp;</label>
            <input type="text" name="name" 
            value={name} 
            onChange={e => {setName(e.target.value);}} />
            <input type="submit" value="submit"/>
        </form>
    );
}

export default Form; 