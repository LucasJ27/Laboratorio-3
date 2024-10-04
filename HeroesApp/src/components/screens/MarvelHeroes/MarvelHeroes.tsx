import { useEffect, useState } from "react";
import { heroesData } from "../../../data/heroes";
import { IHeroes } from "../../../types/IHeroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const MarvelHeroes = () => {
  const [heros, setHeroes] = useState<IHeroes[]>([]);
  const handleGetMarvelHeroes = () => {
    const result = heroesData.filter(
      (hero) => hero.publisher === "Marvel Comics"
    );
    setHeroes(result);
  };

  useEffect(() => {
    handleGetMarvelHeroes();
  }, []);

  return <ListHeroes heroes={heros} title="Heroes Marvel" />;
};
