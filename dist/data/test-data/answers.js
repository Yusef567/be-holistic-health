"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstMovieTriviaAnswers = [
    {
        question_id: 1,
        answers: [
            { answer_text: "Daniel Radcliffe", is_correct: true },
            { answer_text: "Rupert Grint", is_correct: false },
            { answer_text: "Emma Watson", is_correct: false },
            { answer_text: "Tom Felton", is_correct: false },
        ],
    },
    {
        question_id: 2,
        answers: [
            { answer_text: "The Fast and the Furious", is_correct: false },
            { answer_text: "Fast & Furious", is_correct: false },
            { answer_text: "Fast Five", is_correct: false },
            {
                answer_text: "The Fast and the Furious: Tokyo Drift",
                is_correct: true,
            },
        ],
    },
    {
        question_id: 3,
        answers: [
            { answer_text: "Han Solo", is_correct: true },
            { answer_text: "Luke Skywalker", is_correct: false },
            { answer_text: "Obi-Wan Kenobi", is_correct: false },
            { answer_text: "Darth Vader", is_correct: false },
        ],
    },
    {
        question_id: 4,
        answers: [
            { answer_text: "Sean Connery", is_correct: true },
            { answer_text: "Roger Moore", is_correct: false },
            { answer_text: "Pierce Brosnan", is_correct: false },
            { answer_text: "Daniel Craig", is_correct: false },
        ],
    },
    {
        question_id: 5,
        answers: [
            { answer_text: "The One Ring", is_correct: true },
            { answer_text: "The Precious Ring", is_correct: false },
            { answer_text: "The Golden Ring", is_correct: false },
            { answer_text: "The Elven Ring", is_correct: false },
        ],
    },
    {
        question_id: 6,
        answers: [
            { answer_text: "Captain Jack Sparrow", is_correct: true },
            { answer_text: "Will Turner", is_correct: false },
            { answer_text: "Elizabeth Swann", is_correct: false },
            { answer_text: "Hector Barbossa", is_correct: false },
        ],
    },
    {
        question_id: 7,
        answers: [
            { answer_text: "Mia Toretto", is_correct: true },
            { answer_text: "Letty Ortiz", is_correct: false },
            { answer_text: "Elena Neves", is_correct: false },
            { answer_text: "Ramsey", is_correct: false },
        ],
    },
    {
        question_id: 8,
        answers: [
            { answer_text: "James Bond", is_correct: true },
            { answer_text: "Ethan Hunt", is_correct: false },
            { answer_text: "Jason Bourne", is_correct: false },
            { answer_text: "Austin Powers", is_correct: false },
        ],
    },
];
const blockbusterMovieChallengeAnswers = [
    {
        question_id: 9,
        answers: [
            { answer_text: "Rupert Grint", is_correct: true },
            { answer_text: "Daniel Radcliffe", is_correct: false },
            { answer_text: "Tom Felton", is_correct: false },
            { answer_text: "Emma Watson", is_correct: false },
        ],
    },
    {
        question_id: 10,
        answers: [
            { answer_text: "Fast Five", is_correct: true },
            { answer_text: "The Fast and the Furious", is_correct: false },
            { answer_text: "Fast & Furious", is_correct: false },
            {
                answer_text: "The Fast and the Furious: Tokyo Drift",
                is_correct: false,
            },
        ],
    },
    {
        question_id: 11,
        answers: [
            { answer_text: "Millennium Falcon", is_correct: true },
            { answer_text: "X-wing", is_correct: false },
            { answer_text: "TIE Fighter", is_correct: false },
            { answer_text: "Star Destroyer", is_correct: false },
        ],
    },
    {
        question_id: 12,
        answers: [
            { answer_text: "Sean Connery", is_correct: true },
            { answer_text: "Roger Moore", is_correct: false },
            { answer_text: "Pierce Brosnan", is_correct: false },
            { answer_text: "Daniel Craig", is_correct: false },
        ],
    },
    {
        question_id: 13,
        answers: [
            { answer_text: "Gollum", is_correct: false },
            { answer_text: "Frodo Baggins", is_correct: false },
            { answer_text: "Sauron", is_correct: false },
            { answer_text: "Bilbo Baggins", is_correct: true },
        ],
    },
    {
        question_id: 14,
        answers: [
            { answer_text: "Captain Jack Sparrow", is_correct: true },
            { answer_text: "Will Turner", is_correct: false },
            { answer_text: "Elizabeth Swann", is_correct: false },
            { answer_text: "Hector Barbossa", is_correct: false },
        ],
    },
    {
        question_id: 15,
        answers: [
            {
                answer_text: "Harry Potter and the Philosopher's Stone",
                is_correct: true,
            },
            {
                answer_text: "Harry Potter and the Chamber of Secrets",
                is_correct: false,
            },
            {
                answer_text: "Harry Potter and the Prisoner of Azkaban",
                is_correct: false,
            },
            { answer_text: "Harry Potter and the Goblet of Fire", is_correct: false },
        ],
    },
    {
        question_id: 16,
        answers: [
            { answer_text: "Vin Diesel", is_correct: true },
            { answer_text: "Dwayne Johnson", is_correct: false },
            { answer_text: "Paul Walker", is_correct: false },
            { answer_text: "Jason Statham", is_correct: false },
        ],
    },
];
const adventureTravelTriviaAnswers = [
    {
        question_id: 17,
        answers: [
            { answer_text: "Peru", is_correct: true },
            { answer_text: "Nepal", is_correct: false },
            { answer_text: "New Zealand", is_correct: false },
            { answer_text: "Switzerland", is_correct: false },
        ],
    },
    {
        question_id: 18,
        answers: [
            { answer_text: "Mount Etna", is_correct: true },
            { answer_text: "Mount Kilimanjaro", is_correct: false },
            { answer_text: "Mount Fuji", is_correct: false },
            { answer_text: "Mount Vesuvius", is_correct: false },
        ],
    },
    {
        question_id: 19,
        answers: [
            { answer_text: "Morocco", is_correct: true },
            { answer_text: "South Africa", is_correct: false },
            { answer_text: "Egypt", is_correct: false },
            { answer_text: "Australia", is_correct: false },
        ],
    },
    {
        question_id: 20,
        answers: [
            { answer_text: "Bali", is_correct: true },
            { answer_text: "Rio de Janeiro", is_correct: false },
            { answer_text: "Sydney", is_correct: false },
            { answer_text: "Cape Town", is_correct: false },
        ],
    },
    {
        question_id: 21,
        answers: [
            { answer_text: "Appalachian Trail", is_correct: true },
            { answer_text: "Pacific Crest Trail", is_correct: false },
            { answer_text: "Great Wall of China", is_correct: false },
            { answer_text: "Camino de Santiago", is_correct: false },
        ],
    },
    {
        question_id: 22,
        answers: [
            { answer_text: "New Zealand", is_correct: true },
            { answer_text: "Switzerland", is_correct: false },
            { answer_text: "Costa Rica", is_correct: false },
            { answer_text: "South Africa", is_correct: false },
        ],
    },
    {
        question_id: 23,
        answers: [
            { answer_text: "Manaus", is_correct: true },
            { answer_text: "Lima", is_correct: false },
            { answer_text: "Cusco", is_correct: false },
            { answer_text: "São Paulo", is_correct: false },
        ],
    },
    {
        question_id: 24,
        answers: [
            { answer_text: "Uluru (Ayers Rock)", is_correct: true },
            { answer_text: "Great Barrier Reef", is_correct: false },
            { answer_text: "Victoria Falls", is_correct: false },
            { answer_text: "Machu Picchu", is_correct: false },
        ],
    },
];
const travelDestinationsTriviaAnswers = [
    {
        question_id: 25,
        answers: [
            { answer_text: "Angel Falls", is_correct: true },
            { answer_text: "Niagara Falls", is_correct: false },
            { answer_text: "Iguazu Falls", is_correct: false },
            { answer_text: "Victoria Falls", is_correct: false },
        ],
    },
    {
        question_id: 26,
        answers: [
            { answer_text: "Jordan", is_correct: true },
            { answer_text: "Greece", is_correct: false },
            { answer_text: "Italy", is_correct: false },
            { answer_text: "Egypt", is_correct: false },
        ],
    },
    {
        question_id: 27,
        answers: [
            { answer_text: "Portuguese", is_correct: true },
            { answer_text: "Spanish", is_correct: false },
            { answer_text: "French", is_correct: false },
            { answer_text: "English", is_correct: false },
        ],
    },
    {
        question_id: 28,
        answers: [
            { answer_text: "Netherlands", is_correct: true },
            { answer_text: "Germany", is_correct: false },
            { answer_text: "France", is_correct: false },
            { answer_text: "Denmark", is_correct: false },
        ],
    },
    {
        question_id: 29,
        answers: [
            { answer_text: "Christ the Redeemer", is_correct: true },
            { answer_text: "The Colosseum", is_correct: false },
            { answer_text: "The Great Wall", is_correct: false },
            { answer_text: "The Statue of Liberty", is_correct: false },
        ],
    },
    {
        question_id: 30,
        answers: [
            { answer_text: "Cusco", is_correct: true },
            { answer_text: "Athens", is_correct: false },
            { answer_text: "Cairo", is_correct: false },
            { answer_text: "Rome", is_correct: false },
        ],
    },
    {
        question_id: 31,
        answers: [
            { answer_text: "Japanese Yen", is_correct: true },
            { answer_text: "Euro", is_correct: false },
            { answer_text: "Pound Sterling", is_correct: false },
            { answer_text: "US Dollar", is_correct: false },
        ],
    },
    {
        question_id: 32,
        answers: [
            { answer_text: "Kenya", is_correct: true },
            { answer_text: "Madagascar", is_correct: false },
            { answer_text: "Tanzania", is_correct: false },
            { answer_text: "South Africa", is_correct: false },
        ],
    },
];
const scientificWondersTriviaAnswers = [
    {
        question_id: 33,
        answers: [
            { answer_text: "O", is_correct: true },
            { answer_text: "O2", is_correct: false },
            { answer_text: "C", is_correct: false },
            { answer_text: "H", is_correct: false },
        ],
    },
    {
        question_id: 34,
        answers: [
            { answer_text: "Albert Einstein", is_correct: true },
            { answer_text: "Isaac Newton", is_correct: false },
            { answer_text: "Marie Curie", is_correct: false },
            { answer_text: "Charles Darwin", is_correct: false },
        ],
    },
    {
        question_id: 35,
        answers: [
            { answer_text: "Jupiter", is_correct: true },
            { answer_text: "Saturn", is_correct: false },
            { answer_text: "Earth", is_correct: false },
            { answer_text: "Mars", is_correct: false },
        ],
    },
    {
        question_id: 36,
        answers: [
            { answer_text: "Atom", is_correct: true },
            { answer_text: "Molecule", is_correct: false },
            { answer_text: "Cell", is_correct: false },
            { answer_text: "Proton", is_correct: false },
        ],
    },
    {
        question_id: 37,
        answers: [
            { answer_text: "Photosynthesis", is_correct: true },
            { answer_text: "Respiration", is_correct: false },
            { answer_text: "Transpiration", is_correct: false },
            { answer_text: "Fermentation", is_correct: false },
        ],
    },
    {
        question_id: 38,
        answers: [
            { answer_text: "Genetics", is_correct: true },
            { answer_text: "Ecology", is_correct: false },
            { answer_text: "Botany", is_correct: false },
            { answer_text: "Microbiology", is_correct: false },
        ],
    },
    {
        question_id: 39,
        answers: [
            { answer_text: "Ampere", is_correct: true },
            { answer_text: "Volt", is_correct: false },
            { answer_text: "Watt", is_correct: false },
            { answer_text: "Ohm", is_correct: false },
        ],
    },
    {
        question_id: 40,
        answers: [
            { answer_text: "100", is_correct: true },
            { answer_text: "0", is_correct: false },
            { answer_text: "50", is_correct: false },
            { answer_text: "212", is_correct: false },
        ],
    },
];
const amazingScienceFactsTriviaAnswers = [
    {
        question_id: 41,
        answers: [
            { answer_text: "Paleontology", is_correct: true },
            { answer_text: "Zoology", is_correct: false },
            { answer_text: "Botany", is_correct: false },
            { answer_text: "Geology", is_correct: false },
        ],
    },
    {
        question_id: 42,
        answers: [
            { answer_text: "Charles Darwin", is_correct: true },
            { answer_text: "Isaac Newton", is_correct: false },
            { answer_text: "Albert Einstein", is_correct: false },
            { answer_text: "Marie Curie", is_correct: false },
        ],
    },
    {
        question_id: 43,
        answers: [
            { answer_text: "Skin", is_correct: true },
            { answer_text: "Heart", is_correct: false },
            { answer_text: "Brain", is_correct: false },
            { answer_text: "Liver", is_correct: false },
        ],
    },
    {
        question_id: 44,
        answers: [
            { answer_text: "Newton", is_correct: true },
            { answer_text: "Watt", is_correct: false },
            { answer_text: "Joule", is_correct: false },
            { answer_text: "Tesla", is_correct: false },
        ],
    },
    {
        question_id: 45,
        answers: [
            { answer_text: "Sublimation", is_correct: true },
            { answer_text: "Evaporation", is_correct: false },
            { answer_text: "Condensation", is_correct: false },
            { answer_text: "Solidification", is_correct: false },
        ],
    },
    {
        question_id: 46,
        answers: [
            { answer_text: "Meteorology", is_correct: true },
            { answer_text: "Geology", is_correct: false },
            { answer_text: "Climatology", is_correct: false },
            { answer_text: "Oceanography", is_correct: false },
        ],
    },
    {
        question_id: 47,
        answers: [
            { answer_text: "Mars", is_correct: true },
            { answer_text: "Venus", is_correct: false },
            { answer_text: "Saturn", is_correct: false },
            { answer_text: "Jupiter", is_correct: false },
        ],
    },
    {
        question_id: 48,
        answers: [
            { answer_text: "Cell", is_correct: true },
            { answer_text: "Atom", is_correct: false },
            { answer_text: "Molecule", is_correct: false },
            { answer_text: "Gene", is_correct: false },
        ],
    },
];
const literaryMasterpiecesTriviaAnswers = [
    {
        question_id: 49,
        answers: [
            { answer_text: "Jane Austen", is_correct: true },
            { answer_text: "Emily Bronte", is_correct: false },
            { answer_text: "Charles Dickens", is_correct: false },
            { answer_text: "F. Scott Fitzgerald", is_correct: false },
        ],
    },
    {
        question_id: 50,
        answers: [
            { answer_text: "Hamlet", is_correct: true },
            { answer_text: "Macbeth", is_correct: false },
            { answer_text: "Romeo and Juliet", is_correct: false },
            { answer_text: "Othello", is_correct: false },
        ],
    },
    {
        question_id: 51,
        answers: [
            { answer_text: "Edgar Allan Poe", is_correct: true },
            { answer_text: "Robert Frost", is_correct: false },
            { answer_text: "Emily Dickinson", is_correct: false },
            { answer_text: "William Wordsworth", is_correct: false },
        ],
    },
    {
        question_id: 52,
        answers: [
            { answer_text: "J.K. Rowling", is_correct: true },
            { answer_text: "George Orwell", is_correct: false },
            { answer_text: "J.R.R. Tolkien", is_correct: false },
            { answer_text: "C.S. Lewis", is_correct: false },
        ],
    },
    {
        question_id: 53,
        answers: [
            { answer_text: "Harper Lee", is_correct: true },
            { answer_text: "Mark Twain", is_correct: false },
            { answer_text: "Ernest Hemingway", is_correct: false },
            { answer_text: "John Steinbeck", is_correct: false },
        ],
    },
    {
        question_id: 54,
        answers: [
            { answer_text: "The Iliad", is_correct: true },
            { answer_text: "The Odyssey", is_correct: false },
            { answer_text: "The Aeneid", is_correct: false },
            { answer_text: "The Epic of Gilgamesh", is_correct: false },
        ],
    },
    {
        question_id: 55,
        answers: [
            { answer_text: "William Shakespeare", is_correct: true },
            { answer_text: "Arthur Miller", is_correct: false },
            { answer_text: "George Bernard Shaw", is_correct: false },
            { answer_text: "Oscar Wilde", is_correct: false },
        ],
    },
    {
        question_id: 56,
        answers: [
            { answer_text: "The Hunger Games", is_correct: true },
            { answer_text: "1984", is_correct: false },
            { answer_text: "Brave New World", is_correct: false },
            { answer_text: "The Giver", is_correct: false },
        ],
    },
];
const classicLiteratureTriviaAnswers = [
    {
        question_id: 57,
        answers: [
            { answer_text: "Herman Melville", is_correct: true },
            { answer_text: "Nathaniel Hawthorne", is_correct: false },
            { answer_text: "Mark Twain", is_correct: false },
            { answer_text: "Henry David Thoreau", is_correct: false },
        ],
    },
    {
        question_id: 58,
        answers: [
            { answer_text: "The Great Gatsby", is_correct: true },
            { answer_text: "To Kill a Mockingbird", is_correct: false },
            { answer_text: "Pride and Prejudice", is_correct: false },
            { answer_text: "War and Peace", is_correct: false },
        ],
    },
    {
        question_id: 59,
        answers: [
            { answer_text: "William Shakespeare", is_correct: true },
            { answer_text: "Arthur Miller", is_correct: false },
            { answer_text: "George Bernard Shaw", is_correct: false },
            { answer_text: "Oscar Wilde", is_correct: false },
        ],
    },
    {
        question_id: 60,
        answers: [
            { answer_text: "1984", is_correct: true },
            { answer_text: "Brave New World", is_correct: false },
            { answer_text: "The Hunger Games", is_correct: false },
            { answer_text: "Fahrenheit 451", is_correct: false },
        ],
    },
    {
        question_id: 61,
        answers: [
            { answer_text: "J.D. Salinger", is_correct: true },
            { answer_text: "Ernest Hemingway", is_correct: false },
            { answer_text: "John Steinbeck", is_correct: false },
            { answer_text: "Harper Lee", is_correct: false },
        ],
    },
    {
        question_id: 62,
        answers: [
            { answer_text: "Walt Whitman", is_correct: true },
            { answer_text: "Emily Dickinson", is_correct: false },
            { answer_text: "Robert Frost", is_correct: false },
            { answer_text: "Langston Hughes", is_correct: false },
        ],
    },
    {
        question_id: 63,
        answers: [
            { answer_text: "Tennessee Williams", is_correct: true },
            { answer_text: "Arthur Miller", is_correct: false },
            { answer_text: "Edward Albee", is_correct: false },
            { answer_text: "Samuel Beckett", is_correct: false },
        ],
    },
    {
        question_id: 64,
        answers: [
            { answer_text: "The Lord of the Rings", is_correct: true },
            { answer_text: "The Chronicles of Narnia", is_correct: false },
            { answer_text: "The Hobbit", is_correct: false },
            { answer_text: "The Silmarillion", is_correct: false },
        ],
    },
];
const famousAuthorsTriviaAnswers = [
    {
        question_id: 65,
        answers: [
            { answer_text: "Jane Austen", is_correct: true },
            { answer_text: "Emily Brontë", is_correct: false },
            { answer_text: "Charlotte Brontë", is_correct: false },
            { answer_text: "Louisa May Alcott", is_correct: false },
        ],
    },
    {
        question_id: 66,
        answers: [
            { answer_text: "Harper Lee", is_correct: true },
            { answer_text: "F. Scott Fitzgerald", is_correct: false },
            { answer_text: "Ernest Hemingway", is_correct: false },
            { answer_text: "Mark Twain", is_correct: false },
        ],
    },
    {
        question_id: 67,
        answers: [
            { answer_text: "J.K. Rowling", is_correct: true },
            { answer_text: "Stephen King", is_correct: false },
            { answer_text: "George R.R. Martin", is_correct: false },
            { answer_text: "Suzanne Collins", is_correct: false },
        ],
    },
    {
        question_id: 68,
        answers: [
            { answer_text: "Leo Tolstoy", is_correct: true },
            { answer_text: "Fyodor Dostoevsky", is_correct: false },
            { answer_text: "Anton Chekhov", is_correct: false },
            { answer_text: "Nikolai Gogol", is_correct: false },
        ],
    },
    {
        question_id: 69,
        answers: [
            { answer_text: "Mary Shelley", is_correct: true },
            { answer_text: "Bram Stoker", is_correct: false },
            { answer_text: "Edgar Allan Poe", is_correct: false },
            { answer_text: "Oscar Wilde", is_correct: false },
        ],
    },
    {
        question_id: 70,
        answers: [
            { answer_text: "Arthur Conan Doyle", is_correct: true },
            { answer_text: "Agatha Christie", is_correct: false },
            { answer_text: "Charles Dickens", is_correct: false },
            { answer_text: "J.R.R. Tolkien", is_correct: false },
        ],
    },
    {
        question_id: 71,
        answers: [
            { answer_text: "F. Scott Fitzgerald", is_correct: true },
            { answer_text: "Ernest Hemingway", is_correct: false },
            { answer_text: "Mark Twain", is_correct: false },
            { answer_text: "Harper Lee", is_correct: false },
        ],
    },
    {
        question_id: 72,
        answers: [
            { answer_text: "J.D. Salinger", is_correct: true },
            { answer_text: "Ernest Hemingway", is_correct: false },
            { answer_text: "John Steinbeck", is_correct: false },
            { answer_text: "Harper Lee", is_correct: false },
        ],
    },
];
const shakespeareanTriviaAnswers = [
    {
        question_id: 73,
        answers: [
            { answer_text: "Romeo and Juliet", is_correct: true },
            { answer_text: "Hamlet", is_correct: false },
            { answer_text: "Macbeth", is_correct: false },
            { answer_text: "A Midsummer Night's Dream", is_correct: false },
        ],
    },
    {
        question_id: 74,
        answers: [
            { answer_text: "William Shakespeare", is_correct: true },
            { answer_text: "Christopher Marlowe", is_correct: false },
            { answer_text: "John Donne", is_correct: false },
            { answer_text: "Ben Jonson", is_correct: false },
        ],
    },
    {
        question_id: 75,
        answers: [
            { answer_text: "Hamlet", is_correct: true },
            { answer_text: "Othello", is_correct: false },
            { answer_text: "King Lear", is_correct: false },
            { answer_text: "Macbeth", is_correct: false },
        ],
    },
    {
        question_id: 76,
        answers: [
            { answer_text: "The Comedy of Errors", is_correct: true },
            { answer_text: "Twelfth Night", is_correct: false },
            { answer_text: "Much Ado About Nothing", is_correct: false },
            { answer_text: "As You Like It", is_correct: false },
        ],
    },
    {
        question_id: 77,
        answers: [
            { answer_text: "William Shakespeare", is_correct: true },
            { answer_text: "Christopher Marlowe", is_correct: false },
            { answer_text: "John Donne", is_correct: false },
            { answer_text: "Ben Jonson", is_correct: false },
        ],
    },
    {
        question_id: 78,
        answers: [
            { answer_text: "Macbeth", is_correct: true },
            { answer_text: "Hamlet", is_correct: false },
            { answer_text: "King Lear", is_correct: false },
            { answer_text: "Othello", is_correct: false },
        ],
    },
    {
        question_id: 79,
        answers: [
            { answer_text: "Othello", is_correct: true },
            { answer_text: "Macbeth", is_correct: false },
            { answer_text: "Hamlet", is_correct: false },
            { answer_text: "Romeo and Juliet", is_correct: false },
        ],
    },
    {
        question_id: 80,
        answers: [
            { answer_text: "William Shakespeare", is_correct: true },
            { answer_text: "Christopher Marlowe", is_correct: false },
            { answer_text: "John Donne", is_correct: false },
            { answer_text: "Ben Jonson", is_correct: false },
        ],
    },
];
const answersData = [
    firstMovieTriviaAnswers,
    blockbusterMovieChallengeAnswers,
    adventureTravelTriviaAnswers,
    travelDestinationsTriviaAnswers,
    scientificWondersTriviaAnswers,
    amazingScienceFactsTriviaAnswers,
    literaryMasterpiecesTriviaAnswers,
    classicLiteratureTriviaAnswers,
    famousAuthorsTriviaAnswers,
    shakespeareanTriviaAnswers,
];
exports.default = answersData;
