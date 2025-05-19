import "./home.css";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import ASCIIText from "../components/AsciiText/AsciiText";
import BackgroundAudio from "@/components/BackgroundAudio/BackgroundAudio";

export default function Home() {
  return (
    <div className="MainWrapper">
      <BackgroundAudio />
      <NavBar />

      <div className="BackgroundStuff">
        <Image
          className="ImageCroc"
          alt=""
          height={150}
          width={250}
          src="/images/Random/Croc.png"
        />
        <Image
          className="ImageCat"
          alt=""
          height={150}
          width={150}
          src="/images/Random/MadCat.png"
        />
        <Image
          className="ImageReaper"
          alt=""
          height={250}
          width={250}
          src="/images/Random/Reapeer.png"
        />
        <Image
          className="ImageShock"
          alt=""
          height={300}
          width={380}
          src="/images/Random/Shocked.png"
        />
        <Image
          className="ImageMummy"
          alt=""
          height={300}
          width={580}
          src="/images/Random/Mummy.png"
        />
      </div>
      <div className="MainContent">
        <ASCIIText text="мы повсюду" enableWaves={true} asciiFontSize={8} />
      </div>
    </div>
  );
}
