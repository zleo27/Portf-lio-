import Image from "next/image";
import { Header } from "./components/header/header";
import { Experencie } from "./components/header/experience/experience";
import { Info } from "./components/header/information/information";

import "./styles/home.scss";
import { SocialBtns } from "./components/header/Social-btns/Social-btns";
import { EmailIcon } from "./components/header/icons/email-icon";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experencie />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:leonardo_pires66@hotmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
