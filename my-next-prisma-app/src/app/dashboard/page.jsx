"use client"; // Active le mode client

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Logique que tu souhaites exécuter côté client
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // Rediriger vers la page de connexion si pas de token
    }

    // Simuler une récupération de données ou autre logique ici
    setData("Bienvenue sur le tableau de bord");

  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? <p>{data}</p> : <p>Chargement...</p>}
    </div>
  );
}
