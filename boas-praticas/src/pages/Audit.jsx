import '../styles/Pages.css';
import audit from '../assets/audit1.png';

export default function Intro() {
  return (
    <div className="section">
        <p>
      <h2>7. MONITORAMENTO E AUDITORIA</h2>

  <h3 id='auditoria'> 7.1 - Auditoria Regular e Monitoramento de Atividades</h3>
  <p>
    A GTI realiza auditorias periódicas e monitoramento contínuo para garantir a
    conformidade com as normas institucionais e proteger os recursos e
    informações da SEJUSC:
  </p>
  <div className="uso-computadores-container">
  <h4>7.1.2 Finalidade do monitoramento:</h4>
<div className="lista">
    <li>a. Detectar atividades suspeitas ou não autorizadas, como acessos indevidos, uso inadequado de equipamentos e sistemas, ou possíveis violações de segurança.</li>
    <li>b. Garantir a conformidade com a legislação vigente, incluindo a Lei Geral de Proteção de Dados (LGPD).</li>
  </div>

  <h4>7.1.3 Escopo do monitoramento:</h4>
 <div className="lista">
    <li>a. Inclui dispositivos institucionais (computadores, notebooks, celulares corporativos), sistemas internos e o uso de e-mails e internet.</li>
    <li>b. O conteúdo armazenado, acessado ou transmitido por meio dos recursos institucionais pode ser revisado para fins de auditoria ou investigação administrativa.</li>
  </div>

  <h4>7.1.4 Confidencialidade e ética no monitoramento:</h4>
  <div className="lista">
    <li>a. O monitoramento é realizado de forma ética e transparente, com foco exclusivo em proteger os interesses institucionais.</li>
    <li>b. A SEJUSC assegura que informações pessoais não serão acessadas, salvo em situações estritamente necessárias e devidamente justificadas.</li>
  </div></div>

  <h3 id='investigacao'>7.2 - Investigação de Atividades Suspeitas</h3>

     <div className="uso-computadores-container">
  <h4>7.2.1 Procedimentos em caso de violações:</h4>
 <div className="lista">
    <li>a. Qualquer indício de uso inadequado dos recursos institucionais será investigado pelo GTI, em conjunto com os setores competentes, se necessário.</li>
    <li>b. Em casos graves, como vazamentos de dados ou atividades ilícitas, as informações podem ser encaminhadas às autoridades competentes.</li>
  </div>

  <h4>7.2.2 Consequências de violações:</h4>
 <div className="lista">
    <li>a. O uso inadequado dos recursos pode resultar em advertências, sanções administrativas ou medidas disciplinares, dependendo da gravidade da infração.</li>
  </div></div>
  
    <div className="conclusao-imagem">
        <img src={audit} alt="Ilustração dos objetivos" />
    </div>
  
  </p>

        </div>
  );
}
