import '../Styles/Pages.css';
import fluxoImg from "../assets/fluxosis-01.png";

export default function Intro() {
    return (
        <div className="section">
            <p>
           <h2>PLANO DE RESPOSTA A INCIDENTES</h2>

  <h3 id='objetivoplano'>Objetivo</h3>
  <p>
    Estabelecer um protocolo claro e eficaz para a identificação, comunicação e
    resolução de incidentes relacionados à segurança da informação, como
    vazamentos de dados ou falhas críticas nos sistemas.
  </p>
     
  <h3 id='definicao'>1. Definição de Incidente</h3>
  Um incidente de segurança é qualquer evento que possa comprometer:
  <div className="lista">
    <li>a. A confidencialidade, integridade ou disponibilidade de informações ou sistemas institucionais.</li>
    <li>b. A conformidade com a Lei Geral de Proteção de Dados (LGPD).</li>
  </div>
  Exemplos de incidentes incluem:
  <div className="lista">
    <li>i. Vazamento ou acesso não autorizado a dados pessoais ou sensíveis.</li>
    <li>ii. Perda ou roubo de dispositivos institucionais.</li>
    <li>iii. Acessos não autorizados a sistemas internos.</li>
    <li>iv. Falhas críticas em servidores, redes ou sistemas que impactem operações.</li>
  </div>
     
  <h3 id='acoes'>2. Ações Imediatas</h3>
  <h4>Passo 1: Identificação e Contenção</h4>
  <div className="lista">
    <li>a. Assim que identificar o incidente, o colaborador deve:
      <div className="lista">
        <li>i. Desconectar dispositivos afetados da rede, se aplicável.</li>
        <li>ii. Impedir que o incidente se espalhe (ex.: interromper compartilhamentos indevidos).</li>
      </div>
    </li>
  </div>

  <h4>Passo 2: Comunicação à GTI</h4>
  <div className="lista">
    <li>a. Notificar imediatamente o setor de Tecnologia da Informação (GTI), fornecendo:
      <div className="lista">
        <li>i. Descrição do incidente.</li>
        <li>ii. Data e hora de identificação.</li>
        <li>iii. Informações sobre sistemas, dispositivos ou dados afetados.</li>
        <li>iv. Ações tomadas até o momento.</li>
      </div>
    </li>
  </div>
     
  <h3 id='analise'>3. Análise e Resposta</h3>
  <strong>Responsabilidade da GTI:</strong>
  <div className="lista">
    <li>a. Analisar o impacto do incidente, classificando-o como:
      <div className="lista">
        <li><strong>i. Baixo impacto:</strong> Incidente limitado a dispositivos ou informações sem relevância crítica.</li>
        <li><strong>ii. Alto impacto:</strong> Incidente que comprometa dados sensíveis, sistemas críticos ou a conformidade legal.</li>
      </div>
    </li>
    <li>b. Identificar a causa raiz e definir ações corretivas.</li>
  </div>
  <strong>Ações Imediatas da GTI:</strong>
  <div className="lista">
    <li>a. Isolar sistemas comprometidos, se necessário.</li>
    <li>b. Ativar backups ou redundâncias para restaurar operações.</li>
    <li>c. Informar setores internos afetados e a alta gestão, se aplicável.</li>
  </div>
     
  <h3 id='registro'>4. Registro e Documentação</h3>
  <div className="lista">
    <li>a. A GTI deve registrar o incidente em um relatório contendo:
      <div className="lista">
        <li>i. Detalhes do ocorrido.</li>
        <li>ii. Medidas tomadas para contenção e mitigação.</li>
        <li>iii. Impacto do incidente e ações de recuperação.</li>
        <li>iv. Planos para evitar recorrência.</li>
      </div>
    </li>
  </div>
      
  <h3 id='notificacao'>5. Notificação Externa</h3>
    <div className="lista">
      <li>a. Para incidentes que envolvam vazamento de dados pessoais ou sensíveis, a
      GTI, em conjunto com a alta gestão e jurídico, deve:</li>
      <div className="lista">
        <li>i. Avaliar a necessidade de informar os titulares dos dados comprometidos.</li>
        <li>ii. Notificar a Autoridade Nacional de Proteção de Dados (ANPD), conforme previsto na LGPD, incluindo:
          <ol>
            <li>Natureza dos dados afetados.</li>
            <li>Medidas adotadas para mitigar danos.</li>
            <li>Plano para evitar reincidência.</li>
          </ol>
        </li>
      </div>
    </div>
 
  <h3 id='melhoria'>6. Melhoria Contínua</h3>
  Após a resolução do incidente:
  <div className="lista">
    <li>a. Revisar políticas e procedimentos de segurança.</li>
    <li>b. Realizar treinamentos com colaboradores para reforçar boas práticas.</li>
    <li>c. Implementar medidas técnicas adicionais, se necessário.</li>
  </div>

     <div className="fluxo-section">
      <div className="fluxo-texto">
        <h3 id="fluxo">Fluxo Resumido de Resposta a Incidentes</h3>
        <ol>
          <li><strong>Identificação:</strong> Colaborador identifica o incidente e notifica a GTI.</li>
          <li><strong>Contenção:</strong> Ações para limitar o impacto.</li>
          <li><strong>Análise:</strong> A GTI avalia a causa e o impacto.</li>
          <li><strong>Mitigação e Recuperação:</strong> Restaurar sistemas e minimizar danos.</li>
          <li><strong>Documentação:</strong> Relatar o incidente e as ações tomadas.</li>
          <li><strong>Notificação (se necessário):</strong> Informar ANPD e titulares afetados.</li>
          <li><strong>Aperfeiçoamento:</strong> Atualizar processos para evitar futuros incidentes.</li>
        </ol>
      </div>

      <div className="fluxo-imagem">
        <img src={fluxoImg} alt="Fluxo de resposta a incidentes" className="fluxo-img" />
      </div>
    </div>

  
  </p>

       
        </div>
    );
}
