import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Intro from "./pages/Intro";
import Objetivo from "./pages/Objetivo";
import Equip from "./pages/Equip";
import Soft from "./pages/Soft";
import Internet from "./pages/Internet";
import Servers from "./pages/Servers";
import Audit from "./pages/Audit";
import Conclusion from "./pages/Conclusion";
import Plano from "./pages/Plano";
import "./styles.css";
import Footer from "./components/Footer";



function App() {
  const [activeSection, setActiveSection] = useState("intro");
  const [query, setQuery] = useState("");
  
  const sections = {
    intro: {
      component: <Intro />,
      title: "INTRODUÇÃO",
      content:
        "introdução diretrizes uso responsável tecnologia SEJUSC LGPD lei 13709 segurança informação colaboradores computadores notebooks pastas compartilhadas impressoras celulares corporativos internet e-mails proteção dados sensíveis",
    },
    objetivo: {
      component: <Objetivo />,
      title: "OBJETIVO",
      content:
        "objetivo proteção dados segurança integridade informações institucionais acessos não autorizados vulnerabilidades proteção dados pessoais sensíveis CPF RG IP dados financeiros identificação discriminatórios saúde religião política LGPD direitos titulares transparência ética treinamento conscientização incidentes segurança e-mails suspeitos vazamento senha acessos indevidos uso exclusivo institucional",
    },
    audit: {
      component: <Audit />,
      title: "MONITORAMENTO E AUDITORIA",
      content:
        "auditoria monitoramento contínuo GTI conformidade normas proteger recursos informações SEJUSC atividades suspeitas acessos indevidos uso inadequado violações segurança LGPD dispositivos institucionais computadores notebooks celulares sistemas internos e-mails internet investigação administrativa confidencialidade ética interesses institucionais violações incidentes vazamento dados atividades ilícitas autoridades advertências sanções disciplinares",
    },
    soft: {
      component: <Soft />,
      title: "SOFTWARES E SISTEMAS",
      content:
        "softwares sistemas regras instalação uso autorização GTI proibição não licenciados piratas segurança cibernética sanções legais SIGED rede sistemas internos acesso seguro credenciais senhas fortes 8 caracteres maiúsculas minúsculas números símbolos bloqueio tela Windows+L confidencialidade senhas sigilo não compartilhar GTI monitoramento prints fotos vídeos dados pessoais canais oficiais atualização senhas 90 dias cadastro usuários novos solicitações gestores níveis acesso remoção desligamento transferência revogação acessos segurança dados institucionais",
    },
    servers: {
      component: <Servers />,
      title: "SERVIDORES E COMPARTILHAMENTOS",
      content:
        "servidores pastas compartilhadas acesso permissões GTI autorização controle revisão usuários autorizados colaboradores setor criação modificação exclusão arquivos pastas credenciais confidencialidade proibição uso responsável organização armazenamento arquivos setorial documentos obsoletos remoção atualização pasta pública conjunta transferência temporária 100GB solicitação gestores backup restauração dados proteção cópias segurança monitoramento conformidade atividades suspeitas não autorizadas integridade dados políticas internas ações disciplinares investigação medidas administrativas administrativas",
    },
    plano: {
      component: <Plano />,
      title: "PLANO DE RESPOSTA A INCIDENTES",
      content:
        "plano resposta incidentes segurança informação vazamento dados falhas sistemas confidencialidade integridade disponibilidade LGPD dados pessoais sensíveis dispositivos internos acessos não autorizados identificação contenção comunicação GTI notificação análise impacto baixo impacto alto impacto causa raiz ações corretivas isolamento sistemas backups restauração operações setores internos alta gestão registro documentação relatório medidas mitigação impacto prevenção recorrência notificação externa ANPD titulares dados comprometidos medidas mitigação melhoria contínua revisão políticas procedimentos treinamentos colaboradores boas práticas implementação técnicas fluxo identificação contenção análise mitigação recuperação documentação notificação aperfeiçoamento",
    },
    internet: {
      component: <Internet />,
      title: "INTERNET E E-MAILS",
      content:
        "e-mails e-mail internet dispositivos institucionais uso responsável normas segurança privacidade navegação restrita sites profissionais institucionais redes sociais entretenimento compras pessoais proibido autorização gestão downloads fontes confiáveis autorização GTI monitoramento bloqueios sites bloqueados conteúdo adulto jogos phishing malware riscos segurança avaliação relevância atividades profissionais monitoramento acessos auditoria revisão sigilo e-mail corporativo comunicação institucional uso profissional envio recebimento mensagens proibição pessoais serviços externos spam correntes memes piadas conteúdo inadequado discriminatório ofensivo normas SEJUSC compartilhamento contas genéricas equipes autorização gestão GTI responsabilidade sigilo senhas acessos temporários reporte links suspeitos análise bloqueio",
    },
    equip: {
      component: <Equip />,
      title: "COMPUTADORES, EQUIPAMENTOS E DISPOSITIVOS",
      content:
        "equipamentos computadores notebooks dispositivos institucionais uso profissional atividades profissionais proibido pessoal redes sociais vídeos sites não relacionados softwares arquivos pessoais instalação proibida segurança integridade sistema cuidados físicos manuseio quedas líquidos limpeza manutenção GTI periféricos teclados mouses câmeras fones de ouvido acessórios uso correto reparos substituições técnicos impressoras corporativas outsourcing manutenção toner papel monitoramento impressão documentos profissionais administrativos contratos ofícios relatórios documentos pessoais proibidos autorização formal dados pessoais sensíveis sigilosos LGPD descarte seguro fragmentadora triturar incinerar procedimentos operacionais manutenção suprimentos reposição GTI papel exclusivo desperdício frente verso toners equipe terceirizada monitoramento controle volume relatórios avaliação irregularidades exceções uso pessoal autorizado impressões externas celulares chips corporativos uso exclusivo comunicação tarefas trabalho conservação devolução desligamento movimentação equipamentos autorização formal GTI",
    },
    conclusion: {
      component: <Conclusion />,
      title: "CONCLUSÃO",
      content:
        "conclusão políticas diretrizes SEJUSC ambiente trabalho seguro produtivo conformidade melhores práticas requisitos legais colaboradores compromisso proteção recursos institucionais integridade compreensão respeito normas responsabilidade uso profissional cumprimento diretrizes segurança notificação GTI incidentes problemas técnicos acesso suspeitas violação confidencialidade proteção informações organização fornecimento ferramentas trabalho segurança eficiência suporte técnico orientações auditorias monitoramento ético dados titulares colaboração mútua comprometimento confiança eficiência dúvidas suporte boas práticas segurança informação",
    },
  };

  const filterSections = () => {
    if (!query) return sections[activeSection].component;

    const results = Object.keys(sections).filter((key) =>
      sections[key].content.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0)
      return (
        <div className="section">
          Nenhum resultado encontrado para "<strong>{query}</strong>"
        </div>
      );

    return results.map((key) => (
      <button
        key={key}
        onClick={() => {
          setActiveSection(key);
          setQuery("");
        }}
        className="search-result"
      >
        {sections[key].title}
      </button>
    ));
  };

  return (
    <div className="app">



      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        query={query}
        setQuery={setQuery}
      />
      <main className="content-area">
        <div className="title">
          POLÍTICAS DE BOAS PRÁTICAS DE USO DE TECNOLOGIA E PROTEÇÃO DE DADOS
          DA SEJUSC
        </div>
        <div className="content-box">{filterSections()}</div>
      </main>
       {/* Rodapé */}
    <Footer />
    </div>
  );
}

export default App;
