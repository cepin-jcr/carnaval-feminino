// Client-side Database & Auth Simulation for Blocos Feministas

// Default mockup news data
const defaultNews = [
  {
    id: "1",
    titulo: "Blocos Feministas Ganham Força no Carnaval 2024",
    resumo: "Movimento de blocos carnavalescos feministas cresce 40% em todo o país, promovendo inclusão e empoderamento.",
    conteudo: "O movimento de blocos carnavalescos feministas tem ganhado cada vez mais força no Brasil nos últimos anos. Liderados por mulheres instrumentistas, cantoras e produtoras, esses blocos ocupam as ruas não apenas com arte e alegria, mas também como plataformas políticas de conscientização e combate à violência de gênero.",
    autor: "Maria Santos",
    data: "2024-01-10",
    categoria: "Movimento",
    imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    blocoRelacionado: "Rosas da Resistência"
  },
  {
    id: "2",
    titulo: "Oficina de Percussão Feminina Forma Nova Geração",
    resumo: "Iniciativa em São Paulo capacita mais de 200 mulheres em técnicas de percussão e empoderamento.",
    conteudo: "A oficina de percussão feminina realizada pelo bloco Rosas da Resistência formou mais uma turma esta semana. O projeto, que acontece semestralmente, oferece aulas gratuitas para mulheres cis e trans de todas as idades, promovendo o protagonismo feminino através dos ritmos tradicionais do carnaval.",
    autor: "Ana Costa",
    data: "2024-01-08",
    categoria: "Educação",
    imagem: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop"
  },
  {
    id: "3",
    titulo: "Mulheres do Frevo Revolucionam Carnaval de Recife",
    resumo: "Bloco pernambucano traz nova perspectiva ao frevo tradicional com coreografias empoderadoras.",
    conteudo: "O bloco Mulheres do Frevo está transformando o cenário carnavalesco de Recife. Unindo passos tradicionais do frevo com discursos sobre emancipação feminina e direitos humanos, o grupo atrai milhares de foliãs na capital pernambucana e expande a atuação para oficinas comunitárias ao longo de todo o ano.",
    autor: "Joana Silva",
    data: "2024-01-05",
    categoria: "Cultura",
    imagem: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    blocoRelacionado: "Mulheres do Frevo"
  },
  {
    id: "4",
    titulo: "Financiamento Coletivo Viabiliza Instrumentos para Blocos",
    resumo: "Campanha arrecada R$ 50 mil para compra de instrumentos musicais para blocos feministas de periferia.",
    conteudo: "Graças a uma campanha de financiamento coletivo de grande sucesso, diversos blocos carnavalescos feministas que atuam em bairros periféricos conseguiram adquirir novos instrumentos de sopro e percussão. A meta superada garante a realização de oficinas e desfiles para mais de 100 novas ritmistas.",
    autor: "Carla Oliveira",
    data: "2024-01-03",
    categoria: "Financiamento",
    imagem: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
  },
  {
    id: "5",
    titulo: "Parceria com Escolas Leva Educação Feminista às Salas de Aula",
    resumo: "Blocos feministas desenvolvem projeto educacional para conscientização de jovens estudantes.",
    conteudo: "Um coletivo formado por líderes de diferentes blocos feministas de São Paulo fechou parceria com escolas públicas para a realização de palestras e oficinas artísticas. O objetivo é usar o carnaval e a música para discutir igualdade de gênero, prevenção à violência e história da mulher na cultura popular brasileira.",
    autor: "Beatriz Lima",
    data: "2023-12-28",
    categoria: "Educação",
    imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop"
  }
];

