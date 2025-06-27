"use client";

import "./aboutMe.css";
import Image from "next/image";
import { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";

export default function AboutMe() {
  const aboutTexts: Record<
    number,
    { text1: string; text2: string; gifImage: string }
  > = {
    1: {
      text1:
        "That's a great question actually! I'm an artist who always had an urge to create things out of the ordinary. I love to bring this kind of 'rebel punk' style to everything that I create.",
      text2:
        "My only goal in life is to inspire other people — inspire them to create, to rebel, to question everything, to rise on top of everything they want, and to just be themselves.",
      gifImage: "/gifs/Evil.gif",
    },
    2: {
      text1:
        "I'm also passionate about exploring new mediums like digital art, animation, and interactive experiences.",
      text2:
        "Through my work, I aim to challenge the norms and spark creativity in others, no matter their background.",
      gifImage: "/gifs/Knight.gif",
    },
    3: {
      text1:
        "I believe that art is for everyone. You don’t need permission to start creating.",
      text2:
        "Let’s break the walls, ignore the rules, and paint outside the lines — always.",
      gifImage: "/gifs/Reaper.gif",
    },
    4: {
      text1:
        "This project is just the beginning. The future holds more rebellion, more inspiration, more chaos — and more fun.",
      text2:
        "Thanks for being part of the journey. Now go make something weird!",
      gifImage: "/gifs/Void.gif",
    },
  };

  const [textIndex, setTextIndex] = useState(1);
  const maxIndex = Object.keys(aboutTexts).length;

  const nextText = () => {
    setTextIndex((prev) => (prev >= maxIndex ? 1 : prev + 1));
  };

  const prevText = () => {
    setTextIndex((prev) => (prev <= 1 ? maxIndex : prev - 1));
  };

  const currentText = aboutTexts[textIndex];

  return (
    <div className="MainWrapper">
      <NavBar />
      <div className="MainContentAboutMe">
        <div className="aboutMeContent">
          <div className="aboutMeContentWrapper">
            <h1 className="AboutMeTitle">WHO ARE WE? ME? US?</h1>
            <span className="AboutMeText">{currentText.text1}</span>
            <span className="AboutMeText">{currentText.text2}</span>
          </div>
          <Image
            className="AboutUsTextBG"
            alt=""
            height={750}
            width={720}
            src="/images/DivWindow02.png"
          />
        </div>
        <div className="GameboyContainer">
          <div className="AboutMeButtons">
            <button className="previousTextButton" onClick={prevText}></button>
            <button className="nextTextButton" onClick={nextText}></button>
          </div>
          <Image
            className="GameboyImage"
            alt=""
            height={750}
            width={520}
            src="/images/Random/Gameboy.png"
          />
          <img
            src={currentText.gifImage}
            alt="Cool ass GIF"
            className="GameboyGif"
          />
        </div>
      </div>
    </div>
  );
}
