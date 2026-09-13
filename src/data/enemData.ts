import { ExamQuestion, RedacaoTheme, TopicItem, SubjectType, UserPreferences, DaySchedule, GeneratedPlan, StudyBlock } from '../types';
import { MATEMATICA_QUESTIONS } from './questions/matematica';
import { NATUREZA_QUESTIONS } from './questions/natureza';
import { HUMANAS_QUESTIONS } from './questions/humanas';

// Ordered with the most commonly searched courses first — the first few entries
// are used as the default "popular" quick-picks before the user types anything.
export const POPULAR_COURSES = [
  'Medicina',
  'Direito',
  'Engenharia de Software',
  'Psicologia',
  'Ciência da Computação',
  'Administração',
  'Odontologia',
  'Arquitetura e Urbanismo',
  'Enfermagem',
  'Biomedicina',
  'Engenharia Civil',
  'Engenharia Mecânica',
  'Engenharia Elétrica',
  'Engenharia de Produção',
  'Nutrição',
  'Farmácia',
  'Fisioterapia',
  'Medicina Veterinária',
  'Fonoaudiologia',
  'Educação Física',
  'Pedagogia',
  'História',
  'Geografia',
  'Letras',
  'Filosofia',
  'Sociologia',
  'Ciências Sociais',
  'Relações Internacionais',
  'Jornalismo',
  'Publicidade e Propaganda',
  'Design Gráfico',
  'Ciências Contábeis',
  'Economia',
  'Serviço Social',
  'Sistemas de Informação',
  'Análise e Desenvolvimento de Sistemas',
  'Gastronomia',
  'Turismo',
  'Matemática',
  'Física',
  'Química',
  'Biologia',
  'Zootecnia',
  'Agronomia'
];

export const SUBJECT_INFO: Record<SubjectType, {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}> = {
  matematica: {
    name: 'Matemática',
    icon: 'calculate',
    color: '#7c3aed',
    bgColor: '#ede0ff',
    borderColor: '#7c3aed',
    textColor: '#630ed4'
  },
  natureza: {
    name: 'Natureza',
    icon: 'science',
    color: '#059669',
    bgColor: '#d1fae5',
    borderColor: '#10b981',
    textColor: '#047857'
  },
  linguagens: {
    name: 'Linguagens',
    icon: 'menu_book',
    color: '#2563eb',
    bgColor: '#dbeafe',
    borderColor: '#3b82f6',
    textColor: '#1d4ed8'
  },
  humanas: {
    name: 'Humanas',
    icon: 'public',
    color: '#d97706',
    bgColor: '#fef3c7',
    borderColor: '#f59e0b',
    textColor: '#b45309'
  },
  redacao: {
    name: 'Redação',
    icon: 'edit_document',
    color: '#db2777',
    bgColor: '#fce7f3',
    borderColor: '#ec4899',
    textColor: '#be185d'
  }
};

