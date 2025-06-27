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
          height={250}
          width={400}
          src="/images/Random/Croc.png"
        />
        <Image
          className="ImageCat"
          alt=""
          height={200}
          width={200}
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
        <Image
          className="ImageHand"
          alt=""
          height={380}
          width={200}
          src="/images/Random/WireHand.png"
        />
        <Image
          className="ImageButterfly"
          alt=""
          height={250}
          width={300}
          src="/images/Random/Butterfly.png"
        />
        <Image
          className="ImageGhostBusters"
          alt=""
          height={250}
          width={300}
          src="/images/Random/GhostBusters.png"
        />
        <Image
          className="ImageSkull"
          alt=""
          height={300}
          width={300}
          src="/images/Random/Skull.png"
        />
      </div>
      <div className="MainContent">
        <ASCIIText text="мы повсюду" enableWaves={true} asciiFontSize={8} />
      </div>
    </div>
  );
}
