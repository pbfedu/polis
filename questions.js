// questions.js
// Base de datos de preguntas de filosofía. Se carga dinámicamente en play.html

const questionsDB = [
    // ---------------------------------------------------------
    // TIPO 1: TRIVIA (Opción múltiple)
    // Se mezclan solas automáticamente en play.html
    // ---------------------------------------------------------
    {
        type: 'trivia',
        question: 'Al Mite de la Caverna, què representa el Sol exterior?',
        options: [
            'La fama i el poder polític',
            'La Idea de Bé, font de tota veritat', // Esta es la correcta
            'El foc creat pels sofistes',
            'La ignorància dels mortals'
        ],
        correct: 1 // Índice de la respuesta correcta en este array base
    },
    {
        type: 'trivia',
        question: 'Quin filòsof va ser el mestre de Plató?',
        options: [
            'Aristòtil',
            'Sòcrates',
            'Pitàgores',
            'Tales de Milet'
        ],
        correct: 1
    },

    // ---------------------------------------------------------
    // TIPO 2: TRUE_FALSE (Verdadero o falso)
    // "correct" debe ser true o false
    // ---------------------------------------------------------
    {
        type: 'true_false',
        question: 'Plató defensava que la democràcia era el sistema de govern més just i perfecte.',
        correct: false // Falso, prefería el gobierno de los reyes-filósofos
    },
    {
        type: 'true_false',
        question: 'Segons Plató, les Idees del Món Intel·ligible són immutables i eternes.',
        correct: true
    },

    // ---------------------------------------------------------
    // TIPO 3: FILL_BLANK (Rellenar el hueco)
    // El jugador debe escribir la palabra exacta
    // ---------------------------------------------------------
    {
        type: 'fill_blank',
        question: 'Com es diu la teoria platònica que afirma que aprendre és recordar?',
        correct: 'reminiscència' // Se comprueba ignorando mayúsculas/minúsculas
    },
    {
        type: 'fill_blank',
        question: 'La ciutat-estat de l\'Antiga Grècia, concepte clau en la política platònica, es deia...',
        correct: 'polis'
    },

    // ---------------------------------------------------------
    // TIPO 4: DND (Drag and Drop / Emparejar)
    // ---------------------------------------------------------
    {
        type: 'dnd',
        question: 'Emparella els elements del Mite del Carro Alat amb la part de l\'ànima que representen:',
        pairs: [
            { id: 'c1', term: 'Cavall Blanc', meaning: 'Ànima Irascible (Coratge)' },
            { id: 'c2', term: 'Cavall Negre', meaning: 'Ànima Concupiscible (Desitjos)' },
            { id: 'c3', term: 'Auriga', meaning: 'Ànima Racional (Raó)' }
        ]
    },
    {
        type: 'dnd',
        question: 'Emparella els conceptes segons el dualisme platònic:',
        pairs: [
            { id: 'd1', term: 'Món Sensible', meaning: 'Aparença, canvi i mortalitat' },
            { id: 'd2', term: 'Món Intel·ligible', meaning: 'Veritat, eternitat i perfecció' },
            { id: 'd3', term: 'Doxa', meaning: 'Opinió basada en els sentits' }
        ]
    }
];