export const ENEN_TOPICS: TopicItem[] = [
  // Matemática
  {
    id: 'mat-1',
    subject: 'matematica',
    title: 'Razão, Proporção e Regra de Três',
    incidence: '19.8% da prova',
    importance: 'Muito Alta',
    completed: false,
    summary: 'A base da TRI em Matemática. Acerte todas as fáceis para garantir nota acima de 700.'
  },
  {
    id: 'mat-2',
    subject: 'matematica',
    title: 'Estatística (Média, Moda e Mediana)',
    incidence: '14.2% da prova',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Questões diretas de interpretação de gráficos e tabelas. Não perca tempo em cálculos longos.'
  },
  {
    id: 'mat-3',
    subject: 'matematica',
    title: 'Geometria Espacial e Planar (Áreas e Volumes)',
    incidence: '13.5% da prova',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Cálculo de volume de prismas, cilindros e cones, além de escalas em plantas baixas.'
  },
  {
    id: 'mat-4',
    subject: 'matematica',
    title: 'Funções de 1º e 2º Grau',
    incidence: '11.0% da prova',
    importance: 'Alta',
    completed: false,
    summary: 'Modelagem de situações cotidianas, máximos/mínimos e custo/lucro.'
  },
  {
    id: 'mat-5',
    subject: 'matematica',
    title: 'Porcentagem e Matemática Financeira',
    incidence: '9.4% da prova',
    importance: 'Alta',
    completed: false,
    summary: 'Aumentos e descontos sucessivos, juros simples e compostos aplicados.'
  },
  {
    id: 'mat-6',
    subject: 'matematica',
    title: 'Probabilidade e Análise Combinatória',
    incidence: '8.2% da prova',
    importance: 'Média',
    completed: false,
    summary: 'Questões médias/difíceis. Foco em princípios multiplicativos e probabilidade condicional.'
  },

  // Natureza
  {
    id: 'nat-1',
    subject: 'natureza',
    title: 'Ecologia e Impactos Ambientais (Biologia)',
    incidence: '23.4% da prova de Bio',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Ciclos biogeoquímicos, poluição, bioacumulação e relações ecológicas.'
  },
  {
    id: 'nat-2',
    subject: 'natureza',
    title: 'Estequiometria e Soluções (Química)',
    incidence: '16.8% da prova de Qui',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Relações molares, rendimento, pureza e cálculo de concentração em mol/L.'
  },
  {
    id: 'nat-3',
    subject: 'natureza',
    title: 'Circuitos Elétricos e Potência (Física)',
    incidence: '18.1% da prova de Fís',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Primeira e Segunda Lei de Ohm, consumo em kWh e associação de resistores.'
  },
  {
    id: 'nat-4',
    subject: 'natureza',
    title: 'Genética e Biotecnologia (Biologia)',
    incidence: '12.5% da prova de Bio',
    importance: 'Alta',
    completed: false,
    summary: 'Transgênicos, CRISPR, heredogramas e código genético.'
  },
  {
    id: 'nat-5',
    subject: 'natureza',
    title: 'Termodinâmica e Calorimetria (Física)',
    incidence: '11.3% da prova de Fís',
    importance: 'Alta',
    completed: false,
    summary: 'Trocas de calor sensível/latente e máquinas térmicas.'
  },
  {
    id: 'nat-6',
    subject: 'natureza',
    title: 'Química Orgânica (Funções e Isomeria)',
    incidence: '14.0% da prova de Qui',
    importance: 'Alta',
    completed: false,
    summary: 'Identificação de grupos funcionais, reações de esterificação e polímeros.'
  },

  // Linguagens
  {
    id: 'lin-1',
    subject: 'linguagens',
    title: 'Interpretação Textual e Gêneros Digitais',
    incidence: '32.0% da prova',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Identificação do objetivo comunicativo e inferência de pressupostos.'
  },
  {
    id: 'lin-2',
    subject: 'linguagens',
    title: 'Funções da Linguagem e Figuras de Linguagem',
    incidence: '18.4% da prova',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Função emotiva, conativa, metalinguística, fática, referencial e poética.'
  },
  {
    id: 'lin-3',
    subject: 'linguagens',
    title: 'Modernismo Brasileiro e Vanguardas Europeias',
    incidence: '15.2% da prova',
    importance: 'Alta',
    completed: false,
    summary: 'Semana de 22, Carlos Drummond, Clarice Lispector e Guimarães Rosa.'
  },
  {
    id: 'lin-4',
    subject: 'linguagens',
    title: 'Variação Linguística e Preconceito Linguístico',
    incidence: '12.6% da prova',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Variações regionais, sociais e históricas tratadas sem juízo de valor.'
  },

  // Humanas
  {
    id: 'hum-1',
    subject: 'humanas',
    title: 'Era Vargas e Ditadura Militar (História do Brasil)',
    incidence: '21.0% da prova de Hist',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Trabalhismo, censura, movimentos de resistência e redemocratização.'
  },
  {
    id: 'hum-2',
    subject: 'humanas',
    title: 'Geografia Agrária e Urbanização (Geografia)',
    incidence: '19.5% da prova de Geo',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Agropecuária moderna, segregação socioespacial e problemas urbanos.'
  },
  {
    id: 'hum-3',
    subject: 'humanas',
    title: 'Cidadania, Direitos Humanos e Democracia (Sociologia/Filosofia)',
    incidence: '18.2% da prova',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Habermas, Bauman, Foucault e a Declaração Universal dos Direitos Humanos.'
  },
  {
    id: 'hum-4',
    subject: 'humanas',
    title: 'Globalização e Geopolítica Contemporânea',
    incidence: '14.0% da prova de Geo',
    importance: 'Alta',
    completed: false,
    summary: 'Blocos econômicos, multipolaridade e fluxos migratórios globais.'
  },

  // Redação
  {
    id: 'red-1',
    subject: 'redacao',
    title: 'Proposta de Intervenção Completa (5 Elementos)',
    incidence: 'Competência 5 (200 pts)',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Agente + Ação + Modo/Meio + Efeito + Detalhamento obrigatório.'
  },
  {
    id: 'red-2',
    subject: 'redacao',
    title: 'Repertório Sociocultural Produtivo e Legitimado',
    incidence: 'Competência 2 (200 pts)',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Citações filosóficas, leis constitucionais, dados do IBGE e obras literárias conectadas ao tema.'
  },
  {
    id: 'red-3',
    subject: 'redacao',
    title: 'Coesão Referencial e Sequencial (Conectivos)',
    incidence: 'Competência 4 (200 pts)',
    importance: 'Muito Alta',
    completed: false,
    summary: 'Uso diversificado de operadores argumentativos inter e intraparágrafos.'
  }
];

