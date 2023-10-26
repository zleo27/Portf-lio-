import Image from "next/image";
import { SectionTitle } from "../section-title/section-title";

import "./experencie.scss";
import { Skill } from "../Skill/skill";

export function Experencie() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        5 years as a carpenter's assistant, I have no professional experience in
        the IT field yet
      </p>
      <div className="experience-time">
        <Skill image="/react.png" measure={1} years="1 years" />
        <Skill image="/ts.png" measure={1} years="1 years" />
        <Skill image="/js.png" measure={1} years="1 years" />
      </div>
    </div>
  );
}
