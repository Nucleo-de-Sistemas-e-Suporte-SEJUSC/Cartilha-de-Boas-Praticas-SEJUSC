import React from 'react';
import '../styles/Sidebar.css';
import {
  FaBook, FaBullseye, FaDesktop, FaLaptop, FaGlobe, FaShareAlt,
  FaEye, FaFileAlt, FaExclamationTriangle, FaCodeBranch, FaWindowRestore
} from 'react-icons/fa';

import card from '../assets/logogticard.png';

export const menuItems = [
  {
    title: 'INTRODUÇÃO', path: '/all#intro', icon: <FaBook />,
    keywords: [
      'introdução',
      'diretrizes',
      'uso responsável',
      'tecnologia',
      'SEJUSC',
      'LGPD',
      'lei 13709',
      'segurança da informação',
      'colaboradores',
      'computadores',
      'notebooks',
      'pastas compartilhadas',
      'impressoras',
      'celulares corporativos',
      'internet',
      'e-mails',
      'proteção de dados sensíveis'
    ]

  },
  {
    title: 'OBJETIVO', path: '/all#objetivo', icon: <FaBullseye />,
    keywords: [
      'objetivo',
      'proteção de dados',
      'segurança',
      'integridade das informações institucionais',
      'acessos não autorizados',
      'vulnerabilidades',
      'proteção de dados pessoais sensíveis',
      'CPF',
      'RG',
      'IP',
      'dados financeiros',
      'identificação',
      'dados discriminatórios',
      'saúde',
      'religião',
      'política',
      'LGPD',
      'direitos dos titulares',
      'transparência',
      'ética',
      'treinamento',
      'conscientização',
      'incidentes de segurança',
      'e-mails suspeitos',
      'vazamento de dados',
      'senhas',
      'acessos indevidos',
      'uso exclusivo institucional'
    ]

  },
  {
    title: 'COMPUTADORES, EQUIPAMENTOS E DISPOSITIVOS',
    path: '/all#equip',
    icon: <FaDesktop />,
    subItems: [
      { title: 'USO E PROTEÇÃO DE EQUIPAMENTOS', path: '/all#uso' },
      { title: 'PERIFÉRICOS E OUTROS DISPOSITIVOS', path: '/all#perifericos' },
      { title: 'IMPRESSORAS CORPORATIVAS', path: '/all#impressoras' },
      { title: 'CELULARES E CHIPS CORPORATIVOS', path: '/all#celulares' },
      { title: 'MOVIMENTAÇÃO DE EQUIPAMENTOS', path: '/all#movimentacao' },
    ],
    keywords: [
      'equipamentos',
      'computadores',
      'notebooks',
      'dispositivos institucionais',
      'uso profissional',
      'atividades profissionais',
      'uso pessoal proibido',
      'redes sociais',
      'vídeos',
      'sites não relacionados',
      'softwares',
      'arquivos pessoais',
      'instalação proibida',
      'segurança',
      'integridade do sistema',
      'cuidados físicos',
      'manuseio',
      'quedas',
      'líquidos',
      'limpeza',
      'manutenção',
      'GTI',
      'periféricos',
      'teclados',
      'mouses',
      'câmeras',
      'fones de ouvido',
      'acessórios',
      'uso correto',
      'reparos',
      'substituições',
      'técnicos',
      'impressoras corporativas',
      'manutenção de impressoras',
      'toner',
      'papel',
      'monitoramento de impressão',
      'documentos profissionais',
      'contratos',
      'ofícios',
      'relatórios',
      'documentos pessoais proibidos',
      'autorização formal',
      'dados pessoais sensíveis',
      'dados sigilosos',
      'LGPD',
      'descarte seguro',
      'fragmentadora',
      'triturar',
      'incinerar',
      'procedimentos operacionais',
      'suprimentos',
      'reposição',
      'papel de uso exclusivo',
      'desperdício',
      'impressão frente e verso',
      'toners',
      'equipe terceirizada',
      'monitoramento de volume',
      'relatórios de uso',
      'avaliação de irregularidades',
      'exceções de uso pessoal autorizado',
      'impressões externas',
      'celulares corporativos',
      'chips corporativos',
      'uso exclusivo para trabalho',
      'comunicação profissional',
      'tarefas de trabalho',
      'conservação de equipamentos',
      'devolução em desligamento',
      'movimentação de equipamentos',
      'autorização da GTI'
    ]

  },
  {
    title: 'SOFTWARES E SISTEMAS',
    path: '/all#soft',
    icon: <FaWindowRestore />,
    subItems: [
      { title: 'REGRAS DE INSTALAÇÃO E USO', path: '/all#regras' },
      { title: 'SISTEMAS INTERNOS', path: '/all#sistemas' },
      { title: 'CADASTRO E REMOÇÃO DE USUÁRIOS', path: '/all#usuarios' },
    ],
    keywords: [
      'softwares',
      'sistemas',
      'regras de instalação',
      'uso autorizado',
      'autorização da GTI',
      'proibição de softwares não licenciados',
      'piratas',
      'segurança cibernética',
      'sanções legais',
      'SIGED',
      'rede',
      'sistemas internos',
      'acesso seguro',
      'credenciais',
      'senhas fortes',
      '8 caracteres',
      'maiúsculas e minúsculas',
      'números e símbolos',
      'bloqueio de tela',
      'Windows+L',
      'confidencialidade',
      'sigilo de senhas',
      'não compartilhar senhas',
      'monitoramento da GTI',
      'prints',
      'fotos',
      'vídeos',
      'dados pessoais',
      'canais oficiais',
      'atualização de senhas a cada 90 dias',
      'cadastro de usuários novos',
      'solicitações de gestores',
      'níveis de acesso',
      'remoção de usuários',
      'desligamento',
      'transferência',
      'revogação de acessos',
      'segurança dos dados institucionais'
    ]

  },
  {
    title: 'INTERNET E E-MAILS', path: '/all#internet', icon: <FaGlobe />,
    subItems: [
      { title: 'USO DA INTERNET', path: '/all#usointernet' },
      { title: 'POLÍTICAS DE E-MAIL', path: '/all#politicasemail' },
    ],
    keywords: [
      'internet',
      'e-mails',
      'dispositivos institucionais',
      'normas de segurança',
      'privacidade',
      'redes sociais',
      'downloads',
      'bloqueios',
      'phishing',
      'malware',
      'comunicação institucional',
      'uso pessoal proibido',
      'confidencialidade',
      'GTI',
      'auditoria'
    ]

  },
  {
    title: 'SERVIDORES E COMPARTILHAMENTOS', path: '/all#servers', icon: <FaShareAlt />,
    subItems: [
      { title: 'ACESSO E PERMISSÕES ÀS PASTAS COMPARTILHADAS', path: '/all#acessopastas' },
      { title: 'ORGANIZAÇÃO E ARMAZENAMENTO DE ARQUIVOS', path: '/all#armazenamento' },
      { title: 'BACKUP E RESTAURAÇÃO DE DADOS', path: '/all#backup' },
      { title: 'MONITORAMENTO E CONFORMIDADE', path: '/all#conformidade' },
    ],
    keywords: [
      'servidores',
      'pastas compartilhadas',
      'permissões de acesso',
      'backup',
      'restauração',
      'segurança',
      'arquivos',
      'armazenamento',
      'usuários',
      'GTI',
      'revisão',
      'integridade dos dados',
      'políticas internas'
    ]

  },
  {
    title: 'MONITORAMENTO E AUDITORIA', path: '/all#audit', icon: <FaEye />,
    subItems: [
      { title: 'AUDITORIA REGULAR E MONITORAMENTO DE ATIVIDADES', path: '/all#auditoria' },
      { title: 'INVESTIGAÇÃO DE ATIVIDADES SUSPEITAS', path: '/all#investigacao' },
    ],
    keywords: [
      'auditoria',
      'monitoramento contínuo',
      'GTI',
      'conformidade',
      'segurança',
      'LGPD',
      'violações',
      'incidentes',
      'advertências',
      'medidas disciplinares',
      'confidencialidade',
      'ética'
    ]

  },
  {
    title: 'CONCLUSÃO', path: '/all#conclusion', icon: <FaFileAlt />,
    subItems: [
      { title: 'COMPROMISSO DOS COLABORADORES', path: '/all#compromisso' },
      { title: 'COMPROMISSO DA ORGANIZAÇÃO', path: '/all#organizacao' },
      { title: 'COLABORAÇÃO MÚTUA', path: '/all#colaboracao' },
    ],
    keywords: [
      'conclusão',
      'políticas',
      'diretrizes',
      'segurança',
      'integridade',
      'boas práticas',
      'compromisso',
      'responsabilidade',
      'uso profissional',
      'conformidade',
      'proteção de dados'
    ]

  },
  {
    title: 'PLANO DE RESPOSTA A INCIDENTES', path: '/all#plano', icon: <FaExclamationTriangle />,
    subItems: [
      { title: 'OBJETIVO', path: '/all#objetivoplano' },
      { title: 'DEFINIÇÃO DE INCIDENTE', path: '/all#definicao' },
      { title: 'AÇÕES IMEDIATAS', path: '/all#acoes' },
      { title: 'ANÁLISE E RESPOSTA', path: '/all#analise' },
      { title: 'REGISTRO E DOCUMENTAÇÃO', path: '/all#registro' },
      { title: 'NOTIFICAÇÃO EXTERNA', path: '/all#notificacao' },
      { title: 'MELHORIA CONTÍNUA', path: '/all#melhoria' },
      { title: 'FLUXO RESUMIDO', path: 'all#fluxo' },
    ],
    keywords: [
      'plano',
      'resposta a incidentes',
      'segurança da informação',
      'LGPD',
      'identificação',
      'contenção',
      'mitigação',
      'recuperação',
      'notificação',
      'ANPD',
      'titulares',
      'dados comprometidos'
    ]
  },
];

export const gtiCard = {
  path: '/equipe',
  icon: <img src={card} alt="Logo GTI" className="gti-logo" />
};