const OUTRAS_QUESTOES: ExamQuestion[] = [
  ,
  ,
  ,
  {
    id: 'q-4',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Funções da Linguagem',
    difficulty: 'Fácil',
    question: 'Em uma campanha publicitária do Ministério da Saúde com os dizeres: "Vacine seu filho. Proteja o futuro de quem você ama!", o texto explora predominantemente qual função da linguagem?',
    options: [
      { letter: 'A', text: 'Metalinguística, por explicar as regras da vacinação.' },
      { letter: 'B', text: 'Fática, por testar o canal de comunicação com os pais.' },
      { letter: 'C', text: 'Conativa (ou Apelativa), por utilizar verbos no imperativo para persuadir o interlocutor.' },
      { letter: 'D', text: 'Poética, por priorizar a rima e métrica textual.' },
      { letter: 'E', text: 'Referencial, por expor friamente dados estatísticos de saúde.' }
    ],
    correctLetter: 'C',
    explanation: 'A função Conativa/Apelativa tem foco no receptor, marcada pelo uso de verbos no imperativo ("Vacine", "Proteja") e pronomes de segunda pessoa com o objetivo de convencer e mudar o comportamento do leitor.',
    triTip: 'Funções da linguagem são garantia de 2 a 3 questões rápidas no 1º dia.'
  },
  ,
  ,
  ,

  // ---- Linguagens e Códigos (adicionais) ----
  {
    id: 'q-23',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Interpretação Textual e Gêneros Digitais',
    difficulty: 'Fácil',
    question: 'Em uma rede social, é comum encontrar publicações que utilizam a expressão "kkkkk" para indicar risada. Do ponto de vista da linguagem, esse tipo de recurso é característico de qual gênero textual?',
    options: [
      { letter: 'A', text: 'Artigo científico' },
      { letter: 'B', text: 'Gênero digital/conversacional informal' },
      { letter: 'C', text: 'Ata de reunião' },
      { letter: 'D', text: 'Texto jurídico' },
      { letter: 'E', text: 'Editorial de jornal' }
    ],
    correctLetter: 'B',
    explanation: 'Expressões como "kkkkk" são marcas da oralidade transposta para a escrita, típicas dos gêneros digitais informais (chats, redes sociais), que priorizam a informalidade e a proximidade entre interlocutores.',
    triTip: 'Questões sobre gêneros digitais avaliam se você reconhece o contexto de uso da linguagem — informal em redes sociais, mais formal em e-mails corporativos, por exemplo.'
  },
  ,
  ,
  ,
  {
    id: 'q-24',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Modernismo Brasileiro e Vanguardas Europeias',
    difficulty: 'Média',
    question: 'A Semana de Arte Moderna de 1922, em São Paulo, é considerada um marco na literatura brasileira por:',
    options: [
      { letter: 'A', text: 'Consolidar definitivamente o estilo parnasiano na poesia nacional.' },
      { letter: 'B', text: 'Propor a ruptura com modelos estéticos tradicionais e valorizar uma identidade artística nacional.' },
      { letter: 'C', text: 'Restringir a produção literária exclusivamente a temas europeus.' },
      { letter: 'D', text: 'Extinguir por completo a produção literária em prosa no Brasil.' },
      { letter: 'E', text: 'Reforçar as regras rígidas do Classicismo português.' }
    ],
    correctLetter: 'B',
    explanation: 'A Semana de Arte Moderna de 1922 rompeu com os padrões estéticos tradicionais (parnasianismo, academicismo) e propôs uma renovação da linguagem artística, valorizando a cultura e identidade nacionais de forma inovadora.',
    triTip: 'Associe a Semana de 22 a nomes como Mário de Andrade, Oswald de Andrade e Tarsila do Amaral — recorrente tanto em Linguagens quanto como repertório de Redação.'
  },
  ,
  ,
  ,
  {
    id: 'q-25',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Variação Linguística e Preconceito Linguístico',
    difficulty: 'Fácil',
    question: 'A frase "Nós pega o ônibus toda manhã", comum na fala de algumas regiões e grupos sociais do Brasil, ilustra um fenômeno linguístico que deve ser compreendido pelos estudantes como:',
    options: [
      { letter: 'A', text: 'Um "erro" que comprova a inferioridade intelectual de quem fala dessa forma.' },
      { letter: 'B', text: 'Uma variação linguística legítima, reflexo da diversidade social e regional da língua.' },
      { letter: 'C', text: 'Uma forma exclusiva da escrita formal acadêmica.' },
      { letter: 'D', text: 'Uma regra obrigatória da norma-padrão da língua portuguesa.' },
      { letter: 'E', text: 'Um recurso característico apenas da linguagem jurídica.' }
    ],
    correctLetter: 'B',
    explanation: 'A Linguística reconhece que variações como a concordância verbal não-padrão refletem a diversidade linguística natural (regional, social, histórica) e não devem ser tratadas como "erro" ou inferioridade — trata-se de preconceito linguístico quando isso ocorre.',
    triTip: 'O ENEM valoriza respostas que reconhecem a variação linguística como legítima — evite alternativas que tratem variantes populares como "erradas".'
  },
  ,
  ,
  ,
  {
    id: 'q-26',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Funções da Linguagem e Figuras de Linguagem',
    difficulty: 'Fácil',
    question: 'Na frase "O sol sorria para o campo verde", identifica-se a personificação (ou prosopopeia), figura de linguagem que consiste em:',
    options: [
      { letter: 'A', text: 'Repetir sons semelhantes ao longo do verso.' },
      { letter: 'B', text: 'Atribuir características e ações humanas a seres inanimados ou não humanos.' },
      { letter: 'C', text: 'Comparar dois elementos utilizando conectivo explícito (como "como").' },
      { letter: 'D', text: 'Substituir uma palavra por outra de sentido oposto.' },
      { letter: 'E', text: 'Exagerar deliberadamente uma característica para causar impacto.' }
    ],
    correctLetter: 'B',
    explanation: 'A personificação (ou prosopopeia) consiste em atribuir ações, sentimentos ou características humanas a seres inanimados ou não humanos — no exemplo, o sol "sorri", ação tipicamente humana.',
    triTip: 'Não confunda personificação (atribuir traços humanos) com comparação/símile (usa conectivo "como") nem com metáfora (comparação implícita sem conectivo).'
  },
  ,
  ,
  ,
  {
    id: 'q-27',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Realismo e Naturalismo Brasileiros',
    difficulty: 'Média',
    question: 'Machado de Assis, em obras como "Memórias Póstumas de Brás Cubas", é reconhecido como o principal expoente do Realismo no Brasil por características como:',
    options: [
      { letter: 'A', text: 'Idealização romântica dos personagens e finais sempre felizes.' },
      { letter: 'B', text: 'Análise crítica e psicológica da sociedade, com narrador irônico e questionador.' },
      { letter: 'C', text: 'Exclusiva valorização da natureza exótica brasileira, sem foco humano.' },
      { letter: 'D', text: 'Linguagem hermética voltada apenas à elite acadêmica europeia.' },
      { letter: 'E', text: 'Ausência total de crítica social nas tramas.' }
    ],
    correctLetter: 'B',
    explanation: 'O Realismo machadiano se caracteriza pela análise crítica e psicológica dos personagens e da sociedade da época, com uso frequente de ironia e um narrador que questiona convenções sociais, rompendo com o idealismo romântico.',
    triTip: 'Machado de Assis é o autor mais cobrado de Literatura no ENEM — memorize a ironia e a crítica social como suas marcas registradas.'
  },
  ,
  ,
  ,
  {
    id: 'q-28',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Interpretação Textual e Gêneros Digitais',
    difficulty: 'Média',
    question: 'Leia o trecho: "O investimento em educação é fundamental; contudo, muitos municípios ainda destinam recursos insuficientes à área." O conectivo "contudo" estabelece, nesse contexto, uma relação de:',
    options: [
      { letter: 'A', text: 'Adição' },
      { letter: 'B', text: 'Causa e consequência' },
      { letter: 'C', text: 'Oposição/contraste' },
      { letter: 'D', text: 'Finalidade' },
      { letter: 'E', text: 'Conformidade' }
    ],
    correctLetter: 'C',
    explanation: 'O conectivo "contudo" é um operador argumentativo que introduz uma ideia de oposição ou contraste em relação ao que foi dito anteriormente, sinalizando uma ressalva ao argumento inicial.',
    triTip: 'Domine os conectivos de oposição (contudo, entretanto, todavia, no entanto) — eles são essenciais tanto para interpretação de texto quanto para a Competência 4 da Redação.'
  },
  ,
  ,
  ,

  // ---- Linguagens e Códigos (Simulado Completo) ----
  {
    id: 'q-38',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Figuras de Linguagem - Metonímia',
    difficulty: 'Fácil',
    question: 'Na frase "O Brasil torce por seus atletas nas Olimpíadas", a palavra "Brasil" é empregada para se referir ao povo brasileiro. Essa figura de linguagem, que consiste em usar o lugar pelo que nele habita, é chamada de:',
    options: [
      { letter: 'A', text: 'Metáfora' },
      { letter: 'B', text: 'Metonímia' },
      { letter: 'C', text: 'Hipérbole' },
      { letter: 'D', text: 'Ironia' },
      { letter: 'E', text: 'Prosopopeia' }
    ],
    correctLetter: 'B',
    explanation: 'Metonímia é a figura de linguagem que substitui um termo por outro com o qual mantém relação lógica de contiguidade — nesse caso, o lugar (Brasil) pelo que nele habita (o povo brasileiro).',
    triTip: 'Metonímia (lugar pelo habitante, autor pela obra, marca pelo produto) é uma das figuras mais cobradas no ENEM — não confunda com metáfora, que é uma comparação implícita.'
  },
  ,
  ,
  ,
  {
    id: 'q-39',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Variação Linguística',
    difficulty: 'Média',
    question: 'Em uma entrevista de emprego, um candidato adapta seu vocabulário e forma de falar, evitando gírias que usaria com os amigos. Esse fenômeno linguístico, em que o falante ajusta a linguagem conforme o contexto social, é conhecido como:',
    options: [
      { letter: 'A', text: 'Preconceito linguístico' },
      { letter: 'B', text: 'Variação linguística diastrática (entre classes sociais)' },
      { letter: 'C', text: 'Adequação linguística (variação diafásica/estilística)' },
      { letter: 'D', text: 'Erro gramatical' },
      { letter: 'E', text: 'Regionalismo' }
    ],
    correctLetter: 'C',
    explanation: 'A adaptação da linguagem ao contexto/situação de comunicação é chamada de variação diafásica ou estilística — o falante escolhe o registro (formal ou informal) conforme a situação, sem que isso configure "erro".',
    triTip: 'O ENEM valoriza a ideia de adequação linguística, não de "certo x errado" — toda variedade linguística é legítima em seu contexto de uso.'
  },
  ,
  ,
  ,
  {
    id: 'q-40',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Literatura - Semana de Arte Moderna de 1922',
    difficulty: 'Média',
    question: 'A Semana de Arte Moderna, realizada em São Paulo em 1922, é considerada um marco da literatura brasileira porque:',
    options: [
      { letter: 'A', text: 'Consolidou o Parnasianismo como estilo literário oficial do Brasil.' },
      { letter: 'B', text: 'Rompeu com os padrões estéticos tradicionais, propondo uma arte brasileira mais livre, experimental e nacionalista.' },
      { letter: 'C', text: 'Proibiu a produção literária em língua portuguesa no país.' },
      { letter: 'D', text: 'Restringiu a arte brasileira exclusivamente a temas europeus.' },
      { letter: 'E', text: 'Marcou o fim da produção literária no Brasil.' }
    ],
    correctLetter: 'B',
    explanation: 'A Semana de Arte Moderna de 1922 inaugurou o Modernismo no Brasil, rompendo com as estéticas parnasiana e simbolista ao propor uma linguagem mais livre, experimental e voltada para a valorização da cultura e identidade nacional.',
    triTip: 'Semana de 22 é presença garantida em Literatura — associe a Oswald de Andrade (Manifesto Antropófago) e Mário de Andrade (Macunaíma).'
  },
  ,
  ,
  ,
  {
    id: 'q-45',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Figuras de Linguagem',
    difficulty: 'Fácil',
    question: 'Na frase "O vento sussurrava segredos entre as árvores", identifica-se o uso de qual figura de linguagem?',
    options: [
      { letter: 'A', text: 'Metáfora' },
      { letter: 'B', text: 'Metonímia' },
      { letter: 'C', text: 'Personificação (prosopopeia)' },
      { letter: 'D', text: 'Hipérbole' },
      { letter: 'E', text: 'Eufemismo' }
    ],
    correctLetter: 'C',
    explanation: 'A personificação (ou prosopopeia) atribui características e ações humanas — como "sussurrar segredos" — a seres inanimados ou não humanos, no caso, o vento.',
    triTip: 'Figuras de linguagem garantem pontos fáceis — associe personificação a "atribuir vida ou ação humana a algo que não é humano".'
  },
  ,
  ,
  ,
  {
    id: 'q-46',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    origin: 'Questão Inédita',
    topic: 'Intertextualidade',
    difficulty: 'Fácil',
    question: 'O recurso pelo qual um texto retoma, cita, parodia ou dialoga explicitamente com outro texto (obra, ditado popular, música etc.) já existente é conhecido como:',
    options: [
      { letter: 'A', text: 'Coesão' },
      { letter: 'B', text: 'Denotação' },
      { letter: 'C', text: 'Intertextualidade' },
      { letter: 'D', text: 'Regência' },
      { letter: 'E', text: 'Ambiguidade' }
    ],
    correctLetter: 'C',
    explanation: 'Intertextualidade é o diálogo entre textos, que pode ocorrer por citação direta, paródia (tom crítico ou humorístico) ou paráfrase (reafirmação da ideia original com outras palavras).',
    triTip: 'Charges e propagandas do ENEM costumam explorar intertextualidade com obras de arte, provérbios ou músicas — fique atento a referências implícitas no texto motivador.'
  }
];

