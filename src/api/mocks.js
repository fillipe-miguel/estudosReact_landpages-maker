/* eslint-disable import/prefer-default-export */
export const pageDataMock = [
  {
    title: 'Title teste 01',
    slug: 'title-teste-01',
    menu: {
      logo_link: '#link-teste',
      logo_text: 'LOGO TESTE',
      logo: {
        data: {
          attributes: {
            url: 'https://url-da-imagem_teste.svg',
          },
        },
      },
      menu_link: [
        {
          link_text: 'Text do link test',
          url: '#link-test',
          open_in_new_tab: true,
        },
      ],
    },
    sections: [
      // ================================= Layout grid column / section two columns =================================
      {
        __component: 'section.section-two-columns',
        title: 'Essa é a seção de duas colunas',
        description: 'Descrição da seção de duas colunas',
        image: {
          data: {
            attributes: {
              url: 'https://layoutgridcolumn-test.jpg',
            },
          },
        },
        metadata: {
          section_id: 'section-two-columns',
          background: false,
        },
      },

      // ================================= Layout center content / section content ==================================
      {
        __component: 'section.section-content',
        title: 'Essa é a seção de uma coluna e só texto',
        content: 'lorem lorem lorem lorem lorem',
        metadata: {
          section_id: 'section-center-content',
          background: true,
        },
      },

      // ================================= Layout grid describe/ section grid text =================================
      {
        __component: 'section.section-grid',
        title: 'Aqui é a seção de grid com texto',
        description: 'Vários textos ai olha que loucura!',
        metadata: {
          section_id: 'grid-text',
          background: true,
        },
        text_grid: [
          {
            title: 'Teste 1',
            description: 'Lorem Ipsum teste',
          },
          {
            title: 'Teste 2 ',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          {
            title: 'Teste 3',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ],
        image_grid: [],
      },

      // ================================= Section grid image / Layout grid gallery =================================
      {
        __component: 'section.section-grid',
        title: 'Section grid com imagens / gallery',
        description: 'Éssa é a seção com o grid de imagens muito loucas',
        metadata: {
          name: 'section-grid-gallery',
          section_id: 'section-grid-gallery',
          background: true,
        },
        text_grid: [],
        image_grid: [
          {
            image: {
              data: {
                attributes: {
                  alternativeText: 'Mulher segurando o peso',
                  url: 'https://section-grid-gallery.jpg',
                },
              },
            },
          },
        ],
      },
    ],
    footer: '<p>Teste aqui</p>',
  },
];
