import { SectionTitle } from "../section-title/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span> EN - advanced</span>
        <span>PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Analysis and Systems Development - Universidade Unicesumar</span>
      </div>
    </div>
  );
}
