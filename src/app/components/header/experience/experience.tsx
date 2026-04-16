import Image from "next/image";
import { SectionTitle } from "../section-title/section-title";

import "./experencie.scss";
import { Skill } from "../Skill/skill";

export function Experencie() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
     <pre>
      
          <span>💼</span>
          <h1>Assistente de Suporte Técnico - Ponto Track Rastreamento <br></br>
maio/2024 - maio/2025</h1>
<p>companhar disponibilidade, desempenho e capacidade de links, equipamentos e serviços de banco de dados utilizando Zabbix,</p>
<p>identificando falhas e degradações antes de impactar o cliente.</p>
<p>Tratamento e escalonamento de incidentes
</p>

<h2>Analista de Monitoramento- Prime DB<br></br>
maio/2025 - Atual </h2>
<p>configuração e manutenção de equipamentos rastreadores veiculares,</p>
<p>vinculos e teste no sistemas </p>



      
      </pre> 
      <div className="experience-time">
        <Skill image="/react.png" measure={1} years="1 years" />
        <Skill image="/ts.png" measure={1} years="1 years" />
        <Skill image="/js.png" measure={1} years="1 years" />
        
      </div>
    </div>
  );
}
