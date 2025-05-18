import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../auth/Authcontext';
import { motion } from "framer-motion";
import { Text } from '../components/Text';
import PlayerList from '../components/PlayerList';
const CreateSquad = () => {

  return (
    <div className='flex justify-start  min-h-screen px-2 lg:px-6'>
      <motion.div
        className="z-10 flex flex-col gap-6 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-col z-10 mt-10 md:gap-12' >
          <div className='flex justify-center items-center gap-4'>
            <div className='md:w-[80%] lg:w-[60%] flex flex-col gap-4'>
              <Text variant='subheading' className='text-white text-2xl font-bold' >Player Selection guidlines</Text>
              <Text variant='para' className='' >This is a listed view of all the players instead of a detailed or card view, making the selection process simpler. To check a player's full details, just click on them, and you'll be redirected to their profile. Want to add them to your squad? Just click the Select button—just like shopping for your dream players!.</Text>
            </div>
          </div>
          <div >
            <PlayerList ></PlayerList>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default CreateSquad;