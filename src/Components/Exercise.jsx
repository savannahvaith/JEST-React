import {useState} from 'react'; 

const Exercise = ({submit}) => {
    const [username, setUsername] = useState(``);
    const [email, setEmail] = useState(``);

    const submitForm = (e) => {
        e.preventDefault(); 
        submit({username,email}); 
    }

    return(
        <>
        <h3>Form Fam</h3>
        <form onSubmit={e => submitForm(e)}>
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="email" name="email" value={email} onChange={ e=> setEmail(e.target.value)}/>
            <input type="submit" value="submit"/>
        </form>
        </>
    )

}

export default Exercise; 