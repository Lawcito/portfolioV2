import React, { useEffect, useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";

function OnePiece() {
  const [randomFruit, setRandomFruit] = useState(undefined);
  const initialized = useRef(false);

  //Fetch to one piece API
  async function fetchDataPiece() {
    try {
      const response = await fetch("https://api.api-onepiece.com/v2/fruits/en");
      const data = await response.json();

      const fruitsWithImages = data
        .filter((fruit) => fruit.filename.length > 39) //filename it's a img url
        .map((fruit) => ({
          id: fruit.id,
          name: fruit.name,
          img: fruit.filename,
          desc: fruit.description,
        }));

      const randomId = Math.floor(Math.random() * fruitsWithImages.length);
      setRandomFruit(fruitsWithImages[randomId]);

      //Get a random id, and create a fruit
    } catch (error) {
      console.error("error to try get fruit:", error);
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      fetchDataPiece();
      initialized.current = true; // Marcar como inicializado
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-1/2">
      {randomFruit ? (
        <div className="flex flex-row gap-8 bg-[#0D0A0B] rounded-lg h-48 shadow-sm shadow-[#F3EFF5]">
          <div className="flex flex-col w-full h-full gap-4 items-center justify-center ">
            <p className="text-[#72B01D]">{randomFruit.name}</p>
            <img
              src={randomFruit.img}
              alt="a"
              className="w-32 h-32 rounded-lg shadow-md mb-1"
            />
          </div>
          <div className="overflow-y-auto w-full max-h-48 flex flex-col text-[#F3EFF5]">
            <p className="text-md">{randomFruit.desc}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row">
          <p>Generating random fruit</p>
          <TypewriterComponent
            options={{
              strings: [`...`],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default OnePiece;
