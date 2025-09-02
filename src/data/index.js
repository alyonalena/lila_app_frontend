import Img1 from '../pics/image1.png'
import Img2 from '../pics/image2.png'
import Img3 from '../pics/image3.png'
import Img4 from '../pics/image4.png'
import Wine1 from '../pics/wine1.png'
import Wine2 from '../pics/wine2.png'
import Wine3 from '../pics/wine3.png'


export const upcomingEvents = [
    {
        name: 'Дегустация «Jacquesson»',
        date: '12 сентября 2025',
        city: 'Москва',
        week_day: 'ПТ',
        place: 'Место уточняется...',
        price: '45 000 руб.',
        available: 0,
        producerId: 2,
        img: Img2,
        wineList: [ 8, 9, 10, 11, 12, 13, 14 ]
    },
    {
        name: 'Дегустация «Ruppert-Leroy»',
        date: '18 сентября 2025',
        city: 'Санкт-Петербург',
        week_day: 'ЧТ',
        place: 'Teya Neo',
        price: '20 000 руб.',
        available: 0,        
        producerId: 3,
        img: Img4,
        wineList: [ 22, 23, 24, 25, 26, 27 ]
    },
    /*{
        name: 'Дегустация «Roses de Jeanne»',
        wineList: []
    },*/
]

export const pastEvents = [
    {
        name: 'Дегустация «Marie Courtin»',
        date: '22 августа 2025',
        week_day: 'ПТ',
        city: 'Москва',
        producerId: 0,
        place: 'The Nappe Bistro ',
        address: 'Скатерный пер., 13',
        price: '25 000 руб.',
        available: 0,
        img: Img1,
        wineList: [ 0, 1, 2, 3, 4, 5, 6, 7 ]
    },
    {
        name: 'Дегустация «Clandestin»',
        producerId: 1,
        date: '31 июля 2025',
        city: 'Санкт-Петербург',
        place: 'Kira',        
        address: 'Кирочная ул., 8а',
        price: '20 000 руб.',
        img: Img3,
        week_day: 'ЧТ',
        wineList: [ 15, 16, 17, 18, 19, 20, 21 ]
    },
  ]