// Initialize database
// Inlined initial database data
// Inlined initial database data
// Inlined initial database data
const initialDbData = {
  "blocks": [
    {
      "id": "359a0537-97dc-4122-a086-008b1b067ef6",
      "nome": "Bloco Feminista ",
      "descricao": "O bloco surgiu a partir do desejo de ocupar as ruas com arte e lutar por direitos, na reunião de pessoas nas manifestações contra o fascismo no Brasil, em 2021. \r\nSomos um coletivo de ARTIVISTAS. Um coletivo de cultura que tem o carnaval como sua principal manifestação artística e que também faz política e protesto através da arte, buscando conexão com diversos territórios e pessoas.\r\nSomos um bloco comunitário, que realiza ações durante todo o ano: oficinas, apresentações, cortejos carnavalescos e ações culturais como formas de resistência e empoderamento. \r\nSomos um grupo que acredita na potência do coletivo, respeitando a diversidade e individualidade das pessoas. Por isso, nossa perspectiva é de que todes podem tocar e dançar e devem ser respeitades!\r\nNossos cortejos acontecem na Barra Funda desde 2022 e também, no Jardim da União, extremo sul da cidade. Nosso bloco tem cerca de 70 intregranties.",
      "contato": "Telefone: (11)91866-1488 | Email: blocofeminista@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/IMG_7670 - Bloco Feminista.webp",
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Feminismo interseccional e transfeminista ",
      "formacao": "Aberto a todas as pessoas com protagonismo de mulheres trans e cis, travestis, homens trans, pessoas transmasculinas e não binárias",
      "atividades": "|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica",
      "dias": "Sábado e domingo.",
      "imagens": [
        "assets/images/fotos carnaval feminino/_R012128 - Bloco Feminista.webp",
        "assets/images/fotos carnaval feminino/blocofeminista-116 - Bloco Feminista.webp",
        "assets/images/fotos carnaval feminino/Foto de Debora Machado (1) (1) - Bloco Feminista.webp",
        "assets/images/fotos carnaval feminino/IMG_4818 - Bloco Feminista.webp",
        "assets/images/fotos carnaval feminino/IMG_5092 - Bloco Feminista.webp"
      ],
      "videos": [],
      "redesSociais": "Instagram: @blocofeminista | Facebook: Bloco Feminista",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "1f590b6d-5cb9-4a1c-b2c7-9d6a1f226879",
      "nome": "Bloco Sô Fia da Vida",
      "descricao": "Somos um grupo de mulheres e formamos um bloco de carnaval de rua, tocamos samba-enredo autoral, em favor da liberdade, da cultura popular e em combate à violência machista, racista e LGBTfóbica de todos os tipos. O Bloco “Sô Fia da Vida” surgiu no final de 2016, desfilando, pela primeira vez, no carnaval de 2017, com a Bateria Malandra, 100% feminina. Nossas ritmistas, musicistas e compositoras são mulheres diversas de todos os segmentos sociais. Hoje, sem contar a organização, a Bateria Malandra conta com cerca de 25 mulheres de diversas idades, raças, etnias, sexualidades e condições sociais, que são mobilizadas ano a ano para oficinas de instrumentos, concursos de samba-enredo, festas de arrecadação de recursos e oficinas de adereços e fantasias, sem nenhum custo. Anualmente também, desfilamos pelas ruas de São José dos Campos em que todos são convidados a usufruir da manifestação cultural do Carnaval. ",
      "contato": "blocosofiadavida@gmail.com ",
      "foto": "assets/images/fotos carnaval feminino/1767305495746 - Rosa Scaquetti.webp",
      "localLat": -23.1867782,
      "localLng": -45.8854538,
      "cidade": "São José dos Campos",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Resistência ao sexismo e machismo nos espaços culturais",
      "formacao": "Exclusivamente mulheres ",
      "atividades": "|formacao_politica|dialogos|protesto|oficinas|ensaios_aprendizado|ensaios_publico|encontros|venda",
      "dias": "Sexta-feira",
      "imagens": [
        "assets/images/fotos carnaval feminino/1767305495746 - Rosa Scaquetti.webp",
        "assets/images/fotos carnaval feminino/DSC_0241 - Rosa Scaquetti.webp",
        "assets/images/fotos carnaval feminino/IMG-20200221-WA0110 - Rosa Scaquetti.webp",
        "assets/images/fotos carnaval feminino/IMG-20200221-WA0116 - Rosa Scaquetti.webp",
        "assets/images/fotos carnaval feminino/IMG_0974 - Rosa Scaquetti.webp",
        "assets/images/fotos carnaval feminino/IMG_0985 - Rosa Scaquetti.webp",
        "assets/images/fotos carnaval feminino/Screenshot_2026-01-01-19-05-52-438_com.google.android.googlequicksearchbox - Rosa Scaquetti.webp"
      ],
      "videos": [],
      "redesSociais": "@blocosofiadavida",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "893baa8a-acd5-45c2-b81a-bca08892fbfa",
      "nome": "Filhas de Eva no Jardim das Delícias ",
      "descricao": "O nosso bloco acredita no poder da festa e da presença como política afetiva de transformação em relação ao tema do machismo, da invisibilizacao, das violências. O nosso corpo na rua tocando os instrumentos se faz ato político e feminista de maneira poética e contundente. Nosso 8M é feito no cotidiano, no dia a dia com muita dedicação de uma esquipe de produção e do nosso coletivos de instrumentistas. Segundo Halana Faria, nossa percussionista e um importante nome da ginecologia feminista o “filhas de eva é o feminismo na prática”",
      "contato": "(11) 96455-5094",
      "foto": null,
      "localLat": -27.5973002,
      "localLng": -48.5496098,
      "cidade": "Florianópolis ",
      "estado": "SC",
      "endereco": null,
      "vertenteFeminista": "Feminismo na prática através da ocupação do espaço público",
      "formacao": "Coletivo de mulheres instrumentistas ",
      "atividades": "|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos",
      "dias": "Domingo",
      "imagens": [],
      "videos": [],
      "redesSociais": "@eva_figueiredo_  & @filhasdeevafloripa",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "357cc3b2-40a1-4d05-9775-349254dcd35b",
      "nome": "Bloco Cultural Mulheres Brilhantes ",
      "descricao": "O Bloco surgiu a partir de um coletivo de Mulheres Empreendedoras também chamado de Mulheres Brilhantes. Entendemos que as mulheres precisam ter voz nesse espaço tão masculino que é o samba.  E para dar visibilidade a tantas mulheres que atuam nesse segmento,  fundamos o Bloco Mulheres Brilhantes.  Um local onde todas têm voz e espaço. ",
      "contato": "(21) 996-942088 ",
      "foto": "assets/images/fotos carnaval feminino/IMG-20250302-WA0019 - Marcia Rossi.webp",
      "localLat": -22.9110137,
      "localLng": -43.2093727,
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "endereco": null,
      "vertenteFeminista": "A cultura é feita por mulheres feministas ",
      "formacao": "Mulheres",
      "atividades": "|dialogos|protesto|ensaios_aprendizado|ensaios_publico|venda",
      "dias": "Sábado",
      "imagens": [
        "assets/images/fotos carnaval feminino/20240721_145334 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/20240721_151503 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/FB_IMG_1752788444285 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/FB_IMG_1752788453346 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/IMG-20250301-WA0355 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/IMG-20250301-WA0365 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/IMG-20250301-WA0370 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/IMG-20250303-WA0129 - Marcia Rossi.webp",
        "assets/images/fotos carnaval feminino/IMG-20250303-WA0129 - Marcia Rossi(1).webp",
        "assets/images/fotos carnaval feminino/IMG-20250804-WA0073 - Marcia Rossi.webp"
      ],
      "videos": [],
      "redesSociais": "@bloco.mulheresbrilhantes ",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "c9ce7943-bbbb-4a23-a2bf-e579bc30136e",
      "nome": "Não Mexe Comigo que Eu Não Ando Só",
      "descricao": "O Não Mexe surgiu de mulheres que passavam por situações machistas em blocos de carnaval de Porto Alegre. Assim, em 2016, quatro mulheres fizeram uma convocação pelo Facebook e em poucas horas haviam centenas de interessadas. Ele surge como um espaço seguro para que mulheres possam tocar, cantar e performar, e um espaço de luta pela igualdade de gênero e pelo combate à violência contra mulher. Como artivistas, lutamos pela valorização da cultura e dos espaços públicos.\r\nO grupo hoje conta com cerca de 70 mulheres, e outras dezenas que um dia foram ativas na organização e hoje apoiam atividades.\r\nDesde 2016, o Não Mexe realiza ações públicas como cortejos, shows, ensaios abertos, vivências musicais e criativas, oficinas e campanhas digitais, e participa de atos públicos - muitas vezes em parceria com movimentos sociais e espaços da cidade que promovem cultura, arte e luta. O repertório apresenta ritmos brasileiros\r\ncomo samba, coco, ijexá, maracatu, samba-reggae e funk, em músicas majoritariamente compostas por mulheres e/ou com temáticas da luta por igualdade de gênero e combate à violência contra a mulher.\r\nMuito além de batucar, fazer música, executar ritmos, dançar, cantar e \"tocar o terror\", as mulheres deste coletivo querem transformar com a sua arte e a sua presença.",
      "contato": "(51) 99147-6715 | paulinhamoizes@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/Crédito Edi Patzzlaf - Paula S. Moizes.webp",
      "localLat": -30.0324999,
      "localLng": -51.2303767,
      "cidade": "Porto Alegre",
      "estado": "RS",
      "endereco": null,
      "vertenteFeminista": "Combate ao machismo e à violência contra a mulher",
      "formacao": "Exclusivamente mulheres ",
      "atividades": "|venda|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos",
      "dias": "A saída oficial do Não Mexe é no mês de novembro, próximo ao Dia Internacional pela Eliminação da Violência contra as Mulheres. O coletivo não tem saída durante o carnaval.",
      "imagens": [
        "assets/images/fotos carnaval feminino/Crédito Edi Patzzlaf - Paula S. Moizes.webp"
      ],
      "videos": [],
      "redesSociais": "Instagram: @naomexecomigoque | Facebook: https://facebook.com/naomexecomigoqueeunaoandoso/ | YouTube: https://youtube.com/@naomexecomigo",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "814ed0fd-514e-4b9e-b7cf-21519c0c87ea",
      "nome": "Calcinhas Bélicas",
      "descricao": "Calcinhas Bélicas é um coletivo feminino de expressão musical que fez seu primeiro desfile em 2019, e apresenta a luta feminista na sociedade através da música, do carnaval, e da ocupação do espaço público. Sua formação conta com mulheres de diferentes cores, identidades e orientações sexuais, marcando a força da DIVERSIDADE.\r\nO repertório se inspira nessa diversidade e apresenta músicas de forças femininas de diferentes gerações. Desde Cher, Madonna, Shakira, Alcione e Rita Lee, até musas de sucesso da atualidade, como Pabllo Vitar, Glória Groove, Lady Gaga, Katy Perry, e Dua Lipa, se inspirando na força dessas mulheres para materializar sua energia num desfile de carnaval.",
      "contato": "+55 (21) 98346-5775",
      "foto": "assets/images/fotos carnaval feminino/aboutcalcinhasbelicas-213 - Flavia Massa.webp",
      "localLat": -22.9110137,
      "localLng": -43.2093727,
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "endereco": null,
      "vertenteFeminista": "Espaço de acolhimento e segurança para mulheres na música ",
      "formacao": "Mulheres de diferentes cores, identidades e orientações sexuais",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica",
      "dias": "Quarta-feira",
      "imagens": [
        "assets/images/fotos carnaval feminino/BÉLICAS_2024_PâmelaPerez-1 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/BÉLICAS_2024_PâmelaPerez-5 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/FB_IMG_1755861423141 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/FB_IMG_1755861466676 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/IMG_1942 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/IMG_1997 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/IMG_2619 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/IMG_6671 - Flavia Massa.webp",
        "assets/images/fotos carnaval feminino/IMG-20250820-WA0015 - Flavia Massa.webp"
      ],
      "videos": [],
      "redesSociais": "@calcinhasbelicas",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "275fd84d-812d-4803-968b-94ec59d4d170",
      "nome": "Maracatu Baque Mulher/RJ",
      "descricao": "O Baque Mulher é um Movimento de Empoderamento Feminino através da difusão da cultura e das linguagens tradicionais do Maracatu de Baque Virado.\r\nCriado por Mestra Joana Cavalcante, em Recife, e fundado e coordenado no Rio de Janeiro, Niterói e Campo Grande (Zona Oeste do RJ) pela Yabá Tenily Guian desde 2016, tem como fundamento os saberes ancestrais de matriz africana e a valorização da cultura afro-brasileira através do Maracatu.",
      "contato": "tenilysilva@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/IMG_1741 - Tenily Guian.webp",
      "localLat": -22.9110137,
      "localLng": -43.2093727,
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "endereco": null,
      "vertenteFeminista": "Empoderamento feminino e valorização da cultura afro-brasileira",
      "formacao": "Mulheres",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica",
      "dias": "Terça-feira",
      "imagens": [
        "assets/images/fotos carnaval feminino/IMG_1741 - Tenily Guian.webp",
        "assets/images/fotos carnaval feminino/IMG_1742 - Tenily Guian.webp",
        "assets/images/fotos carnaval feminino/IMG_9841 - Tenily Guian.webp"
      ],
      "videos": [],
      "redesSociais": "@baquemulherrj",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "cbea3fcb-9426-4993-be0a-f7fe3436fdd8",
      "nome": "Bloco Siriricando",
      "descricao": "O coletivo Bloco Siriricando é um bloco de carnaval que participa há oito anos do Carnaval de rua da cidade de São Paulo. É também um movimento de resistência, visibilidade lésbica e bissexual e acolhedor à população LGBTQI+. O coletivo busca criar espaços seguros e confortáveis, nos quais esses grupos possam expressar suas identidades e bem viver sua liberdade sexual, por meio da alegria, da diversão e da arte.",
      "contato": "(11) 97176-3601",
      "foto": null,
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Atuação em consonância com os movimentos sociais",
      "formacao": "Mulheres",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos",
      "dias": "Segunda-feira",
      "imagens": [],
      "videos": [],
      "redesSociais": "@blocosiriricando",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "c237966c-c777-4af5-a5be-68c036347edf",
      "nome": "Bloco Saia de Chita",
      "descricao": "O bloco foi criado por um grupo de amigos em 2007 que viajaram pra São Luiz do Paraitinga para pular o Carnaval. Desde então,  esse bloco cresceu, já teve diversos formatos e saiu em diversas cidades. Há alguns anos, sai aos domingos de Carnaval das ruas do bairro da Pompéia, em São Paulo. O lema do bloco é \"tradição, baguncinha e felicidade\". O Saia de Chita se considera um bloco amador amado e amante e o objetivo do bloco é manter os laços de amizade e cuidado entre os participantes, além de defender o acesso democrático à política cultural, na qual o Carnaval se inclui. ",
      "contato": "(11) 98142-6400 | blocosaiadechita@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/DSCF4747 - Marina Graminha.webp",
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Priorização de mulheres em liderança e combate à importunação sexual",
      "formacao": "Mista com a maioria feminina ",
      "atividades": "|dialogos|protesto|ensaios_publico",
      "dias": "Domingo",
      "imagens": [
        "assets/images/fotos carnaval feminino/DSCF0440 - Marina Graminha.webp",
        "assets/images/fotos carnaval feminino/DSCF0528 - Marina Graminha.webp",
        "assets/images/fotos carnaval feminino/DSCF0652 - Marina Graminha.webp",
        "assets/images/fotos carnaval feminino/DSCF9600 - Marina Graminha.webp"
      ],
      "videos": [],
      "redesSociais": "@blocosaiadechita",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "2837795e-bbb7-405f-ab88-017e00e4f8be",
      "nome": "Bloco Dramas de Sapatão",
      "descricao": "O bloco \"Dramas de Sapatão\" nasceu da necessidade de criar um espaço inclusivo \r\ne seguro para mulheres lésbicas, bissexuais, pessoas trans e não binárias. \r\nEssa iniciativa visa permitir que todos expressem sua identidade e celebrem o Carnaval de forma autêntica e livre.\r\nFundado por Dady Veríssimo, o bloco surgiu como uma resposta à carência de representatividade para a comunidade sapatão nos tradicionais blocos de rua. \r\nA ideia era construir um ambiente onde a diversidade não apenas fosse aceita, mas celebrada, promovendo um Carnaval que reflita a riqueza de todas as identidades.\r\nCada integrante traz consigo uma história única, contribuindo para a riqueza e diversidade do bloco. A força coletiva de mulheres, pessoas trans e não binárias se traduz em liberdade e aceitação. \r\nÀ medida que o bloco cresce, sua influência vai além das festividades de Carnaval, inspirando outros eventos inclusivos e promovendo uma mensagem contínua de amor, aceitação e igualdade ao longo do ano.",
      "contato": "(13) 98123-0242 | blocodramasdesapatao@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/@angelicaafotografia-2928 (2) - Aryadnne Veríssimo.webp",
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Espaço seguro para mulheres LBTs e vivências sáficas",
      "formacao": "Mulheres lésbicas, bissexuais, pessoas trans e não binárias ",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto",
      "dias": "Sábado",
      "imagens": [
        "assets/images/fotos carnaval feminino/@angelicaafotografia-2928 (2) - Aryadnne Veríssimo.webp",
        "assets/images/fotos carnaval feminino/@angelicaafotografia-3068 - Aryadnne Veríssimo.webp",
        "assets/images/fotos carnaval feminino/@angelicaafotografia-3537 - Aryadnne Veríssimo.webp"
      ],
      "videos": [
        "assets/images/fotos carnaval feminino/5651c68c-c0c7-4798-b0c7-e9ef55784cb4 - Aryadnne Veríssimo.mp4"
      ],
      "redesSociais": "@blocodramasdesapatao",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "9b5e44db-c922-4715-ad58-11ea3f9b327c",
      "nome": "Bloquete",
      "descricao": "O Bloquete, que significa bloco pequeno, é um bloco de rua sem fins lucrativos, fundado em 2013 na cidade de Vinhedo com o objetivo de manter viva a tradição do carnaval de rua no centro da cidade.\r\nO início de sua trajetória  se deu a partir da vontade de incentivar pessoas a ocupar o espaço público de forma lúdica e, para isso, se utilizou de ritmos populares de Carnaval como forma de apresentar atividades que valorizassem o trabalho coletivo e tornassem possível a expressão artística inerente a cada indivíduo. Busca, com sua proposta artística, discutir e promover ideais de diversidade, incentivando a convivência e respeito às diferenças. Sua postura é política, mesmo que suprapartidária. \r\nSua marca registrada é a distribuição gratuita do pózinho colorido - hipoalergênico e lavável - que colore as ruas após a contagem regressiva.\r\nAo levar cor e diversidade às ruas, o Bloquete.",
      "contato": "(11) 97475-7881 | bloqueteiros@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/Foto Miguel Von Zuben - Bloquete Bloco.webp",
      "localLat": -23.0298535,
      "localLng": -46.9749847,
      "cidade": "Vinhedo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Atuação em consonância com os movimentos sociais",
      "formacao": "Mulheres",
      "atividades": "|venda|dialogos|protesto|oficinas|ensaios_aprendizado|ensaios_publico|encontros",
      "dias": "Domingo e terça-feira",
      "imagens": [
        "assets/images/fotos carnaval feminino/Bloquete - crédito Lu Antônio Fotografia - Bloquete Bloco.webp",
        "assets/images/fotos carnaval feminino/Bloquete 2020 -255 - Bloquete Bloco.webp",
        "assets/images/fotos carnaval feminino/Foto Miguel Von Zuben - Bloquete Bloco.webp"
      ],
      "videos": [],
      "redesSociais": "@bloquetevinhedo",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "7f3e236a-ae70-4847-a22b-1128722eb5e4",
      "nome": "Bloco Não é Não - Goiânia, Goiás ",
      "descricao": "O bloco Não é Não surgiu em 2017, na Cidade de Goiás, antiga Capital de Goiás. O bloco foi criado por duas amigas feministas e a filha de uma delas é seus amigos. Foi por brincadeira mesmo, mas como existia a luta feminista na vida do grupo escolheu-se o Não é Não como forma de afirmar o direito da liberdade e dignidade sexual de meninas, mulheres e pessoas Lgbtqiapn+. Na época da criação do bloco acontecia uma onda de taques aos direitos das mulheres e da comunidade Lgbtqiap+ promovidos pela extrema direita que estava em ascensão no Brasil. Para enfrentar a misoginia compreendeu-se ser necessário formar forças com as irmãs trans, travestis e outras identidades que se afirmam femininas. As três bandeiras do bloco são: 1) enfrentamento à Misoginia; 2) enfrentamento à Cultura do Estupro; e. 3) defesa da liberdade e integridade sexual de mulheres e pessoas Lgbtqiapn+. Nos definimos com ecofeminista que se organiza nossas ocupações culturais por meio da estética carnavalesca.",
      "contato": "(62) 98242-4241 | mariaalvescerrado@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/IMG_3809-2 - Maria Alves.webp",
      "localLat": -16.680882,
      "localLng": -49.2532691,
      "cidade": "Goiânia ",
      "estado": "GO",
      "endereco": null,
      "vertenteFeminista": "Enfrentamento à misoginia e defesa da liberdade sexual",
      "formacao": "Coletivo ecofeminista ",
      "atividades": "|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica|outro|outro:Advocacy para indução de políticas públicas e leis que protejam os direitos das mulheres e pessoa Lgbtqianp+",
      "dias": "Sábado",
      "imagens": [
        "assets/images/fotos carnaval feminino/0419f2c76f8819b9bb8c48702796ac75498e7a4d18e2a072223b28051f37fa49 - Maria Alves.webp",
        "assets/images/fotos carnaval feminino/52486639_2412658035412126_3572160416463192064_o - Maria Alves.webp",
        "assets/images/fotos carnaval feminino/DSC_2179 - Maria Alves.webp",
        "assets/images/fotos carnaval feminino/DSC_3311 - Maria Alves.webp",
        "assets/images/fotos carnaval feminino/DSC_3478 - Maria Alves.webp",
        "assets/images/fotos carnaval feminino/IMG_3809-2 - Maria Alves.webp",
        "assets/images/fotos carnaval feminino/IMG_3894-2 - Maria Alves.webp"
      ],
      "videos": [],
      "redesSociais": "@ccidalves & @bloconaoenao",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "f7f30863-9588-4c6e-a1a6-4e40fc34c49c",
      "nome": "Bloco Mulheres Rodadas ",
      "descricao": "Surgimos em 2015 por conta de um post do Facebook que dizia \"não mereço mulher rodada\". A ideia era fazer um protesto. Mas a repercussão foi imensa e daí veio a ideia de criar um projeto.",
      "contato": " (21) 98038-2376 | rcarvalhorodrigues@gmail.com ",
      "foto": null,
      "localLat": -22.9110137,
      "localLng": -43.2093727,
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "endereco": null,
      "vertenteFeminista": "Engajamento em causas, projetos e iniciativas pelos direitos das mulheres ",
      "formacao": "Mulheres",
      "atividades": "|formacao_politica|dialogos|protesto|oficinas|ensaios_aprendizado|ensaios_publico|encontros|venda",
      "dias": "Quarta-feira",
      "imagens": [],
      "videos": [],
      "redesSociais": "@rcarvalhorodrigues  & @blocomulheresrodadas",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "9c08113b-7639-4d01-b7d0-52ee44830a1d",
      "nome": "Vapor de Virilha",
      "descricao": "O Vapor de Virilha surgiu neste carnaval de 2025 da vontade de mulheres se juntarem durante o carnaval para simplesmente tocar, sem escolha de repertório prévio, sem ensaio e sem muita organização. Temos um estandarte que aparece no fim de outros blocos mistos, chamando mulheres para tocar no que chamamos de \"xepa\", um espaço para mulheres musicistas se soltarem, criarem sem compromisso e sem amarras, apenas para se divertir e divertir o público (que sempre quer mais).",
      "contato": "(61) 98165-3303",
      "foto": null,
      "localLat": -15.7939869,
      "localLng": -47.8828,
      "cidade": "Brasília ",
      "estado": "DF",
      "endereco": null,
      "vertenteFeminista": "Combate ao perfeccionismo e cobrança que mulheres enfrentam em ambientes de performance",
      "formacao": "Mulheres",
      "atividades": "|outro|outro:Eventuais encontros em pré-carnavais, festivais honk etc",
      "dias": "Sábado e segunda-feira",
      "imagens": [],
      "videos": [],
      "redesSociais": "@vapor.de.virilha",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "8b1c64d6-26bb-4555-9546-02eda37112f8",
      "nome": "Bloca Feminista Ela Pode, Ela Vai",
      "descricao": "Nascemos do cansaço do machismo nos blocos de carnaval de rua! Em janeiro de 2018, nós, mulheres batuqueiras, cantoras e produtoras de blocos de carnaval de rua em Curitiba-PR, diante das diversas investidas machistas e misóginas dentro das baterias de carnaval, nos unimos para a construção de uma blocA de carnaval (sim, um substantivo feminino) de mulheres e mulheridades para todes aqueles que abraçam nossa luta.\r\nSomos, além de um grupo de mulheres e pessoas ritmistas levando alegria para a rua, um coletivo de movimento político, ocupando o espaço público com nossos gritos de dor, de indignação e de fantasias, levando nossos corpos livres, coloridos e potentes para as ruas históricas e periféricas, através do batuque e da brincadeira. \r\nNossa luta é o movimento feminista anticapitalista, decolonial, antirracista e outras opressões, através da manifestação cultural do carnaval de rua! ",
      "contato": "Renata Dutra (41) 99901-9838 | Thalita Barros (41) 99911-6604 | Rhayane (41) 99614-3666 | Simone Frigo (41) 99614-9480",
      "foto": null,
      "localLat": -25.4944375,
      "localLng": -49.284271,
      "cidade": "Curitiba",
      "estado": "PR",
      "endereco": null,
      "vertenteFeminista": "Feminismo anticapitalista, decolonial e antirracista ",
      "formacao": "Mulheres e mulheridades",
      "atividades": "|venda|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica|outro|outro: Dialogo e encontro com outros blocos com pautas políticas",
      "dias": "Sábado e domingo",
      "imagens": [],
      "videos": [],
      "redesSociais": "@elapodeelavai",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "bfaf1d62-49b9-4f6f-beaf-fb511bff5516",
      "nome": "Maracatu Baque Mulher",
      "descricao": "O Maracatu Baque Mulhe é majoritariamente formado por mulheres e sediado na comunidade do Bode em Recife, Pernambuco. Foi idealizado e fundado no ano de 2008 por Mestra Joana D’arc Cavalcante – Yakekeré Mãe Joana de Oxum. Mulher negra, mãe, uma das lideranças da comunidade, artista da cultura popular afro-pernambucana, símbolo de resistência e força para a cultura negra nordestina. Mestra Joana é a primeira mulher a\r\ncoordenar e comandar uma Nação de Maracatude Baque Virado – a Nação Encanto do Pina - a partir dos conhecimentos adquiridos com sua avó, dona Maria da Quixaba, sacerdotisa\r\ndo Ylê Axé Oxum Deym, uma das casas mais antigas do bairro do Pina.\r\nAtualmente, o Movimento Nacional de Empoderamento Feminino Baque Mulher – Feministas do Baque Virado (FBV) - possui a matriz e 37 filiais espalhadas pelo território nacional e internacional, pautando-se nos valores afrocivilizatórios, como a ancestralidade, a religiosidade, a coletividade, a oralidade e o pertencimento. \r\nAs linguagens tradicionais utilizadas desde sua fundação – que durante 05 anos permaneceu somente em Recife/PE - são as mesmas utilizadas pela Nação do Maracatu Encanto do Pina, devido à relação intrínseca com essas Nações e também prestando apoio a matriz, cedendo sua estrutura física e instrumentos.",
      "contato": "comunicacaobaquemulher@gmail.com | (81) 9786-2207",
      "foto": null,
      "localLat": -8.0584933,
      "localLng": -34.8848193,
      "cidade": "Recife",
      "estado": "PE",
      "endereco": null,
      "vertenteFeminista": "Enfretamento e superação das diversas formas de violências contra as mulheres",
      "formacao": "Majoritariamente mulheres (em sua grande maioria mulheres negras)",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos",
      "dias": "Sexta-feira",
      "imagens": [],
      "videos": [],
      "redesSociais": "Instagram: @movimentoFBV & @mestrajoanacavalcante | Youtube: @MovimentoBaqueMulherFBV ",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "c9a2f671-dfb6-4e9f-b92d-400ff3976a9e",
      "nome": "Coletivo de Mulheres Negras Sambadeiras de Roda",
      "descricao": "SAMBADEIRAS DE RODA é um coletivo de estudos do Samba de Roda formado por mulheres negras do Distrito Federal e idealizado por Regina Salgado & Camila Ferreira. As Sambadeiras tocam, cantam e dançam cantigas do Samba de Roda, tendo como principal referência o Samba de Roda Rural. O grupo realiza oficinas de samba de roda abertas ao público em geral, apresentações e oficinas em comunidades periféricas para mulheres e crianças em situação de vulnerabilidade social e violência, e tem o samba de roda e a ancestralidade como principal instrumento de transformação sociocultural. ",
      "contato": "sambadeirasderoda@gmail.com | camila700ambiental@gmail.com ",
      "foto": null,
      "localLat": -15.7939869,
      "localLng": -47.8828,
      "cidade": "Brasília ",
      "estado": "DF",
      "endereco": null,
      "vertenteFeminista": "Fortalecimento de mulheres negras por meio de ações socioculturais ",
      "formacao": "Mulheres negras",
      "atividades": "|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|formacao_politica",
      "dias": "Sábado, domingo, quarta-feira e quinta-feira",
      "imagens": [],
      "videos": [],
      "redesSociais": "Instagram : @sambdeirasderoda | YouTube: @Samabdeiras de Roda ",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "bc64fd24-b22b-4a51-a521-abecb93fe750",
      "nome": "Bloco Maria Sapatão ",
      "descricao": "Abrimos o bloco em 2022, Kelly Furlan queria um bloco de carnaval e Lilian Bonfim sua esposa, iniciou o projeto pensando num espaço de luta feito por mulheres. Necessidade de avançar em nossos direitos.",
      "contato": "(11) 95320-2657 | contatomariasapatao@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/DSC_0136 - Lian Bonfim.webp",
      "localLat": -23.4675941,
      "localLng": -46.5277704,
      "cidade": "Guarulhos",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Lutas de pautas feministas ",
      "formacao": "Mulheres e pessoas trans",
      "atividades": "|venda|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica",
      "dias": "Sábado",
      "imagens": [
        "assets/images/fotos carnaval feminino/DSC_9445 (1) - Lian Bonfim.webp",
        "assets/images/fotos carnaval feminino/DSC_9465 (1) - Lian Bonfim.webp",
        "assets/images/fotos carnaval feminino/DSC_9530 - Lian Bonfim.webp",
        "assets/images/fotos carnaval feminino/DSC_9684 - Lian Bonfim.webp"
      ],
      "videos": [],
      "redesSociais": "@Bloco_mariaSapatao",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "6d39392a-7d3b-49d9-b5bf-af2414138428",
      "nome": "Sagrada Profana ",
      "descricao": "Bloco de Carnaval feminista que fez seu primeiro desfile em 2017 e surgiu com o objetivo de juntar as mulheres musicistas instrumentistas de sopros e percussão. A fundadora tocava em diversos projetos e sempre sentia falta de ver mais mulheres instrumentistas se apresentando. A partir daí foi fazendo um levantamento dessas instrumentistas e montando o bloco. O repertório do bloco aborda temas relacionados ao universo da mulher, com músicas majoritariamente compostas e interpreta das por mulheres. Outras artistas, do circo e da perfomance também se apresentam no desfile anual da Sagrada.",
      "contato": "simpson.shari@gmail.com | narocatorres@gmail.com | contatosagradaprofana@gmail.com",
      "foto": null,
      "localLat": -19.9227318,
      "localLng": -43.9450948,
      "cidade": "Belo Horizonte",
      "estado": "MG",
      "endereco": null,
      "vertenteFeminista": "Representatividade na música e nas artes, igualdade de oportunidades",
      "formacao": "Mulheres instrumentistas ",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica",
      "dias": "Saímos no sábado de pré carnaval, duas semanas antes do carnaval.",
      "imagens": [],
      "videos": [],
      "redesSociais": "@sagradaprofanabh",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "6cf415af-db42-4a66-a438-c72f6a9563c7",
      "nome": "Maluvidas",
      "descricao": "Maluvida, palavra muito utilizada em algumas regiões do Nordeste brasileiro, é uma pessoa\r\nmal ouvida, desobediente e inquieta. Por incentivo do Maestro Spok e uma busca de\r\nempoderamento musical feminino no cenário neofanfarrista de Brasília-DF, em dezembro de\r\n2016 surge a fanfarra feminista Maluvidas.\r\n\r\nNossa proposta é expressar nossas inquietações como mulheres e mostrar que o nosso lugar também é na música, e na rua. Em nosso repertório, enaltecemos músicas feitas por mulheres, ou que ficaram famosas na voz delas, trazendo releituras de grandes clássicos e ícones da música popular brasileira e internacional como Chiquinha Gonzaga, Clara Nunes, Dona Onete, Duda Beat, Elza Soares, Gal Costa, Gaby Amarantos, Joelma, Lia Sophia, Lia de\r\nItamaracá, Aretha Franklin, Annie Lennox e Beyoncé.\r\n\r\nQueremos trazer cada vez mais mulheres para o universo das fanfarras e ocupar todos os\r\nespaços com música, festa, afeto, ativismo e luta.",
      "contato": "(83) 99903-3394",
      "foto": null,
      "localLat": -15.7939869,
      "localLng": -47.8828,
      "cidade": "Brasília ",
      "estado": "DF",
      "endereco": null,
      "vertenteFeminista": "Ocupação de espaços com música, festa, afeto, ativismo e luta",
      "formacao": "Mulheres (cis e trans) e pessoas não binárias",
      "atividades": "|venda|ensaios_publico|ensaios_aprendizado|protesto|dialogos|formacao_politica|outro|outro:Encontros, festas, shows e outros eventos gratuitos",
      "dias": "Não há dia pré-definido. Mas anualmente fazemos o carnaval das Mulheres que acontece no período entre o carnaval e o 8M.",
      "imagens": [],
      "videos": [],
      "redesSociais": "@maluvidas",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "40429e34-910d-4e15-8fc3-e520ed12c05c",
      "nome": "Sopre Suas Feras",
      "descricao": "A Sopre Suas Feras foi criada em janeiro de 2024 a partir da iniciativa de sopristas de outro bloco carnavalesco da região. A proposta era formar um grupo composto exclusivamente por mulheres (cis e trans) e pessoas não binárias que tocassem instrumentos de sopro e percussão, independentemente do nível técnico. O objetivo era criar um ambiente seguro e acolhedor, onde o protagonismo feminino, a experimentação e a troca pudessem florescer, livres dos julgamentos frequentemente presentes em blocos mistos.",
      "contato": "(51) 99504-7545 | danicaulfield@gmail.com",
      "foto": null,
      "localLat": -30.0324999,
      "localLng": -51.2303767,
      "cidade": "Porto Alegre",
      "estado": "RS",
      "endereco": null,
      "vertenteFeminista": "Rompimento com estruturas patriarcas no meio musical",
      "formacao": "Mulheres (cis e trans) e pessoas não binárias",
      "atividades": "|encontros|ensaios_publico|ensaios_aprendizado|protesto|oficinas",
      "dias": "Sexta-feira, sábado, domingo e quinta-feira",
      "imagens": [],
      "videos": [],
      "redesSociais": "@sopresuasferas",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "decc3c4c-47e1-4dda-9829-27621029b84d",
      "nome": "Não é Não!",
      "descricao": "Somos uma ORGANIZAÇÃO DE IMPACTO SOCIAL, que surgiu em 2017 como um\r\nmovimento coletivo de mulheres no RIO DE JANEIRO. Com o foco no CARNAVAL nosso movimento alcançou uma força muito grande, tornando-se um movimento NACIONAL. Já no ano seguinte fomos ganhando o Brasil, onde em 202 realizamos 17 financiamentos coletivos(FC) (16 estados + DF), arrecadando mais de R$100k e distribuindo 360k tatuagens gratuitas nas quatro regiões do país. Este ano, 2025, após 5 anos retomamos o FC, foram 13k de tatuagens distribuídas em 7 estados.",
      "contato": "contato@naoenao.com.br | (81) 99945-1416 (Leticia) e (21) 98828-5886 (Julia)",
      "foto": "assets/images/fotos carnaval feminino/Leo Salvo (1) - Leticia Azevedo.webp",
      "localLat": -22.9110137,
      "localLng": -43.2093727,
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "endereco": null,
      "vertenteFeminista": "Luta pelos direitos de todas as mulheres através de formações e espaços de troca",
      "formacao": "100% feminina ",
      "atividades": "|protesto|formacao_politica|outro|outro:Palestras, Oficinas sobre direito das mulheres para Jovens e Adolescentes e treinamento online para estabelecimentos que queiram estar de acordo com o Protoloco Não é Não (Lei Federal Nº14.756/2023)",
      "dias": "Estamos presente em todos os dias de carnaval com voluntárias",
      "imagens": [
        "assets/images/fotos carnaval feminino/Paula e Henrique (161) - Leticia Azevedo.webp",
        "assets/images/fotos carnaval feminino/Paula Molina e Henrique Fernandes (1) - Leticia Azevedo.webp",
        "assets/images/fotos carnaval feminino/Saulo Duarte (10) - Leticia Azevedo.webp"
      ],
      "videos": [],
      "redesSociais": "Instagram e Linkedin @naoenao_  ",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "742b902d-f428-4330-996d-93ef9be589ca",
      "nome": "As Obscênicas",
      "descricao": "As Obscênicas são uma fanfarra formada exclusivamente por mulheres, nascida em São Paulo, no começo de 2019, do desejo de ocupar os espaços da música de rua com potência feminina, diversidade e irreverência. A ideia surgiu da necessidade de criar um ambiente seguro e acolhedor para mulheres instrumentistas que, muitas vezes, enfrentam machismo e silenciamento em outros contextos musicais. Misturando samba, jazz, funk, frevo e outros ritmos brasileiros, o grupo traz em seu repertório desde Elza Soares até Anitta — sempre com muita liberdade criativa e crítica social. Além dos desfiles carnavalescos, As Obscênicas promovem oficinas para mulheres e pessoas trans interessadas em instrumentos de sopro, fortalecendo redes e ampliando acessos à cena musical.",
      "contato": "(21) 98101-6496 | obscenicas@gmail.com",
      "foto": "assets/images/fotos carnaval feminino/Cópia de 8U3A2717 - Cassia Conti.webp",
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Presença ativa, plural e potente de mulheres na música e no carnaval",
      "formacao": "Mulheres",
      "atividades": "|dialogos|oficinas|protesto|ensaios_aprendizado|ensaios_publico|encontros|venda",
      "dias": "Geralmente saímos num sábado pré ou pós carnaval.",
      "imagens": [
        "assets/images/fotos carnaval feminino/8U3A5303 (1) - Cassia Conti.webp",
        "assets/images/fotos carnaval feminino/FIGA_@bleia_animus.br_02422-min - Cassia Conti.webp",
        "assets/images/fotos carnaval feminino/julho-25 1 - Cassia Conti.webp"
      ],
      "videos": [],
      "redesSociais": "Instagram e TikTok: @asobscenicas",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "15af0d48-9390-429e-9be9-10e955e53eeb",
      "nome": "Ilú Obá De Min",
      "descricao": "O Ilú Obá De Min – Educação, Cultura e Arte Negra é um grupo paulistano fundado em 2004 por mulheres negras com o propósito de valorizar e difundir as culturas de matriz africana, especialmente por meio da música, da dança e das artes visuais. Surgiu a partir da necessidade urgente de criar espaços de expressão e protagonismo para mulheres negras em um cenário cultural historicamente marcado pela exclusão e pelo racismo estrutural.\r\n\r\nInspirado nos tambores do candomblé e nos cortejos afro-brasileiros, o grupo construiu uma trajetória de resistência estética e política, utilizando a arte como ferramenta de transformação social. Seu nome, em iorubá, significa \"As Mãos Femininas que Tocam o Tambor para o Rei Xangô\", revelando sua forte ligação com os orixás, com a ancestralidade africana e com os valores do sagrado.\r\n\r\nO Ilú realiza formações artísticas e pedagógicas, cortejos, oficinas e apresentações que articulam espiritualidade, arte e educação antirracista. Em duas décadas de atuação, tornou-se referência nacional e internacional na valorização da cultura negra e na luta por equidade de gênero e raça. Seu trabalho impacta especialmente a juventude negra, fortalecendo identidades e construindo novas possibilidades de futuro.\r\n",
      "contato": "Daiane: (11) 98132-9624",
      "foto": "assets/images/fotos carnaval feminino/Ilu-Oba-De-Min-se-apresenta-em-Salvador-e1736377724117 - daiane pettine.webp",
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Feminismo negro, antirracista e decolonial ",
      "formacao": "Mulheres negras ",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica",
      "dias": "Sexta-feira e domingo",
      "imagens": [
        "assets/images/fotos carnaval feminino/1_iFr5vFUfCEKNms1XPBitVw - daiane pettine.webp",
        "assets/images/fotos carnaval feminino/ERfN6vbWkAQdAi3 - daiane pettine.webp",
        "assets/images/fotos carnaval feminino/Foto-Leon-Rodrigues-4 - daiane pettine.webp",
        "assets/images/fotos carnaval feminino/Ilu-5 - daiane pettine.webp",
        "assets/images/fotos carnaval feminino/Ilu-Oba-De-Min-se-apresenta-em-Salvador-e1736377724117 - daiane pettine.webp"
      ],
      "videos": [],
      "redesSociais": "@iluoba",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "5a9a561b-dd67-44b3-b2f2-e87de286ab48",
      "nome": "Capivara Neon",
      "descricao": "O grupo foi criado em 2021 em meio às manifestações Fora Bolsonaro a partir da Resistência Feminista, desde então realiza ensaio semanais aberto e gratuitos em espaços públicos de Jacareí e São dos Campos e participa de todas as manifestações relacionadas aos direitos trabalhistas e luta contra opressões de raça, gênero, sexualidade, entre outros.",
      "contato": "Amanda: (19) 98218-1686 e Ana: (12)99662-0633",
      "foto": "assets/images/fotos carnaval feminino/Imagem do WhatsApp de 2025-02-06 à(s) 14.03.22_f0571038 - capivara neon.webp",
      "localLat": -23.3050682,
      "localLng": -45.9723075,
      "cidade": "Jacareí",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Protagonismo feminino e valorização das mulheres em cargos de liderança",
      "formacao": "Mista com maioria de mulheres na batucada ",
      "atividades": "|venda|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos|formacao_politica",
      "dias": "Domingo e segunda-feira",
      "imagens": [
        "assets/images/fotos carnaval feminino/DSC_0169 - capivara neon.webp",
        "assets/images/fotos carnaval feminino/DSC_0310 - capivara neon.webp",
        "assets/images/fotos carnaval feminino/DSC_0709 - capivara neon.webp",
        "assets/images/fotos carnaval feminino/Foto de Amanda Menconi - capivara neon(1).webp",
        "assets/images/fotos carnaval feminino/Foto de Amanda Menconi - capivara neon(2).webp",
        "assets/images/fotos carnaval feminino/Foto de Amanda Menconi - capivara neon.webp",
        "assets/images/fotos carnaval feminino/Imagem do WhatsApp de 2025-02-06 à(s) 14.19.29_9f8aea0b - capivara neon.webp",
        "assets/images/fotos carnaval feminino/IMG_6310 - capivara neon.webp",
        "assets/images/fotos carnaval feminino/Screenshot_20231031_212254_WhatsApp - capivara neon.webp"
      ],
      "videos": [],
      "redesSociais": "@amandamenconi & @naclara_santos",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "4bd31e66-bddc-4d0a-bcf6-323142540fa0",
      "nome": "As Batucas - Escola de música para mulheres ",
      "descricao": "As Batucas foram criadas em 2015 pela baterista Biba Meira, com a intensão de colocar suas alunas de bateria na rua: ela percebia que apenas os alunos homens tinham bandas e se apresentavam fora da escola, e que as mulheres não saiam da sala de aula. Em março de 2015 criou a primeira turma, com o nome de “As Batucas - orquestra feminina de bateria e percussão”. Durante dois anos as batucas foram crescendo, apenas como turmas de percussão. Em 2017 se criou o segundo braço da escola, as turmas de grupo vocal. Hoje em dia o que era uma orquestra de bateria e percussão virou uma escola de música para mulheres, com aulas de percussão, vocal, pandeiro, dança, e inglês. A escola conta com 19 turmas e mais de 200 alunas , que frequentam o espaço semanalmente, cada uma em sua modalidade. No dia 31 de maio de 2025 comemoramos 10 anos de existência, em show na quadra da escola de samba Saldanha, com mais de 200 mulheres no palco :) ",
      "contato": "asbatucas@gmail.com | (51) 99772-4926 ",
      "foto": "assets/images/fotos carnaval feminino/A55A1380 (3) - As Batucas.webp",
      "localLat": -30.0324999,
      "localLng": -51.2303767,
      "cidade": "Porto Alegre",
      "estado": "RS",
      "endereco": null,
      "vertenteFeminista": "Empoderamento musical feminino",
      "formacao": "Mulheres",
      "atividades": "|formacao_politica|dialogos|protesto|oficinas|ensaios_aprendizado|ensaios_publico|encontros|venda",
      "dias": "Não costumamos sair no feriado de carnaval. Fazemos nossos evento em momentos diferentes do ano.",
      "imagens": [
        "assets/images/fotos carnaval feminino/A55A0659-2 - As Batucas.webp",
        "assets/images/fotos carnaval feminino/A55A0938 - As Batucas.webp",
        "assets/images/fotos carnaval feminino/A55A0943 - As Batucas.webp",
        "assets/images/fotos carnaval feminino/A55A1313 - As Batucas.webp",
        "assets/images/fotos carnaval feminino/A55A1380 (3) - As Batucas.webp",
        "assets/images/fotos carnaval feminino/Imagem do WhatsApp de 2025-12-14 à(s) 22.30.46_4805c1b8 - As Batucas.webp",
        "assets/images/fotos carnaval feminino/MariKorman- 249 - 0018 (2) - As Batucas.webp"
      ],
      "videos": [],
      "redesSociais": "@asbatucas",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "8bcca5bd-1a7d-441b-ae48-0d4d139946a1",
      "nome": "Nu Vuco Vuco",
      "descricao": "Criado em 2014 entre amigos de longa data, tem como inspiração a música baiana, com o samba-reagge como ritmo principal!",
      "contato": "+55 (11) 98724-9354",
      "foto": null,
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": null,
      "vertenteFeminista": "Maioria feminina ",
      "formacao": "Mista com maioria feminina ",
      "atividades": "|encontros|ensaios_publico|ensaios_aprendizado|protesto",
      "dias": "Sábado",
      "imagens": [],
      "videos": [],
      "redesSociais": "@nuvucovuco",
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "afoxe-filhas-de-gandhy-id-99999",
      "nome": "Afoxé Filhas de Gandhy",
      "descricao": "O Afoxé Filhas de Gandhy é uma agremiação carnavalesca de Salvador, Bahia, reconhecida como o primeiro bloco de afoxé do mundo composto exclusivamente por mulheres. Fundado em 2 de julho de 1979, o grupo surgiu como um símbolo de resistência, empoderamento feminino e valorização da ancestralidade e da cultura negra.",
      "contato": "contato@afoxefilhasdegandhy.com",
      "foto": "assets/images/fotos carnaval feminino/38e87327-e378-4f2a-ac36-51a60cda5a9c - Filhas de Gandhy.webp",
      "localLat": -12.9714,
      "localLng": -38.5014,
      "cidade": "Salvador",
      "estado": "BA",
      "endereco": "Pelourinho, Salvador - BA",
      "vertenteFeminista": "Feminismo negro, valorização da ancestralidade e cultura de matriz africana",
      "formacao": "Exclusivamente mulheres (majoritariamente mulheres de terreiros de candomblé)",
      "atividades": "|encontros|oficinas|protesto|dialogos|ensaios_aprendizado|ensaios_publico",
      "dias": "Dias de carnaval",
      "imagens": [
        "assets/images/fotos carnaval feminino/38e87327-e378-4f2a-ac36-51a60cda5a9c - Filhas de Gandhy.webp",
        "assets/images/fotos carnaval feminino/70badb43-8d68-4afc-b9c0-1dc57f99cdde - Filhas de Gandhy.webp",
        "assets/images/fotos carnaval feminino/b9fc6b0a-e7ed-4cfa-9fd3-1959351efeb7 - Filhas de Gandhy.webp",
        "assets/images/fotos carnaval feminino/e9d5a9c5-5a92-465f-a427-2d89c5cdfecc - Filhas de Gandhy.webp",
        "assets/images/fotos carnaval feminino/f3f7c69c-f75f-425e-be70-2e953f4026f5 - Filhas de Gandhy.webp"
      ],
      "videos": [],
      "redesSociais": {
        "instagram": "@afoxefilhasdegandhy"
      },
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    },
    {
      "id": "bloco-siga-bem-caminhoneira-id-88888",
      "nome": "Bloco Siga Bem Caminhoneira",
      "descricao": "O Bloco Siga Bem Caminhoneira é um bloco de carnaval de rua de São Paulo, fundado em 2017, com o objetivo de criar um espaço de visibilidade, acolhimento e celebração para mulheres lésbicas, bissexuais, pessoas trans e não-binárias. É hoje um dos maiores blocos LBT+ do Brasil, promovendo a resistência, a liberdade e a ocupação dos espaços públicos através do samba e do afoxé.",
      "contato": "contato@sigabemcaminhoneira.com.br",
      "foto": "assets/images/fotos carnaval feminino/sigabem-cortejo2025-@marcelaguimaraes___-25 - Iara Viana.webp",
      "localLat": -23.5506507,
      "localLng": -46.6333824,
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Centro, São Paulo - SP",
      "vertenteFeminista": "Visibilidade e direitos de lésbicas, bissexuais, pessoas trans e não-binárias",
      "formacao": "Mulheres lésbicas, bissexuais, pessoas trans e não-binárias",
      "atividades": "|encontros|ensaios_publico|ensaios_aprendizado|oficinas|protesto|dialogos",
      "dias": "Dias de carnaval",
      "imagens": [
        "assets/images/fotos carnaval feminino/sigabem-cortejo2025-@marcelaguimaraes___-25 - Iara Viana.webp",
        "assets/images/fotos carnaval feminino/sigabem-cortejo2025-@marcelaguimaraes___-321 - Iara Viana.webp",
        "assets/images/fotos carnaval feminino/sigabem-cortejo2025-@marcelaguimaraes___-394 - Iara Viana.webp",
        "assets/images/fotos carnaval feminino/sigabem-cortejo2025-@marcelaguimaraes___-398 - Iara Viana.webp"
      ],
      "videos": [],
      "redesSociais": {
        "instagram": "@sigabemcaminhoneira"
      },
      "ownerId": "O2yjpR72auN6xZQ5meI0nnnVYLY2"
    }
  ],
  "events": []
};

