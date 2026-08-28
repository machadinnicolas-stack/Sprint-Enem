import { ExamQuestion, RedacaoTheme, TopicItem, SubjectType, UserPreferences, DaySchedule, GeneratedPlan, StudyBlock } from '../types';

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
  },

  // ---- Matemática (adicionais) ----
  {
    id: 'q-5',
    subject: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    year: 'ENEM 2021',
    topic: 'Estatística (Média, Moda e Mediana)',
    difficulty: 'Fácil',
    question: 'Um professor aplicou uma prova para 7 alunos e obteve as seguintes notas: 6, 7, 7, 8, 8, 8, 9. Qual é a moda dessas notas?',
    options: [
      { letter: 'A', text: '6' },
      { letter: 'B', text: '7' },
      { letter: 'C', text: '7,5' },
      { letter: 'D', text: '8' },
      { letter: 'E', text: '9' }
    ],
    correctLetter: 'D',
    explanation: 'A moda é o valor que mais se repete no conjunto de dados. Entre as notas 6, 7, 7, 8, 8, 8, 9, o valor 8 aparece três vezes, mais que qualquer outro, portanto a moda é 8.',
    triTip: 'Questões de moda/média/mediana são garantidas na prova e resolvidas em segundos — não pule essas por medo de "estatística difícil".'
  },
  {
    id: 'q-6',
    subject: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    year: 'ENEM 2022',
    topic: 'Geometria Espacial e Planar (Áreas e Volumes)',
    difficulty: 'Média',
    question: 'Uma caixa d\'água tem formato cilíndrico, com raio da base igual a 1 m e altura de 2 m. Considerando π = 3, qual é a capacidade dessa caixa d\'água, em litros? (1 m³ = 1000 L)',
    options: [
      { letter: 'A', text: '600 L' },
      { letter: 'B', text: '2 000 L' },
      { letter: 'C', text: '3 000 L' },
      { letter: 'D', text: '6 000 L' },
      { letter: 'E', text: '12 000 L' }
    ],
    correctLetter: 'D',
    explanation: 'O volume do cilindro é V = π·r²·h = 3 × 1² × 2 = 6 m³. Como 1 m³ equivale a 1000 L, o volume é 6 × 1000 = 6000 L.',
    triTip: 'Nas questões de volume, o ENEM costuma fornecer valores redondos para π (3 ou 3,14) — sempre confira qual foi dado no enunciado antes de calcular.'
  },
  {
    id: 'q-7',
    subject: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    year: 'ENEM 2020',
    topic: 'Funções de 1º e 2º Grau',
    difficulty: 'Média',
    question: 'O lucro mensal L, em reais, de uma pequena fábrica de bolos é modelado pela função L(x) = -2x² + 80x - 600, em que x é o número de bolos vendidos no mês. Qual é o número de bolos que maximiza o lucro dessa fábrica?',
    options: [
      { letter: 'A', text: '10' },
      { letter: 'B', text: '20' },
      { letter: 'C', text: '30' },
      { letter: 'D', text: '40' },
      { letter: 'E', text: '80' }
    ],
    correctLetter: 'B',
    explanation: 'O lucro máximo de uma função quadrática ocorre no vértice da parábola, calculado por x = -b/(2a). Substituindo a = -2 e b = 80: x = -80/(2×(-2)) = 20 bolos.',
    triTip: 'Toda questão de "máximo/mínimo" com função do 2º grau se resolve com a fórmula do vértice (xv = -b/2a) — decore essa fórmula, ela cai quase todo ano.'
  },
  {
    id: 'q-8',
    subject: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    year: 'ENEM 2023',
    topic: 'Porcentagem e Matemática Financeira',
    difficulty: 'Fácil',
    question: 'Um produto custava R$ 250,00 e sofreu um aumento de 20%. Em seguida, devido a uma promoção, o novo preço recebeu um desconto de 10%. Qual é o preço final do produto, após o aumento e o desconto sucessivos?',
    options: [
      { letter: 'A', text: 'R$ 225,00' },
      { letter: 'B', text: 'R$ 230,00' },
      { letter: 'C', text: 'R$ 260,00' },
      { letter: 'D', text: 'R$ 270,00' },
      { letter: 'E', text: 'R$ 300,00' }
    ],
    correctLetter: 'D',
    explanation: 'Aumento de 20%: 250 × 1,20 = R$ 300,00. Desconto de 10% sobre o novo valor: 300 × 0,90 = R$ 270,00.',
    triTip: 'Em aumentos/descontos sucessivos, nunca some ou subtraia as porcentagens diretamente (20% - 10% ≠ 10%) — sempre aplique uma de cada vez sobre o valor atualizado.'
  },
  {
    id: 'q-9',
    subject: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    year: 'ENEM 2019',
    topic: 'Probabilidade e Análise Combinatória',
    difficulty: 'Difícil',
    question: 'Uma urna contém 4 bolas vermelhas e 6 bolas azuis, indistinguíveis pelo tato. Retirando-se uma bola ao acaso, qual é a probabilidade de ela ser vermelha?',
    options: [
      { letter: 'A', text: '10%' },
      { letter: 'B', text: '20%' },
      { letter: 'C', text: '40%' },
      { letter: 'D', text: '60%' },
      { letter: 'E', text: '70%' }
    ],
    correctLetter: 'C',
    explanation: 'A probabilidade é dada pela razão entre casos favoráveis e casos possíveis: 4 bolas vermelhas em um total de 10 bolas, ou seja, 4/10 = 0,4 = 40%.',
    triTip: 'A maioria das questões de probabilidade do ENEM (nível fácil/médio) se resume a "casos favoráveis dividido por casos possíveis" — não complique com fórmulas de combinatória se o enunciado não pedir.'
  },
  {
    id: 'q-10',
    subject: 'matematica',
    areaName: 'Matemática e suas Tecnologias',
    year: 'ENEM 2022',
    topic: 'Razão, Proporção e Regra de Três',
    difficulty: 'Média',
    question: 'Uma equipe de 6 pedreiros constrói um muro de 90 metros em 15 dias. Mantendo o mesmo ritmo de trabalho, em quantos dias uma equipe de 9 pedreiros construiria um muro de 135 metros?',
    options: [
      { letter: 'A', text: '10 dias' },
      { letter: 'B', text: '12 dias' },
      { letter: 'C', text: '15 dias' },
      { letter: 'D', text: '18 dias' },
      { letter: 'E', text: '20 dias' }
    ],
    correctLetter: 'C',
    explanation: 'Trata-se de uma regra de três composta. O número de dias é diretamente proporcional aos metros e inversamente proporcional ao número de pedreiros: d = 15 × (135/90) × (6/9) = 15 dias — o aumento de pedreiros compensa exatamente o aumento do comprimento do muro.',
    triTip: 'Em regra de três composta, identifique com cuidado se cada grandeza é diretamente ou inversamente proporcional à grandeza pedida antes de montar a equação — esse é o erro mais comum na prova.'
  },

  // ---- Ciências da Natureza (adicionais) ----
  {
    id: 'q-11',
    subject: 'natureza',
    areaName: 'Ciências da Natureza',
    year: 'ENEM 2021',
    topic: 'Estequiometria e Soluções (Química)',
    difficulty: 'Média',
    question: 'Na reação de combustão completa do metano (CH₄ + 2O₂ → CO₂ + 2H₂O), a queima de 1 mol de metano consome quantos mols de gás oxigênio (O₂)?',
    options: [
      { letter: 'A', text: '1 mol' },
      { letter: 'B', text: '2 mols' },
      { letter: 'C', text: '3 mols' },
      { letter: 'D', text: '4 mols' },
      { letter: 'E', text: '6 mols' }
    ],
    correctLetter: 'B',
    explanation: 'Pela equação balanceada CH₄ + 2O₂ → CO₂ + 2H₂O, a proporção estequiométrica é de 1 mol de metano para 2 mols de gás oxigênio.',
    triTip: 'Questões de estequiometria do ENEM raramente exigem cálculos complexos — na maioria das vezes, basta ler os coeficientes da equação já balanceada.'
  },
  {
    id: 'q-12',
    subject: 'natureza',
    areaName: 'Ciências da Natureza',
    year: 'ENEM 2023',
    topic: 'Circuitos Elétricos e Potência (Física)',
    difficulty: 'Média',
    question: 'Um chuveiro elétrico opera em uma tensão de 220 V e é percorrido por uma corrente elétrica de 25 A. Qual é a potência elétrica desse chuveiro, em watts?',
    options: [
      { letter: 'A', text: '1 100 W' },
      { letter: 'B', text: '2 200 W' },
      { letter: 'C', text: '4 400 W' },
      { letter: 'D', text: '5 500 W' },
      { letter: 'E', text: '8 800 W' }
    ],
    correctLetter: 'D',
    explanation: 'A potência elétrica é dada por P = V × i. Substituindo os valores: P = 220 × 25 = 5500 W.',
    triTip: 'A fórmula P = V × i é a base de quase toda questão de circuitos no ENEM — combine com P = R × i² e P = V²/R apenas se o enunciado pedir resistência.'
  },
  {
    id: 'q-13',
    subject: 'natureza',
    areaName: 'Ciências da Natureza',
    year: 'ENEM 2020',
    topic: 'Genética e Biotecnologia (Biologia)',
    difficulty: 'Difícil',
    question: 'Em uma espécie de planta, a cor vermelha da flor (alelo R) é dominante sobre a cor branca (alelo r). Cruzando-se duas plantas heterozigotas (Rr × Rr), qual é a proporção fenotípica esperada na prole?',
    options: [
      { letter: 'A', text: '1 vermelha : 1 branca' },
      { letter: 'B', text: '1 vermelha : 3 brancas' },
      { letter: 'C', text: '3 vermelhas : 1 branca' },
      { letter: 'D', text: 'Todas vermelhas' },
      { letter: 'E', text: 'Todas brancas' }
    ],
    correctLetter: 'C',
    explanation: 'No cruzamento Rr × Rr, o quadro de Punnett resulta em 1 RR : 2 Rr : 1 rr. Como R é dominante, os genótipos RR e Rr expressam a cor vermelha, resultando na proporção fenotípica clássica de 3 vermelhas para 1 branca.',
    triTip: 'A proporção 3:1 é a "assinatura" de um cruzamento monoíbrido entre heterozigotos — reconhecer esse padrão rapidamente economiza tempo precioso na prova.'
  },
  {
    id: 'q-14',
    subject: 'natureza',
    areaName: 'Ciências da Natureza',
    year: 'ENEM 2019',
    topic: 'Termodinâmica e Calorimetria (Física)',
    difficulty: 'Média',
    question: 'Uma amostra de 200 g de água (calor específico de 1 cal/g°C) é aquecida de 20°C para 70°C. Qual é a quantidade de calor sensível absorvida por essa amostra?',
    options: [
      { letter: 'A', text: '1 000 cal' },
      { letter: 'B', text: '5 000 cal' },
      { letter: 'C', text: '10 000 cal' },
      { letter: 'D', text: '14 000 cal' },
      { letter: 'E', text: '20 000 cal' }
    ],
    correctLetter: 'C',
    explanation: 'O calor sensível é calculado por Q = m·c·ΔT. Substituindo: Q = 200 × 1 × (70-20) = 200 × 50 = 10 000 cal.',
    triTip: 'Sempre confira a unidade do calor específico fornecida (cal/g°C ou J/g°C) — trocar a unidade sem perceber é a armadilha mais comum nessas questões.'
  },
  {
    id: 'q-15',
    subject: 'natureza',
    areaName: 'Ciências da Natureza',
    year: 'ENEM 2022',
    topic: 'Química Orgânica (Funções e Isomeria)',
    difficulty: 'Média',
    question: 'O etanol (CH₃-CH₂-OH), amplamente usado como biocombustível no Brasil, pertence a qual função orgânica, caracterizada pela presença do grupo hidroxila (-OH) ligado a um carbono saturado?',
    options: [
      { letter: 'A', text: 'Ácido carboxílico' },
      { letter: 'B', text: 'Aldeído' },
      { letter: 'C', text: 'Álcool' },
      { letter: 'D', text: 'Cetona' },
      { letter: 'E', text: 'Éter' }
    ],
    correctLetter: 'C',
    explanation: 'A presença do grupo hidroxila (-OH) ligado a um carbono saturado é a característica que define a função álcool, como no caso do etanol.',
    triTip: 'Memorize os grupos funcionais principais (álcool -OH, ácido carboxílico -COOH, aldeído -CHO, cetona C=O) — é a base para resolver quase toda questão de química orgânica do 1º dia.'
  },
  {
    id: 'q-16',
    subject: 'natureza',
    areaName: 'Ciências da Natureza',
    year: 'ENEM 2021',
    topic: 'Ondulatória - Velocidade do Som',
    difficulty: 'Média',
    question: 'Um estudante observa um raio e, 3 segundos depois, ouve o trovão correspondente. Considerando a velocidade do som no ar igual a 340 m/s, qual é a distância aproximada, em metros, entre o estudante e o local da descarga elétrica?',
    options: [
      { letter: 'A', text: '113 m' },
      { letter: 'B', text: '340 m' },
      { letter: 'C', text: '680 m' },
      { letter: 'D', text: '1 020 m' },
      { letter: 'E', text: '1 360 m' }
    ],
    correctLetter: 'D',
    explanation: 'Como a luz se propaga quase instantaneamente e o som viaja a 340 m/s, a distância é d = v × t = 340 × 3 = 1020 m.',
    triTip: 'Em problemas de ondas sonoras que envolvem "atraso" entre dois eventos, a fórmula direta d = v×t resolve a questão sem necessidade de fórmulas de ondulatória mais complexas.'
  },

  // ---- Ciências Humanas (adicionais) ----
  {
    id: 'q-17',
    subject: 'humanas',
    areaName: 'Ciências Humanas',
    year: 'ENEM 2020',
    topic: 'Era Vargas e Ditadura Militar (História do Brasil)',
    difficulty: 'Média',
    question: 'Durante o Estado Novo (1937-1945), Getúlio Vargas consolidou uma extensa legislação trabalhista no Brasil, ao mesmo tempo em que promovia forte censura e perseguição política. Essa combinação de concessões sociais com autoritarismo político é frequentemente descrita pelos historiadores como:',
    options: [
      { letter: 'A', text: 'Populismo Liberal' },
      { letter: 'B', text: 'Trabalhismo Autoritário' },
      { letter: 'C', text: 'Parlamentarismo Corporativo' },
      { letter: 'D', text: 'Federalismo Oligárquico' },
      { letter: 'E', text: 'Republicanismo Positivista' }
    ],
    correctLetter: 'B',
    explanation: 'O período do Estado Novo combinou ampliação de direitos trabalhistas (CLT, salário mínimo) com repressão política e centralização do poder, característica identificada pelos historiadores como "trabalhismo autoritário" ou populismo de Estado.',
    triTip: 'Associe sempre "direitos trabalhistas + autoritarismo político" ao Estado Novo de Vargas — é um dos temas mais recorrentes de História do Brasil no ENEM.'
  },
  {
    id: 'q-18',
    subject: 'humanas',
    areaName: 'Ciências Humanas',
    year: 'ENEM 2022',
    topic: 'Geografia Agrária e Urbanização (Geografia)',
    difficulty: 'Média',
    question: 'A modernização da agropecuária brasileira, especialmente no Centro-Oeste, é marcada pelo uso intensivo de maquinário, insumos químicos e biotecnologia, processo conhecido como:',
    options: [
      { letter: 'A', text: 'Reforma Agrária' },
      { letter: 'B', text: 'Agricultura de Subsistência' },
      { letter: 'C', text: 'Revolução Verde' },
      { letter: 'D', text: 'Êxodo Rural' },
      { letter: 'E', text: 'Extrativismo Vegetal' }
    ],
    correctLetter: 'C',
    explanation: 'A Revolução Verde refere-se à modernização técnico-científica da agricultura, baseada em mecanização, fertilizantes químicos e sementes melhoradas geneticamente, fortemente presente no agronegócio do Centro-Oeste brasileiro.',
    triTip: '"Revolução Verde" é um repertório útil também para Redação em temas de meio ambiente e agronegócio — associe seus impactos positivos (produtividade) e negativos (concentração de terra, impacto ambiental).'
  },
  {
    id: 'q-19',
    subject: 'humanas',
    areaName: 'Ciências Humanas',
    year: 'ENEM 2023',
    topic: 'Cidadania, Direitos Humanos e Democracia (Sociologia/Filosofia)',
    difficulty: 'Difícil',
    question: 'O sociólogo polonês Zygmunt Bauman utiliza o conceito de "modernidade líquida" para descrever a sociedade contemporânea. Esse conceito está mais diretamente relacionado a qual característica do mundo atual?',
    options: [
      { letter: 'A', text: 'Estabilidade das instituições tradicionais e dos vínculos sociais duradouros.' },
      { letter: 'B', text: 'Fluidez, incerteza e fragilidade dos vínculos sociais e das relações humanas.' },
      { letter: 'C', text: 'Retorno a modelos econômicos exclusivamente agrários.' },
      { letter: 'D', text: 'Fortalecimento definitivo das fronteiras nacionais.' },
      { letter: 'E', text: 'Extinção completa das tecnologias de comunicação digital.' }
    ],
    correctLetter: 'B',
    explanation: 'Bauman usa a metáfora do "líquido" (que não tem forma fixa) para descrever a fluidez, a instabilidade e a fragilidade das relações sociais, profissionais e afetivas na contemporaneidade, em contraste com a "solidez" das estruturas do passado.',
    triTip: 'Zygmunt Bauman é repertório curinga tanto para Humanas quanto para Redação — domine o conceito de "modernidade líquida" aplicado a relações de consumo, afetivas e digitais.'
  },
  {
    id: 'q-20',
    subject: 'humanas',
    areaName: 'Ciências Humanas',
    year: 'ENEM 2019',
    topic: 'Globalização e Geopolítica Contemporânea',
    difficulty: 'Média',
    question: 'Blocos econômicos regionais, como o Mercosul e a União Europeia, têm como principal objetivo:',
    options: [
      { letter: 'A', text: 'Isolar economicamente seus países-membros do restante do mundo.' },
      { letter: 'B', text: 'Reduzir barreiras comerciais e fortalecer a integração econômica entre os países-membros.' },
      { letter: 'C', text: 'Eliminar completamente a soberania política dos países envolvidos.' },
      { letter: 'D', text: 'Impedir qualquer tipo de fluxo migratório entre os países-membros.' },
      { letter: 'E', text: 'Restringir o comércio exclusivamente a produtos agrícolas.' }
    ],
    correctLetter: 'B',
    explanation: 'Blocos econômicos regionais buscam reduzir tarifas e barreiras alfandegárias, ampliando o comércio e a cooperação entre os países-membros, fortalecendo sua posição em um cenário de economia globalizada.',
    triTip: 'Diferencie os níveis de integração dos blocos (zona de livre comércio, união aduaneira, mercado comum) — o Mercosul é uma união aduaneira imperfeita, enquanto a UE avançou para união econômica e monetária.'
  },
  {
    id: 'q-21',
    subject: 'humanas',
    areaName: 'Ciências Humanas',
    year: 'ENEM 2021',
    topic: 'Cidadania, Direitos Humanos e Democracia (Sociologia/Filosofia)',
    difficulty: 'Difícil',
    question: 'O filósofo francês Michel Foucault desenvolveu o conceito de "sociedade disciplinar" para analisar como instituições como escolas, prisões e hospitais exercem controle sobre os indivíduos. Segundo Foucault, esse poder disciplinar atua principalmente por meio de:',
    options: [
      { letter: 'A', text: 'Uso exclusivo da força militar direta.' },
      { letter: 'B', text: 'Vigilância constante e normalização dos comportamentos.' },
      { letter: 'C', text: 'Ausência total de qualquer forma de controle institucional.' },
      { letter: 'D', text: 'Concessão irrestrita de liberdade individual sem regras.' },
      { letter: 'E', text: 'Extinção das instituições públicas de ensino.' }
    ],
    correctLetter: 'B',
    explanation: 'Para Foucault, o poder disciplinar moderno não se baseia apenas na violência explícita, mas em mecanismos sutis de vigilância, controle do tempo/espaço e normalização dos comportamentos dos indivíduos dentro das instituições.',
    triTip: 'Foucault e o conceito de "vigilância e normalização" são úteis para redações sobre tecnologia, privacidade e controle social (câmeras, redes sociais, big data).'
  },
  {
    id: 'q-22',
    subject: 'humanas',
    areaName: 'Ciências Humanas',
    year: 'ENEM 2023',
    topic: 'Climatologia e Mudanças Climáticas',
    difficulty: 'Fácil',
    question: 'O aumento da concentração de gases como o CO₂ na atmosfera intensifica a retenção de calor irradiado pela Terra, fenômeno natural essencial à vida, mas que, quando potencializado pela ação humana, contribui para o aquecimento global. Esse fenômeno é conhecido como:',
    options: [
      { letter: 'A', text: 'Efeito Estufa' },
      { letter: 'B', text: 'Inversão Térmica' },
      { letter: 'C', text: 'El Niño' },
      { letter: 'D', text: 'Corrente de Ressurgência' },
      { letter: 'E', text: 'Efeito Coriolis' }
    ],
    correctLetter: 'A',
    explanation: 'O efeito estufa é o fenômeno natural de retenção de calor pela atmosfera; a intensificação artificial desse processo, causada pela emissão excessiva de gases como o CO₂ por atividades humanas, é apontada como principal causa do aquecimento global.',
    triTip: 'Não confunda efeito estufa (fenômeno natural intensificado) com "camada de ozônio" (protege contra radiação UV) — são temas ambientais distintos que o ENEM adora confundir nas alternativas.'
  },

  // ---- Linguagens e Códigos (adicionais) ----
  {
    id: 'q-23',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    year: 'ENEM 2022',
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
  {
    id: 'q-24',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    year: 'ENEM 2020',
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
  {
    id: 'q-25',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    year: 'ENEM 2021',
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
  {
    id: 'q-26',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    year: 'ENEM 2023',
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
  {
    id: 'q-27',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    year: 'ENEM 2019',
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
  {
    id: 'q-28',
    subject: 'linguagens',
    areaName: 'Linguagens e Códigos',
    year: 'ENEM 2022',
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
