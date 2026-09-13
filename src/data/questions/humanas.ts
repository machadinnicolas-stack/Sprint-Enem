import { ExamQuestion } from '../../types';

// Ciências Humanas e suas Tecnologias — 48 questões autorais.
//
// A área reúne quatro disciplinas, e o ENEM distribui História e Geografia com
// peso maior que Filosofia e Sociologia. O banco segue essa proporção: 14 de
// História, 14 de Geografia, 10 de Filosofia e 10 de Sociologia.
//
// O banco anterior tinha três questões de Era Vargas em doze. Aqui cada recorte
// histórico aparece no máximo duas vezes, e sempre por ângulos diferentes.
//
// Diferente de Matemática e Natureza, quase nada aqui é calculável: a conferência
// por script compara o gabarito com um trecho esperado do texto da alternativa
// correta (npm run confere-questoes).

const base = {
  subject: 'humanas' as const,
  areaName: 'Ciências Humanas',
  origin: 'Questão Inédita'
};

export const HUMANAS_QUESTIONS: ExamQuestion[] = [
  // ================================================================ HISTÓRIA (14)
  {
    ...base,
    id: 'hum-01',
    topic: 'Brasil Colônia — resistência à escravidão',
    difficulty: 'Média',
    question:
      'O Quilombo dos Palmares, que resistiu por quase um século na região da atual Alagoas, chegou a abrigar milhares de pessoas e desenvolveu agricultura, artesanato e organização política próprias. Sua existência prolongada evidencia que:',
    options: [
      { letter: 'A', text: 'a escravidão no Brasil foi um regime brando, aceito passivamente pelos escravizados.' },
      {
        letter: 'B',
        text: 'os escravizados resistiram ativamente ao cativeiro, construindo comunidades autônomas com economia e estrutura política próprias.'
      },
      { letter: 'C', text: 'os quilombos eram tolerados oficialmente pela Coroa portuguesa como válvula de escape social.' },
      { letter: 'D', text: 'a resistência à escravidão só começou no século XIX, às vésperas da abolição.' },
      { letter: 'E', text: 'Palmares era um entreposto comercial administrado por colonos portugueses.' }
    ],
    correctLetter: 'B',
    explanation:
      'Palmares foi a maior expressão da resistência negra no período colonial: uma sociedade autônoma, com produção própria e organização política, combatida militarmente até sua destruição em 1694. Sua longevidade contradiz qualquer leitura de passividade.',
    triTip:
      'O ENEM valoriza a agência dos grupos historicamente subalternizados. Alternativas que descrevem escravizados, indígenas ou mulheres como passivos costumam estar erradas.'
  },
  {
    ...base,
    id: 'hum-02',
    topic: 'Brasil Colônia — economia açucareira',
    difficulty: 'Média',
    question:
      'A empresa açucareira instalada no Nordeste brasileiro durante o período colonial organizou-se sobre um conjunto característico de elementos. Esse modelo, conhecido como plantation, combinava:',
    options: [
      { letter: 'A', text: 'pequenas propriedades, policultura e trabalho assalariado voltado ao mercado interno.' },
      { letter: 'B', text: 'propriedade coletiva da terra e produção destinada à subsistência das comunidades.' },
      {
        letter: 'C',
        text: 'grande propriedade, monocultura, trabalho escravizado e produção voltada à exportação.'
      },
      { letter: 'D', text: 'arrendamento de terras a camponeses livres, com pagamento em produtos.' },
      { letter: 'E', text: 'exploração extrativa itinerante, sem fixação de propriedade ou mão de obra permanente.' }
    ],
    correctLetter: 'C',
    explanation:
      'A plantation açucareira reunia latifúndio, monocultura, trabalho escravizado e destino exportador — quatro características que se sustentavam mutuamente e definiram a economia colonial.',
    triTip:
      'Decore o quarteto da plantation: latifúndio, monocultura, escravidão e exportação. Ele reaparece na economia cafeeira do século XIX e em discussões atuais sobre o agronegócio.'
  },
  {
    ...base,
    id: 'hum-03',
    topic: 'Brasil Império — independência',
    difficulty: 'Média',
    question:
      'A independência do Brasil, proclamada em 1822, é frequentemente descrita pelos historiadores como uma ruptura política acompanhada de ampla continuidade social. Essa caracterização se justifica porque:',
    options: [
      { letter: 'A', text: 'o país adotou imediatamente o regime republicano e o sufrágio universal.' },
      { letter: 'B', text: 'a escravidão foi abolida no mesmo ato que declarou a independência.' },
      { letter: 'C', text: 'a estrutura fundiária foi redistribuída entre os ex-colonos e os povos indígenas.' },
      {
        letter: 'D',
        text: 'manteve-se a monarquia, a escravidão e a concentração de terras, alterando-se sobretudo o vínculo político com Portugal.'
      },
      { letter: 'E', text: 'houve ruptura completa com a dinastia portuguesa, que foi deposta e exilada.' }
    ],
    correctLetter: 'D',
    explanation:
      'O Brasil tornou-se independente sob um monarca da própria dinastia portuguesa, preservando escravidão, latifúndio e o poder da elite agrária. A mudança foi de estatuto político, não de estrutura social.',
    triTip:
      'Em processos brasileiros de "independência", "abolição" e "redemocratização", pergunte sempre o que PERMANECEU. O ENEM cobra a continuidade com mais frequência do que a ruptura.'
  },
  {
    ...base,
    id: 'hum-04',
    topic: 'Brasil Império — abolição da escravidão',
    difficulty: 'Difícil',
    question:
      'A Lei Áurea, de 1888, extinguiu juridicamente a escravidão no Brasil em dois artigos, sem prever qualquer medida complementar. Para os historiadores, essa característica ajuda a explicar:',
    options: [
      {
        letter: 'A',
        text: 'a marginalização socioeconômica da população negra no pós-abolição, sem acesso a terra, educação ou trabalho remunerado digno.'
      },
      { letter: 'B', text: 'a rápida ascensão dos libertos à condição de pequenos proprietários rurais.' },
      { letter: 'C', text: 'a substituição imediata do latifúndio por cooperativas agrícolas de ex-escravizados.' },
      { letter: 'D', text: 'o fim das desigualdades raciais no Brasil já nas primeiras décadas do século XX.' },
      { letter: 'E', text: 'a concessão automática de cidadania plena e direito de voto a toda a população liberta.' }
    ],
    correctLetter: 'A',
    explanation:
      'A abolição sem reforma agrária, política educacional ou inserção no mercado de trabalho formal deixou a população liberta à margem, enquanto o Estado subsidiava a imigração europeia. É a raiz histórica de desigualdades que persistem.',
    triTip:
      'Abolição sem políticas de integração é um dos repertórios mais fortes para redações sobre desigualdade racial. Vale citar também a política de imigração subsidiada que ocorria em paralelo.'
  },
  {
    ...base,
    id: 'hum-05',
    topic: 'República Velha — coronelismo',
    difficulty: 'Fácil',
    question:
      'Durante a Primeira República, era comum que grandes proprietários rurais garantissem os votos dos trabalhadores de suas terras em troca de favores, proteção e pequenos benefícios, em eleições sem sigilo. Essa prática ficou conhecida como:',
    options: [
      { letter: 'A', text: 'Plebiscito popular' },
      { letter: 'B', text: 'Sufrágio universal' },
      { letter: 'C', text: 'Parlamentarismo às avessas' },
      { letter: 'D', text: 'Tenentismo' },
      { letter: 'E', text: 'Voto de cabresto, base do coronelismo' }
    ],
    correctLetter: 'E',
    explanation:
      'O voto de cabresto sustentava o coronelismo: sem voto secreto, o coronel controlava o eleitorado local por meio de dependência econômica e coerção, garantindo a eleição dos candidatos das oligarquias.',
    triTip:
      'Coronelismo, voto de cabresto e política dos governadores formam o tripé da Primeira República. Os três caem juntos e explicam por que o voto secreto foi uma conquista tão disputada.'
  },
  {
    ...base,
    id: 'hum-06',
    topic: 'República Velha — Revolta da Vacina',
    difficulty: 'Difícil',
    question:
      'Em 1904, a população do Rio de Janeiro reagiu violentamente à campanha de vacinação obrigatória contra a varíola conduzida por Oswaldo Cruz. Historiadores apontam que a revolta não se explica apenas pela recusa à vacina, mas sobretudo:',
    options: [
      { letter: 'A', text: 'pela comprovação científica, à época, de que a vacina era ineficaz contra a varíola.' },
      {
        letter: 'B',
        text: 'pelo caráter autoritário da campanha, somado às demolições da reforma urbana que expulsavam os pobres do centro sem alternativa de moradia.'
      },
      { letter: 'C', text: 'pela oposição organizada dos médicos da capital à existência de campanhas sanitárias.' },
      { letter: 'D', text: 'pela recusa das elites cariocas em financiar a produção nacional de imunizantes.' },
      { letter: 'E', text: 'pelo desejo popular de substituir a vacinação por tratamentos importados da Europa.' }
    ],
    correctLetter: 'B',
    explanation:
      'A vacinação foi imposta por agentes que entravam nas casas sem consentimento, no mesmo momento em que a reforma de Pereira Passos demolia cortiços e empurrava a população pobre para os morros. A revolta expressou esse acúmulo de violências.',
    triTip:
      'A Revolta da Vacina é repertório atualíssimo: mostra que campanhas de saúde pública falham quando ignoram o contexto social e impõem sem diálogo. Serve para redações sobre saúde e sobre cidade.'
  },
  {
    ...base,
    id: 'hum-07',
    topic: 'Era Vargas — legislação trabalhista e controle sindical',
    difficulty: 'Média',
    question:
      'A Consolidação das Leis do Trabalho, de 1943, garantiu direitos como jornada limitada, férias e salário mínimo. Ao mesmo tempo, o governo Vargas atrelou os sindicatos ao Ministério do Trabalho e proibiu a livre organização sindical. Essa combinação revela que:',
    options: [
      { letter: 'A', text: 'os direitos trabalhistas foram conquistados exclusivamente por greves autônomas, sem participação do Estado.' },
      { letter: 'B', text: 'a legislação trabalhista brasileira foi copiada integralmente do modelo sindical britânico.' },
      {
        letter: 'C',
        text: 'a ampliação de direitos veio acompanhada do controle estatal sobre os trabalhadores, conferindo ao governo a imagem de doador dos benefícios.'
      },
      { letter: 'D', text: 'o Estado renunciou a qualquer interferência nas relações entre patrões e empregados.' },
      { letter: 'E', text: 'a CLT extinguiu a figura do sindicato no Brasil por mais de duas décadas.' }
    ],
    correctLetter: 'C',
    explanation:
      'O trabalhismo varguista concedeu direitos reais e, simultaneamente, desmobilizou a organização autônoma dos trabalhadores. Apresentar os direitos como dádiva do governante é o cerne do populismo do período.',
    triTip:
      'Com Vargas, nunca escolha a alternativa que vê só um lado. A chave do período é a simultaneidade: direitos concedidos e liberdade política restringida na mesma medida.'
  },
  {
    ...base,
    id: 'hum-08',
    topic: 'Era Vargas — Estado Novo e propaganda',
    difficulty: 'Difícil',
    question:
      'Durante o Estado Novo (1937-1945), o Departamento de Imprensa e Propaganda (DIP) censurava jornais, rádios e produções culturais, ao mesmo tempo em que difundia a imagem do presidente como "pai dos pobres". A atuação do DIP demonstra que o regime:',
    options: [
      {
        letter: 'A',
        text: 'operava em duas frentes complementares: silenciava a crítica e produzia ativamente o consentimento popular.'
      },
      { letter: 'B', text: 'limitava-se a reprimir opositores, sem qualquer preocupação com a opinião pública.' },
      { letter: 'C', text: 'garantia liberdade de imprensa integral, intervindo apenas em conteúdos estrangeiros.' },
      { letter: 'D', text: 'delegava a comunicação oficial a emissoras privadas independentes do governo.' },
      { letter: 'E', text: 'proibia qualquer menção ao presidente nos meios de comunicação de massa.' }
    ],
    correctLetter: 'A',
    explanation:
      'Regimes autoritários raramente se sustentam só pela força: censura e propaganda são faces do mesmo projeto. O DIP suprimia vozes dissonantes enquanto construía uma narrativa positiva do governante.',
    triTip:
      'Censura mais propaganda é padrão de todo regime autoritário — vale para o Estado Novo, para a Ditadura Militar e para os totalitarismos europeus. Reconhecer o padrão resolve várias questões.'
  },
  {
    ...base,
    id: 'hum-09',
    topic: 'Ditadura Militar — AI-5',
    difficulty: 'Média',
    question:
      'O Ato Institucional nº 5, editado em dezembro de 1968, é considerado o marco do período mais repressivo da ditadura militar brasileira porque:',
    options: [
      { letter: 'A', text: 'restabeleceu as eleições diretas para presidente da República.' },
      { letter: 'B', text: 'concedeu anistia ampla, geral e irrestrita aos presos políticos.' },
      { letter: 'C', text: 'transferiu ao Congresso Nacional o controle sobre os atos do Executivo.' },
      {
        letter: 'D',
        text: 'permitiu fechar o Congresso, cassar mandatos, suspender direitos políticos e instituiu a censura prévia, sem possibilidade de recurso judicial.'
      },
      { letter: 'E', text: 'extinguiu os órgãos de segurança e informação criados após 1964.' }
    ],
    correctLetter: 'D',
    explanation:
      'O AI-5 suspendeu o habeas corpus para crimes políticos, fechou o Congresso, autorizou cassações e instituiu a censura prévia — concentrando poderes no Executivo e inaugurando os "anos de chumbo".',
    triTip:
      'Associe o AI-5 a 1968 e à suspensão do habeas corpus. Esse detalhe jurídico é o que o diferencia dos atos anteriores e costuma ser o que a alternativa correta menciona.'
  },
  {
    ...base,
    id: 'hum-10',
    topic: 'Ditadura Militar — redemocratização',
    difficulty: 'Média',
    question:
      'O movimento Diretas Já, que mobilizou multidões em 1984, reivindicava eleição direta para presidente. Embora a emenda Dante de Oliveira tenha sido rejeitada pelo Congresso, o movimento é considerado decisivo porque:',
    options: [
      { letter: 'A', text: 'conseguiu eleger diretamente o presidente daquele ano.' },
      { letter: 'B', text: 'provocou a renúncia imediata do então presidente militar.' },
      { letter: 'C', text: 'resultou na imediata convocação de uma assembleia constituinte ainda em 1984.' },
      { letter: 'D', text: 'obteve do Congresso a aprovação da emenda por ampla maioria.' },
      {
        letter: 'E',
        text: 'demonstrou a força da mobilização popular e acelerou o desgaste do regime, abrindo caminho para a transição democrática.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'A emenda foi derrotada e a sucessão ocorreu por via indireta, com Tancredo Neves. Ainda assim, as Diretas Já reorganizaram a sociedade civil e tornaram politicamente insustentável a permanência do regime.',
    triTip:
      'Um movimento pode ser historicamente decisivo mesmo sem alcançar sua pauta imediata. O ENEM cobra esse raciocínio nas Diretas Já e também em movimentos sociais contemporâneos.'
  },
  {
    ...base,
    id: 'hum-11',
    topic: 'História Geral — Revolução Industrial',
    difficulty: 'Média',
    question:
      'A Revolução Industrial iniciada na Inglaterra do século XVIII transformou profundamente as relações de trabalho. Entre suas consequências sociais imediatas destaca-se:',
    options: [
      { letter: 'A', text: 'a redução da jornada de trabalho para oito horas diárias já nas primeiras fábricas.' },
      {
        letter: 'B',
        text: 'a formação de uma classe operária urbana submetida a longas jornadas, baixos salários e péssimas condições de moradia.'
      },
      { letter: 'C', text: 'o fortalecimento das corporações de ofício medievais e do trabalho artesanal independente.' },
      { letter: 'D', text: 'o esvaziamento das cidades e o retorno da população ao campo.' },
      { letter: 'E', text: 'a eliminação do trabalho infantil por legislação aprovada no início do processo.' }
    ],
    correctLetter: 'B',
    explanation:
      'A mecanização concentrou trabalhadores em fábricas e cidades, com jornadas de até 16 horas, salários baixos e trabalho infantil. As leis trabalhistas vieram depois, como resposta à organização operária.',
    triTip:
      'Direitos trabalhistas são sempre POSTERIORES à industrialização e resultado de luta organizada. Alternativas que os colocam no início do processo invertem a cronologia.'
  },
  {
    ...base,
    id: 'hum-12',
    topic: 'História Geral — Revolução Francesa',
    difficulty: 'Fácil',
    question:
      'A Revolução Francesa de 1789 teve como um de seus marcos a Declaração dos Direitos do Homem e do Cidadão, que consagrou princípios como liberdade, igualdade perante a lei e soberania da nação. Esses princípios se opunham diretamente:',
    options: [
      { letter: 'A', text: 'à expansão do comércio e à livre iniciativa econômica.' },
      { letter: 'B', text: 'ao desenvolvimento científico promovido pelo Iluminismo.' },
      {
        letter: 'C',
        text: 'à sociedade estamental do Antigo Regime, baseada em privilégios de nascimento e no poder absoluto do rei.'
      },
      { letter: 'D', text: 'à formação dos Estados nacionais modernos na Europa.' },
      { letter: 'E', text: 'à difusão da imprensa e da educação entre as camadas urbanas.' }
    ],
    correctLetter: 'C',
    explanation:
      'O Antigo Regime organizava a sociedade em estamentos com privilégios hereditários, sob monarquia absolutista. A Declaração afirmava direitos universais e a soberania popular, negando essa estrutura.',
    triTip:
      'Liberdade, igualdade e fraternidade nascem contra o privilégio de nascimento. Sempre que o enunciado citar a Revolução Francesa, procure a alternativa que se opõe ao Antigo Regime.'
  },
  {
    ...base,
    id: 'hum-13',
    topic: 'História Geral — Guerra Fria',
    difficulty: 'Média',
    question:
      'Entre o fim da Segunda Guerra Mundial e 1991, Estados Unidos e União Soviética protagonizaram um conflito que não resultou em enfrentamento militar direto entre as duas potências. Esse período caracterizou-se por:',
    options: [
      {
        letter: 'A',
        text: 'disputa ideológica e geopolítica manifestada em corrida armamentista, corrida espacial e conflitos localizados em terceiros países.'
      },
      { letter: 'B', text: 'cooperação econômica plena entre os dois blocos, com abertura mútua de mercados.' },
      { letter: 'C', text: 'guerra declarada e contínua entre os exércitos americano e soviético em território europeu.' },
      { letter: 'D', text: 'neutralidade de todos os demais países, que se recusaram a aderir a qualquer dos blocos.' },
      { letter: 'E', text: 'desarmamento nuclear imediato negociado logo após 1945.' }
    ],
    correctLetter: 'A',
    explanation:
      'A Guerra Fria foi uma disputa por hegemonia sem confronto direto entre as superpotências, expressa em corrida armamentista e espacial, propaganda e guerras por procuração, como Coreia, Vietnã e Afeganistão.',
    triTip:
      'O nome "fria" indica ausência de confronto direto ENTRE as superpotências — não ausência de guerras. Coreia e Vietnã foram quentes e sangrentas, travadas por interpostos.'
  },
  {
    ...base,
    id: 'hum-14',
    topic: 'História Geral — totalitarismos',
    difficulty: 'Difícil',
    question:
      'Nazismo e fascismo, apesar de diferenças relevantes, compartilharam um conjunto de traços que permite classificá-los como regimes totalitários. Entre esses traços comuns está:',
    options: [
      { letter: 'A', text: 'a defesa do pluripartidarismo e da alternância no poder.' },
      { letter: 'B', text: 'a valorização do individualismo e da autonomia frente ao Estado.' },
      { letter: 'C', text: 'a separação rígida entre o partido governante e o aparelho estatal.' },
      {
        letter: 'D',
        text: 'o partido único, o culto à personalidade do líder, o nacionalismo extremado e a supressão violenta dos opositores.'
      },
      { letter: 'E', text: 'a limitação constitucional do poder executivo por tribunais independentes.' }
    ],
    correctLetter: 'D',
    explanation:
      'Os totalitarismos concentram poder em um partido único fundido ao Estado, cultuam o líder, mobilizam nacionalismo agressivo e eliminam a oposição. O nazismo acrescenta a esse quadro o racismo biológico e o antissemitismo de Estado.',
    triTip:
      'Totalitarismo não é só autoritarismo: ele pretende controlar também a vida privada, a cultura e a verdade. Hannah Arendt é o repertório clássico para essa distinção.'
  },

  // ================================================================ GEOGRAFIA (14)
  {
    ...base,
    id: 'hum-15',
    topic: 'Geografia urbana — êxodo rural',
    difficulty: 'Fácil',
    question:
      'Entre as décadas de 1950 e 1980, o Brasil deixou de ser majoritariamente rural e tornou-se um país urbano. O deslocamento intenso de população do campo para as cidades nesse período é denominado:',
    options: [
      { letter: 'A', text: 'Fluxo pendular' },
      { letter: 'B', text: 'Êxodo rural' },
      { letter: 'C', text: 'Conurbação' },
      { letter: 'D', text: 'Gentrificação' },
      { letter: 'E', text: 'Migração de retorno' }
    ],
    correctLetter: 'B',
    explanation:
      'O êxodo rural foi impulsionado pela mecanização do campo, pela concentração fundiária e pela atração exercida pela industrialização urbana, alterando radicalmente a distribuição populacional brasileira.',
    triTip:
      'Não confunda: êxodo rural é campo para cidade; fluxo pendular é o vaivém diário casa-trabalho; migração de retorno é a volta à região de origem.'
  },
  {
    ...base,
    id: 'hum-16',
    topic: 'Geografia urbana — segregação socioespacial',
    difficulty: 'Média',
    question:
      'Nas metrópoles brasileiras, observa-se a coexistência de bairros com infraestrutura completa e áreas periféricas com saneamento precário, transporte insuficiente e ocupação irregular. Esse padrão de organização do espaço urbano é denominado:',
    options: [
      { letter: 'A', text: 'Conurbação metropolitana' },
      { letter: 'B', text: 'Descentralização industrial' },
      { letter: 'C', text: 'Verticalização urbana' },
      { letter: 'D', text: 'Desmetropolização' },
      { letter: 'E', text: 'Segregação socioespacial' }
    ],
    correctLetter: 'E',
    explanation:
      'A segregação socioespacial expressa no território a desigualdade de renda: o acesso à infraestrutura urbana passa a depender da capacidade de pagar pela localização, concentrando serviços em algumas áreas.',
    triTip:
      'Segregação socioespacial é um dos repertórios mais versáteis de Geografia para a Redação — serve para mobilidade, saneamento, moradia, saúde e educação.'
  },
  {
    ...base,
    id: 'hum-17',
    topic: 'Geografia urbana — conurbação',
    difficulty: 'Média',
    question:
      'O crescimento horizontal contínuo de cidades vizinhas pode levar à fusão de suas malhas urbanas, de modo que não seja mais possível identificar visualmente onde termina um município e começa outro. Esse fenômeno é chamado de:',
    options: [
      { letter: 'A', text: 'Conurbação' },
      { letter: 'B', text: 'Macrocefalia urbana' },
      { letter: 'C', text: 'Metropolização reversa' },
      { letter: 'D', text: 'Periferização' },
      { letter: 'E', text: 'Êxodo urbano' }
    ],
    correctLetter: 'A',
    explanation:
      'A conurbação é a fusão física das áreas urbanas de municípios vizinhos, como ocorre no ABC paulista. Ela costuma exigir gestão metropolitana integrada para transporte, saneamento e resíduos.',
    triTip:
      'Conurbação é fusão de malhas urbanas; macrocefalia é uma cidade que concentra desproporcionalmente população e serviços em relação às demais. São conceitos vizinhos que o ENEM troca nas alternativas.'
  },
  {
    ...base,
    id: 'hum-18',
    topic: 'Geografia agrária — Revolução Verde',
    difficulty: 'Média',
    question:
      'A modernização da agricultura brasileira a partir da segunda metade do século XX baseou-se em mecanização intensiva, fertilizantes e agrotóxicos industriais e sementes selecionadas. Esse conjunto de transformações é conhecido como:',
    options: [
      { letter: 'A', text: 'Reforma agrária' },
      { letter: 'B', text: 'Agricultura familiar' },
      { letter: 'C', text: 'Revolução Verde' },
      { letter: 'D', text: 'Extrativismo sustentável' },
      { letter: 'E', text: 'Agroecologia' }
    ],
    correctLetter: 'C',
    explanation:
      'A Revolução Verde elevou fortemente a produtividade agrícola, mas também aprofundou a concentração fundiária, a dependência de insumos industriais e os impactos ambientais do uso de agroquímicos.',
    triTip:
      'Ao citar a Revolução Verde, apresente sempre os dois lados: aumento de produtividade de um lado, concentração de terra e impacto ambiental de outro. Essa ambivalência é o que o ENEM quer ver.'
  },
  {
    ...base,
    id: 'hum-19',
    topic: 'Geografia agrária — estrutura fundiária',
    difficulty: 'Difícil',
    question:
      'Dados censitários mostram que, no Brasil, os estabelecimentos da agricultura familiar representam a maioria das propriedades rurais, ocupam uma parcela minoritária da área agrícola total e respondem por parte expressiva dos alimentos consumidos internamente. Esses dados evidenciam:',
    options: [
      { letter: 'A', text: 'que a agricultura familiar é economicamente irrelevante para o país.' },
      { letter: 'B', text: 'que a estrutura fundiária brasileira é equilibrada em área e número de propriedades.' },
      { letter: 'C', text: 'que o agronegócio exportador é o principal responsável pelo abastecimento da mesa brasileira.' },
      {
        letter: 'D',
        text: 'a persistência da concentração fundiária, com muitos produtores em pouca terra sustentando boa parte do abastecimento interno.'
      },
      { letter: 'E', text: 'que a reforma agrária foi concluída no país ao longo do século XX.' }
    ],
    correctLetter: 'D',
    explanation:
      'Muitos estabelecimentos ocupando pouca área, ao lado de poucos latifúndios concentrando a maior parte da terra, é a definição de concentração fundiária. A agricultura familiar é central para o abastecimento interno, enquanto o agronegócio se volta principalmente à exportação.',
    triTip:
      'Nessas questões, compare sempre duas grandezas: número de propriedades e área ocupada. A distância entre elas é a medida da concentração fundiária.'
  },
  {
    ...base,
    id: 'hum-20',
    topic: 'Geografia física — biomas brasileiros',
    difficulty: 'Fácil',
    question:
      'Segundo maior bioma brasileiro, ocupa a região central do país, apresenta árvores de troncos retorcidos e casca grossa, solo ácido e duas estações bem definidas, além de abrigar nascentes de importantes bacias hidrográficas. Trata-se do:',
    options: [
      { letter: 'A', text: 'Pampa' },
      { letter: 'B', text: 'Cerrado' },
      { letter: 'C', text: 'Pantanal' },
      { letter: 'D', text: 'Caatinga' },
      { letter: 'E', text: 'Mata Atlântica' }
    ],
    correctLetter: 'B',
    explanation:
      'O Cerrado é o segundo maior bioma do país, com vegetação adaptada a solos ácidos e ao fogo, e é chamado de "caixa d\'água do Brasil" por abrigar nascentes que alimentam várias bacias. É também o bioma mais pressionado pela expansão agrícola.',
    triTip:
      'Ligue cada bioma a uma marca: Cerrado às nascentes e ao avanço do agronegócio, Caatinga à semiaridez, Pantanal ao ciclo de cheias, Pampa aos campos do Sul.'
  },
  {
    ...base,
    id: 'hum-21',
    topic: 'Climatologia — inversão térmica',
    difficulty: 'Difícil',
    question:
      'Em noites frias de inverno, grandes cidades podem registrar forte concentração de poluentes junto à superfície. Isso ocorre quando uma camada de ar quente se sobrepõe a uma camada de ar frio próxima ao solo, impedindo a ascensão e a dispersão dos poluentes. Esse fenômeno é a:',
    options: [
      { letter: 'A', text: 'Chuva ácida' },
      { letter: 'B', text: 'Ilha de calor' },
      { letter: 'C', text: 'Intensificação do efeito estufa' },
      { letter: 'D', text: 'Redução da camada de ozônio' },
      { letter: 'E', text: 'Inversão térmica' }
    ],
    correctLetter: 'E',
    explanation:
      'Normalmente o ar quente está embaixo e sobe, levando poluentes consigo. Na inversão térmica essa ordem se inverte e o ar frio fica aprisionado junto ao solo, concentrando a poluição — quadro comum em São Paulo no inverno.',
    triTip:
      'Separe os quatro problemas atmosféricos urbanos: inversão térmica concentra poluentes, ilha de calor aquece o centro, chuva ácida vem de óxidos de enxofre e nitrogênio, buraco de ozônio vem dos CFCs.'
  },
  {
    ...base,
    id: 'hum-22',
    topic: 'Demografia — transição demográfica',
    difficulty: 'Média',
    question:
      'O Brasil apresenta hoje queda acentuada da taxa de fecundidade e aumento da expectativa de vida. A principal consequência dessa combinação para as próximas décadas é:',
    options: [
      {
        letter: 'A',
        text: 'o envelhecimento da população, com maior pressão sobre a previdência e sobre os serviços de saúde.'
      },
      { letter: 'B', text: 'a explosão demográfica, com crescimento acelerado da população total.' },
      { letter: 'C', text: 'o aumento contínuo da proporção de crianças na população brasileira.' },
      { letter: 'D', text: 'a redução imediata da população absoluta do país já na década atual.' },
      { letter: 'E', text: 'a eliminação das desigualdades regionais de renda por efeito demográfico.' }
    ],
    correctLetter: 'A',
    explanation:
      'Menos nascimentos e vidas mais longas estreitam a base e alargam o topo da pirâmide etária. O resultado é o envelhecimento populacional, com impacto direto sobre previdência, saúde e mercado de trabalho.',
    triTip:
      'Transição demográfica avançada significa pirâmide com base estreita e topo largo. Alternativas que falam em explosão demográfica descrevem o Brasil de meados do século XX, não o atual.'
  },
  {
    ...base,
    id: 'hum-23',
    topic: 'Demografia — pirâmide etária',
    difficulty: 'Fácil',
    question:
      'Uma pirâmide etária com base larga e topo muito estreito é característica de países que apresentam:',
    options: [
      { letter: 'A', text: 'baixa natalidade e população majoritariamente idosa.' },
      { letter: 'B', text: 'crescimento vegetativo negativo há várias décadas.' },
      { letter: 'C', text: 'altas taxas de natalidade e baixa expectativa de vida.' },
      { letter: 'D', text: 'distribuição uniforme da população entre todas as faixas etárias.' },
      { letter: 'E', text: 'população concentrada exclusivamente na faixa economicamente ativa.' }
    ],
    correctLetter: 'C',
    explanation:
      'Base larga indica muitos nascimentos; topo estreito indica que poucos alcançam idades avançadas. É o perfil de países em estágio inicial da transição demográfica.',
    triTip:
      'Leia a pirâmide de baixo para cima: a base fala de natalidade, o topo fala de expectativa de vida. Com essas duas leituras você resolve qualquer questão de pirâmide etária.'
  },
  {
    ...base,
    id: 'hum-24',
    topic: 'Geopolítica — divisão internacional do trabalho',
    difficulty: 'Média',
    question:
      'No comércio internacional contemporâneo, é comum que países periféricos exportem commodities agrícolas e minerais e importem produtos industrializados de alto valor agregado. Essa configuração é analisada pelo conceito de:',
    options: [
      { letter: 'A', text: 'Autarquia econômica' },
      { letter: 'B', text: 'Protecionismo alfandegário' },
      { letter: 'C', text: 'Economia de subsistência' },
      { letter: 'D', text: 'Divisão internacional do trabalho' },
      { letter: 'E', text: 'Isolacionismo comercial' }
    ],
    correctLetter: 'D',
    explanation:
      'A divisão internacional do trabalho descreve a especialização desigual entre países: alguns concentram etapas de alto valor agregado e tecnologia, outros fornecem matérias-primas, o que tende a reproduzir a assimetria econômica.',
    triTip:
      'Ligue divisão internacional do trabalho a "commodities x industrializados". Quando a questão citar pauta de exportação brasileira, esse é quase sempre o conceito cobrado.'
  },
  {
    ...base,
    id: 'hum-25',
    topic: 'Geopolítica — blocos econômicos',
    difficulty: 'Fácil',
    question:
      'Blocos econômicos regionais como o Mercosul e a União Europeia são criados com o objetivo principal de:',
    options: [
      { letter: 'A', text: 'isolar seus membros do comércio mundial.' },
      {
        letter: 'B',
        text: 'reduzir barreiras comerciais entre os países-membros e fortalecer sua posição no comércio internacional.'
      },
      { letter: 'C', text: 'extinguir as moedas nacionais de todos os países participantes.' },
      { letter: 'D', text: 'unificar os exércitos dos países-membros sob comando único.' },
      { letter: 'E', text: 'impedir a circulação de pessoas entre os territórios integrados.' }
    ],
    correctLetter: 'B',
    explanation:
      'A integração regional busca facilitar o comércio interno ao bloco e ampliar o poder de negociação externo. Os graus variam: zona de livre comércio, união aduaneira, mercado comum e união econômica e monetária.',
    triTip:
      'Guarde a escala de integração: livre comércio, união aduaneira, mercado comum, união monetária. O Mercosul é união aduaneira imperfeita; a UE chegou à união monetária.'
  },
  {
    ...base,
    id: 'hum-26',
    topic: 'Recursos — matriz energética brasileira',
    difficulty: 'Média',
    question:
      'A matriz elétrica brasileira distingue-se da média mundial por apresentar participação significativamente maior de:',
    options: [
      { letter: 'A', text: 'fontes renováveis, com destaque histórico para a geração hidrelétrica.' },
      { letter: 'B', text: 'carvão mineral, principal combustível das termelétricas nacionais.' },
      { letter: 'C', text: 'energia nuclear, responsável pela maior parte da geração do país.' },
      { letter: 'D', text: 'petróleo, utilizado diretamente na maioria das usinas geradoras.' },
      { letter: 'E', text: 'gás natural importado, base da geração elétrica desde os anos 1990.' }
    ],
    correctLetter: 'A',
    explanation:
      'A hidreletricidade responde pela maior parcela da geração elétrica brasileira, complementada de forma crescente por eólica e solar. Isso torna a matriz nacional bem mais renovável que a média mundial, ainda dependente de carvão e gás.',
    triTip:
      'Não confunda matriz ELÉTRICA com matriz ENERGÉTICA. A elétrica brasileira é fortemente renovável; a energética total inclui transportes e ainda depende bastante de petróleo.'
  },
  {
    ...base,
    id: 'hum-27',
    topic: 'Recursos — crise hídrica',
    difficulty: 'Média',
    question:
      'O Brasil detém cerca de 12% da água doce superficial do planeta e, ainda assim, enfrenta crises de abastecimento em grandes centros urbanos. Essa aparente contradição se explica principalmente por:',
    options: [
      { letter: 'A', text: 'redução real do volume total de água doce existente no território nacional.' },
      { letter: 'B', text: 'proibição legal de captação de água para uso urbano nas capitais.' },
      { letter: 'C', text: 'ausência completa de rios nas regiões Sudeste e Nordeste.' },
      { letter: 'D', text: 'consumo doméstico ser o responsável pela quase totalidade da água utilizada no país.' },
      {
        letter: 'E',
        text: 'distribuição desigual entre regiões, perdas elevadas na rede, poluição dos mananciais e concentração populacional longe das maiores reservas.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'A maior parte da água está na Amazônia, enquanto a maior demanda está no Sudeste. Somam-se a isso perdas na distribuição, poluição de mananciais e o fato de a agricultura irrigada responder pela maior parte do consumo.',
    triTip:
      'Crise hídrica brasileira é problema de gestão e distribuição, não de escassez absoluta. Essa distinção é o argumento central de qualquer redação sobre o tema.'
  },
  {
    ...base,
    id: 'hum-28',
    topic: 'Cartografia — escala',
    difficulty: 'Fácil',
    question:
      'Em uma carta topográfica de escala 1 : 50 000, dois pontos aparecem separados por 6 centímetros. Qual é a distância real entre eles?',
    options: [
      { letter: 'A', text: '0,3 km' },
      { letter: 'B', text: '0,6 km' },
      { letter: 'C', text: '3 km' },
      { letter: 'D', text: '30 km' },
      { letter: 'E', text: '300 km' }
    ],
    correctLetter: 'C',
    explanation:
      'Cada centímetro do mapa equivale a 50 000 cm reais. Assim, 6 × 50 000 = 300 000 cm, que correspondem a 3 000 metros ou 3 quilômetros.',
    triTip:
      'A escala devolve o resultado em centímetros. Converter para metros e depois para quilômetros exige dividir por 100 e por 1 000 — é nessa dupla conversão que a maioria erra.'
  },

  // ================================================================ FILOSOFIA (10)
  {
    ...base,
    id: 'hum-29',
    topic: 'Filosofia antiga — Sócrates',
    difficulty: 'Média',
    question:
      'Sócrates percorria Atenas questionando cidadãos sobre conceitos como justiça, coragem e virtude, levando-os a perceber contradições em suas próprias certezas. Esse método, que parte do reconhecimento da própria ignorância, é conhecido como:',
    options: [
      { letter: 'A', text: 'Dialética hegeliana' },
      { letter: 'B', text: 'Maiêutica, precedida pela ironia socrática' },
      { letter: 'C', text: 'Método científico indutivo' },
      { letter: 'D', text: 'Ceticismo pirrônico' },
      { letter: 'E', text: 'Empirismo lógico' }
    ],
    correctLetter: 'B',
    explanation:
      'Sócrates primeiro desmontava as certezas do interlocutor pela ironia e, em seguida, pela maiêutica, ajudava-o a "dar à luz" o conhecimento. O "só sei que nada sei" é o ponto de partida desse processo.',
    triTip:
      'Ironia é a fase que destrói a falsa certeza; maiêutica é a que constrói o saber. Em Sócrates, o reconhecimento da ignorância é começo do conhecimento, não conclusão cética.'
  },
  {
    ...base,
    id: 'hum-30',
    topic: 'Filosofia antiga — Platão',
    difficulty: 'Difícil',
    question:
      'No Mito da Caverna, Platão descreve prisioneiros que, acorrentados desde o nascimento, tomam sombras projetadas na parede por realidade. Um deles é libertado, sai da caverna e contempla o mundo iluminado pelo Sol. Essa alegoria representa:',
    options: [
      { letter: 'A', text: 'a superioridade do conhecimento sensível sobre o racional.' },
      { letter: 'B', text: 'a impossibilidade de qualquer conhecimento verdadeiro.' },
      { letter: 'C', text: 'a defesa da democracia direta ateniense como forma ideal de governo.' },
      {
        letter: 'D',
        text: 'o percurso do conhecimento, que vai das aparências sensíveis ao mundo inteligível das ideias.'
      },
      { letter: 'E', text: 'a recomendação de que o filósofo permaneça afastado da vida política.' }
    ],
    correctLetter: 'D',
    explanation:
      'As sombras representam o mundo sensível e enganoso; o mundo exterior, iluminado pelo Sol, representa o inteligível, onde estão as Ideias. A libertação é a ascensão filosófica do conhecimento — e o filósofo deve retornar à caverna para orientar os demais.',
    triTip:
      'Em Platão, mundo sensível é aparência e mundo inteligível é verdade. Alternativas que valorizam o sensível ou negam a possibilidade de conhecer contradizem o núcleo do platonismo.'
  },
  {
    ...base,
    id: 'hum-31',
    topic: 'Filosofia antiga — Aristóteles',
    difficulty: 'Difícil',
    question:
      'Para Aristóteles, a coragem situa-se entre a covardia e a temeridade, e a generosidade entre a avareza e a prodigalidade. Essa concepção de virtude corresponde à doutrina:',
    options: [
      { letter: 'A', text: 'do justo meio, segundo a qual a virtude é a mediania entre dois excessos opostos.' },
      { letter: 'B', text: 'do imperativo categórico, que julga a ação por sua universalizabilidade.' },
      { letter: 'C', text: 'do utilitarismo, que avalia a ação pela quantidade de prazer produzida.' },
      { letter: 'D', text: 'do contrato social, que funda a moral no acordo entre indivíduos.' },
      { letter: 'E', text: 'do niilismo, que nega a existência de qualquer valor moral objetivo.' }
    ],
    correctLetter: 'A',
    explanation:
      'A virtude aristotélica é uma disposição de caráter que busca a mediania entre a falta e o excesso, determinada pela razão prática e consolidada pelo hábito. Imperativo categórico é Kant, utilitarismo é Bentham e Mill.',
    triTip:
      'Aristóteles fala em hábito e meio-termo; Kant, em dever e universalidade; o utilitarismo, em consequências. Identificar o critério da ação já separa as três éticas mais cobradas.'
  },
  {
    ...base,
    id: 'hum-32',
    topic: 'Filosofia moderna — contratualismo de Hobbes',
    difficulty: 'Difícil',
    question:
      'Thomas Hobbes descreve o estado de natureza como uma condição de guerra de todos contra todos, na qual a vida seria "solitária, pobre, sórdida, embrutecida e curta". A saída proposta por ele é:',
    options: [
      { letter: 'A', text: 'a permanência no estado de natureza, considerado moralmente superior à vida social.' },
      { letter: 'B', text: 'a formação de pequenas comunidades autogeridas sem qualquer autoridade central.' },
      {
        letter: 'C',
        text: 'um pacto pelo qual os indivíduos transferem seus direitos a um poder soberano capaz de garantir a segurança coletiva.'
      },
      { letter: 'D', text: 'a submissão voluntária à autoridade religiosa, única legítima segundo o autor.' },
      { letter: 'E', text: 'a instauração imediata de uma democracia direta com rodízio de governantes.' }
    ],
    correctLetter: 'C',
    explanation:
      'Para Hobbes, o medo da morte violenta leva os indivíduos a firmar um pacto que institui o soberano — o Leviatã — a quem transferem seus direitos em troca de segurança e ordem.',
    triTip:
      'Separe os contratualistas pelo estado de natureza: em Hobbes é guerra e exige soberano forte; em Locke há direitos naturais e o Estado é limitado; em Rousseau o homem é bom e a sociedade o corrompe.'
  },
  {
    ...base,
    id: 'hum-33',
    topic: 'Filosofia moderna — Rousseau',
    difficulty: 'Média',
    question:
      'Rousseau afirma que "o homem nasce livre, e por toda parte encontra-se a ferros". Coerente com essa formulação, sua proposta política central é:',
    options: [
      { letter: 'A', text: 'o retorno literal e definitivo ao estado de natureza pré-social.' },
      { letter: 'B', text: 'a concentração do poder nas mãos de um monarca absoluto hereditário.' },
      { letter: 'C', text: 'a defesa da propriedade privada como direito natural anterior ao Estado.' },
      { letter: 'D', text: 'a substituição da política pela autoridade da Igreja.' },
      {
        letter: 'E',
        text: 'um contrato social fundado na vontade geral, no qual o povo é soberano e obedece às leis que a si mesmo se dá.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'Em Rousseau, a liberdade se preserva quando cada um se submete à vontade geral, que expressa o interesse comum. Obedecer à lei que se ajudou a criar é, para ele, permanecer livre.',
    triTip:
      'Vontade geral não é a soma dos interesses particulares, e sim o interesse comum. Rousseau é repertório forte para redações sobre participação popular e legitimidade democrática.'
  },
  {
    ...base,
    id: 'hum-34',
    topic: 'Filosofia moderna — ética kantiana',
    difficulty: 'Difícil',
    question:
      'Kant formula o imperativo categórico como o princípio de agir apenas segundo a máxima que se possa querer que se torne lei universal. Uma implicação direta dessa formulação é que:',
    options: [
      { letter: 'A', text: 'uma ação é moralmente correta quando produz as consequências mais agradáveis para o agente.' },
      {
        letter: 'B',
        text: 'o valor moral da ação está no dever e na intenção, e não nas consequências obtidas.'
      },
      { letter: 'C', text: 'a moral varia conforme os costumes de cada sociedade e época.' },
      { letter: 'D', text: 'os fins justificam os meios sempre que o resultado for socialmente útil.' },
      { letter: 'E', text: 'as normas morais derivam exclusivamente de mandamentos religiosos revelados.' }
    ],
    correctLetter: 'B',
    explanation:
      'A ética kantiana é deontológica: julga a ação pelo dever e pela máxima que a orienta, não pelo resultado. Daí a segunda formulação, que exige tratar a humanidade sempre também como fim, nunca apenas como meio.',
    triTip:
      'Kant julga a INTENÇÃO; o utilitarismo julga a CONSEQUÊNCIA. Quando a alternativa fala em "maior felicidade para o maior número", está descrevendo utilitarismo, não Kant.'
  },
  {
    ...base,
    id: 'hum-35',
    topic: 'Filosofia moderna — Iluminismo',
    difficulty: 'Média',
    question:
      'O Iluminismo do século XVIII propôs que o ser humano abandonasse a menoridade intelectual e ousasse servir-se do próprio entendimento. Politicamente, esse movimento contribuiu para:',
    options: [
      {
        letter: 'A',
        text: 'a crítica ao absolutismo e ao poder de origem divina, fundamentando revoluções liberais e a defesa de direitos naturais.'
      },
      { letter: 'B', text: 'o fortalecimento da servidão feudal e dos privilégios da nobreza.' },
      { letter: 'C', text: 'a substituição da razão pela tradição como critério de autoridade.' },
      { letter: 'D', text: 'a defesa da censura como instrumento de organização social.' },
      { letter: 'E', text: 'o abandono das ciências experimentais em favor da escolástica medieval.' }
    ],
    correctLetter: 'A',
    explanation:
      'Ao colocar a razão como critério, o Iluminismo deslegitimou o poder fundado na tradição e no direito divino, oferecendo base intelectual às revoluções Americana e Francesa e às declarações de direitos.',
    triTip:
      'Iluminismo é razão contra tradição e privilégio. Ele conecta Filosofia, História (revoluções liberais) e Sociologia (formação do Estado moderno) — questão típica de área integrada.'
  },
  {
    ...base,
    id: 'hum-36',
    topic: 'Filosofia contemporânea — Nietzsche',
    difficulty: 'Difícil',
    question:
      'Nietzsche distingue uma "moral dos senhores", que afirma a força e a vida, de uma "moral dos escravos", nascida do ressentimento dos fracos e que inverte os valores originais. Com essa análise, o filósofo pretende:',
    options: [
      { letter: 'A', text: 'demonstrar que os valores morais são eternos e derivados de uma ordem divina.' },
      { letter: 'B', text: 'defender a restauração literal da aristocracia como forma de governo.' },
      { letter: 'C', text: 'provar cientificamente a superioridade biológica de determinados povos.' },
      {
        letter: 'D',
        text: 'mostrar que os valores morais são construções históricas, e não verdades absolutas, propondo sua transvaloração.'
      },
      { letter: 'E', text: 'confirmar a ética cristã como fundamento necessário de qualquer sociedade.' }
    ],
    correctLetter: 'D',
    explanation:
      'A genealogia da moral investiga a origem histórica dos valores para mostrar que eles foram criados, e não descobertos. Daí a proposta de transvaloração: submeter os valores herdados à crítica e criar novos.',
    triTip:
      'Genealogia, em Nietzsche, significa perguntar "de onde vêm esses valores e a quem serviram". Qualquer alternativa que trate a moral como absoluta ou natural está fora do seu pensamento.'
  },
  {
    ...base,
    id: 'hum-37',
    topic: 'Filosofia contemporânea — indústria cultural',
    difficulty: 'Média',
    question:
      'Adorno e Horkheimer, da Escola de Frankfurt, cunharam o conceito de indústria cultural para analisar a produção de bens simbólicos em escala de massa. Segundo eles, essa produção tende a:',
    options: [
      { letter: 'A', text: 'ampliar a autonomia crítica do público por meio da diversidade estética.' },
      { letter: 'B', text: 'eliminar toda forma de lucro na circulação de obras artísticas.' },
      {
        letter: 'C',
        text: 'padronizar os produtos culturais e transformar o público em consumidor passivo, reforçando a ordem social vigente.'
      },
      { letter: 'D', text: 'restringir-se às artes eruditas, sem alcançar os meios de comunicação de massa.' },
      { letter: 'E', text: 'garantir a valorização exclusiva das culturas populares tradicionais.' }
    ],
    correctLetter: 'C',
    explanation:
      'Para os frankfurtianos, a cultura convertida em mercadoria adota fórmulas repetíveis e previsíveis, oferecendo entretenimento que acomoda em vez de provocar reflexão, e assim contribui para a manutenção do status quo.',
    triTip:
      'Indústria cultural é repertório poderoso para redações sobre algoritmos, redes sociais e padronização de conteúdo — a crítica de 1947 descreve bem a lógica das plataformas atuais.'
  },
  {
    ...base,
    id: 'hum-38',
    topic: 'Filosofia contemporânea — Hannah Arendt',
    difficulty: 'Difícil',
    question:
      'Ao acompanhar o julgamento de Adolf Eichmann, Hannah Arendt formulou a expressão "banalidade do mal". Com ela, a filósofa quis indicar que:',
    options: [
      { letter: 'A', text: 'os crimes do nazismo foram de pequena gravidade e por isso banais.' },
      { letter: 'B', text: 'o mal é uma disposição inata e imutável de certos indivíduos.' },
      { letter: 'C', text: 'apenas indivíduos com transtornos psiquiátricos graves são capazes de atos extremos.' },
      { letter: 'D', text: 'a responsabilidade pelos crimes recai exclusivamente sobre a cúpula do regime.' },
      {
        letter: 'E',
        text: 'crimes extremos podem ser cometidos por pessoas comuns que deixam de pensar criticamente e apenas cumprem ordens e rotinas burocráticas.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'Arendt observou em Eichmann não um monstro, mas um burocrata eficiente que renunciou ao julgamento próprio. O perigo, para ela, está na ausência de pensamento crítico diante da engrenagem administrativa.',
    triTip:
      '"Banalidade do mal" não significa que o mal seja pequeno, e sim que seus executores podem ser pessoas comuns. Esse é o erro de leitura que o ENEM planta nas alternativas.'
  },

  // ================================================================ SOCIOLOGIA (10)
  {
    ...base,
    id: 'hum-39',
    topic: 'Sociologia clássica — Durkheim',
    difficulty: 'Fácil',
    question:
      'Émile Durkheim define como objeto da Sociologia os modos de agir, pensar e sentir que são exteriores ao indivíduo, dotados de poder coercitivo e compartilhados socialmente. Esse objeto é denominado:',
    options: [
      { letter: 'A', text: 'Fato social' },
      { letter: 'B', text: 'Ação social' },
      { letter: 'C', text: 'Mais-valia' },
      { letter: 'D', text: 'Habitus' },
      { letter: 'E', text: 'Anomia produtiva' }
    ],
    correctLetter: 'A',
    explanation:
      'O fato social apresenta três características: exterioridade em relação ao indivíduo, coercitividade e generalidade. Ação social é conceito de Weber; mais-valia, de Marx.',
    triTip:
      'Memorize o trio de cada clássico: Durkheim e o fato social, Weber e a ação social, Marx e a mais-valia. Quase toda questão de Sociologia começa identificando de quem é o conceito.'
  },
  {
    ...base,
    id: 'hum-40',
    topic: 'Sociologia clássica — Weber',
    difficulty: 'Difícil',
    question:
      'Max Weber analisa a burocracia moderna como forma de dominação racional-legal, marcada por hierarquia definida, regras impessoais e seleção por competência técnica. Segundo o autor, essa racionalização traz também um risco:',
    options: [
      { letter: 'A', text: 'o retorno da dominação tradicional fundada em laços de parentesco.' },
      { letter: 'B', text: 'a impossibilidade de qualquer forma de organização em larga escala.' },
      {
        letter: 'C',
        text: 'o aprisionamento do indivíduo numa "jaula de ferro" de normas e procedimentos que sufocam a autonomia e o sentido da ação.'
      },
      { letter: 'D', text: 'a eliminação completa das desigualdades sociais nas sociedades industriais.' },
      { letter: 'E', text: 'a substituição da autoridade legal pelo carisma pessoal do governante.' }
    ],
    correctLetter: 'C',
    explanation:
      'A burocracia é eficiente por sua impessoalidade, mas a mesma racionalização instrumental pode esvaziar o sentido da ação e limitar a liberdade — a imagem da "jaula de ferro" com que Weber encerra sua análise.',
    triTip:
      'Weber reconhece a eficiência da burocracia E denuncia seu custo humano. Alternativas puramente elogiosas ou puramente condenatórias perdem a ambivalência que caracteriza o autor.'
  },
  {
    ...base,
    id: 'hum-41',
    topic: 'Sociologia clássica — Marx',
    difficulty: 'Fácil',
    question:
      'Na análise de Karl Marx sobre o modo de produção capitalista, a diferença entre o valor produzido pelo trabalhador e o valor que ele recebe como salário é denominada:',
    options: [
      { letter: 'A', text: 'Renda da terra' },
      { letter: 'B', text: 'Mais-valia' },
      { letter: 'C', text: 'Juro composto' },
      { letter: 'D', text: 'Solidariedade orgânica' },
      { letter: 'E', text: 'Fetichismo da técnica' }
    ],
    correctLetter: 'B',
    explanation:
      'A mais-valia é o valor excedente apropriado pelo capitalista e constitui, para Marx, a fonte do lucro e o fundamento da exploração no capitalismo.',
    triTip:
      'Mais-valia absoluta se obtém estendendo a jornada; relativa, aumentando a produtividade no mesmo tempo. Essa distinção aparece quando a questão fala em tecnologia e ritmo de trabalho.'
  },
  {
    ...base,
    id: 'hum-42',
    topic: 'Antropologia — etnocentrismo',
    difficulty: 'Fácil',
    question:
      'Quando um grupo social toma seus próprios valores e costumes como padrão universal e julga as demais culturas como inferiores ou atrasadas a partir desse critério, configura-se:',
    options: [
      { letter: 'A', text: 'Relativismo cultural' },
      { letter: 'B', text: 'Aculturação espontânea' },
      { letter: 'C', text: 'Difusionismo metodológico' },
      { letter: 'D', text: 'Etnocentrismo' },
      { letter: 'E', text: 'Alteridade radical' }
    ],
    correctLetter: 'D',
    explanation:
      'O etnocentrismo hierarquiza culturas a partir da própria como medida. Historicamente, serviu de justificativa para colonização, catequese forçada e políticas de assimilação de povos indígenas.',
    triTip:
      'Etnocentrismo julga a partir da própria cultura; relativismo compreende cada cultura em seus próprios termos. O ENEM cobra sempre a postura relativista como a adequada.'
  },
  {
    ...base,
    id: 'hum-43',
    topic: 'Antropologia — relativismo cultural',
    difficulty: 'Média',
    question:
      'Um antropólogo que busca compreender um ritual alheio a partir do significado que ele possui para o próprio grupo, sem classificá-lo como certo ou errado segundo seus valores pessoais, adota a perspectiva do:',
    options: [
      { letter: 'A', text: 'evolucionismo cultural, que ordena as culturas em estágios de progresso.' },
      { letter: 'B', text: 'etnocentrismo metodológico, que toma a própria cultura como referência.' },
      { letter: 'C', text: 'darwinismo social, que aplica seleção natural às sociedades humanas.' },
      { letter: 'D', text: 'determinismo geográfico, que explica a cultura pelo meio físico.' },
      {
        letter: 'E',
        text: 'relativismo cultural, que compreende cada prática dentro do contexto e do sistema de sentidos em que ocorre.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'O relativismo cultural é postura metodológica: suspende o julgamento a partir de valores externos para compreender a prática em seu próprio contexto. Não implica aceitar toda prática, mas compreendê-la antes de julgar.',
    triTip:
      'Relativismo cultural é ferramenta de compreensão, não licença para tudo. Essa nuance permite discutir direitos humanos sem cair em etnocentrismo — repertório fino para a Redação.'
  },
  {
    ...base,
    id: 'hum-44',
    topic: 'Sociologia do trabalho — fordismo',
    difficulty: 'Média',
    question:
      'O modelo de produção implantado por Henry Ford no início do século XX caracterizou-se pela linha de montagem, pela extrema divisão de tarefas e pela produção em massa de itens padronizados. Uma consequência direta desse modelo para o trabalhador foi:',
    options: [
      {
        letter: 'A',
        text: 'a especialização em tarefas repetitivas e fragmentadas, com perda da visão de conjunto do processo produtivo.'
      },
      { letter: 'B', text: 'a ampliação da autonomia para decidir o ritmo e a sequência do próprio trabalho.' },
      { letter: 'C', text: 'a exigência de domínio artesanal completo de todas as etapas de fabricação.' },
      { letter: 'D', text: 'a eliminação da hierarquia nas fábricas, substituída por gestão horizontal.' },
      { letter: 'E', text: 'a produção sob encomenda, com itens personalizados para cada cliente.' }
    ],
    correctLetter: 'A',
    explanation:
      'A linha de montagem fragmenta o trabalho em gestos simples e repetitivos, separando concepção de execução. O trabalhador perde o domínio do processo como um todo — fenômeno que Marx já descrevia como alienação.',
    triTip:
      'Ligue fordismo a padronização, estoque alto e produção em massa; toyotismo a flexibilidade, just in time e trabalhador polivalente. A comparação é questão recorrente.'
  },
  {
    ...base,
    id: 'hum-45',
    topic: 'Sociologia do trabalho — toyotismo',
    difficulty: 'Média',
    question:
      'O modelo toyotista, difundido a partir do Japão na segunda metade do século XX, distingue-se do fordismo por adotar:',
    options: [
      { letter: 'A', text: 'estoques elevados e produção contínua independente da demanda.' },
      {
        letter: 'B',
        text: 'produção flexível ajustada à demanda (just in time), trabalhador polivalente e controle de qualidade distribuído ao longo do processo.'
      },
      { letter: 'C', text: 'retorno ao trabalho artesanal individual, sem divisão de tarefas.' },
      { letter: 'D', text: 'ampliação máxima da linha de montagem rígida e da especialização em tarefa única.' },
      { letter: 'E', text: 'eliminação de qualquer forma de controle de qualidade sobre os produtos.' }
    ],
    correctLetter: 'B',
    explanation:
      'O toyotismo produz conforme a demanda, reduzindo estoques, e exige trabalhadores capazes de operar várias funções. A contrapartida é a intensificação do ritmo e a maior pressão por metas.',
    triTip:
      'Just in time significa produzir só o necessário, no momento necessário. A flexibilidade que caracteriza o toyotismo também explica a precarização e a terceirização discutidas hoje.'
  },
  {
    ...base,
    id: 'hum-46',
    topic: 'Cidadania — movimentos sociais',
    difficulty: 'Fácil',
    question:
      'Movimentos sociais como o movimento negro, o feminista e o de luta por moradia atuam na esfera pública reivindicando direitos e reconhecimento. Do ponto de vista sociológico, sua principal função nas democracias contemporâneas é:',
    options: [
      { letter: 'A', text: 'substituir integralmente as instituições do Estado nas funções administrativas.' },
      { letter: 'B', text: 'impedir a realização de eleições periódicas por meio da mobilização de rua.' },
      {
        letter: 'C',
        text: 'pressionar por ampliação de direitos e dar visibilidade a demandas de grupos historicamente excluídos da agenda política.'
      },
      { letter: 'D', text: 'representar exclusivamente os interesses econômicos das elites urbanas.' },
      { letter: 'E', text: 'atuar apenas em regimes autoritários, desaparecendo nas democracias consolidadas.' }
    ],
    correctLetter: 'C',
    explanation:
      'Movimentos sociais ampliam a agenda pública, pressionam por políticas e conquistam direitos que a representação eleitoral sozinha não alcançaria. Boa parte da legislação social brasileira nasceu dessa pressão organizada.',
    triTip:
      'Movimentos sociais são parte da democracia, não uma ameaça a ela. Alternativas que os apresentam como antidemocráticos ou substitutos do Estado costumam estar erradas.'
  },
  {
    ...base,
    id: 'hum-47',
    topic: 'Desigualdade — mobilidade social',
    difficulty: 'Média',
    question:
      'Pesquisas sobre mobilidade social no Brasil indicam que a posição socioeconômica dos pais ainda prediz fortemente a posição alcançada pelos filhos. Esse achado sugere que:',
    options: [
      { letter: 'A', text: 'a sociedade brasileira é plenamente meritocrática, dependendo apenas do esforço individual.' },
      { letter: 'B', text: 'a mobilidade social ascendente é impossível em qualquer circunstância no país.' },
      { letter: 'C', text: 'a origem familiar não exerce influência sobre a trajetória educacional e profissional.' },
      {
        letter: 'D',
        text: 'a desigualdade tende a se reproduzir entre gerações, e políticas de acesso à educação são decisivas para romper esse ciclo.'
      },
      { letter: 'E', text: 'a estratificação social brasileira é baseada em castas juridicamente definidas.' }
    ],
    correctLetter: 'D',
    explanation:
      'Quando a origem social prevê o destino, a desigualdade se reproduz entre gerações. Políticas de acesso e permanência na educação atuam justamente para enfraquecer esse vínculo — daí o debate sobre cotas e assistência estudantil.',
    triTip:
      'Baixa mobilidade social é o argumento sociológico central contra a leitura puramente meritocrática. Serve para redações sobre educação, trabalho e desigualdade racial.'
  },
  {
    ...base,
    id: 'hum-48',
    topic: 'Sociologia contemporânea — modernidade líquida',
    difficulty: 'Fácil',
    question:
      'Zygmunt Bauman utiliza a metáfora do líquido — que não conserva forma fixa — para caracterizar a sociedade contemporânea. O conceito de "modernidade líquida" refere-se, portanto:',
    options: [
      { letter: 'A', text: 'ao retorno de instituições sociais rígidas e vínculos permanentes.' },
      { letter: 'B', text: 'à estabilidade dos empregos e das relações afetivas ao longo da vida.' },
      { letter: 'C', text: 'ao predomínio de economias agrárias sobre as urbanas.' },
      { letter: 'D', text: 'ao fortalecimento definitivo das fronteiras nacionais e das identidades fixas.' },
      {
        letter: 'E',
        text: 'à fluidez e à fragilidade dos vínculos sociais, afetivos e profissionais, que se formam e se desfazem com rapidez.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'Bauman contrasta a "solidez" das estruturas modernas — emprego duradouro, casamento para a vida toda, identidades estáveis — com a fluidez contemporânea, em que vínculos e compromissos se tornam provisórios.',
    triTip:
      'Modernidade líquida é repertório curinga para consumo, relações digitais e descartabilidade. Use com precisão: o conceito descreve a fragilidade dos vínculos, não a velocidade da tecnologia.'
  }
];
