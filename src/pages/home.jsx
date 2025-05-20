import React from 'react';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Anchor } from '../components/Anchor';
const Home = () => {
    return (
        <div className='md:h-full p-2 relative flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <Text variant='heading' className='font-[orbitron] text-white text-center'>
                    Enjoy your FIFA like never before
                </Text>
                <Text variant='subheading' className='font-[rajdhani] text-white font-normal'>
                    Bid for your favourtie
                </Text>
                <div className='mt-4'>
                    <Button size='md'> <Anchor to="/Login" >Login</Anchor></Button>
                </div>

            </div>
        </div>
    );
};

export default Home;