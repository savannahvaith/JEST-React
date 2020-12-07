import { useState } from 'react';

const Form = ({ submit }) => {
    const [name, setName] = useState(``);

    return (
        <form>
            <label htmlFor="name">What is your name?&nbsp;</label>
            <input type="text" name="name" 
            value={name} 
            onChange={e => {setName(e.target.value); console.log(e)}} />
        </form>
    );
}

export default Form; 