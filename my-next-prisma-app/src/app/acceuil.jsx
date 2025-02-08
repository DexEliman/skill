
import React from 'react';

import { Button } from "../components/ui/button";
import Link from 'next/link';



const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white via-gray-200 to-gray-800">
      <h1 className="text-8xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent drop-shadow-lg">SKILLLAB</h1>
      <p className="mt-6 text-3xl text-gray-700 font-semibold">Empowering users to learn effortlessly.</p>

      <div className="mt-8 flex space-x-4">
        {/* Additional content can be added here */}

        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600">Déjà membre? Connecte-toi ici!</p>

          <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Log IN</button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600">Nouveau ici? Crée un compte maintenant!</p>

          <button className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">Sign IN</button>
        </div>
      </div>

    </div>


  );
};

export default HomePage;
