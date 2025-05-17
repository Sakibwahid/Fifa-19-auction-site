import React from 'react';
import { Input } from '../components/Input';
import { PasswordInput } from '../components/Password';

const About = () => {
    return (
        <div className='h-screen bg-sky-100'>
            <h1>About Us</h1>
            <p>Welcome to the About page!</p>
            <Input type="email" label="Email" placeholder='Enter your email'></Input>
            <PasswordInput label='Password'></PasswordInput>
        </div>
    );
};

export default About;