import { ExamQuestion } from '../../types';

// Matemática e suas Tecnologias — 48 questões autorais.
//
// Distribuição planejada por incidência real no ENEM, e não por conveniência de
// escrita: porcentagem/financeira 7, estatística e leitura de dados 7, geometria
// plana 6, funções 6, razão e proporção 5, geometria espacial 5, probabilidade 4,
// combinatória 3, grandezas e medidas 3, progressões 2. Nenhum conceito se repete
// entre duas questões.
//
// Dificuldade calibrada pelo número de passos: Fácil resolve em uma operação,
// Média em duas, Difícil exige modelar a situação antes de calcular.
//
// Todos os gabaritos são verificados por script (scripts/confere-gabaritos.mjs),
// que recalcula cada resultado de forma independente e compara com correctLetter.

const base = {
  subject: 'matematica' as const,
  areaName: 'Matemática e suas Tecnologias',
  origin: 'Questão Inédita'
};

export const MATEMATICA_QUESTIONS: ExamQuestion[] = [
  // ---------------------------------------------------------------- Porcentagem e matemática financeira (7)
  {
    ...base,
    id: 'mat-01',
    topic: 'Porcentagem — acréscimo sobre consumo',
    difficulty: 'Fácil',
    question:
      'A conta de energia de uma residência registrou consumo de 180 kWh no mês, com tarifa de R$ 0,75 por kWh. Naquele mês vigorou a bandeira tarifária vermelha, que acrescenta 20% ao valor do consumo. Qual foi o valor final da conta?',
    options: [
      { letter: 'A', text: 'R$ 135,00' },
      { letter: 'B', text: 'R$ 145,00' },
      { letter: 'C', text: 'R$ 156,00' },
      { letter: 'D', text: 'R$ 162,00' },
      { letter: 'E', text: 'R$ 175,00' }
    ],
    correctLetter: 'D',
    explanation:
      'O consumo custa 180 × 0,75 = R$ 135,00. A bandeira vermelha acrescenta 20% sobre esse valor: 135 × 1,20 = R$ 162,00. Quem marcou R$ 135,00 esqueceu a bandeira.',
    triTip:
      'Conta de luz é o contexto favorito do ENEM para porcentagem. Calcule primeiro o valor base, só depois aplique o acréscimo — nunca some a porcentagem ao número de kWh.'
  },
  {
    ...base,
    id: 'mat-02',
    topic: 'Porcentagem — acréscimo e desconto encadeados',
    difficulty: 'Média',
    question:
      'Um funcionário que recebia R$ 2.400,00 obteve reajuste de 8%. Sobre o novo salário incide um desconto previdenciário de 9%. Qual é o valor que ele efetivamente recebe?',
    options: [
      { letter: 'A', text: 'R$ 2.376,00' },
      { letter: 'B', text: 'R$ 2.358,72' },
      { letter: 'C', text: 'R$ 2.400,00' },
      { letter: 'D', text: 'R$ 2.592,00' },
      { letter: 'E', text: 'R$ 2.184,00' }
    ],
    correctLetter: 'B',
    explanation:
      'Reajuste: 2400 × 1,08 = R$ 2.592,00. Desconto de 9% sobre o novo salário: 2592 × 0,91 = R$ 2.358,72. O desconto incide sobre o salário reajustado, não sobre o original.',
    triTip:
      'Percentuais sucessivos se multiplicam, não se somam. Aqui 8% de aumento seguido de 9% de desconto não resulta em 1% de queda: resulta em 1,08 × 0,91 = 0,9828, ou seja, 1,72% de queda.'
  },
  {
    ...base,
    id: 'mat-03',
    topic: 'Matemática financeira — à vista x parcelado',
    difficulty: 'Média',
    question:
      'Uma geladeira é anunciada por R$ 1.200,00 em 10 parcelas iguais de R$ 120,00, ou com 15% de desconto no pagamento à vista. Quanto o cliente economiza optando pelo pagamento à vista?',
    options: [
      { letter: 'A', text: 'R$ 120,00' },
      { letter: 'B', text: 'R$ 150,00' },
      { letter: 'C', text: 'R$ 180,00' },
      { letter: 'D', text: 'R$ 200,00' },
      { letter: 'E', text: 'R$ 1.020,00' }
    ],
    correctLetter: 'C',
    explanation:
      'À vista: 1200 × 0,85 = R$ 1.020,00. Parcelado: 10 × 120 = R$ 1.200,00. A economia é 1200 − 1020 = R$ 180,00, que é exatamente 15% de R$ 1.200,00.',
    triTip:
      'Quando o parcelamento é "sem juros", o valor cheio equivale ao preço de tabela — a economia à vista é simplesmente o desconto oferecido.'
  },
  {
    ...base,
    id: 'mat-04',
    topic: 'Matemática financeira — juros compostos',
    difficulty: 'Difícil',
    question:
      'Uma dívida de R$ 5.000,00 não foi paga e passou a render juros compostos de 10% ao mês. Sem nenhum pagamento parcial, qual será o montante devido ao final de 3 meses?',
    options: [
      { letter: 'A', text: 'R$ 6.000,00' },
      { letter: 'B', text: 'R$ 6.500,00' },
      { letter: 'C', text: 'R$ 6.550,00' },
      { letter: 'D', text: 'R$ 6.655,00' },
      { letter: 'E', text: 'R$ 6.750,00' }
    ],
    correctLetter: 'D',
    explanation:
      'No regime composto, M = C × (1 + i)ⁿ = 5000 × 1,10³ = 5000 × 1,331 = R$ 6.655,00. A alternativa R$ 6.500,00 corresponde ao regime de juros simples (5000 + 3 × 500), que é a armadilha da questão.',
    triTip:
      'A diferença entre simples e composto é o que o ENEM cobra: no simples os juros incidem sempre sobre o capital inicial; no composto, sobre o montante do período anterior. Em 3 meses a 10%, isso já são R$ 155,00 de diferença.'
  },
  {
    ...base,
    id: 'mat-05',
    topic: 'Matemática financeira — juros simples',
    difficulty: 'Fácil',
    question:
      'Um capital de R$ 800,00 foi aplicado a juros simples de 2% ao mês durante 5 meses. Qual foi o valor dos juros produzidos nesse período?',
    options: [
      { letter: 'A', text: 'R$ 80,00' },
      { letter: 'B', text: 'R$ 160,00' },
      { letter: 'C', text: 'R$ 400,00' },
      { letter: 'D', text: 'R$ 800,00' },
      { letter: 'E', text: 'R$ 880,00' }
    ],
    correctLetter: 'A',
    explanation:
      'Nos juros simples, J = C × i × t = 800 × 0,02 × 5 = R$ 80,00. Note que a questão pede os juros, não o montante — R$ 880,00 seria a resposta se pedisse o total resgatado.',
    triTip:
      'Leia o que está sendo pedido: juros (só o rendimento) ou montante (capital + juros). Trocar um pelo outro é o erro mais comum nessas questões, e o ENEM sempre coloca as duas opções.'
  },
  {
    ...base,
    id: 'mat-06',
    topic: 'Porcentagem — variação percentual',
    difficulty: 'Média',
    question:
      'O preço do quilo de um alimento passou de R$ 40,00 para R$ 50,00 em um intervalo de seis meses. Qual foi o aumento percentual nesse período?',
    options: [
      { letter: 'A', text: '10%' },
      { letter: 'B', text: '15%' },
      { letter: 'C', text: '20%' },
      { letter: 'D', text: '25%' },
      { letter: 'E', text: '40%' }
    ],
    correctLetter: 'D',
    explanation:
      'A variação percentual é calculada sobre o valor inicial: (50 − 40) / 40 = 10/40 = 0,25 = 25%. Quem dividiu pelo valor final (10/50) chegaria a 20%, que é a armadilha plantada entre as alternativas.',
    triTip:
      'A variação percentual sempre se divide pelo valor de PARTIDA. Subir de 40 para 50 é um aumento de 25%, mas cair de 50 para 40 é uma queda de 20% — os percentuais não são simétricos.'
  },
  {
    ...base,
    id: 'mat-07',
    topic: 'Porcentagem — desconto e acréscimo de mesmo percentual',
    difficulty: 'Difícil',
    question:
      'Uma loja aplicou desconto de 30% sobre o preço de uma peça de roupa durante uma liquidação. Encerrada a promoção, acrescentou 30% sobre o preço já reduzido. Em relação ao preço original, o preço final ficou:',
    options: [
      { letter: 'A', text: 'igual ao original' },
      { letter: 'B', text: '9% menor' },
      { letter: 'C', text: '9% maior' },
      { letter: 'D', text: '30% menor' },
      { letter: 'E', text: '60% maior' }
    ],
    correctLetter: 'B',
    explanation:
      'Tomando o preço original como 1: após o desconto, 1 × 0,70 = 0,70; após o acréscimo, 0,70 × 1,30 = 0,91. O preço final equivale a 91% do original, ou seja, 9% menor. O acréscimo de 30% incide sobre uma base menor que a do desconto.',
    triTip:
      'Desconto e acréscimo de mesmo percentual nunca se anulam — o resultado é sempre uma perda de i². Aqui, 0,30² = 0,09, exatamente os 9% de queda.'
  },

  // ---------------------------------------------------------------- Razão, proporção e regra de três (5)
  {
    ...base,
    id: 'mat-08',
    topic: 'Proporção — receita e escala de ingredientes',
    difficulty: 'Fácil',
    question:
      'Uma receita de bolo que serve 4 pessoas leva 300 g de farinha. Mantendo as mesmas proporções, quantos gramas de farinha são necessários para servir 10 pessoas?',
    options: [
      { letter: 'A', text: '300 g' },
      { letter: 'B', text: '375 g' },
      { letter: 'C', text: '450 g' },
      { letter: 'D', text: '600 g' },
      { letter: 'E', text: '750 g' }
    ],
    correctLetter: 'E',
    explanation:
      'Regra de três direta: 4 pessoas correspondem a 300 g, então 10 pessoas correspondem a 300 × (10/4) = 300 × 2,5 = 750 g.',
    triTip:
      'Antes de montar a regra de três, pergunte se as grandezas são diretamente proporcionais (mais pessoas, mais farinha) ou inversamente (mais pedreiros, menos dias). Essa checagem evita metade dos erros.'
  },
  {
    ...base,
    id: 'mat-09',
    topic: 'Razão — escala cartográfica',
    difficulty: 'Média',
    question:
      'Em um mapa de escala 1 : 25 000, a distância entre a prefeitura e o hospital mede 8 cm. Qual é a distância real entre os dois pontos, em quilômetros?',
    options: [
      { letter: 'A', text: '0,2 km' },
      { letter: 'B', text: '2 km' },
      { letter: 'C', text: '20 km' },
      { letter: 'D', text: '200 km' },
      { letter: 'E', text: '2 000 km' }
    ],
    correctLetter: 'B',
    explanation:
      'A escala indica que 1 cm no mapa equivale a 25 000 cm reais. Logo, 8 × 25 000 = 200 000 cm. Convertendo: 200 000 cm = 2 000 m = 2 km.',
    triTip:
      'A escala devolve o resultado na mesma unidade da medida feita no mapa — aqui, centímetros. A conversão para metros e quilômetros vem depois, e é onde a maioria erra por pular uma casa.'
  },
  {
    ...base,
    id: 'mat-10',
    topic: 'Regra de três composta — produção industrial',
    difficulty: 'Média',
    question:
      'Cinco máquinas idênticas produzem 1 200 peças em 4 horas de operação. Mantido o mesmo ritmo, quantas peças 8 máquinas produzirão em 6 horas?',
    options: [
      { letter: 'A', text: '1 920 peças' },
      { letter: 'B', text: '2 400 peças' },
      { letter: 'C', text: '2 880 peças' },
      { letter: 'D', text: '3 200 peças' },
      { letter: 'E', text: '3 600 peças' }
    ],
    correctLetter: 'C',
    explanation:
      'A produção é diretamente proporcional ao número de máquinas e ao tempo: 1200 × (8/5) × (6/4) = 1200 × 1,6 × 1,5 = 2 880 peças.',
    triTip:
      'Em regra de três composta, trate uma grandeza de cada vez e multiplique os fatores. Se a grandeza for inversamente proporcional, inverta a fração daquele fator específico — não da conta inteira.'
  },
  {
    ...base,
    id: 'mat-11',
    topic: 'Proporção — divisão em partes proporcionais',
    difficulty: 'Difícil',
    question:
      'Um pintor prepara uma tinta misturando pigmento azul e base branca na proporção de 3 para 2, em volume. Para produzir 45 litros dessa mistura, quantos litros de pigmento azul serão necessários?',
    options: [
      { letter: 'A', text: '9 L' },
      { letter: 'B', text: '15 L' },
      { letter: 'C', text: '18 L' },
      { letter: 'D', text: '22,5 L' },
      { letter: 'E', text: '27 L' }
    ],
    correctLetter: 'E',
    explanation:
      'A proporção 3 : 2 divide a mistura em 3 + 2 = 5 partes iguais. Cada parte vale 45 / 5 = 9 litros. O pigmento azul corresponde a 3 partes: 3 × 9 = 27 litros.',
    triTip:
      'Em divisão proporcional, some primeiro os termos da razão para descobrir em quantas partes o total se divide. Pular esse passo e calcular "3/2 de 45" é o erro clássico.'
  },
  {
    ...base,
    id: 'mat-12',
    topic: 'Proporcionalidade inversa — velocidade e tempo',
    difficulty: 'Média',
    question:
      'Um motorista percorre determinado trajeto em 3 horas, mantendo velocidade média de 80 km/h. Se refizer o mesmo trajeto a uma velocidade média de 60 km/h, quanto tempo levará?',
    options: [
      { letter: 'A', text: '4 horas' },
      { letter: 'B', text: '4 horas e 30 minutos' },
      { letter: 'C', text: '5 horas' },
      { letter: 'D', text: '6 horas' },
      { letter: 'E', text: '8 horas' }
    ],
    correctLetter: 'A',
    explanation:
      'A distância é fixa: 80 × 3 = 240 km. Com velocidade de 60 km/h, o tempo é 240 / 60 = 4 horas. Velocidade e tempo são inversamente proporcionais para uma distância constante.',
    triTip:
      'Sempre que a distância não muda, reduzir a velocidade aumenta o tempo na mesma proporção invertida. Calcular a distância primeiro deixa a conta trivial.'
  },

  // ---------------------------------------------------------------- Estatística e leitura de dados (7)
  {
    ...base,
    id: 'mat-13',
    topic: 'Estatística — média aritmética',
    difficulty: 'Fácil',
    question:
      'Um estudante obteve as notas 5, 6, 7, 8 e 9 nas cinco disciplinas do semestre. Qual foi sua média aritmética?',
    options: [
      { letter: 'A', text: '7,0' },
      { letter: 'B', text: '7,5' },
      { letter: 'C', text: '8,0' },
      { letter: 'D', text: '8,75' },
      { letter: 'E', text: '35,0' }
    ],
    correctLetter: 'A',
    explanation:
      'A média aritmética é a soma dividida pela quantidade de valores: (5 + 6 + 7 + 8 + 9) / 5 = 35 / 5 = 7,0.',
    triTip:
      'Em conjuntos simétricos como este, a média coincide com o valor central — dá para conferir de cabeça antes de somar tudo, e isso economiza tempo na prova.'
  },
  {
    ...base,
    id: 'mat-14',
    topic: 'Estatística — mediana em tabela',
    difficulty: 'Média',
    question:
      'Uma loja registrou as seguintes quantidades de peças vendidas nos últimos sete dias: 12, 15, 18, 20, 22, 25 e 30. Qual é a mediana dessa distribuição?',
    options: [
      { letter: 'A', text: '18' },
      { letter: 'B', text: '20' },
      { letter: 'C', text: '20,3' },
      { letter: 'D', text: '22' },
      { letter: 'E', text: '25' }
    ],
    correctLetter: 'B',
    explanation:
      'Com os sete valores já em ordem crescente, a mediana é o termo central, ou seja, o quarto: 12, 15, 18, **20**, 22, 25, 30. A mediana é 20. O valor 20,3 corresponde à média, não à mediana.',
    triTip:
      'Mediana exige os dados ORDENADOS. Quando a quantidade é ímpar, é o termo do meio; quando é par, é a média dos dois centrais. O ENEM costuma dar os números fora de ordem de propósito.'
  },
  {
    ...base,
    id: 'mat-15',
    topic: 'Estatística — média ponderada',
    difficulty: 'Média',
    question:
      'Em uma disciplina, a primeira avaliação tem peso 2 e a segunda tem peso 3. Um aluno tirou 6,0 na primeira e 8,0 na segunda. Qual é sua média final ponderada?',
    options: [
      { letter: 'A', text: '6,4' },
      { letter: 'B', text: '6,8' },
      { letter: 'C', text: '7,0' },
      { letter: 'D', text: '7,2' },
      { letter: 'E', text: '7,6' }
    ],
    correctLetter: 'D',
    explanation:
      'Na média ponderada, multiplica-se cada nota pelo seu peso e divide-se pela soma dos pesos: (6 × 2 + 8 × 3) / (2 + 3) = (12 + 24) / 5 = 36 / 5 = 7,2. A média simples daria 7,0, que é a armadilha.',
    triTip:
      'O divisor da média ponderada é a soma dos PESOS, não a quantidade de notas. Trocar 5 por 2 nessa conta é o erro que o ENEM antecipa nas alternativas.'
  },
  {
    ...base,
    id: 'mat-16',
    topic: 'Estatística — média com alteração do conjunto',
    difficulty: 'Difícil',
    question:
      'A média das notas de 9 alunos de um grupo é exatamente 7,0. Um aluno que havia tirado 5,0 foi transferido e saiu do grupo. Qual passa a ser a média dos 8 alunos restantes?',
    options: [
      { letter: 'A', text: '7,0' },
      { letter: 'B', text: '7,25' },
      { letter: 'C', text: '7,5' },
      { letter: 'D', text: '7,75' },
      { letter: 'E', text: '8,0' }
    ],
    correctLetter: 'B',
    explanation:
      'A soma das 9 notas é 9 × 7 = 63. Retirando a nota 5, a nova soma é 63 − 5 = 58, distribuída entre 8 alunos: 58 / 8 = 7,25.',
    triTip:
      'Quando um conjunto muda, volte sempre para a SOMA total (média × quantidade) antes de recalcular. Tentar ajustar a média diretamente quase sempre leva ao erro.'
  },
  {
    ...base,
    id: 'mat-17',
    topic: 'Estatística — moda',
    difficulty: 'Fácil',
    question:
      'Uma pesquisa registrou o número de pessoas por domicílio em oito residências: 2, 3, 3, 4, 5, 5, 5 e 6. Qual é a moda desse conjunto?',
    options: [
      { letter: 'A', text: '3' },
      { letter: 'B', text: '4' },
      { letter: 'C', text: '4,125' },
      { letter: 'D', text: '4,5' },
      { letter: 'E', text: '5' }
    ],
    correctLetter: 'E',
    explanation:
      'A moda é o valor de maior frequência. O número 5 aparece três vezes, mais do que qualquer outro, portanto a moda é 5. Os valores 4,125 e 4,5 correspondem, respectivamente, à média e à mediana.',
    triTip:
      'Média, moda e mediana costumam aparecer juntas nas alternativas para confundir. Marque no enunciado qual delas foi pedida antes de começar a contar.'
  },
  {
    ...base,
    id: 'mat-18',
    topic: 'Leitura de dados — variação entre períodos',
    difficulty: 'Média',
    question:
      'Um pluviômetro registrou a precipitação mensal, em milímetros: janeiro 120, fevereiro 90, março 150, abril 60 e maio 100. Em qual mês ocorreu a maior variação de precipitação em relação ao mês imediatamente anterior?',
    options: [
      { letter: 'A', text: 'Fevereiro' },
      { letter: 'B', text: 'Março' },
      { letter: 'C', text: 'Abril' },
      { letter: 'D', text: 'Maio' },
      { letter: 'E', text: 'A variação foi igual em todos os meses' }
    ],
    correctLetter: 'C',
    explanation:
      'As variações em relação ao mês anterior são: fevereiro −30, março +60, abril −90 e maio +40. A maior variação em módulo é a de abril, com queda de 90 mm.',
    triTip:
      'Quando o enunciado pede "maior variação" sem especificar aumento ou queda, compare os valores em módulo. Uma queda de 90 é uma variação maior que um aumento de 60.'
  },
  {
    ...base,
    id: 'mat-19',
    topic: 'Estatística — média e mediana em distribuição assimétrica',
    difficulty: 'Difícil',
    question:
      'Os salários, em milhares de reais, de sete funcionários de um setor são: 10, 12, 15, 18, 20, 25 e 40. Qual é a diferença entre a média e a mediana dessa distribuição?',
    options: [
      { letter: 'A', text: '2' },
      { letter: 'B', text: '3' },
      { letter: 'C', text: '4' },
      { letter: 'D', text: '5' },
      { letter: 'E', text: '18' }
    ],
    correctLetter: 'A',
    explanation:
      'A soma é 10 + 12 + 15 + 18 + 20 + 25 + 40 = 140, logo a média é 140 / 7 = 20. A mediana é o quarto valor da sequência ordenada: 18. A diferença é 20 − 18 = 2.',
    triTip:
      'Quando há um valor muito acima dos demais, a média é puxada para cima e a mediana resiste. É por isso que se usa mediana, e não média, para descrever salários — argumento excelente também na Redação.'
  },

  // ---------------------------------------------------------------- Geometria plana (6)
  {
    ...base,
    id: 'mat-20',
    topic: 'Geometria plana — área do retângulo',
    difficulty: 'Fácil',
    question:
      'Um salão retangular mede 12 metros de comprimento por 8 metros de largura. Qual é a área total do piso desse salão?',
    options: [
      { letter: 'A', text: '20 m²' },
      { letter: 'B', text: '24 m²' },
      { letter: 'C', text: '40 m²' },
      { letter: 'D', text: '48 m²' },
      { letter: 'E', text: '96 m²' }
    ],
    correctLetter: 'E',
    explanation:
      'A área do retângulo é o produto das dimensões: 12 × 8 = 96 m². O valor 40 m² corresponde ao perímetro, que é 2 × (12 + 8).',
    triTip:
      'Área multiplica e sai em unidade ao quadrado; perímetro soma e sai em unidade linear. Conferir a unidade da alternativa já elimina metade das opções.'
  },
  {
    ...base,
    id: 'mat-21',
    topic: 'Geometria plana — teorema de Pitágoras',
    difficulty: 'Média',
    question:
      'Uma escada de 5 metros está apoiada em uma parede vertical, com a base afastada 3 metros do pé da parede. A que altura da parede se encontra o topo da escada?',
    options: [
      { letter: 'A', text: '4 m' },
      { letter: 'B', text: '4,5 m' },
      { letter: 'C', text: '8 m' },
      { letter: 'D', text: '16 m' },
      { letter: 'E', text: '34 m' }
    ],
    correctLetter: 'A',
    explanation:
      'A escada é a hipotenusa do triângulo retângulo. Por Pitágoras: 5² = 3² + h², logo h² = 25 − 9 = 16 e h = 4 metros.',
    triTip:
      'O trio 3-4-5 é o mais cobrado do ENEM, junto com 5-12-13 e 6-8-10. Reconhecê-lo de imediato poupa toda a conta.'
  },
  {
    ...base,
    id: 'mat-22',
    topic: 'Geometria plana — área do círculo',
    difficulty: 'Média',
    question:
      'Um sistema de irrigação por aspersão molha uma região circular de 10 metros de raio. Adotando π = 3,14, qual é a área irrigada?',
    options: [
      { letter: 'A', text: '31,4 m²' },
      { letter: 'B', text: '62,8 m²' },
      { letter: 'C', text: '100 m²' },
      { letter: 'D', text: '157 m²' },
      { letter: 'E', text: '314 m²' }
    ],
    correctLetter: 'E',
    explanation:
      'A área do círculo é A = π · r² = 3,14 × 10² = 3,14 × 100 = 314 m². O valor 62,8 m² corresponde ao comprimento da circunferência (2πr), não à área.',
    triTip:
      'Não confunda área (π·r²) com comprimento da circunferência (2·π·r). O ENEM coloca as duas nas alternativas em praticamente toda questão de círculo.'
  },
  {
    ...base,
    id: 'mat-23',
    topic: 'Geometria plana — área composta',
    difficulty: 'Difícil',
    question:
      'Um terreno retangular de 30 m por 20 m receberá uma piscina circular de 5 metros de raio. Adotando π = 3, qual será a área do terreno que permanecerá livre, fora da piscina?',
    options: [
      { letter: 'A', text: '75 m²' },
      { letter: 'B', text: '450 m²' },
      { letter: 'C', text: '525 m²' },
      { letter: 'D', text: '540 m²' },
      { letter: 'E', text: '600 m²' }
    ],
    correctLetter: 'C',
    explanation:
      'Área do terreno: 30 × 20 = 600 m². Área da piscina: π · r² = 3 × 25 = 75 m². Área livre: 600 − 75 = 525 m².',
    triTip:
      'Em área composta, identifique a figura que contém e a que é removida, calcule cada uma isoladamente e só então subtraia. Tentar fazer tudo numa expressão só é onde o sinal se perde.'
  },
  {
    ...base,
    id: 'mat-24',
    topic: 'Geometria plana — semelhança de triângulos',
    difficulty: 'Média',
    question:
      'No mesmo instante do dia, uma pessoa de 1,8 m de altura projeta uma sombra de 2 m, enquanto um poste projeta uma sombra de 6 m. Qual é a altura do poste?',
    options: [
      { letter: 'A', text: '2,4 m' },
      { letter: 'B', text: '3,6 m' },
      { letter: 'C', text: '4,8 m' },
      { letter: 'D', text: '5,4 m' },
      { letter: 'E', text: '10,8 m' }
    ],
    correctLetter: 'D',
    explanation:
      'Como os raios solares incidem com o mesmo ângulo, os triângulos são semelhantes: 1,8 / 2 = h / 6. Logo h = 6 × 0,9 = 5,4 metros.',
    triTip:
      'Sombras no mesmo horário sempre geram triângulos semelhantes. Monte a proporção "altura sobre sombra" dos dois objetos e resolva — é o contexto mais frequente de semelhança no ENEM.'
  },
  {
    ...base,
    id: 'mat-25',
    topic: 'Geometria plana — do quadrado à área e ao perímetro',
    difficulty: 'Fácil',
    question:
      'Uma praça tem formato de quadrado e área de 49 m². Quantos metros de grade são necessários para cercar todo o seu contorno?',
    options: [
      { letter: 'A', text: '7 m' },
      { letter: 'B', text: '14 m' },
      { letter: 'C', text: '21 m' },
      { letter: 'D', text: '28 m' },
      { letter: 'E', text: '49 m' }
    ],
    correctLetter: 'D',
    explanation:
      'Se a área do quadrado é 49 m², o lado mede √49 = 7 m. O perímetro é 4 × 7 = 28 metros de grade.',
    triTip:
      'Quando o enunciado dá a área e pede cerca, o caminho é sempre o mesmo: extrair a raiz para achar o lado e só depois somar os quatro lados.'
  },

  // ---------------------------------------------------------------- Geometria espacial (5)
  {
    ...base,
    id: 'mat-26',
    topic: 'Geometria espacial — volume do paralelepípedo',
    difficulty: 'Fácil',
    question:
      'Um contêiner tem formato de paralelepípedo retângulo, com 4 m de comprimento, 3 m de largura e 2 m de altura. Qual é o seu volume interno?',
    options: [
      { letter: 'A', text: '24 m³' },
      { letter: 'B', text: '36 m³' },
      { letter: 'C', text: '48 m³' },
      { letter: 'D', text: '52 m³' },
      { letter: 'E', text: '72 m³' }
    ],
    correctLetter: 'A',
    explanation:
      'O volume do paralelepípedo é o produto das três dimensões: 4 × 3 × 2 = 24 m³.',
    triTip:
      'Volume multiplica as três dimensões e sai em unidade ao cubo. Se a alternativa estiver em m², ela está medindo área de superfície e pode ser descartada de imediato.'
  },
  {
    ...base,
    id: 'mat-27',
    topic: 'Geometria espacial — volume do cilindro e conversão para litros',
    difficulty: 'Média',
    question:
      'Um reservatório cilíndrico tem 2 metros de raio da base e 5 metros de altura. Adotando π = 3 e sabendo que 1 m³ equivale a 1 000 litros, qual é a capacidade do reservatório?',
    options: [
      { letter: 'A', text: '600 L' },
      { letter: 'B', text: '6 000 L' },
      { letter: 'C', text: '12 000 L' },
      { letter: 'D', text: '30 000 L' },
      { letter: 'E', text: '60 000 L' }
    ],
    correctLetter: 'E',
    explanation:
      'V = π · r² · h = 3 × 2² × 5 = 3 × 4 × 5 = 60 m³. Convertendo: 60 × 1 000 = 60 000 litros. Quem esqueceu de elevar o raio ao quadrado chegaria a 30 m³.',
    triTip:
      'No cilindro, só o raio é elevado ao quadrado — a altura entra multiplicando uma única vez. Esquecer o quadrado do raio é o erro mais frequente nessa fórmula.'
  },
  {
    ...base,
    id: 'mat-28',
    topic: 'Geometria espacial — volume parcial',
    difficulty: 'Difícil',
    question:
      'Uma piscina retangular mede 10 m de comprimento, 5 m de largura e 1,5 m de profundidade. Por segurança, ela é mantida com apenas 80% da sua capacidade total. Quantos litros de água ela contém nessas condições?',
    options: [
      { letter: 'A', text: '15 000 L' },
      { letter: 'B', text: '45 000 L' },
      { letter: 'C', text: '60 000 L' },
      { letter: 'D', text: '75 000 L' },
      { letter: 'E', text: '93 750 L' }
    ],
    correctLetter: 'C',
    explanation:
      'Capacidade total: 10 × 5 × 1,5 = 75 m³, ou 75 000 litros. Com 80% de ocupação: 75 000 × 0,80 = 60 000 litros. A alternativa 75 000 L é a capacidade cheia, e serve de armadilha.',
    triTip:
      'Questões de volume parcial cobram duas etapas: o volume total e depois a fração ocupada. Calcule o total e confira se ele aparece entre as alternativas — se aparecer, provavelmente é a pegadinha.'
  },
  {
    ...base,
    id: 'mat-29',
    topic: 'Geometria espacial — área da superfície do cubo',
    difficulty: 'Média',
    question:
      'Uma caixa cúbica de 6 cm de aresta será totalmente revestida com papel adesivo, sem sobreposição. Qual é a área de papel necessária para revestir suas seis faces?',
    options: [
      { letter: 'A', text: '36 cm²' },
      { letter: 'B', text: '72 cm²' },
      { letter: 'C', text: '108 cm²' },
      { letter: 'D', text: '144 cm²' },
      { letter: 'E', text: '216 cm²' }
    ],
    correctLetter: 'E',
    explanation:
      'Cada face é um quadrado de área 6² = 36 cm². Como o cubo tem 6 faces, a área total é 6 × 36 = 216 cm². Note que 216 também seria o volume em cm³ — coincidência numérica que só ocorre com aresta 6.',
    triTip:
      'Área total do cubo é 6·a², volume é a³. Leia se o enunciado pede revestir (área) ou encher (volume) antes de escolher a fórmula.'
  },
  {
    ...base,
    id: 'mat-30',
    topic: 'Geometria espacial — volume associado a vazão',
    difficulty: 'Difícil',
    question:
      'Um tanque cilíndrico de 1 metro de raio e 4 metros de altura está completamente vazio e será preenchido por uma bomba com vazão constante de 2 m³ por hora. Adotando π = 3, quanto tempo levará para enchê-lo por completo?',
    options: [
      { letter: 'A', text: '6 horas' },
      { letter: 'B', text: '8 horas' },
      { letter: 'C', text: '12 horas' },
      { letter: 'D', text: '24 horas' },
      { letter: 'E', text: '48 horas' }
    ],
    correctLetter: 'A',
    explanation:
      'Volume do tanque: V = π · r² · h = 3 × 1² × 4 = 12 m³. Com vazão de 2 m³/h, o tempo é 12 / 2 = 6 horas.',
    triTip:
      'Vazão é volume dividido por tempo. Sempre que o enunciado der uma vazão, o caminho é calcular o volume primeiro e só depois dividir — nunca o contrário.'
  },

  // ---------------------------------------------------------------- Funções (6)
  {
    ...base,
    id: 'mat-31',
    topic: 'Função afim — valor fixo mais taxa variável',
    difficulty: 'Fácil',
    question:
      'Um plano de telefonia cobra R$ 30,00 fixos por mês, mais R$ 0,50 por minuto de ligação. Qual será o valor da fatura de um cliente que falou 80 minutos no mês?',
    options: [
      { letter: 'A', text: 'R$ 30,00' },
      { letter: 'B', text: 'R$ 40,00' },
      { letter: 'C', text: 'R$ 55,00' },
      { letter: 'D', text: 'R$ 64,00' },
      { letter: 'E', text: 'R$ 70,00' }
    ],
    correctLetter: 'E',
    explanation:
      'A fatura segue a função f(x) = 30 + 0,50x. Para x = 80: f(80) = 30 + 0,50 × 80 = 30 + 40 = R$ 70,00.',
    triTip:
      'Identifique no enunciado o "valor fixo" (coeficiente linear) e a "taxa por unidade" (coeficiente angular). Toda função afim do ENEM está disfarçada nesse par.'
  },
  {
    ...base,
    id: 'mat-32',
    topic: 'Função quadrática — valor máximo',
    difficulty: 'Média',
    question:
      'A altura h, em metros, de uma bola lançada verticalmente para cima é dada por h(t) = −5t² + 20t, em que t é o tempo em segundos. Qual é a altura máxima atingida pela bola?',
    options: [
      { letter: 'A', text: '5 m' },
      { letter: 'B', text: '10 m' },
      { letter: 'C', text: '15 m' },
      { letter: 'D', text: '20 m' },
      { letter: 'E', text: '40 m' }
    ],
    correctLetter: 'D',
    explanation:
      'A altura máxima ocorre no vértice. O instante é t = −b / (2a) = −20 / (2 × −5) = 2 s. Substituindo: h(2) = −5 × 4 + 20 × 2 = −20 + 40 = 20 metros.',
    triTip:
      'Cuidado com a pergunta: "em que instante" pede o t do vértice (2 s), "qual altura" pede o h desse instante (20 m). O ENEM coloca os dois valores nas alternativas.'
  },
  {
    ...base,
    id: 'mat-33',
    topic: 'Função quadrática — raízes e interpretação',
    difficulty: 'Média',
    question:
      'A altura h, em metros, de uma bola lançada verticalmente para cima é dada por h(t) = −5t² + 20t, com t em segundos. Após quantos segundos do lançamento a bola retorna ao solo?',
    options: [
      { letter: 'A', text: '4 s' },
      { letter: 'B', text: '5 s' },
      { letter: 'C', text: '8 s' },
      { letter: 'D', text: '16 s' },
      { letter: 'E', text: '20 s' }
    ],
    correctLetter: 'A',
    explanation:
      'No solo, h = 0: −5t² + 20t = 0, ou seja, t(−5t + 20) = 0. As raízes são t = 0 (lançamento) e t = 4 s (retorno ao solo).',
    triTip:
      'Quando a equação não tem termo independente, coloque t em evidência em vez de usar Bhaskara — resolve em um passo e sem risco de erro de sinal.'
  },
  {
    ...base,
    id: 'mat-34',
    topic: 'Função exponencial — crescimento por duplicação',
    difficulty: 'Difícil',
    question:
      'Uma cultura de bactérias começa com 500 indivíduos e duplica sua população a cada 3 horas, em condições ideais. Quantas bactérias haverá após 12 horas?',
    options: [
      { letter: 'A', text: '1 000' },
      { letter: 'B', text: '2 000' },
      { letter: 'C', text: '3 000' },
      { letter: 'D', text: '4 000' },
      { letter: 'E', text: '8 000' }
    ],
    correctLetter: 'E',
    explanation:
      'Em 12 horas ocorrem 12 / 3 = 4 duplicações. A população final é 500 × 2⁴ = 500 × 16 = 8 000 bactérias. Multiplicar 500 por 4 (em vez de elevar 2 à quarta) levaria a 2 000, que é a armadilha.',
    triTip:
      'Crescimento por duplicação é exponencial, não proporcional: descubra quantos períodos completos cabem no tempo total e use 2 elevado a esse número.'
  },
  {
    ...base,
    id: 'mat-35',
    topic: 'Função afim — determinação a partir de dois pontos',
    difficulty: 'Média',
    question:
      'Uma corrida de táxi custa R$ 12,00 para um percurso de 4 km e R$ 20,00 para um percurso de 8 km, seguindo uma função afim. Qual é o valor da bandeirada, isto é, a parcela fixa cobrada independentemente da distância?',
    options: [
      { letter: 'A', text: 'R$ 2,00' },
      { letter: 'B', text: 'R$ 4,00' },
      { letter: 'C', text: 'R$ 6,00' },
      { letter: 'D', text: 'R$ 8,00' },
      { letter: 'E', text: 'R$ 12,00' }
    ],
    correctLetter: 'B',
    explanation:
      'A taxa por quilômetro é a variação do preço sobre a variação da distância: (20 − 12) / (8 − 4) = 8 / 4 = R$ 2,00 por km. Substituindo em P = b + 2d com o primeiro ponto: 12 = b + 2 × 4, logo b = R$ 4,00.',
    triTip:
      'Com dois pontos, calcule primeiro o coeficiente angular pela razão das variações e só depois volte a um dos pontos para achar o valor fixo. Essa ordem evita sistema de equações.'
  },
  {
    ...base,
    id: 'mat-36',
    topic: 'Funções — comparação entre dois modelos',
    difficulty: 'Difícil',
    question:
      'Duas gráficas orçam o mesmo panfleto. A gráfica A cobra R$ 60,00 de taxa de arte mais R$ 1,50 por unidade impressa. A gráfica B não cobra taxa de arte, mas cobra R$ 3,00 por unidade. A partir de quantas unidades impressas a gráfica A passa a ser mais barata que a B?',
    options: [
      { letter: 'A', text: '20 unidades' },
      { letter: 'B', text: '30 unidades' },
      { letter: 'C', text: '40 unidades' },
      { letter: 'D', text: '41 unidades' },
      { letter: 'E', text: '60 unidades' }
    ],
    correctLetter: 'D',
    explanation:
      'Igualando os custos: 60 + 1,5x = 3x, logo 60 = 1,5x e x = 40. Em 40 unidades as duas cobram o mesmo (R$ 120,00), então A ainda não é mais barata. A vantagem começa na unidade seguinte: 41 unidades, quando A custa R$ 121,50 contra R$ 123,00 de B.',
    triTip:
      'Ache o ponto de equilíbrio igualando as expressões, mas leia se a pergunta usa "mais barata que" (desigualdade estrita) ou "até no máximo" (inclui a igualdade). No ponto exato os preços empatam, e o ENEM põe esse valor nas alternativas.'
  },

  // ---------------------------------------------------------------- Probabilidade (4)
  {
    ...base,
    id: 'mat-37',
    topic: 'Probabilidade — evento simples',
    difficulty: 'Fácil',
    question:
      'Um dado comum, de seis faces numeradas de 1 a 6 e não viciado, é lançado uma única vez. Qual é a probabilidade de sair um número maior que 4?',
    options: [
      { letter: 'A', text: '1/6' },
      { letter: 'B', text: '1/3' },
      { letter: 'C', text: '1/2' },
      { letter: 'D', text: '2/3' },
      { letter: 'E', text: '5/6' }
    ],
    correctLetter: 'B',
    explanation:
      'Os números maiores que 4 são 5 e 6, ou seja, 2 casos favoráveis em 6 possíveis: 2/6 = 1/3. Quem incluiu o próprio 4 chegaria a 3/6 = 1/2, que é a armadilha.',
    triTip:
      '"Maior que 4" exclui o 4; "a partir de 4" ou "no mínimo 4" o incluem. Essa leitura muda o gabarito e é justamente o que o ENEM testa nessas questões.'
  },
  {
    ...base,
    id: 'mat-38',
    topic: 'Probabilidade — baralho',
    difficulty: 'Média',
    question:
      'De um baralho completo de 52 cartas, dividido igualmente em quatro naipes, retira-se uma carta ao acaso. Qual é a probabilidade de que ela seja de copas?',
    options: [
      { letter: 'A', text: '1/52' },
      { letter: 'B', text: '1/26' },
      { letter: 'C', text: '1/13' },
      { letter: 'D', text: '1/4' },
      { letter: 'E', text: '1/2' }
    ],
    correctLetter: 'D',
    explanation:
      'Cada naipe tem 52 / 4 = 13 cartas. A probabilidade é 13 / 52 = 1/4, ou 25%.',
    triTip:
      'Em baralho, memorize a estrutura: 52 cartas, 4 naipes de 13, sendo 12 figuras no total. Quase toda questão do ENEM sobre baralho se resolve com esses três números.'
  },
  {
    ...base,
    id: 'mat-39',
    topic: 'Probabilidade — dois eventos simultâneos',
    difficulty: 'Difícil',
    question:
      'Dois dados comuns e não viciados são lançados simultaneamente. Qual é a probabilidade de que a soma dos valores obtidos nas faces superiores seja igual a 7?',
    options: [
      { letter: 'A', text: '1/12' },
      { letter: 'B', text: '1/9' },
      { letter: 'C', text: '1/6' },
      { letter: 'D', text: '1/4' },
      { letter: 'E', text: '7/36' }
    ],
    correctLetter: 'C',
    explanation:
      'O espaço amostral tem 6 × 6 = 36 resultados. Somam 7 os pares (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1), num total de 6 casos. A probabilidade é 6/36 = 1/6.',
    triTip:
      'Com dois dados, o espaço amostral é sempre 36 e a ordem importa: (2,5) e (5,2) são resultados distintos. A soma 7 é a mais provável de todas, com 6 combinações.'
  },
  {
    ...base,
    id: 'mat-40',
    topic: 'Probabilidade — evento complementar',
    difficulty: 'Média',
    question:
      'Uma caixa contém 5 canetas azuis, 3 vermelhas e 2 verdes, todas idênticas ao tato. Retirando-se uma caneta ao acaso, qual é a probabilidade de que ela não seja azul?',
    options: [
      { letter: 'A', text: '20%' },
      { letter: 'B', text: '30%' },
      { letter: 'C', text: '40%' },
      { letter: 'D', text: '50%' },
      { letter: 'E', text: '80%' }
    ],
    correctLetter: 'D',
    explanation:
      'O total é 5 + 3 + 2 = 10 canetas. Não são azuis 3 + 2 = 5 delas, logo a probabilidade é 5/10 = 50%.',
    triTip:
      'Em evento complementar, você pode contar diretamente os casos favoráveis restantes ou fazer 100% menos a probabilidade do evento oposto. Os dois caminhos dão o mesmo resultado — use o que tiver menos contas.'
  },

  // ---------------------------------------------------------------- Análise combinatória (3)
  {
    ...base,
    id: 'mat-41',
    topic: 'Combinatória — princípio multiplicativo com restrição',
    difficulty: 'Média',
    question:
      'Um cofre digital exige uma senha de 3 dígitos, escolhidos entre os algarismos de 0 a 9, sem que nenhum algarismo se repita. Quantas senhas diferentes podem ser formadas?',
    options: [
      { letter: 'A', text: '30' },
      { letter: 'B', text: '120' },
      { letter: 'C', text: '720' },
      { letter: 'D', text: '1 000' },
      { letter: 'E', text: '5 040' }
    ],
    correctLetter: 'C',
    explanation:
      'Há 10 opções para o primeiro dígito, 9 para o segundo (um já foi usado) e 8 para o terceiro: 10 × 9 × 8 = 720 senhas. Se a repetição fosse permitida, seriam 10³ = 1 000, que é a armadilha.',
    triTip:
      'Verifique sempre se o enunciado permite repetição. "Sem repetir" reduz uma opção a cada posição; "podendo repetir" mantém o total em todas.'
  },
  {
    ...base,
    id: 'mat-42',
    topic: 'Combinatória — combinação simples',
    difficulty: 'Difícil',
    question:
      'De um grupo de 7 funcionários, será formada uma comissão de 3 pessoas, sem distinção de cargos entre os escolhidos. Quantas comissões diferentes podem ser formadas?',
    options: [
      { letter: 'A', text: '21' },
      { letter: 'B', text: '35' },
      { letter: 'C', text: '105' },
      { letter: 'D', text: '210' },
      { letter: 'E', text: '343' }
    ],
    correctLetter: 'B',
    explanation:
      'Como não há distinção de cargos, a ordem não importa e trata-se de combinação: C(7,3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = 35 comissões. O valor 210 corresponde ao arranjo, usado quando há cargos distintos.',
    triTip:
      'A pergunta decisiva é se a ordem importa. Comissão sem cargos definidos é combinação; chapa com presidente, vice e tesoureiro é arranjo — e o ENEM sempre põe os dois resultados nas alternativas.'
  },
  {
    ...base,
    id: 'mat-43',
    topic: 'Combinatória — princípio multiplicativo',
    difficulty: 'Fácil',
    question:
      'Um restaurante oferece 4 opções de entrada, 5 opções de prato principal e 3 opções de sobremesa. Quantos menus completos diferentes, com uma opção de cada etapa, podem ser montados?',
    options: [
      { letter: 'A', text: '12' },
      { letter: 'B', text: '20' },
      { letter: 'C', text: '35' },
      { letter: 'D', text: '45' },
      { letter: 'E', text: '60' }
    ],
    correctLetter: 'E',
    explanation:
      'Pelo princípio multiplicativo, basta multiplicar as opções de cada etapa independente: 4 × 5 × 3 = 60 menus diferentes. Somar as opções (4 + 5 + 3 = 12) é o erro que a alternativa A antecipa.',
    triTip:
      'Etapas sucessivas e independentes se MULTIPLICAM. Some apenas quando as opções forem alternativas excludentes entre si — "ou uma, ou outra".'
  },

  // ---------------------------------------------------------------- Grandezas e medidas (3)
  {
    ...base,
    id: 'mat-44',
    topic: 'Grandezas e medidas — conversão de massa',
    difficulty: 'Fácil',
    question:
      'Um caminhão tem capacidade máxima de carga de 1,5 tonelada. Quantos sacos de ração de 25 kg cada ele pode transportar, no máximo, sem exceder esse limite?',
    options: [
      { letter: 'A', text: '60 sacos' },
      { letter: 'B', text: '150 sacos' },
      { letter: 'C', text: '600 sacos' },
      { letter: 'D', text: '1 500 sacos' },
      { letter: 'E', text: '3 750 sacos' }
    ],
    correctLetter: 'A',
    explanation:
      'Primeiro converta a capacidade para a mesma unidade dos sacos: 1,5 t = 1 500 kg. Em seguida, divida: 1 500 / 25 = 60 sacos.',
    triTip:
      'Nunca divida grandezas em unidades diferentes. Converter tudo para a menor unidade antes de calcular elimina a maior fonte de erro nessas questões.'
  },
  {
    ...base,
    id: 'mat-45',
    topic: 'Grandezas e medidas — consumo e custo',
    difficulty: 'Média',
    question:
      'Um automóvel percorre 12 km com 1 litro de gasolina. Para uma viagem de 540 km, com a gasolina custando R$ 5,80 por litro, qual será o gasto com combustível?',
    options: [
      { letter: 'A', text: 'R$ 216,00' },
      { letter: 'B', text: 'R$ 232,00' },
      { letter: 'C', text: 'R$ 261,00' },
      { letter: 'D', text: 'R$ 290,00' },
      { letter: 'E', text: 'R$ 313,20' }
    ],
    correctLetter: 'C',
    explanation:
      'Litros necessários: 540 / 12 = 45 litros. Custo total: 45 × 5,80 = R$ 261,00.',
    triTip:
      'Questões de consumo têm sempre duas etapas: quantidade de combustível e depois custo. Multiplicar direto a distância pelo preço do litro é o erro que gera a alternativa mais alta.'
  },
  {
    ...base,
    id: 'mat-46',
    topic: 'Grandezas e medidas — vazão e tempo',
    difficulty: 'Média',
    question:
      'Uma torneira despeja água com vazão constante de 15 litros por minuto. Quanto tempo ela levará para encher completamente uma caixa d\'água de 900 litros?',
    options: [
      { letter: 'A', text: '6 minutos' },
      { letter: 'B', text: '15 minutos' },
      { letter: 'C', text: '30 minutos' },
      { letter: 'D', text: '45 minutos' },
      { letter: 'E', text: '1 hora' }
    ],
    correctLetter: 'E',
    explanation:
      'Tempo = volume / vazão = 900 / 15 = 60 minutos, ou seja, 1 hora.',
    triTip:
      'Confira a unidade pedida na resposta. O cálculo devolve minutos, mas as alternativas podem estar em horas — converter no fim é parte da questão.'
  },

  // ---------------------------------------------------------------- Progressões (2)
  {
    ...base,
    id: 'mat-47',
    topic: 'Progressão aritmética — termo geral',
    difficulty: 'Média',
    question:
      'Em uma progressão aritmética, o primeiro termo é 5 e a razão é 3. Qual é o vigésimo termo dessa sequência?',
    options: [
      { letter: 'A', text: '57' },
      { letter: 'B', text: '60' },
      { letter: 'C', text: '62' },
      { letter: 'D', text: '65' },
      { letter: 'E', text: '68' }
    ],
    correctLetter: 'C',
    explanation:
      'Pelo termo geral da PA, aₙ = a₁ + (n − 1) · r. Para n = 20: a₂₀ = 5 + 19 × 3 = 5 + 57 = 62. Usar 20 em vez de 19 levaria a 65, que é a armadilha.',
    triTip:
      'O termo geral usa (n − 1), não n: do primeiro ao vigésimo termo há 19 saltos de razão, não 20. Esse "menos um" é o erro mais cobrado em PA.'
  },
  {
    ...base,
    id: 'mat-48',
    topic: 'Progressão aritmética — soma dos termos',
    difficulty: 'Difícil',
    question:
      'Um corredor iniciante percorre 3 km na primeira semana de treino e aumenta a distância em 500 metros a cada semana seguinte. Qual é a distância total percorrida ao longo das 8 primeiras semanas?',
    options: [
      { letter: 'A', text: '26 km' },
      { letter: 'B', text: '32 km' },
      { letter: 'C', text: '38 km' },
      { letter: 'D', text: '44 km' },
      { letter: 'E', text: '52 km' }
    ],
    correctLetter: 'C',
    explanation:
      'Trata-se de uma PA com a₁ = 3 km e razão 0,5 km. O oitavo termo é a₈ = 3 + 7 × 0,5 = 6,5 km. A soma dos 8 termos é Sₙ = (a₁ + aₙ) · n / 2 = (3 + 6,5) × 8 / 2 = 9,5 × 4 = 38 km.',
    triTip:
      'A questão pede o TOTAL acumulado, não a distância da última semana. Calcule o último termo e aplique a fórmula da soma — parar no a₈ é o erro que a alternativa de 6,5 km exploraria.'
  },

  // ---------------------------------------------------------------- Lote 2 (mat-49 a mat-72)
  {
    ...base,
    id: 'mat-49',
    topic: 'Porcentagem — reajuste',
    difficulty: 'Fácil',
    question:
      'Uma prestação de serviço custava R$ 180,00 e sofreu reajuste de 15%. Qual é o novo valor da prestação?',
    options: [
      { letter: 'A', text: 'R$ 207,00' },
      { letter: 'B', text: 'R$ 216,00' },
      { letter: 'C', text: 'R$ 225,00' },
      { letter: 'D', text: 'R$ 234,00' },
      { letter: 'E', text: 'R$ 270,00' }
    ],
    correctLetter: 'A',
    explanation:
      'O reajuste de 15% aplicado ao valor original: 180 × 1,15 = R$ 207,00.',
    triTip:
      'Reajuste direto: multiplique o valor por (1 + a taxa em decimal). Não some a porcentagem ao número de reais.'
  },
  {
    ...base,
    id: 'mat-50',
    topic: 'Porcentagem — variação percentual em desconto',
    difficulty: 'Média',
    question:
      'Uma bicicleta custava R$ 900,00 e, após promoção, passou a custar R$ 720,00. Qual foi o percentual de desconto aplicado?',
    options: [
      { letter: 'A', text: '15%' },
      { letter: 'B', text: '20%' },
      { letter: 'C', text: '25%' },
      { letter: 'D', text: '30%' },
      { letter: 'E', text: '80%' }
    ],
    correctLetter: 'B',
    explanation:
      'O desconto é calculado sobre o valor original: (900 − 720) / 900 = 180/900 = 0,20 = 20%.',
    triTip:
      'A variação percentual sempre se divide pelo valor de PARTIDA, nunca pelo valor final.'
  },
  {
    ...base,
    id: 'mat-51',
    topic: 'Matemática financeira — juros compostos curtos',
    difficulty: 'Média',
    question:
      'Um valor de R$ 4.000,00 é aplicado a juros compostos de 5% ao mês, por 2 meses. Qual é o montante final?',
    options: [
      { letter: 'A', text: 'R$ 4.200,00' },
      { letter: 'B', text: 'R$ 4.400,00' },
      { letter: 'C', text: 'R$ 4.410,00' },
      { letter: 'D', text: 'R$ 4.420,00' },
      { letter: 'E', text: 'R$ 4.500,00' }
    ],
    correctLetter: 'C',
    explanation:
      'No regime composto, M = C × (1 + i)ⁿ = 4000 × 1,05² = 4000 × 1,1025 = R$ 4.410,00. A alternativa R$ 4.400,00 corresponde ao regime de juros simples (4000 + 2 × 200).',
    triTip:
      'Mesmo em prazos curtos, composto e simples já divergem. Confira sempre qual regime o enunciado pede antes de escolher a fórmula.'
  },
  {
    ...base,
    id: 'mat-52',
    topic: 'Estatística — média aritmética',
    difficulty: 'Fácil',
    question:
      'As notas de um aluno em quatro provas foram 6, 7, 9 e 10. Qual é a média aritmética dessas notas?',
    options: [
      { letter: 'A', text: '6,5' },
      { letter: 'B', text: '7,0' },
      { letter: 'C', text: '7,5' },
      { letter: 'D', text: '8,0' },
      { letter: 'E', text: '9,0' }
    ],
    correctLetter: 'D',
    explanation:
      'A média é a soma dividida pela quantidade de valores: (6 + 7 + 9 + 10) / 4 = 32 / 4 = 8,0.',
    triTip:
      'Sempre confira a quantidade de valores que está dividindo a soma — esquecer um termo é o erro mais comum nessas contas.'
  },
  {
    ...base,
    id: 'mat-53',
    topic: 'Estatística — mediana em conjunto par',
    difficulty: 'Média',
    question:
      'Uma pesquisa registrou as idades de seis participantes: 22, 25, 19, 31, 28 e 24. Qual é a mediana dessas idades?',
    options: [
      { letter: 'A', text: '19' },
      { letter: 'B', text: '22' },
      { letter: 'C', text: '23' },
      { letter: 'D', text: '24' },
      { letter: 'E', text: '24,5' }
    ],
    correctLetter: 'E',
    explanation:
      'Ordenando: 19, 22, 24, 25, 28, 31. Com seis valores, a mediana é a média dos dois centrais: (24 + 25) / 2 = 24,5.',
    triTip:
      'Mediana exige os dados ORDENADOS primeiro. Com quantidade par de valores, é sempre a média dos dois centrais, não um deles isoladamente.'
  },
  {
    ...base,
    id: 'mat-54',
    topic: 'Estatística — moda',
    difficulty: 'Média',
    question:
      'Uma turma registrou as seguintes notas em uma prova: 4, 5, 5, 5, 6, 8, 9, 9, 10 e 10. Qual é a moda dessa distribuição?',
    options: [
      { letter: 'A', text: '5' },
      { letter: 'B', text: '6' },
      { letter: 'C', text: '7' },
      { letter: 'D', text: '7,1' },
      { letter: 'E', text: '9' }
    ],
    correctLetter: 'A',
    explanation:
      'O valor 5 aparece três vezes, mais que qualquer outro na distribuição — é a moda. O valor 7,1 corresponde à média [(4+5+5+5+6+8+9+9+10+10)/10], não à moda.',
    triTip:
      'Moda é frequência, não posição nem cálculo. Basta contar qual valor mais se repete.'
  },
  {
    ...base,
    id: 'mat-55',
    topic: 'Geometria plana — perímetro do retângulo',
    difficulty: 'Fácil',
    question:
      'Um retângulo tem perímetro de 40 metros e largura de 6 metros. Qual é o comprimento desse retângulo?',
    options: [
      { letter: 'A', text: '10 m' },
      { letter: 'B', text: '14 m' },
      { letter: 'C', text: '16 m' },
      { letter: 'D', text: '20 m' },
      { letter: 'E', text: '34 m' }
    ],
    correctLetter: 'B',
    explanation:
      'O perímetro é 2 × (comprimento + largura): 40 = 2 × (c + 6), logo c + 6 = 20 e c = 14 metros.',
    triTip:
      'Divida o perímetro por 2 para obter a soma de um comprimento com uma largura — a partir daí, isolar a incógnita é direto.'
  },
  {
    ...base,
    id: 'mat-56',
    topic: 'Geometria plana — teorema de Pitágoras',
    difficulty: 'Média',
    question:
      'Uma escada de 13 metros está apoiada em uma parede, com a base a 5 metros do pé da parede. A que altura da parede o topo da escada se encontra?',
    options: [
      { letter: 'A', text: '8 m' },
      { letter: 'B', text: '10 m' },
      { letter: 'C', text: '12 m' },
      { letter: 'D', text: '13 m' },
      { letter: 'E', text: '18 m' }
    ],
    correctLetter: 'C',
    explanation:
      'A escada é a hipotenusa: 13² = 5² + h², logo h² = 169 − 25 = 144 e h = 12 metros — o trio pitagórico 5-12-13.',
    triTip:
      'Além do trio 3-4-5, memorize também 5-12-13 e 6-8-10 — eles aparecem com frequência e dispensam a raiz quadrada.'
  },
  {
    ...base,
    id: 'mat-57',
    topic: 'Geometria plana — área do trapézio',
    difficulty: 'Média',
    question:
      'Um terreno tem formato de trapézio, com bases paralelas de 20 m e 30 m e altura de 10 m. Qual é a área desse terreno?',
    options: [
      { letter: 'A', text: '200 m²' },
      { letter: 'B', text: '220 m²' },
      { letter: 'C', text: '240 m²' },
      { letter: 'D', text: '250 m²' },
      { letter: 'E', text: '300 m²' }
    ],
    correctLetter: 'D',
    explanation:
      'A área do trapézio é (base maior + base menor) / 2 × altura: (30 + 20) / 2 × 10 = 25 × 10 = 250 m².',
    triTip:
      'A fórmula do trapézio é a média das duas bases multiplicada pela altura — pense nela como um retângulo "equivalente".'
  },
  {
    ...base,
    id: 'mat-58',
    topic: 'Função afim — corrida de táxi',
    difficulty: 'Fácil',
    question:
      'Uma empresa de táxi cobra bandeirada de R$ 5,00 mais R$ 3,00 por quilômetro rodado. Qual é o valor de uma corrida de 15 km?',
    options: [
      { letter: 'A', text: 'R$ 20,00' },
      { letter: 'B', text: 'R$ 32,00' },
      { letter: 'C', text: 'R$ 41,00' },
      { letter: 'D', text: 'R$ 47,00' },
      { letter: 'E', text: 'R$ 50,00' }
    ],
    correctLetter: 'E',
    explanation:
      'O valor total é P(d) = 5 + 3d. Para d = 15: P(15) = 5 + 3 × 15 = 5 + 45 = R$ 50,00.',
    triTip:
      'Identifique a bandeirada como o valor fixo e o custo por km como a taxa variável — é a mesma estrutura de toda função afim de tarifa.'
  },
  {
    ...base,
    id: 'mat-59',
    topic: 'Função quadrática — vértice em contexto de lucro',
    difficulty: 'Difícil',
    question:
      'O lucro L, em milhares de reais, de uma empresa é dado por L(x) = −x² + 12x − 20, sendo x a quantidade de unidades vendidas, em centenas. Qual é a quantidade de unidades (em centenas) que maximiza o lucro?',
    options: [
      { letter: 'A', text: '6' },
      { letter: 'B', text: '8' },
      { letter: 'C', text: '10' },
      { letter: 'D', text: '12' },
      { letter: 'E', text: '20' }
    ],
    correctLetter: 'A',
    explanation:
      'O lucro máximo ocorre no vértice da parábola: x = −b / (2a) = −12 / (2 × −1) = 6.',
    triTip:
      'A fórmula do vértice (xv = −b/2a) resolve qualquer questão de máximo ou mínimo de função quadrática — não é preciso testar valores.'
  },
  {
    ...base,
    id: 'mat-60',
    topic: 'Função exponencial — depreciação',
    difficulty: 'Difícil',
    question:
      'O valor de um carro se deprecia 10% ao ano. Se ele custa hoje R$ 50.000,00, qual será seu valor aproximado após 2 anos?',
    options: [
      { letter: 'A', text: 'R$ 40.000,00' },
      { letter: 'B', text: 'R$ 40.500,00' },
      { letter: 'C', text: 'R$ 45.000,00' },
      { letter: 'D', text: 'R$ 49.000,00' },
      { letter: 'E', text: 'R$ 50.000,00' }
    ],
    correctLetter: 'B',
    explanation:
      'A depreciação composta multiplica o valor por (1 − taxa) a cada ano: 50000 × 0,9² = 50000 × 0,81 = R$ 40.500,00.',
    triTip:
      'Depreciação funciona como juros compostos, mas com fator menor que 1 — o valor cai progressivamente mais devagar em termos absolutos.'
  },
  {
    ...base,
    id: 'mat-61',
    topic: 'Razão e proporção — produção industrial',
    difficulty: 'Média',
    question:
      'Uma fábrica de sucos usa 3 kg de polpa de fruta para produzir 50 litros de suco. Mantendo essa proporção, quantos quilogramas de polpa são necessários para produzir 175 litros?',
    options: [
      { letter: 'A', text: '8 kg' },
      { letter: 'B', text: '9 kg' },
      { letter: 'C', text: '10,5 kg' },
      { letter: 'D', text: '12 kg' },
      { letter: 'E', text: '15 kg' }
    ],
    correctLetter: 'C',
    explanation:
      'Regra de três direta: 3 × (175 / 50) = 3 × 3,5 = 10,5 kg.',
    triTip:
      'Antes de multiplicar, confirme que a proporção é direta: mais suco exige mais polpa, na mesma razão.'
  },
  {
    ...base,
    id: 'mat-62',
    topic: 'Razão e proporção — taxas de trabalho conjunto',
    difficulty: 'Difícil',
    question:
      'Uma torneira enche sozinha um tanque em 6 horas. Duas torneiras idênticas, operando juntas, enchem o mesmo tanque em quanto tempo?',
    options: [
      { letter: 'A', text: '1,5 hora' },
      { letter: 'B', text: '2 horas' },
      { letter: 'C', text: '2,5 horas' },
      { letter: 'D', text: '3 horas' },
      { letter: 'E', text: '6 horas' }
    ],
    correctLetter: 'D',
    explanation:
      'A taxa de uma torneira é 1/6 do tanque por hora. Duas juntas somam 2/6 = 1/3 do tanque por hora, e o tempo é o inverso: 3 horas.',
    triTip:
      'Em problemas de torneiras ou trabalho conjunto, some as TAXAS (frações do trabalho por hora), nunca os tempos diretamente.'
  },
  {
    ...base,
    id: 'mat-63',
    topic: 'Razão e proporção — escala de miniatura',
    difficulty: 'Média',
    question:
      'Uma miniatura de carro é construída na escala 1:20. Se o carro real mede 3 metros de comprimento, qual é o comprimento da miniatura, em centímetros?',
    options: [
      { letter: 'A', text: '0,15 cm' },
      { letter: 'B', text: '6 cm' },
      { letter: 'C', text: '10 cm' },
      { letter: 'D', text: '12 cm' },
      { letter: 'E', text: '15 cm' }
    ],
    correctLetter: 'E',
    explanation:
      'Convertendo primeiro: 3 m = 300 cm. Aplicando a escala: 300 / 20 = 15 cm.',
    triTip:
      'Converta para a mesma unidade ANTES de aplicar a escala — misturar metros e centímetros na divisão é o erro mais comum.'
  },
  {
    ...base,
    id: 'mat-64',
    topic: 'Geometria espacial — volume do paralelepípedo',
    difficulty: 'Fácil',
    question:
      'Uma caixa de sapato tem formato de paralelepípedo com dimensões 30 cm × 20 cm × 12 cm. Qual é o volume dessa caixa, em centímetros cúbicos?',
    options: [
      { letter: 'A', text: '600 cm³' },
      { letter: 'B', text: '2 400 cm³' },
      { letter: 'C', text: '3 600 cm³' },
      { letter: 'D', text: '6 000 cm³' },
      { letter: 'E', text: '7 200 cm³' }
    ],
    correctLetter: 'E',
    explanation:
      'O volume é o produto das três dimensões: 30 × 20 × 12 = 7 200 cm³. O valor 2 400 cm² corresponde à área da superfície total da caixa, não ao volume.',
    triTip:
      'Volume multiplica as três dimensões; área de superfície soma as áreas das faces. São grandezas diferentes e não devem ser confundidas.'
  },
  {
    ...base,
    id: 'mat-65',
    topic: 'Geometria espacial — volume do cone',
    difficulty: 'Média',
    question:
      'Um cone tem raio da base igual a 3 cm e altura de 4 cm. Usando π ≈ 3, qual é o volume desse cone?',
    options: [
      { letter: 'A', text: '12 cm³' },
      { letter: 'B', text: '27 cm³' },
      { letter: 'C', text: '36 cm³' },
      { letter: 'D', text: '48 cm³' },
      { letter: 'E', text: '108 cm³' }
    ],
    correctLetter: 'C',
    explanation:
      'O volume do cone é V = (1/3) × π × r² × h = (1/3) × 3 × 9 × 4 = 36 cm³. Esquecer o fator 1/3 levaria a 108 cm³.',
    triTip:
      'O volume do cone é sempre um terço do volume do cilindro de mesma base e altura — não esqueça esse fator na fórmula.'
  },
  {
    ...base,
    id: 'mat-66',
    topic: 'Probabilidade — dois eventos simultâneos',
    difficulty: 'Fácil',
    question:
      'Duas moedas honestas são lançadas simultaneamente. Qual é a probabilidade de sair pelo menos uma cara?',
    options: [
      { letter: 'A', text: '12,5%' },
      { letter: 'B', text: '25%' },
      { letter: 'C', text: '50%' },
      { letter: 'D', text: '75%' },
      { letter: 'E', text: '100%' }
    ],
    correctLetter: 'D',
    explanation:
      'O espaço amostral tem 4 resultados (cara-cara, cara-coroa, coroa-cara, coroa-coroa). Apenas coroa-coroa não tem nenhuma cara, então "pelo menos uma cara" ocorre em 3 dos 4 casos: 75%.',
    triTip:
      '"Pelo menos um" costuma ser mais fácil de calcular pelo complementar: 100% menos a probabilidade de não ocorrer nenhuma vez.'
  },
  {
    ...base,
    id: 'mat-67',
    topic: 'Probabilidade — eventos sucessivos sem reposição',
    difficulty: 'Difícil',
    question:
      'Uma urna tem 3 bolas vermelhas e 2 azuis. Duas bolas são retiradas sucessivamente, sem reposição. Qual é a probabilidade de as duas serem vermelhas?',
    options: [
      { letter: 'A', text: '24%' },
      { letter: 'B', text: '30%' },
      { letter: 'C', text: '50%' },
      { letter: 'D', text: '60%' },
      { letter: 'E', text: '36%' }
    ],
    correctLetter: 'B',
    explanation:
      'A primeira retirada tem probabilidade 3/5; sem reposição, a segunda tem probabilidade 2/4. O produto é (3/5) × (2/4) = 6/20 = 30%.',
    triTip:
      '"Sem reposição" muda o total disponível na segunda retirada — esquecer isso e usar 3/5 nas duas vezes é o erro que a alternativa de 36% testa.'
  },
  {
    ...base,
    id: 'mat-68',
    topic: 'Combinatória — anagramas',
    difficulty: 'Fácil',
    question:
      'Quantos anagramas distintos podem ser formados com as letras da palavra AMOR?',
    options: [
      { letter: 'A', text: '4' },
      { letter: 'B', text: '12' },
      { letter: 'C', text: '16' },
      { letter: 'D', text: '24' },
      { letter: 'E', text: '256' }
    ],
    correctLetter: 'D',
    explanation:
      'Com 4 letras distintas, o número de anagramas é 4! = 4 × 3 × 2 × 1 = 24.',
    triTip:
      'Quando todas as letras são diferentes, o número de anagramas é sempre o fatorial da quantidade de letras.'
  },
  {
    ...base,
    id: 'mat-69',
    topic: 'Combinatória — combinação simples',
    difficulty: 'Média',
    question:
      'Uma pizzaria oferece 6 sabores diferentes. De quantas formas um cliente pode escolher 2 sabores diferentes para uma pizza meio a meio?',
    options: [
      { letter: 'A', text: '6' },
      { letter: 'B', text: '15' },
      { letter: 'C', text: '30' },
      { letter: 'D', text: '36' },
      { letter: 'E', text: '720' }
    ],
    correctLetter: 'B',
    explanation:
      'Como não há distinção de "metades", a ordem não importa: C(6,2) = (6 × 5) / 2 = 15. O valor 30 corresponde ao arranjo, usado quando a ordem importaria.',
    triTip:
      'Pizza meio a meio não tem posição fixa para cada sabor — a escolha é uma combinação, não um arranjo.'
  },
  {
    ...base,
    id: 'mat-70',
    topic: 'Grandezas e medidas — velocidade',
    difficulty: 'Média',
    question:
      'Um trem percorre 90 km em 45 minutos, mantendo velocidade constante. Qual é a velocidade desse trem em km/h?',
    options: [
      { letter: 'A', text: '45 km/h' },
      { letter: 'B', text: '90 km/h' },
      { letter: 'C', text: '108 km/h' },
      { letter: 'D', text: '120 km/h' },
      { letter: 'E', text: '135 km/h' }
    ],
    correctLetter: 'D',
    explanation:
      'Convertendo 45 minutos para horas (0,75 h): velocidade = 90 / 0,75 = 120 km/h.',
    triTip:
      'Para obter km/h, o tempo precisa estar em horas. Converter minutos para horas antes de dividir evita o erro mais comum dessas questões.'
  },
  {
    ...base,
    id: 'mat-71',
    topic: 'Progressão aritmética — soma dos termos',
    difficulty: 'Média',
    question:
      'Numa progressão aritmética, o primeiro termo é 4 e a razão é 5. Qual é a soma dos 10 primeiros termos?',
    options: [
      { letter: 'A', text: '130' },
      { letter: 'B', text: '220' },
      { letter: 'C', text: '245' },
      { letter: 'D', text: '265' },
      { letter: 'E', text: '490' }
    ],
    correctLetter: 'D',
    explanation:
      'O décimo termo é a₁₀ = 4 + 9 × 5 = 49. A soma é Sₙ = (a₁ + aₙ) × n / 2 = (4 + 49) × 10 / 2 = 265.',
    triTip:
      'Calcule sempre o último termo antes da soma — tentar somar termo a termo é lento e propenso a erro.'
  },
  {
    ...base,
    id: 'mat-72',
    topic: 'Progressão geométrica — termo geral',
    difficulty: 'Difícil',
    question:
      'Numa progressão geométrica, o primeiro termo é 3 e a razão é 2. Qual é o quinto termo dessa sequência?',
    options: [
      { letter: 'A', text: '11' },
      { letter: 'B', text: '24' },
      { letter: 'C', text: '32' },
      { letter: 'D', text: '48' },
      { letter: 'E', text: '96' }
    ],
    correctLetter: 'D',
    explanation:
      'O termo geral da PG é aₙ = a₁ × qⁿ⁻¹. Para n = 5: a₅ = 3 × 2⁴ = 3 × 16 = 48. A alternativa 11 resulta de aplicar a fórmula da PA por engano (3 + 2 × 4).',
    triTip:
      'Não confunda o termo geral da PG (multiplicação por potência da razão) com o da PA (soma de múltiplos da razão) — são estruturas diferentes.'
  }
];
