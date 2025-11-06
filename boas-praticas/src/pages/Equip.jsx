import '../styles/Pages.css';
import Equip from '../assets/Equip.png';
import descarte from '../assets/descarte.png';
import gti from '../assets/gti.png';

export default function Intro() {
    return (
        <div className="section" id="equip">
            <p>
            <h2>3. COMPUTADORES, EQUIPAMENTOS E DISPOSITIVOS</h2>

  <h3 id="uso">3. USO E PROTEÇÃO DE EQUIPAMENTOS</h3>

  <h4>3.1 - Uso de Computadores e Notebooks</h4>
                <p>Os dispositivos fornecidos pela SEJUSC são ferramentas institucionais que devem ser utilizados exclusivamente para atividades profissionais. Isso inclui:</p>
                
        
        <div className="uso-computadores-container">
            <div className="uso-computadores-texto">
                
                
                <h4>3.1.1 Finalidade profissional:</h4>
                <ul>
                    <li>
                        É estritamente proibido usar esses equipamentos para atividades pessoais, como navegar em redes sociais, assistir a vídeos ou acessar sites que não estejam relacionados às funções institucionais, dado a exceções de casos como setores de comunicação e ouvidoria.
                    </li>
                </ul>
                
                <h4>3.1.2 Softwares e arquivos pessoais:</h4>
                <ul>
                    <li>
                        Não é permitido instalar programas pessoais, como jogos ou aplicativos, nem armazenar arquivos particulares nos computadores da instituição. Isso reduz riscos de segurança e mantém a integridade do sistema.
                    </li>
                </ul>
                
                <h4>3.1.3 Cuidados físicos:</h4>
                <ul>
                    <li>a. Manuseie o equipamento com cuidado para evitar danos físicos, como quedas ou exposição a líquidos.</li>
                    <li>b. Mantenha o ambiente de trabalho limpo e livre de sujeira que possa comprometer o desempenho do dispositivo.</li>
                    <li>c. É expressamente proibido abrir equipamentos e dispositivos para ver a parte interna ou tentar fazer qualquer tipo de manutenção, sendo o setor da GTI o único responsável pelo serviço.</li>
                </ul>
                
            </div>
            
        </div>

  <h3 id="perifericos">3.2 - Periféricos e Outros Dispositivos</h3>
  <p>Os periféricos institucionais, como teclados, mouses, câmeras, fones de ouvido e outros acessórios, são recursos fornecidos para uso exclusivo nas atividades profissionais. É importante seguir as diretrizes abaixo:</p>
       <div className="objetivos-imagem">
    <img src={Equip} alt="Ilustração dos objetivos" />
  </div>

    <div className="uso-computadores-container">
      <h4>3.2.1 Uso correto:</h4> Não utilize periféricos para fins pessoais ou atividades não relacionadas ao trabalho.
    

     <p></p><h4>3.2.2 Reparos e substituições:</h4>
      <div className="lista">
        <li>a. Em caso de defeitos ou problemas técnicos, os reparos ou substituições só podem ser realizados pelo setor de Tecnologia da Informação (GTI).</li>
        <li>b. Não tente consertar ou substituir acessórios por conta própria.</li>
      </div>
      </div>
  

  <h3 id="impressoras" >3.3 - Impressoras Corporativas</h3>
  <p>As impressoras institucionais disponíveis na SEJUSC são recursos gerenciados por uma empresa terceirizada responsável pelo serviço de outsourcing de impressão. Este serviço inclui a manutenção dos equipamentos, fornecimento de toner e papel (resmas) e monitoramento do uso. Para garantir o uso eficiente e responsável, as seguintes diretrizes devem ser observadas:</p>

  <div className="uso-computadores-container">
  <h4>3.3.1 - Finalidade e Uso Profissional</h4>
  <h4>3.3.1.1 Impressões permitidas:</h4>
      <div className="lista">
        <li>a. O uso das impressoras deve ser restrito a documentos diretamente relacionados às atividades profissionais da SEJUSC, como relatórios, contratos, ofícios, comunicações institucionais e materiais administrativos.</li>
      </div>

    <h4>3.3.1.2 Documentos pessoais:</h4>
      <div className="lista">
        <li>a. A impressão de documentos pessoais, como currículos, declarações pessoais ou documentos de terceiros, é proibida, salvo em situações excepcionais.</li>
        <li>b. Nestes casos, é necessário obter autorização formal do gestor do setor ou unidade, bem como registrar a justificativa do uso.</li>
      </div>
  <h4>3.3.2 - Impressão de Documentos com dados Pessoais, Sensíveis ou Sigilosos</h4>
  <div className="lista">
    <li>a. Ao imprimir documentos que contenham informações pessoais ou sensíveis (dados pessoais protegidos pela LGPD, relatórios financeiros ou administrativos sigilosos), os colaboradores devem garantir que terceiros, não autorizados, não tenham acesso a essas informações durante ou após a impressão. Retire os documentos da impressora com brevidade e armazene-os em locais seguros.</li>
  </div>


 <h4>3.3.2.1 - Descarte seguro</h4>


    <ul>
      <li>
        a. No caso de descarte, documentos impressos que possuam dados pessoais
        ou sensíveis devem ser descartados de forma segura, descaracterizando
        os dados e utilizando fragmentadoras para evitar vazamentos.
      </li>
      <div className="atencao">
      <li>
        b. <strong>Atenção:</strong> Folhas com informações de usuários ou de
        servidores não podem ser jogadas em lixo comum, devem ser trituradas ou
        incineradas!
      </li>
      <div className="objetivos-imagem">
    <img src={descarte} alt="Ilustração dos objetivos" />
  </div>
      </div>
    </ul>


  <h4>3.3.3 - Procedimentos Operacionais</h4>
  <ul>
      <h4>3.3.3.1 Solicitação de manutenção ou suprimentos:</h4> 
    <div className="lista">
    <li>a.	Caso ocorra falha na impressora ou necessidade de reposição de toner ou papel, o colaborador responsável deve comunicar imediatamente à GTI, que será o ponto de contato com a empresa terceirizada.</li>
    <li>b.	A necessidade de reposição de Toner ou papel se dará quando tiver 30% da quantidade total de suprimentos.
    </li></div>

    <h4>3.3.3.2 Resmas de papel:</h4> O papel fornecido é de uso exclusivo para as atividades institucionais. Evite desperdício e imprima em frente e verso sempre que possível, contribuindo para a sustentabilidade.
    <h4>3.3.3.3 Toners e suprimentos:</h4> A substituição de toners deve ser feita exclusivamente pela equipe responsável da empresa terceirizada ou pela GTI, quando orientado. É proibido o manuseio pelos colaboradores, salvo em casos excepcionais autorizados.
  </ul>

  <h4>3.3.4 - Monitoramento e Controle de Impressões</h4>
  <ul>
    <h4>3.3.4.1 Monitoramento:</h4><div className="lista"><li> A empresa terceirizada realiza o monitoramento do volume de impressões, garantindo que o uso esteja dentro dos limites contratados e reportando possíveis excessos ou usos inadequados.</li></div>
    <h4>3.3.4.2 Relatórios de impressão:</h4><div className="lista"><li> Relatórios periódicos sobre o uso das impressoras podem ser solicitados pela gestão da SEJUSC para avaliação do consumo por setor e identificação de irregularidades.</li></div>
  </ul>

  <h4>3.3.5 - Exceções e Casos Especiais</h4>
  <ul>
    <h4>3.3.5.1 Uso pessoal autorizado:</h4>
    <div className="lista">
    <li>a.	Em situações excepcionais, como necessidade urgente de impressão pessoal, é obrigatório obter a aprovação prévia do gestor da unidade ou setor.</li>
    <li>b.	Essa autorização deve ser formalizada e registrada para fins de controle.
    </li></div>
    <h4>3.3.5.2 Impressões externas:</h4>
   <div className="lista"><li> Caso as impressoras internas não estejam disponíveis, o gestor pode aprovar a solicitação de serviços externos mediante justificativa.</li>
 </div> </ul>
  <p>Com essas diretrizes, busca-se assegurar o uso profissional e ético das impressoras corporativas, evitando desperdícios e garantindo a eficiência dos serviços de impressão na SEJUSC.</p>
     </div>

  <h3 id="celulares">3.4 - Celulares e Chips Corporativos</h3>
  <p>Os dispositivos móveis disponibilizados pela SEJUSC estão em regime de comodato por empresa terceirizada, e são destinados exclusivamente para uso profissional. Seguem os detalhes:</p>
  
  <div className="uso-computadores-container">
 <h4> 3.4.1 Uso exclusivo:</h4>
  
      <div className="lista">
        <li>a.	Os celulares e chips corporativos devem ser utilizados para comunicações e tarefas relacionadas ao trabalho, como atendimento ao público, reuniões, ou envio de mensagens institucionais.</li>
        <li>b.	O uso para atividades pessoais, como ligações privadas, envio de mensagens em redes sociais ou jogos, é proibido.</li>
      </div>
  
     <h4>3.4.2 Conservação e devolução:</h4>
    
      <div className="lista">
        <li>a.	É responsabilidade do colaborador cuidar adequadamente dos dispositivos, mantendo-os em bom estado de conservação.</li>
        <li>b.	Em caso de desligamento ou término do vínculo com a instituição, os dispositivos devem ser devolvidos imediatamente à GTI, sem danos ou alterações indevidas.</li>
      </div>
    </div>

  <h3 id="movimentacao" >3.5 - Movimentação de Equipamentos</h3>
  <div className="lista">
  <li>a.	Os equipamentos de TI não podem ser trocados de setor sem autorização formal da GTI.</li>
  <li>b.	Celulares e Chips corporativos não podem ser trocados de usuários, devendo nesse caso, realizar a devolução do aparelho e do chip ao setor de TI que irá lavrar termo de recebimento do equipamento e posterior Termo de Responsabilidade para o novo usuário.</li>
</div>
 <div className="objetivos-imagem">
    <img src={gti} alt="Ilustração dos objetivos" />
  </div>

</p>
      
        </div>
    );
}
