import React, { useState, useEffect } from 'react';

export default function Conway() {
  const grid = 10; //variable qui défini le nombre de case par ligne, 10 ici
  const [statut, setStatut] = useState(Array(grid * grid).fill('bg-green-300')); //les statuts des cellules ici on applique dans une grille un état, morte par défaut et l'utilisateur doit choisir quel cellule vivante activé par un clic dans le test
  const [playing, setPlaying] = useState(false); //permet d'activer l'algo qui trie les cellules et de le désactiver pour jouer le tour suivant

  const updateSquareClick = (index) => {
    //fonction pour changer les cellules morte en vivante en démarrage, ça change la couleur bg-green-300 pour morte et 600 pour vivante
    if (playing) return;
    const updatedColors = [...statut];
    updatedColors[index] = 'bg-green-600';
    setStatut(updatedColors);
  };

  const play = () => {
    setPlaying(true);
  }; // pour activer le jeu

  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      //on défini un interval pour permettre au code de laisser de traiter les résultats
      const updatedColors = [...statut]; //on récupère la couleur du statut

      for (let i = 0; i < statut.length; i++) {
        const neighbors = getNeighbors(i); //on récupère l'id des voisins
        const greenCount = neighbors.filter(
          (neighbor) => statut[neighbor] === 'bg-green-600' //on filtre les cellules vivante
        ).length;

        if (statut[i] === 'bg-green-600') {
          //on vérifie si c'est vivant ou pas et on applique les effets
          if (greenCount < 2 || greenCount > 3) {
            updatedColors[i] = 'bg-green-300'; //ici la cellule devient morte
          }
        } else {
          if (greenCount === 3) {
            updatedColors[i] = 'bg-green-600'; //ici la cellule devient vivante
          }
        }
      }

      setStatut(updatedColors); //on update les changement de statut
      setPlaying(false); //on désactive le tour pour permettre de choisir des cellules pour refaire un tour
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [playing]);

  const getNeighbors = (index) => {
    //on récupère les voisins
    const neighbors = []; //on crée un tableau pour récupérer les voisins
    const row = Math.floor(index / grid);
    const col = index % grid;
    //on calcule la position du voisin

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (
          i >= 0 &&
          i < grid &&
          j >= 0 &&
          j < grid &&
          (i !== row || j !== col)
        ) {
          neighbors.push(i * grid + j); //avec la boucle on push dans le tableau les voisins
        }
      }
    }

    return neighbors; //et on le retourne
  };

  const createGrid = (index) => {
    //cette fonction crée la grille de jeu
    const squareGrid = [];

    for (let i = 1; i <= grid; i++) {
      //la boucle crée des cases (cellules) qui sont des bouttons
      for (let j = 1; j <= grid; j++) {
        const itemNumber = (i - 1) * grid + j; //numéro de la case
        squareGrid.push(
          <button
            key={itemNumber}
            className={`${
              statut[itemNumber - 1]
            } gap-1 w-16 h-16 border border-black text-center`}
            onClick={() => updateSquareClick(itemNumber - 1)} //on appel la fonction pour rendre la cellule vivante (changement de couleur)
          >
            {itemNumber}
          </button>
        );
      }
    }
    return squareGrid;
  };

  return (
    //dans le return on affiche le boutton pour jouer et la grille
    <div className='font-candara flex justify-evenly'>
      <button
        className='h-[60px] w-auto p-4 bg-green-600 rounded-2xl mt-[400px]'
        onClick={play}
        disabled={playing}
      >
        Activer le tour
      </button>
      <div className='flex justify-center items-center h-screen'>
        <div className=' grid grid-cols-10 grid-rows-10 gap-1 '>
          {createGrid()}
        </div>
      </div>
    </div>
  );
}
