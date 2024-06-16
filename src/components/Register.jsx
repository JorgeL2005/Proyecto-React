import React, {useState} from 'react';
import { register } from '../api';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTeacher, setIsTeacher] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await register(name, email, password, isTeacher)
            alert('Usuario registrado con exito!')
        } catch (error) {
            console.error('Ha ocurrido un error:',error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type='text' placeholder='Name' value = {name} onChange={(e) => setName(e.target.value)} required />
            <br/>
            <input type='email' placeholder='Email' value = {email} onChange={(e) => setEmail(e.target.value)} required />
            <br/>
            <input type='password' placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)} required />
            <br/>
            <br/>
            <label>Teacher <input type='checkbox' checked={isTeacher} onChange={(e) => setIsTeacher(e.target.checked)} /></label>
            <br/>
            <br/>
            <button type='submit'>Register</button>
        </form>
    );
};

export default Register;