// O banco cresce por matéria: cada uma tem seu próprio arquivo em ./questions.
export const MOCK_QUESTIONS: ExamQuestion[] = [
  ...MATEMATICA_QUESTIONS,
  ...NATUREZA_QUESTIONS,
  ...HUMANAS_QUESTIONS,
  ...OUTRAS_QUESTOES
];

// Simplified, transparent approximation of an ENEM-scale score (0-1000) from raw
// accuracy — NOT the official INEP TRI calculation, which requires calibrated item
// parameters no third party has access to. 320 mirrors the typical floor a real TRI
// score lands on even with zero correct answers; 1000 is reserved for a clean sweep.
export function estimateEnemScore(acertos: number, total: number): number {
  if (total <= 0) return 0;
  const percentual = Math.max(0, Math.min(1, acertos / total));
  const nota = 320 + percentual * 680;
  return Math.round(nota / 10) * 10;
}

export const REDACAO_THEMES: RedacaoTheme[] = [
  {
    id: 'red-theme-1',
    title: 'Desafios para a valorização e preservação dos recursos hídricos no Brasil',
    axis: 'Meio Ambiente & Sustentabilidade',
    status: 'Pendente',
    motivatingContext: 'Apesar de deter 12% da água doce superficial do planeta, o Brasil enfrenta crises hídricas recorrentes, desperdício na distribuição e poluição de bacias vitais.',
    suggestedArguments: [
      'Negligência governamental no saneamento básico e fiscalização de descartes industriais (Conceito de Cidadãos de Papel - Gilberto Dimenstein).',
      'Desconhecimento populacional sobre a pegada hídrica e consumo sustentável (Inércia Social de Francis Bacon).'
    ],
    repertoire: [
      'Constituição Federal de 1988 (Art. 225 - Meio ambiente ecologicamente equilibrado)',
      'Documentário "A Lei da Água" (Novo Código Florestal e mananciais)',
      'Modernidade Líquida - Zygmunt Bauman (Consumo desenfreado)'
    ],
    interventionTips: [
      'Agente: Ministério do Meio Ambiente e Mudança do Clima em parceria com a ANA (Agência Nacional de Águas).',
      'Ação: Implementar o Programa Nacional de Revitalização de Bacias Hidrográficas e modernização da rede de distribuição.',
      'Meio/Modo: Por meio de incentivos fiscais e fiscalização com sensores via satélite.',
      'Efeito: Com o objetivo de assegurar a segurança hídrica e universalização do saneamento.',
      'Detalhamento: Especificando que os recursos virão de royalties de concessões ambientais.'
    ]
  },
  {
    id: 'red-theme-2',
    title: 'O impacto da inteligência artificial e da desinformação na democracia brasileira',
    axis: 'Tecnologia & Cidadania',
    status: 'Pendente',
    motivatingContext: 'O avanço acelerado de deepfakes e algoritmos de polarização em redes sociais desafia a formação de uma opinião pública crítica e a lisura dos processos democráticos.',
    suggestedArguments: [
      'Falta de letramento digital e pensamento crítico nas escolas (Pedagogia da Autonomia - Paulo Freire).',
      'Capitalismo de Vigilância e bolhas informacionais geradas por algoritmos (Shoshana Zuboff).'
    ],
    repertoire: [
      'Shoshana Zuboff - "A Era do Capitalismo de Vigilância"',
      'Artigo 5º da CF/88 (Liberdade de expressão com vedação ao anonimato)',
      'Livro "1984" de George Orwell (Manipulação sistemática da verdade)'
    ],
    interventionTips: [
      'Agente: Tribunal Superior Eleitoral (TSE) articulado ao Ministério da Educação (MEC).',
      'Ação: Criar a plataforma nacional de verificação e incluir a disciplina de Letramento Digital na BNCC.',
      'Meio/Modo: Através de workshops interativos escolares e campanhas de checagem em tempo real.',
      'Efeito: A fim de empoderar o jovem eleitor contra fraudes informacionais.',
      'Detalhamento: Detalhando as métricas de impacto através de relatórios semestrais de transparência algorítmica.'
    ]
  },
  {
    id: 'red-theme-3',
    title: 'Caminhos para combater a evasão escolar e valorizar o ensino técnico no Brasil',
    axis: 'Educação & Sociedade',
    status: 'Pendente',
    motivatingContext: 'Milhões de jovens deixam o ensino médio antes da conclusão para ingressar no mercado de trabalho informal por necessidade de renda familiar.',
    suggestedArguments: [
      'Descompasso entre a grade curricular tradicional e as demandas do mercado de trabalho moderno.',
      'Desigualdade socioeconômica forçando o jovem ao trabalho precoce (Conceito de Habitus - Pierre Bourdieu).'
    ],
    repertoire: [
      'Programa Pé-de-Meia (Incentivo financeiro-educacional do MEC)',
      'Pierre Bourdieu - Teoria da Reprodução Social',
      'Artigo 205 da CF/88 (Educação como direito de todos e dever do Estado e da família)'
    ],
    interventionTips: [
      'Agente: Ministério da Educação (MEC) junto ao Sistema S (SENAI/SENAC).',
      'Ação: Expandir vagas de ensino médio integrado ao técnico com bolsas auxílio.',
      'Meio/Modo: Por intermédio de parcerias público-privadas de jovem aprendiz.',
      'Efeito: Garantindo a permanência do estudante e rápida inserção digna no mercado.',
      'Detalhamento: Priorizando escolas de periferias com menor índice de IDH.'
    ]
  },
  {
    id: 'red-theme-4',
    title: 'O papel da escola e da família no enfrentamento da crise de saúde mental entre jovens no Brasil',
    axis: 'Saúde & Bem-Estar',
    status: 'Pendente',
    motivatingContext: 'O aumento expressivo de diagnósticos de ansiedade e depressão entre adolescentes brasileiros, impulsionado pelo uso excessivo de redes sociais e pela pressão por desempenho, tem sobrecarregado o sistema de saúde e desafiado escolas a lidar com o tema.',
    suggestedArguments: [
      'Cultura da comparação constante fomentada pelas redes sociais, gerando ansiedade e baixa autoestima (Sociedade do Cansaço - Byung-Chul Han).',
      'Ausência de suporte psicológico adequado nas escolas públicas e estigma social em torno da saúde mental.'
    ],
    repertoire: [
      'Lei 13.935/2019 (obriga a rede pública de ensino a oferecer serviços de psicologia e assistência social)',
      'Byung-Chul Han - "Sociedade do Cansaço" (autoexploração e adoecimento psíquico)',
      'Organização Mundial da Saúde (OMS) - dados sobre transtornos mentais entre jovens'
    ],
    interventionTips: [
      'Agente: Ministério da Saúde em parceria com o Ministério da Educação.',
      'Ação: Ampliar a implementação da Lei 13.935/2019, garantindo psicólogos e assistentes sociais em todas as escolas públicas.',
      'Meio/Modo: Por meio de campanhas de conscientização e rodas de conversa periódicas nas escolas.',
      'Efeito: Com o objetivo de reduzir o estigma e garantir diagnóstico e acolhimento precoces.',
      'Detalhamento: Detalhando parcerias com universidades para estágios supervisionados de psicologia nas escolas.'
    ]
  },
  {
    id: 'red-theme-5',
    title: 'Desafios para a mobilidade urbana sustentável nas grandes cidades brasileiras',
    axis: 'Cidades & Mobilidade',
    status: 'Pendente',
    motivatingContext: 'O crescimento desordenado das frotas de veículos particulares nas metrópoles brasileiras agrava congestionamentos, poluição do ar e o tempo de deslocamento da população, evidenciando a defasagem do transporte público em relação à demanda.',
    suggestedArguments: [
      'Priorização histórica do transporte individual sobre o coletivo no planejamento urbano brasileiro.',
      'Desigualdade no acesso à mobilidade, penalizando a população periférica que depende de transporte público precário (Direito à Cidade - Henri Lefebvre).'
    ],
    repertoire: [
      'Henri Lefebvre - "O Direito à Cidade" (acesso equitativo aos espaços e serviços urbanos)',
      'Lei 12.587/2012 (Política Nacional de Mobilidade Urbana, prioriza modos coletivos e não motorizados)',
      'Estatuto da Cidade - Lei 10.257/2001 (planejamento urbano voltado à função social da cidade)'
    ],
    interventionTips: [
      'Agente: Ministério das Cidades em parceria com as prefeituras metropolitanas.',
      'Ação: Expandir corredores de ônibus, ciclovias e integração tarifária entre modais de transporte.',
      'Meio/Modo: Por meio de investimento em infraestrutura cicloviária e subsídio ao transporte coletivo.',
      'Efeito: A fim de reduzir o tempo de deslocamento e as emissões de poluentes.',
      'Detalhamento: Priorizando regiões periféricas com menor cobertura de transporte público de qualidade.'
    ]
  }
];

