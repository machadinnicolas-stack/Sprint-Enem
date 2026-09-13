// Termos de Uso e Política de Privacidade do Sprint ENEM.
//
// PREENCHA OS CAMPOS DE OPERADOR ABAIXO ANTES DE PUBLICAR. A LGPD (art. 9º e 41)
// exige que o titular saiba quem controla seus dados e como falar com essa
// pessoa; documento sem identificação do controlador não cumpre esse requisito.
export const OPERADOR = {
  nome: '[PREENCHER: nome completo ou razão social]',
  documento: '[PREENCHER: CPF ou CNPJ]',
  emailContato: '[PREENCHER: e-mail de contato e de encarregado de dados]',
  cidadeForo: '[PREENCHER: cidade/UF do foro]',
};

const ATUALIZADO_EM = '13 de setembro de 2026';

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  id: 'termos' | 'privacidade';
  title: string;
  updatedAt: string;
  sections: LegalSection[];
}

export const TERMOS_DE_USO: LegalDocument = {
  id: 'termos',
  title: 'Termos de Uso',
  updatedAt: ATUALIZADO_EM,
  sections: [
    {
      title: '1. Quem oferece o serviço',
      paragraphs: [
        `O Sprint ENEM é operado por ${OPERADOR.nome}, inscrito sob ${OPERADOR.documento}, doravante "nós". O contato para qualquer assunto relacionado a estes Termos é ${OPERADOR.emailContato}.`,
        'Ao criar uma conta e utilizar a plataforma, você declara que leu e concorda com estes Termos e com a Política de Privacidade.',
      ],
    },
    {
      title: '2. O que o Sprint ENEM é — e o que não é',
      paragraphs: [
        'O Sprint ENEM é uma ferramenta digital de organização de estudos. Ele monta cronogramas a partir das informações que você fornece, oferece questões de treino autorais, simulados cronometrados e um espaço de prática de redação com correção assistida por inteligência artificial.',
        'O Sprint ENEM não é curso preparatório, não possui credenciamento junto ao MEC e não tem qualquer vínculo, patrocínio ou endosso do INEP ou do Ministério da Educação. "ENEM" é utilizado apenas em caráter descritivo, para identificar o exame ao qual o material se refere.',
        'Não prometemos, garantimos nem asseguramos aprovação, nota mínima ou qualquer resultado específico no exame. O desempenho depende de fatores que estão fora do nosso controle.',
      ],
    },
    {
      title: '3. Conta, idade e responsável legal',
      paragraphs: [
        'Para usar a plataforma é necessário criar uma conta com um e-mail válido. Você é responsável por manter sua senha em sigilo e por toda atividade realizada na sua conta.',
        'Se você tem menos de 18 anos, o cadastro e a compra devem ser feitos por um dos pais ou pelo responsável legal, ou com a autorização expressa dele. Se você tem menos de 12 anos, o tratamento dos seus dados depende de consentimento específico e destacado de um dos pais ou do responsável, nos termos do art. 14 da LGPD.',
        'Podemos solicitar comprovação dessa autorização e suspender contas quando houver indício de que ela não existe.',
      ],
    },
    {
      title: '4. Compra, acesso e direito de arrependimento',
      paragraphs: [
        'O acesso é vendido em pagamento único, processado pela plataforma Perfect Pay. A liberação ocorre para o e-mail informado na compra — por isso, cadastre-se com o mesmo e-mail utilizado no pagamento.',
        'Você pode desistir da compra em até 7 (sete) dias corridos contados da confirmação do pagamento, com devolução integral do valor, conforme o art. 49 do Código de Defesa do Consumidor. Para exercer esse direito, escreva para ' +
          OPERADOR.emailContato +
          '.',
        'O acesso é pessoal e intransferível. Compartilhar credenciais, revender ou redistribuir o acesso permite o encerramento da conta sem reembolso.',
      ],
    },
    {
      title: '5. Uso do conteúdo',
      paragraphs: [
        'As questões, comentários, temas de redação e demais materiais da plataforma são de nossa autoria e protegidos por direitos autorais. Você pode usá-los para seu estudo pessoal.',
        'Não é permitido copiar, publicar, distribuir, vender ou usar o conteúdo para treinar modelos de inteligência artificial, no todo ou em parte, sem autorização escrita.',
      ],
    },
    {
      title: '6. Correção de redação por inteligência artificial',
      paragraphs: [
        'A correção de redação é gerada por um modelo de inteligência artificial de terceiro (Google Gemini) orientado pelos critérios públicos das cinco competências do INEP. Trata-se de uma estimativa pedagógica destinada a orientar seus estudos.',
        'Essa estimativa não é a nota oficial do ENEM e pode divergir dela. A correção oficial é feita por avaliadores humanos, segundo critérios e processos próprios do INEP.',
        'Há um limite diário de correções por inteligência artificial por conta, para manter o serviço sustentável. Atingido o limite, você continua podendo escrever e recebe uma verificação estrutural automática do texto, sem atribuição de nota.',
      ],
    },
    {
      title: '7. Disponibilidade e alterações',
      paragraphs: [
        'Trabalhamos para manter a plataforma disponível, mas ela pode ficar fora do ar para manutenção ou por falha de serviços de terceiros dos quais dependemos. Não há garantia de disponibilidade ininterrupta.',
        'Podemos alterar, incluir ou remover funcionalidades e conteúdos ao longo do tempo. Mudanças relevantes nestes Termos serão comunicadas na própria plataforma.',
      ],
    },
    {
      title: '8. Encerramento',
      paragraphs: [
        'Você pode encerrar sua conta quando quiser, solicitando por e-mail. Podemos suspender ou encerrar contas que violem estes Termos, em especial no caso de compartilhamento ou revenda de acesso.',
      ],
    },
    {
      title: '9. Lei aplicável e foro',
      paragraphs: [
        `Estes Termos são regidos pela lei brasileira. Fica eleito o foro da comarca de ${OPERADOR.cidadeForo} para dirimir controvérsias, ressalvado o direito do consumidor de demandar no foro de seu domicílio.`,
      ],
    },
  ],
};

