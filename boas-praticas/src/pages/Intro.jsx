import '../styles/Intro.css';

// Importe sua imagem aqui, se ela for um ícone ou banner real no título
// import banner from '../assets/banner.png'; // Se 'banner.png' for o ícone do livro no título

export default function Intro() {
    return (
        <div className="section">
            
            {/* 1. TÍTULO CORRIGIDO - Coloque o <h2> fora do <p> */}
            {/* Se você quiser o ícone no título, pode usar uma <span> ou <img> */}
            <h2 className="section-title-intro">
                {/* <img src={banner} alt="Ícone" className="title-icon" /> */}
                1. INTRODUÇÃO
            </h2>
            
            {/* 2. TEXTO PRINCIPAL */}
            <p> 
                Esta documentação estabelece diretrizes claras e organizadas para a utilização responsável e segura dos recursos tecnológicos da Secretaria de Estado de Justiça, Direitos Humanos e Cidadania (SEJUSC-AM). O objetivo é assegurar a conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong> e padrões internacionais de segurança da informação.
            </p>
            
            {/* 3. BLOCO "Abrangência" (o bloco grande) */}
            <div className="info-block-full blue-light-block">
                <h4 className="info-block-title">
                    <span className="icon-shield-lg"></span> Abrangência
                </h4>
                <p className="no-margin">
                    As normas descritas aqui aplicam-se a todos os colaboradores que utilizam computadores, notebooks, pastas compartilhadas, impressoras, celulares corporativos e outros dispositivos fornecidos pela SEJUSC. Também abrange o uso da internet, e-mails corporativos e a proteção de dados sensíveis.
                </p>
            </div>

            {/* 4. BLOCOS MENORES (lado a lado) */}
            <div className="info-blocks-row">
                
                {/* Segurança da Informação */}
                <div className="info-block-half blue-bg-block">
                    <h4 className="info-block-title">
                        <span className="icon-lock-lg"></span> Segurança da Informação
                    </h4>
                    <p>
                        Proteção de dados e informações sensíveis através de políticas rigorosas e boas práticas.
                    </p>
                </div>

                {/* Responsabilidade Coletiva */}
                <div className="info-block-half green-bg-block">
                    <h4 className="info-block-title">
                        <span className="icon-users-lg"></span> Responsabilidade Coletiva
                    </h4>
                    <p>
                        Todos os colaboradores são responsáveis pelo uso adequado dos recursos tecnológicos.
                    </p>
                </div>

            </div>
            
            <div className="objetivos-imagem">
        <img src="public\LGPD.png" alt="Ilustração dos objetivos" />
    </div>

        </div>
    );
}