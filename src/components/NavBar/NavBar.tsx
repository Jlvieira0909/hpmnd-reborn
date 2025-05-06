import Link from "next/link";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBarWrapper">
      <div className="NavBarContent">
        <img className="FlavourImage" src="/images/NavBar/FlavourImage.png" />
        <div className="NavBarNavigation">
          <Link href="/" className="LinkTo">
            <img className="LinkImage" src="/images/NavBar/Windows.png" />
            <h1 className="LinkText">Home</h1>
          </Link>
          <Link href="/projects" className="LinkTo">
            <img className="LinkImage" src="/images/NavBar/N64.png" />
            <h1 className="LinkText">Projects</h1>
          </Link>
          {/* <Link href="/" className="LinkTo">
            <img className="LinkImage" src="/images/NavBar/Cursor.png" />
            <h1 className="LinkText">About Us</h1>
          </Link> */}
          <Link href="/contact" className="LinkTo">
            <img className="LinkImage" src="/images/NavBar/Save.png" />
            <h1 className="LinkText">Contact</h1>
          </Link>
          <Link href="/aboutme" className="LinkTo">
            <img className="LinkImage" src="/images/NavBar/Trash.png" />
            <h1 className="LinkText">Who?</h1>
          </Link>
        </div>
        <img className="FlavourImage" src="/images/NavBar/FlavourImage.png" />
      </div>
    </div>
  );
}
