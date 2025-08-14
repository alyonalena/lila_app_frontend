import Img1 from '../pics/image1.png'
import Img2 from '../pics/image2.png'
import Img3 from '../pics/image3.png'


export const emotions = "Святость / Грех / Икона / Разрушение / Бархат / Золото / Тьма / Слезы / Вино / Голливудские холмы / Отчаянная красота / Увядание / Эротика / Меланхолия / Театральность"

export const upcomingEvents = [
  {
    name: 'Дегустация Marie-Courtin',
    date: '22 августа 2025',
    city: 'Москва',
    place: 'The Nappe Bistro (Скатерный пер., 13)',
    price: '25 000 руб.',
    available: 2,
    hint: 'УЖЕ ЧЕРЕЗ НЕДЕЛЮ!',
    img: Img1,
    wineList: [
        {
            id: 0, 
            name: 'RESONANCE EXTRA BRUT 2016'
        },
        {
            id: 1, 
            name: 'EFFLORESCENCE EXTRA 2016'
        },
        {
            id: 2, 
            name: 'PRESENCE BLANC DE BLANCS EXTRA BRUT 2015'
        },
        {
            id: 3, 
            name: 'INDULGENCE ROSE EXTRA BRUT 2015'
        },
        {
            id: 4, 
            name: 'COTEAUX CHAMPENOIS LE BLANC DU TREMBLE 2016'
        },
        {
            id: 5, 
            name: 'MARIE-COURTIN CONCORDANCE 2018'
        },
        {
            id: 6, 
            name: 'MARIE-COURTIN BLANC DE BLANCS AMPHORA 2020'
        },
        {
            id: 7, 
            name: 'MARIE-COURTIN CHAMPANGE BLANC DE NOIRS AMPHORES EXTRA BRUT 2020'
        },
    ]
  },
  {
    name: 'Дегустация "Сет Мечты!"',
    date: '12 сентября 2025',
    city: 'Москва',
    place: 'Уточняется...',
    price: '45 000 руб.',
    available: 7,
    img: Img2,
    wineList: [
        {
            id: 8, 
            name: 'Cuvee № 747'
        },
        {
            id: 9, 
            name: 'Cuvee № 743'
        },
        {
            id: 10, 
            name: 'Dizy Terres Rouges 2015'
        },
        {
            id: 11, 
            name: 'Avize Champ Terme 2009'
        },
        {
            id: 12, 
            name: '"Ay" Vauzelle Terme 2009'
        },
        {
            id: 13, 
            name: 'Dizy Corne Bautray 2004'
        },
        {
            id: 14, 
            name: 'Millesime Degorgement Tardif 2002'
        },
    ]
  }
]

export const pastEvents = [
    {
      name: 'Дегустация CLANDESTIN',
      date: '31 июля 2025',
      city: 'Санкт-Петербург',
      place: 'Kira (Кирочная ул., 8а)',
      price: '20 000 руб.',
      img: Img3,
      wineList: [
          {
              id: 15, 
              name: 'JULIEN PLELAT'
          },
          {
              id: 16, 
              name: 'BOREAL 2021'
          },
          {
              id: 17, 
              name: 'AUSTRAL 2020'
          },
          {
              id: 18, 
              name: 'REVERS 2020'
          },
          {
              id: 19, 
              name: 'GRANDE LIGNES 2019'
          },
          {
              id: 20, 
              name: 'LES PASSAGERS "FIOLE" 100% Chardonnay 2022'
          },
          {
              id: 21, 
              name: 'LES PASSAGERS "HAUT DE VAL BARMONT" 100% Chardonnay 2022'
          },
      ]
    },
  ]


export const allWines = [
    {
        id: 0,
        name: 'RESONANCE EXTRA BRUT 2016',
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 1, 
        name: 'EFFLORESCENCE EXTRA 2016',
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 2, 
        name: 'PRESENCE BLANC DE BLANCS EXTRA BRUT 2015', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 3, 
        name: 'INDULGENCE ROSE EXTRA BRUT 2015', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 4, 
        name: 'COTEAUX CHAMPENOIS LE BLANC DU TREMBLE 2016', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 5, 
        name: 'MARIE-COURTIN CONCORDANCE 2018', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 6, 
        name: 'MARIE-COURTIN BLANC DE BLANCS AMPHORA 2020', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 7, 
        name: 'MARIE-COURTIN CHAMPANGE BLANC DE NOIRS AMPHORES EXTRA BRUT 2020', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 8, 
        name: 'Cuvee № 747', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 9, 
        name: 'Cuvee № 743', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 10, 
        name: 'Dizy Terres Rouges 2015', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 11, 
        name: 'Avize Champ Terme 2009', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 12, 
        name: '"Ay" Vauzelle Terme 2009', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 13, 
        name: 'Dizy Corne Bautray 2004', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 14, 
        name: 'Millesime Degorgement Tardif 2002', 
        description: 'Дополнительная информация о данном вине'
    },
    {
        id: 15, 
        name: 'JULIEN PLELAT'
    },
    {
        id: 16, 
        name: 'BOREAL 2021'
    },
    {
        id: 17, 
        name: 'AUSTRAL 2020'
    },
    {
        id: 18, 
        name: 'REVERS 2020'
    },
    {
        id: 19, 
        name: 'GRANDE LIGNES 2019'
    },
    {
        id: 20, 
        name: 'LES PASSAGERS "FIOLE" 100% Chardonnay 2022'
    },
    {
        id: 21, 
        name: 'LES PASSAGERS "HAUT DE VAL BARMONT" 100% Chardonnay 2022'
    },
]