// Initialize database
async function initDb() {
  const storedBlocks = localStorage.getItem('bf_blocks');
  if (storedBlocks && !storedBlocks.includes('afoxe-filhas-de-gandhy-id-99999')) {
    localStorage.removeItem('bf_blocks');
    localStorage.removeItem('bf_events');
  }

  if (!localStorage.getItem('bf_blocks') || !localStorage.getItem('bf_events')) {
    if (!localStorage.getItem('bf_blocks')) {
      localStorage.setItem('bf_blocks', JSON.stringify(initialDbData.blocks || []));
    }
    
    if (!localStorage.getItem('bf_events')) {
      const mockEvents = [
        {
          id: "ev-1",
          nome: "Oficina de Ritmos - Bateria Feminista",
          data: "2026-06-20T14:00:00.000Z",
          horario: "14:00 às 17:00",
          descricao: "Venha aprender percussão com o Bloco Feminista! Oficina aberta para mulheres de todos os níveis de experiência. Traga seu instrumento se tiver!",
          foto: "",
          blocoId: "359a0537-97dc-4122-a086-008b1b067ef6",
          local: "Praça do Patriarca, Centro",
          cidade: "São Paulo",
          estado: "SP",
          tipo: "Oficina"
        },
        {
          id: "ev-2",
          nome: "Ensaio Geral - Preparativos Carnaval",
          data: "2026-06-27T16:00:00.000Z",
          horario: "16:00 às 19:30",
          descricao: "Primeiro ensaio de rua do ano! Venha cantar nossos sambas de enredo autorais contra o machismo e em defesa dos direitos das mulheres.",
          foto: "",
          blocoId: "1f590b6d-5cb9-4a1c-b2c7-9d6a1f226879",
          local: "Parque Vicentina Aranha",
          cidade: "São José dos Campos",
          estado: "SP",
          tipo: "Ensaio"
        },
        {
          id: "ev-3",
          nome: "Grande Desfile de Rua - Filhas de Eva",
          data: "2026-07-04T15:00:00.000Z",
          horario: "15:00",
          descricao: "Desfile anual do bloco ocupando o centro histórico de Florianópolis. Ritmo, política afetiva e alegria contra o machismo estrutural.",
          foto: "",
          blocoId: "893baa8a-acd5-45c2-b81a-bca08892fbfa",
          local: "Largo da Alfândega",
          cidade: "Florianópolis",
          estado: "SC",
          tipo: "Desfile"
        },
        {
          id: "ev-4",
          nome: "Show Cultural - Mulheres Brilhantes",
          data: "2026-07-11T20:00:00.000Z",
          horario: "20:00",
          descricao: "Apresentação especial das Mulheres Brilhantes no palco público da Lapa. Venha cantar e dançar samba com liderança feminina forte.",
          foto: "",
          blocoId: "357cc3b2-40a1-4d05-9775-349254dcd35b",
          local: "Arcos da Lapa",
          cidade: "Rio de Janeiro",
          estado: "RJ",
          tipo: "Show"
        }
      ];
      localStorage.setItem('bf_events', JSON.stringify(initialDbData.events && initialDbData.events.length > 0 ? initialDbData.events : mockEvents));
    }
    console.log('Database initialized from inlined data');
  }
}

