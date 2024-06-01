import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
export const Loader = () => {
  
const didYouKnowList = useMemo(() => [
  "Honey never spoils; archaeologists found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
  "A group of flamingos is called a 'flamboyance'.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896; Zanzibar surrendered after 38 minutes.",
  "Honeybees can recognize human faces.",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
  "The first computer programmer was Ada Lovelace, who wrote the first algorithm for Charles Babbage's Analytical Engine in the mid-1800s.",
  "A small child could swim through the veins of a blue whale.",
  "The longest word in the English language without a vowel is 'rhythms'.",
  "Octopuses have three hearts.",
  "The world's largest desert is Antarctica.",
  "A parliament of owls is called a 'parliament'.",
  "The longest time between two twins being born is 87 days.",
  "The Great Wall of China is not visible from the moon with the naked eye.",
  "The world's oldest known recipe is for beer.",
  "Bananas are berries, but strawberries aren't.",
  "Cows have best friends and can become stressed when they are separated.",
  "The smell of freshly-cut grass is actually a plant distress call.",
  "The total weight of ants on Earth is comparable to the total weight of all the humans on Earth.",
  "The inventor of the frisbee was turned into a frisbee. Walter Morrison's ashes were molded into a frisbee after he passed away.",
  "The shortest war in history lasted for just 38 to 45 minutes between Britain and Zanzibar in 1896.",
  "There are more possible iterations of a game of chess than there are atoms in the known universe.",
  "A single rainforest can produce 20% of the Earth's oxygen.",
  "A jiffy is an actual unit of time; it is defined as the time it takes for light to travel one centimeter in a vacuum (about 33.3564 picoseconds).",
  "A crocodile cannot stick its tongue out.",
  "The fingerprints of koalas are virtually indistinguishable from those of humans, so much so that they could be confused at a crime scene.",
  "Polar bear skin is actually black, and their fur is not white; it's clear.",
  "The world's largest snowflake was recorded in 1887 in Montana; it was 15 inches wide.",
  "Hippopotamus milk is pink.",
  "An octopus has three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
  "The longest hiccuping spree lasted for 68 years.",
  "Koalas sleep for an average of 20 hours a day.",
  "A group of giraffes is called a 'tower'.",
  "The world's smallest mammal is the bumblebee bat.",
  "The longest recorded flight of a chicken is 13 seconds.",
  "Bananas are berries, but strawberries aren't.",
  "The only mammal capable of flight is the bat.",
  "Elephants are the only animals that can't jump.",
  "The world's largest living structure is the Great Barrier Reef.",
  "An adult human is made up of approximately 7,000,000,000,000,000,000,000,000,000 (7 octillion) atoms.",
  "The average person spends six months of their life waiting for red lights to turn green.",
  "The first recorded game of baseball was played in 1846 in Hoboken, New Jersey.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896; Zanzibar surrendered after 38 minutes.",
  "A single rainforest can produce 20% of the Earth's oxygen.",
  "A newborn kangaroo is the size of a lima bean.",
  "Honey never spoils; archaeologists found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
  "Ants never sleep.",
  "A shark is the only fish that can blink with both eyes.",
  "A group of crows is called a 'murder'.",
  "The world's largest desert is Antarctica.",
  "The average person will spend six months of their life waiting for red lights to turn green.",
  "A hummingbird weighs less than a penny.",
  "Pigs can't look up into the sky.",
  "The longest word without a vowel is 'rhythms'.",
  "The Earth is not a perfect sphere; it's slightly flattened at the poles.",
  "A shrimp's heart is in its head.",
  "A day on Venus (one full rotation on its axis) is longer than a year on Venus (one full orbit around the Sun).",
  "A snail can sleep for three years.",
  "The only letter that doesn't appear in the periodic table is the letter 'J'.",
  "Cows have best friends and can become stressed when they are separated.",
  "An ostrich's eye is bigger than its brain.",
], []);

  const initialRandomIndex = Math.floor(Math.random() * didYouKnowList.length);
  const [randomDidYouKnow, setRandomDidYouKnow] = useState<string>(
    didYouKnowList[initialRandomIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * didYouKnowList.length);
      setRandomDidYouKnow(didYouKnowList[randomIndex]);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [didYouKnowList]);

  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 reliative animate-bounce">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">The Ai-Fusion Hub are thinking...</p>
      <div className="w-96 text-sm text-muted-foreground p-6 rounded-md shadow-md transition duration-500 mx-auto text-center bg-gradient-to-br from-purple-400 to-emerald-200">
        <p className="text-black font-bold text-lg mb-2">Did you know?</p>
        <p className="text-gray-800">{randomDidYouKnow}</p>
      </div>
    </div>
  );
};
