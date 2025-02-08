

import React from 'react';

import { Button } from "../components/ui/button";
import Link from 'next/link';



const HomePage = () => {

  return (
    <>
      <div className="container">
        <h1 className="title">
          <span className="lightBlue">Skill</span>
          <span className="darkBlue">Lab</span>
        </h1>
      </div>

      <div className="container">
        <h2 className="greetings">
          Bienvenue
        </h2>
      </div>

        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600">Déjà membre? Connecte-toi ici!</p>
          <Link href="/login">
              <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Log IN</button>
          </Link>

        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600">Nouveau ici? Crée un compte maintenant!</p>
          <Link href="/signup">
              <button className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">Sign IN</button>
          </Link>
          
        </div>








      <div className="container">
        <p className="phrases">Tkt ya pas d' Authentification</p>
        <Link href="/dashboard">
          <Button className="button">Entre</Button>
        </Link>
      </div>
    </>
  );
}