export const allWines = [
    {
        id: 0,        
        name: "Resonance",
        img: Wine1,
        saved: true,
        category: "Шампанское",
        sugar: "Extra Brut",
        color: "Белое",
        country: "Франция",
        region: "Шампань",
        grape_variety: [ {name: 'Пино нуар', pers: 100 } ],
        volume: "0.75",
        /*available_number: 3,*/
        producerId: 0,
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2016",
        vineyard: "-",
        description: [
            'Можно сказать, что базовое вино от Доминик Моро.',
            'Но скорее всего это кюве будет другое по стилю и названию.',
            'Пино Нуар со всех участков (2.5 Га).',
            'Яркое, открытое и что удивляет! Вино 2016, при этом вино будет спокойно жить ещё 5 лет.',
        ]
    },
    {
        id: 1, 
        name: "Efflorescence",
        img: Wine2,
        saved: true,
        category: "Шампанское",
        sugar: "Extra Brut",
        color: "Белое",
        country: "Франция",
        region: "Шампань",
        grape_variety: [ {name: 'Пино нуар', pers: 100 } ],
        volume: "0.75",
        /*available_number: 3,*/
        producerId: 0,
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2016",
        vineyard: "-",
        description: [
            'Флагман для Доминик Моро! Плотный Пино Нуар, с участков с более высоким потенциалом.',
            'Мы даже придумали новый термин для описания Шампани "Кубанское масло" :)',
            'Много семечек, объема и фрукт слабо сияет'
        ]
    },
    {
        id: 2, 
        name: "Présence",
        img: Wine3,
        saved: true,
        category: "Шампанское",
        sugar: "Extra Brut",
        country: "Франция",
        region: "Шампань",
        grape_variety: [ { name: 'Шардоне', pers: 65 }, { name: 'Пино блан', pers: 35 } ],
        volume: "0.75",
        /*available_number: 3,*/
        producerId: 0,
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2015",
        vineyard: "-",
        description: [
            'Интересный эксперимент по бленду: ',
            '65% Шардоне - отвечает за кислотность и структуру',
            '35% Пино Блан - сорт редкий для Шампани, но сейчас интересно смотреть за его особенностями',
            'Аромат сухих трав и аптечные нюансы',
        ],
    },
    {
        id: 3, 
        name: "Indulgence", 
        category: "Шампанское",
        sugar: "Extra Brut",
        color: "Розе",
        country: "Франция",
        region: "Шампань",
        grape_variety:  [ {name: 'Пино нуар', pers: 100 } ],
        volume: "0.75",
        /*available_number: 3,*/
        producerId: 0,
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2015",
        vineyard: "-",
        description: [
            "В мире очень много людей, кто не понимает розовую Шампань",
            "И я их понимаю",
            "Чтобы понять Розе в Champagne, нужно идти другим путем",
            "Rose из Cote des Bar", 
            "В бокале субтильный Пино Нуар с низкой газацией.",
            "Брусника, специи и немного сладкой карамели с перчем чили."
        ],
    },
    {
        id: 4, 
        name: "Côteaux Champenois Le Blanc du Tremble", 
        category: "Тихое",
        sugar: "Extra Brut",
        color: "Белое",
        country: "Франция",
        region: "Шампань",
        grape_variety:  [ {name: 'Пино нуар', pers: 100 } ],
        volume: "0.75",
        producerId: 0,
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2016",
        vineyard: "-",      
        description: [  
            "Тут интересный приём, Пино Нуар сделал в белом стиле и это тихое вино",
            "Выдержка в Амфоре",
            "Я не люблю грузинские вина со скин контактом",
            "Coteaux от Marie-Courtin - это яркий пример, куда будет двигаться тихая Шампань"
        ]
    },
    {
        id: 5, 
        name: "Concordance", 
        category: "Шампанское",
        sugar: "Extra Brut",
        color: "Белое",
        country: "Франция",
        region: "Шампань",
        grape_variety:  [ {name: 'Пино нуар', pers: 100 } ],
        volume: "0.75",
        producerId: 0,
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2018",
        vineyard: "-",
        description: [
            "Самое дикое вино в гамме вин от Marie-Courtin",
            "Сидр, огурцы в медё и много летучих кислот",
            "Доминик Моро, работает очень чисто для биодинамистов",
        ],
    },
    {
        id: 6, 
        name: "Blanc de Blancs Amphora", 
        category: "Шампанское",
        sugar: "Extra Brut",
        color: "Белое",
        country: "Франция",
        region: "Шампань",
        grape_variety:  [ {name: 'шардоне', pers: 80 }, {name: 'пино блан', pers: 15 }, {name: 'арбан', pers: 5 } ],
        volume: "0.75",
        producerId: 0,
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2020",
        vineyard: "-",
        description: [
            "Амфоры и Шампань это всегда вызов",
            "Кюве в котором тихое вино проходило полностью ферментацию и выдержу в сосудах из глины ",
            "Самое свежее кюве: много зелёных яблок, немного трав, что очень идёт ",
            "Это вино можно хранить до 12-15 лет",
            "Эксперимент удался",
        ],
    },
    {
        id: 7, 
        name: "Blanc de Noirs", 
        producerId: 0,
        category: "Шампанское",
        sugar: "Extra Brut",
        color: "Белое",
        country: "Франция",
        region: "Шампань",
        grape_variety:  [ {name: 'Пино нуар', pers: 100 } ],
        volume: "0.75",
        /*available_number: 3,*/
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "2020",
        vineyard: "-",
        description: [
            "Иногда сложно это признать, но в Cote des Bar kучшие Пино Нуар в Шампани!",
            "Всё как мы любим: Marie-Courtin, Pinot Noir, Amphora <3"
        ],
    },
    {
        id: 8, 
        name: 'Cuvee № 747', 
        producerId: 2,
        country: "Франция",
        region: "Шампань",
        grape_variety:  [],
        volume: "0.75",
        /*available_number: 3,*/
        price: "По запросу",
        process: "-",
        vinification: "-",
        wine_aging: "-",
        vineyard: "-",
        description: null,
    },
    {
        id: 9, 
        name: 'Cuvee № 743',  
        producerId: 2,
        country: "Франция",
        region: "Шампань",
        wine_aging: "",
    },
    {
        id: 10, 
        name: 'Dizy Terres Rouges',  
        producerId: 2,
        country: "Франция",
        region: "Шампань",
        wine_aging: "2015",
    },
    {
        id: 11, 
        name: 'Avize Champ Terme ',  
        producerId: 2,
        country: "Франция",
        region: "Шампань",
        wine_aging: "2009",
    },
    {
        id: 12, 
        name: '"Ay" Vauzelle Terme',  
        producerId: 2,
        country: "Франция",
        region: "Шампань",
        wine_aging: "2009",
    },
    {
        id: 13, 
        name: 'Dizy Corne Bautray',  
        producerId: 2,
        wine_aging: "2004",
    },
    {
        id: 14, 
        name: 'Millesime Degorgement Tardif',  
        producerId: 2, 
        country: "Франция",
        region: "Шампань",        
        wine_aging: "2002",
    },
    {
        id: 15, 
        name: 'JULIEN PLELAT',
        producerId: 1,
        country: "Франция",
        region: "Шампань",
    },
    {
        id: 16, 
        name: 'BOREAL',
        producerId: 1,
        country: "Франция",
        region: "Шампань",        
        wine_aging: "2021",
    },
    {
        id: 17, 
        name: 'AUSTRAL',
        producerId: 1,
        country: "Франция",
        region: "Шампань",
        wine_aging: "2020",
    },
    {
        id: 18, 
        name: 'REVERS',
        producerId: 1,
        country: "Франция",
        region: "Шампань",        
        wine_aging: "2020",
    },
    {
        id: 19, 
        name: 'GRANDE LIGNES',
        producerId: 1,
        country: "Франция",
        region: "Шампань",        
        wine_aging: "2019",
    },
    {
        id: 20, 
        name: 'LES PASSAGERS «FIOLE»',
        producerId: 1,
        country: "Франция",
        region: "Шампань",
        wine_aging: "2022",
        grape_variety:  [ {name: 'шардоне', pers: 100 } ]
    },
    {
        id: 21, 
        name: 'LES PASSAGERS «HAUT DE VAL BARMONT»',
        producerId: 1,
        country: "Франция",
        region: "Шампань",
        wine_aging: "2022",
        grape_variety:  [ {name: 'шардоне', pers: 100 } ]
    },
    {
        id: 22, 
        name: 'Fosse-Grely',
        producerId: 3,
        country: "Франция",
        region: "Шампань",
        sugar: "Brut Nature",
        wine_aging: "2022",
        grape_variety:  []
    },
    {
        id: 23, 
        name: 'Pazzle',
        producerId: 3,
        country: "Франция",
        region: "Шампань",
        sugar: "Brut Nature",
        wine_aging: "2021",
        grape_variety:  []
    },
    {
        id: 24, 
        name: 'Les cognaux',
        producerId: 3,
        country: "Франция",
        region: "Шампань",
        sugar: "Brut Nature",
        wine_aging: "2022",
        grape_variety:  []
    },
    {
        id: 25, 
        name: 'Pappilon',
        producerId: 3,
        country: "Франция",
        region: "Шампань",
        sugar: "Brut Nature",
        wine_aging: "2020",
        grape_variety:  []
    },
    {
        id: 26, 
        name: '11, 12, 13 ...',
        producerId: 3,
        country: "Франция",
        region: "Шампань",
        sugar: "Brut Nature",
        wine_aging: "2022",
        grape_variety:  []
    },
    {
        id: 27, 
        name: 'Marie Fontaine BdB',
        producerId: 3,
        country: "Франция",
        region: "Шампань",
        sugar: "Brut Nature",
        wine_aging: "2020",
        grape_variety:  []
    },
]