// Ensure database is initialized
initDb();

// Supabase Configuration
const SUPABASE_URL = 'https://idbftfamynqdebxlazvv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_KqRrc5gvU0HzhkZSN60k3w_0w7zfEOg';
let supabaseClient = null;

// Dynamic script loader helper
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });
}

// Get or initialize Supabase Client
async function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  try {
    await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2');
    if (window.supabase) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      return supabaseClient;
    }
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
  }
  return null;
}

// Background sync function
async function syncWithSupabase() {
  const supabase = await getSupabaseClient();
  if (!supabase) return;
  
  try {
    // Fetch blocks from Supabase
    const { data: supabaseBlocks, error: blocksError } = await supabase
      .from('blocos')
      .select('*');
    if (blocksError) throw blocksError;

    // Fetch events from Supabase
    const { data: supabaseEvents, error: eventsError } = await supabase
      .from('eventos')
      .select('*');
    if (eventsError) throw eventsError;

    if (supabaseBlocks) {
      const localBlocks = JSON.parse(localStorage.getItem('bf_blocks') || '[]');
      const mergedBlocks = mergeData(localBlocks, supabaseBlocks);
      localStorage.setItem('bf_blocks', JSON.stringify(mergedBlocks));
    }

    if (supabaseEvents) {
      const localEvents = JSON.parse(localStorage.getItem('bf_events') || '[]');
      const mergedEvents = mergeData(localEvents, supabaseEvents);
      localStorage.setItem('bf_events', JSON.stringify(mergedEvents));
    }

    console.log('Synchronized successfully with Supabase!');
    window.dispatchEvent(new CustomEvent('dbSyncComplete'));
  } catch (err) {
    console.error('Error synchronizing with Supabase:', err);
  }
}

