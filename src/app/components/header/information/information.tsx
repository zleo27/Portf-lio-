import { SectionTitle } from "../section-title/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span> EN - Avançado</span>
        <span>PT-BR - Nativo</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Analise e Desenvolvimento de Sistemas - Universidade Uniasselvi</span>
      </div>
    </div>
  );
}
