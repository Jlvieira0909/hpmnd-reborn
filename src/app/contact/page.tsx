import "./contact.css";

import NavBar from "@/components/NavBar/NavBar";
import BackgroundAudio from "@/components/BackgroundAudio/BackgroundAudio";

export default function Contact() {
  return (
    <div className="MainWrapper">
      <NavBar />
      <BackgroundAudio />
      <div className="MainContentContact"></div>
    </div>
  );
}
