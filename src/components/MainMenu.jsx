import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div className='w-[412px] h-auto font-candara shadow-lg border border-black border-solid border-opacity-20 mt-10 ml-[40%] rounded-3xl pb-6'>
      <h3 className='text-4xl text-center mt-6 mb-6'>Choix de l'exercice</h3>
      <div className='flex justify-evenly'>
        <Link
          to='/fizzbuzz'
          className='bg-gradient-to-r from-yellow-300 to-red-700 text-white font-bold p-4 rounded-2xl '
        >
          Exercice 1 FizzBuzz
        </Link>
        <br />
        <Link
          to='/conway'
          className='bg-green-700 text-white font-bold p-4 rounded-2xl'
        >
          Exercice 2 Conway
        </Link>
      </div>
    </div>
  );
}