export const producers = [
    {
        id: 0,
        name: "Marie Courtin",
        shortInfo: "Marie Courtin — это история о том, как один человек с огромной преданностью своему делу создает невероятно честные, аутентичные и глубокие вина, которые являются эталоном натурального шампанского. ",
    },
    {
        id: 1,
        name: "Clandestin",
        shortInfo: "Clandestin — это дух Французских Альп, разлитый в бутылке. Это хрустальная чистота и свежесть горного воздуха. ",
    },
    {
        id: 2,
        name: "Jacquesson",
        shortInfo: "Champagne Jacquesson — это дом-философ, дом-бунтарь. Он отказался от коммерческой логики в пользу чистого искусства виноделия. Их вина — для тех, кто ищет не просто шампанское, а глубокое, терруарное выражение, интеллектуальную глубину и элегантность.",
    },
    {
        id: 3,
        name: "Ruppert-Leroy",
        shortInfo: "Ruperts Leroy — это не просто винодел, это икона стиля и философии. Его вина — это максимальное выражение терруара Луары, доведенное до абсолюта через фанатичный перфекционизм и отказ от любых компромиссов. Попробовать вино Rupert Leroy — это редкая удача и событие. Это опыт, который демонстрирует, насколько глубоким, сложным и живым может быть вино, когда его создатель верит в природу больше, чем в науку."
    }
]