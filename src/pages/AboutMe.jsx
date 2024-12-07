import mingo from "../assets/mingo.gif";

function AboutMe() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center">
      <div
        className="flex lg:w-1/2 ml-4"
        style={{
          borderLeft: "5px solid",
          borderImage:
            "linear-gradient(to bottom, white 33%, blue 33%, blue 66%, white 66%) 1",
        }}
      >
        <p className="ml-2">
          Hello, I'm <span className="text-[#72B01D]">Emir</span>. Obviously I{" "}
          <span className="text-[#00ffff] animate-pulse">love programming</span>
          , but you may have already realized that. I think that if there are
          things that define me, it is my love for{" "}
          <span className="text-[#8d23b3]">anime</span> and{" "}
          <span className="text-[#3F7D20]">football</span> My favorite anime is{" "}
          <span className="text-[#f3d720]">One</span>{" "}
          <span className="text-[#bb2525]">Piece</span>, I literally have it on
          my skin & my favorite soccer team is
          {"  "}
          <span>
            "Gimnasia <span className="text-blue-700">Y Esgrima</span> La Plata"
          </span>
          , this is in my blood.
        </p>
      </div>
      <div className="w-1/2 h-1/4 flex items-center justify-end">
        <a href="https://es.wikipedia.org/wiki/One_Piece" target="_blank">
          <img src={mingo} alt="Doflamingo meme" />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
