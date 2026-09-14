import { ExamQuestion } from '../../types';

// Linguagens, Códigos e suas Tecnologias — 48 questões autorais.
//
// Esta área exigiu um formato diferente das outras três. A prova real é
// majoritariamente interpretação de texto, e o banco anterior quase não tinha
// texto para interpretar — perguntava "qual figura de linguagem é essa" sem
// contexto. Aqui a maioria das questões traz um texto-base: notícia, post, peça
// publicitária, crônica, verbete, infográfico descrito.
//
// Os textos-base são autorais, escritos para estas questões. Os fragmentos
// literários citados estão em domínio público (Gonçalves Dias, 1843; Oswald de
// Andrade, 1925), o que evita reproduzir obra protegida num produto comercial.
//
// Distribuição: interpretação 12, literatura 8, variação linguística 5, funções
// da linguagem 4, figuras 4, gêneros 4, coesão 4, artes e cultura 4, semântica 3.

const base = {
  subject: 'linguagens' as const,
  areaName: 'Linguagens e Códigos',
  origin: 'Questão Inédita'
};

export const LINGUAGENS_QUESTIONS: ExamQuestion[] = [
  // ================================================================ INTERPRETAÇÃO DE TEXTO (12)
  {
    ...base,
    id: 'lin-01',
    topic: 'Interpretação — ideia central de notícia',
    difficulty: 'Média',
    question:
      'Leia a notícia:\n\n"Levantamento divulgado nesta semana aponta que 61% dos municípios brasileiros não possuem plano municipal de gestão de resíduos sólidos, exigência prevista em lei desde 2010. Entre os que possuem, metade não conseguiu implementar a coleta seletiva. Especialistas atribuem o quadro à ausência de equipe técnica e à falta de recursos para investimento inicial."\n\nA ideia central do texto é:',
    options: [
      { letter: 'A', text: 'a coleta seletiva é rejeitada pela população brasileira.' },
      { letter: 'B', text: 'a lei de resíduos sólidos foi revogada por ser inviável.' },
      {
        letter: 'C',
        text: 'há um descompasso entre a exigência legal e a capacidade efetiva dos municípios de cumpri-la.'
      },
      { letter: 'D', text: 'os municípios brasileiros eliminaram a produção de resíduos sólidos.' },
      { letter: 'E', text: 'especialistas discordam da necessidade de planos municipais de resíduos.' }
    ],
    correctLetter: 'C',
    explanation:
      'O texto contrapõe a obrigação legal existente desde 2010 aos dados de descumprimento e apresenta as causas apontadas por especialistas. A ideia central é justamente essa distância entre a norma e a capacidade de executá-la.',
    triTip:
      'Ideia central não é o assunto, é o que o texto AFIRMA sobre o assunto. Aqui o assunto é resíduos sólidos; a ideia central é o descompasso entre lei e execução.'
  },
  {
    ...base,
    id: 'lin-02',
    topic: 'Interpretação — intenção comunicativa em gênero digital',
    difficulty: 'Fácil',
    question:
      'Leia a publicação feita no perfil oficial de uma biblioteca pública:\n\n"Chegou a época mais linda do ano: a devolução sem multa! De 1º a 15 de agosto, traga aquele livro que está criando raízes na sua estante. Sem cobrança, sem sermão, sem julgamento. Só queremos ele de volta. 🙂"\n\nA intenção comunicativa predominante nessa publicação é:',
    options: [
      {
        letter: 'A',
        text: 'estimular a devolução de livros atrasados por meio de um tom leve e acolhedor, reduzindo o constrangimento do usuário.'
      },
      { letter: 'B', text: 'informar tecnicamente as regras do regulamento interno da biblioteca.' },
      { letter: 'C', text: 'criticar duramente os usuários que atrasam a devolução de obras.' },
      { letter: 'D', text: 'divulgar o lançamento de novos títulos adquiridos pelo acervo.' },
      { letter: 'E', text: 'convocar voluntários para trabalhar na organização das estantes.' }
    ],
    correctLetter: 'A',
    explanation:
      'Expressões como "criando raízes na sua estante", "sem sermão" e "sem julgamento" constroem proximidade e retiram a carga de culpa, com o objetivo prático de trazer os livros de volta.',
    triTip:
      'Em gêneros digitais institucionais, observe o TOM além do conteúdo. A escolha por humor e informalidade costuma ter finalidade prática: reduzir resistência a um pedido.'
  },
  {
    ...base,
    id: 'lin-03',
    topic: 'Interpretação — público-alvo em peça publicitária',
    difficulty: 'Média',
    question:
      'Leia o texto de um anúncio:\n\n"Você trabalha o dia todo, estuda à noite e ainda tenta dormir alguma coisa. A gente entende. Por isso o curso é gravado, fica salvo por 12 meses e roda até naquela internet do ônibus."\n\nO anúncio dirige-se prioritariamente a:',
    options: [
      { letter: 'A', text: 'estudantes em dedicação exclusiva, com o dia inteiro livre para estudar.' },
      { letter: 'B', text: 'aposentados que buscam atividades de lazer intelectual.' },
      { letter: 'C', text: 'empresas interessadas em treinar equipes presencialmente.' },
      { letter: 'D', text: 'crianças em idade de alfabetização escolar.' },
      {
        letter: 'E',
        text: 'trabalhadores que estudam em horários alternativos e enfrentam limitações de tempo e de conexão.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'O anúncio nomeia explicitamente a rotina de quem trabalha e estuda à noite e responde a duas restrições concretas desse público: falta de tempo, resolvida pela gravação, e conexão instável, resolvida pela leveza do material.',
    triTip:
      'Para identificar o público-alvo, procure os problemas que o texto se propõe a resolver. Cada solução oferecida revela uma característica de quem se quer atingir.'
  },
  {
    ...base,
    id: 'lin-04',
    topic: 'Interpretação — ponto de vista em carta do leitor',
    difficulty: 'Média',
    question:
      'Leia a carta enviada a um jornal:\n\n"Li com interesse a reportagem sobre a nova ciclovia da avenida central. Como ciclista há dez anos, celebro a obra. Mas gostaria de registrar que ciclovia sem manutenção vira depósito de entulho em seis meses. Já vimos esse filme três vezes nesta cidade."\n\nO posicionamento do autor da carta pode ser descrito como:',
    options: [
      { letter: 'A', text: 'contrário à construção de ciclovias na cidade.' },
      {
        letter: 'B',
        text: 'favorável à obra, mas cético quanto à continuidade da manutenção, com base em experiências anteriores.'
      },
      { letter: 'C', text: 'indiferente ao tema, por não utilizar bicicleta como meio de transporte.' },
      { letter: 'D', text: 'plenamente confiante de que a ciclovia será bem conservada pelo poder público.' },
      { letter: 'E', text: 'crítico à reportagem publicada, que considera imprecisa e mal apurada.' }
    ],
    correctLetter: 'B',
    explanation:
      'O autor celebra a obra ("celebro a obra") e, com o operador "mas", introduz a ressalva. A expressão "já vimos esse filme três vezes" fundamenta o ceticismo em casos anteriores, sem negar o valor da ciclovia.',
    triTip:
      'O conectivo "mas" marca onde está o argumento principal: o que vem DEPOIS dele é a posição que o autor quer sustentar. O que vem antes costuma ser uma concessão.'
  },
  {
    ...base,
    id: 'lin-05',
    topic: 'Interpretação — divulgação científica',
    difficulty: 'Média',
    question:
      'Leia o trecho de um texto de divulgação científica:\n\n"Imagine o sistema imunológico como uma equipe de segurança que guarda fotos dos invasores já conhecidos. A vacina é o retrato falado entregue antes da invasão: quando o vírus real aparece, a equipe já sabe quem procurar."\n\nO recurso utilizado pelo autor tem como finalidade principal:',
    options: [
      { letter: 'A', text: 'substituir a explicação científica por uma narrativa de ficção.' },
      { letter: 'B', text: 'demonstrar erudição por meio de vocabulário técnico especializado.' },
      { letter: 'C', text: 'questionar a eficácia dos imunizantes disponíveis à população.' },
      {
        letter: 'D',
        text: 'tornar um processo biológico complexo acessível ao leitor não especializado por meio de uma analogia do cotidiano.'
      },
      { letter: 'E', text: 'apresentar dados estatísticos sobre cobertura vacinal no país.' }
    ],
    correctLetter: 'D',
    explanation:
      'A analogia com uma equipe de segurança e um retrato falado traduz o conceito de memória imunológica para uma experiência familiar. É o recurso típico da divulgação científica, que aproxima o conhecimento do leigo sem exigir vocabulário técnico.',
    triTip:
      'Divulgação científica não é o mesmo que artigo científico. O primeiro busca acessibilidade e usa analogias; o segundo busca precisão técnica e se dirige a pares.'
  },
  {
    ...base,
    id: 'lin-06',
    topic: 'Interpretação — crítica implícita em charge',
    difficulty: 'Difícil',
    question:
      'Observe a descrição de uma charge:\n\n"Um homem de terno, sentado a uma mesa farta, fala ao microfone diante de uma plateia: \'Precisamos todos apertar os cintos.\' Ao seu lado, um garçom serve mais uma travessa. Na plateia, pessoas magras aplaudem de pé."\n\nA crítica construída pela charge recai sobre:',
    options: [
      { letter: 'A', text: 'os riscos à saúde associados ao consumo excessivo de alimentos.' },
      { letter: 'B', text: 'a importância da moderação alimentar em períodos de crise.' },
      {
        letter: 'C',
        text: 'a incoerência de quem prega sacrifício coletivo sem se submeter a ele, e a adesão de quem mais perde com isso.'
      },
      { letter: 'D', text: 'a má qualidade do serviço prestado em eventos públicos.' },
      { letter: 'E', text: 'a necessidade de ampliar o número de eventos com plateia.' }
    ],
    correctLetter: 'C',
    explanation:
      'O humor nasce do contraste entre o discurso ("apertar os cintos") e a imagem (mesa farta, mais uma travessa), agravado pela plateia magra que aplaude. A charge critica a hipocrisia do discurso de austeridade e a adesão dos que arcam com o custo.',
    triTip:
      'Em charge, a crítica quase sempre está no CONTRASTE entre o que se diz e o que se mostra. Leia texto e imagem como uma unidade: separados, nenhum dos dois tem graça.'
  },
  {
    ...base,
    id: 'lin-07',
    topic: 'Interpretação — texto instrucional',
    difficulty: 'Fácil',
    question:
      'Leia o trecho de um manual:\n\n"Antes de conectar o aparelho, verifique se a voltagem indicada na etiqueta corresponde à da tomada. Em seguida, posicione o equipamento sobre superfície plana e mantenha 10 cm livres nas laterais. Não cubra as aberturas de ventilação."\n\nA finalidade predominante desse texto é:',
    options: [
      { letter: 'A', text: 'orientar o usuário sobre procedimentos corretos de instalação e uso seguro.' },
      { letter: 'B', text: 'persuadir o leitor a adquirir o produto descrito.' },
      { letter: 'C', text: 'narrar a história do desenvolvimento tecnológico do aparelho.' },
      { letter: 'D', text: 'expressar a opinião do fabricante sobre concorrentes.' },
      { letter: 'E', text: 'estabelecer contato afetivo com o consumidor.' }
    ],
    correctLetter: 'A',
    explanation:
      'Verbos no imperativo com valor instrucional ("verifique", "posicione", "mantenha", "não cubra") e a sequência de etapas caracterizam o texto injuntivo, cuja finalidade é orientar a ação do leitor.',
    triTip:
      'Imperativo aparece tanto em manual quanto em propaganda. O que distingue é a finalidade: manual orienta a execução de uma tarefa, propaganda busca convencer a consumir.'
  },
  {
    ...base,
    id: 'lin-08',
    topic: 'Interpretação — identificação de contra-argumento',
    difficulty: 'Difícil',
    question:
      'Leia o parágrafo:\n\n"Defensores da redução da maioridade penal sustentam que a medida diminuiria a criminalidade. Ocorre que países que adotaram penas mais severas para menores não registraram queda consistente nos índices, enquanto investimentos em educação integral e programas de aprendizagem apresentaram resultados mensuráveis em prazos comparáveis."\n\nA estratégia argumentativa empregada no trecho consiste em:',
    options: [
      { letter: 'A', text: 'apoiar a tese dos defensores com dados internacionais convergentes.' },
      { letter: 'B', text: 'apresentar uma opinião pessoal sem qualquer fundamentação externa.' },
      { letter: 'C', text: 'narrar um caso individual para emocionar o leitor.' },
      { letter: 'D', text: 'evitar o posicionamento, apresentando os dois lados com igual peso.' },
      {
        letter: 'E',
        text: 'apresentar a tese adversária e refutá-la com evidência empírica, oferecendo em seguida uma alternativa.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'O texto expõe primeiro a posição contrária ("defensores sustentam"), introduz a refutação com "ocorre que" e a sustenta em evidência comparada, encerrando com uma proposta alternativa. É a estrutura clássica da contra-argumentação.',
    triTip:
      'Expressões como "ocorre que", "no entanto" e "acontece que" marcam a virada para a refutação. Reconhecer esse ponto é essencial na prova e na Competência 3 da Redação.'
  },
  {
    ...base,
    id: 'lin-09',
    topic: 'Interpretação — ironia em crônica',
    difficulty: 'Difícil',
    question:
      'Leia o trecho de uma crônica:\n\n"A reunião foi marcada para resolver em definitivo o problema das reuniões excessivas. Durou três horas. Ao final, decidiu-se criar um comitê permanente para acompanhar a questão, com encontros quinzenais."\n\nO efeito de sentido predominante no trecho é:',
    options: [
      { letter: 'A', text: 'a exaltação sincera da eficiência administrativa.' },
      {
        letter: 'B',
        text: 'a ironia, obtida pela contradição entre o objetivo declarado e o resultado obtido.'
      },
      { letter: 'C', text: 'a comoção diante do esforço dos participantes.' },
      { letter: 'D', text: 'a neutralidade descritiva, sem avaliação do narrador.' },
      { letter: 'E', text: 'o suspense quanto ao desfecho da reunião.' }
    ],
    correctLetter: 'B',
    explanation:
      'Uma reunião longa para combater reuniões, cuja solução é criar mais reuniões, produz ironia: o texto diz uma coisa e o sentido construído é o oposto, sem que o narrador precise emitir juízo explícito.',
    triTip:
      'Ironia se identifica pela distância entre o que é dito e o que se depreende. Quando o desfecho contradiz o propósito anunciado, o efeito é quase sempre irônico.'
  },
  {
    ...base,
    id: 'lin-10',
    topic: 'Interpretação — leitura de dados',
    difficulty: 'Média',
    question:
      'Leia a descrição de um infográfico:\n\n"O gráfico de barras mostra o tempo médio diário de deslocamento casa-trabalho em quatro faixas de renda. Até 2 salários mínimos: 96 minutos. De 2 a 5: 74 minutos. De 5 a 10: 58 minutos. Acima de 10: 41 minutos."\n\nA leitura correta desses dados permite concluir que:',
    options: [
      { letter: 'A', text: 'o tempo de deslocamento independe da faixa de renda.' },
      { letter: 'B', text: 'quanto maior a renda, maior o tempo gasto no deslocamento diário.' },
      { letter: 'C', text: 'todas as faixas de renda gastam mais de uma hora no trajeto.' },
      {
        letter: 'D',
        text: 'o tempo de deslocamento diminui conforme a renda aumenta, sugerindo relação entre renda e proximidade do trabalho.'
      },
      { letter: 'E', text: 'a faixa de renda mais alta não realiza deslocamento casa-trabalho.' }
    ],
    correctLetter: 'D',
    explanation:
      'Os valores caem de 96 para 41 minutos conforme a renda sobe, uma relação inversa consistente. A faixa acima de 10 salários gasta menos de uma hora, o que elimina a alternativa C.',
    triTip:
      'Antes de escolher, confira alternativa por alternativa contra os números dados. Questões de infográfico costumam ter uma opção que inverte a tendência e outra que exagera o alcance da conclusão.'
  },
  {
    ...base,
    id: 'lin-11',
    topic: 'Interpretação — adequação ao gênero',
    difficulty: 'Média',
    question:
      'Um estudante precisa enviar e-mail ao coordenador do curso solicitando prorrogação de prazo por motivo de saúde. Qual das formulações é mais adequada ao gênero e à situação?',
    options: [
      { letter: 'A', text: '"E aí, prof! Deu ruim aqui, me quebra essa do prazo?"' },
      { letter: 'B', text: '"Venho por meio desta epístola rogar vossa clemência acerca do prazo estabelecido."' },
      {
        letter: 'C',
        text: '"Prezado professor, solicito a prorrogação do prazo de entrega por motivo de saúde, conforme atestado em anexo. Coloco-me à disposição para esclarecimentos."'
      },
      { letter: 'D', text: '"Preciso de mais prazo. Atenciosamente."' },
      { letter: 'E', text: '"Informo que não entregarei o trabalho na data combinada."' }
    ],
    correctLetter: 'C',
    explanation:
      'A alternativa C reúne o que o gênero pede: tratamento adequado, pedido claro, justificativa, comprovação anexada e fecho cortês. A opção A é informal demais, a B é artificialmente rebuscada, a D é seca e sem justificativa, e a E comunica sem solicitar.',
    triTip:
      'Adequação não é sinônimo de rebuscamento. Linguagem excessivamente formal em contexto cotidiano soa tão inadequada quanto gíria em documento oficial.'
  },
  {
    ...base,
    id: 'lin-12',
    topic: 'Interpretação — pressuposto',
    difficulty: 'Difícil',
    question:
      'Leia a frase de uma campanha institucional:\n\n"Continue reciclando: o planeta agradece."\n\nO verbo "continue" carrega, nesse enunciado, o pressuposto de que:',
    options: [
      { letter: 'A', text: 'o interlocutor já pratica a reciclagem.' },
      { letter: 'B', text: 'o interlocutor nunca reciclou anteriormente.' },
      { letter: 'C', text: 'a reciclagem é uma prática prejudicial ao meio ambiente.' },
      { letter: 'D', text: 'o planeta é indiferente às ações individuais.' },
      { letter: 'E', text: 'a campanha se dirige exclusivamente a empresas do setor.' }
    ],
    correctLetter: 'A',
    explanation:
      'Pressuposto é a informação admitida como verdadeira para que o enunciado faça sentido. "Continue" só se aplica a quem já realiza a ação, de modo que a campanha pressupõe um interlocutor já engajado.',
    triTip:
      'Verbos como continuar, parar, voltar e deixar de carregam pressupostos sobre o passado. "Pare de reclamar" pressupõe que você reclama — recurso que o ENEM cobra e que aparece muito em propaganda.'
  },

  // ================================================================ VARIAÇÃO LINGUÍSTICA (5)
  {
    ...base,
    id: 'lin-13',
    topic: 'Variação linguística — variação regional',
    difficulty: 'Fácil',
    question:
      'Em diferentes regiões do Brasil, o mesmo objeto pode ser chamado de "mandioca", "aipim" ou "macaxeira". Esse fenômeno é um exemplo de variação:',
    options: [
      { letter: 'A', text: 'histórica (diacrônica)' },
      { letter: 'B', text: 'regional (diatópica)' },
      { letter: 'C', text: 'social (diastrática)' },
      { letter: 'D', text: 'estilística (diafásica)' },
      { letter: 'E', text: 'Não se trata de variação, mas de erro de vocabulário.' }
    ],
    correctLetter: 'B',
    explanation:
      'A variação diatópica relaciona-se ao espaço geográfico: as três formas são igualmente corretas, cada uma predominante em uma região. Nenhuma é mais legítima que as outras.',
    triTip:
      'Associe os prefixos: diatópica é lugar (topos), diacrônica é tempo (cronos), diastrática é grupo social (estrato), diafásica é situação (fase da fala).'
  },
  {
    ...base,
    id: 'lin-14',
    topic: 'Variação linguística — variação estilística',
    difficulty: 'Média',
    question:
      'Uma mesma pessoa diz "e aí, tudo certo?" ao encontrar um amigo e "bom dia, como o senhor está?" ao cumprimentar um cliente. Essa alternância demonstra:',
    options: [
      { letter: 'A', text: 'insegurança linguística do falante quanto à norma-padrão.' },
      { letter: 'B', text: 'domínio incompleto da língua portuguesa.' },
      { letter: 'C', text: 'variação histórica ocorrida entre as duas situações.' },
      {
        letter: 'D',
        text: 'competência comunicativa, com adequação do registro à situação e ao interlocutor.'
      },
      { letter: 'E', text: 'preconceito linguístico dirigido ao próprio grupo social.' }
    ],
    correctLetter: 'D',
    explanation:
      'Ajustar o registro conforme o contexto é sinal de competência comunicativa, não de deficiência. O falante domina mais de uma variedade e escolhe a adequada a cada situação.',
    triTip:
      'O ENEM valoriza a noção de ADEQUAÇÃO no lugar de "certo e errado". Alternativas que tratam a variação informal como deficiência quase sempre estão erradas.'
  },
  {
    ...base,
    id: 'lin-15',
    topic: 'Variação linguística — preconceito linguístico',
    difficulty: 'Média',
    question:
      'Um comentarista afirma, em rede social, que pessoas que dizem "nós vai" são "incapazes de raciocinar direito". Do ponto de vista da Linguística, essa afirmação:',
    options: [
      { letter: 'A', text: 'está correta, pois a concordância verbal reflete a capacidade cognitiva do falante.' },
      { letter: 'B', text: 'é neutra, por descrever objetivamente um fato gramatical.' },
      { letter: 'C', text: 'está correta apenas em contextos escolares formais.' },
      { letter: 'D', text: 'descreve uma variação histórica já consolidada na norma-padrão.' },
      {
        letter: 'E',
        text: 'configura preconceito linguístico, pois associa indevidamente uma variedade da língua a julgamentos sobre a inteligência de quem a fala.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'Todas as variedades linguísticas possuem regras sistemáticas e são plenamente funcionais. Julgar a capacidade intelectual de alguém por sua variedade é preconceito linguístico, que opera como forma de discriminação social.',
    triTip:
      'Preconceito linguístico costuma ser preconceito social disfarçado: o alvo raramente é a estrutura da frase, e sim a origem de quem fala. Excelente repertório de Redação.'
  },
  {
    ...base,
    id: 'lin-16',
    topic: 'Variação linguística — variação histórica',
    difficulty: 'Média',
    question:
      'Em textos brasileiros do século XIX, é comum encontrar formas como "Vossa Mercê" e a colocação pronominal "dir-vos-ei", hoje praticamente ausentes da fala cotidiana. Essa diferença ilustra a variação:',
    options: [
      { letter: 'A', text: 'histórica (diacrônica), resultante das mudanças da língua ao longo do tempo.' },
      { letter: 'B', text: 'regional, ligada ao local de nascimento dos autores.' },
      { letter: 'C', text: 'social, decorrente da escolaridade dos falantes atuais.' },
      { letter: 'D', text: 'estilística, escolhida conforme o grau de formalidade da situação.' },
      { letter: 'E', text: 'ortográfica, causada apenas por reformas de escrita.' }
    ],
    correctLetter: 'A',
    explanation:
      'A língua muda com o tempo: "Vossa Mercê" originou "você" e a mesóclise praticamente desapareceu do uso corrente. Trata-se de variação diacrônica, que evidencia o caráter vivo do idioma.',
    triTip:
      'Mudança linguística é sinal de vitalidade, não de degradação. Argumentos de que a língua está "se perdendo" costumam aparecer nas alternativas erradas.'
  },
  {
    ...base,
    id: 'lin-17',
    topic: 'Variação linguística — norma-padrão e norma culta',
    difficulty: 'Difícil',
    question:
      'Um professor explica que a norma-padrão é o modelo idealizado descrito nas gramáticas normativas, enquanto a norma culta corresponde ao uso efetivo de falantes escolarizados em situações formais. A partir dessa distinção, conclui-se que:',
    options: [
      { letter: 'A', text: 'norma-padrão e norma culta são termos sinônimos e intercambiáveis.' },
      { letter: 'B', text: 'a norma culta é falada apenas em ambientes acadêmicos de pós-graduação.' },
      {
        letter: 'C',
        text: 'podem existir usos correntes entre falantes escolarizados que não coincidem integralmente com a prescrição gramatical.'
      },
      { letter: 'D', text: 'a norma-padrão registra fielmente tudo o que os brasileiros falam no dia a dia.' },
      { letter: 'E', text: 'as gramáticas normativas descrevem todas as variedades regionais do português.' }
    ],
    correctLetter: 'C',
    explanation:
      'A norma-padrão é prescritiva e relativamente estável; a norma culta é o uso real de falantes escolarizados e acompanha mudanças. A distância entre as duas explica por que certos usos consagrados ainda são apontados como "erro" por gramáticas.',
    triTip:
      'Padrão é o modelo prescrito; culta é o uso real dos escolarizados; popular é o uso corrente. Confundir os três é o erro que essa questão testa.'
  },

  // ================================================================ FUNÇÕES DA LINGUAGEM (4)
  {
    ...base,
    id: 'lin-18',
    topic: 'Funções da linguagem — função conativa',
    difficulty: 'Fácil',
    question:
      'Leia a peça de campanha:\n\n"Doe sangue. Reserve uma hora do seu sábado e devolva anos à vida de alguém."\n\nA função da linguagem predominante nesse texto é:',
    options: [
      { letter: 'A', text: 'referencial, por informar dados objetivos sobre doação.' },
      { letter: 'B', text: 'conativa (apelativa), por buscar influenciar o comportamento do interlocutor.' },
      { letter: 'C', text: 'metalinguística, por explicar o funcionamento da própria língua.' },
      { letter: 'D', text: 'fática, por testar o canal de comunicação.' },
      { letter: 'E', text: 'poética, por centrar-se na elaboração estética da mensagem.' }
    ],
    correctLetter: 'B',
    explanation:
      'Os verbos no imperativo ("doe", "reserve", "devolva") dirigem-se diretamente ao receptor com o objetivo de provocar uma ação. Esse foco no destinatário caracteriza a função conativa.',
    triTip:
      'Função conativa se reconhece pelo imperativo e pelo vocativo dirigido ao leitor. É a função dominante em propaganda e em campanhas institucionais.'
  },
  {
    ...base,
    id: 'lin-19',
    topic: 'Funções da linguagem — função emotiva',
    difficulty: 'Média',
    question:
      'Leia os versos:\n\n"Não sei dizer o que sinto quando volto:\nse é saudade, se é medo, se é apenas\no cansaço de ter sido tantos outros."\n\nA função da linguagem predominante é:',
    options: [
      { letter: 'A', text: 'referencial, centrada no contexto e na informação objetiva.' },
      { letter: 'B', text: 'conativa, centrada no receptor da mensagem.' },
      { letter: 'C', text: 'fática, centrada na manutenção do canal.' },
      { letter: 'D', text: 'emotiva (expressiva), centrada no emissor e em seu estado subjetivo.' },
      { letter: 'E', text: 'metalinguística, centrada no próprio código.' }
    ],
    correctLetter: 'D',
    explanation:
      'A primeira pessoa e a exposição de sentimentos e dúvidas interiores ("não sei dizer o que sinto") deslocam o foco para o emissor, o que caracteriza a função emotiva ou expressiva.',
    triTip:
      'Um mesmo texto pode ter várias funções; a questão pede a PREDOMINANTE. Em textos líricos em primeira pessoa, emotiva e poética costumam disputar — decida pelo foco: o eu ou a forma.'
  },
  {
    ...base,
    id: 'lin-20',
    topic: 'Funções da linguagem — função metalinguística',
    difficulty: 'Média',
    question:
      'Leia o trecho:\n\n"Crase é a fusão de duas vogais idênticas. No português, refere-se especificamente ao encontro da preposição \'a\' com o artigo feminino \'a\', marcado pelo acento grave."\n\nA função da linguagem predominante é:',
    options: [
      { letter: 'A', text: 'metalinguística, pois a linguagem é usada para explicar a própria linguagem.' },
      { letter: 'B', text: 'poética, pois há trabalho estético sobre a forma da mensagem.' },
      { letter: 'C', text: 'emotiva, pois expressa a subjetividade de quem escreve.' },
      { letter: 'D', text: 'fática, pois busca verificar se o canal está aberto.' },
      { letter: 'E', text: 'conativa, pois pretende alterar o comportamento do leitor.' }
    ],
    correctLetter: 'A',
    explanation:
      'O texto usa a língua para descrever um fenômeno da própria língua — definição de metalinguagem. Dicionários, gramáticas e o "making of" de um filme são exemplos do mesmo mecanismo em códigos diferentes.',
    triTip:
      'Metalinguagem é o código falando de si: dicionário define palavras, gramática explica regras, filme sobre cinema, poema sobre o ato de escrever.'
  },
  {
    ...base,
    id: 'lin-21',
    topic: 'Funções da linguagem — função fática',
    difficulty: 'Média',
    question:
      'Em uma ligação telefônica com sinal instável, um dos interlocutores repete: "Alô? Tá me ouvindo? Alô?". A função da linguagem predominante nessas falas é:',
    options: [
      { letter: 'A', text: 'referencial, por transmitir informação nova.' },
      { letter: 'B', text: 'poética, por explorar a sonoridade das palavras.' },
      { letter: 'C', text: 'emotiva, por revelar a irritação do falante.' },
      { letter: 'D', text: 'metalinguística, por comentar as regras da conversa telefônica.' },
      { letter: 'E', text: 'fática, por testar e tentar manter aberto o canal de comunicação.' }
    ],
    correctLetter: 'E',
    explanation:
      'As falas não transmitem conteúdo novo: servem para verificar se o contato permanece estabelecido. Esse foco no canal é a definição da função fática.',
    triTip:
      'Função fática aparece em cumprimentos, em "né?", "entendeu?" e em qualquer teste de canal. O conteúdo importa menos que a manutenção do contato.'
  },

  // ================================================================ FIGURAS DE LINGUAGEM (4)
  {
    ...base,
    id: 'lin-22',
    topic: 'Figuras de linguagem — metáfora',
    difficulty: 'Média',
    question:
      'Leia a frase: "Aquele escritório era um formigueiro nas vésperas do fechamento do balanço."\n\nA figura de linguagem empregada é:',
    options: [
      { letter: 'A', text: 'Comparação, por aproximar dois termos com conectivo explícito.' },
      { letter: 'B', text: 'Eufemismo, por suavizar uma expressão desagradável.' },
      { letter: 'C', text: 'Metáfora, por identificar o escritório a um formigueiro sem conectivo comparativo.' },
      { letter: 'D', text: 'Onomatopeia, por reproduzir sons do ambiente descrito.' },
      { letter: 'E', text: 'Pleonasmo, por repetir desnecessariamente uma ideia.' }
    ],
    correctLetter: 'C',
    explanation:
      'A frase afirma que o escritório ERA um formigueiro, sem "como" ou equivalente. Essa comparação implícita, fundada na semelhança de agitação e movimento, é a metáfora.',
    triTip:
      'A presença do conectivo decide: "era como um formigueiro" é comparação, "era um formigueiro" é metáfora. É a distinção mais cobrada entre figuras.'
  },
  {
    ...base,
    id: 'lin-23',
    topic: 'Figuras de linguagem — metonímia',
    difficulty: 'Média',
    question:
      'Leia a frase: "Naquela noite, a plateia inteira aplaudiu de pé; o teatro ovacionou o elenco por dez minutos."\n\nO emprego de "o teatro" para designar o público presente configura:',
    options: [
      { letter: 'A', text: 'Hipérbole' },
      { letter: 'B', text: 'Metonímia, pela substituição do conteúdo pelo continente.' },
      { letter: 'C', text: 'Prosopopeia' },
      { letter: 'D', text: 'Antítese' },
      { letter: 'E', text: 'Ironia' }
    ],
    correctLetter: 'B',
    explanation:
      'A metonímia substitui um termo por outro com o qual mantém relação de contiguidade. Aqui, o lugar (teatro) designa quem nele está (o público) — o mesmo mecanismo de "li Machado" pela obra do autor.',
    triTip:
      'Metáfora se apoia em SEMELHANÇA; metonímia, em PROXIMIDADE real: autor pela obra, marca pelo produto, lugar pelos ocupantes, parte pelo todo.'
  },
  {
    ...base,
    id: 'lin-24',
    topic: 'Figuras de linguagem — hipérbole',
    difficulty: 'Fácil',
    question:
      'Leia a frase: "Esperei essa resposta por mil anos."\n\nO exagero intencional empregado para intensificar a expressão caracteriza:',
    options: [
      { letter: 'A', text: 'Eufemismo' },
      { letter: 'B', text: 'Metonímia' },
      { letter: 'C', text: 'Antítese' },
      { letter: 'D', text: 'Personificação' },
      { letter: 'E', text: 'Hipérbole' }
    ],
    correctLetter: 'E',
    explanation:
      'A hipérbole amplifica deliberadamente a realidade para produzir ênfase. Ninguém espera literalmente mil anos: o exagero traduz a impaciência.',
    triTip:
      'Hipérbole exagera; eufemismo suaviza. São figuras opostas e o ENEM costuma colocá-las juntas nas alternativas para testar se você as distingue.'
  },
  {
    ...base,
    id: 'lin-25',
    topic: 'Figuras de linguagem — antítese',
    difficulty: 'Média',
    question:
      'Leia os versos: "Na mesma rua onde nasce o silêncio / é que a cidade mais grita."\n\nO recurso expressivo predominante é:',
    options: [
      { letter: 'A', text: 'Antítese, pela aproximação de ideias opostas (silêncio e grito).' },
      { letter: 'B', text: 'Aliteração, pela repetição de consoantes idênticas.' },
      { letter: 'C', text: 'Sinestesia, pelo cruzamento de sensações de sentidos diferentes.' },
      { letter: 'D', text: 'Anacoluto, pela quebra da estrutura sintática.' },
      { letter: 'E', text: 'Catacrese, pelo uso de termo impróprio por falta de palavra específica.' }
    ],
    correctLetter: 'A',
    explanation:
      'Silêncio e grito são ideias opostas colocadas lado a lado no mesmo espaço da rua. A antítese aproxima contrários; quando a contradição se torna insolúvel na mesma expressão, tem-se o paradoxo.',
    triTip:
      'Antítese opõe termos contrários; paradoxo cria contradição lógica aparentemente impossível, como "amor é fogo que arde sem se ver". A diferença é de grau.'
  },

  // ================================================================ LITERATURA (8)
  {
    ...base,
    id: 'lin-26',
    topic: 'Literatura — Romantismo',
    difficulty: 'Média',
    question:
      'Leia os versos de Gonçalves Dias, publicados em 1843:\n\n"Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá."\n\nOs versos expressam duas marcas centrais da primeira geração romântica brasileira:',
    options: [
      { letter: 'A', text: 'o pessimismo existencial e o culto à morte.' },
      { letter: 'B', text: 'a objetividade científica e o determinismo social.' },
      { letter: 'C', text: 'a crítica irônica às instituições e o narrador digressivo.' },
      { letter: 'D', text: 'o nacionalismo ufanista e o sentimento de saudade da terra natal.' },
      { letter: 'E', text: 'o rigor formal parnasiano e a impassibilidade do eu lírico.' }
    ],
    correctLetter: 'D',
    explanation:
      'A exaltação da natureza brasileira como superior à estrangeira e a saudade de quem escreve longe da pátria definem o indianismo-nacionalista da primeira geração romântica. Escrito em Coimbra, o poema é o exemplo mais citado dessa fase.',
    triTip:
      'Guarde as três gerações românticas: a primeira é nacionalista e indianista, a segunda é ultrarromântica e pessimista (mal do século), a terceira é condoreira e social (Castro Alves).'
  },
  {
    ...base,
    id: 'lin-27',
    topic: 'Literatura — Realismo',
    difficulty: 'Média',
    question:
      'Em "Memórias Póstumas de Brás Cubas", o narrador anuncia já nas primeiras páginas que escreve depois de morto e dedica o livro "ao verme que primeiro roeu as frias carnes do meu cadáver". Esse procedimento evidencia:',
    options: [
      { letter: 'A', text: 'a idealização romântica do herói e o final edificante.' },
      {
        letter: 'B',
        text: 'a ironia e a liberdade do narrador machadiano, que rompe convenções narrativas e observa a sociedade com distanciamento crítico.'
      },
      { letter: 'C', text: 'a adesão do autor ao determinismo científico do Naturalismo.' },
      { letter: 'D', text: 'a valorização da natureza brasileira como tema central da obra.' },
      { letter: 'E', text: 'o compromisso com a linguagem coloquial das camadas populares.' }
    ],
    correctLetter: 'B',
    explanation:
      'O narrador defunto permite a Machado escapar das conveniências sociais e analisar com ironia a elite do Segundo Reinado. O humor corrosivo e a digressão constante marcam a ruptura com o idealismo romântico.',
    triTip:
      'Machado é o autor mais cobrado da prova. Associe-o sempre a ironia, análise psicológica e crítica social — nunca a idealização ou a determinismo naturalista.'
  },
  {
    ...base,
    id: 'lin-28',
    topic: 'Literatura — Parnasianismo',
    difficulty: 'Difícil',
    question:
      'Um poema apresenta métrica rigorosamente regular, rimas ricas, vocabulário preciosista e tema inspirado na mitologia clássica, com o eu lírico ausente de qualquer confissão pessoal. Essas características correspondem ao:',
    options: [
      { letter: 'A', text: 'Romantismo, pelo subjetivismo e pela idealização amorosa.' },
      { letter: 'B', text: 'Simbolismo, pela musicalidade e pelo misticismo.' },
      {
        letter: 'C',
        text: 'Parnasianismo, pelo culto à forma, pela impassibilidade e pelo ideal da "arte pela arte".'
      },
      { letter: 'D', text: 'Modernismo, pelo verso livre e pela linguagem coloquial.' },
      { letter: 'E', text: 'Barroco, pelo conflito entre fé e razão e pelo uso de antíteses.' }
    ],
    correctLetter: 'C',
    explanation:
      'Rigor métrico, rima rica, vocabulário raro, temas greco-latinos e contenção emocional são o programa parnasiano, sintetizado no lema "arte pela arte". Olavo Bilac é seu principal nome no Brasil.',
    triTip:
      'Parnasianismo é forma perfeita e emoção contida; Simbolismo é musicalidade e sugestão. Os dois são contemporâneos e o ENEM os contrasta com frequência.'
  },
  {
    ...base,
    id: 'lin-29',
    topic: 'Literatura — Simbolismo',
    difficulty: 'Difícil',
    question:
      'O Simbolismo brasileiro, cujo principal representante é Cruz e Sousa, caracteriza-se por:',
    options: [
      {
        letter: 'A',
        text: 'musicalidade obtida por aliterações e assonâncias, linguagem sugestiva e sinestésica, e interesse pelo místico e pelo subconsciente.'
      },
      { letter: 'B', text: 'reprodução objetiva da realidade social por meio de observação documental.' },
      { letter: 'C', text: 'defesa explícita de programas políticos por meio da poesia panfletária.' },
      { letter: 'D', text: 'adoção do verso livre e recusa de qualquer musicalidade.' },
      { letter: 'E', text: 'compromisso com a clareza denotativa e a precisão científica da linguagem.' }
    ],
    correctLetter: 'A',
    explanation:
      'O Simbolismo prefere sugerir a nomear, explorando o som das palavras, a sinestesia e temas ligados ao transcendente e ao inconsciente, em oposição à objetividade realista e ao rigor descritivo parnasiano.',
    triTip:
      'Simbolismo: sugerir em vez de nomear, som em vez de descrição, mistério em vez de objetividade. As três oposições resolvem a maioria das questões da escola.'
  },
  {
    ...base,
    id: 'lin-30',
    topic: 'Literatura — Modernismo, primeira fase',
    difficulty: 'Média',
    question:
      'Leia o poema "Pronominais", de Oswald de Andrade, publicado em 1925:\n\n"Dê-me um cigarro\nDiz a gramática\nDo professor e do aluno\nE do mulato sabido\nMas o bom negro e o bom branco\nDa Nação Brasileira\nDizem todos os dias\nDeixa disso camarada\nMe dá um cigarro"\n\nO poema defende:',
    options: [
      { letter: 'A', text: 'a superioridade da norma gramatical lusitana sobre o uso brasileiro.' },
      { letter: 'B', text: 'o retorno ao rigor formal parnasiano na poesia nacional.' },
      { letter: 'C', text: 'a neutralidade do poeta diante das disputas sobre a língua.' },
      { letter: 'D', text: 'o abandono da poesia em favor do ensaio linguístico.' },
      {
        letter: 'E',
        text: 'a legitimidade da fala brasileira cotidiana como matéria poética, contra a imposição da norma prescritiva.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'Oswald contrapõe a prescrição gramatical ("dê-me") ao uso real brasileiro ("me dá"), afirmando este último como legítimo e poético. É a face linguística da ruptura modernista de 1922.',
    triTip:
      'A primeira fase modernista é iconoclasta: verso livre, humor, linguagem coloquial e valorização do brasileiro. Oswald e Mário são os nomes centrais.'
  },
  {
    ...base,
    id: 'lin-31',
    topic: 'Literatura — Modernismo, segunda fase',
    difficulty: 'Média',
    question:
      'A chamada geração de 30, no romance brasileiro, reúne obras que retratam a seca nordestina, o ciclo da cana, a migração forçada e a exploração do trabalhador rural, com linguagem sóbria e forte denúncia social. Essa produção é conhecida como:',
    options: [
      { letter: 'A', text: 'Poesia concreta' },
      { letter: 'B', text: 'Romance urbano psicológico' },
      { letter: 'C', text: 'Romance regionalista de 30, ou romance social nordestino' },
      { letter: 'D', text: 'Literatura de cordel tradicional' },
      { letter: 'E', text: 'Teatro de revista' }
    ],
    correctLetter: 'C',
    explanation:
      'A segunda fase modernista consolidou o romance regionalista de denúncia, com autores como Graciliano Ramos, Rachel de Queiroz e Jorge Amado, voltados aos dramas sociais do Nordeste.',
    triTip:
      'Modernismo em três fases: 1922 rompe, 1930 denuncia socialmente, 1945 recupera o rigor formal. Situar a obra na fase certa resolve boa parte das questões de Literatura.'
  },
  {
    ...base,
    id: 'lin-32',
    topic: 'Literatura — Barroco',
    difficulty: 'Difícil',
    question:
      'A poesia barroca brasileira do século XVII caracteriza-se pela tensão entre o apego aos prazeres terrenos e a aspiração espiritual, expressa por meio de construções que aproximam termos opostos. Esse conflito é conhecido como:',
    options: [
      { letter: 'A', text: 'bucolismo pastoril, próprio da vida campestre idealizada.' },
      { letter: 'B', text: 'impassibilidade formal, marca do culto à forma.' },
      { letter: 'C', text: 'objetivismo documental, próprio da observação científica.' },
      {
        letter: 'D',
        text: 'dualismo barroco, entre o terreno e o divino, o corpo e a alma, expresso por antíteses e paradoxos.'
      },
      { letter: 'E', text: 'coloquialismo irreverente, próprio da ruptura modernista.' }
    ],
    correctLetter: 'D',
    explanation:
      'O Barroco reflete a tensão da Contrarreforma: o homem dividido entre pecado e salvação. Antítese, paradoxo e hipérbato são os recursos que encenam formalmente esse conflito, como na obra de Gregório de Matos.',
    triTip:
      'Barroco é conflito e contraste; Arcadismo é equilíbrio e simplicidade pastoril. As duas escolas são vizinhas no tempo e opostas na atitude — o ENEM as compara.'
  },
  {
    ...base,
    id: 'lin-33',
    topic: 'Literatura — Arcadismo',
    difficulty: 'Média',
    question:
      'O Arcadismo, difundido no século XVIII, propõe a fuga da agitação urbana rumo à simplicidade da vida no campo, sintetizada em lemas como "fugere urbem" e "carpe diem". Essa proposta reflete:',
    options: [
      { letter: 'A', text: 'a exaltação do progresso industrial e da vida nas grandes cidades.' },
      {
        letter: 'B',
        text: 'os ideais neoclássicos de equilíbrio, clareza e retorno à natureza, em reação aos excessos do Barroco.'
      },
      { letter: 'C', text: 'o pessimismo existencial e a obsessão pela morte.' },
      { letter: 'D', text: 'a defesa da experimentação formal e do verso livre.' },
      { letter: 'E', text: 'o compromisso com a denúncia das desigualdades do campo brasileiro.' }
    ],
    correctLetter: 'B',
    explanation:
      'Alinhado ao Iluminismo, o Arcadismo busca clareza, equilíbrio e natureza idealizada, em oposição direta ao rebuscamento e ao conflito barrocos. O pastor é a persona típica desse universo.',
    triTip:
      'Memorize os lemas árcades: fugere urbem (fugir da cidade), locus amoenus (lugar ameno), carpe diem (aproveitar o dia), inutilia truncat (cortar o inútil).'
  },

  // ================================================================ GÊNEROS TEXTUAIS (4)
  {
    ...base,
    id: 'lin-34',
    topic: 'Gêneros textuais — gêneros digitais',
    difficulty: 'Fácil',
    question:
      'Uma imagem amplamente compartilhada nas redes associa uma legenda humorística a uma cena reconhecível, sendo constantemente recriada por outros usuários com novas legendas. Esse gênero digital é denominado:',
    options: [
      { letter: 'A', text: 'Meme' },
      { letter: 'B', text: 'Editorial' },
      { letter: 'C', text: 'Verbete enciclopédico' },
      { letter: 'D', text: 'Ata de reunião' },
      { letter: 'E', text: 'Artigo científico' }
    ],
    correctLetter: 'A',
    explanation:
      'O meme caracteriza-se pela circulação rápida, pela associação entre imagem e texto e, sobretudo, pela recriação coletiva: cada usuário adapta o modelo a novos contextos.',
    triTip:
      'Gêneros digitais têm características próprias: multimodalidade, recriação coletiva e circulação veloz. O ENEM os trata com a mesma seriedade que gêneros tradicionais.'
  },
  {
    ...base,
    id: 'lin-35',
    topic: 'Gêneros textuais — resumo e resenha',
    difficulty: 'Média',
    question:
      'Um estudante escreveu dois textos sobre o mesmo livro. No primeiro, condensou objetivamente o enredo e as ideias principais. No segundo, além de apresentar a obra, avaliou sua qualidade e recomendou a leitura. Os gêneros produzidos são, respectivamente:',
    options: [
      { letter: 'A', text: 'Editorial e crônica' },
      { letter: 'B', text: 'Resenha e resumo' },
      { letter: 'C', text: 'Resumo e resenha crítica' },
      { letter: 'D', text: 'Fichamento e ata' },
      { letter: 'E', text: 'Ensaio e relatório técnico' }
    ],
    correctLetter: 'C',
    explanation:
      'O resumo apenas condensa o conteúdo, sem avaliação. A resenha crítica acrescenta julgamento fundamentado e recomendação — é essa avaliação que distingue os dois gêneros.',
    triTip:
      'A pergunta-chave é se há JUÍZO DE VALOR. Sem avaliação, é resumo; com avaliação argumentada, é resenha crítica.'
  },
  {
    ...base,
    id: 'lin-36',
    topic: 'Gêneros textuais — editorial',
    difficulty: 'Média',
    question:
      'Um texto publicado em jornal, sem assinatura individual, defende posição sobre a política de transporte público da cidade e expressa o entendimento da instituição jornalística sobre o tema. Trata-se de:',
    options: [
      { letter: 'A', text: 'notícia, por relatar fatos com imparcialidade.' },
      { letter: 'B', text: 'reportagem investigativa, por aprofundar a apuração.' },
      { letter: 'C', text: 'carta do leitor, por expressar opinião de um assinante.' },
      { letter: 'D', text: 'crônica, por partir de observação cotidiana com tom literário.' },
      { letter: 'E', text: 'editorial, por manifestar a opinião institucional do veículo, sem assinatura individual.' }
    ],
    correctLetter: 'E',
    explanation:
      'O editorial expressa a posição do veículo, e não de um autor específico — daí a ausência de assinatura. Distingue-se do artigo de opinião, que é assinado e apresenta a visão pessoal de quem escreve.',
    triTip:
      'Sem assinatura e com opinião é editorial (voz do jornal); com assinatura e com opinião é artigo (voz do autor); sem opinião é notícia.'
  },
  {
    ...base,
    id: 'lin-37',
    topic: 'Gêneros textuais — verbete',
    difficulty: 'Fácil',
    question:
      'Leia o texto:\n\n"cordel (s.m.) 1. Barbante fino. 2. Literatura popular em versos, impressa em folhetos e tradicionalmente exposta pendurada em cordas, típica do Nordeste brasileiro."\n\nO gênero textual identificado é:',
    options: [
      { letter: 'A', text: 'Poema narrativo' },
      { letter: 'B', text: 'Verbete de dicionário' },
      { letter: 'C', text: 'Manchete jornalística' },
      { letter: 'D', text: 'Depoimento pessoal' },
      { letter: 'E', text: 'Anúncio classificado' }
    ],
    correctLetter: 'B',
    explanation:
      'A estrutura com entrada, classe gramatical abreviada e acepções numeradas é característica do verbete de dicionário, texto de função metalinguística.',
    triTip:
      'Verbete é metalinguagem pura: a língua definindo a própria língua. Reconhecer a estrutura entrada + classe + acepções resolve a questão sem ler o conteúdo.'
  },

  // ================================================================ COESÃO E COERÊNCIA (4)
  {
    ...base,
    id: 'lin-38',
    topic: 'Coesão — conectivo de oposição',
    difficulty: 'Média',
    question:
      'Leia o período:\n\n"A cidade ampliou em 40% a frota de ônibus no último ano; _______, o tempo médio de espera nos pontos permaneceu praticamente inalterado."\n\nO conectivo que preenche adequadamente a lacuna, considerando a relação entre as orações, é:',
    options: [
      { letter: 'A', text: 'portanto' },
      { letter: 'B', text: 'porque' },
      { letter: 'C', text: 'assim' },
      { letter: 'D', text: 'no entanto' },
      { letter: 'E', text: 'a fim de que' }
    ],
    correctLetter: 'D',
    explanation:
      'Ampliar a frota deveria reduzir a espera; como isso não ocorreu, a segunda oração contraria a expectativa criada pela primeira. A relação é de oposição, expressa por "no entanto", "contudo" ou "todavia".',
    triTip:
      'Para escolher o conectivo, pergunte o que a segunda oração faz com a primeira: confirma (portanto), explica (porque), contraria (no entanto) ou indica finalidade (a fim de que).'
  },
  {
    ...base,
    id: 'lin-39',
    topic: 'Coesão — conectivo conclusivo',
    difficulty: 'Média',
    question:
      'Leia o período:\n\n"Os dados apontam queda consistente na cobertura vacinal em todas as regiões nos últimos cinco anos; _______, o risco de retorno de doenças já controladas aumenta."\n\nO conectivo adequado para a lacuna é:',
    options: [
      { letter: 'A', text: 'portanto' },
      { letter: 'B', text: 'embora' },
      { letter: 'C', text: 'apesar disso' },
      { letter: 'D', text: 'por outro lado' },
      { letter: 'E', text: 'ainda que' }
    ],
    correctLetter: 'A',
    explanation:
      'A segunda oração apresenta a consequência lógica da primeira: menos cobertura vacinal implica maior risco de retorno de doenças. A relação é conclusiva, marcada por "portanto", "logo" ou "por conseguinte".',
    triTip:
      'Conectivos conclusivos são aliados diretos da Competência 4 da Redação. Domine ao menos três de cada tipo: conclusão, oposição, adição e explicação.'
  },
  {
    ...base,
    id: 'lin-40',
    topic: 'Coesão — referenciação',
    difficulty: 'Difícil',
    question:
      'Leia o trecho:\n\n"A Amazônia concentra a maior biodiversidade do planeta. Essa riqueza, porém, vem sendo reduzida pelo desmatamento acelerado."\n\nA expressão "essa riqueza" desempenha no texto a função de:',
    options: [
      { letter: 'A', text: 'introduzir informação inteiramente nova, sem ligação com o período anterior.' },
      { letter: 'B', text: 'antecipar um termo que só será apresentado nas linhas seguintes.' },
      {
        letter: 'C',
        text: 'retomar por coesão referencial a ideia já expressa — a maior biodiversidade do planeta —, evitando repetição.'
      },
      { letter: 'D', text: 'estabelecer oposição entre dois elementos distintos do texto.' },
      { letter: 'E', text: 'marcar mudança de assunto entre os dois períodos.' }
    ],
    correctLetter: 'C',
    explanation:
      'A expressão retoma anaforicamente o conteúdo do período anterior, garantindo a progressão textual sem repetir os mesmos termos. É um caso de coesão referencial por anáfora.',
    triTip:
      'Anáfora retoma o que já foi dito; catáfora antecipa o que virá. Na Redação, variar os termos de retomada é o que evita a repetição penalizada na Competência 4.'
  },
  {
    ...base,
    id: 'lin-41',
    topic: 'Coerência — contradição interna',
    difficulty: 'Média',
    question:
      'Leia o trecho de uma redação escolar:\n\n"O transporte público da cidade é excelente e atende plenamente à população. Por isso, é urgente ampliar a frota, construir novos terminais e rever todas as linhas, que hoje deixam bairros inteiros sem atendimento."\n\nO problema textual identificado é:',
    options: [
      { letter: 'A', text: 'ausência de conectivos entre as orações.' },
      {
        letter: 'B',
        text: 'quebra de coerência, pois a segunda parte contradiz a avaliação positiva feita na primeira.'
      },
      { letter: 'C', text: 'uso inadequado da norma-padrão quanto à concordância verbal.' },
      { letter: 'D', text: 'repetição excessiva de termos ao longo do parágrafo.' },
      { letter: 'E', text: 'emprego incorreto da pontuação entre os períodos.' }
    ],
    correctLetter: 'B',
    explanation:
      'Afirmar que o sistema atende plenamente e, em seguida, listar falhas graves cria contradição interna. A coesão até funciona — o conectivo "por isso" está presente —, mas a coerência se rompe.',
    triTip:
      'Coesão é a amarração entre as partes; coerência é o sentido do conjunto. Um texto pode estar bem amarrado e ainda assim não fazer sentido, que é exatamente o caso aqui.'
  },

  // ================================================================ ARTES, CULTURA E CORPO (4)
  {
    ...base,
    id: 'lin-42',
    topic: 'Cultura — patrimônio imaterial',
    difficulty: 'Média',
    question:
      'O samba de roda do Recôncavo Baiano, o frevo e o ofício das baianas de acarajé são reconhecidos oficialmente como patrimônio cultural do Brasil. Esses bens integram a categoria de patrimônio:',
    options: [
      { letter: 'A', text: 'natural, por se relacionarem a ecossistemas protegidos.' },
      { letter: 'B', text: 'edificado, por envolverem construções históricas tombadas.' },
      { letter: 'C', text: 'arqueológico, por dependerem de escavações e sítios.' },
      { letter: 'D', text: 'paisagístico, por dizerem respeito à configuração do território.' },
      {
        letter: 'E',
        text: 'imaterial, por consistirem em saberes, práticas e expressões transmitidos entre gerações.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'O patrimônio imaterial abrange saberes, celebrações, formas de expressão e lugares de prática cultural. Diferente do material, ele não se preserva por tombamento de objeto, mas pelo apoio à continuidade da prática viva.',
    triTip:
      'Patrimônio material se tomba; imaterial se registra e se mantém vivo pela transmissão. Excelente repertório para redações sobre cultura e identidade.'
  },
  {
    ...base,
    id: 'lin-43',
    topic: 'Artes — antropofagia cultural',
    difficulty: 'Difícil',
    question:
      'O Manifesto Antropófago, de 1928, propõe que a cultura brasileira "devore" as influências estrangeiras, digerindo-as e transformando-as em algo próprio, em vez de simplesmente copiá-las. Essa proposta significa:',
    options: [
      { letter: 'A', text: 'a rejeição total de qualquer influência cultural externa.' },
      { letter: 'B', text: 'a reprodução fiel dos modelos artísticos europeus.' },
      { letter: 'C', text: 'o isolamento da produção artística brasileira do circuito internacional.' },
      {
        letter: 'D',
        text: 'a apropriação crítica e criativa do que vem de fora, transformando-o a partir da realidade brasileira.'
      },
      { letter: 'E', text: 'o abandono das tradições indígenas e africanas na formação cultural do país.' }
    ],
    correctLetter: 'D',
    explanation:
      'A antropofagia oswaldiana não é recusa nem cópia: é deglutição. O ritual indígena vira metáfora de absorver o estrangeiro e devolvê-lo transformado em criação própria — postura que marca a cultura brasileira até hoje.',
    triTip:
      'Antropofagia cultural explica Tropicália, MPB e boa parte da produção brasileira contemporânea. Repertório forte para redações sobre identidade e globalização cultural.'
  },
  {
    ...base,
    id: 'lin-44',
    topic: 'Corporeidade — esporte e inclusão',
    difficulty: 'Fácil',
    question:
      'Modalidades como o goalball, praticado por atletas com deficiência visual, e o vôlei sentado exigem adaptação de regras, equipamentos e espaços. A existência dessas modalidades evidencia que:',
    options: [
      {
        letter: 'A',
        text: 'a prática esportiva pode ser adaptada para garantir participação, reconhecendo a diversidade dos corpos.'
      },
      { letter: 'B', text: 'apenas atletas de alto rendimento sem deficiência devem praticar esportes coletivos.' },
      { letter: 'C', text: 'as adaptações descaracterizam a natureza competitiva do esporte.' },
      { letter: 'D', text: 'o esporte adaptado tem finalidade exclusivamente terapêutica, sem dimensão competitiva.' },
      { letter: 'E', text: 'a inclusão esportiva depende da eliminação de todas as regras formais.' }
    ],
    correctLetter: 'A',
    explanation:
      'O esporte adaptado mantém regras, competitividade e alto rendimento, ajustando as condições de prática. Ele afirma que a barreira está no ambiente e nas regras, não no corpo do atleta.',
    triTip:
      'Em questões de Educação Física, o ENEM cobra a perspectiva inclusiva: o problema está nas barreiras do ambiente, não na limitação do indivíduo.'
  },
  {
    ...base,
    id: 'lin-45',
    topic: 'Cultura — diversidade e apropriação',
    difficulty: 'Média',
    question:
      'O uso de elementos de culturas tradicionais como adereços de moda, desvinculados de seu significado original e sem reconhecimento das comunidades de origem, tem sido discutido sob o conceito de:',
    options: [
      { letter: 'A', text: 'intercâmbio cultural equitativo' },
      { letter: 'B', text: 'preservação patrimonial ativa' },
      { letter: 'C', text: 'apropriação cultural' },
      { letter: 'D', text: 'aculturação recíproca' },
      { letter: 'E', text: 'difusão espontânea de traços culturais' }
    ],
    correctLetter: 'C',
    explanation:
      'A apropriação cultural ocorre quando elementos de um grupo historicamente subalternizado são retirados de contexto e explorados por grupos dominantes, sem reconhecimento nem contrapartida às comunidades de origem.',
    triTip:
      'A discussão gira em torno de contexto, poder e reconhecimento: há assimetria entre quem toma e quem é tomado? Essa pergunta separa apropriação de intercâmbio.'
  },

  // ================================================================ SEMÂNTICA (3)
  {
    ...base,
    id: 'lin-46',
    topic: 'Semântica — denotação e conotação',
    difficulty: 'Média',
    question:
      'Compare os empregos da palavra "porta" nas frases:\n\nI. "A porta da sala precisa de pintura."\nII. "Aquele curso foi a porta que ele precisava."\n\nSobre esses empregos, é correto afirmar que:',
    options: [
      { letter: 'A', text: 'ambos são denotativos, pois a palavra mantém seu sentido literal nas duas frases.' },
      {
        letter: 'B',
        text: 'o primeiro é denotativo, com sentido literal, e o segundo é conotativo, com sentido figurado de oportunidade.'
      },
      { letter: 'C', text: 'ambos são conotativos, pois a palavra é sempre metafórica.' },
      { letter: 'D', text: 'o primeiro é conotativo e o segundo, denotativo.' },
      { letter: 'E', text: 'não há diferença de sentido entre os dois empregos.' }
    ],
    correctLetter: 'B',
    explanation:
      'Na primeira frase, "porta" designa o objeto físico — sentido denotativo. Na segunda, designa oportunidade de passagem para outra condição de vida — sentido conotativo, construído pelo contexto.',
    triTip:
      'Denotação é o sentido do dicionário; conotação é o sentido que o contexto acrescenta. Textos literários e publicitários exploram a conotação; textos técnicos buscam a denotação.'
  },
  {
    ...base,
    id: 'lin-47',
    topic: 'Semântica — ambiguidade',
    difficulty: 'Difícil',
    question:
      'Leia a manchete: "Motorista atropela pedestre na calçada com o celular na mão."\n\nO problema de construção presente nessa manchete é:',
    options: [
      { letter: 'A', text: 'a repetição desnecessária de termos ao longo da frase.' },
      { letter: 'B', text: 'o uso incorreto da concordância verbal entre sujeito e predicado.' },
      { letter: 'C', text: 'a ausência de vírgula obrigatória entre sujeito e verbo.' },
      { letter: 'D', text: 'o emprego de gíria inadequada ao gênero jornalístico.' },
      {
        letter: 'E',
        text: 'a ambiguidade, pois não fica claro quem estava com o celular na mão — o motorista ou o pedestre.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'A posição do adjunto no fim do período permite duas leituras igualmente possíveis. Reescrever como "Motorista com o celular na mão atropela pedestre na calçada" elimina a ambiguidade.',
    triTip:
      'Ambiguidade costuma nascer da ORDEM das palavras, e não de erro gramatical. Aproximar o modificador do termo que ele modifica resolve — dica valiosa também para a Redação.'
  },
  {
    ...base,
    id: 'lin-48',
    topic: 'Semântica — polissemia',
    difficulty: 'Média',
    question:
      'Observe os empregos do verbo "pegar": "pegar o ônibus", "pegar um resfriado", "pegar bem na entrevista", "pegar fogo". O fenômeno linguístico ilustrado por esses usos é:',
    options: [
      { letter: 'A', text: 'homonímia, pois são palavras diferentes com grafia coincidente.' },
      { letter: 'B', text: 'sinonímia, pois todos os empregos têm o mesmo sentido.' },
      { letter: 'C', text: 'antonímia, pois os sentidos se opõem entre si.' },
      {
        letter: 'D',
        text: 'polissemia, pois uma mesma palavra assume sentidos distintos e relacionados conforme o contexto.'
      },
      { letter: 'E', text: 'paronímia, pois são palavras parecidas na forma e distintas no sentido.' }
    ],
    correctLetter: 'D',
    explanation:
      'Trata-se de uma única palavra cujos múltiplos sentidos se relacionam e são determinados pelo contexto — definição de polissemia. Na homonímia, as palavras têm origens distintas e apenas coincidem na forma, como "manga" (fruta) e "manga" (da camisa).',
    triTip:
      'Polissemia é uma palavra com vários sentidos relacionados; homonímia são palavras diferentes que coincidem na forma. A pista é se os sentidos guardam parentesco entre si.'
  },

  // ================================================================ LOTE 2 (lin-49 a lin-72)
  // ---- Interpretação de texto (6)
  {
    ...base,
    id: 'lin-49',
    topic: 'Interpretação — humor em tirinha',
    difficulty: 'Fácil',
    question:
      'Observe a descrição de uma tirinha: "No primeiro quadro, um estudante diz: Vou estudar a noite toda para a prova. No último quadro, o mesmo estudante aparece dormindo sobre o livro fechado, com o despertador tocando ao fundo."\n\nO efeito de humor da tirinha resulta:',
    options: [
      { letter: 'A', text: 'do contraste entre a intenção declarada no início e o resultado mostrado no final.' },
      { letter: 'B', text: 'da repetição de uma mesma imagem em todos os quadros.' },
      { letter: 'C', text: 'do uso de vocabulário técnico incompreensível ao leitor.' },
      { letter: 'D', text: 'da ausência total de qualquer personagem na tirinha.' },
      { letter: 'E', text: 'da explicação detalhada do processo de estudo do personagem.' }
    ],
    correctLetter: 'A',
    explanation:
      'O humor nasce do contraste entre a promessa ("estudar a noite toda") e o desfecho (dormir sobre o livro) — recurso comum em tirinhas, que condensam uma situação cotidiana reconhecível em poucos quadros.',
    triTip:
      'Tirinhas de humor quase sempre exploram a virada inesperada entre o que o personagem planeja e o que realmente acontece — procure esse contraste antes de mais nada.'
  },
  {
    ...base,
    id: 'lin-50',
    topic: 'Interpretação — sátira em post de rede social',
    difficulty: 'Média',
    question:
      'Leia a publicação: "Aviso à população: a partir de hoje, reclamar do trânsito será considerado esporte olímpico nacional. Medalhistas receberão... mais trânsito."\n\nO texto utiliza o humor para:',
    options: [
      { letter: 'A', text: 'anunciar oficialmente uma nova modalidade esportiva.' },
      { letter: 'B', text: 'informar tecnicamente sobre regras de competições olímpicas.' },
      { letter: 'C', text: 'elogiar a eficiência do sistema de trânsito da cidade.' },
      {
        letter: 'D',
        text: 'criticar, por meio da ironia, a naturalização da reclamação sobre um problema urbano crônico sem solução à vista.'
      },
      { letter: 'E', text: 'convocar atletas profissionais para uma nova seleção nacional.' }
    ],
    correctLetter: 'D',
    explanation:
      'Ao tratar como "esporte" algo que é, na verdade, uma frustração cotidiana, o texto ironiza a naturalização do problema do trânsito e a sensação de que reclamar não muda nada — a "premiação" (mais trânsito) reforça esse tom crítico.',
    triTip:
      'Humor em redes sociais frequentemente veste uma crítica social de absurdo ou exagero proposital — separe o que é dito literalmente do que está sendo criticado por trás.'
  },
  {
    ...base,
    id: 'lin-51',
    topic: 'Interpretação — propaganda de saúde pública',
    difficulty: 'Fácil',
    question:
      'Leia o texto de uma campanha: "Lave as mãos. É simples, é grátis, e pode salvar vidas."\n\nA estrutura do texto, ao encadear três qualidades da ação recomendada, tem como efeito:',
    options: [
      { letter: 'A', text: 'reforçar a adesão à prática, mostrando que ela é acessível, sem custo e de grande importância.' },
      { letter: 'B', text: 'desestimular a adesão à prática higiênica recomendada.' },
      { letter: 'C', text: 'complicar desnecessariamente uma orientação simples.' },
      { letter: 'D', text: 'transferir a responsabilidade da ação para o governo.' },
      { letter: 'E', text: 'diminuir a importância da higiene das mãos.' }
    ],
    correctLetter: 'A',
    explanation:
      'A enumeração ("simples", "grátis", "pode salvar vidas") constrói uma progressão que remove barreiras (custo, dificuldade) e culmina no argumento mais forte (vidas salvas), reforçando a adesão à recomendação.',
    triTip:
      'Em campanhas de saúde pública, observe a ordem dos argumentos — geralmente crescem em importância, deixando o apelo mais forte por último.'
  },
  {
    ...base,
    id: 'lin-52',
    topic: 'Interpretação — estratégia retórica em discurso',
    difficulty: 'Difícil',
    question:
      'Leia o trecho de um discurso: "Não estou aqui para prometer um caminho fácil. Estou aqui para dizer que o caminho certo raramente é fácil, mas é o único que nos leva a algum lugar que valha a pena chegar."\n\nA estratégia argumentativa do orador consiste em:',
    options: [
      { letter: 'A', text: 'evitar qualquer compromisso com propostas futuras.' },
      { letter: 'B', text: 'desqualificar as propostas de adversários políticos sem citá-los.' },
      { letter: 'C', text: 'negar completamente que exista qualquer dificuldade no caminho proposto.' },
      { letter: 'D', text: 'transferir toda a responsabilidade pelo esforço ao público ouvinte.' },
      {
        letter: 'E',
        text: 'admitir a dificuldade do que propõe para, em seguida, valorizá-la como sinal de que a proposta é séria e legítima.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'O orador reconhece a dificuldade ("raramente é fácil") não para desanimar, mas para transformar esse reconhecimento em argumento de credibilidade — sugere que o difícil é justamente o que tem valor, contrapondo-se a promessas fáceis e vazias.',
    triTip:
      'Em discursos políticos, admitir uma dificuldade antes de defender uma proposta costuma ser estratégia retórica para parecer mais honesto e crível, não uma fraqueza argumentativa.'
  },
  {
    ...base,
    id: 'lin-53',
    topic: 'Interpretação — avaliação em resenha',
    difficulty: 'Difícil',
    question:
      'Leia o trecho de uma resenha: "O filme não economiza em efeitos visuais grandiosos. Pena que, entre uma explosão e outra, esqueceram de escrever diálogos que alguém realmente diria."\n\nA avaliação do autor sobre o filme é:',
    options: [
      { letter: 'A', text: 'totalmente positiva, elogiando tanto os efeitos quanto os diálogos.' },
      { letter: 'B', text: 'totalmente negativa, sem reconhecer qualquer qualidade na obra.' },
      { letter: 'C', text: 'mista, reconhecendo qualidade técnica visual, mas criticando a artificialidade dos diálogos.' },
      { letter: 'D', text: 'neutra, limitando-se a descrever o filme sem qualquer juízo de valor.' },
      { letter: 'E', text: 'elogiosa aos diálogos e crítica aos efeitos visuais.' }
    ],
    correctLetter: 'C',
    explanation:
      'O autor reconhece o investimento em efeitos visuais ("não economiza"), mas usa ironia ("pena que... esqueceram") para criticar a qualidade dos diálogos, numa avaliação mista típica da resenha crítica.',
    triTip:
      'Em resenhas, a crítica nem sempre vem de forma direta — expressões como "pena que" e "por outro lado" costumam introduzir a ressalva que revela a real avaliação do autor.'
  },
  {
    ...base,
    id: 'lin-54',
    topic: 'Interpretação — linguagem regulamentar',
    difficulty: 'Fácil',
    question:
      'Leia o trecho de um regulamento: "É vedado o ingresso de acompanhantes após o início da prova, salvo em casos de comprovada necessidade, mediante autorização prévia da coordenação."\n\nO trecho estabelece uma regra:',
    options: [
      { letter: 'A', text: 'absoluta, sem qualquer exceção possível.' },
      { letter: 'B', text: 'geral, mas que admite exceção mediante condição específica e autorização prévia.' },
      { letter: 'C', text: 'que se aplica exclusivamente aos candidatos, nunca aos acompanhantes.' },
      { letter: 'D', text: 'que permite ingresso irrestrito a qualquer momento da prova.' },
      { letter: 'E', text: 'que independe de qualquer autorização da coordenação.' }
    ],
    correctLetter: 'B',
    explanation:
      'A expressão "salvo" introduz uma exceção à regra geral, condicionada a dois requisitos: necessidade comprovada e autorização prévia. Não é uma proibição absoluta, mas também não é uma permissão livre.',
    triTip:
      'Em textos regulamentares, palavras como "salvo", "exceto" e "ressalvado o disposto em" sinalizam exceções à regra geral — sempre leia a condição completa antes de concluir se algo é proibido ou permitido.'
  },

  // ---- Literatura (4)
  {
    ...base,
    id: 'lin-55',
    topic: 'Literatura — Geração de 45 e Poesia Concreta',
    difficulty: 'Difícil',
    question:
      'A Geração de 45 e, posteriormente, o movimento da Poesia Concreta retomaram, em certa medida, a preocupação com o rigor formal e a construção da linguagem, em resposta ao que consideravam excessos coloquiais das fases anteriores do Modernismo. A poesia concreta, especificamente, é conhecida por:',
    options: [
      { letter: 'A', text: 'explorar a disposição espacial das palavras na página como elemento constitutivo do sentido do poema.' },
      { letter: 'B', text: 'rejeitar completamente qualquer inovação visual ou gráfica no poema.' },
      { letter: 'C', text: 'retomar rigidamente o soneto camoniano como única forma válida.' },
      { letter: 'D', text: 'abandonar por completo qualquer preocupação com a forma do texto.' },
      { letter: 'E', text: 'restringir-se exclusivamente a temas religiosos e místicos.' }
    ],
    correctLetter: 'A',
    explanation:
      'A poesia concreta, com nomes como os irmãos Campos, explora a disposição gráfica das palavras — tamanho, posição, espaço em branco — como parte do significado do poema, unindo forma visual e conteúdo verbal.',
    triTip:
      'Enquanto a primeira fase modernista rompe com a forma em nome da liberdade, a Geração de 45 e o Concretismo retomam um cuidado formal, ainda que de maneiras muito diferentes entre si.'
  },
  {
    ...base,
    id: 'lin-56',
    topic: 'Literatura — literatura brasileira contemporânea',
    difficulty: 'Média',
    question:
      'A literatura brasileira contemporânea tem se caracterizado pela ampliação de vozes narrativas antes marginalizadas do cânone literário, incluindo autoras negras, escritores de periferia e narrativas indígenas. Essa ampliação reflete:',
    options: [
      { letter: 'A', text: 'o desaparecimento de qualquer critério de qualidade literária.' },
      { letter: 'B', text: 'a exclusão definitiva dos autores consagrados do cânone tradicional.' },
      { letter: 'C', text: 'o fim da produção literária em língua portuguesa no Brasil.' },
      {
        letter: 'D',
        text: 'a diversificação de perspectivas sociais representadas na literatura, ampliando quem pode narrar e sobre o quê.'
      },
      { letter: 'E', text: 'o retorno aos padrões estéticos do Parnasianismo.' }
    ],
    correctLetter: 'D',
    explanation:
      'A literatura contemporânea tem incorporado vozes historicamente sub-representadas, ampliando o repertório de experiências, linguagens e perspectivas sociais narradas, sem que isso signifique exclusão do cânone anterior.',
    triTip:
      'Literatura marginal e autoria negra contemporânea (Conceição Evaristo, Carolina de Jesus, entre outros) são repertório atual e frequentemente citado — vale conhecer ao menos um nome e sua relevância.'
  },
  {
    ...base,
    id: 'lin-57',
    topic: 'Literatura — Trovadorismo',
    difficulty: 'Média',
    question:
      'As cantigas de amor e de amigo, produzidas na Península Ibérica entre os séculos XII e XIV, são a manifestação literária mais antiga em língua portuguesa. As cantigas de amor caracterizam-se por:',
    options: [
      { letter: 'A', text: 'um eu lírico feminino que lamenta a ausência do amado.' },
      { letter: 'B', text: 'temática exclusivamente religiosa e litúrgica.' },
      { letter: 'C', text: 'crítica social direta às autoridades da corte.' },
      { letter: 'D', text: 'narrativas longas em prosa sobre feitos heroicos.' },
      { letter: 'E', text: 'um eu lírico masculino que expressa sofrimento amoroso por uma dama idealizada e inacessível.' }
    ],
    correctLetter: 'E',
    explanation:
      'Nas cantigas de amor, o eu lírico é masculino e sofre de amor por uma dama idealizada, geralmente inatingível — nas cantigas de amigo, é o eu lírico feminino que lamenta a ausência do amado, em estrutura invertida.',
    triTip:
      'Não confunda cantiga de amor (eu lírico masculino, dama idealizada) com cantiga de amigo (eu lírico feminino, lamenta o amado ausente) — a inversão de vozes é o que mais se cobra.'
  },
  {
    ...base,
    id: 'lin-58',
    topic: 'Literatura — Quinhentismo',
    difficulty: 'Fácil',
    question:
      'A Carta de Pero Vaz de Caminha, escrita em 1500 para informar o rei de Portugal sobre a chegada à nova terra, é considerada o marco inicial da literatura no Brasil. Esse texto é classificado como literatura:',
    options: [
      { letter: 'A', text: 'Barroca, pelo conflito entre fé e razão.' },
      { letter: 'B', text: 'de Informação, por descrever a terra e seus habitantes com finalidade documental e administrativa.' },
      { letter: 'C', text: 'Romântica, pela idealização sentimental da paisagem.' },
      { letter: 'D', text: 'Modernista, pela linguagem coloquial experimental.' },
      { letter: 'E', text: 'Simbolista, pela musicalidade e sugestão.' }
    ],
    correctLetter: 'B',
    explanation:
      'A Carta integra a chamada "literatura de informação" do período Quinhentista, com finalidade prática de relatar ao rei as características da terra, da fauna, da flora e dos povos indígenas encontrados.',
    triTip:
      'O Quinhentismo brasileiro se divide em literatura de informação (cartas e relatos, como a de Caminha) e literatura de catequese (textos jesuíticos, como os de Padre Anchieta).'
  },

  // ---- Variação linguística (2)
  {
    ...base,
    id: 'lin-59',
    topic: 'Variação linguística — jargão profissional',
    difficulty: 'Fácil',
    question:
      'Termos como "deletar", "debugar" e "commitar" são de uso corrente entre profissionais de tecnologia, mas pouco compreendidos fora desse grupo. Esse tipo de variação linguística, associada a um grupo profissional específico, é chamada de:',
    options: [
      { letter: 'A', text: 'Jargão (variação social ligada a um grupo profissional)' },
      { letter: 'B', text: 'Variação diatópica (regional)' },
      { letter: 'C', text: 'Variação diacrônica (histórica)' },
      { letter: 'D', text: 'Norma-padrão' },
      { letter: 'E', text: 'Ortografia oficial' }
    ],
    correctLetter: 'A',
    explanation:
      'O jargão é uma variedade lexical própria de determinado grupo profissional ou técnico, que facilita a comunicação entre seus membros, mas pode dificultar a compreensão para quem está fora do grupo.',
    triTip:
      'Jargão é um tipo de variação social (diastrática) ligada especificamente à atividade profissional — médicos, advogados e programadores têm jargões próprios.'
  },
  {
    ...base,
    id: 'lin-60',
    topic: 'Variação linguística — estrangeirismo',
    difficulty: 'Média',
    question:
      'O uso crescente de palavras como "delivery", "freelancer" e "home office" no português falado no Brasil é um exemplo do fenômeno linguístico denominado:',
    options: [
      { letter: 'A', text: 'Arcaísmo' },
      { letter: 'B', text: 'Neologismo por composição vernácula' },
      { letter: 'C', text: 'Estrangeirismo (ou empréstimo linguístico)' },
      { letter: 'D', text: 'Regionalismo' },
      { letter: 'E', text: 'Hipercorreção' }
    ],
    correctLetter: 'C',
    explanation:
      'Estrangeirismos são palavras ou expressões de outras línguas incorporadas ao vocabulário corrente, refletindo contatos culturais, comerciais e tecnológicos entre os povos — fenômeno tão antigo quanto a própria língua portuguesa, que já incorporou termos árabes, africanos e indígenas.',
    triTip:
      'Nem todo estrangeirismo é recente: "álcool" (árabe), "abacaxi" (tupi) e "sanduíche" (inglês) mostram que o português sempre incorporou palavras de outras línguas.'
  },

  // ---- Funções da linguagem (2)
  {
    ...base,
    id: 'lin-61',
    topic: 'Funções da linguagem — função poética',
    difficulty: 'Média',
    question:
      'Leia o slogan de uma campanha de reciclagem: "Recicle e recrie: o lixo de hoje, a matéria-prima de amanhã."\n\nO jogo sonoro entre "recicle" e "recrie", somado à construção paralela da segunda parte da frase, evidencia a função da linguagem:',
    options: [
      { letter: 'A', text: 'referencial, centrada exclusivamente na informação técnica sobre reciclagem.' },
      { letter: 'B', text: 'fática, voltada para testar o canal de comunicação.' },
      { letter: 'C', text: 'poética, centrada na elaboração formal e sonora da própria mensagem.' },
      { letter: 'D', text: 'metalinguística, por explicar o significado da palavra reciclagem.' },
      { letter: 'E', text: 'emotiva, por expressar o sentimento pessoal de quem escreve.' }
    ],
    correctLetter: 'C',
    explanation:
      'A semelhança sonora entre "recicle" e "recrie", além do paralelismo estrutural ("o lixo de hoje, a matéria-prima de amanhã"), evidencia um trabalho estético sobre a forma da mensagem — marca da função poética, presente também fora da poesia, como em slogans e propagandas.',
    triTip:
      'Função poética não é exclusiva de poemas — qualquer texto que trabalhe deliberadamente o som, o ritmo ou a estrutura da frase para causar efeito está explorando essa função.'
  },
  {
    ...base,
    id: 'lin-62',
    topic: 'Funções da linguagem — função referencial',
    difficulty: 'Fácil',
    question:
      'Leia o trecho: "O Instituto Brasileiro de Geografia e Estatística (IBGE) informou que a população brasileira ultrapassou 203 milhões de habitantes no último censo."\n\nA função da linguagem predominante nesse texto é:',
    options: [
      { letter: 'A', text: 'Conativa, por tentar convencer o leitor de algo.' },
      { letter: 'B', text: 'Fática, por testar o canal de comunicação.' },
      { letter: 'C', text: 'Poética, por explorar recursos estéticos da linguagem.' },
      { letter: 'D', text: 'Referencial, por transmitir informação objetiva sobre a realidade.' },
      { letter: 'E', text: 'Emotiva, por expressar sentimentos do autor.' }
    ],
    correctLetter: 'D',
    explanation:
      'O texto apresenta dados objetivos, sem opinião ou apelo, com foco no contexto e na informação em si — característica central da função referencial, predominante em notícias e textos informativos.',
    triTip:
      'Função referencial é a "linguagem dos fatos": predomina em notícias, relatórios e verbetes técnicos, sempre com foco no contexto, não no emissor ou no receptor.'
  },

  // ---- Figuras de linguagem (2)
  {
    ...base,
    id: 'lin-63',
    topic: 'Figuras de linguagem — eufemismo',
    difficulty: 'Fácil',
    question:
      'Ao comunicar o falecimento de um funcionário, uma empresa publicou a nota: "Lamentamos informar que nosso colega partiu para um lugar melhor."\n\nA expressão "partiu para um lugar melhor", usada para suavizar a notícia da morte, é um exemplo de:',
    options: [
      { letter: 'A', text: 'Eufemismo' },
      { letter: 'B', text: 'Hipérbole' },
      { letter: 'C', text: 'Metonímia' },
      { letter: 'D', text: 'Antítese' },
      { letter: 'E', text: 'Prosopopeia' }
    ],
    correctLetter: 'A',
    explanation:
      'O eufemismo substitui uma expressão desagradável ou dolorosa (como "morreu") por outra mais suave ("partiu para um lugar melhor"), atenuando o impacto emocional da informação.',
    triTip:
      'Eufemismo suaviza; hipérbole exagera. Frases sobre morte, doença ou demissão são o terreno mais comum para o uso do eufemismo.'
  },
  {
    ...base,
    id: 'lin-64',
    topic: 'Figuras de linguagem — ironia',
    difficulty: 'Difícil',
    question:
      'Ao ver um colega chegar duas horas atrasado a uma reunião importante, alguém comenta: "Que pontualidade admirável a sua!"\n\nO recurso expressivo empregado nessa fala é:',
    options: [
      { letter: 'A', text: 'Hipérbole, pelo exagero da qualidade elogiada.' },
      { letter: 'B', text: 'Eufemismo, pela suavização de uma crítica.' },
      { letter: 'C', text: 'Ironia, pela afirmação de sentido contrário ao que realmente se pretende comunicar.' },
      { letter: 'D', text: 'Comparação, pela aproximação de dois termos com conectivo.' },
      { letter: 'E', text: 'Catacrese, pelo uso impróprio de uma palavra por falta de termo específico.' }
    ],
    correctLetter: 'C',
    explanation:
      'Ao elogiar exatamente a qualidade que faltou (pontualidade, num atraso de duas horas), o falante comunica o oposto do que diz literalmente — mecanismo central da ironia, que depende do contexto para ser compreendida.',
    triTip:
      'Ironia se identifica pelo contexto que contradiz o sentido literal da frase. Sem esse contexto, a mesma frase seria apenas um elogio sincero.'
  },

  // ---- Gêneros textuais (2)
  {
    ...base,
    id: 'lin-65',
    topic: 'Gêneros textuais — reportagem investigativa',
    difficulty: 'Média',
    question:
      'Um veículo de imprensa publica, após meses de apuração com documentos obtidos via Lei de Acesso à Informação e entrevistas com múltiplas fontes, um texto extenso que revela um esquema de desvio de recursos públicos. Esse gênero jornalístico é classificado como:',
    options: [
      { letter: 'A', text: 'Nota' },
      { letter: 'B', text: 'Editorial' },
      { letter: 'C', text: 'Reportagem investigativa' },
      { letter: 'D', text: 'Carta do leitor' },
      { letter: 'E', text: 'Classificado' }
    ],
    correctLetter: 'C',
    explanation:
      'A reportagem investigativa se distingue pela apuração aprofundada, uso de múltiplas fontes e documentos, e pela extensão maior que a notícia comum, com o objetivo de revelar fatos não evidentes ou deliberadamente ocultados.',
    triTip:
      'Diferencie notícia (relato rápido e factual), reportagem (aprofundamento de um tema) e reportagem investigativa (apuração extensa, muitas vezes reveladora de irregularidades).'
  },
  {
    ...base,
    id: 'lin-66',
    topic: 'Gêneros textuais — roteiro de podcast',
    difficulty: 'Fácil',
    question:
      'Um roteiro de podcast indica pausas para efeitos sonoros, marca a entrada de trilha musical entre os blocos e organiza falas divididas entre dois apresentadores. Esse tipo de texto, que orienta uma produção sonora, é um gênero:',
    options: [
      { letter: 'A', text: 'estritamente escrito, sem qualquer relação com a oralidade.' },
      { letter: 'B', text: 'jurídico, por seguir formato regulamentar.' },
      { letter: 'C', text: 'exclusivamente visual, sem qualquer componente textual.' },
      { letter: 'D', text: 'multimodal, pois articula elementos verbais e sonoros na produção do sentido final.' },
      { letter: 'E', text: 'poético, por seguir estritamente a métrica de versos.' }
    ],
    correctLetter: 'D',
    explanation:
      'O roteiro de podcast é um gênero multimodal: combina texto escrito (o roteiro em si) com elementos sonoros (música, efeitos, fala) que juntos constroem o sentido da produção final, ouvida pelo público.',
    triTip:
      'Gêneros multimodais combinam mais de uma linguagem (verbal, sonora, visual) na construção do sentido — memes, podcasts e vídeos são exemplos típicos cobrados pelo ENEM.'
  },

  // ---- Coesão e coerência (2)
  {
    ...base,
    id: 'lin-67',
    topic: 'Coesão — conectivo de finalidade',
    difficulty: 'Média',
    question:
      'Leia o período: "O município investiu em iluminação pública em LED _______ reduzir o consumo de energia elétrica e os custos de manutenção."\n\nO conectivo que preenche adequadamente a lacuna, considerando a relação de finalidade entre as orações, é:',
    options: [
      { letter: 'A', text: 'porque' },
      { letter: 'B', text: 'portanto' },
      { letter: 'C', text: 'no entanto' },
      { letter: 'D', text: 'a fim de' },
      { letter: 'E', text: 'apesar de' }
    ],
    correctLetter: 'D',
    explanation:
      'A segunda oração expressa o OBJETIVO do investimento, não sua causa nem sua consequência. "A fim de" (ou "para que", "com o objetivo de") é o conectivo que marca relação de finalidade.',
    triTip:
      'Não confunda causa (porque, já que — o motivo que já existia) com finalidade (a fim de, para que — o objetivo que se pretende alcançar).'
  },
  {
    ...base,
    id: 'lin-68',
    topic: 'Coerência — progressão temática',
    difficulty: 'Difícil',
    question:
      'Leia o parágrafo de uma redação: "A educação é fundamental para o desenvolvimento do país. A educação também é essencial para o crescimento das nações. Sem educação, não há progresso educacional em uma sociedade."\n\nO principal problema desse parágrafo é:',
    options: [
      { letter: 'A', text: 'o uso incorreto da concordância nominal entre os termos.' },
      { letter: 'B', text: 'a ausência de progressão temática: as frases repetem a mesma ideia sem acrescentar informação nova.' },
      { letter: 'C', text: 'o emprego de vocabulário excessivamente técnico e inacessível.' },
      { letter: 'D', text: 'a falta de pontuação entre os períodos do parágrafo.' },
      { letter: 'E', text: 'o uso inadequado de figuras de linguagem.' }
    ],
    correctLetter: 'B',
    explanation:
      'As três frases giram em torno da mesma afirmação, sem avançar o raciocínio com dados, exemplos ou desdobramentos — o parágrafo estaciona no lugar em vez de progredir, o que compromete a coerência e é penalizado na Competência 3 da Redação.',
    triTip:
      'Cada frase de um parágrafo argumentativo deve acrescentar algo novo — um dado, uma causa, uma consequência. Repetir a mesma ideia com outras palavras não é desenvolvimento, é estagnação textual.'
  },

  // ---- Artes, cultura e corpo (2)
  {
    ...base,
    id: 'lin-69',
    topic: 'Artes — Música Popular Brasileira',
    difficulty: 'Média',
    question:
      'A Música Popular Brasileira (MPB), consolidada como categoria a partir da década de 1960, caracteriza-se por incorporar elementos de diferentes tradições musicais brasileiras — samba, bossa nova, ritmos regionais — associados a letras de conteúdo poético e, frequentemente, crítico-social. Essa produção é relevante culturalmente porque:',
    options: [
      { letter: 'A', text: 'rejeita completamente qualquer influência de ritmos regionais brasileiros.' },
      { letter: 'B', text: 'foi incentivada oficialmente pelo governo militar como forma de propaganda.' },
      { letter: 'C', text: 'restringe-se a temas amorosos, sem qualquer diálogo com o contexto histórico.' },
      { letter: 'D', text: 'surgiu isolada de qualquer diálogo com outras artes, como o cinema e a literatura.' },
      {
        letter: 'E',
        text: 'articula identidade nacional, experimentação estética e, em muitos casos, crítica política, sobretudo durante a ditadura militar.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'A MPB, com nomes como Chico Buarque, Caetano Veloso e Elis Regina, uniu inovação estética à crítica social e política, muitas vezes usando metáforas para driblar a censura da ditadura militar — sendo perseguida pelo regime, e não incentivada por ele.',
    triTip:
      'Música censurada durante a ditadura (Chico Buarque, Caetano Veloso exilado) é repertório forte para redações sobre liberdade de expressão e resistência cultural.'
  },
  {
    ...base,
    id: 'lin-70',
    topic: 'Artes — cinema nacional e retratos sociais',
    difficulty: 'Fácil',
    question:
      'Filmes brasileiros que retratam a realidade das periferias urbanas, a violência e as desigualdades sociais, como parte de um movimento que ficou conhecido como Cinema de Retomada (a partir da década de 1990), têm como principal característica:',
    options: [
      { letter: 'A', text: 'evitar qualquer relação entre a arte cinematográfica e a realidade social brasileira.' },
      { letter: 'B', text: 'evitar totalmente a participação de atores não profissionais.' },
      { letter: 'C', text: 'restringir-se a temas de fantasia e ficção científica, sem qualquer conexão com o Brasil real.' },
      { letter: 'D', text: 'reproduzir exclusivamente padrões estéticos de produções internacionais, sem características nacionais.' },
      {
        letter: 'E',
        text: 'usar a linguagem audiovisual para dar visibilidade a realidades sociais frequentemente invisibilizadas nos meios de comunicação tradicionais.'
      }
    ],
    correctLetter: 'E',
    explanation:
      'Filmes como "Cidade de Deus" e "Central do Brasil" usam a linguagem cinematográfica para expor realidades sociais brasileiras muitas vezes marginalizadas pela mídia tradicional, dando visibilidade a periferias, desigualdade e violência urbana.',
    triTip:
      'Cinema, assim como a MPB e a literatura marginal, é repertório de "arte como denúncia social" — útil para redações sobre desigualdade, visibilidade e representatividade.'
  },

  // ---- Semântica (2)
  {
    ...base,
    id: 'lin-71',
    topic: 'Semântica — sinonímia',
    difficulty: 'Fácil',
    question:
      'Nas frases "O projeto foi aprovado com rapidez" e "O projeto foi aprovado com celeridade", as palavras "rapidez" e "celeridade" mantêm entre si uma relação de:',
    options: [
      { letter: 'A', text: 'Antonímia' },
      { letter: 'B', text: 'Sinonímia' },
      { letter: 'C', text: 'Homonímia' },
      { letter: 'D', text: 'Paronímia' },
      { letter: 'E', text: 'Polissemia' }
    ],
    correctLetter: 'B',
    explanation:
      '"Rapidez" e "celeridade" têm sentidos equivalentes no contexto — são sinônimos, palavras diferentes que expressam significados muito próximos.',
    triTip:
      'Sinônimos raramente são idênticos em TODOS os contextos, mas nesse caso específico as duas palavras são intercambiáveis sem alterar o sentido da frase.'
  },
  {
    ...base,
    id: 'lin-72',
    topic: 'Semântica — paráfrase e plágio',
    difficulty: 'Difícil',
    question:
      'Um estudante reproduz um trecho de um livro trocando algumas palavras por sinônimos e alterando levemente a ordem das frases, mas mantendo a estrutura e as ideias originais praticamente intactas, sem citar a fonte. Essa prática é caracterizada como:',
    options: [
      { letter: 'A', text: 'Paráfrase legítima, uma vez que houve reformulação das palavras.' },
      {
        letter: 'B',
        text: 'Plágio, pois apresenta como próprias ideias e estrutura de outro autor, mesmo com alterações superficiais, sem dar crédito à fonte.'
      },
      { letter: 'C', text: 'Citação direta, por reproduzir fielmente o texto original entre aspas.' },
      { letter: 'D', text: 'Resenha crítica, por incluir avaliação pessoal do conteúdo.' },
      { letter: 'E', text: 'Domínio público, pois qualquer texto pode ser livremente reaproveitado sem citação.' }
    ],
    correctLetter: 'B',
    explanation:
      'Trocar palavras por sinônimos sem alterar a estrutura das ideias e sem citar a fonte configura plágio, mesmo que o texto não seja copiado palavra por palavra. A paráfrase legítima também exige a indicação da fonte original.',
    triTip:
      'Reformular um texto não autoriza omitir a fonte. A diferença entre paráfrase e plágio não está apenas nas palavras trocadas, mas na citação (ou omissão) de quem escreveu a ideia original.'
  }
];
