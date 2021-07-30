import { Group } from "./group";

/* Group ID's 0 - nogroup, 1-100 */
export const G_LIMIT_NBR: number = 1;
export const G_LIMIT_SCN: number = 100;
export const G_LIMIT_MYT: number = 200;
export const G_LIMIT_COM: number = 200;
export const G_LIMIT: number = 99;
export const GROUPS: Group[] =[
    {id: 1, name:'Даунтаун', cards:[
        {id:1,groupId:1,sceneId:0},
        {id:2,groupId:1,sceneId:0},
        {id:3,groupId:1,sceneId:0},
        {id:4,groupId:1,sceneId:0},
        {id:5,groupId:1,sceneId:0},
        {id:6,groupId:1,sceneId:0},
        {id:7,groupId:1,sceneId:0},
        {id:8,groupId:1,sceneId:0}
    ]},
    {id: 2, name:'Исттаун', cards:[
        {id:9,groupId:2,sceneId:0},
        {id:10,groupId:2,sceneId:0},
        {id:11,groupId:2,sceneId:0},
        {id:12,groupId:2,sceneId:0},
        {id:13,groupId:2,sceneId:0},
        {id:14,groupId:2,sceneId:0},
        {id:15,groupId:2,sceneId:0},
        {id:16,groupId:2,sceneId:0}
    ]},
    {id: 3, name:'Торговый район', cards:[
        {id:17,groupId:3,sceneId:0},
        {id:18,groupId:3,sceneId:0},
        {id:19,groupId:3,sceneId:0},
        {id:20,groupId:3,sceneId:0},
        {id:21,groupId:3,sceneId:0},
        {id:22,groupId:3,sceneId:0},
        {id:23,groupId:3,sceneId:0},
        {id:24,groupId:3,sceneId:0}
    ]},
    {id: 4, name:'Нортсайд', cards:[
        {id:25,groupId:4,sceneId:0},
        {id:26,groupId:4,sceneId:0},
        {id:27,groupId:4,sceneId:0},
        {id:28,groupId:4,sceneId:0},
        {id:29,groupId:4,sceneId:0},
        {id:30,groupId:4,sceneId:0},
        {id:31,groupId:4,sceneId:0},
        {id:32,groupId:4,sceneId:0}
    ]},
    {id: 5, name:'Аптаун', cards:[
        {id:33,groupId:5,sceneId:0},
        {id:34,groupId:5,sceneId:0},
        {id:35,groupId:5,sceneId:0},
        {id:36,groupId:5,sceneId:0},
        {id:37,groupId:5,sceneId:0},
        {id:38,groupId:5,sceneId:0},
        {id:39,groupId:5,sceneId:0},
        {id:40,groupId:5,sceneId:0}
    ]},
    {id: 6, name:'Мискатоникский университет', cards:[
        {id:41,groupId:6,sceneId:0},
        {id:42,groupId:6,sceneId:0},
        {id:43,groupId:6,sceneId:0},
        {id:44,groupId:6,sceneId:0},
        {id:45,groupId:6,sceneId:0},
        {id:46,groupId:6,sceneId:0},
        {id:47,groupId:6,sceneId:0},
        {id:48,groupId:6,sceneId:0}
    ]},
    {id: 7, name:'Ривертаун', cards:[
        {id:49,groupId:7,sceneId:0},
        {id:50,groupId:7,sceneId:0},
        {id:51,groupId:7,sceneId:0},
        {id:52,groupId:7,sceneId:0},
        {id:53,groupId:7,sceneId:0},
        {id:54,groupId:7,sceneId:0},
        {id:55,groupId:7,sceneId:0},
        {id:56,groupId:7,sceneId:0}
    ]},
    {id: 8, name:'Саутсайд', cards:[
        {id:57,groupId:8,sceneId:0},
        {id:58,groupId:8,sceneId:0},
        {id:59,groupId:8,sceneId:0},
        {id:60,groupId:8,sceneId:0},
        {id:61,groupId:8,sceneId:0},
        {id:62,groupId:8,sceneId:0},
        {id:63,groupId:8,sceneId:0},
        {id:64,groupId:8,sceneId:0}
    ]},
    {id: 9, name:'Центр Кингспорта', cards:[
        {id:65,groupId:9,sceneId:0},
        {id:66,groupId:9,sceneId:0},
        {id:67,groupId:9,sceneId:0},
        {id:68,groupId:9,sceneId:0},
        {id:69,groupId:9,sceneId:0},
        {id:70,groupId:9,sceneId:0},
        {id:71,groupId:9,sceneId:0},
        {id:72,groupId:9,sceneId:0}
    ]},
    {id: 10, name:'Берег Инсмута', cards:[
        {id:73,groupId:10,sceneId:0},
        {id:74,groupId:10,sceneId:0},
        {id:75,groupId:10,sceneId:0},
        {id:76,groupId:10,sceneId:0},
        {id:77,groupId:10,sceneId:0},
        {id:78,groupId:10,sceneId:0},
        {id:79,groupId:10,sceneId:0},
        {id:80,groupId:10,sceneId:0}
    ]},
    {id: 11, name:'Центр Инсмута', cards:[
        {id:81,groupId:11,sceneId:0},
        {id:82,groupId:11,sceneId:0},
        {id:83,groupId:11,sceneId:0},
        {id:84,groupId:11,sceneId:0},
        {id:85,groupId:11,sceneId:0},
        {id:86,groupId:11,sceneId:0},
        {id:87,groupId:11,sceneId:0},
        {id:88,groupId:11,sceneId:0}
    ]},
    {id: 12, name:'Гавань Кингспорта', cards:[
        {id:89,groupId:12,sceneId:0},
        {id:90,groupId:12,sceneId:0},
        {id:91,groupId:12,sceneId:0},
        {id:92,groupId:12,sceneId:0},
        {id:93,groupId:12,sceneId:0},
        {id:94,groupId:12,sceneId:0},
        {id:95,groupId:12,sceneId:0},
        {id:96,groupId:12,sceneId:0}
    ]},
    {id: 13, name:'Улицы', cards:[
        {id:97,groupId:13,sceneId:0},
        {id:98,groupId:13,sceneId:0},
        {id:99,groupId:13,sceneId:0},
        {id:100,groupId:13,sceneId:0},
        {id:101,groupId:13,sceneId:0},
        {id:102,groupId:13,sceneId:0},
        {id:103,groupId:13,sceneId:0},
        {id:104,groupId:13,sceneId:0}
    ]},
    {id: 14, name:'Пути сообщения', cards:[
        {id:105,groupId:14,sceneId:0},
        {id:106,groupId:14,sceneId:0},
        {id:107,groupId:14,sceneId:0},
        {id:108,groupId:14,sceneId:0},
        {id:109,groupId:14,sceneId:0},
        {id:110,groupId:14,sceneId:0},
        {id:111,groupId:14,sceneId:0},
        {id:112,groupId:14,sceneId:0}
    ]},
    {id: 15, name:'Брешь во времени', cards:[
        {id:113,groupId:15,sceneId:0},
        {id:114,groupId:15,sceneId:0},
        {id:115,groupId:15,sceneId:0},
        {id:116,groupId:15,sceneId:0},
        {id:117,groupId:15,sceneId:0},
        {id:118,groupId:15,sceneId:0},
        {id:119,groupId:15,sceneId:0},
        {id:120,groupId:15,sceneId:0}
    ]},
    {id: 16, name:'Прорастание Юггота', cards:[
        {id:121,groupId:16,sceneId:0},
        {id:122,groupId:16,sceneId:0},
        {id:123,groupId:16,sceneId:0},
        {id:124,groupId:16,sceneId:0},
        {id:125,groupId:16,sceneId:0},
        {id:126,groupId:16,sceneId:0},
        {id:127,groupId:16,sceneId:0},
        {id:128,groupId:16,sceneId:0}
    ]},
    {id: 17, name:'Риф Дьявола', cards:[
        {id:129,groupId:17,sceneId:0},
        {id:130,groupId:17,sceneId:0},
        {id:131,groupId:17,sceneId:0},
        {id:132,groupId:17,sceneId:0},
        {id:133,groupId:17,sceneId:0},
        {id:134,groupId:17,sceneId:0},
        {id:135,groupId:17,sceneId:0},
        {id:136,groupId:17,sceneId:0}
    ]},
    {id: 18, name:'Загадочный дом', cards:[
        {id:137,groupId:18,sceneId:0},
        {id:138,groupId:18,sceneId:0},
        {id:139,groupId:18,sceneId:0},
        {id:140,groupId:18,sceneId:0},
        {id:141,groupId:18,sceneId:0},
        {id:142,groupId:18,sceneId:0},
        {id:143,groupId:18,sceneId:0},
        {id:144,groupId:18,sceneId:0}
    ]},
    {id: 19, name:'Видения Луны', cards:[
        {id:145,groupId:19,sceneId:0},
        {id:146,groupId:19,sceneId:0},
        {id:147,groupId:19,sceneId:0},
        {id:148,groupId:19,sceneId:0},
        {id:149,groupId:19,sceneId:0},
        {id:150,groupId:19,sceneId:0},
        {id:151,groupId:19,sceneId:0},
        {id:152,groupId:19,sceneId:0}
    ]},
    {id: 20, name:'Вторжение кошмаров', cards:[
        {id:153,groupId:20,sceneId:0},
        {id:154,groupId:20,sceneId:0},
        {id:155,groupId:20,sceneId:0},
        {id:156,groupId:20,sceneId:0},
        {id:157,groupId:20,sceneId:0},
        {id:158,groupId:20,sceneId:0},
        {id:159,groupId:20,sceneId:0},
        {id:160,groupId:20,sceneId:0}
    ]},
    {id: 21, name:'Разорванная реальность', cards:[
        {id:161,groupId:21,sceneId:0},
        {id:162,groupId:21,sceneId:0},
        {id:163,groupId:21,sceneId:0},
        {id:164,groupId:21,sceneId:0},
        {id:165,groupId:21,sceneId:0},
        {id:166,groupId:21,sceneId:0},
        {id:167,groupId:21,sceneId:0},
        {id:168,groupId:21,sceneId:0}
    ]},
    {id: 201, name:'Газеты', cards:[
        {id:169,groupId:201,sceneId:0},
        {id:170,groupId:201,sceneId:0},
        {id:171,groupId:201,sceneId:0},
        {id:172,groupId:201,sceneId:0},
        {id:173,groupId:201,sceneId:0},
        {id:174,groupId:201,sceneId:0},
        {id:175,groupId:201,sceneId:0},
        {id:176,groupId:201,sceneId:0}
    ]},
    {id: 202, name:'Пир хищников', cards:[
        {id:177,groupId:202,sceneId:0},
        {id:178,groupId:202,sceneId:0},
        {id:179,groupId:202,sceneId:0},
        {id:180,groupId:202,sceneId:0},
        {id:181,groupId:202,sceneId:0},
        {id:182,groupId:202,sceneId:0},
        {id:183,groupId:202,sceneId:0},
        {id:184,groupId:202,sceneId:0}
    ]},
    {id: 203, name:'Замерзший город', cards:[
        {id:185,groupId:203,sceneId:0},
        {id:186,groupId:203,sceneId:0},
        {id:187,groupId:203,sceneId:0},
        {id:188,groupId:203,sceneId:0},
        {id:189,groupId:203,sceneId:0},
        {id:190,groupId:203,sceneId:0},
        {id:191,groupId:203,sceneId:0},
        {id:192,groupId:203,sceneId:0}
    ]},        
    {id: 101, name:'Пир для Умордхота', cards:[
        {id:193,groupId:1,sceneId:101},
        {id:194,groupId:2,sceneId:101},
        {id:195,groupId:5,sceneId:101},
        {id:196,groupId:7,sceneId:101},
        {id:197,groupId:8,sceneId:101},
        {id:198,groupId:1,sceneId:101},
        {id:199,groupId:2,sceneId:101},
        {id:200,groupId:5,sceneId:101}
    ]},
    {id: 102, name:'Пришествие Азатота', cards:[
        {id:201,groupId:1,sceneId:102},
        {id:202,groupId:2,sceneId:102},
        {id:203,groupId:3,sceneId:102},
        {id:204,groupId:4,sceneId:102},
        {id:205,groupId:7,sceneId:102},
        {id:206,groupId:1,sceneId:102},
        {id:207,groupId:2,sceneId:102},
        {id:208,groupId:3,sceneId:102}
    ]},
    {id: 103, name:'Завеса сумерек', cards:[
        {id:209,groupId:4,sceneId:103},
        {id:210,groupId:5,sceneId:103},
        {id:211,groupId:6,sceneId:103},
        {id:212,groupId:7,sceneId:103},
        {id:213,groupId:8,sceneId:103},
        {id:214,groupId:4,sceneId:103},
        {id:215,groupId:5,sceneId:103},
        {id:216,groupId:6,sceneId:103}
    ]},
    {id: 104, name:'Эхо из глубин', cards:[
        {id:217,groupId:1,sceneId:104},
        {id:218,groupId:3,sceneId:104},
        {id:219,groupId:4,sceneId:104},
        {id:220,groupId:6,sceneId:104},
        {id:221,groupId:7,sceneId:104},
        {id:222,groupId:1,sceneId:104},
        {id:223,groupId:3,sceneId:104},
        {id:224,groupId:4,sceneId:104}
    ]},
    {id: 105, name:'Дети Итакуа', cards:[
        {id:225,groupId:1,sceneId:105},
        {id:226,groupId:2,sceneId:105},
        {id:227,groupId:4,sceneId:105},
        {id:228,groupId:5,sceneId:105},
        {id:229,groupId:7,sceneId:105},
        {id:230,groupId:1,sceneId:105},
        {id:231,groupId:2,sceneId:105},
        {id:232,groupId:4,sceneId:105}
    ]},
    {id: 106, name:'Сны о Р\'льехе', cards:[
        {id:233,groupId:5,sceneId:106},
        {id:234,groupId:6,sceneId:106},
        {id:235,groupId:7,sceneId:106},
        {id:236,groupId:8,sceneId:106},
        {id:237,groupId:5,sceneId:106},
        {id:238,groupId:6,sceneId:106},
        {id:239,groupId:7,sceneId:106},
        {id:240,groupId:8,sceneId:106}
    ]},
    {id: 107, name:'Безмолвие Цетхоггуа', cards:[
        {id:241,groupId:3,sceneId:107},
        {id:242,groupId:4,sceneId:107},
        {id:243,groupId:5,sceneId:107},
        {id:244,groupId:6,sceneId:107},
        {id:245,groupId:7,sceneId:107},
        {id:246,groupId:3,sceneId:107},
        {id:247,groupId:4,sceneId:107},
        {id:248,groupId:5,sceneId:107}
    ]},
    {id: 108, name:'Бледный фонарь', cards:[
        {id:249,groupId:1,sceneId:108},
        {id:250,groupId:3,sceneId:108},
        {id:251,groupId:5,sceneId:108},
        {id:252,groupId:9,sceneId:108},
        {id:253,groupId:12,sceneId:108},
        {id:254,groupId:1,sceneId:108},
        {id:255,groupId:3,sceneId:108},
        {id:256,groupId:5,sceneId:108}
    ]},
    {id: 109, name:'Тираны разрушения', cards:[
        {id:257,groupId:2,sceneId:109},
        {id:258,groupId:4,sceneId:109},
        {id:259,groupId:6,sceneId:109},
        {id:260,groupId:8,sceneId:109},
        {id:261,groupId:2,sceneId:109},
        {id:262,groupId:4,sceneId:109},
        {id:263,groupId:6,sceneId:109},
        {id:264,groupId:8,sceneId:109}
    ]},
    {id: 110, name:'Выстрелы вслепую', cards:[
        {id:265,groupId:1,sceneId:110},
        {id:266,groupId:2,sceneId:110},
        {id:267,groupId:3,sceneId:110},
        {id:268,groupId:4,sceneId:110},
        {id:269,groupId:7,sceneId:110},
        {id:270,groupId:1,sceneId:110},
        {id:271,groupId:2,sceneId:110},
        {id:272,groupId:3,sceneId:110}
    ]}
]