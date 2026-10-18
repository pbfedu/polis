// =========================================================
// BASE DE DATOS AMPLIADA DE PREGUNTAS (PAU FILOSOFÍA)
// Total: 56 preguntas organizadas por bloques temáticos
// =========================================================

const questionsDB = [
    // ---------------------------------------------------------
    // BLOQUE 1: ELS INICIS DE LA FILOSOFIA I ELS PRESOCRÀTICS (14 preguntes)
    // ---------------------------------------------------------
    {
        type: 'trivia',
        question: 'Segons la classificació d\'Aristòtil, quina causa representa allò de què està feta una cosa?',
        options: [
            'Causa material (hyle)', // Correcta [8]
            'Causa formal (morphé)',
            'Causa eficient',
            'Causa final (télos)'
        ],
        correct: 0
    },
    {
        type: 'trivia',
        question: 'Quin gènere literari van utilitzar pensadors presocràtics com Parmènides o Empèdocles per exposar el seu pensament?',
        options: [
            'El diàleg teatral',
            'L\'assaig en prosa',
            'L\'escriptura en vers', // Correcta [9]
            'L\'epístola'
        ],
        correct: 2
    },
    {
        type: 'trivia',
        question: 'Quin filòsof presocràtic considerava la respiració com el principi dinàmic i font de la vida?',
        options: [
            'Tales de Milet',
            'Anaxímenes de Milet', // Correcta [10]
            'Heràclit d\'Èfes',
            'Demòcrit'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quins autors poètics anteriors són considerats antecedents directes en el sorgiment de la reflexió filosòfica?',
        options: [
            'Homer, Hesíode, Safo, Èsquil i Sòfocles', // Correcta [9]
            'Plató, Aristòtil i Sòcrates',
            'Pericles, Tucídides i Heròdot',
            'Protàgoras, Gorgias i Trasímac'
        ],
        correct: 0
    },
    {
        type: 'trivia',
        question: 'Segons Heràclit d\'Èfes, com es produeix l\'harmonia i l\'ordre en el cosmos?',
        options: [
            'Mitjançant la barreja estàtica de quatre elements',
            'A partir de la unitat i tensió d\'elements oposats simbolitzats pel Foc', // Correcta [10]
            'Per l\'acció separadora de l\'Odi sobre l\'Amor',
            'Gràcies a la intervenció del Noûs com a intel·ligència externa'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Per quins dos processos físics oposats es produeixen les diferents coses a partir de l\'aire en el pensament d\'Anaxímenes?',
        options: [
            'Condensació i rarefacció', // Correcta [11, 12]
            'Amor i Odi',
            'Unió i divisió d\'àtoms',
            'Generació i corrupció'
        ],
        correct: 0
    },
    {
        type: 'true_false',
        question: 'La filosofia pròpiament dita apareix amb Plató i Aristòtil, havent com a model la vida i activitat de Sòcrates.',
        correct: true // [3]
    },
    {
        type: 'true_false',
        question: 'Els pitagòrics pensaven el número com un arkhé formal molt proper a les Idees immaterials de Plató.',
        correct: true // [10]
    },
    {
        type: 'true_false',
        question: 'Segons la física d\'Anaxàgores, les homeomeries o llavors es mouen i s\'ordenen de manera espontània sense cap principi extern.',
        correct: false // [10] (Necessiten del Noûs)
    },
    {
        type: 'true_false',
        question: 'Demòcrit defensava que els àtoms eren partícules indivisibles, infinites en nombre, immutables i en constant moviment en el buit.',
        correct: true // [10]
    },
    {
        type: 'fill_blank',
        question: 'Els primers pensadors de l\'Escola de Milet que proposaven un únic principi material s\'anomenen...',
        correct: 'monistes' // [11]
    },
    {
        type: 'fill_blank',
        question: 'La causa aristotèlica que fa referència a la fi o objectiu d\'una cosa s\'anomena causa...',
        correct: 'final' // [8]
    },
    {
        type: 'fill_blank',
        question: 'El terme grec utilitzat per Anaximandre per descriure l\'arkhé com allò il·limitat i indefinit és...',
        correct: 'àpeiron' // [10, 11]
    },
    {
        type: 'dnd',
        question: 'Emparella cada filòsof presocràtic amb la seva concepció de l\'arkhé:',
        pairs: [
            { id: 'p1', term: 'Tales de Milet', meaning: 'L\'Aigua com a principi i fi de tot' }, // [10, 11]
            { id: 'p2', term: 'Parmènides d\'Èlea', meaning: 'L\'Ésser un, immutable i etern' }, // [10, 12]
            { id: 'p3', term: 'Demòcrit', meaning: 'Els Àtoms i el buit' }, // [10]
            { id: 'p4', term: 'Anaxàgores', meaning: 'Les Homeomeries (llavors) i el Noûs' } // [10]
        ]
    },

    // ---------------------------------------------------------
    // BLOQUE 2: LA REPÚBLICA DE PLATÓ (LLIBRES I - IV) (14 preguntes)
    // ---------------------------------------------------------
    {
        type: 'trivia',
        question: 'Amb quin interlocutor manté Sòcrates un diàleg al Llibre I defensant que és millor patir una injustícia que cometre-la?',
        options: [
            'Trasímac',
            'Polemarc', // Correcta [4]
            'Glaucó',
            'Adimant'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quina és la definició de justícia que sosté el sofista Trasímac al Llibre I de La República?',
        options: [
            'Donar a cadascú el que li pertoca',
            'La justícia és el que beneficia el més fort', // Correcta [4]
            'Fer el bé als amics i el mal als enemics',
            'L\'harmonia interior de les tres parts de l\'ànima'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Per quina raó proposa Sòcrates buscar la justícia primer en la polis abans de buscar-la en l\'individu?',
        options: [
            'Perquè en la polis la justícia està escrita en lletres més grans i és més fàcil de veure', // Correcta [13]
            'Perquè l\'individu no té cap importància moral',
            'Perquè la polis existia abans que els éssers humans',
            'Perquè els sofistes només parlaven de la polis'
        ],
        correct: 0
    },
    {
        type: 'trivia',
        question: 'Quin és el paper principal de la classe productiva en la polis ideal de Plató?',
        options: [
            'Prendre les decisions polítiques generals',
            'Proveir les necessitats materials de l\'Estat dedicant-se cadascú a un sol ofici', // Correcta [14, 15]
            'Defensar les fronteres de la polis dels atacs exteriors',
            'Educar els joves guardians en la música i la gimnàstica'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quina educació reben els guardians auxiliars per tal de desenvolupar el seu valor sense convertir-se en tirans?',
        options: [
            'Únicament entrenament militar intensiu',
            'Gimnàstica per al cos i música i poesia per a l\'ànima', // Correcta [15]
            'Retòrica, oratòria i dialectologia',
            'Estudis avançats de matemàtiques i astronomia'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quin tipus de polis proposa construir Sòcrates quan Glaucó rebutja la "ciutat sana" per trobar-la massa austera?',
        options: [
            'Una polis luxosa i "malalta"', // Correcta [16, 17]
            'Una polis militaritzada com Esparta',
            'Una ciutat democràtica',
            'Una polis sense lleis ni governants'
        ],
        correct: 0
    },
    {
        type: 'true_false',
        question: 'Al Llibre I, Sòcrates aconsegueix que Trasímac admeti que l\'injust és més feliç i virtuós que el just.',
        correct: false // [4, 18] (Sòcrates fa que Trasímac es contradigui)
    },
    {
        type: 'true_false',
        question: 'En la polis ideal de Plató, hi ha una igualtat completa entre homes i dones pel que fa a les funcions dels guardians.',
        correct: true // [16]
    },
    {
        type: 'true_false',
        question: 'La virtut de la prudència o saviesa és pròpia i exclusiva de la classe dels guardians auxiliars.',
        correct: false // [17, 19] (És pròpia dels governants o guardians perfectes)
    },
    {
        type: 'true_false',
        question: 'La justícia en la polis s\'aconsegueix quan cada classe social fa la seva funció pròpia i no s\'interfereix en la de les altres.',
        correct: true // [19]
    },
    {
        type: 'fill_blank',
        question: 'La part de l\'ànima associada als desitjos corporals i plaers materials s\'anomena part...',
        correct: 'concupiscible' // [17]
    },
    {
        type: 'fill_blank',
        question: 'La virtut pròpia de la part irascible de l\'ànima i de la classe dels guardians auxiliars és la...',
        correct: 'valentia' // [17, 19]
    },
    {
        type: 'fill_blank',
        question: 'La virtut d\'harmonia que ha d\'estar present en totes les classes de la polis s\'anomena...',
        correct: 'moderació' // [17, 19]
    },
    {
        type: 'dnd',
        question: 'Emparella les tres classes socials de la República amb la seva virtut corresponent:',
        pairs: [
            { id: 'r1', term: 'Governants (Guardians perfectes)', meaning: 'Saviesa o Prudència' }, // [19]
            { id: 'r2', term: 'Guardians auxiliars', meaning: 'Valentia o Coratge' }, // [19]
            { id: 'r3', term: 'Classe productiva', meaning: 'Moderació o Temprança' } // [19]
        ]
    },

    // ---------------------------------------------------------
    // BLOQUE 3: LA REPÚBLICA (LLIBRES V - VII) I TEORIA DEL CONEIXEMENT (14 preguntes)
    // ---------------------------------------------------------
    {
        type: 'trivia',
        question: 'Segons el Llibre V, quina és la condició indispensable perquè la polis justa sigui realitzable?',
        options: [
            'Que els ciutadans elegeixin els seus governants per sufragi',
            'Que els filòsofs governin o que els governants filosofin', // Correcta [5]
            'Que s\'elimini completament l\'exèrcit',
            'Que la propietat privada es distribueixi a totes les classes'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quina funció té la Idea del Bé en el Món Intel·ligible segons la comparació amb el Sol?',
        options: [
            'És una hipòtesi matemàtica provisional',
            'Atorga l\'ésser, l\'essència i la cognoscibilitat a totes les altres Idees', // Correcta [20, 21]
            'És una imatge sensible utilitzada en la diànoia',
            'Representa el poder polític del rei-filòsof'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quin és el primer estudi del programa preparatori (diànoia) del filòsof segons el Llibre VII?',
        options: [
            'La Geometria plana',
            'L\'Aritmètica', // Correcta [6]
            'L\'Astronomia',
            'La Música'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Per quina raó l\'estudi de l\'astronomia per al filòsof no s\'ha de basar en la percepció sensible del cel?',
        options: [
            'Perquè els astres són déus intocables',
            'Perquè cal estudiar el seu model matemàtic i no els detalls sensibles', // Correcta [6]
            'Perquè la vista no funciona de nit',
            'Perquè l\'astronomia no serveix per a la dialèctica'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quina característica defineix la Dialèctica a diferència del pensament discursiu (Dianoia)?',
        options: [
            'Empra dibuixos i figures geomètriques',
            'Parteix de supòsits i avança cap a conclusions sensibles',
            'Avança només entre Idees i cancel·la els supòsits fins a arribar al principi no hipotètic', // Correcta [22-25]
            'És un saber basat en la sensació i la doxa'
        ],
        correct: 2
    },
    {
        type: 'trivia',
        question: 'Com descriu Plató la paideia o educació en l\'al·legoria de la caverna?',
        options: [
            'Com la memorització de textos poètics',
            'Com un gir o conversió completa de l\'ànima des del Món Sensible cap a les Idees', // Correcta [22, 26]
            'Com l\'aprenentatge de la retòrica per convèncer a l\'assemblea',
            'Com l\'entrenament físic dels guardians'
        ],
        correct: 1
    },
    {
        type: 'true_false',
        question: 'La Diànoia és la ciència suprema que pot donar compte i explicar directament els seus propis supòsits sense necessitat d\'hipòtesis.',
        correct: false // [23, 24] (Només la dialèctica pot fer-ho)
    },
    {
        type: 'true_false',
        question: 'El filòsof està sotmès a un doble encegament: quan ascendeix cap a la llum i quan descendeix de nou a la caverna.',
        correct: true // [26]
    },
    {
        type: 'true_false',
        question: 'Al Símil de la Línia, les dues seccions principals (Món Sensible i Món Intel·ligible) són exactament de la mateixa mida.',
        correct: false // [21] (La línia es divideix en dues parts desiguals)
    },
    {
        type: 'true_false',
        question: 'Per a Plató, l\'activitat de governar la polis és una cosa que entusiasma profundament al filòsof que ha contemplat el Bé.',
        correct: false // [26] (Governar no li entusiasma, ho fa per deure)
    },
    {
        type: 'fill_blank',
        question: 'El grau suprem de coneixement racional i ciència veritable s\'anomena...',
        correct: 'epistéme' // [23]
    },
    {
        type: 'fill_blank',
        question: 'El conjunt d\'opinions basades en la percepció sensible i les aparences s\'anomena...',
        correct: 'doxa' // [26]
    },
    {
        type: 'fill_blank',
        question: 'La disciplina matemàtica que estudia els sòlids en tres dimensions dins del programa del filòsof és l\'...',
        correct: 'estereometria' // [6]
    },
    {
        type: 'dnd',
        question: 'Ordre dels estudis preparatoris (Diànoia) del filòsof segons el Llibre VII:',
        pairs: [
            { id: 'e1', term: '1r Estudi', meaning: 'Aritmètica (el número en si)' }, // [6]
            { id: 'e2', term: '2n Estudi', meaning: 'Geometria plana' }, // [6]
            { id: 'e3', term: '3r Estudi', meaning: 'Estereometria (sòlids)' }, // [6]
            { id: 'e4', term: '4t Estudi', meaning: 'Astronomia i Harmonia/Música matemàtica' } // [6, 23]
        ]
    },

    // ---------------------------------------------------------
    // BLOQUE 4: POLIS INTERIOR, APOLOGIA I MITES (14 preguntes)
    // ---------------------------------------------------------
    {
        type: 'trivia',
        question: 'Què respon Sòcrates al final del Llibre VII quan Glaucó afirma que la ciutat ideal només existeix en les paraules?',
        options: [
            'Que cal conquerir una altra ciutat per fundar-la',
            'Que hi ha un paradigma al cel per qui vulgui fundar aquesta polis en el seu propi interior', // Correcta [7]
            'Que la ciutat es construirà a Esparta',
            'Que van perdre el temps discutint'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quina famosa afirmació fa Sòcrates a l\'Apologia defensant el valor de la filosofia?',
        options: [
            'L\'home és la mesura de totes les coses',
            'Només sé que no sé res',
            'Una vida sense examen no val la pena de ser viscuda', // Correcta [7]
            'La justícia és el bé dels febles'
        ],
        correct: 2
    },
    {
        type: 'trivia',
        question: 'En el Mite de la Caverna, què representen les ombres projectades al fons de la paret?',
        options: [
            'Les Idees matemàtiques',
            'Les imatges i enganys del món sensible (Eikasia)', // Correcta [2, 22]
            'Els conceptes de la Dialèctica',
            'La Idea de Bé'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Quin argument utilitza Glaucó al Llibre II mitjançant el Mite de l\'Anell de Giges?',
        options: [
            'Que els homes són justos per naturalesa i amor al bé',
            'Que tothom actuaria de manera injusta si fos invisible i no hi hagués por al càstig', // Correcta [13, 14]
            'Que els reis han de portar anells d\'or',
            'Que la injustícia sempre és castigada pels déus'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'Com s\'assoleix el principi no hipotètic (Idea de Bé) en el procés dialèctic?',
        options: [
            'Mitjançant la percepció dels sentits',
            'Mitjançant la cancel·lació progressiva dels supòsits', // Correcta [22, 25]
            'Mitjançant dibuixos i figures a la sorra',
            'Mitjançant discursos retòrics'
        ],
        correct: 1
    },
    {
        type: 'trivia',
        question: 'A quin nivell de coneixement pertany la visió dels objectes físics portats darrere el mur a la caverna?',
        options: [
            'Eikasia (Imaginació)',
            'Pistis (Creença)', // Correcta [2, 22]
            'Dianoia (Pensament discursiu)',
            'Noesis (Dialèctica)'
        ],
        correct: 1
    },
    {
        type: 'true_false',
        question: 'Qui funda la ciutat justa en el seu interior actuarà segons la política d\'aquesta ciutat independentment de si existeix o no a la terra.',
        correct: true // [7]
    },
    {
        type: 'true_false',
        question: 'La música estudiada pel filòsof busca entrenar l\'oïda per gaudir de les sonoritats sensibles més agradables.',
        correct: false // [6, 23] (Busca les relacions numèriques de l'harmonia, no el so)
    },
    {
        type: 'true_false',
        question: 'La dialèctica procedeix cap endavant afegint cada cop més supòsits sense qüestionar el principi inicial.',
        correct: false // [24, 25] (Procedeix endarrere per cancel·lació de supòsits)
    },
    {
        type: 'true_false',
        question: 'Sòcrates defensava que el major bé de l\'home és conversar cada dia sobre la virtut i examinar-se a un mateix i als altres.',
        correct: true // [7]
    },
    {
        type: 'fill_blank',
        question: 'El terme grec per referir-se a l\'educació entesa com a gir o orientació de l\'ànima cap a la llum és la...',
        correct: 'paideia' // [22, 26]
    },
    {
        type: 'fill_blank',
        question: 'La facultat del pensament discursiu (Diànoia) utilitza imatges i s\'ajuda de...',
        correct: 'supòsits' // [22, 24]
    },
    {
        type: 'fill_blank',
        question: 'El Mite de l\'Anell de Giges s\'exposa per mostrar que la gent actua de manera justa principalment per por a patir la...',
        correct: 'injustícia' // [14]
    },
    {
        type: 'dnd',
        question: 'Emparella els nivells del Símil de la Línia amb la seva definició corresponent:',
        pairs: [
            { id: 's1', term: 'Eikasia', meaning: 'Imaginació o opinió basada en umbres i reflexos' }, // [2, 22]
            { id: 's2', term: 'Pistis', meaning: 'Creença basada en la percepció dels objectes naturals' }, // [2, 22]
            { id: 's3', term: 'Dianoia', meaning: 'Pensament discursiu que utilitza supòsits i imatges' }, // [22, 24]
            { id: 's4', term: 'Noesis', meaning: 'Dialèctica o coneixement pur de les Idees i del Bé' } // [22, 23, 25]
        ]
    }
];