// Helper to merge local data with remote Supabase data (Supabase overrides)
function mergeData(local, remote) {
  const map = new Map();
  local.forEach(item => map.set(item.id, item));
  remote.forEach(item => {
    const normalized = { ...item };
    // Safe JSON parsing for object/array fields
    if (typeof normalized.imagens === 'string') {
      try { normalized.imagens = JSON.parse(normalized.imagens); } catch (e) {}
    }
    if (typeof normalized.videos === 'string') {
      try { normalized.videos = JSON.parse(normalized.videos); } catch (e) {}
    }
    if (typeof normalized.redesSociais === 'string') {
      try { normalized.redesSociais = JSON.parse(normalized.redesSociais); } catch (e) {}
    }
    map.set(item.id, normalized);
  });
  return Array.from(map.values());
}

// Start background synchronization immediately
syncWithSupabase();

// DB API functions
function getBlocks() {
  return JSON.parse(localStorage.getItem('bf_blocks') || '[]');
}

function getBlock(id) {
  const blocks = getBlocks();
  return blocks.find(b => b.id === id) || null;
}

async function saveBlock(blockData) {
  // Compress images if base64
  if (blockData.foto && blockData.foto.startsWith('data:image/')) {
    blockData.foto = await compressImage(blockData.foto, 1000, 0.65);
  }
  if (blockData.imagens && Array.isArray(blockData.imagens)) {
    for (let i = 0; i < blockData.imagens.length; i++) {
      if (blockData.imagens[i] && blockData.imagens[i].startsWith('data:image/')) {
        blockData.imagens[i] = await compressImage(blockData.imagens[i], 1000, 0.65);
      }
    }
  }

  const blocks = getBlocks();
  const index = blocks.findIndex(b => b.id === blockData.id);
  let finalOwnerId = blockData.ownerId;
  
  if (index >= 0) {
    // Update existing - preserve ownerId
    finalOwnerId = blockData.ownerId || blocks[index].ownerId;
    blocks[index] = { ...blocks[index], ...blockData, ownerId: finalOwnerId };
  } else {
    // Insert new
    blockData.id = blockData.id || uuidv4();
    blockData.ownerId = blockData.ownerId || getCurrentUser()?.id || 'site';
    finalOwnerId = blockData.ownerId;
    blocks.push(blockData);
  }
  
  localStorage.setItem('bf_blocks', JSON.stringify(blocks));

  // Async save to Supabase
  try {
    const supabase = await getSupabaseClient();
    if (supabase) {
      const payload = {
        id: blockData.id,
        nome: blockData.nome,
        responsavel: blockData.responsavel || null,
        descricao: blockData.descricao || null,
        contato: blockData.contato || null,
        foto: blockData.foto || null,
        localLat: blockData.localLat !== undefined ? blockData.localLat : null,
        localLng: blockData.localLng !== undefined ? blockData.localLng : null,
        cidade: blockData.cidade || null,
        estado: blockData.estado || null,
        endereco: blockData.endereco || null,
        vertenteFeminista: blockData.vertenteFeminista || null,
        formacao: blockData.formacao || null,
        atividades: blockData.atividades || null,
        dias: blockData.dias || null,
        imagens: blockData.imagens || [],
        redesSociais: blockData.redesSociais || {},
        ownerId: finalOwnerId || null,
        videos: blockData.videos || []
      };

      const { error } = await supabase.from('blocos').upsert(payload);
      if (error) throw error;
      console.log('Block saved successfully to Supabase');
    }
  } catch (err) {
    console.error('Error saving block to Supabase:', err);
    showToast('Salvo localmente. Erro ao enviar ao servidor: ' + (err.message || err), 'error');
  }

  return blockData;
}

