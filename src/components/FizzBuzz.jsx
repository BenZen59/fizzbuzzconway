import React, { useState } from 'react';

export default function FizzBuzz() {
  const [number, setNumber] = useState([]); //State pour récupérer la valeur de la textbox
  const [results, setResults] = useState([]); //State qui permet de définir Fizz, Buzz ou FizzBuzz
  const [arrayColorChoose, setArrayColorChoose] = useState(2); //Permet de définir la couleur dans le tableau colorArray

  const colorArray = [
    'text-yellow-500',
    'text-red-800',
    'text-black',
    'text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-800',
  ]; //Fizz Jaune, Buzz Rouge et Noir pour les autres résultats

  const showResults = () => {
    if (results === 'FizzBuzz') {
      //Ici on vérifie que le résultats est FizzBuzz pour lui permettre d'afficher les 2 couleurs
      return (
        <p>
          <span className={`font-bold text-3xl ${colorArray[0]}`}>Fizz</span>
          <span className={`font-bold text-3xl ${colorArray[1]}`}>Buzz</span>
        </p>
      );
    } else {
      return (
        //Sinon on affiche Fizz, Buzz ou le number avec une couleur unique (qui sera défini dans la fonction handleChangeNumber)
        <p className={`font-bold text-3xl ${colorArray[arrayColorChoose]}`}>
          {results}
        </p>
      );
    }
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value); //on récupére la valeur de la textbox
    if (e.target.value % 3 === 0 && e.target.value % 5 === 0) {
      //on vérifie le nombre dans la textbox est divisible par 3 et par 5 (idem pour seulement 3 et 5 dans les else if)
      setResults('FizzBuzz');
    } else if (e.target.value % 5 === 0) {
      setArrayColorChoose(1); //On sélection la couleur rouge dans le tableau qui est en position 1

      setResults('Buzz'); //On affiche Buzz
    } else if (e.target.value % 3 === 0) {
      setArrayColorChoose(0);
      setResults('Fizz'); //On affiche Fizz
    } else {
      setArrayColorChoose(2);
      setResults(e.target.value); //On affiche le nombre si rien ne correspond
    }
  };

  return (
    //Le mini formulaire
    <div className='m-6'>
      <label htmlFor='number' className='font-bold'>
        Number
      </label>
      <br />
      <input
        type='text'
        id='number'
        name='number'
        value={number}
        onChange={handleChangeNumber} //Appel de la fonction qui permet de rendre le champs dynamique
        className='border border-gray-600 border-solid rounded px-2 py-1'
      />
      {showResults()}
    </div> //On appel ShowResults pour afficher le résultat avec la couleur qui correspond
  );
}
