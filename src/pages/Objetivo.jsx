import '../Styles/Objetivo.css';

// Mantenha o componente auxiliar CheckListItem
const CheckListItem = ({ children }) => (
    <div className="check-list-item">
        <span className="check-icon"></span>
        <p className="check-list-text">{children}</p>
    </div>
);

export default function Intro() {
    return (
        <div className="section">
            
            {/* Título Principal */}
            <h2 className="section-title-intro">
                2. OBJETIVO
            </h2>
            
            {/* Texto de Introdução */}
            <p>
                Esta cartilha tem como objetivo principal orientar todos os colaboradores da SEJUSC sobre as melhores
                práticas de uso de tecnologia e proteção de dados, estabelecendo diretrizes claras e objetivas.
            </p>
            
            {/* Título da Lista Estilizada - Sem o Bloco Azul em volta */}
            <h3 className="list-main-title no-border">Objetivos Específicos</h3>

            {/* Lista Estilizada (Sem o bloco azul em volta) */}
            <div className="check-list-container no-padding-margin">
                <CheckListItem>Garantir o uso adequado e seguro dos recursos tecnológicos</CheckListItem>
                <CheckListItem>Proteger informações sensíveis e dados pessoais</CheckListItem>
                <CheckListItem>Prevenir incidentes de segurança e vazamento de dados</CheckListItem>
                <CheckListItem>Assegurar conformidade com a LGPD e normas internas</CheckListItem>
                <CheckListItem>Promover a conscientização sobre segurança da informação</CheckListItem>
                <CheckListItem>Estabelecer responsabilidades claras para todos os usuários</CheckListItem>
            </div>

            {/* Subseção 2.1 - Proteção de Dados (Usando h3) */}
            <h3 className="sub-section-title">2.1 - Proteção de Dados</h3>
            <p className="section-subtitle-text">O objetivo é garantir:</p>
            
            {/* Lista com Conteúdo Detalhado - USAMOS A NOVA CLASSE */}
            <ul className="vertical-bullet-list">
                <li>
                    <h4>2.1.1 Segurança e integridade:</h4>
                    Proteger informações institucionais contra acessos não autorizados,
                    uso inadequado e vulnerabilidades tecnológicas ou humanas.
                </li>

                <li>
                    <h4>2.1.2 Proteção de dados sensíveis e pessoais:</h4>
                    Proteger informações como CPF, RG, endereço de IP, dados financeiros
                    e qualquer outra informação que torne possível a identificação, ainda
                    que indireta, de um indivíduo — além de informações que possam revelar
                    aspectos discriminatórios ou sensíveis (ex.: raça, orientação sexual,
                    saúde, religião, política).
                </li>

                <li>
                    <h4>2.1.3 Direitos dos titulares:</h4>
                    Respeitar as garantias legais, assegurando transparência e ética no
                    tratamento de dados, conforme as diretrizes da Lei Geral de Proteção
                    de Dados (LGPD).
                </li>
            </ul>

            {/* Subseção 2.2 - Responsabilidades Gerais */}
            <h3 className="sub-section-title">2.2 - Responsabilidades Gerais</h3>

            {/* Lista de Responsabilidades - USAMOS A NOVA CLASSE */}
            <ul className="vertical-bullet-list">
                <li>
                    <h4>2.2.1 Relatar incidentes:</h4>
                    <p className="no-bottom-margin">Comunicar imediatamente à GTI qualquer incidente de segurança, como:</p>
                    
                    {/* Lista interna com letras */}
                    <ul className="lista-alfabetica">
                        <li>a. E-mails suspeitos ou fraudulentos;</li>
                        <li>b. Vazamentos de senha;</li>
                        <li>c. Acessos indevidos a sistemas ou informações confidenciais;</li>
                        <li>d. Uso inadequado de computadores, notebooks corporativos e dados.</li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}