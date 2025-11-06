import '../styles/Pages.css';

export default function Intro() {
    return (
        <div className="section">
            <p>
            <h2>4. SOFTWARES E SISTEMAS</h2>

  <h3 id="regras">4.1 - Regras de Instalação e Uso</h3>
  <p>Os softwares utilizados nos equipamentos institucionais devem seguir regras claras para garantir a segurança, conformidade e eficiência:</p>

  <div className="uso-computadores-container">

  <h4>4.1.1 Autorização prévia:</h4>
  <div className="lista">
    <li>a. Qualquer software a ser instalado nos computadores ou dispositivos da instituição deve ser previamente autorizado pelo setor de Tecnologia da Informação (GTI).</li>
    <li>b. Isso inclui aplicativos, ferramentas ou atualizações necessárias para as atividades institucionais.</li>
  </div>

  <h4>4.1.2 Proibição de softwares não licenciados:</h4>
  <div className="lista">
    <li>a. É estritamente proibido instalar ou utilizar softwares não licenciados, piratas ou que não possuam uma justificativa técnica clara e aprovada.</li>
    <li>b. Essa medida evita riscos de segurança cibernética, prejuízos financeiros e possíveis sanções legais à instituição.</li>
  </div>
  </div>
      
        
    <div className="conclusao-imagem">
        <img src="public\soft.png" alt="Ilustração dos objetivos" />
    </div>
  


  <h3 id="sistemas">4.2 - Sistemas Internos</h3>
  <p>O acesso e o uso dos sistemas internos da SEJUSC, como o SIGED, Rede e outros sistemas institucionais, demandam responsabilidade e práticas seguras:</p>

  <div className="uso-computadores-container">
  <h4>4.2.1 Acesso seguro:</h4>
  <div className="lista">
    <li>a. Cada colaborador deve garantir a segurança de suas credenciais de acesso, utilizando senhas fortes e únicas para cada sistema.</li>
    <li>b. Uma senha forte deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.</li>
    <li>c. Para evitar incidentes de segurança, tais como acesso indevido e/ou vazamento de dados, é imprescindível que o servidor público, quando se ausentar da sua estação de trabalho, utilize o recurso de bloqueio de tela (<em>Windows + L</em>).</li>
  </div>

  <h4>4.2.2 Confidencialidade das senhas:</h4>
  <div className="lista">
    <li>a. As senhas devem ser mantidas em sigilo absoluto e não compartilhadas com colegas, mesmo em situações de emergência.</li>
    <li>b. Caso seja necessário o compartilhamento temporário, a GTI deve ser informado e o acesso deve ser monitorado.</li>
    <li>c. Não deixe notas com login e senha ou informações que possam facilitar o acesso de terceiros em seu equipamento. Mantenha guardados documentos físicos com informações sigilosas e confidenciais.</li>
    <li>d. A realização de <em>prints</em>, fotos ou vídeos de telas do computador que contenham dados pessoais expostos e o encaminhamento por meio de canais de comunicação não oficiais é temerário. Nesses casos, adotar o fluxo abaixo:
      <ol>
        <li><strong>Análise da Necessidade:</strong> Avaliar se a captura ou compartilhamento de tela é realmente essencial.</li>
        <li><strong>Autorização:</strong> Obter aprovação formal do gestor responsável ou da GTI.</li>
        <li><strong>Uso de canal seguro:</strong> Utilizar canais oficiais e ferramentas aprovadas para o envio. (ex: SIGED)</li>
        <li><strong>Registro:</strong> Documentar a ação e confirmar a exclusão do material após o uso.</li>
        <li><strong>Notificação à GTI:</strong> Informar à GTI qualquer situação em que o dado precise ser tratado fora do fluxo padrão.</li>
      </ol>
    </li>
  </div>

  <h4>4.2.3 Atualização regular:</h4>
  <div className="lista">
    <li>a. Senhas devem ser alteradas regularmente, preferencialmente a cada 90 dias, ou imediatamente em caso de suspeita de comprometimento.</li>
  </div>
  </div>
  <h3 id="usuarios">4.3 - Cadastro e Remoção de Usuários</h3>
  <p>O controle de usuários nos sistemas internos é essencial para garantir segurança e evitar acessos indevidos:</p>

   <div className="uso-computadores-container">
  <h4>4.3.1 Cadastro de novos usuários:</h4>
  <div className="lista">
    <li>a. Antes do início das atividades, é necessário que os novos colaboradores sejam devidamente cadastrados nos sistemas.</li>
    <li>b. O gestor responsável deve enviar uma solicitação formal à GTI, informando os sistemas necessários e os níveis de acesso adequados para o colaborador.</li>
  </div>

  <h4>4.3.2 Remoção de acessos:</h4>
  <div className="lista">
    <li>a. Em caso de desligamento ou transferência de colaboradores, a GTI deve ser imediatamente notificado para que todos os acessos sejam revogados ou atualizados, evitando possíveis acessos não autorizados.</li>
    <li>b. A notificação deve ser feita assim que o desligamento ou a transferência for formalizada, garantindo a segurança dos sistemas e dados institucionais.</li>
  </div></div></p>

        </div>
        
    );
}
