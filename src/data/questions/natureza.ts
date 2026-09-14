import { ExamQuestion } from '../../types';

// Ciências da Natureza e suas Tecnologias — 48 questões autorais.
//
// A área reúne três disciplinas e o ENEM as equilibra, então o banco faz o mesmo:
// 16 de Biologia, 16 de Física e 16 de Química. Dentro de cada uma, a divisão
// segue a incidência real — Ecologia pesa mais em Biologia, Mecânica e
// Eletricidade em Física, Estequiometria e Orgânica em Química.
//
// Dificuldade pelo número de passos: Fácil resolve direto, Média exige duas
// etapas, Difícil exige interpretar a situação antes de aplicar a fórmula.
//
// Gabaritos conferidos por npm run confere-questoes, que recalcula cada
// resultado numérico de forma independente do que está em correctLetter.

const base = {
  subject: 'natureza' as const,
  areaName: 'Ciências da Natureza',
  origin: 'Questão Inédita'
};

export const NATUREZA_QUESTIONS: ExamQuestion[] = [
  // ================================================================ BIOLOGIA (16)
  // ---- Ecologia (5)
  {
    ...base,
    id: 'nat-01',
    topic: 'Ecologia — fluxo de energia na cadeia alimentar',
    difficulty: 'Média',
    question:
      'Em uma cadeia alimentar, estima-se que apenas cerca de 10% da energia de um nível trófico seja transferida ao nível seguinte. Se os produtores de um ecossistema fixam 10 000 kcal, quanta energia estará disponível para os consumidores secundários?',
    options: [
      { letter: 'A', text: '1 kcal' },
      { letter: 'B', text: '10 kcal' },
      { letter: 'C', text: '100 kcal' },
      { letter: 'D', text: '1 000 kcal' },
      { letter: 'E', text: '10 000 kcal' }
    ],
    correctLetter: 'C',
    explanation:
      'A energia cai a 10% a cada nível. Produtores: 10 000 kcal. Consumidores primários: 1 000 kcal. Consumidores secundários: 100 kcal. Quem parou no primeiro nível marcaria 1 000 kcal.',
    triTip:
      'Conte os níveis com cuidado: consumidor primário é o segundo nível, secundário é o terceiro. É essa contagem, e não a conta, que o ENEM está testando aqui.'
  },
  {
    ...base,
    id: 'nat-02',
    topic: 'Ecologia — magnificação trófica',
    difficulty: 'Média',
    question:
      'Metais pesados lançados irregularmente em um rio não são metabolizados nem excretados pelos organismos, acumulando-se nos tecidos ao longo da cadeia alimentar. Qual organismo apresentará a maior concentração do poluente por unidade de biomassa?',
    options: [
      { letter: 'A', text: 'O fitoplâncton, produtor primário' },
      { letter: 'B', text: 'O zooplâncton, consumidor primário' },
      { letter: 'C', text: 'Os pequenos peixes que se alimentam de zooplâncton' },
      { letter: 'D', text: 'Os peixes carnívoros de médio porte' },
      { letter: 'E', text: 'As aves piscívoras, no topo da cadeia' }
    ],
    correctLetter: 'E',
    explanation:
      'Na magnificação trófica, substâncias não degradáveis se concentram progressivamente a cada nível, porque cada consumidor ingere muitos indivíduos do nível anterior. O topo da cadeia acumula a maior dose.',
    triTip:
      'Energia diminui ao subir a cadeia; poluente não degradável aumenta. Essa inversão é exatamente o que o ENEM cobra quando junta os dois conceitos na mesma questão.'
  },
  {
    ...base,
    id: 'nat-03',
    topic: 'Ecologia — ciclo do carbono',
    difficulty: 'Média',
    question:
      'Entre os processos que movimentam o carbono na biosfera, qual é o principal responsável por retirar gás carbônico da atmosfera e incorporá-lo à matéria orgânica dos seres vivos?',
    options: [
      { letter: 'A', text: 'Fotossíntese' },
      { letter: 'B', text: 'Respiração celular' },
      { letter: 'C', text: 'Combustão de combustíveis fósseis' },
      { letter: 'D', text: 'Decomposição da matéria orgânica' },
      { letter: 'E', text: 'Fermentação realizada por leveduras' }
    ],
    correctLetter: 'A',
    explanation:
      'A fotossíntese converte CO₂ atmosférico em compostos orgânicos. Respiração, combustão, decomposição e fermentação fazem o caminho inverso, devolvendo carbono à atmosfera.',
    triTip:
      'Guarde o par: fotossíntese retira CO₂, todo o resto devolve. Essa simetria resolve quase toda questão de ciclo do carbono sem precisar decorar o ciclo inteiro.'
  },
  {
    ...base,
    id: 'nat-04',
    topic: 'Ecologia — relações ecológicas',
    difficulty: 'Média',
    question:
      'O líquen resulta da associação entre uma alga e um fungo: a alga realiza fotossíntese e fornece matéria orgânica, enquanto o fungo garante estrutura, umidade e sais minerais. Ambos são beneficiados e a separação inviabiliza a sobrevivência nas condições em que vivem. Essa relação é classificada como:',
    options: [
      { letter: 'A', text: 'Comensalismo' },
      { letter: 'B', text: 'Mutualismo' },
      { letter: 'C', text: 'Parasitismo' },
      { letter: 'D', text: 'Predatismo' },
      { letter: 'E', text: 'Competição interespecífica' }
    ],
    correctLetter: 'B',
    explanation:
      'Ambos se beneficiam e a associação é obrigatória para a sobrevivência: trata-se de mutualismo. No protocooperação o benefício é mútuo mas facultativo; no comensalismo apenas um lado ganha, sem prejuízo ao outro.',
    triTip:
      'Duas perguntas resolvem qualquer relação ecológica: quem se beneficia, e a associação é obrigatória? Mutualismo é ganho mútuo obrigatório; protocooperação é ganho mútuo facultativo.'
  },
  {
    ...base,
    id: 'nat-05',
    topic: 'Ecologia — eutrofização',
    difficulty: 'Difícil',
    question:
      'O despejo de esgoto rico em nitrogênio e fósforo em um lago provoca proliferação intensa de algas na superfície. Semanas depois, observa-se mortandade de peixes. Qual é a explicação para essa mortandade?',
    options: [
      { letter: 'A', text: 'As algas produzem toxinas que envenenam diretamente todos os peixes.' },
      { letter: 'B', text: 'O excesso de nitrogênio torna a água ácida a ponto de dissolver as brânquias.' },
      { letter: 'C', text: 'As algas consomem todo o fósforo, que é essencial à respiração dos peixes.' },
      {
        letter: 'D',
        text: 'A camada de algas bloqueia a luz, e a decomposição das algas mortas consome o oxigênio dissolvido na água.'
      },
      { letter: 'E', text: 'A temperatura da água aumenta tanto que ultrapassa o limite térmico dos peixes.' }
    ],
    correctLetter: 'D',
    explanation:
      'Na eutrofização, as algas se multiplicam, bloqueiam a luz e morrem em massa. A decomposição dessa biomassa por bactérias aeróbias consome o oxigênio dissolvido, e é a anoxia que mata os peixes.',
    triTip:
      'O que mata na eutrofização não são as algas, é a decomposição delas. Guardar essa cadeia — nutrientes, algas, sombra, morte das algas, bactérias, falta de oxigênio — responde a questão inteira.'
  },

  // ---- Genética (3)
  {
    ...base,
    id: 'nat-06',
    topic: 'Genética — diibridismo',
    difficulty: 'Difícil',
    question:
      'Duas plantas duplo-heterozigotas (AaBb) são cruzadas entre si, sendo os dois pares de alelos de segregação independente. Qual é a probabilidade de um descendente ser duplo-recessivo (aabb)?',
    options: [
      { letter: 'A', text: '1/16' },
      { letter: 'B', text: '1/8' },
      { letter: 'C', text: '3/16' },
      { letter: 'D', text: '1/4' },
      { letter: 'E', text: '9/16' }
    ],
    correctLetter: 'A',
    explanation:
      'Cada par segrega independentemente: a probabilidade de aa é 1/4 e a de bb também é 1/4. Como os eventos são independentes, multiplicam-se: 1/4 × 1/4 = 1/16.',
    triTip:
      'Em diibridismo, resolva um par de cada vez e multiplique as probabilidades. Montar o quadro de Punnett de 16 casas custa tempo que você não tem na prova.'
  },
  {
    ...base,
    id: 'nat-07',
    topic: 'Genética — sistema ABO',
    difficulty: 'Média',
    question:
      'Um homem de sangue tipo A, heterozigoto (IAi), e uma mulher de sangue tipo B, também heterozigota (IBi), têm filhos. Quais tipos sanguíneos são possíveis para essa prole?',
    options: [
      { letter: 'A', text: 'Apenas A e B' },
      { letter: 'B', text: 'Apenas AB' },
      { letter: 'C', text: 'Apenas A, B e AB' },
      { letter: 'D', text: 'Apenas O' },
      { letter: 'E', text: 'A, B, AB ou O, cada um com probabilidade de 1/4' }
    ],
    correctLetter: 'E',
    explanation:
      'O cruzamento IAi × IBi gera quatro combinações equiprováveis: IAIB (tipo AB), IAi (tipo A), IBi (tipo B) e ii (tipo O). Todos os quatro tipos são possíveis, cada um com 25%.',
    triTip:
      'Dois pais heterozigotos A e B podem ter filho O — resultado contraintuitivo que o ENEM adora. O alelo i está presente em ambos e pode se encontrar.'
  },
  {
    ...base,
    id: 'nat-08',
    topic: 'Genética — ácidos nucleicos',
    difficulty: 'Fácil',
    question:
      'Comparando as moléculas de DNA e RNA, qual base nitrogenada está presente no RNA e ausente no DNA?',
    options: [
      { letter: 'A', text: 'Adenina' },
      { letter: 'B', text: 'Citosina' },
      { letter: 'C', text: 'Guanina' },
      { letter: 'D', text: 'Timina' },
      { letter: 'E', text: 'Uracila' }
    ],
    correctLetter: 'E',
    explanation:
      'No RNA, a uracila ocupa o lugar da timina, que é exclusiva do DNA. Adenina, citosina e guanina aparecem nas duas moléculas.',
    triTip:
      'Memorize a troca: DNA tem Timina, RNA tem Uracila. O restante das bases é comum, e o açúcar também muda — desoxirribose no DNA, ribose no RNA.'
  },

  // ---- Citologia e metabolismo (3)
  {
    ...base,
    id: 'nat-09',
    topic: 'Citologia — organelas',
    difficulty: 'Fácil',
    question:
      'Em uma célula animal, qual organela é responsável pela respiração celular, processo que produz a maior parte do ATP utilizado pela célula?',
    options: [
      { letter: 'A', text: 'Cloroplasto' },
      { letter: 'B', text: 'Lisossomo' },
      { letter: 'C', text: 'Mitocôndria' },
      { letter: 'D', text: 'Ribossomo' },
      { letter: 'E', text: 'Complexo golgiense' }
    ],
    correctLetter: 'C',
    explanation:
      'A mitocôndria realiza a respiração celular aeróbia. O cloroplasto faz fotossíntese e não existe em células animais; o lisossomo digere, o ribossomo sintetiza proteínas e o golgiense empacota secreções.',
    triTip:
      'Associe cada organela a um verbo: mitocôndria respira, cloroplasto fotossintetiza, ribossomo monta proteína, lisossomo digere. Resolve a maioria das questões de citologia em segundos.'
  },
  {
    ...base,
    id: 'nat-10',
    topic: 'Citologia — osmose',
    difficulty: 'Média',
    question:
      'Uma célula vegetal é colocada em uma solução com concentração de solutos muito maior que a do seu citoplasma. O que ocorre com essa célula?',
    options: [
      { letter: 'A', text: 'Absorve água e se torna túrgida.' },
      { letter: 'B', text: 'Permanece inalterada, pois a parede celular impede qualquer troca.' },
      { letter: 'C', text: 'Absorve solutos até igualar as concentrações, sem movimento de água.' },
      { letter: 'D', text: 'Perde água para o meio e sofre plasmólise.' },
      { letter: 'E', text: 'Rompe-se imediatamente por excesso de pressão interna.' }
    ],
    correctLetter: 'D',
    explanation:
      'Em meio hipertônico, a água sai da célula por osmose, indo da região menos concentrada em solutos para a mais concentrada. O citoplasma murcha e se desprende da parede: é a plasmólise.',
    triTip:
      'Na osmose, quem se move é a ÁGUA, e ela vai para onde há mais soluto. Célula vegetal em meio hipertônico plasmolisa; a parede impede o rompimento no caso oposto, mas não impede a perda de água.'
  },
  {
    ...base,
    id: 'nat-11',
    topic: 'Metabolismo — fotossíntese',
    difficulty: 'Média',
    question:
      'A equação global da fotossíntese pode ser representada por: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Para a produção de 1 mol de glicose, quantos mols de gás carbônico são consumidos?',
    options: [
      { letter: 'A', text: '1 mol' },
      { letter: 'B', text: '2 mols' },
      { letter: 'C', text: '3 mols' },
      { letter: 'D', text: '6 mols' },
      { letter: 'E', text: '12 mols' }
    ],
    correctLetter: 'D',
    explanation:
      'Os coeficientes da equação balanceada dão a proporção diretamente: 6 mols de CO₂ para cada 1 mol de glicose formado.',
    triTip:
      'Equação balanceada é uma receita em mols. Antes de calcular qualquer coisa, confira se ela já está balanceada — o ENEM às vezes entrega a equação crua de propósito.'
  },

  // ---- Fisiologia e saúde (3)
  {
    ...base,
    id: 'nat-12',
    topic: 'Fisiologia — imunização',
    difficulty: 'Média',
    question:
      'As vacinas são consideradas uma forma de imunização ativa. Isso ocorre porque elas:',
    options: [
      { letter: 'A', text: 'introduzem anticorpos prontos, produzidos previamente em laboratório.' },
      {
        letter: 'B',
        text: 'introduzem antígenos que estimulam o organismo a produzir seus próprios anticorpos e células de memória.'
      },
      { letter: 'C', text: 'eliminam diretamente o agente infeccioso já instalado no organismo.' },
      { letter: 'D', text: 'impedem fisicamente a entrada do microrganismo pelas vias respiratórias.' },
      { letter: 'E', text: 'substituem permanentemente as células do sistema imunológico do indivíduo.' }
    ],
    correctLetter: 'B',
    explanation:
      'A vacina apresenta antígenos (agentes atenuados, inativados ou fragmentos) e o próprio organismo produz anticorpos e células de memória — daí ser ativa. A soroterapia, que fornece anticorpos prontos, é imunização passiva.',
    triTip:
      'Vacina é prevenção e imunização ativa, com memória duradoura. Soro é tratamento e imunização passiva, com efeito imediato e curto. O ENEM cobra essa distinção quase todo ano.'
  },
  {
    ...base,
    id: 'nat-13',
    topic: 'Fisiologia — sistema circulatório',
    difficulty: 'Fácil',
    question:
      'No sistema circulatório humano, qual vaso é responsável por levar o sangue do coração até os pulmões, para que ocorra a hematose?',
    options: [
      { letter: 'A', text: 'Veia cava superior' },
      { letter: 'B', text: 'Veia pulmonar' },
      { letter: 'C', text: 'Artéria pulmonar' },
      { letter: 'D', text: 'Artéria aorta' },
      { letter: 'E', text: 'Veia porta hepática' }
    ],
    correctLetter: 'C',
    explanation:
      'A artéria pulmonar sai do ventrículo direito levando sangue venoso aos pulmões. A veia pulmonar faz o caminho inverso, trazendo sangue já oxigenado de volta ao coração.',
    triTip:
      'Artéria é o vaso que SAI do coração, veia é o que CHEGA — independentemente de o sangue ser arterial ou venoso. A artéria e a veia pulmonares são justamente as exceções que provam a regra.'
  },
  {
    ...base,
    id: 'nat-14',
    topic: 'Saúde pública — doenças transmitidas por vetor',
    difficulty: 'Fácil',
    question:
      'Dengue, zika e chikungunya são doenças virais que provocam surtos recorrentes no Brasil. O que essas três doenças têm em comum do ponto de vista epidemiológico?',
    options: [
      { letter: 'A', text: 'São transmitidas pela fêmea do mosquito Aedes aegypti.' },
      { letter: 'B', text: 'São transmitidas pela água contaminada por fezes.' },
      { letter: 'C', text: 'São causadas por bactérias e tratadas com antibióticos.' },
      { letter: 'D', text: 'São transmitidas pelo contato direto entre pessoas doentes.' },
      { letter: 'E', text: 'São transmitidas pela picada do mosquito-palha.' }
    ],
    correctLetter: 'A',
    explanation:
      'As três são viroses transmitidas pela fêmea do Aedes aegypti, que se reproduz em água parada e limpa. Por serem virais, não respondem a antibióticos. O mosquito-palha transmite leishmaniose.',
    triTip:
      'Combate ao Aedes é tema garantido: eliminar criadouros de água parada é a única medida que atinge as três doenças ao mesmo tempo. Ótimo repertório de Redação também.'
  },

  // ---- Evolução (2)
  {
    ...base,
    id: 'nat-15',
    topic: 'Evolução — seleção natural',
    difficulty: 'Média',
    question:
      'O uso indiscriminado de antibióticos tem favorecido o surgimento de bactérias resistentes. Do ponto de vista evolutivo, essa resistência é mais bem explicada porque:',
    options: [
      { letter: 'A', text: 'as bactérias desenvolvem a resistência propositalmente ao entrar em contato com o antibiótico.' },
      {
        letter: 'B',
        text: 'já existiam variantes resistentes na população, e o antibiótico eliminou as sensíveis, permitindo que as resistentes se multiplicassem.'
      },
      { letter: 'C', text: 'o antibiótico transforma quimicamente todas as bactérias em variantes resistentes.' },
      { letter: 'D', text: 'as bactérias resistentes surgem apenas por reprodução sexuada entre espécies diferentes.' },
      { letter: 'E', text: 'a resistência é adquirida pelo uso repetido e depois transmitida por hábito às gerações seguintes.' }
    ],
    correctLetter: 'B',
    explanation:
      'A variabilidade é anterior à pressão seletiva: mutações aleatórias já haviam gerado variantes resistentes. O antibiótico não cria a resistência, apenas seleciona quem já a possuía.',
    triTip:
      'O erro clássico é dizer que o ambiente "cria" a adaptação — isso é lamarckismo. Na seleção natural o ambiente apenas filtra variações que já existiam.'
  },
  {
    ...base,
    id: 'nat-16',
    topic: 'Evolução — Lamarck e Darwin',
    difficulty: 'Difícil',
    question:
      'A ideia de que o pescoço da girafa se alongou porque os indivíduos se esforçavam para alcançar folhas altas, e de que esse alongamento adquirido era transmitido aos descendentes, corresponde a qual concepção evolutiva?',
    options: [
      { letter: 'A', text: 'Lamarckismo, com a lei do uso e desuso e a herança dos caracteres adquiridos.' },
      { letter: 'B', text: 'Darwinismo, baseado na seleção natural de variações preexistentes.' },
      { letter: 'C', text: 'Neodarwinismo, que integra genética de populações à seleção natural.' },
      { letter: 'D', text: 'Criacionismo, que nega qualquer transformação das espécies.' },
      { letter: 'E', text: 'Deriva genética, ligada a variações aleatórias em populações pequenas.' }
    ],
    correctLetter: 'A',
    explanation:
      'A combinação de uso e desuso com herança de caracteres adquiridos é a marca do lamarckismo. Para Darwin, as girafas de pescoço mais longo já existiam por variação e foram favorecidas pela seleção.',
    triTip:
      'Se a alternativa diz que o organismo "se esforçou", "desenvolveu por necessidade" ou "passou adiante o que adquiriu em vida", é Lamarck — e quase sempre a resposta errada, exceto quando a pergunta é justamente identificá-lo.'
  },

  // ================================================================ FÍSICA (16)
  // ---- Mecânica e energia (5)
  {
    ...base,
    id: 'nat-17',
    topic: 'Cinemática — velocidade média',
    difficulty: 'Fácil',
    question:
      'Um ônibus percorre 240 km entre duas cidades em 3 horas de viagem. Qual foi sua velocidade média nesse trajeto?',
    options: [
      { letter: 'A', text: '80 km/h' },
      { letter: 'B', text: '90 km/h' },
      { letter: 'C', text: '100 km/h' },
      { letter: 'D', text: '120 km/h' },
      { letter: 'E', text: '240 km/h' }
    ],
    correctLetter: 'A',
    explanation:
      'Velocidade média é a razão entre distância e tempo: 240 / 3 = 80 km/h.',
    triTip:
      'Velocidade média usa a distância TOTAL sobre o tempo TOTAL — nunca a média aritmética das velocidades de cada trecho, que é a pegadinha favorita do ENEM nesse tema.'
  },
  {
    ...base,
    id: 'nat-18',
    topic: 'Cinemática — movimento uniformemente variado',
    difficulty: 'Difícil',
    question:
      'Um carro trafega a 20 m/s quando o motorista aciona os freios, imprimindo desaceleração constante de 4 m/s². Qual distância o veículo percorre até parar completamente?',
    options: [
      { letter: 'A', text: '5 m' },
      { letter: 'B', text: '10 m' },
      { letter: 'C', text: '25 m' },
      { letter: 'D', text: '50 m' },
      { letter: 'E', text: '80 m' }
    ],
    correctLetter: 'D',
    explanation:
      'Pela equação de Torricelli, v² = v₀² − 2·a·ΔS. Com v = 0: 0 = 400 − 8·ΔS, logo ΔS = 50 metros. Quem dividiu apenas 20 por 4 obteria 5, que é o TEMPO de frenagem em segundos, não a distância.',
    triTip:
      'Torricelli é a equação para usar quando o enunciado não menciona tempo. Ela liga velocidade, aceleração e distância diretamente, sem passo intermediário.'
  },
  {
    ...base,
    id: 'nat-19',
    topic: 'Dinâmica — segunda lei de Newton',
    difficulty: 'Média',
    question:
      'Um corpo de 5 kg, apoiado sobre uma superfície horizontal sem atrito, recebe a ação de uma força resultante horizontal de 20 N. Qual aceleração ele adquire?',
    options: [
      { letter: 'A', text: '0,25 m/s²' },
      { letter: 'B', text: '4 m/s²' },
      { letter: 'C', text: '15 m/s²' },
      { letter: 'D', text: '25 m/s²' },
      { letter: 'E', text: '100 m/s²' }
    ],
    correctLetter: 'B',
    explanation:
      'Pela segunda lei de Newton, F = m·a, logo a = F/m = 20/5 = 4 m/s². A alternativa 0,25 m/s² corresponde a inverter a divisão (m/F), e 100 m/s² a multiplicar as grandezas.',
    triTip:
      'Antes de dividir, confira a unidade do resultado: aceleração sai em m/s². Se a conta produziria kg/N, a divisão está invertida.'
  },
  {
    ...base,
    id: 'nat-20',
    topic: 'Energia — energia potencial gravitacional',
    difficulty: 'Média',
    question:
      'Um bloco de 2 kg é elevado até uma prateleira a 10 metros do solo. Adotando g = 10 m/s², qual é a energia potencial gravitacional adquirida pelo bloco em relação ao solo?',
    options: [
      { letter: 'A', text: '20 J' },
      { letter: 'B', text: '50 J' },
      { letter: 'C', text: '100 J' },
      { letter: 'D', text: '150 J' },
      { letter: 'E', text: '200 J' }
    ],
    correctLetter: 'E',
    explanation:
      'A energia potencial gravitacional é Ep = m·g·h = 2 × 10 × 10 = 200 J. Esquecer de multiplicar por g levaria a 20 J.',
    triTip:
      'Ep = m·g·h tem três fatores, e o esquecido costuma ser o g. Um bom hábito é conferir a ordem de grandeza: 2 kg a 10 m não rende apenas algumas dezenas de joules.'
  },
  {
    ...base,
    id: 'nat-21',
    topic: 'Energia — conservação da energia mecânica',
    difficulty: 'Difícil',
    question:
      'Um objeto é abandonado do repouso de uma altura de 20 metros. Desprezando a resistência do ar e adotando g = 10 m/s², com que velocidade ele atinge o solo?',
    options: [
      { letter: 'A', text: '10 m/s' },
      { letter: 'B', text: '14 m/s' },
      { letter: 'C', text: '20 m/s' },
      { letter: 'D', text: '40 m/s' },
      { letter: 'E', text: '200 m/s' }
    ],
    correctLetter: 'C',
    explanation:
      'Pela conservação da energia mecânica, a energia potencial converte-se integralmente em cinética: m·g·h = m·v²/2. A massa se cancela e v = √(2·g·h) = √(2 × 10 × 20) = √400 = 20 m/s.',
    triTip:
      'Repare que a massa desaparece: na queda livre, todos os corpos chegam com a mesma velocidade. Se a sua conta manteve a massa no resultado, algo foi feito errado.'
  },

  // ---- Eletricidade (4)
  {
    ...base,
    id: 'nat-22',
    topic: 'Eletricidade — consumo em quilowatt-hora',
    difficulty: 'Média',
    question:
      'Um chuveiro elétrico de 5 500 W é usado por 30 minutos todos os dias. Qual é o consumo mensal desse aparelho, em quilowatt-hora, considerando um mês de 30 dias?',
    options: [
      { letter: 'A', text: '8,25 kWh' },
      { letter: 'B', text: '27,5 kWh' },
      { letter: 'C', text: '55 kWh' },
      { letter: 'D', text: '82,5 kWh' },
      { letter: 'E', text: '165 kWh' }
    ],
    correctLetter: 'D',
    explanation:
      'Converta a potência para quilowatts: 5 500 W = 5,5 kW. O uso diário é de 0,5 h. Assim, 5,5 × 0,5 × 30 = 82,5 kWh. Usar 30 minutos como "30" em vez de 0,5 hora levaria a 4 950, e esquecer a conversão para kW produz valores mil vezes maiores.',
    triTip:
      'kWh exige potência em kW e tempo em HORAS. Converter as duas unidades antes de multiplicar elimina o erro mais comum de toda a Física do ENEM.'
  },
  {
    ...base,
    id: 'nat-23',
    topic: 'Eletricidade — lei de Ohm',
    difficulty: 'Fácil',
    question:
      'Um resistor de 4 Ω é submetido a uma diferença de potencial de 12 V. Qual é a intensidade da corrente elétrica que o percorre?',
    options: [
      { letter: 'A', text: '3 A' },
      { letter: 'B', text: '8 A' },
      { letter: 'C', text: '16 A' },
      { letter: 'D', text: '36 A' },
      { letter: 'E', text: '48 A' }
    ],
    correctLetter: 'A',
    explanation:
      'Pela primeira lei de Ohm, U = R·i, logo i = U/R = 12/4 = 3 A. A alternativa 48 A corresponde a multiplicar tensão e resistência em vez de dividir.',
    triTip:
      'Da relação U = R·i saem as três formas: i = U/R e R = U/i. Escrever o triângulo no rascunho antes de calcular evita inverter a conta sob pressão.'
  },
  {
    ...base,
    id: 'nat-24',
    topic: 'Eletricidade — associação de resistores',
    difficulty: 'Difícil',
    question:
      'Três resistores idênticos, de 10 Ω cada, são associados em paralelo. Qual é a resistência equivalente dessa associação?',
    options: [
      { letter: 'A', text: 'Aproximadamente 3,3 Ω' },
      { letter: 'B', text: '10 Ω' },
      { letter: 'C', text: '20 Ω' },
      { letter: 'D', text: '30 Ω' },
      { letter: 'E', text: '1 000 Ω' }
    ],
    correctLetter: 'A',
    explanation:
      'Para resistores iguais em paralelo, a equivalente é o valor de um deles dividido pela quantidade: 10/3 ≈ 3,3 Ω. A alternativa 30 Ω corresponde à associação em SÉRIE, que é a armadilha.',
    triTip:
      'Em paralelo a resistência equivalente é sempre MENOR que a do menor resistor; em série, é a soma. Se o seu resultado em paralelo deu maior que as parcelas, a fórmula foi trocada.'
  },
  {
    ...base,
    id: 'nat-25',
    topic: 'Eletricidade — custo da energia consumida',
    difficulty: 'Média',
    question:
      'Uma lâmpada de 60 W permanece acesa 5 horas por dia, durante 30 dias. Com a tarifa de energia a R$ 0,75 por quilowatt-hora, qual é o custo mensal de mantê-la acesa?',
    options: [
      { letter: 'A', text: 'R$ 2,70' },
      { letter: 'B', text: 'R$ 4,50' },
      { letter: 'C', text: 'R$ 6,75' },
      { letter: 'D', text: 'R$ 9,00' },
      { letter: 'E', text: 'R$ 13,50' }
    ],
    correctLetter: 'C',
    explanation:
      'Potência em quilowatts: 60 W = 0,06 kW. Consumo: 0,06 × 5 × 30 = 9 kWh. Custo: 9 × 0,75 = R$ 6,75. A alternativa R$ 9,00 confunde o consumo em kWh com o valor em reais.',
    triTip:
      'A questão tem duas etapas: primeiro o consumo em kWh, depois o custo. Quando o número de kWh aparece entre as alternativas em reais, ele quase sempre é a pegadinha.'
  },

  // ---- Termologia (3)
  {
    ...base,
    id: 'nat-26',
    topic: 'Calorimetria — calor sensível',
    difficulty: 'Média',
    question:
      'Uma panela contém 500 g de água a 25 °C, que serão aquecidos até 75 °C. Sendo o calor específico da água igual a 1 cal/g·°C, qual é a quantidade de calor necessária?',
    options: [
      { letter: 'A', text: '1 250 cal' },
      { letter: 'B', text: '2 500 cal' },
      { letter: 'C', text: '5 000 cal' },
      { letter: 'D', text: '12 500 cal' },
      { letter: 'E', text: '25 000 cal' }
    ],
    correctLetter: 'E',
    explanation:
      'O calor sensível é Q = m·c·ΔT = 500 × 1 × (75 − 25) = 500 × 50 = 25 000 cal. Usar a temperatura final (75) em vez da variação (50) levaria a 37 500 cal.',
    triTip:
      'ΔT é a VARIAÇÃO de temperatura, nunca a temperatura final. E como é uma diferença, seu valor é o mesmo em Celsius e em Kelvin — não precisa converter.'
  },
  {
    ...base,
    id: 'nat-27',
    topic: 'Termologia — mudança de estado físico',
    difficulty: 'Fácil',
    question:
      'Durante a fusão de um bloco de gelo a 0 °C, verifica-se que a temperatura permanece constante mesmo com fornecimento contínuo de calor. Isso ocorre porque a energia fornecida está sendo utilizada para:',
    options: [
      { letter: 'A', text: 'aumentar a velocidade média das moléculas, elevando a temperatura gradualmente.' },
      { letter: 'B', text: 'romper as ligações entre as moléculas, alterando o estado físico sem variar a temperatura.' },
      { letter: 'C', text: 'comprimir o gelo, reduzindo seu volume total.' },
      { letter: 'D', text: 'produzir corrente elétrica no interior do bloco.' },
      { letter: 'E', text: 'transformar a massa de gelo diretamente em energia.' }
    ],
    correctLetter: 'B',
    explanation:
      'Durante a mudança de estado, o calor recebido é latente: rompe as ligações intermoleculares em vez de aumentar a agitação térmica. Só quando todo o gelo derreter a temperatura volta a subir.',
    triTip:
      'Calor sensível muda a temperatura; calor latente muda o estado. Num gráfico de aquecimento, os patamares horizontais são justamente as mudanças de estado.'
  },
  {
    ...base,
    id: 'nat-28',
    topic: 'Termodinâmica — rendimento de máquina térmica',
    difficulty: 'Difícil',
    question:
      'Uma máquina térmica recebe 1 000 J de energia da fonte quente e realiza 300 J de trabalho útil por ciclo. Qual é o rendimento dessa máquina?',
    options: [
      { letter: 'A', text: '3%' },
      { letter: 'B', text: '10%' },
      { letter: 'C', text: '30%' },
      { letter: 'D', text: '70%' },
      { letter: 'E', text: '300%' }
    ],
    correctLetter: 'C',
    explanation:
      'O rendimento é a razão entre o trabalho útil e a energia recebida: η = 300/1000 = 0,30 = 30%. A alternativa 70% corresponde à fração dissipada para a fonte fria, não ao rendimento.',
    triTip:
      'Rendimento de máquina térmica é sempre menor que 100% — é a segunda lei da termodinâmica. Qualquer alternativa igual ou acima de 100% pode ser descartada de imediato.'
  },

  // ---- Ondulatória e óptica (4)
  {
    ...base,
    id: 'nat-29',
    topic: 'Ondulatória — equação fundamental',
    difficulty: 'Média',
    question:
      'Uma onda sonora propaga-se no ar com frequência de 200 Hz e comprimento de onda de 1,7 m. Qual é a velocidade de propagação dessa onda?',
    options: [
      { letter: 'A', text: '34 m/s' },
      { letter: 'B', text: '117,6 m/s' },
      { letter: 'C', text: '200 m/s' },
      { letter: 'D', text: '201,7 m/s' },
      { letter: 'E', text: '340 m/s' }
    ],
    correctLetter: 'E',
    explanation:
      'A equação fundamental da ondulatória é v = λ·f = 1,7 × 200 = 340 m/s, que é justamente a velocidade do som no ar. A alternativa 201,7 m/s resulta de somar em vez de multiplicar.',
    triTip:
      'v = λ·f é multiplicação. Se o resultado bater em 340 m/s no ar, é um bom sinal de que a conta está certa — esse valor aparece o tempo todo em questões de som.'
  },
  {
    ...base,
    id: 'nat-30',
    topic: 'Ondulatória — espectro eletromagnético',
    difficulty: 'Fácil',
    question:
      'Entre as radiações eletromagnéticas a seguir, qual apresenta a maior frequência e, consequentemente, a maior energia por fóton?',
    options: [
      { letter: 'A', text: 'Infravermelho' },
      { letter: 'B', text: 'Raios gama' },
      { letter: 'C', text: 'Luz visível' },
      { letter: 'D', text: 'Micro-ondas' },
      { letter: 'E', text: 'Ondas de rádio' }
    ],
    correctLetter: 'B',
    explanation:
      'No espectro eletromagnético, a frequência cresce das ondas de rádio até os raios gama. Como a energia do fóton é proporcional à frequência (E = h·f), os raios gama são os mais energéticos.',
    triTip:
      'Decore a ordem crescente de frequência: rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X e gama. Comprimento de onda segue a ordem inversa.'
  },
  {
    ...base,
    id: 'nat-31',
    topic: 'Óptica — refração da luz',
    difficulty: 'Média',
    question:
      'Um lápis parcialmente mergulhado em um copo com água parece estar quebrado na interface entre o ar e a água. Esse fenômeno é explicado pela:',
    options: [
      { letter: 'A', text: 'reflexão da luz na superfície da água.' },
      { letter: 'B', text: 'refração da luz, que muda de direção ao passar de um meio para outro.' },
      { letter: 'C', text: 'difração da luz ao contornar o obstáculo.' },
      { letter: 'D', text: 'polarização da luz pelo vidro do copo.' },
      { letter: 'E', text: 'absorção seletiva de determinadas cores pela água.' }
    ],
    correctLetter: 'B',
    explanation:
      'Ao mudar de meio, a luz altera sua velocidade e, quando incide obliquamente, também sua direção. Esse desvio é a refração, e é o que faz o lápis parecer partido.',
    triTip:
      'Refração é mudar de meio e desviar; reflexão é voltar ao mesmo meio. Miragem, arco-íris e o lápis "quebrado" são todos casos de refração.'
  },
  {
    ...base,
    id: 'nat-32',
    topic: 'Óptica — espelhos esféricos',
    difficulty: 'Difícil',
    question:
      'Um objeto é colocado entre o foco e o vértice de um espelho esférico côncavo, situação comum nos espelhos de maquiagem. Quais são as características da imagem formada?',
    options: [
      { letter: 'A', text: 'Real, invertida e menor que o objeto.' },
      { letter: 'B', text: 'Real, invertida e do mesmo tamanho do objeto.' },
      { letter: 'C', text: 'Real, direita e maior que o objeto.' },
      { letter: 'D', text: 'Virtual, direita e maior que o objeto.' },
      { letter: 'E', text: 'Virtual, invertida e menor que o objeto.' }
    ],
    correctLetter: 'D',
    explanation:
      'Com o objeto entre o foco e o vértice de um espelho côncavo, a imagem é virtual, direita e ampliada — exatamente o efeito buscado nos espelhos de aumento.',
    triTip:
      'Guarde a regra geral: toda imagem virtual é direita, e toda imagem real é invertida. Isso elimina de imediato as alternativas "real e direita" ou "virtual e invertida".'
  },

  // ================================================================ QUÍMICA (16)
  // ---- Estequiometria (3)
  {
    ...base,
    id: 'nat-33',
    topic: 'Estequiometria — mol e massa molar',
    difficulty: 'Média',
    question:
      'Sabendo que a massa molar da água (H₂O) é 18 g/mol, quantos mols de água estão contidos em uma amostra de 90 gramas?',
    options: [
      { letter: 'A', text: '0,2 mol' },
      { letter: 'B', text: '1,8 mol' },
      { letter: 'C', text: '5 mols' },
      { letter: 'D', text: '18 mols' },
      { letter: 'E', text: '90 mols' }
    ],
    correctLetter: 'C',
    explanation:
      'O número de mols é a massa dividida pela massa molar: n = 90 / 18 = 5 mols. A alternativa 0,2 mol corresponde a inverter a divisão (18/90).',
    triTip:
      'n = m / M é a ponte entre gramas e mols, e praticamente toda questão de estequiometria começa por ela. Confira a unidade: mols não têm grama no resultado.'
  },
  {
    ...base,
    id: 'nat-34',
    topic: 'Estequiometria — proporção entre reagentes',
    difficulty: 'Média',
    question:
      'Considere a síntese da amônia representada por N₂ + 3 H₂ → 2 NH₃. Quantos mols de gás hidrogênio são necessários para reagir completamente com 2 mols de gás nitrogênio?',
    options: [
      { letter: 'A', text: '1 mol' },
      { letter: 'B', text: '2 mols' },
      { letter: 'C', text: '3 mols' },
      { letter: 'D', text: '6 mols' },
      { letter: 'E', text: '9 mols' }
    ],
    correctLetter: 'D',
    explanation:
      'A equação indica proporção de 1 N₂ para 3 H₂. Para 2 mols de N₂, são necessários 2 × 3 = 6 mols de H₂. Marcar 3 mols é ler o coeficiente sem aplicar a proporção.',
    triTip:
      'Os coeficientes dão a proporção para UMA unidade da equação. Se a quantidade do enunciado é diferente, multiplique todos os coeficientes pelo mesmo fator.'
  },
  {
    ...base,
    id: 'nat-35',
    topic: 'Estequiometria — massa de produto',
    difficulty: 'Difícil',
    question:
      'Na combustão completa do metano (CH₄ + 2 O₂ → CO₂ + 2 H₂O), qual é a massa de gás carbônico produzida a partir de 16 gramas de metano? Dados: massa molar do CH₄ = 16 g/mol e do CO₂ = 44 g/mol.',
    options: [
      { letter: 'A', text: '11 g' },
      { letter: 'B', text: '16 g' },
      { letter: 'C', text: '22 g' },
      { letter: 'D', text: '32 g' },
      { letter: 'E', text: '44 g' }
    ],
    correctLetter: 'E',
    explanation:
      '16 g de CH₄ correspondem a 1 mol. Pela equação, 1 mol de CH₄ produz 1 mol de CO₂, que tem massa de 44 gramas. Responder 16 g seria supor, erradamente, que a massa se conserva por substância.',
    triTip:
      'O caminho é sempre massa → mol → proporção da equação → mol → massa. Comparar gramas diretamente entre substâncias diferentes é o erro que essa questão testa.'
  },

  // ---- Soluções (3)
  {
    ...base,
    id: 'nat-36',
    topic: 'Soluções — concentração comum',
    difficulty: 'Média',
    question:
      'Foram dissolvidos 20 gramas de sal em água suficiente para completar 500 mL de solução. Qual é a concentração comum dessa solução, em gramas por litro?',
    options: [
      { letter: 'A', text: '0,04 g/L' },
      { letter: 'B', text: '10 g/L' },
      { letter: 'C', text: '40 g/L' },
      { letter: 'D', text: '100 g/L' },
      { letter: 'E', text: '400 g/L' }
    ],
    correctLetter: 'C',
    explanation:
      'A concentração comum é C = m / V, com o volume em litros: 500 mL = 0,5 L, logo C = 20 / 0,5 = 40 g/L. Usar o volume em mililitros levaria a 0,04 g/L.',
    triTip:
      'Converta o volume para litros ANTES de dividir. Como 500 mL é meio litro, a concentração dobra em relação à massa — se o seu resultado ficou menor, o volume não foi convertido.'
  },
  {
    ...base,
    id: 'nat-37',
    topic: 'Soluções — diluição',
    difficulty: 'Difícil',
    question:
      'Um técnico toma 200 mL de uma solução de concentração 0,5 mol/L e acrescenta água até completar 1 litro. Qual passa a ser a concentração da solução diluída?',
    options: [
      { letter: 'A', text: '0,1 mol/L' },
      { letter: 'B', text: '0,2 mol/L' },
      { letter: 'C', text: '0,25 mol/L' },
      { letter: 'D', text: '0,5 mol/L' },
      { letter: 'E', text: '2,5 mol/L' }
    ],
    correctLetter: 'A',
    explanation:
      'Na diluição, a quantidade de soluto não muda: C₁·V₁ = C₂·V₂. Assim, 0,5 × 0,2 = C₂ × 1, logo C₂ = 0,1 mol/L. A alternativa 2,5 mol/L resulta de inverter a proporção, o que concentraria a solução em vez de diluí-la.',
    triTip:
      'Diluir sempre REDUZ a concentração. Se o seu resultado ficou maior que o inicial, a razão dos volumes foi invertida — dá para perceber o erro antes mesmo de conferir a conta.'
  },
  {
    ...base,
    id: 'nat-38',
    topic: 'Soluções — concentração em mol por litro',
    difficulty: 'Média',
    question:
      'Uma solução foi preparada dissolvendo-se 0,5 mol de cloreto de sódio em água suficiente para 2 litros. Qual é a concentração dessa solução em mol/L?',
    options: [
      { letter: 'A', text: '0,25 mol/L' },
      { letter: 'B', text: '0,5 mol/L' },
      { letter: 'C', text: '1 mol/L' },
      { letter: 'D', text: '2 mol/L' },
      { letter: 'E', text: '4 mol/L' }
    ],
    correctLetter: 'A',
    explanation:
      'A concentração em quantidade de matéria é M = n / V = 0,5 / 2 = 0,25 mol/L. A alternativa 4 mol/L corresponde a inverter a divisão.',
    triTip:
      'Se o volume é maior que 1 litro, a concentração é menor que o número de mols. Essa checagem mental identifica a divisão invertida em um segundo.'
  },

  // ---- Química orgânica (4)
  {
    ...base,
    id: 'nat-39',
    topic: 'Química orgânica — funções',
    difficulty: 'Fácil',
    question:
      'O ácido acético, principal componente do vinagre, possui em sua estrutura o grupo funcional carboxila (−COOH). A qual função orgânica ele pertence?',
    options: [
      { letter: 'A', text: 'Álcool' },
      { letter: 'B', text: 'Aldeído' },
      { letter: 'C', text: 'Cetona' },
      { letter: 'D', text: 'Éter' },
      { letter: 'E', text: 'Ácido carboxílico' }
    ],
    correctLetter: 'E',
    explanation:
      'A carboxila (−COOH) é o grupo que define a função ácido carboxílico. O álcool tem hidroxila (−OH), o aldeído tem −CHO, a cetona tem carbonila entre carbonos e o éter tem oxigênio entre cadeias.',
    triTip:
      'Identifique o grupo funcional antes de tudo: −OH álcool, −COOH ácido, −CHO aldeído, C=O no meio da cadeia cetona. É a base de toda a Química Orgânica do ENEM.'
  },
  {
    ...base,
    id: 'nat-40',
    topic: 'Química orgânica — isomeria',
    difficulty: 'Difícil',
    question:
      'O butano e o metilpropano possuem a mesma fórmula molecular, C₄H₁₀, mas o primeiro tem cadeia normal e o segundo, cadeia ramificada. Essa relação entre os dois compostos é chamada de:',
    options: [
      { letter: 'A', text: 'Isomeria de cadeia' },
      { letter: 'B', text: 'Isomeria de função' },
      { letter: 'C', text: 'Isomeria de posição' },
      { letter: 'D', text: 'Isomeria geométrica (cis-trans)' },
      { letter: 'E', text: 'Tautomeria' }
    ],
    correctLetter: 'A',
    explanation:
      'Mesma fórmula molecular com tipos diferentes de cadeia — normal e ramificada — caracteriza a isomeria de cadeia. Na isomeria de posição muda o lugar do grupo na mesma cadeia; na de função, muda a própria função orgânica.',
    triTip:
      'Nos isômeros planos, pergunte o que mudou: o tipo de cadeia, a posição do grupo ou a função. Essas três perguntas separam os três casos que o ENEM cobra.'
  },
  {
    ...base,
    id: 'nat-41',
    topic: 'Química orgânica — polímeros',
    difficulty: 'Média',
    question:
      'O polietileno, presente em sacolas e embalagens plásticas, é obtido a partir do eteno (C₂H₄), cujas moléculas se unem sucessivamente sem que haja eliminação de qualquer outra substância. Esse processo é classificado como:',
    options: [
      { letter: 'A', text: 'Polimerização por condensação' },
      { letter: 'B', text: 'Saponificação' },
      { letter: 'C', text: 'Polimerização por adição' },
      { letter: 'D', text: 'Craqueamento catalítico' },
      { letter: 'E', text: 'Esterificação' }
    ],
    correctLetter: 'C',
    explanation:
      'Na polimerização por adição, monômeros insaturados se ligam pela quebra da dupla ligação, sem liberar subprodutos. Na condensação, cada ligação formada elimina uma molécula pequena, geralmente água.',
    triTip:
      'A pergunta que decide é se houve eliminação de subproduto: sem subproduto, adição; com água liberada, condensação. Monômero com dupla ligação é forte indício de adição.'
  },
  {
    ...base,
    id: 'nat-42',
    topic: 'Química orgânica — biocombustíveis',
    difficulty: 'Média',
    question:
      'O etanol produzido a partir da cana-de-açúcar é considerado um combustível menos agressivo ao clima que a gasolina. O principal argumento para essa avaliação é que:',
    options: [
      { letter: 'A', text: 'a queima do etanol não libera gás carbônico algum.' },
      {
        letter: 'B',
        text: 'o gás carbônico liberado na queima é aproximadamente o mesmo que a cana absorveu da atmosfera durante seu cultivo.'
      },
      { letter: 'C', text: 'o etanol é um combustível fóssil de formação mais recente que o petróleo.' },
      { letter: 'D', text: 'a produção de etanol dispensa completamente o uso de água e de solo agrícola.' },
      { letter: 'E', text: 'o etanol libera apenas oxigênio durante a combustão.' }
    ],
    correctLetter: 'B',
    explanation:
      'A combustão do etanol libera CO₂, mas a cana havia retirado CO₂ da atmosfera por fotossíntese, o que aproxima o balanço de zero. Já o carbono dos fósseis estava aprisionado no subsolo há milhões de anos e é adicionado ao ciclo atual.',
    triTip:
      'O argumento não é "não emite", e sim "o carbono já estava no ciclo". Alternativas que afirmam emissão zero costumam ser erradas justamente por exagerar.'
  },

  // ---- Ácidos, bases e eletroquímica (4)
  {
    ...base,
    id: 'nat-43',
    topic: 'Ácidos e bases — escala de pH',
    difficulty: 'Fácil',
    question:
      'Uma solução aquosa apresenta concentração de íons H⁺ igual a 10⁻⁵ mol/L. Qual é o pH dessa solução e como ela é classificada?',
    options: [
      { letter: 'A', text: 'pH 2, solução ácida' },
      { letter: 'B', text: 'pH 5, solução ácida' },
      { letter: 'C', text: 'pH 7, solução neutra' },
      { letter: 'D', text: 'pH 9, solução básica' },
      { letter: 'E', text: 'pH 10, solução básica' }
    ],
    correctLetter: 'B',
    explanation:
      'O pH é o expoente da concentração de H⁺ com sinal trocado: pH = −log(10⁻⁵) = 5. Como 5 é menor que 7, a solução é ácida.',
    triTip:
      'Quando a concentração de H⁺ é uma potência exata de 10, o pH é simplesmente o expoente sem o sinal negativo. Não precisa de calculadora.'
  },
  {
    ...base,
    id: 'nat-44',
    topic: 'Ácidos e bases — neutralização',
    difficulty: 'Média',
    question:
      'A reação entre ácido clorídrico e hidróxido de sódio, representada por HCl + NaOH → X + Y, é uma reação de neutralização. Quais são os produtos formados?',
    options: [
      { letter: 'A', text: 'Dois gases distintos' },
      { letter: 'B', text: 'Um ácido mais forte e um metal' },
      { letter: 'C', text: 'Um sal (NaCl) e água (H₂O)' },
      { letter: 'D', text: 'Apenas gás hidrogênio' },
      { letter: 'E', text: 'Um óxido e uma base' }
    ],
    correctLetter: 'C',
    explanation:
      'Na neutralização, o H⁺ do ácido combina-se com o OH⁻ da base formando água, enquanto os íons restantes (Na⁺ e Cl⁻) formam o sal cloreto de sódio.',
    triTip:
      'Ácido mais base sempre produz sal mais água. Sabendo disso, basta juntar o cátion da base com o ânion do ácido para escrever o sal correto.'
  },
  {
    ...base,
    id: 'nat-45',
    topic: 'Eletroquímica — pilhas',
    difficulty: 'Difícil',
    question:
      'Em uma pilha eletroquímica em funcionamento, o eletrodo denominado ânodo é aquele que:',
    options: [
      { letter: 'A', text: 'sofre oxidação, perde massa e constitui o polo negativo da pilha.' },
      { letter: 'B', text: 'sofre redução, ganha massa e constitui o polo negativo da pilha.' },
      { letter: 'C', text: 'sofre oxidação, ganha massa e constitui o polo positivo da pilha.' },
      { letter: 'D', text: 'sofre redução, perde massa e constitui o polo positivo da pilha.' },
      { letter: 'E', text: 'não participa das reações, servindo apenas como suporte condutor.' }
    ],
    correctLetter: 'A',
    explanation:
      'No ânodo ocorre oxidação: o metal perde elétrons, se dissolve e por isso perde massa. Em uma pilha, esse eletrodo é o polo negativo, de onde os elétrons partem pelo circuito externo.',
    triTip:
      'Guarde as duas iniciais: Ânodo–Oxidação e Cátodo–Redução, ambas com as mesmas vogais. Na pilha, o ânodo é negativo; na eletrólise, a polaridade se inverte.'
  },
  {
    ...base,
    id: 'nat-46',
    topic: 'Eletroquímica — corrosão e proteção catódica',
    difficulty: 'Média',
    question:
      'Para proteger estruturas de ferro da corrosão, é comum conectá-las a blocos de zinco, metal mais reativo que o ferro. Essa técnica funciona porque:',
    options: [
      { letter: 'A', text: 'o zinco forma uma barreira física impermeável que isola o ferro do ambiente.' },
      { letter: 'B', text: 'o zinco se oxida preferencialmente, sendo consumido no lugar do ferro.' },
      { letter: 'C', text: 'o zinco transfere sua dureza mecânica para a estrutura de ferro.' },
      { letter: 'D', text: 'o zinco reduz a temperatura da estrutura, impedindo qualquer reação química.' },
      { letter: 'E', text: 'o zinco neutraliza a acidez da chuva antes que ela atinja o ferro.' }
    ],
    correctLetter: 'B',
    explanation:
      'Por ser mais reativo, o zinco cede elétrons com mais facilidade e se oxida no lugar do ferro — por isso é chamado de metal de sacrifício. A proteção é eletroquímica, não uma barreira física.',
    triTip:
      'Na proteção catódica, o metal MAIS reativo é o sacrificado. Se a alternativa fala em barreira ou revestimento, está descrevendo galvanização por recobrimento, que é outro mecanismo.'
  },

  // ---- Termoquímica e química ambiental (2)
  {
    ...base,
    id: 'nat-47',
    topic: 'Termoquímica — entalpia de combustão',
    difficulty: 'Difícil',
    question:
      'A combustão completa do metano libera 890 kJ por mol queimado, o que corresponde a ΔH = −890 kJ/mol. Qual é a quantidade de energia liberada na queima de 2 mols de metano?',
    options: [
      { letter: 'A', text: '445 kJ' },
      { letter: 'B', text: '890 kJ' },
      { letter: 'C', text: '1 335 kJ' },
      { letter: 'D', text: '1 780 kJ' },
      { letter: 'E', text: '3 560 kJ' }
    ],
    correctLetter: 'D',
    explanation:
      'A entalpia de combustão é proporcional à quantidade queimada: 2 × 890 = 1 780 kJ liberados. O sinal negativo indica que a reação é exotérmica, mas a energia liberada é informada em módulo.',
    triTip:
      'ΔH negativo significa exotérmico, ou seja, libera calor; ΔH positivo é endotérmico, absorve. O valor tabelado é sempre por mol, então multiplique pela quantidade do enunciado.'
  },
  {
    ...base,
    id: 'nat-48',
    topic: 'Química ambiental — chuva ácida',
    difficulty: 'Média',
    question:
      'A queima de combustíveis fósseis em usinas e veículos libera óxidos que, ao reagirem com a umidade atmosférica, aumentam a acidez da chuva. Quais óxidos são os principais responsáveis por esse fenômeno?',
    options: [
      { letter: 'A', text: 'Óxidos de cálcio e de magnésio' },
      { letter: 'B', text: 'Óxidos de sódio e de potássio' },
      { letter: 'C', text: 'Óxidos de enxofre (SO₂ e SO₃) e de nitrogênio (NOₓ)' },
      { letter: 'D', text: 'Óxidos de alumínio e de silício' },
      { letter: 'E', text: 'Óxido de hidrogênio, a própria água' }
    ],
    correctLetter: 'C',
    explanation:
      'Os óxidos de enxofre e de nitrogênio reagem com a água da atmosfera formando ácido sulfúrico e ácido nítrico. Os óxidos de metais alcalinos e alcalinoterrosos são básicos e teriam efeito oposto.',
    triTip:
      'Óxidos de não metais são ácidos; óxidos de metais são básicos. Essa regra sozinha elimina três alternativas nessa questão e em muitas outras de química ambiental.'
  },

  // ================================================================ LOTE 2 (nat-49 a nat-72)
  // ---- Biologia (8)
  {
    ...base,
    id: 'nat-49',
    topic: 'Ecologia — sucessão ecológica',
    difficulty: 'Média',
    question:
      'Após um incêndio florestal, uma área anteriormente coberta por floresta é inicialmente colonizada por líquens e gramíneas, sendo gradualmente substituída por arbustos e, décadas depois, por árvores de grande porte. Esse processo de substituição progressiva de comunidades é denominado:',
    options: [
      { letter: 'A', text: 'Sucessão ecológica secundária' },
      { letter: 'B', text: 'Sucessão primária' },
      { letter: 'C', text: 'Deriva genética' },
      { letter: 'D', text: 'Especiação simpátrica' },
      { letter: 'E', text: 'Bioacumulação' }
    ],
    correctLetter: 'A',
    explanation:
      'A sucessão secundária ocorre em área que já teve vida e mantém solo formado, como após um incêndio ou desmatamento. A sucessão primária, por sua vez, parte de substrato estéril, como rocha nua ou lava vulcânica.',
    triTip:
      'Diferencie sucessão primária (substrato estéril, sem solo) de secundária (solo preservado, após perturbação como fogo ou desmatamento).'
  },
  {
    ...base,
    id: 'nat-50',
    topic: 'Ecologia — pirâmide de energia',
    difficulty: 'Fácil',
    question:
      'Em uma pirâmide ecológica de energia, o valor no topo (últimos consumidores) é sempre:',
    options: [
      { letter: 'A', text: 'maior que a base' },
      { letter: 'B', text: 'igual à base' },
      { letter: 'C', text: 'menor que a base' },
      { letter: 'D', text: 'inexistente' },
      { letter: 'E', text: 'variável de forma aleatória' }
    ],
    correctLetter: 'C',
    explanation:
      'A energia se dissipa a cada nível trófico, principalmente como calor da respiração celular, de modo que a pirâmide de energia é sempre decrescente da base ao topo, sem exceção.',
    triTip:
      'A pirâmide de energia nunca se inverte — diferente da pirâmide de biomassa ou de números, que pode se inverter em certos ecossistemas aquáticos.'
  },
  {
    ...base,
    id: 'nat-51',
    topic: 'Genética — herança ligada ao sexo',
    difficulty: 'Difícil',
    question:
      'O daltonismo é uma condição recessiva ligada ao cromossomo X. Uma mulher não daltônica, mas portadora do alelo (heterozigota), tem filhos com um homem não daltônico. Qual é a probabilidade de um filho HOMEM desse casal nascer daltônico?',
    options: [
      { letter: 'A', text: '0%' },
      { letter: 'B', text: '25%' },
      { letter: 'C', text: '50%' },
      { letter: 'D', text: '75%' },
      { letter: 'E', text: '100%' }
    ],
    correctLetter: 'C',
    explanation:
      'Os filhos homens recebem o cromossomo X da mãe. Como ela é heterozigota (metade dos óvulos carrega o alelo daltônico), 50% dos filhos homens serão daltônicos (genótipo XdY).',
    triTip:
      'Em herança ligada ao X, homens são hemizigotos — basta um único alelo recessivo herdado da mãe para a condição se manifestar.'
  },
  {
    ...base,
    id: 'nat-52',
    topic: 'Citologia — transporte ativo',
    difficulty: 'Média',
    question:
      'O transporte de íons contra o gradiente de concentração através da membrana plasmática, com consumo de ATP, é denominado:',
    options: [
      { letter: 'A', text: 'Difusão simples' },
      { letter: 'B', text: 'Osmose' },
      { letter: 'C', text: 'Difusão facilitada' },
      { letter: 'D', text: 'Transporte ativo' },
      { letter: 'E', text: 'Pinocitose' }
    ],
    correctLetter: 'D',
    explanation:
      'O transporte ativo move substâncias contra o gradiente de concentração, exigindo energia na forma de ATP — como na bomba de sódio e potássio. Difusão simples, facilitada e osmose são processos passivos, a favor do gradiente.',
    triTip:
      'Se a questão mencionar "contra o gradiente" combinado a "gasto de energia", a resposta é sempre transporte ativo.'
  },
  {
    ...base,
    id: 'nat-53',
    topic: 'Fisiologia — sinapse nervosa',
    difficulty: 'Difícil',
    question:
      'Na transmissão do impulso nervoso entre dois neurônios, a comunicação na sinapse química ocorre principalmente por meio de:',
    options: [
      { letter: 'A', text: 'contato elétrico direto entre as membranas dos dois neurônios.' },
      {
        letter: 'B',
        text: 'circulação sanguínea entre os dois neurônios.'
      },
      { letter: 'C', text: 'transporte direto do próprio impulso elétrico, sem qualquer intermediário.' },
      { letter: 'D', text: 'fusão total das membranas dos dois neurônios envolvidos.' },
      {
        letter: 'E',
        text: 'liberação de neurotransmissores no espaço sináptico, que se ligam a receptores do neurônio seguinte.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'Na sinapse química, o neurônio pré-sináptico libera neurotransmissores (como a acetilcolina) na fenda sináptica; eles se ligam a receptores específicos do neurônio pós-sináptico, propagando o impulso.',
    triTip:
      'A sinapse elétrica (mais rara) tem contato direto entre membranas; a química, mais comum e mais lenta, depende de neurotransmissores atravessando a fenda.'
  },
  {
    ...base,
    id: 'nat-54',
    topic: 'Fisiologia — digestão enzimática',
    difficulty: 'Fácil',
    question:
      'A enzima pepsina, presente no suco gástrico, atua especificamente na digestão de:',
    options: [
      { letter: 'A', text: 'Carboidratos' },
      { letter: 'B', text: 'Sais minerais' },
      { letter: 'C', text: 'Lipídios' },
      { letter: 'D', text: 'Ácidos nucleicos' },
      { letter: 'E', text: 'Proteínas' }
    ],
    correctLetter: 'E',
    explanation:
      'A pepsina, ativada em meio ácido no estômago, hidrolisa proteínas em peptídeos menores, dando início à digestão proteica.',
    triTip:
      'Associe cada enzima ao seu substrato: amilase digere carboidratos, pepsina e tripsina digerem proteínas, lipase digere lipídios.'
  },
  {
    ...base,
    id: 'nat-55',
    topic: 'Evolução — especiação alopátrica',
    difficulty: 'Difícil',
    question:
      'Duas populações da mesma espécie de sapo são separadas pela formação de um novo rio e, ao longo de milhares de gerações, deixam de conseguir se reproduzir entre si mesmo quando reaproximadas. Esse processo de formação de novas espécies por barreira geográfica é chamado de:',
    options: [
      { letter: 'A', text: 'Especiação simpátrica' },
      { letter: 'B', text: 'Deriva genética' },
      { letter: 'C', text: 'Especiação alopátrica' },
      { letter: 'D', text: 'Mutação pontual' },
      { letter: 'E', text: 'Seleção artificial' }
    ],
    correctLetter: 'C',
    explanation:
      'A especiação alopátrica ocorre quando uma barreira geográfica separa populações, que acumulam diferenças genéticas independentes até se tornarem reprodutivamente isoladas — o rio, nesse caso, é a barreira.',
    triTip:
      'Alopátrica tem barreira geográfica; simpátrica ocorre sem separação espacial, geralmente por isolamento reprodutivo comportamental ou temporal.'
  },
  {
    ...base,
    id: 'nat-56',
    topic: 'Microbiologia — vírus e bactérias',
    difficulty: 'Média',
    question:
      'Diferentemente das bactérias, os vírus:',
    options: [
      { letter: 'A', text: 'não possuem estrutura celular e dependem de uma célula hospedeira para se replicar.' },
      { letter: 'B', text: 'realizam respiração celular própria.' },
      { letter: 'C', text: 'possuem parede celular de peptideoglicano.' },
      { letter: 'D', text: 'são sempre sensíveis a tratamento com antibióticos.' },
      { letter: 'E', text: 'possuem ribossomos próprios para síntese de proteínas.' }
    ],
    correctLetter: 'A',
    explanation:
      'Vírus são acelulares, formados basicamente por material genético e cápsula proteica, sem maquinaria própria para se reproduzir — dependem inteiramente da célula hospedeira. Bactérias, ao contrário, são células completas.',
    triTip:
      'Antibióticos atuam em estruturas bacterianas (parede celular, ribossomos); por isso são ineficazes contra vírus, que não as possuem.'
  },

  // ---- Física (8)
  {
    ...base,
    id: 'nat-57',
    topic: 'Mecânica — peso',
    difficulty: 'Fácil',
    question:
      'Um objeto de massa 8 kg está sujeito à aceleração da gravidade de 10 m/s². Qual é o peso desse objeto?',
    options: [
      { letter: 'A', text: '0,8 N' },
      { letter: 'B', text: '8 N' },
      { letter: 'C', text: '18 N' },
      { letter: 'D', text: '80 N' },
      { letter: 'E', text: '800 N' }
    ],
    correctLetter: 'D',
    explanation:
      'O peso é P = m × g = 8 × 10 = 80 N. Peso é força, medida em newtons, e não deve ser confundido com massa (8 kg), medida em quilogramas.',
    triTip:
      'Massa é escalar em kg; peso é força em N. São grandezas diferentes, embora popularmente confundidas no dia a dia.'
  },
  {
    ...base,
    id: 'nat-58',
    topic: 'Mecânica — potência',
    difficulty: 'Média',
    question:
      'Um motor realiza um trabalho de 3 000 J em 5 segundos. Qual é a potência desse motor?',
    options: [
      { letter: 'A', text: '15 W' },
      { letter: 'B', text: '150 W' },
      { letter: 'C', text: '600 W' },
      { letter: 'D', text: '3 000 W' },
      { letter: 'E', text: '15 000 W' }
    ],
    correctLetter: 'C',
    explanation:
      'A potência é a razão entre o trabalho e o tempo: P = W / t = 3000 / 5 = 600 W.',
    triTip:
      'Potência mede a rapidez de realizar um trabalho: o mesmo trabalho feito em menos tempo corresponde a uma potência maior.'
  },
  {
    ...base,
    id: 'nat-59',
    topic: 'Eletricidade — associação em série',
    difficulty: 'Difícil',
    question:
      'Três resistores de 4 Ω, 6 Ω e 10 Ω são associados em série a uma bateria de 20 V. Qual é a intensidade da corrente elétrica no circuito?',
    options: [
      { letter: 'A', text: '0,5 A' },
      { letter: 'B', text: '1 A' },
      { letter: 'C', text: '2 A' },
      { letter: 'D', text: '5 A' },
      { letter: 'E', text: '20 A' }
    ],
    correctLetter: 'B',
    explanation:
      'Em série, a resistência equivalente é a soma das resistências: 4 + 6 + 10 = 20 Ω. A corrente é i = U / Req = 20 / 20 = 1 A.',
    triTip:
      'Em série, a corrente é igual em todos os resistores; a resistência equivalente sempre soma, nunca reduz.'
  },
  {
    ...base,
    id: 'nat-60',
    topic: 'Eletricidade — Lei de Coulomb',
    difficulty: 'Difícil',
    question:
      'Duas cargas elétricas puntiformes de mesmo sinal, separadas por certa distância, exercem entre si uma força de repulsão de intensidade F. Se a distância entre elas for dobrada, mantendo as cargas constantes, a nova força de repulsão será:',
    options: [
      { letter: 'A', text: 'o dobro de F' },
      { letter: 'B', text: 'igual a F' },
      { letter: 'C', text: 'a metade de F' },
      { letter: 'D', text: 'um quarto de F' },
      { letter: 'E', text: 'um oitavo de F' }
    ],
    correctLetter: 'D',
    explanation:
      'Pela Lei de Coulomb, F = k × q₁ × q₂ / d². Dobrando a distância d, o denominador quadruplica, reduzindo a força para F/4.',
    triTip:
      'A Lei de Coulomb tem a mesma estrutura da lei da gravitação universal — ambas dependem do inverso do quadrado da distância.'
  },
  {
    ...base,
    id: 'nat-61',
    topic: 'Termologia — dilatação linear',
    difficulty: 'Média',
    question:
      'Uma barra metálica de 2 metros de comprimento é aquecida e sofre dilatação linear de 0,004 metro. Qual foi a deformação percentual do comprimento da barra?',
    options: [
      { letter: 'A', text: '0,02%' },
      { letter: 'B', text: '4%' },
      { letter: 'C', text: '2%' },
      { letter: 'D', text: '0,2%' },
      { letter: 'E', text: '20%' }
    ],
    correctLetter: 'D',
    explanation:
      'A deformação percentual é a razão entre a variação e o comprimento inicial: 0,004 / 2 = 0,002 = 0,2%.',
    triTip:
      'A dilatação percentual é sempre a razão entre a variação de comprimento e o comprimento ORIGINAL, nunca o final.'
  },
  {
    ...base,
    id: 'nat-62',
    topic: 'Ondulatória — eco',
    difficulty: 'Fácil',
    question:
      'Uma pessoa grita próxima a um paredão e ouve o eco 2 segundos depois. Considerando a velocidade do som no ar igual a 340 m/s, qual é a distância entre a pessoa e o paredão?',
    options: [
      { letter: 'A', text: '170 m' },
      { letter: 'B', text: '340 m' },
      { letter: 'C', text: '680 m' },
      { letter: 'D', text: '170 km' },
      { letter: 'E', text: 'Não é possível calcular com esses dados' }
    ],
    correctLetter: 'B',
    explanation:
      'O som percorre a ida e a volta em 2 segundos: distância total = 340 × 2 = 680 m. A distância até o paredão é a metade desse percurso: 340 m.',
    triTip:
      'Em eco, o tempo medido corresponde ao percurso de IDA e VOLTA — sempre divida a distância total por 2 para achar a distância até o obstáculo.'
  },
  {
    ...base,
    id: 'nat-63',
    topic: 'Óptica — lentes convergentes',
    difficulty: 'Difícil',
    question:
      'Uma lente convergente forma, de um objeto real posicionado além do ponto antiprincipal (a mais que o dobro da distância focal), uma imagem:',
    options: [
      { letter: 'A', text: 'real, direita e maior que o objeto.' },
      { letter: 'B', text: 'real, invertida e do mesmo tamanho do objeto.' },
      { letter: 'C', text: 'virtual, direita e maior que o objeto.' },
      { letter: 'D', text: 'virtual, invertida e menor que o objeto.' },
      { letter: 'E', text: 'real, invertida e menor que o objeto.' }
    ],
    correctLetter: 'E',
    explanation:
      'Com o objeto além do ponto antiprincipal (2F), a lente convergente forma imagem real, invertida e reduzida — é o princípio usado em câmeras fotográficas e no olho humano.',
    triTip:
      'Quanto mais longe do ponto 2F o objeto estiver, posicionado além dele, menor e mais próxima do foco fica a imagem real invertida.'
  },
  {
    ...base,
    id: 'nat-64',
    topic: 'Física moderna — meia-vida radioativa',
    difficulty: 'Difícil',
    question:
      'Um isótopo radioativo tem meia-vida de 10 dias. Partindo de uma amostra de 80 gramas, qual será a massa restante após 30 dias?',
    options: [
      { letter: 'A', text: '5 g' },
      { letter: 'B', text: '60 g' },
      { letter: 'C', text: '20 g' },
      { letter: 'D', text: '40 g' },
      { letter: 'E', text: '10 g' }
    ],
    correctLetter: 'E',
    explanation:
      'Em 30 dias ocorrem 3 meias-vidas (30/10). A massa se reduz à metade a cada uma: 80 → 40 → 20 → 10 g.',
    triTip:
      'Conte quantas meias-vidas cabem no tempo total e divida a massa inicial por 2 elevado a esse número.'
  },

  // ---- Química (8)
  {
    ...base,
    id: 'nat-65',
    topic: 'Estrutura atômica — camada de valência',
    difficulty: 'Fácil',
    question:
      'O átomo de sódio (Z = 11) possui configuração eletrônica 1s² 2s² 2p⁶ 3s¹. Quantos elétrons estão presentes na camada de valência desse átomo?',
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '2' },
      { letter: 'C', text: '3' },
      { letter: 'D', text: '8' },
      { letter: 'E', text: '11' }
    ],
    correctLetter: 'A',
    explanation:
      'A camada de valência é a última camada ocupada (n = 3), que contém apenas o elétron do subnível 3s¹ — por isso o sódio tende a perder esse elétron, formando Na⁺.',
    triTip:
      'A camada de valência é sempre a de maior número quântico principal (n) ocupada; conte só os elétrons dela, não o total do átomo.'
  },
  {
    ...base,
    id: 'nat-66',
    topic: 'Tabela periódica — propriedades periódicas',
    difficulty: 'Média',
    question:
      'Comparando os elementos flúor (F) e iodo (I), ambos do grupo 17 (halogênios), o flúor apresenta:',
    options: [
      { letter: 'A', text: 'maior raio atômico e menor eletronegatividade que o iodo.' },
      { letter: 'B', text: 'menor raio atômico e maior eletronegatividade que o iodo.' },
      { letter: 'C', text: 'mesmo raio atômico e mesma eletronegatividade do iodo.' },
      { letter: 'D', text: 'maior raio atômico e maior eletronegatividade que o iodo.' },
      { letter: 'E', text: 'menor raio atômico e menor eletronegatividade que o iodo.' }
    ],
    correctLetter: 'B',
    explanation:
      'Descendo em um grupo, o raio atômico aumenta (mais camadas) e a eletronegatividade diminui. Como o flúor está acima do iodo no mesmo grupo, tem menor raio e é o elemento mais eletronegativo da tabela periódica.',
    triTip:
      'Eletronegatividade cresce da esquerda para a direita e de baixo para cima na tabela — o flúor ocupa o canto mais eletronegativo possível.'
  },
  {
    ...base,
    id: 'nat-67',
    topic: 'Ligações químicas — ligação iônica',
    difficulty: 'Fácil',
    question:
      'A molécula de cloreto de sódio (NaCl) é formada pela transferência completa de um elétron do átomo de sódio para o átomo de cloro. Esse tipo de ligação química é classificado como:',
    options: [
      { letter: 'A', text: 'Ligação iônica' },
      { letter: 'B', text: 'Ligação covalente polar' },
      { letter: 'C', text: 'Ligação covalente apolar' },
      { letter: 'D', text: 'Ligação metálica' },
      { letter: 'E', text: 'Ligação de hidrogênio' }
    ],
    correctLetter: 'A',
    explanation:
      'Na ligação iônica, ocorre transferência efetiva de elétrons entre átomos de eletronegatividades muito diferentes (metal e não metal), formando íons de cargas opostas que se atraem eletrostaticamente.',
    triTip:
      'Transferência de elétron caracteriza ligação iônica; compartilhamento caracteriza ligação covalente. Metal com não metal costuma formar ligação iônica.'
  },
  {
    ...base,
    id: 'nat-68',
    topic: 'Estequiometria — reagente limitante',
    difficulty: 'Difícil',
    question:
      'Na reação N₂ + 3 H₂ → 2 NH₃, misturam-se 2 mols de N₂ com 3 mols de H₂. Qual é o reagente limitante e quantos mols de NH₃ são formados?',
    options: [
      { letter: 'A', text: 'H₂ é limitante; formam-se 2 mols de NH₃.' },
      { letter: 'B', text: 'N₂ é limitante; formam-se 2 mols de NH₃.' },
      { letter: 'C', text: 'H₂ é limitante; formam-se 6 mols de NH₃.' },
      { letter: 'D', text: 'N₂ é limitante; formam-se 4 mols de NH₃.' },
      { letter: 'E', text: 'Nenhum reagente é limitante; formam-se 4 mols de NH₃.' }
    ],
    correctLetter: 'A',
    explanation:
      'A proporção da equação é 1 N₂ : 3 H₂. Os 3 mols de H₂ disponíveis reagem completamente com apenas 1 mol de N₂ (sobrando 1 mol de N₂), produzindo 2 mols de NH₃ pela proporção 3 H₂ : 2 NH₃. O H₂ é o reagente limitante.',
    triTip:
      'Para achar o limitante, divida a quantidade de cada reagente pelo seu coeficiente na equação balanceada — o menor resultado indica o limitante.'
  },
  {
    ...base,
    id: 'nat-69',
    topic: 'Cinética química — efeito da temperatura',
    difficulty: 'Média',
    question:
      'Alimentos são conservados por mais tempo quando armazenados sob refrigeração. Do ponto de vista da cinética química, isso ocorre porque a redução da temperatura:',
    options: [
      { letter: 'A', text: 'aumenta a energia cinética das moléculas, acelerando as reações de decomposição.' },
      {
        letter: 'B',
        text: 'diminui a energia cinética média das moléculas, reduzindo a frequência e a energia das colisões efetivas.'
      },
      { letter: 'C', text: 'elimina completamente a possibilidade de qualquer reação química.' },
      { letter: 'D', text: 'aumenta a concentração dos reagentes envolvidos na decomposição.' },
      { letter: 'E', text: 'atua como um catalisador negativo, mudando o mecanismo da reação.' }
    ],
    correctLetter: 'B',
    explanation:
      'A temperatura mais baixa reduz a energia cinética média das partículas, diminuindo a frequência e a energia das colisões — por isso as reações de decomposição dos alimentos ficam mais lentas.',
    triTip:
      'Os quatro fatores clássicos que aumentam a velocidade de reação são temperatura, concentração, superfície de contato e catalisador. Refrigerar age no primeiro, na direção oposta.'
  },
  {
    ...base,
    id: 'nat-70',
    topic: 'Equilíbrio químico — princípio de Le Chatelier',
    difficulty: 'Difícil',
    question:
      'Em um sistema em equilíbrio N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), reação exotérmica no sentido direto, um aumento da temperatura do sistema desloca o equilíbrio:',
    options: [
      { letter: 'A', text: 'no sentido direto, aumentando a produção de NH₃.' },
      { letter: 'B', text: 'no sentido inverso, favorecendo a decomposição de NH₃.' },
      { letter: 'C', text: 'não altera a posição do equilíbrio, apenas a velocidade da reação.' },
      { letter: 'D', text: 'elimina completamente os reagentes do sistema.' },
      { letter: 'E', text: 'converte todo o NH₃ em N₂ instantaneamente.' }
    ],
    correctLetter: 'B',
    explanation:
      'Pelo princípio de Le Chatelier, um aumento de temperatura favorece o sentido endotérmico da reação. Como o sentido direto é exotérmico, o inverso é endotérmico, e o equilíbrio se desloca para a decomposição do NH₃.',
    triTip:
      'Aumentar a temperatura sempre favorece o sentido ENDOTÉRMICO da reação, seja ele direto ou inverso — memorize essa regra e derive o resto.'
  },
  {
    ...base,
    id: 'nat-71',
    topic: 'Química orgânica — esterificação',
    difficulty: 'Média',
    question:
      'A reação entre um ácido carboxílico e um álcool, com liberação de água, produzindo um composto de cheiro frequentemente agradável usado em essências e aromatizantes, é chamada de:',
    options: [
      { letter: 'A', text: 'Saponificação' },
      { letter: 'B', text: 'Esterificação' },
      { letter: 'C', text: 'Halogenação' },
      { letter: 'D', text: 'Hidrogenação' },
      { letter: 'E', text: 'Fermentação' }
    ],
    correctLetter: 'B',
    explanation:
      'A esterificação combina ácido carboxílico e álcool, liberando água e formando um éster — muitos ésteres têm odores frutados, usados como aromatizantes.',
    triTip:
      'Esterificação libera água (reação de condensação); a reação inversa, hidrólise do éster em meio básico, é a saponificação, que produz sabão.'
  },
  {
    ...base,
    id: 'nat-72',
    topic: 'Gases — Lei de Boyle',
    difficulty: 'Difícil',
    question:
      'Um gás ideal ocupa volume de 4 litros a uma pressão de 2 atm e temperatura de 300 K. Se esse gás for comprimido para 2 litros à mesma temperatura, qual será sua nova pressão?',
    options: [
      { letter: 'A', text: '1 atm' },
      { letter: 'B', text: '2 atm' },
      { letter: 'C', text: '4 atm' },
      { letter: 'D', text: '6 atm' },
      { letter: 'E', text: '8 atm' }
    ],
    correctLetter: 'C',
    explanation:
      'À temperatura constante, aplica-se a Lei de Boyle: P₁V₁ = P₂V₂ → 2 × 4 = P₂ × 2 → P₂ = 4 atm.',
    triTip:
      'Quando a temperatura não muda, use diretamente P₁V₁ = P₂V₂ — não é preciso recorrer à equação geral dos gases com a temperatura.'
  }
];