// Builds a single day's study blocks for a given pair of subjects.
// Shared by generateStudyPlan (initial generation) and regenerateDaySubject (manual per-day edits).
export function buildDaySchedule(
  dayIndex: number,
  dayName: string,
  mainSubject: SubjectType,
  secondarySubject: SubjectType,
  dailyMinutes: number
): DaySchedule {
  const blocks: StudyBlock[] = [];
  const blockDuration = Math.max(30, Math.floor(dailyMinutes / (dailyMinutes >= 180 ? 3 : 2)));

  // Block 1: Main High-Yield Concept + Practice
  const mainTopicObj = ENEN_TOPICS.find(t => t.subject === mainSubject) || ENEN_TOPICS[0];
  blocks.push({
    id: `block-${dayIndex}-1`,
    title: `${SUBJECT_INFO[mainSubject].name}: Teoria Ativa`,
    subject: mainSubject,
    topic: mainTopicObj.title,
    durationMinutes: blockDuration,
    triWeight: 'Muito Alta',
    completed: false,
    tip: mainTopicObj.summary,
    sourceExam: 'ENEM Recorrente'
  });

  // Block 2: Focused Question Resolution
  blocks.push({
    id: `block-${dayIndex}-2`,
    title: `${SUBJECT_INFO[mainSubject].name}: 15 Questões ENEM`,
    subject: mainSubject,
    topic: `Resolução guiada de questões anteriores (${mainTopicObj.title})`,
    durationMinutes: blockDuration,
    triWeight: 'Muito Alta',
    completed: false,
    tip: 'Cronometre em média 3 minutos por questão para treinar o ritmo de prova.',
    sourceExam: 'ENEM 2020-2024'
  });

  // Block 3 (if 3h+ time per day) or alternate Redação
  if (dailyMinutes >= 180) {
    if (dayIndex % 2 === 0) {
      blocks.push({
        id: `block-${dayIndex}-3`,
        title: `Redação Nota 1000: Estrutura & Repertório`,
        subject: 'redacao',
        topic: `Projeto de texto e repertório para eixo temático semanal`,
        durationMinutes: blockDuration,
        triWeight: 'Muito Alta',
        completed: false,
        tip: 'Treine a proposta de intervenção garantindo os 5 elementos da Competência 5.',
        sourceExam: 'Banco de Temas'
      });
    } else {
      const secTopicObj = ENEN_TOPICS.find(t => t.subject === secondarySubject) || ENEN_TOPICS[1];
      blocks.push({
        id: `block-${dayIndex}-3`,
        title: `${SUBJECT_INFO[secondarySubject].name}: Revisão Express`,
        subject: secondarySubject,
        topic: secTopicObj.title,
        durationMinutes: blockDuration,
        triWeight: 'Alta',
        completed: false,
        tip: secTopicObj.summary,
        sourceExam: 'ENEM Flash-Review'
      });
    }
  }

  return {
    dayNumber: dayIndex + 1,
    dayName,
    focusArea: `${SUBJECT_INFO[mainSubject].name} & ${dailyMinutes >= 180 ? 'Redação/Revisão' : 'Prática TRI'}`,
    totalTimeMinutes: dailyMinutes,
    blocks
  };
}

