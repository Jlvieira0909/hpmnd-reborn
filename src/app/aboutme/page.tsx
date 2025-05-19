import "./aboutMe.css";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";

export default function AboutMe() {
  return (
    <div className="MainWrapper">
      <NavBar />
      <div className="MainContent">
        <Image
          className="GameboyImage"
          alt=""
          height={800}
          width={550}
          src="/images/Random/Gameboy.png"
        />
        <img
          src="/gifs/Knight.gif"
          alt="Descrição do GIF"
          className="GameboyGif"
        />
      </div>
    </div>
  );
}