export const POLITICA_DE_PRIVACIDADE: LegalDocument = {
  id: 'privacidade',
  title: 'Política de Privacidade',
  updatedAt: ATUALIZADO_EM,
  sections: [
    {
      title: '1. Quem controla seus dados',
      paragraphs: [
        `O controlador dos dados pessoais tratados no Sprint ENEM é ${OPERADOR.nome}, ${OPERADOR.documento}. Para exercer seus direitos ou tirar dúvidas sobre privacidade, escreva para ${OPERADOR.emailContato}, que também é o canal do encarregado pelo tratamento de dados.`,
      ],
    },
    {
      title: '2. Quais dados coletamos',
      paragraphs: [
        'Dados de cadastro: seu endereço de e-mail e sua senha. A senha é armazenada de forma criptografada pelo nosso provedor de autenticação e não temos acesso a ela.',
        'Dados de estudo: as preferências que você informa (curso pretendido, tempo disponível, dias por semana, nível e áreas de dificuldade), o cronograma gerado, os blocos concluídos, respostas de questões e o seu progresso de gamificação.',
        'Textos de redação: o conteúdo que você escreve na Oficina de Redação e envia para correção.',
        'Dados de compra: recebemos da Perfect Pay a confirmação da venda e o e-mail do comprador. Não recebemos, não vemos e não armazenamos dados de cartão de crédito.',
      ],
    },
    {
      title: '3. Para que usamos e com qual base legal',
      paragraphs: [
        'Usamos seus dados para criar e manter sua conta, liberar o acesso comprado, gerar e salvar seu cronograma, registrar seu progresso e corrigir suas redações. A base legal é a execução do contrato firmado com você (art. 7º, V, da LGPD).',
        'Também tratamos dados para cumprir obrigações legais e regulatórias e para prevenir fraude e uso indevido do acesso, com base no cumprimento de obrigação legal e no legítimo interesse (art. 7º, II e IX).',
        'Não vendemos seus dados e não os usamos para publicidade de terceiros.',
      ],
    },
    {
      title: '4. Com quem compartilhamos',
      paragraphs: [
        'Supabase — autenticação e banco de dados: armazena seu e-mail, sua senha criptografada e seus dados de estudo.',
        'Google (Gemini API) — correção de redação: quando você pede a correção, o texto da sua redação e o tema escolhido são enviados ao serviço do Google para gerar o retorno pedagógico. Se preferir não enviar um texto a esse serviço, basta não solicitar a correção.',
        'Vercel — hospedagem da aplicação, com registros técnicos de acesso.',
        'Perfect Pay — processamento do pagamento e confirmação da compra.',
        'Cada um desses fornecedores trata os dados conforme as próprias políticas, e os compartilhamos apenas na medida necessária para o serviço funcionar.',
      ],
    },
    {
      title: '5. Transferência internacional',
      paragraphs: [
        'Os fornecedores acima podem processar e armazenar dados em servidores localizados fora do Brasil. Nesses casos, a transferência ocorre nos termos do art. 33 da LGPD, para permitir a execução do contrato firmado com você.',
      ],
    },
    {
      title: '6. Dados de crianças e adolescentes',
      paragraphs: [
        'O Sprint ENEM se destina a quem está se preparando para o ENEM e é frequentemente utilizado por adolescentes. O tratamento de dados de crianças e adolescentes é feito sempre em seu melhor interesse, conforme o art. 14 da LGPD.',
        'O cadastro de menores de 18 anos deve ser feito por um dos pais ou pelo responsável legal, ou com a autorização expressa dele. Para menores de 12 anos, é necessário consentimento específico e destacado do responsável.',
        'Não pedimos e não queremos receber mais dados do que os descritos nesta política. Se um responsável identificar que uma criança forneceu dados sem a devida autorização, pode solicitar a exclusão pelo e-mail de contato, e faremos isso.',
      ],
    },
    {
      title: '7. Por quanto tempo guardamos',
      paragraphs: [
        'Mantemos seus dados enquanto sua conta existir. Se você pedir a exclusão, apagamos os dados de estudo e a conta, preservando apenas o que a lei exigir que seja mantido — por exemplo, registros fiscais da compra.',
      ],
    },
    {
      title: '8. Seus direitos',
      paragraphs: [
        'A LGPD (art. 18) garante a você o direito de confirmar que tratamos seus dados, acessá-los, corrigir dados incompletos ou desatualizados, solicitar anonimização, bloqueio ou eliminação de dados desnecessários, pedir a portabilidade, revogar consentimento e ser informado sobre com quem compartilhamos seus dados.',
        `Para exercer qualquer desses direitos, escreva para ${OPERADOR.emailContato}. Responderemos no menor prazo possível.`,
        'Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).',
      ],
    },
    {
      title: '9. Segurança',
      paragraphs: [
        'O acesso aos seus dados é restrito à sua própria conta por regras de segurança aplicadas no banco de dados, e o tráfego com a aplicação é criptografado. Nenhum sistema é totalmente imune, mas trabalhamos para reduzir riscos e para corrigir rapidamente qualquer falha identificada.',
      ],
    },
    {
      title: '10. Armazenamento no seu navegador',
      paragraphs: [
        'Usamos o armazenamento local do navegador para manter sua sessão ativa e guardar preferências da interface. Não utilizamos cookies de publicidade nem rastreamento de terceiros para fins de marketing.',
      ],
    },
    {
      title: '11. Mudanças nesta política',
      paragraphs: [
        'Podemos atualizar esta política. Quando a mudança for relevante, avisaremos na plataforma. A data da última atualização está indicada no topo deste documento.',
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS: LegalDocument[] = [TERMOS_DE_USO, POLITICA_DE_PRIVACIDADE];