async function deleteBlock(id) {
  let blocks = getBlocks();
  blocks = blocks.filter(b => b.id !== id);
  localStorage.setItem('bf_blocks', JSON.stringify(blocks));
  
  // Cascade delete events associated with this block
  let events = getEvents();
  events = events.filter(e => e.blocoId !== id);
  localStorage.setItem('bf_events', JSON.stringify(events));

  // Async delete from Supabase
  try {
    const supabase = await getSupabaseClient();
    if (supabase) {
      const { error: blockErr } = await supabase.from('blocos').delete().eq('id', id);
      if (blockErr) throw blockErr;
      
      const { error: eventErr } = await supabase.from('eventos').delete().eq('blocoId', id);
      if (eventErr) throw eventErr;
      
      console.log('Block and associated events deleted successfully from Supabase');
    }
  } catch (err) {
    console.error('Error deleting block from Supabase:', err);
  }
  
  return true;
}

function getEvents() {
  return JSON.parse(localStorage.getItem('bf_events') || '[]');
}

function getEvent(id) {
  const events = getEvents();
  return events.find(e => e.id === id) || null;
}

async function saveEvent(eventData) {
  // Compress event banner if base64
  if (eventData.foto && eventData.foto.startsWith('data:image/')) {
    eventData.foto = await compressImage(eventData.foto, 1000, 0.65);
  }

  const events = getEvents();
  const index = events.findIndex(e => e.id === eventData.id);
  
  if (index >= 0) {
    events[index] = { ...events[index], ...eventData };
  } else {
    eventData.id = eventData.id || uuidv4();
    events.push(eventData);
  }
  
  localStorage.setItem('bf_events', JSON.stringify(events));

  // Async save to Supabase
  try {
    const supabase = await getSupabaseClient();
    if (supabase) {
      const payload = {
        id: eventData.id,
        nome: eventData.nome,
        data: eventData.data,
        descricao: eventData.descricao || null,
        foto: eventData.foto || null,
        blocoId: eventData.blocoId || null,
        local: eventData.local || null,
        cidade: eventData.cidade || null,
        estado: eventData.estado || null,
        tipo: eventData.tipo || null,
        horario: eventData.horario || null
      };

      const { error } = await supabase.from('eventos').upsert(payload);
      if (error) throw error;
      console.log('Event saved successfully to Supabase');
    }
  } catch (err) {
    console.error('Error saving event to Supabase:', err);
    showToast('Salvo localmente. Erro ao enviar ao servidor: ' + (err.message || err), 'error');
  }

  return eventData;
}

async function deleteEvent(id) {
  let events = getEvents();
  events = events.filter(e => e.id !== id);
  localStorage.setItem('bf_events', JSON.stringify(events));

  // Async delete from Supabase
  try {
    const supabase = await getSupabaseClient();
    if (supabase) {
      const { error } = await supabase.from('eventos').delete().eq('id', id);
      if (error) throw error;
      console.log('Event deleted successfully from Supabase');
    }
  } catch (err) {
    console.error('Error deleting event from Supabase:', err);
  }

  return true;
}

function getNews() {
  return defaultNews;
}

// Authentication implementation using Supabase Auth
function getUsers() {
  return [];
}

// Canvas-based client-side image compression
function compressImage(base64Str, maxWidth = 1000, quality = 0.65) {
  return new Promise((resolve) => {
    if (!base64Str || !base64Str.startsWith('data:image/')) {
      resolve(base64Str);
      return;
    }
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressed = canvas.toDataURL('image/webp', quality);
      if (compressed.length > base64Str.length) {
        resolve(base64Str);
      } else {
        resolve(compressed);
      }
    };
    img.onerror = () => {
      resolve(base64Str);
    };
  });
}

