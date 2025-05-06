import "./home.css";

import NavBar from "@/components/NavBar/NavBar";
import ASCIIText from "../components/AsciiText/AsciiText";

export default function Home() {
  return (
    <div className="MainWrapper">
      <NavBar />
      <div className="MainContent">
        <ASCIIText
          text="Добро пожаловать"
          enableWaves={true}
          asciiFontSize={8}
        />
      </div>
    </div>
  );
}