// Regenerates a single day's blocks for a manually chosen subject (used by the
// "Editar dias e matérias" panel in CronogramaView), keeping its position/duration.
export function regenerateDaySubject(day: DaySchedule, newSubject: SubjectType): DaySchedule {
  return buildDaySchedule(day.dayNumber - 1, day.dayName, newSubject, newSubject, day.totalTimeMinutes);
}

// Helper to generate personalized Sprint Schedule
export function generateStudyPlan(preferences: UserPreferences): GeneratedPlan {
  const { curso, tempoDia, diasSemana, nivel, dificuldades } = preferences;

  // Calculate hours available
  const dailyMinutesMap: Record<string, number> = {
    '1h': 60,
    '2h': 120,
    '4h': 240,
    '6h+': 360
  };
  const dailyMinutes = dailyMinutesMap[tempoDia] || 120;
  const totalWeeklyMinutes = dailyMinutes * diasSemana;
  const totalWeeklyHours = Math.round(totalWeeklyMinutes / 60);

  // Subject prioritization based on course & user difficulty
  const isMedicina = curso.toLowerCase().includes('med') || curso.toLowerCase().includes('biomed');
  const isExatas = curso.toLowerCase().includes('eng') || curso.toLowerCase().includes('comp') || curso.toLowerCase().includes('mat') || curso.toLowerCase().includes('fís');
  const isHumanas = curso.toLowerCase().includes('dir') || curso.toLowerCase().includes('psi') || curso.toLowerCase().includes('hist') || curso.toLowerCase().includes('letr') || curso.toLowerCase().includes('pedag');

  const daysNames = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const weeklySchedule: DaySchedule[] = [];

  const subjectRotation: SubjectType[] = [];
  
  // Build balanced rotation giving higher frequency to user difficulties
  if (dificuldades.length > 0) {
    subjectRotation.push(...dificuldades);
  }
  // Fill remaining slots with course-targeted subjects
  if (isMedicina) {
    subjectRotation.push('natureza', 'redacao', 'matematica', 'natureza');
  } else if (isExatas) {
    subjectRotation.push('matematica', 'natureza', 'matematica', 'redacao');
  } else if (isHumanas) {
    subjectRotation.push('humanas', 'linguagens', 'redacao', 'humanas');
  } else {
    subjectRotation.push('matematica', 'redacao', 'natureza', 'linguagens', 'humanas');
  }

  // Generate day-by-day sprint
  for (let i = 0; i < diasSemana; i++) {
    const dayName = daysNames[i] || `Dia ${i + 1}`;
    const mainSubject = subjectRotation[i % subjectRotation.length];
    const secondarySubject = subjectRotation[(i + 2) % subjectRotation.length];
    weeklySchedule.push(buildDaySchedule(i, dayName, mainSubject, secondarySubject, dailyMinutes));
  }

  // AI & Pedagogical Recommendations
  const aiRecommendations = [
    `🎯 **Foco em ${curso || 'Seu Curso'}**: Com base nas notas de corte SISU, sua maior alavanca de pontos está em **Matemática** (pode chegar a 980+) e **Redação** (escala direta até 1000).`,
    `⚡ **Estratégia de Ritmo (${tempoDia}/dia, ${diasSemana}x na semana)**: Distribuímos ${totalWeeklyHours}h semanais em blocos ágeis com método Pomodoro para maximizar retenção sem exaustão.`,
    `📈 **Ajuste para Nível ${nivel.toUpperCase()}**: Foco absoluto nas questões fáceis e médias da TRI para não sofrer penalização de coerência pedagógica.`
  ];

  if (dificuldades.length > 0) {
    const diffNames = dificuldades.map(d => SUBJECT_INFO[d].name).join(', ');
    aiRecommendations.push(`💡 **Superação de Dificuldades**: Reforço programado com teoria ativa e banco de erros em **${diffNames}**.`);
  }

  const triStrategy = [
    {
      subject: 'Matemática e suas Tecnologias',
      weight: isExatas || isMedicina ? 'Peso Alto (TRI elástica)' : 'Peso Médio/Alto',
      strategy: 'Acerte 100% das fáceis (Razão, Estatística básica, Geometria plana). Errar fácil custa até 60 pontos na TRI.',
      highYieldTopics: ['Razão, Proporção e Regra de Três', 'Estatística (Média/Moda/Mediana)', 'Geometria Espacial (Volume)', 'Funções 1º/2º Grau']
    },
    {
      subject: 'Redação',
      weight: 'Nota Máxima 1000',
      strategy: 'Escreva 1 redação cronometrada por semana. Garanta os 200 pontos da Competência 5 com agente detalhado.',
      highYieldTopics: ['Proposta de Intervenção com 5 elementos', 'Repertórios coringas (CF/88, Bauman, Dimenstein)', 'Conectivos intra e interparágrafo']
    },
    {
      subject: 'Ciências da Natureza',
      weight: isMedicina || isExatas ? 'Peso Decisivo' : 'Peso Médio',
      strategy: 'Foque em Ecologia (Biologia) e Circuitos/Ondulatória (Física) para somar pontos rápidos.',
      highYieldTopics: ['Ecologia e Impactos Ambientais', 'Circuitos e Eletrodinâmica', 'Estequiometria e Soluções', 'Química Orgânica']
    }
  ];

  return {
    preferences,
    weeklySchedule,
    aiRecommendations,
    triStrategy,
    summaryStats: {
      totalWeeklyHours,
      completedHours: 0,
      completionPercentage: 0,
      streakDays: 3
    },
    createdAt: new Date().toISOString()
  };
}
