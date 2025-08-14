import Img1 from '../pics/image1.png'
import Img2 from '../pics/image2.png'


export const emotions = "Святость / Грех / Икона / Разрушение / Бархат / Золото / Тьма / Слезы / Вино / Голливудские холмы / Отчаянная красота / Увядание / Эротика / Меланхолия / Театральность"

export const events = [
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