async function register(email, password) {
  const supabase = await getSupabaseClient();
  if (!supabase) throw new Error('Serviço de autenticação temporariamente indisponível.');
  
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
  if (!data || !data.user) throw new Error('Erro ao criar conta.');

  try {
    const { data: config } = await supabase.from('configuracoes').select('notification_email').limit(1).single();
    if (config && config.notification_email) {
      await fetch(`https://formsubmit.co/ajax/${config.notification_email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Aprovação Pendente no Carnaval Feminino",
          _template: "box",
          mensagem: "Um novo usuário se cadastrou e aguarda sua aprovação no painel de administração.",
          email_usuario: email,
          link_para_aprovar: "https://cepin-jcr.github.io/carnaval-feminino/admin.html?approve=" + data.user.id
        })
      });
    }
  } catch(e) {
    console.error("Failed to notify admin", e);
  }

  // Ensure they are logged out so they can't access anything
  await supabase.auth.signOut();
  
  throw new Error("Conta criada! Sua conta aguarda aprovação da administração.");
}

async function login(email, password) {
  const supabase = await getSupabaseClient();
  if (!supabase) throw new Error('Serviço de autenticação temporariamente indisponível.');
  
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  if (!data || !data.user) throw new Error('Credenciais inválidas.');
  
  // Fetch profile to verify if they are admin and if they are approved
  let isAdmin = false;
  let isApproved = false;
  try {
    const { data: profile } = await supabase
      .from('perfis')
      .select('is_admin, is_approved')
      .eq('id', data.user.id)
      .single();
    if (profile) {
      isAdmin = !!profile.is_admin;
      isApproved = !!profile.is_approved;
    }
  } catch (e) {
    console.error('Error fetching admin status:', e);
  }
  
  if (!isApproved && !isAdmin) {
    await supabase.auth.signOut();
    throw new Error('Sua conta aguarda aprovação da administração.');
  }

  const user = {
    id: data.user.id,
    email: data.user.email,
    isAdmin: isAdmin
  };
  setCurrentUser(user);
  return user;
}

async function logout() {
  localStorage.removeItem('bf_current_user');
  try {
    const supabase = await getSupabaseClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
  } catch (e) {
    console.error('Error signing out from Supabase:', e);
  }
  showToast('Sessão encerrada com sucesso! 👋');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

async function verifySession() {
  const supabase = await getSupabaseClient();
  if (!supabase) return;
  
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    if (localStorage.getItem('bf_current_user')) {
      localStorage.removeItem('bf_current_user');
      const path = window.location.pathname.toLowerCase();
      if (path.indexOf('admin') !== -1) {
        window.location.href = 'login.html';
      } else {
        renderHeader();
      }
    }
  } else {
    let isAdmin = false;
    try {
      const { data: profile } = await supabase
        .from('perfis')
        .select('is_admin')
        .eq('id', session.user.id)
        .single();
      if (profile) {
        isAdmin = !!profile.is_admin;
      }
    } catch (e) {
      console.error('Error fetching admin status in verifySession:', e);
    }
    
    const currentUser = getCurrentUser();
    const updatedUser = {
      id: session.user.id,
      email: session.user.email,
      isAdmin: isAdmin
    };
    
    if (!currentUser || 
        currentUser.id !== updatedUser.id || 
        currentUser.email !== updatedUser.email || 
        currentUser.isAdmin !== updatedUser.isAdmin) {
      setCurrentUser(updatedUser);
      renderHeader();
      window.dispatchEvent(new CustomEvent('userSessionUpdated'));
    }
  }
}

// Verify auth session in background
verifySession();

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('bf_current_user') || 'null');
}

function setCurrentUser(user) {
  localStorage.setItem('bf_current_user', JSON.stringify(user));
}

// UUID helper generator
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Theme logic
function initTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Toggle theme
function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    showToast('Modo Claro ativado! ☀️');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    showToast('Modo Escuro ativado! 🌙');
  }
}

// Toast helpers
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = '🔔';
  if (message.includes('Erro') || message.includes('incorretos') || message.includes('inválido')) {
    icon = '❌';
  } else if (message.includes('sucesso') || message.includes('enviado') || message.includes('salvo')) {
    icon = '✅';
  } else if (message.includes('favoritos')) {
    icon = '❤️';
  } else if (message.includes('WhatsApp') || message.includes('email')) {
    icon = '📱';
  }
  
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Render dynamic header on load
function renderHeader() {
  const user = getCurrentUser();
  const headerContainer = document.getElementById('header-placeholder');
  if (!headerContainer) return;
  
  const path = window.location.pathname.toLowerCase();
  const isAgenda = path.indexOf('agenda.html') !== -1;
  const isNoticias = path.indexOf('noticias.html') !== -1;
  const isMapa = !isAgenda && !isNoticias; // if it's neither agenda nor noticias, it's index (mapa)

  const mapaClass = isMapa 
    ? 'bg-gradient-primary text-white hover:shadow-glow transition-smooth border-0 font-semibold h-9 rounded-md px-3 inline-flex items-center gap-2 text-sm shadow-sm' 
    : 'hover:bg-accent hover:text-accent-foreground text-foreground/80 flex items-center gap-2 h-9 rounded-md px-3 text-sm font-medium transition-smooth';

  const agendaClass = isAgenda 
    ? 'bg-gradient-primary text-white hover:shadow-glow transition-smooth border-0 font-semibold h-9 rounded-md px-3 inline-flex items-center gap-2 text-sm shadow-sm' 
    : 'hover:bg-accent hover:text-accent-foreground text-foreground/80 flex items-center gap-2 h-9 rounded-md px-3 text-sm font-medium transition-smooth';

  const noticiasClass = isNoticias 
    ? 'bg-gradient-primary text-white hover:shadow-glow transition-smooth border-0 font-semibold h-9 rounded-md px-3 inline-flex items-center gap-2 text-sm shadow-sm' 
    : 'hover:bg-accent hover:text-accent-foreground text-foreground/80 flex items-center gap-2 h-9 rounded-md px-3 text-sm font-medium transition-smooth';

  const navItemsDesktop = `
    <a href="index.html" class="${mapaClass}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      Mapa
    </a>
    <a href="agenda.html" class="${agendaClass}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      Agenda
    </a>
    <a href="noticias.html" class="${noticiasClass}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      Notícias
    </a>
  `;

  let authButtonsDesktop = '';
  if (user) {
    authButtonsDesktop = `
      <a href="admin.html" class="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md text-sm font-semibold transition-smooth inline-flex items-center justify-center gap-1.5 text-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-pink-500 dark:text-pink-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        Painel
      </a>
      <button onclick="logout()" class="flex items-center gap-2 h-9 rounded-md px-3 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-500/10 transition-smooth cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        Sair
      </button>
    `;
  } else {
    authButtonsDesktop = `
      <a href="login.html" class="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md text-sm font-semibold transition-smooth inline-flex items-center justify-center gap-1.5 text-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-pink-500 dark:text-pink-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        Login
      </a>
    `;
  }

  // Mobile navigation is a simple icons row
  const activeMobileClass = 'bg-gradient-primary text-white font-semibold rounded-md px-3 py-2 flex items-center justify-center transition-smooth';
  const inactiveMobileClass = 'hover:bg-accent hover:text-accent-foreground text-foreground/80 rounded-md px-3 py-2 flex items-center justify-center transition-smooth';

  const navItemsMobile = `
    <a href="index.html" class="${isMapa ? activeMobileClass : inactiveMobileClass}" title="Mapa">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    </a>
    <a href="agenda.html" class="${isAgenda ? activeMobileClass : inactiveMobileClass}" title="Agenda">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    </a>
    <a href="noticias.html" class="${isNoticias ? activeMobileClass : inactiveMobileClass}" title="Notícias">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    </a>
    <a href="${user ? 'admin.html' : 'login.html'}" class="${inactiveMobileClass}" title="${user ? 'Painel' : 'Login'}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </a>
    ${user ? `
      <button onclick="logout()" class="${inactiveMobileClass} text-red-600 hover:text-red-700 cursor-pointer" title="Sair">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
      </button>
    ` : ''}
  `;

  headerContainer.innerHTML = `
    <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-smooth">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          
          <!-- Logo -->
          <a href="index.html" class="flex items-center gap-3 cursor-pointer group">
            <div class="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-smooth">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-white"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            </div>
            <div>
              <h1 class="text-xl font-bold gradient-text leading-none">Blocos Feministas</h1>
              <span class="text-xs text-muted-foreground font-normal">Mapeando a resistência cultural</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-2">
            ${navItemsDesktop}
            ${authButtonsDesktop}
          </nav>
        </div>

        <!-- Mobile Navigation (visible on mobile only) -->
        <nav class="md:hidden flex justify-center gap-2 mt-4 pt-4 border-t border-border/50">
          ${navItemsMobile}
        </nav>
      </div>
    </header>
  `;
}

// Auto init theme and header
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeader();
});

// Default CEPIN JCR Data
const defaultCepinData = {
  endereco: "R. Antônio Fogaça de Almeida, 200 - Jardim América, Jacareí - SP, 12322-030 Sala 116 – CEPIN JCR",
  email: "cepinjcr@gmail.com",
  instagram: "@cepinjcr",
  facebook: "Cepin Jcr",
  youtube: "CEPIN JCR",
  
  apresentacaoTitulo: "Quem Somos: CEPIN Campus Jacareí",
  apresentacaoSubtitulo: "O Centro de Pesquisa e Inovação em Consumo, Mercados e Negócios de Jacareí (CEPIN JCR)",
  apresentacaoTexto: "A criação Centro de Pesquisa e Inovação em Consumo, Mercados e Negócios do câmpus de Jacareí (CEPIN-JCR) configura a importância da pesquisa e saber científico no ambiente do IFSP, possibilitando o envolvimento ao longo do tempo de pesquisadores, estudantes, técnicos administrativos e parceiros, no sentido de desenvolver trabalhos que atendam aos anseios e demandas da sociedade.\n\nO centro visa dar condições aos professores e alunos de se dedicarem à pesquisa e construírem núcleos que possam gerar formação profissional qualificada (atualmente, cursos técnicos e de graduação e, futuramente, cursos de mestrado e doutorado profissional) e desenvolvimento de linhas de pesquisa alinhadas às necessidades da sociedade, das empresas públicas, privadas e movimentos populares e sociais organizados, no sentido de lidar adequadamente com o ambiente complexo que caracteriza a sociedade atual.\n\nO CEPIN JCR tem como finalidade desenvolver investigação fundamental ou aplicada, de transferência de tecnologia; e oferecer atividades de extensão voltadas para o público em geral. O Centro possui as seguintes linhas de pesquisa: Comportamento do Consumidor e Consumo; Mercados, Sociedade e Organizações, e Marketing digital e Inovação.\n\nAtuamos como agentes de transformação, unindo rigor científico à prática extensionista em três frentes estratégicas: Diagnóstico e Políticas Públicas, Redes e Memória (incluindo divulgação científica) e Formação e Capacitação.",
  
  competencias: [
    "Propor, acompanhar e estimular projetos de pesquisa e inovação em parceria com instituições públicas ou privadas, tornando o IFSP uma referência na área proposta.",
    "Difundir as pesquisas realizadas pelo CEPIN no IFSP, estendendo seus benefícios à comunidade.",
    "Estimular a aproximação de grupos de pesquisa do IFSP com outros grupos de pesquisa e outras Instituições de Ensino e de Ciência e Tecnologia.",
    "Estimular a submissão de propostas aos editais da FAPESP de fomento aos CEPIDs.",
    "Dar condições aos professores de se dedicarem à pesquisa e construir núcleos que possam gerar formação profissional qualificada (atualmente, cursos técnicos e de graduação e, futuramente, cursos de mestrado e doutorado profissional).",
    "Dar condições aos professores de se dedicarem ao desenvolvimento de linhas de pesquisa alinhadas às necessidades da sociedade, das empresas públicas, privadas e movimentos populares e sociais organizados, no sentido de lidar adequadamente com o ambiente complexo que caracteriza a sociedade atual.",
    "Despertar a vocação científica e tecnológica dos alunos, de forma a estimular e desenvolver o pensamento científico, a capacidade criativa, o espírito crítico e a procura de novas respostas e soluções inovadoras, e conscientizar o aluno das questões sociais e éticas inerentes à pesquisa científica e tecnológica.",
    "Realizar as pesquisas agrupadas nas seguintes linhas: (1) Comportamento do Consumidor e Consumo; (2) Mercados, Sociedade e Organizações, (3) Marketing digital e Inovação.",
    "Buscar potenciais parceiros, em organizações privadas de diversos tipos de tamanho, nacionais ou multinacionais, do setor primário, secundário, ou terciário da economia. Empresários e profissionais autônomos. Movimentos sociais, populares e culturais. Organizações públicas, prefeituras, governos, agências e bancos de fomento e entidades do terceiro setor."
  ],
  
  parceirosTexto: "O CEPIN-JCR tem buscado organizações privadas de diversos tipos de tamanho, nacionais ou multinacionais, do setor primário, secundário, ou terciário da economia. Empresários e profissionais autônomos. Movimentos sociais, populares e culturais. Organizações públicas, prefeituras, governos, agências e bancos de fomento e entidades do terceiro setor.",
  
  projetos: [
    {
      titulo: "EnCEPIN 2022",
      descricao: "O primeiro Encontro Acadêmico do Centro de Pesquisa e Inovação em Consumo, Mercados e Negócios do IFSP Jacareí - EnCEPIN 2022, será realizado em formato on-line, no dia 26 de novembro de 2022. O evento será GRATUITO e aberto à participação de estudantes, professores, pesquisadores, profissionais de mercado e pessoas interessadas, tendo como temas Consumo, Mercados, Negócios e áreas afins.",
      link: "https://ocs.jcr.ifsp.edu.br/index.php/IEnCEPIN/CEPIN"
    },
    {
      titulo: "Ampliando a Nossa Voz",
      descricao: "Portfólio de ações de divulgação científica e comunicação do CEPIN-JCR.",
      link: "https://www.instagram.com/ampliandonossavoz?igsh=MTM3a2g0MGUyZzB6NA=="
    },
    {
      titulo: "Podcast de Marketing",
      descricao: "Podcast oficial do CEPIN-JCR sobre marketing, sociedade, consumo e inovação.",
      link: "https://open.spotify.com/show/0v92ASpoi0VvNqHtegiQRG?si=lBezlopeTcifB7m5yFUFCA&nd=1&dlsi=cbd7049964a54367"
    },
    {
      titulo: "Mapeamento Territorial da Cultura (Zenodo)",
      descricao: "Pesquisa e publicação dos dados obtidos no I Diagnóstico Mercado Cultural de Jacareí no repositório científico Zenodo.",
      link: "https://doi.org/10.5281/zenodo.20562928"
    },
    {
      titulo: "Protótipo de Mapeamento Cultural",
      descricao: "PWA interativo de mapeamento cultural e integração territorial para o fomento da cultura local.",
      link: "https://pwa.app.vc/mapa_cultural"
    }
  ],
  
  equipeTexto: "O Cepin do IFSP Campus Jacareí é composto atualmente por 8 pesquisadores, uma estagiária e uma bolsista, ambas alunas do curso de bacharelado em Administração.\n\nCoordenação: Simone Lisboa\n\nOs meios de contato com a equipe CEPIN do IFSP Campus Jacareí são:",
  equipeMembros: [
    { nome: "Ronan Quintão", campus: "IFSP Jacareí", cargo: "Professor", contato: "ronan.torres@ifsp.edu.br" },
    { nome: "Simone Lisboa", campus: "IFSP Jacareí", cargo: "Professora", contato: "simone.lisboa@ifsp.edu.br" },
    { nome: "Tardelli Stekel", campus: "IFSP Jacareí", cargo: "Professor", contato: "stekel@ifsp.edu.br" },
    { nome: "Denise Barros", campus: "IFSP Jacareí", cargo: "Professora", contato: "barros.denise@ifsp.edu.br" },
    { nome: "Aristides dos Santos", campus: "IFSP Cubatão", cargo: "Professor", contato: "aristidesfaria@ifsp.edu.br" },
    { nome: "Marlette Ferreira", campus: "IFSP Garaguatatuba", cargo: "Professora", contato: "marlette@ifsp.edu.br" },
    { nome: "Willian Feitosa", campus: "IFSP Pirituba", cargo: "Professor", contato: "wilian.feitosa@ifsp.edu.br" }
  ],
  equipeColaboradores: [],
  equipeDesenvolvedores: []
};

// Database helper functions for CEPIN
function getCepinData() {
  const data = localStorage.getItem('bf_cepin_data');
  if (!data) {
    localStorage.setItem('bf_cepin_data', JSON.stringify(defaultCepinData));
    return defaultCepinData;
  }
  try {
    const parsed = JSON.parse(data);
    let updated = false;
    
    // Migration: Migrate older 3-paragraph structure to a single unified string
    if (parsed.apresentacaoTexto1 && !parsed.apresentacaoTexto) {
      parsed.apresentacaoTexto = [
        parsed.apresentacaoTexto1,
        parsed.apresentacaoTexto2,
        parsed.apresentacaoTexto3,
        "Atuamos como agentes de transformação, unindo rigor científico à prática extensionista em três frentes estratégicas: Diagnóstico e Políticas Públicas, Redes e Memória (incluindo divulgação científica) e Formação e Capacitação."
      ].filter(Boolean).join('\n\n');
      delete parsed.apresentacaoTexto1;
      delete parsed.apresentacaoTexto2;
      delete parsed.apresentacaoTexto3;
      updated = true;
    }
    
    if (!parsed.equipeColaboradores) {
      parsed.equipeColaboradores = [];
      updated = true;
    }
    if (!parsed.equipeDesenvolvedores) {
      parsed.equipeDesenvolvedores = [];
      updated = true;
    }
    
    // Update projects array if it only has the old single element
    if (parsed.projetos && (parsed.projetos.length <= 1 || !parsed.projetos.some(p => p.titulo === "Ampliando a Nossa Voz"))) {
      parsed.projetos = defaultCepinData.projetos;
      updated = true;
    }
    
    if (updated) {
      localStorage.setItem('bf_cepin_data', JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    return defaultCepinData;
  }
}

async function saveCepinData(newData) {
  localStorage.setItem('bf_cepin_data', JSON.stringify(newData));
  
  // Async save to Supabase
  try {
    const supabase = await getSupabaseClient();
    if (supabase) {
      const { error } = await supabase
        .from('cepin_info')
        .upsert([{ id: 1, content: newData }]);
      if (error) console.warn('Supabase sync warning for cepin_info:', error);
    }
  } catch (e) {
    console.warn('Failed to sync CEPIN data with Supabase:', e);
  }
}

// Background sync for CEPIN (optional)
async function syncCepinFromSupabase() {
  try {
    const supabase = await getSupabaseClient();
    if (!supabase) return;
    const { data, error } = await supabase
      .from('cepin_info')
      .select('content')
      .eq('id', 1)
      .single();
    if (error) throw error;
    if (data && data.content) {
      localStorage.setItem('bf_cepin_data', typeof data.content === 'string' ? data.content : JSON.stringify(data.content));
      window.dispatchEvent(new CustomEvent('cepinSyncComplete'));
    }
  } catch (e) {
    console.log('Could not load CEPIN data from Supabase, using local data.');
  }
}

syncCepinFromSupabase();

// Dynamic Footer renderer
function renderFooter() {
  const path = window.location.pathname.toLowerCase();
  // Do not render footer on CEPIN, Admin or admin form pages
  if (
    path.indexOf('cepin.html') !== -1 || 
    path.indexOf('admin.html') !== -1 || 
    path.indexOf('admin-block-form.html') !== -1 || 
    path.indexOf('admin-event-form.html') !== -1
  ) {
    return;
  }

  const cepinData = getCepinData();
  let footerContainer = document.getElementById('footer-placeholder');
  
  if (!footerContainer) {
    footerContainer = document.createElement('div');
    footerContainer.id = 'footer-placeholder';
    document.body.appendChild(footerContainer);
  }
  
  footerContainer.innerHTML = `
    <footer class="bg-card/90 dark:bg-card/95 border-t border-border/50 backdrop-blur-md transition-smooth mt-10 py-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          <!-- Column 1: Localização & Contato -->
          <div class="space-y-4">
            <h3 class="text-sm font-extrabold uppercase tracking-wider text-primary">Localização e Contato</h3>
            <div class="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <div class="flex gap-2">
                <span class="flex-shrink-0 text-base">📍</span>
                <span><strong>Endereço:</strong> ${cepinData.endereco}</span>
              </div>
              <div class="flex gap-2">
                <span class="flex-shrink-0 text-base">✉️</span>
                <span><strong>Contato:</strong> <a href="mailto:${cepinData.email}" class="hover:text-primary transition-smooth">${cepinData.email}</a></span>
              </div>
            </div>
          </div>
          
          <!-- Column 2: Conheça o CEPIN Button -->
          <div class="flex flex-col items-center justify-center text-center space-y-4 md:py-4">
            <div class="relative group">
              <!-- Glow decoration -->
              <div class="absolute -inset-1.5 bg-gradient-to-r from-carnival-pink via-carnival-purple to-carnival-gold rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <a 
                href="cepin.html" 
                class="relative bg-gradient-primary hover:scale-[1.03] active:scale-[0.98] text-white font-extrabold text-base py-4 px-8 rounded-full shadow-carnival transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-0"
              >
                <span>🌸 Conheça o CEPIN</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
            <p class="text-xs text-muted-foreground max-w-[250px] font-medium leading-normal">
              Conheça nosso Centro de Pesquisa, equipe e linhas de inovação.
            </p>
          </div>
          
          <!-- Column 3: Redes Sociais -->
          <div class="space-y-3">
            <h3 class="text-sm font-extrabold uppercase tracking-wider text-primary">Redes Sociais</h3>
            <div class="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="https://instagram.com/${cepinData.instagram.replace('@', '')}" target="_blank" class="flex items-center gap-2 hover:text-primary transition-smooth">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram: ${cepinData.instagram}</span>
              </a>
              <a href="#" target="_blank" class="flex items-center gap-2 hover:text-primary transition-smooth">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span>Facebook: ${cepinData.facebook}</span>
              </a>
              <a href="#" target="_blank" class="flex items-center gap-2 hover:text-primary transition-smooth">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
                <span>YouTube: ${cepinData.youtube}</span>
              </a>
            </div>
          </div>
          
        </div>
        
        <!-- Bottom copyright -->
        <div class="mt-6 pt-4 border-t border-border/40 text-center text-xs text-muted-foreground">
          <p>© ${new Date().getFullYear()} CEPIN JCR - IFSP Campus Jacareí. Desenvolvido em parceria com Blocos Feministas.</p>
        </div>
      </div>
    </footer>
  `;
}

// Auto init theme, header and footer
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeader();
  renderFooter();
});
