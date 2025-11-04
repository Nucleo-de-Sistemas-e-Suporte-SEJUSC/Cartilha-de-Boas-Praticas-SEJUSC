import '../Styles/Pages.css';

export default function Intro() {
    return (
        <div className="section">
            <p>
            <h2>6. SERVIDORES E COMPARTILHAMENTOS</h2>

  <h3 id='acessopastas'>6.1 - Acesso e Permissões às Pastas Compartilhadas</h3>
  <p>O acesso às pastas compartilhadas em rede interna (intranet) segue diretrizes claras para garantir segurança, organização e conformidade:</p>
  
   <div className="uso-computadores-container">
  <h4>6.1.1 Controle de acesso:</h4>
  <div className="lista">
    <li>a.	O acesso às pastas compartilhadas é concedido com base nas necessidades de trabalho de cada colaborador e deve ser autorizado pelo gerente responsável do setor e enviado formalmente à GTI.</li>
  </div>

  <h4>6.1.2 Permissões específicas:</h4>
  <div className="lista">
    <li>a. Dependendo das necessidades do trabalho, os colaboradores podem receber permissões específicas, como:
      <div className="listinha">
        <li>i. Criar, modificar ou excluir pastas.</li>
        <li>ii. Criar, modificar ou excluir arquivos.</li>
      </div>
    </li>
    <li>b. Alterações nas permissões de acesso devem ser formalmente solicitadas à GTI.</li>
  </div>

  <h4>6.1.3 Responsabilidade do uso:</h4>
  <div className="lista">
    <li>a. É estritamente proibido compartilhar credenciais de acesso ou permitir que terceiros não autorizados utilizem pastas compartilhadas.</li>
  </div></div>

  <h3 id='armazenamento'>6.2 - Organização e Armazenamento de Arquivos</h3>
  <p>Para manter a eficiência e segurança dos dados, é essencial seguir as boas práticas de organização e armazenamento:</p>
  
  <div className="uso-computadores-container">
  <h4>6.2.1 Organização setorial:</h4>
  <div className="lista">
    <li>a. Cada setor é responsável por organizar e manter suas pastas de forma estruturada, garantindo que os arquivos estejam nomeados adequadamente e atualizados.</li>
    <li>b. Documentos obsoletos ou desnecessários devem ser removidos periodicamente para evitar acúmulo.</li>
  </div>

  <h4>6.2.2 Proibição de arquivos pessoais:</h4>
  <div className="lista">
    <li>a. É proibido armazenar arquivos pessoais, temporários ou que não sejam diretamente relacionados às atividades institucionais nas pastas compartilhadas.</li>
  </div>

  <h4>6.2.3 Pasta Pública ou Conjunta:</h4>
  <div className="lista">
    <li>a. A Pasta Pública é destinada exclusivamente à transferência temporária de arquivos entre setores.</li>
    <li>b. Este repositório possui capacidade limitada de 100 GB e é sujeito a limpezas regulares realizadas pela GTI.</li>
    <li>c. Para transferências frequentes entre setores, os gestores devem solicitar à GTI a criação de uma pasta específica para facilitar o compartilhamento.</li>
  </div></div>
      
  <h3 id='backup'>6.3 - Backup e Restauração de Dados</h3>
  <p>A GTI realiza backups regulares para proteger os dados institucionais contra perdas acidentais ou falhas técnicas:</p>
  
    <div className="uso-computadores-container">
  <h4>6.3.1 Backup designado:</h4>
  <div className="lista">
    <li>a. Apenas as pastas compartilhadas previamente designadas são incluídas no sistema de backup.</li>
    <li>b. Arquivos armazenados em máquinas locais ou dispositivos pessoais não são cobertos pelo backup institucional, sendo responsabilidade do colaborador garantir cópias de segurança desses dados.</li>
  </div>

  <h4>6.3.2 Restauração de arquivos:</h4>
  <div className="lista">
  <li>c.	Em caso de perda ou exclusão acidental de arquivos, os gestores devem comunicar imediatamente à GTI para avaliar a possibilidade de recuperação via backup. </li>
  <li>d.	O prazo máximo de recuperação de arquivos perdidos é de 7 dias.</li>
    </div></div>

     
  <h3 id='conformidade'>6.4 - Monitoramento e Conformidade</h3>
  <p>Para proteger os recursos institucionais e garantir o uso responsável das pastas e dispositivos, a SEJUSC mantém políticas de monitoramento e conformidade:</p>
  
  <div className="uso-computadores-container">
  <h4>6.4.1 Monitoramento de uso:</h4>
  <div className="lista">
    <li>a. O uso das pastas compartilhadas e dispositivos de armazenamento é monitorado pela GTI para identificar atividades suspeitas ou não autorizadas.</li>
    <li>b. Esse monitoramento visa proteger a integridade dos dados e garantir conformidade com as políticas internas.</li>
  </div>

  <h4>6.4.2 Ações disciplinares:</h4>
   <div className="lista">
    <li>c. Atividades que violem as diretrizes institucionais, como armazenamento de conteúdo não permitido, uso indevido ou acessos não autorizados, serão investigadas.</li>
    <li>d. Dependendo do impacto identificado, essas violações podem resultar em medidas administrativas ou disciplinares.</li>
  </div></div></p>

        </div>
    );
}
