import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "products",
      [
        // tenis 01
        {
          productName: "Tênis OZWEEGO",
          description:
            "O estilo dos anos 90 era ousado. Por isso, não é surpresa que o tênis adidas OZWEEGO também seja. Ele tem raízes nessa era autêntica, com inspiração nos tênis de corrida da época. Hoje, o formato esculpido é uma dose de atitude que você pode usar com qualquer coisa no seu guarda-roupa. Detalhes metálicos e refletivos tornam este par ainda mais sofisticado.",
          price: 999.99,
          promo: 599.99,
          gender: "Unissex",
          colorsId: 23,
          categoriesId: 1,
          brandsId: 1,
          thumbnail: "",
          quantity: 50,
          images: JSON.stringify([
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d4cde377d04d4b818dd4435d93e1b4fb_9366/Tênis OZWEEGOTenis_OZWEEGO_Cinza_ID9822_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b51f8193885d40d5b52f57412411286a_9366/Tenis_OZWEEGO_Cinza_ID9822_04_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6f438b2603154d05986131ff94d0b586_9366/Tenis_OZWEEGO_Cinza_ID9822_05_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2100272929424b94a8b56812cddaf163_9366/Tenis_OZWEEGO_Cinza_ID9822_06_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ef927773b5894078ad146a389c4b1bed_9366/Tenis_OZWEEGO_Cinza_ID9822_09_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f55bd6d119284919acfdf813fa0c6af1_9366/Tenis_OZWEEGO_Cinza_ID9822_41_detail.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/df6a3da3a23e412fa35e6a827ca81943_9366/Tenis_OZWEEGO_Cinza_ID9822_42_detail.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ee5409b063cb4f869290e41251698687_9366/Tenis_OZWEEGO_Cinza_ID9822_02_standard_hover.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1e716572e718431398e16ad9e6eaaafd_9366/Tenis_OZWEEGO_Cinza_ID9822_03_standard.jpg",
          ]),
        },
        {
          productName:
            "Chuteira Society adidas Predator Essentials 24.5 Artilheira Júnior",
          description: `A Chuteira Society adidas Predator Essentials 24.5 Artilheira Júnior é a escolha certa para os jovens craques dominarem as quadras.

          Com cabedal sintético, solado emborrachado e travas baixas e fixas, oferece estabilidade e aderência durante as partidas.

          O cadarço assimétrico garante ajuste preciso, enquanto a palmilha forrada e o reforço acolchoado oferecem conforto e proteção.

          Escolha a Predator Essentials 24.5 Artilheira Júnior e destaque-se em campo!`,
          price: 309.99,
          promo: 259.99,
          gender: "Infantil Unissex",
          colorsId: 5,
          categoriesId: 3,
          brandsId: 1,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/98700802.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98700802A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98700802A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98700802A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98700802A4.jpg",
          ]),
        },
        // tenis 06
        {
          productName: "Tênis adidas Tyshawn - Masculino",
          description: `O Tênis adidas Tyshawn Masculino conta com cabedal macio e confortável, possui lingueta em mesh e microfuros no cabedal que garantem respirabilidade. Inspirado no basquete, seu design apresenta biqueira reforçada Adituff, palmilha moldada e cupsole de borracha aderente. A entressola possui mais flexibilidade para não prender os movimentos nas manobras, com o solado em borracha que garante mais grip e durabilidade.Principais características do Tênis adidas Tyshawn Masculino:Cabedal: PoliésterSolado: BorrachaEntressola: BorrachaPalmilha: EVAFechamento: CadarçoLingueta: Macia e flexívelForro: TêxtilTipo de Pisada: NeutraIndicado Para: Dia a diaDiferenciais: As três listras clássicas nas lateraisOrigem: Importado `,
          price: 699.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 1,
          categoriesId: 2,
          brandsId: 1,
          thumbnail: "",
          quantity: 7,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M14W5I31.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M14W5I31A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M14W5I31A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M14W5I31A3.jpg",
          ]),
        },
        // tenis 07
        {
          productName: "Tênis adidas Ultimashow - Feminino",
          description: `Tênis adidas Ultimashow - Feminino: Ideal para corridas e caminhadas, oferece conforto e suporte excepcionais. Possui cabedal em tecido respirável, entressola com amortecimento leve e solado de borracha para excelente tração. Design moderno e elegante, perfeito para esportes e uso diário.`,
          price: 349.99,
          promo: 0,
          gender: "Feminino",
          colorsId: 5,
          categoriesId: 4,
          brandsId: 1,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/95760602.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760602A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760602A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760602A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760602A4.jpg",
          ]),
        },
        {
          productName: "Tênis adidas Ultimashow - Feminino",
          description: `Tênis adidas Ultimashow - Feminino: Ideal para corridas e caminhadas, oferece conforto e suporte excepcionais. Possui cabedal em tecido respirável, entressola com amortecimento leve e solado de borracha para excelente tração. Design moderno e elegante, perfeito para esportes e uso diário.`,
          price: 349.99,
          promo: 0,
          gender: "Feminino",
          colorsId: 27,
          categoriesId: 4,
          brandsId: 1,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/95760610.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760610A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760610A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760610A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/95760610A4.jpg",
          ]),
        },
        // tenis 08
        {
          productName: "Tênis adidas Grand Court 2.0 - Feminino",
          description: `Descubra o conforto e estilo do Tênis adidas Grand Court 2.0. Com um cabedal de material de qualidade, entressola e solado emborrachados para durabilidade e tração, e contraforte acolchoado para suporte extra, este calçado é perfeito para o dia a dia. Seja para um passeio casual ou para atividades cotidianas, o Grand Court 2.0 oferece o equilíbrio ideal entre moda e funcionalidade. Adquira o seu agora e desfrute de conforto e confiança em cada passo.`,
          price: 299.99,
          promo: 0,
          gender: "Feminino",
          colorsId: 8,
          categoriesId: 1,
          brandsId: 1,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/97360651.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97360651A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97360651A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97360651A3.jpg",
          ]),
        },
        // tenis 09
        {
          productName: "Tênis adidas Dame Certified 2 Low - Unissex",
          description: `Não existe ninguém melhor que Damian Lillard para decidir um jogo importante. Projetado em harmonia com o estilo único de Dame dentro e fora das quadras, o mais novo tênis da adidas Basketball assinado por Damian Lillard inclui todas as ferramentas de que você precisa para dominar as quadras de basquete. A entressola Bounce é leve e flexiona-se com o pé, enquanto o solado de borracha oferece suporte para saltar, seja para fazer arremessos de dois pontos ou marcar o ponto decisivo do jogo.`,
          price: 599.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 5,
          categoriesId: 5,
          brandsId: 1,
          thumbnail: "",
          quantity: 9,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M12QR902.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M12QR902A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M12QR902A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M12QR902A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M12QR902A4.jpg",
          ]),
        },
        // tenis 10
        {
          productName: "Tênis adidas Harden Volume 8 - Unissex",
          description: `Só desafiar as regras não é suficiente para um craque como James Harden é necessário revolucionar o jogo. O mais novo tênis assinado pela adidas Basketball com James Harden continua homenageando um dos cestinhas de elite do basquete. Exibindo a combinação das entressolas adidas BOOST e Lightstrike, este tênis de basquete de alto desempenho oferece todo o suporte necessário para dominar as quadras.`,
          price: 1499.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 9,
          categoriesId: 5,
          brandsId: 1,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M1312W01.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1312W01A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1312W01A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1312W01A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1312W01A4.jpg",
          ]),
        },
        {
          productName: "Tênis adidas Harden Volume 8 - Unissex",
          description: `Só desafiar as regras não é suficiente para um craque como James Harden é necessário revolucionar o jogo. O mais novo tênis assinado pela adidas Basketball com James Harden continua homenageando um dos cestinhas de elite do basquete. Exibindo a combinação das entressolas adidas BOOST e Lightstrike, este tênis de basquete de alto desempenho oferece todo o suporte necessário para dominar as quadras.`,
          price: 1499.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 26,
          categoriesId: 5,
          brandsId: 1,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M1309307.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1309307A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1309307A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1309307A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M1309307A4.jpg",
          ]),
        },
        {
          productName: "Tênis adidas Harden Volume 8 - Unissex",
          description: `Só desafiar as regras não é suficiente para um craque como James Harden é necessário revolucionar o jogo. O mais novo tênis assinado pela adidas Basketball com James Harden continua homenageando um dos cestinhas de elite do basquete. Exibindo a combinação das entressolas adidas BOOST e Lightstrike, este tênis de basquete de alto desempenho oferece todo o suporte necessário para dominar as quadras.`,
          price: 1499.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 5,
          categoriesId: 5,
          brandsId: 1,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M14IDL02.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M14IDL02A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M14IDL02A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M14IDL02A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M14IDL02A4.jpg",
          ]),
        },
        // tenis 11
        {
          productName: "Chuteira Futsal Nike Beco 2 - Adulto",
          description: `Indicada para as quadras, o Tênis de Fustal Nike é a pedida certa para treinar as habilidades com maior desempenho e conforto.

          Seu cabedal (parte superior do calçado) é em material sintético com microfuros que auxiliam na ventilação interna, além de entressola em EVA que ajuda na dissipação dos impactos.

          Já o solado da Chuteira Futsal Nike Beco é específico para as quadras de futsal com pontos de giro que facilitam a mobilidade em todas as direções e otimizado com tecnologia Non-Marking para excelente tração.

          Não perca a chance, aproveite o ótimo preço e garanta a sua!`,
          price: 219.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 5,
          categoriesId: 3,
          brandsId: 2,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/1024x1024/8295513Q.jpg",
            "https://imgcentauro-a.akamaihd.net/1024x1024/8295513QA1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/8295513QA2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/8295513QA3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/8295513QA4.jpg",
          ]),
        },
        {
          productName: "Chuteira Futsal Nike Beco 2 - Adulto",
          description: `Indicada para as quadras, o Tênis de Fustal Nike é a pedida certa para treinar as habilidades com maior desempenho e conforto.

          Seu cabedal (parte superior do calçado) é em material sintético com microfuros que auxiliam na ventilação interna, além de entressola em EVA que ajuda na dissipação dos impactos.

          Já o solado da Chuteira Futsal Nike Beco é específico para as quadras de futsal com pontos de giro que facilitam a mobilidade em todas as direções e otimizado com tecnologia Non-Marking para excelente tração.

          Não perca a chance, aproveite o ótimo preço e garanta a sua!`,
          price: 219.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 28,
          categoriesId: 3,
          brandsId: 2,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/360x360/8295512V.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/8295512VA1.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/8295512VA2.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/8295512VA3.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/8295512VA4.jpg",
          ]),
        },
        // tenis 12
        {
          productName: "Chuteira Society Mizuno Morelia Classic Adulto",
          description: `Aperfeiçoe seu jogo com a Chuteira Society Mizuno Morelia Classic Adulto.

          Esta chuteira é uma fusão de tradição e inovação, proporcionando o equilíbrio perfeito entre estilo e desempenho.

          Com seu design clássico e elegante, e a tecnologia de ponta da Mizuno, você estará preparado para brilhar em qualquer campo society.

          Não perca mais tempo, adquira já a sua Morelia Classic e domine o jogo com confiança e estilo incomparáveis!`,
          price: 329.9,
          promo: 0,
          gender: "Unissex",
          colorsId: 5,
          categoriesId: 3,
          brandsId: 4,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/98679802.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98679802A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98679802A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98679802A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98679802A4.jpg",
          ]),
        },
        {
          productName: "Chuteira Society Mizuno Morelia Classic Adulto",
          description: `Aperfeiçoe seu jogo com a Chuteira Society Mizuno Morelia Classic Adulto.

          Esta chuteira é uma fusão de tradição e inovação, proporcionando o equilíbrio perfeito entre estilo e desempenho.

          Com seu design clássico e elegante, e a tecnologia de ponta da Mizuno, você estará preparado para brilhar em qualquer campo society.

          Não perca mais tempo, adquira já a sua Morelia Classic e domine o jogo com confiança e estilo incomparáveis!`,
          price: 329.9,
          promo: 289.99,
          gender: "Unissex",
          colorsId: 25,
          categoriesId: 3,
          brandsId: 4,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/360x360/M13CH611.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M13CH611A1.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M13CH611A2.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M13CH611A3.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M13CH611A4.jpg",
          ]),
        },
        {
          productName: "Chuteira Society Mizuno Morelia Classic Adulto",
          description: `Aperfeiçoe seu jogo com a Chuteira Society Mizuno Morelia Classic Adulto.

          Esta chuteira é uma fusão de tradição e inovação, proporcionando o equilíbrio perfeito entre estilo e desempenho.

          Com seu design clássico e elegante, e a tecnologia de ponta da Mizuno, você estará preparado para brilhar em qualquer campo society.

          Não perca mais tempo, adquira já a sua Morelia Classic e domine o jogo com confiança e estilo incomparáveis!`,
          price: 329.9,
          promo: 0,
          gender: "Unissex",
          colorsId: 9,
          categoriesId: 3,
          brandsId: 4,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/360x360/M1033W01.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M1033W01A1.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M1033W01A2.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M1033W01A3.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/M1033W01A4.jpg",
          ]),
        },
        // tenis 13
        {
          productName: "Chuteira Society Puma Future Play 7 - Adulto",
          description: `Desenvolvida para máxima performance, a Chuteira Puma Future Match 7 é a escolha certa para brilhar nas quadras de society.

          Seu cabedal sintético oferece durabilidade, enquanto a palmilha forrada proporciona conforto inigualável.

          Com solado emborrachado e a inovadora tecnologia Borracha Non-Marking, esta chuteira garante aderência sem deixar marcas.

          A lingueta integrada e o reforço acolchoado elevam o ajuste e a proteção.

          Com travas baixas e fixas, a Future Match 7 é a chave para dribles precisos e jogadas incríveis.

          Não perca a chance e adquira já!`,
          price: 249.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 9,
          categoriesId: 3,
          brandsId: 5,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/360x360/98781801.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/98781801A1.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/98781801A2.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/98781801A3.jpg",
            "https://imgcentauro-a.akamaihd.net/360x360/98781801A4.jpg",
          ]),
        },
        {
          productName: "Tênis Puma ST Runner V2 SN BDP - Masculino",
          description: `
          Multiuso para compor looks versáteis com um toque esportivo no contexto urbano, o Tênis Puma ST Runner V2 SN BDP é a pedida certa.

          Seu cabedal (parte superior do tênis) apresenta a leveza do têxtil com sobreposições sintéticas para suporte e apoio.
                  
          Na entressola do Tênis Puma ST Runner V2 a inserção de EVA lixado em toda a extensão oferece um leve e duradouro amortecimento. Já a palmilha é diferenciada pela tecnologia SOFTFOAM, combinação ideal entre maciez e efeito memória para maior conforto.
                  
          Confira o ótimo preço e garanta o seu!`,
          price: 279.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 16,
          categoriesId: 1,
          brandsId: 5,
          thumbnail: "",
          quantity: 30,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96192103.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192103A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192103A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192103A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192103A4.jpg",
          ]),
        },
        {
          productName: "Tênis Puma ST Runner V2 SN BDP - Masculino",
          description: `
          Multiuso para compor looks versáteis com um toque esportivo no contexto urbano, o Tênis Puma ST Runner V2 SN BDP é a pedida certa.

          Seu cabedal (parte superior do tênis) apresenta a leveza do têxtil com sobreposições sintéticas para suporte e apoio.
                  
          Na entressola do Tênis Puma ST Runner V2 a inserção de EVA lixado em toda a extensão oferece um leve e duradouro amortecimento. Já a palmilha é diferenciada pela tecnologia SOFTFOAM, combinação ideal entre maciez e efeito memória para maior conforto.
                  
          Confira o ótimo preço e garanta o seu!`,
          price: 259.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 1,
          categoriesId: 1,
          brandsId: 5,
          thumbnail: "",
          quantity: 30,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96192131.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192131A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192131A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192131A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96192131A4.jpg",
          ]),
        },
        // tenis 21
        {
          productName: "Tênis Infantil Olympikus Stream",
          description: `
          Os pequenos vão ficar ainda mais estilosos e confortáveis ao lado da Olympikus.

          Conta com a qualidade da marca em todos seus detalhes e o tênis Stream é ideal.

          O seu cabeQuantidadedal é sintético, a entressola é em EVA e o solado é leve com cortes para flexibilidade.

          Já sua lingueta é integrada, a palmilha é removível e tem forro acolchoado.

          Compre agora mesmo seu tênis Infantil Olympikus!`,
          price: 199.99,
          promo: 0,
          gender: "Infantil Masculino",
          colorsId: 5,
          categoriesId: 1,
          brandsId: 6,
          thumbnail: "",
          quantity: 9,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M11QAR02.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M11QAR02A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M11QAR02A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M11QAR02A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M11QAR02A4.jpg",
          ]),
        },
        {
          productName: "Tênis Infantil Olympikus Stream",
          description: `
          Os pequenos vão ficar ainda mais estilosos e confortáveis ao lado da Olympikus.

          Conta com a qualidade da marca em todos seus detalhes e o tênis Stream é ideal.

          O seu cabedal é sintético, a entressola é em EVA e o solado é leve com cortes para flexibilidade.

          Já sua lingueta é integrada, a palmilha é removível e tem forro acolchoado.

          Compre agora mesmo seu tênis Infantil Olympikus!`,
          price: 199.99,
          promo: 0,
          gender: "Infantil Masculino",
          colorsId: 12,
          categoriesId: 1,
          brandsId: 6,
          thumbnail: "",
          quantity: 9,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M0Z00504.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M0Z00504A1.jpg",
          ]),
        },
        //tenis 22
        {
          productName: "Tênis Nike Court Vision Low Next Nature - Masculino",
          description: `
          Um modelo clássico dos anos 80, o Nike Court Vision Low Next Nature é muito versátil e permite looks modernos e estilosos com outras peças no dia a dia.

          O cabedal em sintético é fácil de limpar e garante suporte e durabilidade com detalhes acolchoados que ajudam a diminuir o desconforto do atrito de contato.
                  
          Com design minimalista, apresenta entressola e solado peça única de construção vulcanizada para mais estabilidade e uma distribuição natural da passada..
                  
          O tênis certo para todos os momentos no padrão Nike de qualidade. Compre o seu!`,
          price: 499.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 9,
          categoriesId: 1,
          brandsId: 2,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96256101.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256101A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256101A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256101A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256101A4.jpg",
          ]),
        },
        {
          productName: "Tênis Nike Court Vision Low Next Nature - Masculino",
          description: `
          Um modelo clássico dos anos 80, o Nike Court Vision Low Next Nature é muito versátil e permite looks modernos e estilosos com outras peças no dia a dia.

          O cabedal em sintético é fácil de limpar e garante suporte e durabilidade com detalhes acolchoados que ajudam a diminuir o desconforto do atrito de contato.
                  
          Com design minimalista, apresenta entressola e solado peça única de construção vulcanizada para mais estabilidade e uma distribuição natural da passada..
                  
          O tênis certo para todos os momentos no padrão Nike de qualidade. Compre o seu!`,
          price: 499.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 1,
          categoriesId: 1,
          brandsId: 2,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96256131.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256131A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256131A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256131A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256131A4.jpg",
          ]),
        },
        {
          productName: "Tênis Nike Court Vision Low Next Nature - Masculino",
          description: `
          Um modelo clássico dos anos 80, o Nike Court Vision Low Next Nature é muito versátil e permite looks modernos e estilosos com outras peças no dia a dia.

          O cabedal em sintético é fácil de limpar e garante suporte e durabilidade com detalhes acolchoados que ajudam a diminuir o desconforto do atrito de contato.
                  
          Com design minimalista, apresenta entressola e solado peça única de construção vulcanizada para mais estabilidade e uma distribuição natural da passada..
                  
          O tênis certo para todos os momentos no padrão Nike de qualidade. Compre o seu!`,
          price: 499.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 8,
          categoriesId: 1,
          brandsId: 2,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96256151.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256151A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256151A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256151A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96256151A4.jpg",
          ]),
        },
        // tenis 23
        {
          productName: "Tênis Air Vapormax 2023 FK - Masculino",
          description: `
          Monte lookinhos super lindos e estilosos com o tênis Air Vapormax 2023 FK.

          Conta com sua tecnologia Air Max que proporciona conforto.
                  
          Além disso, o seu design é de tirar o fôlego.
                  
          Tenha certeza de ter escolhido o melhor com a Nike.`,
          price: 1899.99,
          promo: 1199.99,
          gender: "Masculino",
          colorsId: 14,
          categoriesId: 1,
          brandsId: 2,
          thumbnail: "",
          quantity: 25,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/1366x1366/98283112.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283112A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283112A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283112A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283112A4.jpg",
          ]),
        },
        {
          productName: "Tênis Air Vapormax 2023 FK - Masculino",
          description: `
          Monte lookinhos super lindos e estilosos com o tênis Air Vapormax 2023 FK.

          Conta com sua tecnologia Air Max que proporciona conforto.
                  
          Além disso, o seu design é de tirar o fôlego.
                  
          Tenha certeza de ter escolhido o melhor com a Nike.`,
          price: 1899.99,
          promo: 1399.99,
          gender: "Masculino",
          colorsId: 5,
          categoriesId: 1,
          brandsId: 2,
          thumbnail: "",
          quantity: 25,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/98283102.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283102A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283102A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283102A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98283102A4.jpg",
          ]),
        },
        {
          productName: "Tênis Air Vapormax 2023 FK - Masculino",
          description: `
          Monte lookinhos super lindos e estilosos com o tênis Air Vapormax 2023 FK.

          Conta com sua tecnologia Air Max que proporciona conforto.
                  
          Além disso, o seu design é de tirar o fôlego.
                  
          Tenha certeza de ter escolhido o melhor com a Nike.`,
          price: 1899.99,
          promo: 1399.99,
          gender: "Masculino",
          colorsId: 9,
          categoriesId: 1,
          brandsId: 2,
          thumbnail: "",
          quantity: 25,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/982831SO.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/982831SOA1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/982831SOA2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/982831SOA3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/982831SOA4.jpg",
          ]),
        },
        // tenis 24
        {
          productName: "Tênis Vans Range Exp - Masculino",
          description: `
          Casual e despojado, o tênis Vans é perfeito para o dia a dia agitado.

          Seu cabedal (parte superior do calçado) em material estruturado e resistente, oferece apoio e durabilidade.
                  
          O tênis apresenta entressola em EVA e solado emborrachado que garantem maior estabilidade e aderência em superfícies irregulares.
                  
          O contraforte possui reforço acolchoado para maior segurança e passante. Venha conferir hoje e compre já!`,
          price: 599.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 1,
          categoriesId: 2,
          brandsId: 3,
          thumbnail: "",
          quantity: 20,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/97099731.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099731A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099731A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099731A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099731A4.jpg",
          ]),
        },
        {
          productName: "Tênis Vans Range Exp - Masculino",
          description: `
          Casual e despojado, o tênis Vans é perfeito para o dia a dia agitado.

          Seu cabedal (parte superior do calçado) em material estruturado e resistente, oferece apoio e durabilidade.
                  
          O tênis apresenta entressola em EVA e solado emborrachado que garantem maior estabilidade e aderência em superfícies irregulares.
                  
          O contraforte possui reforço acolchoado para maior segurança e passante. Venha conferir hoje e compre já!`,
          price: 599.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 13,
          categoriesId: 2,
          brandsId: 3,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/97099704.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099704A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099704A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099704A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099704A4.jpg",
          ]),
        },
        // tenis 25
        {
          productName: "Tênis Vans Range Exp - Feminino",
          description: `
          Casual e despojado, o tênis Vans é perfeito para o dia a dia agitado.

          Seu cabedal (parte superior do calçado) em material estruturado e resistente, oferece apoio e durabilidade.

          O tênis apresenta entressola em EVA e solado emborrachado que garantem maior estabilidade e aderência em superfícies irregulares.

          O contraforte possui reforço acolchoado para maior segurança e passante. Venha conferir hoje e compre já!`,
          price: 499.99,
          promo: 0,
          gender: "Feminino",
          colorsId: 1,
          categoriesId: 2,
          brandsId: 3,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/97099831.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099831A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099831A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099831A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97099831A4.jpg",
          ]),
        },
        // tenis 26
        {
          productName: "Tênis Nike SB Force 58 PRM Masculino",
          description: `
          Combine o melhor do skate e do estilo casual com o Tênis Nike SB Force 58 PRM. Este modelo é perfeito para quem busca desempenho nas pistas de skate sem abrir mão do visual moderno e versátil para o dia a dia.

          Desenvolvido para skatistas, o Nike SB Force 58 PRM oferece a durabilidade e a aderência necessárias para manobras intensas.
                  
          O solado em borracha proporciona tração excelente, garantindo que você se mantenha firme em qualquer superfície. Além disso, o cabedal em material resistente protege contra o desgaste, prolongando a vida útil do seu tênis.
                  
          O design deste modelo é outro destaque. Com um visual contemporâneo e linhas limpas, ele se adapta perfeitamente ao seu estilo casual, permitindo que você transite facilmente do skate para as atividades cotidianas.
                  
          A palmilha acolchoada oferece conforto durante o uso prolongado, tornando-o uma escolha ideal tanto para sessões de skate quanto para passeios urbanos.
                  
          O Nike SB Force 58 PRM é mais do que um simples tênis de skate; é um símbolo de estilo e funcionalidade.
                  
          Invista no seu desempenho e no seu look com este modelo excepcional.
                  
          Garanta já o seu Tênis Nike SB Force 58 PRM e esteja pronto para qualquer desafio, dentro e fora das pistas!`,
          price: 559.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 14,
          categoriesId: 2,
          brandsId: 2,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/97989912.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97989912A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97989912A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97989912A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/97989912A4.jpg",
          ]),
        },
        // tenis 27
        {
          productName:
            "Tênis Vans Filmore HI - Tênis Vans Filmore HI - Masculino",
          description: `
          O Filmore HI apresenta um visual descolado e cheio de atitude em cano alto para você encarar as manobras de um skate ou um rolê urbano.

          O cabedal (parte superior do calçado) é em lona de algodão resistente com reforço acolchoado no colar do tornozelo que ajuda a minimizar o desconforto do atrito de contato.
                  
          Na entressola plana, a tira emborrachada em toda a extensão oferece mais durabilidade.
                  
          O solado é característico da Vans no padrão waffle que promove mais aderência e estabilidade sobre o skate ou superfície.
                  
          Já o design é versátil e garante diversas combinações descoladas e cheias de estilo no streetwear. Não perca mais tempo e compre já o seu!`,
          price: 499.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 5,
          categoriesId: 2,
          brandsId: 3,
          thumbnail: "",
          quantity: 25,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96564302A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564302A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564302A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564302A4.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564302A5.jpg",
          ]),
        },
        {
          productName:
            "Tênis Vans Filmore HI - Tênis Vans Filmore HI - Masculino",
          description: `
          O Filmore HI apresenta um visual descolado e cheio de atitude em cano alto para você encarar as manobras de um skate ou um rolê urbano.

          O cabedal (parte superior do calçado) é em lona de algodão resistente com reforço acolchoado no colar do tornozelo que ajuda a minimizar o desconforto do atrito de contato.
                  
          Na entressola plana, a tira emborrachada em toda a extensão oferece mais durabilidade.
                  
          O solado é característico da Vans no padrão waffle que promove mais aderência e estabilidade sobre o skate ou superfície.
                  
          Já o design é versátil e garante diversas combinações descoladas e cheias de estilo no streetwear. Não perca mais tempo e compre já o seu!`,
          price: 499.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 12,
          categoriesId: 2,
          brandsId: 3,
          thumbnail: "",
          quantity: 25,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96564305.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564305A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564305A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564305A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96564305A4.jpg",
          ]),
        },
        // tenis 28
        {
          productName: "Tênis Vans WM Filmore HI - Feminino",
          description: `
            Estilo é sinônimo de Vans, além de qualidade. Tenha certeza que seus looks serão associados com muita atitude.

          O cabedal é em material em couro e lona, entressola e solado emborrachados.
                  
          Ainda conta com lingueta flexível, palmilha injetada e forro com reforço acolchoado.
                  
          O seu cano é alto e ajuste em cadarço. Compre já o seu tênis WM Filmore HI!`,
          price: 499.99,
          promo: 0,
          gender: "Feminino",
          colorsId: 1,
          categoriesId: 2,
          brandsId: 3,
          thumbnail: "",
          quantity: 0,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/96563931.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96563931A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96563931A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96563931A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/96563931A4.jpg",
          ]),
        },
        // tenis 29
        {
          productName: "Tênis Nike Ja 1 - Adulto",
          description: `Ja Morant se tornou a superestrela que é hoje, afundando repetidamente jumpers em aros tortos, pulando em pneus de trator e driblando cones de trânsito nos verões úmidos da Carolina do Sul. O Ja 1 é uma prova de sua ascensão. Com o Zoom Air, ele suporta bunny hops e hipervelocidade sem sacrificar o conforto, para que você possa controlar seu próprio destino na quadra.`,
          price: 1199.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 9,
          categoriesId: 5,
          brandsId: 2,
          thumbnail: "",
          quantity: 20,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M112TL01.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M112TL01A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M112TL01A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M112TL01A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M112TL01A4.jpg",
          ]),
        },
        // tenis 30
        {
          productName: "Tênis Nike Air Jordan XXXVIII Low - Adulto",
          description: `O AJ XXXVIII tem tudo a ver com trabalho de base - estamos falando de corrida, corte, saltos giratórios - com amortecimento baixo para a quadra e uma parte superior segura que ajuda a apoiar cada movimento. Também foi concebido tendo em mente a sustentabilidade, com pelo menos 20% do seu conteúdo reciclado.`,
          price: 1599.99,
          promo: 1199.99,
          gender: "Unissex",
          colorsId: 5,
          categoriesId: 5,
          brandsId: 2,
          thumbnail: "",
          quantity: 10,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M13GCD02.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13GCD02A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13GCD02A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13GCD02A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13GCD02A4.jpg",
          ]),
        },
        // tenis 31
        {
          productName: "Tênis Nike Zoom Freak 5 - Adulto",
          description: `O motor interno de Giannis acelera profundamente, exigindo um tênis que possa aproveitar suas habilidades de superpoder. Entre no Giannis Freak 5. Equipado com uma velocidade impressionante para primeiros passos super rápidos, recheado com aquele tipo de amortecimento elástico que pode suportar a rotina de todo o jogo, seu tênis exclusivo permite que você se sinta como o Greek Freak. Passe pelo seu oponente a caminho do aro enquanto se mantém com os manipuladores de bola de contração rápida quando uma posição defensiva decide o jogo.`,
          price: 1299.99,
          promo: 999.99,
          gender: "Unissex",
          colorsId: 7,
          categoriesId: 5,
          brandsId: 2,
          thumbnail: "",
          quantity: 12,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M13XU401.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13XU401A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13XU401A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13XU401A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13XU401A4.jpg",
          ]),
        },
        // tenis 32
        {
          productName: "Tênis Puma Court Rider Superman 85Th - Unissex",
          description: ``,
          price: 799.99,
          promo: 0,
          gender: "Unissex",
          colorsId: 31,
          categoriesId: 5,
          brandsId: 5,
          thumbnail: "",
          quantity: 19,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/M13RZG23.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13RZG23A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13RZG23A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13RZG23A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/M13RZG23A4.jpg",
          ]),
        },
        // tenis 33
        {
          productName: "Tênis Nike Revolution 7 - Masculino",
          description: `
          Se você busca um tênis versátil que oferece desempenho superior tanto para corrida quanto para caminhada, o Tênis Nike Revolution 7 é a escolha perfeita.

          Este calçado não é apenas um par de tênis, é o seu companheiro de jornada, projetado para proporcionar conforto e apoio em cada passo que você dá.
                  
          O cabedal é feito com materiais de alta qualidade que oferecem um ajuste perfeito que abraça o seu pé, garantindo conforto durante todo o percurso.
                  
          Suas caminhadas e corridas serão mais agradáveis do que nunca.
                  
          O Tênis Nike Revolution 7 é ideal para corridas, caminhadas, treinamento na academia e para o seu estilo de vida ativo. Ele se adapta a diversas atividades com facilidade.
                  
          Não perca tempo e adquira já!`,
          price: 399.99,
          promo: 299.99,
          gender: "Masculino",
          colorsId: 9,
          categoriesId: 4,
          brandsId: 2,
          thumbnail: "",
          quantity: 20,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/98582401.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582401A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582401A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582401A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582401A4.jpg",
          ]),
        },
        {
          productName: "Tênis Nike Revolution 7 - Masculino",
          description: `
          Se você busca um tênis versátil que oferece desempenho superior tanto para corrida quanto para caminhada, o Tênis Nike Revolution 7 é a escolha perfeita.

          Este calçado não é apenas um par de tênis, é o seu companheiro de jornada, projetado para proporcionar conforto e apoio em cada passo que você dá.
                  
          O cabedal é feito com materiais de alta qualidade que oferecem um ajuste perfeito que abraça o seu pé, garantindo conforto durante todo o percurso.
                  
          Suas caminhadas e corridas serão mais agradáveis do que nunca.
                  
          O Tênis Nike Revolution 7 é ideal para corridas, caminhadas, treinamento na academia e para o seu estilo de vida ativo. Ele se adapta a diversas atividades com facilidade.
                  
          Não perca tempo e adquira já!`,
          price: 399.99,
          promo: 299.99,
          gender: "Masculino",
          colorsId: 1,
          categoriesId: 4,
          brandsId: 2,
          thumbnail: "",
          quantity: 20,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/98582431.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582431A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582431A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582431A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98582431A4.jpg",
          ]),
        },
        // tenis 34
        {
          productName: "Tênis ASICS Novablast 4 Senna Masculino",
          description: ``,
          price: 1199.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 13,
          categoriesId: 4,
          brandsId: 7,
          thumbnail: "",
          quantity: 12,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/9892782R.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9892782RA1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9892782RA2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9892782RA3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9892782RA4.jpg",
          ]),
        },
        // tenis 35
        {
          productName: "Tênis Mizuno Cool Ride 2 Feminino",
          description: `
          Explore o conforto supremo do Tênis Mizuno Cool Ride 2.

          Projetado para oferecer uma experiência de corrida excepcional, este calçado apresenta a tecnologia Softierfoam, que proporciona um alto nível de maciez a cada passo.
                  
          Com o cabedal em Mesh, este tênis oferece respirabilidade e leveza, mantendo seus pés frescos e confortáveis durante todo o seu treino.
                  
          A entressola em EVA proporciona amortecimento adicional, garantindo uma sensação de suavidade e conforto em cada movimento.
                  
          Prepare-se para desfrutar de uma corrida suave e sem esforço com o Tênis Mizuno Cool Ride 2.
                  
          Experimente o máximo conforto e performance em cada passada, alcançando seus objetivos com facilidade e estilo!`,
          price: 379.99,
          promo: 0,
          gender: "Feminino",
          colorsId: 14,
          categoriesId: 4,
          brandsId: 4,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/98650612.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98650612A1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98650612A2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98650612A3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/98650612A4.jpg",
          ]),
        },
        {
          productName: "Tênis Mizuno Cool Ride 2 Feminino",
          description: `
          Explore o conforto supremo do Tênis Mizuno Cool Ride 2.

          Projetado para oferecer uma experiência de corrida excepcional, este calçado apresenta a tecnologia Softierfoam, que proporciona um alto nível de maciez a cada passo.
                  
          Com o cabedal em Mesh, este tênis oferece respirabilidade e leveza, mantendo seus pés frescos e confortáveis durante todo o seu treino.
                  
          A entressola em EVA proporciona amortecimento adicional, garantindo uma sensação de suavidade e conforto em cada movimento.
                  
          Prepare-se para desfrutar de uma corrida suave e sem esforço com o Tênis Mizuno Cool Ride 2.
                  
          Experimente o máximo conforto e performance em cada passada, alcançando seus objetivos com facilidade e estilo!`,
          price: 379.99,
          promo: 299.99,
          gender: "Feminino",
          colorsId: 1,
          categoriesId: 4,
          brandsId: 4,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/9865060P.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9865060PA1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9865060PA2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9865060PA3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9865060PA4.jpg",
          ]),
        },
        // tenis 36
        {
          productName: "Tênis ASICS Gel-Pulse 15 SE Masculino",
          description: `Descubra a excelência em cada passada com o Tênis ASICS Gel-Pulse 15 SE Masculino!

           Desenvolvido para corridas de alta performance, este tênis oferece o máximo de conforto e suporte.
                   
           Seu cabedal em mesh proporciona respirabilidade e leveza, enquanto a entressola em EVA e as tecnologias de amortecimento Gel e FlyteFoam garantem uma corrida suave e responsiva.
                   
           O solado de borracha durável oferece tração confiável em qualquer superfície, e o suporte acolchoado proporciona ajuste seguro e confortável.
                   
           Experimente o desempenho de elite com o Tênis ASICS Gel-Pulse 15 SE e eleve sua corrida para o próximo nível!`,
          price: 699.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 19,
          categoriesId: 4,
          brandsId: 7,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/9859816T.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9859816TA1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9859816TA10.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9859816TA2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/9859816TA3.jpg",
          ]),
        },
        {
          productName: "Tênis ASICS Gel-Pulse 15 SE Masculino",
          description: `Descubra a excelência em cada passada com o Tênis ASICS Gel-Pulse 15 SE Masculino!

           Desenvolvido para corridas de alta performance, este tênis oferece o máximo de conforto e suporte.
                   
           Seu cabedal em mesh proporciona respirabilidade e leveza, enquanto a entressola em EVA e as tecnologias de amortecimento Gel e FlyteFoam garantem uma corrida suave e responsiva.
                   
           O solado de borracha durável oferece tração confiável em qualquer superfície, e o suporte acolchoado proporciona ajuste seguro e confortável.
                   
           Experimente o desempenho de elite com o Tênis ASICS Gel-Pulse 15 SE e eleve sua corrida para o próximo nível!`,
          price: 699.99,
          promo: 0,
          gender: "Masculino",
          colorsId: 5,
          categoriesId: 4,
          brandsId: 7,
          thumbnail: "",
          quantity: 15,
          images: JSON.stringify([
            "https://imgcentauro-a.akamaihd.net/768x768/985981CT.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/985981CTA1.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/985981CTA2.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/985981CTA3.jpg",
            "https://imgcentauro-a.akamaihd.net/768x768/985981CTA4.jpg",
          ]),
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("products", {});
  },
};

        // modelo de Produto
        // {
        //   productName: "",
        //   description: ``,
        //   price: 0,
        //   promo: 0,
        //   gender: "",
        //   colorsId: 0,
        //   categoriesId: 0,
        //   brandsId: 0,
        //   thumbnail: "",
        //   quantity: 0,
        //   images: JSON.stringify(["a", "a", "a", "a", "a"]),
        // },
