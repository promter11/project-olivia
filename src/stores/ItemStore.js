import { makeObservable, observable, computed, action } from "mobx";

import AventusImg from "../assets/images/items/Creed Aventus.jpg";
import VirginIslandWaterImg from "../assets/images/items/Creed Virgin Island Water.jpg";
import LoveInWhiteImg from "../assets/images/items/Creed Love In White.jpg";
import PowerOfSeductionImg from "../assets/images/items/Antonio Banderas Power Of Seduction.jpg";
import ObsessedImg from "../assets/images/items/CK Obsessed.jpg";
import EveryoneImg from "../assets/images/items/CK Everyone.jpg";
import SauvageImg from "../assets/images/items/Dior Sauvage.jpg";
import BloomNettareImg from "../assets/images/items/Gucci Bloom Nettare Di Fiori.jpg";
import PourFemmeImg from "../assets/images/items/Gucci Guilty Pour Femme.jpg";
import WoodSageSeaSaltImg from "../assets/images/items/Jo Malone Wood Sage And Sea Salt.jpg";
import BlackPhantomImg from "../assets/images/items/Kilian Black Phantom.jpg";
import DarkLordImg from "../assets/images/items/Kilian Dark Lord.jpg";
import TimelessImg from "../assets/images/items/Lacoste L'Homme Timeless.jpg";
import BlancPureImg from "../assets/images/items/Lacoste Eau De Lacoste L.12.12 Black-Pure.jpg";
import MagneticImg from "../assets/images/items/Lacoste Pour Homme L.12.12 Magnetic.jpg";
import CedratBoiseImg from "../assets/images/items/Mancera Cedrat Boise.jpg";
import RedTobaccoImg from "../assets/images/items/Mancera Red Tobacco.jpg";
import RosesVanilleImg from "../assets/images/items/Mancera Roses Vanille.jpg";
import AlienImg from "../assets/images/items/Mugler Alien.jpg";
import PureMaltImg from "../assets/images/items/Mugler Amen Pure Malt.jpg";
import CandyImg from "../assets/images/items/Prada Candy.jpg";
import CandySugarPopImg from "../assets/images/items/Prada Candy Sugar Pop.jpg";
import GreyVetiverImg from "../assets/images/items/Tom Ford Grey Vetiver.jpg";
import BlackOrchidImg from "../assets/images/items/Tom Ford Black Orchid.jpg";
import NoirDeNoirImg from "../assets/images/items/Tom Ford Noir De Noir.jpg";
import SpicebombImg from "../assets/images/items/Viktor & Rolf Spicebomb.jpg";
import FlowerbombImg from "../assets/images/items/Viktor & Rolf Flowerbomb.jpg";
import SpicebombNightVisionImg from "../assets/images/items/Viktor & Rolf Spicebomb Night Vision.jpg";
import LaNuitDeLHommeImg from "../assets/images/items/YSL La Nuit De L'Homme.jpg";
import BlackOpiumImg from "../assets/images/items/YSL Black Opium.jpg";
import OpiumImg from "../assets/images/items/YSL Opium.jpg";

class ItemStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      count: computed,
      getItemById: action,
      getItemPrice: action,
      getItemPriceWithDiscount: action,
      getItemDiscount: action,
      divideNumber: action,
      zoomImage: action,
    });
  }

  items = [
    {
      id: 0,
      active: true,
      code: "CE-1409-AV",
      brand: "Creed",
      title: "Aventus",
      description:
        "Парфюмерная вода блистает сладкими и сочными верхними нотами бергамота, черной смородины, яблока и ананаса; дымное, цветочное сердце из интригующего бленда жасмина, березового дерева, пачули и можжевельника; мужественная, теплая база из мускуса, дубового мха,ванили и серой амбры.",
      gender: "male",
      type: "edp",
      rating: 4.84,
      image: `${AventusImg}`,
      options: [
        {
          id: 0,
          volume: 30,
          price: 19200,
          discountPercentage: 10,
        },
        {
          id: 1,
          volume: 50,
          price: 24610,
          discountPercentage: 15,
        },
        {
          id: 2,
          volume: 100,
          price: 29480,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "фужерные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2010",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, черная смородина, ананас, яблоко",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "береза, жасмин, пачули, роза",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "амбра, ваниль, дубовый мох, мускус",
        },
      ],
    },
    {
      id: 1,
      active: true,
      code: "CE-1410-VIW",
      brand: "Creed",
      title: "Virgin Island Water",
      description:
        "Экзотическая смесь лайма, белого бергамота, мандарина, иланг-иланга и жасмина, с базовыми нотами мускуса, тропических деревьев, кокоса и цветка тиаре.",
      image: `${VirginIslandWaterImg}`,
      gender: "male",
      type: "edp",
      rating: 4.69,
      options: [
        {
          id: 0,
          volume: 30,
          price: 17920,
          discountPercentage: 0,
        },
        {
          id: 1,
          volume: 50,
          price: 22400,
          discountPercentage: 5,
        },
        {
          id: 2,
          volume: 125,
          price: 32520,
          discountPercentage: 10,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цитрусовые",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2007",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "мускус",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "жасмин, лайм",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "бергамот, мандарин",
        },
      ],
    },
    {
      id: 2,
      active: true,
      code: "CD-1411-LIW",
      brand: "Creed",
      title: "Love In White",
      description:
        "Этот нежный и чистый аромат от CREED с невесомыми нотами гиацинта и магнолии, напоминает свежий весенний ветерок. После нанесения, аромат раскрывается на коже каскадом роскошных оттенков – очень женственных, утонченных, слегка пудровых с отчетливыми нотами белой сирени, белого ириса и бобов Тонка в сердце.",
      image: `${LoveInWhiteImg}`,
      gender: "female",
      type: "edp",
      rating: 4.28,
      options: [
        {
          id: 0,
          volume: 75,
          price: 21800,
          discountPercentage: 0,
        },
        {
          id: 1,
          volume: 125,
          price: 25320,
          discountPercentage: 0,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цветочные, свежие",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2005",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "белая сирень, цветы магнолии",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "белый гиацинт, нарцисс",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "бобы тонка, ваниль",
        },
      ],
    },
    {
      id: 3,
      active: true,
      code: "AB-0290-PS",
      brand: "Antonio Banderas",
      title: "Power of Seduction",
      description:
        "Свежий и чувственный аромат Power of Seduction, перед которым просто невозможно устоять. Гармоничное сочетание бодрящих, легких нот с фруктовыми и пряными тонами подчеркивает уникальность этого контраста.",
      image: `${PowerOfSeductionImg}`,
      gender: "male",
      type: "cologne",
      rating: 3.67,
      options: [
        {
          id: 0,
          volume: 50,
          price: 1650,
          discountPercentage: 30,
        },
        {
          id: 1,
          volume: 100,
          price: 2290,
          discountPercentage: 30,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "фужерные, фруктовые",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2018",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, яблоко",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "лаванда, мускатный шалфей",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "амбра, мох, благородные породы дерева",
        },
      ],
    },
    {
      id: 4,
      active: false,
      code: "CK-9020-O",
      brand: "Calvin Klein",
      title: "Obsessed",
      description:
        "Свежий, восточный, зеленый. Женственное олицетворение восточной лаванды. Ярко выраженная маскулинная фужерная структура аромата контрастирует с женственной теплотой; композиция создана на основе ноты белой лаванды, а кремовый мускус окутывает все компоненты и придает аромату чувственность и нежность. Напряжение между ароматическими верхними и мягкими базовыми нотами вторит напряжению между мужской и женской стороной его характера. Верхние ноты: Заветный цитрус Citrus™, эфирное масло нероли, элеми Сердечные ноты: Абсолю листьев фиалки, белая лаванда, шалфей Базовые ноты: Мускус Helvetolide™, амбретта, молекула Muscenone™ Парфюмеры: Annick Menardo и Honorine Blanc",
      image: `${ObsessedImg}`,
      gender: "female",
      type: "edp",
      rating: 3.09,
      options: [
        {
          id: 0,
          volume: 100,
          price: 3910,
          discountPercentage: 25,
        },
        {
          id: 1,
          volume: 150,
          price: 5200,
          discountPercentage: 25,
        },
        {
          id: 2,
          volume: 200,
          price: 7630,
          discountPercentage: 25,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "фужерные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2017",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "нероли, цитрусы, элеми",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "лаванда, лист фиалки, шалфей",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "амбретта, мускус",
        },
      ],
    },
    {
      id: 5,
      active: true,
      code: "CK-9021-E",
      brand: "Calvin Klein",
      title: "Everyone",
      description:
        "Цитрусовая композиция открывается пикантным органическим апельсиновым маслом, раскрываясь аккордом синего чая в сердце и интенсивной нотой кедра в шлейфе для создания гендерно нейтрального звучания.",
      image: `${EveryoneImg}`,
      gender: "unisex",
      type: "edt",
      rating: 3.27,
      options: [
        {
          id: 0,
          volume: 50,
          price: 2920,
          discountPercentage: 50,
        },
        {
          id: 1,
          volume: 100,
          price: 3890,
          discountPercentage: 50,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "унисекс",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цитрусовые, фужерные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2020",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "имбирь, масло апельсина",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "чай, водные ноты",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "амбра, белый кедр, мускус, пачули",
        },
      ],
    },
    {
      id: 6,
      active: true,
      code: "DR-1010-S",
      brand: "Dior",
      title: "Sauvage",
      description:
        "Невероятно свежая композиция – манифест свободы, продиктованный самим названием. Брутальный и одновременно благородный. Тот самый баланс, который искал Франсуа Демаши, создатель ароматов Dior. Перенасыщенный натуральными компонентами, отобранными с особой заботой, аромат захватывает фруктовой свежестью Калабрийского Бергамота. Амброксан, полученный из драгоценной серой амбры, расстилается величественным древесным шлейфом.",
      image: `${SauvageImg}`,
      gender: "male",
      type: "edt",
      rating: 2.78,
      options: [
        {
          id: 0,
          volume: 60,
          price: 5870,
          discountPercentage: 0,
        },
        {
          id: 1,
          volume: 100,
          price: 8900,
          discountPercentage: 0,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "фужерные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2015",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "калабрийский бергамот, перец",
        },
        {
          id: 1,
          title: "ноты сердца",
          description:
            "ветивер, герань, китайский перец, лаванда, пачули, розовый перец, элеми",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "амброксан, белый кедр, лабданум",
        },
      ],
    },
    {
      id: 7,
      active: true,
      code: "GC-0948-BNDF",
      brand: "Gucci",
      title: "Bloom Nettare Di Fiori",
      description:
        "Безгранично чувственный и женственный, новый аромат Gucci Bloom Nettare di Fiori – новая глава в истории Gucci Bloom, воплощение многогранного внутреннего мира женщины. Он вобрал в себя неповторимый аромат распустившихся цветов — насыщенный и чарующий. Композиция, созданная в коллаборации с парфюмером Альберто Морильясом, звучит в новом прочтении. Женственные нотки розы и османтуса переплетаются с нотами сердца: жасмином, рангунской лианой и туберозой. Цветочный букет здесь звучит еще более женственно. Древесные аккорды сочетаются с чувственными верхними нотками имбиря и розы, а мягкость и загадочность аромату придают базовые ноты пачули, мускуса и османтуса.",
      image: `${BloomNettareImg}`,
      gender: "female",
      type: "edp",
      rating: 4.01,
      options: [
        {
          id: 0,
          volume: 30,
          price: 6670,
          discountPercentage: 15,
        },
        {
          id: 1,
          volume: 50,
          price: 9600,
          discountPercentage: 15,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цветочные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2018",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "имбирь, роза",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "жасмин, жимолость, тубероза",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "мускус, османтус, пачули",
        },
      ],
    },
    {
      id: 8,
      active: true,
      code: "GC-0949-PF",
      brand: "Gucci",
      title: "Pour Femme",
      description:
        "Новая глава в истории Gucci Guilty, аромат Gucci Guilty Pour Femme - это манифест самовыражения и дерзости быть собой, история женщины, свободной от предрассудков. Gucci Guilty Pour Femme - это насыщенная и благородная восточная цветочная композиция, раскрывающаяся фруктовыми нотами мандора, нежной сирени и чувственным дуэтом масел пачули. Женственно-розовый аромат заключен в изящную форму, повторяющую силуэт мужского флакона Guilty. Эта особенная деталь призвана подчеркнуть единство мужчины и женщины, отвергающих гендерные стереотипы.",
      image: `${PourFemmeImg}`,
      gender: "female",
      type: "edp",
      rating: 3.8,
      options: [
        {
          id: 0,
          volume: 50,
          price: 6230,
          discountPercentage: 30,
        },
        {
          id: 1,
          volume: 90,
          price: 8850,
          discountPercentage: 30,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "фруктовые",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2019",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "розовый перец, бергамот, мандарин",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "сирень, герань, роза, фиалка",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "пачули, амбра",
        },
      ],
    },
    {
      id: 9,
      active: false,
      code: "JM-8521-WSSS",
      brand: "Jo Malone",
      title: "Wood Sage & Sea Salt",
      description:
        "Побег из повседневности к продуваемому ветрам побережью. Волны разбиваются в белую пену, соленые морские брызги наполняют воздух свежестью. Полный жизни с минеральным запахом скалистых утесов. Тающий в древесной теплоте шалфея. Живой, одухотворенный и абсолютно радостный.",
      image: `${WoodSageSeaSaltImg}`,
      gender: "female",
      type: "cologne",
      rating: 4.72,
      options: [
        {
          id: 0,
          volume: 30,
          price: 4350,
          discountPercentage: 0,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "одеколон",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "фужерные, водные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2014",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "грейпфрут, шалфей",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "амбретта, морские водоросли, соль",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "амбра",
        },
      ],
    },
    {
      id: 10,
      active: true,
      code: "KN-3412-BP",
      brand: "Kilian",
      title: "Black Phantom",
      description:
        "Вечно скитающийся по свету пиратский корабль рассекает темные волны таинственного бурного моря. Black Phantom “Memento Mori” раскрывает свои морские сокровища наблюдателям с тонким обонянием. Аккорд рома из Мартиники, который называют «водой для пиратов», дополнен ароматом крепкого кофе и эссенцией ветивера. Ноты сахарного тростника и гладкого сандалового дерева делают аромат насыщенным и сладким. Древесная гармония для гурманов.",
      image: `${BlackPhantomImg}`,
      gender: "unisex",
      type: "edp",
      rating: 4.21,
      options: [
        {
          id: 0,
          volume: 50,
          price: 23000,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "унисекс",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, гурманские",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2017",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "ром, сахарный тростник, темный шоколад",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "карамель, кофе, миндаль",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "гелиотроп, сандал",
        },
      ],
    },
    {
      id: 11,
      active: true,
      code: "KN-3413-DL",
      brand: "Kilian",
      title: "Dark Lord",
      description:
        "Композиция Dark Lord столь же темная и необузданная, тем не менее, создает совершенно иной образ. Словно головокружительная игра света и тени, новый аромат мгновенно захватывает воображение элегантными стойкими аккордами кожи и насыщенного ветивера, акцентами жасмина, тягучими нотами рома и щегольскими оттенками бергамота и перца. Завораживающий переход от тьмы к свету.",
      image: `${DarkLordImg}`,
      gender: "male",
      type: "edp",
      rating: 4.33,
      options: [
        {
          id: 0,
          volume: 50,
          price: 23500,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "кожаные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2018",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, перец",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "жасмин, ром",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "ветивер, кожа",
        },
      ],
    },
    {
      id: 12,
      active: true,
      code: "LC-4332-LHT",
      brand: "Lacoste",
      title: "L'Homme Timeless",
      description:
        "Туалетная вода Lacoste L'Homme Timeless создана для уверенного харизматичного мужчины. Этот новый древесно-пряный аромат наполнен свежестью. Смесь ванили, кедра и мускуса подчеркивают пряные оттенки перца и имбиря, благодаря чему создается сбалансированный букет.",
      image: `${TimelessImg}`,
      gender: "male",
      type: "edt",
      rating: 2.98,
      options: [
        {
          id: 0,
          volume: 50,
          price: 5820,
          discountPercentage: 10,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, пряные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2019",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, кардамон, ревень",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "имбирь, черный перец",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "ваниль, кедр, мускус, янтарь",
        },
      ],
    },
    {
      id: 13,
      active: true,
      code: "LC-4333-EDLBP",
      brand: "Lacoste",
      title: "Eau De Lacoste L.12.12 Blanc-Pure",
      description:
        "Вдохновленный классической белой рубашкой поло Eau de Lacoste L.12.12 Blanc - Pure открывается свежим древесно – травяным аккордом из грейпфрута, розмарина, кардамона и хвои кедра. Чистые ароматические ноты затем смешиваются с мужественным сердцем, состоящим из туберозы, иланг иланга и смолы олибанум.",
      image: `${BlancPureImg}`,
      gender: "male",
      type: "edt",
      rating: 3.41,
      options: [
        {
          id: 0,
          volume: 50,
          price: 5740,
          discountPercentage: 15,
        },
        {
          id: 1,
          volume: 100,
          price: 7810,
          discountPercentage: 15,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "древесные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2011",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "лимон, имбирь, грейпфрут",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "тубероза, зеленые ноты, розмарин",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "замша, мускус, белый кедр",
        },
      ],
    },
    {
      id: 14,
      active: false,
      code: "LC-4334-PHM",
      brand: "Lacoste",
      title: "Pour Homme L.12.12 Magnetic",
      description:
        "Туалетная вода Lacoste Lui Magnetic олицетворяет собой свободу и жажду жизни, сочетая в себе свежесть и энергичность, подчеркивая молодость и активный образ жизни своего обладателя. Начало уникальной композиции Lui Magnetic звучит свежими и бодрящими нотами можжевельника в гармоничном соединении с бамбуком и терпкой полынью. В сердце мужественного и чувственного аромата от Lacoste раскрываются необычным и оригинальным букетом цветочные аккорды герани и фиалки. В неповторимом шлейфе туалетной воды перекликаются восточные ноты изысканного пачули, ветивера и амбры.",
      image: `${MagneticImg}`,
      gender: "male",
      type: "edt",
      rating: 3.26,
      options: [
        {
          id: 0,
          volume: 50,
          price: 5780,
          discountPercentage: 15,
        },
        {
          id: 1,
          volume: 100,
          price: 7810,
          discountPercentage: 15,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "фужерные, пряные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2016",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "артемизия, бамбук, можжевельник",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "герань, фиалка, чай",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "амбра, ветивер, пачули",
        },
      ],
    },
    {
      id: 15,
      active: true,
      code: "MR-1110-CB",
      brand: "Mancera",
      title: "Cedrat Boise",
      description:
        "Новый аромат – Cedrat Boise Mancera представляет собой оригинальный взгляд на цитрусовые ноты, возвращение к исконным «гесперидам», славным своей легкостью, стойкостью и обворожительным звучанием. Подлинный гесперид, Cedrat Boise возрождает идею легендарного сада нимф, где растут волшебные плоды, сохраняющие молодость. Именно легенда о гесперидах сподвигла парфюмеров начала века на создание цитрусовых композиций.",
      image: `${CedratBoiseImg}`,
      gender: "male",
      type: "edp",
      rating: 4.45,
      options: [
        {
          id: 0,
          volume: 60,
          price: 9480,
          discountPercentage: 10,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цитрусовые, древесные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2011",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "белый перец, бергамот, цедра лайма, черная смородина",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "лимонное дерево, пачули, водяной жасмин",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "ваниль, кожа, мускус, сандал",
        },
      ],
    },
    {
      id: 16,
      active: true,
      code: "MR-1111-RT",
      brand: "Mancera",
      title: "Red Tobacco",
      description:
        "Амели и Пьер Мансера выбрали для его воплощения ароматную смесь кубинского табака и карибских пряностей, создав парфюмерный пейзаж вечернего неба окрашенного в бордовые оттенки лучами заходящего в карибское море солнца.",
      image: `${RedTobaccoImg}`,
      gender: "male",
      type: "edp",
      rating: 3.78,
      options: [
        {
          id: 0,
          volume: 60,
          price: 11150,
          discountPercentage: 10,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "пряные, древесные, табачные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2017",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description:
            "зеленое яблоко, корица, ладан, мускатный орех, уд, шафран, белая груша",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "жасмин, пачули",
        },
        {
          id: 2,
          title: "базовые ноты",
          description:
            "амбра, белый мускус, гуаяк, мадагаскарская ваниль, сандал, табак, таитянский ветивер",
        },
      ],
    },
    {
      id: 17,
      active: false,
      code: "MR-1112-RV",
      brand: "Mancera",
      title: "Roses Vanille",
      description:
        "Аромат, посвященный путешествию по острову Бурбон в индийском океане. Здесь произрастает один из самых дорогих и ароматных сортов ванили – бурбонская ваниль, ставшая основой композиции. «Я собирался создать аромат, где господствовала бы ваниль. Для меня это воспоминания о детских каникулах, которые я проводил на юге Франции, недалеко от Марселя. О колониальных лавках и той странной, сладковатой дымке, которая окутывала весь город, когда в порт приходило судно с грузом пряностей – ванилью, шафраном, гуржуном. Словно перед глазами у меня стоит картина, где корабль приходят встречать женщины и дети, семьи моряков, и женщины обязательно украшены розами: цветы в волосах, бутоньерки на платьях, букеты в руках», - Пьер Мансера.",
      image: `${RosesVanilleImg}`,
      gender: "female",
      type: "edp",
      rating: 3.73,
      options: [
        {
          id: 0,
          volume: 60,
          price: 9450,
          discountPercentage: 10,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, гурманские",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2011",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "цитрусы, ноты воды",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "ваниль, роза",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "белый кедр, мускус",
        },
      ],
    },
    {
      id: 18,
      active: true,
      code: "MR-8740-A",
      brand: "Mugler",
      title: "Alien",
      description:
        "Ароматы Alien – таинственные, мистические, женственные, яркие с успокаивающим и умиротворяющим шлейфом. Уникальное сочетание нот: Цветочная (Самбакский жасмин), Древесная (Кашмерановое дерево), Амбровая (Прозрачная белая амбра).",
      image: `${AlienImg}`,
      gender: "female",
      type: "edt",
      rating: 4.18,
      options: [
        {
          id: 0,
          volume: 30,
          price: 5460,
          discountPercentage: 30,
        },
        {
          id: 1,
          volume: 60,
          price: 8050,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, древесные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2005",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "белая амбра, пачули, индийский жасмин",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "древесина кашмирового дерева",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "белая амбра, индийский жасмин",
        },
      ],
    },
    {
      id: 19,
      active: true,
      code: "MR-8741-APM",
      brand: "Mugler",
      title: "Amen Pure Malt",
      description:
        "Туалетная вода Mugler A*men Pure Malt - это коктейль с виски, который завоевывает сердца не только мужчин, но и женщин. Туалетная вода Amen Pure Malt впервые был выпущен в 2009 году и уже тогда покорила множество сердец. Mugler этим шикарным ароматом, воплощает истинную мужественность и элегантный стиль. Ему удалось соединить прекрасный мир парфюма и престижный виски. Туалетной водой нужно наслаждаться также как хорошим элитным виски. У аромата имеется отличная стойкость и длинный ненавязчивый шлейф. Аромат можно носить в любое время суток и в любое время года. Открывают аромат фруктовые ноты, когда они немного стихают раскрываются древесные аккорды и солод. Заканчивается звучание торфом и восточными нотами.",
      image: `${PureMaltImg}`,
      gender: "male",
      type: "edt",
      rating: 3.84,
      options: [
        {
          id: 0,
          volume: 100,
          price: 7930,
          discountPercentage: 25,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, древесные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2009",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, жасмин, лаванда, мята, зеленые ноты",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "карамель, кориандр, кофе, ландыш, молоко, бензион",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "ваниль, виски, мускус, пачули, древесина",
        },
      ],
    },
    {
      id: 20,
      active: true,
      code: "PD-6400-C",
      brand: "Prada",
      title: "Candy",
      description:
        "Парфюмерная вода Prada Candy соблазнительный аромат для женщин из разряда восточных. Данный парфюм от Prada выбирают роковые обольстительницы, предпочитающие стиль, соблазн, а также те, кто готов экспериментировать с новыми образами. В самом верху пирамиды ароматов Prada Candy, ощущаются мускусные ноты, а сердцем парфюма станет шарм карамели. Душистый сладкий запах парфюмерной воды порадует истинных гурманов и ценителей риска и успеха. Аромат медленно испаряется, поэтому способен радовать, не прекращая напоминать о себе до самого вечера.",
      image: `${CandyImg}`,
      gender: "female",
      type: "edp",
      rating: 3.97,
      options: [
        {
          id: 0,
          volume: 90,
          price: 6830,
          discountPercentage: 10,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, гурманские",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2011",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "мускус",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "сиамский бензоин",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "карамель",
        },
      ],
    },
    {
      id: 21,
      active: false,
      code: "PD-6410-CSP",
      brand: "Prada",
      title: "Candy Sugar Pop",
      description:
        "Prada Candy Sugar Pop – новый аромат в коллекции Candy. Он вызывает зависимость подобно модному музыкальному хиту. Как в поп-арт искусстве, в нем звучит тонкая ирония. Ирония, в которой сахарные ноты леденцов – метафора для непреодолимой сладости объекта желания. Любовь, вызывающая зависимость. Когда сила сладкого удовольствия слишком велика, остается лишь ей поддаться. Нежные аккорды бархатисто-медового персика и насыщенной ванили переплетаются с листьями бергамота и белыми цветами. Композиция дополнена нотами сочного яблока и зеленого цитруса, воплощая неожиданную ольфакторную историю.",
      image: `${CandySugarPopImg}`,
      gender: "female",
      type: "edp",
      rating: 4.11,
      options: [
        {
          id: 0,
          volume: 100,
          price: 7010,
          discountPercentage: 0,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цветочные, фруктовые, сладкие",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2018",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, красное яблоко, цитрусы, петитгрейн",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "белый персик, цветочные ноты",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "ваниль, карамель",
        },
      ],
    },
    {
      id: 22,
      active: true,
      code: "TF-2094-GV",
      brand: "Tom Ford",
      title: "Grey Vetiver",
      description:
        "Аромат воплощает собой квинтэссенцию философии мужской моды Тома Форда. Grey Vetiver мастерски раскрывает прохладные и интригующие оттенки ветивера — ингредиента, который всегда был «визитной карточкой» классической, строгой и откровенной мужественности.",
      image: `${GreyVetiverImg}`,
      gender: "male",
      type: "edt",
      rating: 4.24,
      options: [
        {
          id: 0,
          volume: 50,
          price: 10500,
          discountPercentage: 20,
        },
        {
          id: 1,
          volume: 100,
          price: 14600,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "пряные, древесные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2009",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "цитрусы",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "пряности",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "серый ветивер, древесина",
        },
      ],
    },
    {
      id: 23,
      active: true,
      code: "TF-2095-BO",
      brand: "Tom Ford",
      title: "Black Orchid",
      description:
        "Парфюмерная вода Tom Ford Black Orchid (Том Форд Орхидея) Яркий аромат с насыщенными глубокими аккордами и соблазнительными нотами черной орхидеи и специй — воплощение гламура и непреходящей роскоши.",
      image: `${BlackOrchidImg}`,
      gender: "unisex",
      type: "edp",
      rating: 4.09,
      options: [
        {
          id: 0,
          volume: 30,
          price: 7350,
          discountPercentage: 30,
        },
        {
          id: 1,
          volume: 50,
          price: 10500,
          discountPercentage: 30,
        },
        {
          id: 2,
          volume: 100,
          price: 14600,
          discountPercentage: 30,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "унисекс",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цветочные, восточные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2006",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, цитрус, черная смородина",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "ветивер, пачули, сандал, древесина лотоса",
        },
        {
          id: 2,
          title: "базовые ноты",
          description:
            "ваниль, жасмин, черная орхидея, черный трюфель, иланг-иланг",
        },
      ],
    },
    {
      id: 24,
      active: true,
      code: "TF-2096-NDN",
      brand: "Tom Ford",
      title: "Noir De Noir",
      description:
        "В этом шипрово-восточном аромате с таинственным и мягким характером насыщенные женственные цветочные ноты сочетаются с мужскими землистыми оттенками черного трюфеля, пачули, удовой древесины и древесного мха.",
      image: `${NoirDeNoirImg}`,
      gender: "unisex",
      type: "edp",
      rating: 3.88,
      options: [
        {
          id: 0,
          volume: 50,
          price: 10500,
          discountPercentage: 10,
        },
        {
          id: 1,
          volume: 100,
          price: 14600,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "унисекс",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цветочные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2007",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "ваниль",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "роза, трюфель, шафран",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "древесный мох, пачули",
        },
      ],
    },
    {
      id: 25,
      active: true,
      code: "VR-1099-S",
      brand: "Viktor & Rolf",
      title: "Spicebomb",
      description:
        "Spicebomb рожден от воспламеняющего столкновения двух сочетаний, в сущности противоположных тонов: первый воплощает непреодолимую зависимость, это купаж горячих пряностей – чили и шафрана – с ярко выраженными мужскими нотами ароматов кожи и табака, а также грубой силой нот ветивера. Второй тон взрывоопасный, сочетающий свежие пикантные ноты бергамота и грейпфрута, в то время как холодные пряности – элеми и красный перец – добавляют ему ледяной остроты. Ароматическое потрясение неизбежно.",
      image: `${SpicebombImg}`,
      gender: "male",
      type: "edt",
      rating: 4.7,
      options: [
        {
          id: 0,
          volume: 50,
          price: 5510,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, древесные, табачные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2012",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, розовый перец, цитрусы",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "ветивер, корица, древесные ноты",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "красный перец, табак",
        },
      ],
    },
    {
      id: 26,
      active: true,
      code: "VR-1100-F",
      brand: "Viktor & Rolf",
      title: "Flowerbomb",
      description:
        "Почувствуйте мир мечты, созданный Viktor & Rolf ! Flowerbomb - это неудержимый взрыв цветов. Этот аромат превращает негативное в позитивное, черное - в розовое, а женщину - в цветок. Viktor & Rolf считают, что есть только одно оружие против действительности - мечта.",
      image: `${FlowerbombImg}`,
      gender: "female",
      type: "edt",
      rating: 4.62,
      options: [
        {
          id: 0,
          volume: 30,
          price: 5760,
          discountPercentage: 25,
        },
        {
          id: 1,
          volume: 50,
          price: 8180,
          discountPercentage: 25,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "цветочные, фруктовые, древесные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2005",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description:
            "апельсин, бергамот, орхидея, османтус, пачули, роза, фрезия, чай, жасмин",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "орхидея, фрезия",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "жасмин, роза",
        },
      ],
    },
    {
      id: 27,
      active: false,
      code: "VR-1101-SNV",
      brand: "Viktor & Rolf",
      title: "Spicebomb Night Vision",
      description:
        "Впервые SPICEBOMB играет на ночной территории и делает это очень интригующим способом. С таким же чувством провокации, которое используется для того, чтобы бросить вызов модным кодам, Viktor & Rolf приглашает вас сыграть в новую игру соблазнения, в темноте. Современный аромат — Spicebomb Night Vision - это взрывной контраст зеленой свежести и соблазнительных специй.",
      image: `${SpicebombNightVisionImg}`,
      gender: "male",
      type: "edt",
      rating: 2.87,
      options: [
        {
          id: 0,
          volume: 50,
          price: 5510,
          discountPercentage: 10,
        },
        {
          id: 1,
          volume: 90,
          price: 6400,
          discountPercentage: 10,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, фужерные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2019",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "грейпфрут, кардамон, зеленый мандарин, яблоко",
        },
        {
          id: 1,
          title: "ноты сердца",
          description:
            "красный перец чили, перец, гвоздика, мускатный орех, шалфей, герань",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "бобы тонка, миндаль, древесные ноты",
        },
      ],
    },
    {
      id: 28,
      active: true,
      code: "YSL-1400-LNDLH",
      brand: "Yves Saint Laurent",
      title: "La Nuit De L'Homme",
      description:
        "Ночью возможно все. Неотразимо привлекательный мужчина, чьи мужественность и обольстительность сметают все на своем пути. Представляем новую грань мужественности от Yves Saint Laurent: Аромат, являющийся воплощением соблазна. Древесный восточный аромат. Таинственная игра света и темноты. Аромат для истинного обольстителя.",
      image: `${LaNuitDeLHommeImg}`,
      gender: "male",
      type: "edt",
      rating: 3.75,
      options: [
        {
          id: 0,
          volume: 40,
          price: 5280,
          discountPercentage: 15,
        },
        {
          id: 1,
          volume: 60,
          price: 6600,
          discountPercentage: 15,
        },
        {
          id: 2,
          volume: 100,
          price: 8740,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для мужчин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "древесные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2009",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "бергамот, кардамон, лаванда",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "герань, черный перец, кедровое дерево",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "бобы тонка, ветивер, кумарин",
        },
      ],
    },
    {
      id: 29,
      active: true,
      code: "YSL-1401-BO",
      brand: "Yves Saint Laurent",
      title: "Black Opium",
      description:
        "Black Opium - аромат в стиле глэм-рок, который вызывает настоящую зависимость! Ароматы кофе и цветов провоцируют выработку адреналина, ноты белых цветов соблазняют своей откровенностью, ваниль дарит сладкую чувственность.",
      image: `${BlackOpiumImg}`,
      gender: "female",
      type: "edp",
      rating: 3.66,
      options: [
        {
          id: 0,
          volume: 30,
          price: 6090,
          discountPercentage: 20,
        },
        {
          id: 1,
          volume: 50,
          price: 8590,
          discountPercentage: 20,
        },
        {
          id: 2,
          volume: 90,
          price: 11200,
          discountPercentage: 20,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "туалетная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, пряные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "2014",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description: "розовый перец, флердоранж",
        },
        {
          id: 1,
          title: "ноты сердца",
          description: "жасмин, кофе",
        },
        {
          id: 2,
          title: "базовые ноты",
          description: "ваниль, кедр, пачули",
        },
      ],
    },
    {
      id: 30,
      active: false,
      code: "YSL-1402-O",
      brand: "Yves Saint Laurent",
      title: "Opium",
      description:
        "Легендарный аромат Yves Saint Laurent, который был создан в 1977 году. Как говорил сам Маэстро: «Опиум – магнетическое слово, ключ к самым тайным мечтам, пароль, открывающий двери в Мечту». Это аромат для женщины чувственной и мистической. Для женщины в поисках некоего абсолюта, в поисках новых ощущений. Классический Opium приобрел новую, более современную форму, которая, тем не менее, сохраняет связь со шкатулкой Инро.",
      image: `${OpiumImg}`,
      gender: "female",
      type: "edp",
      rating: 4.05,
      options: [
        {
          id: 0,
          volume: 30,
          price: 6260,
          discountPercentage: 0,
        },
      ],
      specifications: [
        {
          id: 0,
          title: "тип продукта",
          description: "парфюмерная вода",
        },
        {
          id: 1,
          title: "категория",
          description: "для женщин",
        },
        {
          id: 2,
          title: "группа ароматов",
          description: "восточные, пряные",
        },
        {
          id: 3,
          title: "год выпуска",
          description: "1977",
        },
      ],
      notes: [
        {
          id: 0,
          title: "верхние ноты",
          description:
            "бергамот, гвоздика, жасмин, индийский лавр, кориандр, мандарин, перец, слива, цитрусовые ноты",
        },
        {
          id: 1,
          title: "ноты сердца",
          description:
            "гвоздика, корень ириса, корица, ландыш, пачули, персик, роза, сандаловое дерево",
        },
        {
          id: 2,
          title: "базовые ноты",
          description:
            "амбра, бальзам Толу, бензоин, ваниль, ветивер, кедр, кокос, лабданум, ладан, мускус, сандаловое дерево, опопонакс, мирро",
        },
      ],
    },
  ];

  get count() {
    return this.items.length;
  }

  getItemById = (id) => {
    return this.items[id];
  };

  getItemPrice = (id) => {
    return this.items[id].options[0].price;
  };

  getItemPriceWithDiscount = (id) => {
    return this.getItemPrice(id) * this.getItemDiscount(id);
  };

  getItemDiscount = (id) => {
    return 1 - this.items[id].options[0].discountPercentage / 100;
  };

  divideNumber = (number) => {
    return number.toLocaleString();
  };

  zoomImage = (event) => {
    const target = event.target.parentNode;

    const coordinateX = event.nativeEvent.offsetX;
    const coordinateY = event.nativeEvent.offsetY;

    const x = (coordinateX / target.offsetWidth) * 100;
    const y = (coordinateY / target.offsetHeight) * 100;

    target.style.backgroundPosition = `${x}% ${y}%`;
  };
}

export default new ItemStore();
