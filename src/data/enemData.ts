import { ExamQuestion, RedacaoTheme, TopicItem, SubjectType, UserPreferences, DaySchedule, GeneratedPlan, StudyBlock } from '../types';

export const POPULAR_COURSES = [
  'Medicina',
  'Direito',
  'Engenharia de Software',
  'Psicologia',
  'Ciência da Computação',
  'Odontologia',
  'Administração',
  'Arquitetura e Urbanismo',
  'Enfermagem',
  'Biomedicina'
];

export const SUBJECT_INFO: Record<SubjectType, {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  triMaxScore: string;
}> = {
  matematica: {
    name: 'Matemática',
    icon: 'calculate',
    color: '#7c3aed',
    bgColor: '#ede0ff',
    borderColor: '#7c3aed',
    textColor: '#630ed4',
    triMaxScore: 'Até 980+ pontos na TRI'
  },
  natureza: {
    name: 'Natureza',
    icon: 'science',
    color: '#059669',
    bgColor: '#d1fae5',
    borderColor: '#10b981',
    textColor: '#047857',
    triMaxScore: 'Foco em Biologia, Física e Química'
  },
  linguagens: {
    name: 'Linguagens',
    icon: 'menu_book',
    color: '#2563eb',
    bgColor: '#dbeafe',
    borderColor: '#3b82f6',
    textColor: '#1d4ed8',
    triMaxScore: 'Interpretação e Funções da Linguagem'
  },
  humanas: {
    name: 'Humanas',
    icon: 'public',
    color: '#d97706',
    bgColor: '#fef3c7',
    borderColor: '#f59e0b',
    textColor: '#b45309',
    triMaxScore: 'História, Geografia, Filosofia e Sociologia'
  },
  redacao: {
    name: 'Redação',
    icon: 'edit_document',
    color: '#db2777',
    bgColor: '#fce7f3',
    borderColor: '#ec4899',
    textColor: '#be185d',
    triMaxScore: 'Garante 1000 pontos diretos'
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

export const MOCK_QUESTIONS: ExamQuestion[] = [
  {
    id: 'q-1',
    subject: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    year: 'ENEM 2023',
    topic: 'Razão e Proporção',
    difficulty: 'Fácil',
    question: 'Um mapa é construído na escala 1 : 50 000. Dois pontos A e B situados nesse mapa estão separados por uma distância de 4 cm. Qual é a distância real, em quilômetros, entre esses dois pontos?',
    options: [
      { letter: 'A', text: '0,2 km' },
      { letter: 'B', text: '2 km' },
      { letter: 'C', text: '20 km' },
      { letter: 'D', text: '200 km' },
      { letter: 'E', text: '2 000 km' }
    ],
    correctLetter: 'B',
    explanation: 'A distância real D = 4 cm × 50 000 = 200 000 cm. Convertendo centímetros para metros: 200 000 / 100 = 2 000 m. Convertendo para quilômetros: 2 000 / 1 000 = 2 km.',
    triTip: 'Questão de nível fácil! Na TRI do ENEM, errar uma questão de escala derruba sua nota média mesmo se você acertar questões complexas de logaritmo.'
  },
  {
    id: 'q-2',
    subject: 'natureza',
    areaName: 'Ciências da Natureza',
    year: 'ENEM 2022',
    topic: 'Ecologia - Bioacumulação',
    difficulty: 'Média',
    question: 'Metais pesados despejados irregularmente em corpos hídricos acumulam-se progressivamente ao longo dos níveis tróficos de uma cadeia alimentar aquática (magnificação trófica). Qual organismo apresentará a maior concentração desse poluente por unidade de biomassa?',
    options: [
      { letter: 'A', text: 'Fitoplâncton (produtor primário)' },
      { letter: 'B', text: 'Zooplâncton (consumidor primário)' },
      { letter: 'C', text: 'Pequenos peixes herbívoros' },
      { letter: 'D', text: 'Aves piscívoras de topo de cadeia' },
      { letter: 'E', text: 'Bactérias decompositoras' }
    ],
    correctLetter: 'D',
    explanation: 'Na bioacumulação/magnificação trófica, compostos não biodegradáveis têm sua concentração amplificada a cada nível trófico. O consumidor do topo da cadeia (aves que comem peixes carnívoros) acumula a maior dose residual.',
    triTip: 'Tema clássico do ENEM! Quase todos os anos há pelo menos 1 questão de relações ecológicas ou desequilíbrio ambiental.'
  },
  {
    id: 'q-3',
    subject: 'humanas',
    areaName: 'Ciências Humanas',
    year: 'ENEM 2023',
    topic: 'Sociologia - Cidadania e Constituição de 1988',
    difficulty: 'Média',
    question: 'A Constituição Cidadã de 1988 representou um marco fundamental na história brasileira ao institucionalizar direitos sociais inéditos. Dentre esses avanços fundamentais, destaca-se:',
    options: [
      { letter: 'A', text: 'A centralização das decisões de saúde na União sem participação social.' },
      { letter: 'B', text: 'A criação do Sistema Único de Saúde (SUS) universal, público e descentralizado.' },
      { letter: 'C', text: 'A restrição do direito de voto para analfabetos durante eleições municipais.' },
      { letter: 'D', text: 'A proibição do direito de greve para os servidores públicos civis.' },
      { letter: 'E', text: 'A censura prévia mantida para espetáculos culturais e produções teatrais.' }
    ],
    correctLetter: 'B',
    explanation: 'O Artigo 196 da CF/88 consagrou que a saúde é direito de todos e dever do Estado, dando origem ao SUS.',
    triTip: 'Use o Artigo 196 e a CF/88 como repertório coringa de Redação para quase qualquer tema de saúde, educação ou segurança!'
  },
  {
    id: 'q-4',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    year: 'ENEM 2023',
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
  }
];

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
  }
];

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

    const blocks: StudyBlock[] = [];
    const blockDuration = Math.max(30, Math.floor(dailyMinutes / (dailyMinutes >= 180 ? 3 : 2)));

    // Block 1: Main High-Yield Concept + Practice
    const mainTopicObj = ENEN_TOPICS.find(t => t.subject === mainSubject) || ENEN_TOPICS[0];
    blocks.push({
      id: `block-${i}-1`,
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
      id: `block-${i}-2`,
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
      if (i % 2 === 0) {
        blocks.push({
          id: `block-${i}-3`,
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
          id: `block-${i}-3`,
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

    weeklySchedule.push({
      dayNumber: i + 1,
      dayName,
      focusArea: `${SUBJECT_INFO[mainSubject].name} & ${dailyMinutes >= 180 ? 'Redação/Revisão' : 'Prática TRI'}`,
      totalTimeMinutes: dailyMinutes,
      blocks
    });
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
