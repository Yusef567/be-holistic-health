"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ancientEgyptTriviaAnswers = [
    {
        question_id: 1,
        answers: [
            { answer_text: "Cuneiform", is_correct: false },
            { answer_text: "Hieroglyphics", is_correct: true },
            { answer_text: "Pictograms", is_correct: false },
            { answer_text: "Runes", is_correct: false },
        ],
    },
    {
        question_id: 2,
        answers: [
            { answer_text: "Tutankhamun", is_correct: false },
            { answer_text: "Khufu", is_correct: false },
            { answer_text: "Narmer", is_correct: true },
            { answer_text: "Akhenaten", is_correct: false },
        ],
    },
    {
        question_id: 3,
        answers: [
            { answer_text: "Nefertiti", is_correct: false },
            { answer_text: "Hatshepsut", is_correct: true },
            { answer_text: "Cleopatra", is_correct: false },
            { answer_text: "Meritaten", is_correct: false },
        ],
    },
    {
        question_id: 4,
        answers: [
            { answer_text: "The Tigris River", is_correct: false },
            { answer_text: "The Euphrates River", is_correct: false },
            { answer_text: "The Nile River", is_correct: true },
            { answer_text: "The Jordan River", is_correct: false },
        ],
    },
    {
        question_id: 5,
        answers: [
            { answer_text: "Religious ceremonies", is_correct: false },
            { answer_text: "Royal residences", is_correct: false },
            { answer_text: "Military fortifications", is_correct: false },
            {
                answer_text: "Tombs for pharaohs and their consorts",
                is_correct: true,
            },
        ],
    },
    {
        question_id: 6,
        answers: [
            { answer_text: "Rice", is_correct: false },
            { answer_text: "Corn", is_correct: false },
            { answer_text: "Wheat", is_correct: true },
            { answer_text: "Barley", is_correct: false },
        ],
    },
    {
        question_id: 7,
        answers: [
            {
                answer_text: "To preserve the body for the afterlife",
                is_correct: true,
            },
            {
                answer_text: "To make the body more presentable for burial",
                is_correct: false,
            },
            { answer_text: "To honor the deceased", is_correct: false },
            { answer_text: "To appease the gods", is_correct: false },
        ],
    },
    {
        question_id: 8,
        answers: [
            { answer_text: "Hatshepsut", is_correct: false },
            { answer_text: "Nefertiti", is_correct: false },
            { answer_text: "Cleopatra", is_correct: true },
            { answer_text: "Isis", is_correct: false },
        ],
    },
];
const ancientCivilizationsTriviaAnswers = [
    {
        question_id: 9,
        answers: [
            { answer_text: "Colosseum", is_correct: true },
            { answer_text: "Pantheon", is_correct: false },
            { answer_text: "Roman Forum", is_correct: false },
            { answer_text: "Circus Maximus", is_correct: false },
        ],
    },
    {
        question_id: 10,
        answers: [
            { answer_text: "Socrates", is_correct: false },
            { answer_text: "Plato", is_correct: false },
            { answer_text: "Aristotle", is_correct: true },
            { answer_text: "Pythagoras", is_correct: false },
        ],
    },
    {
        question_id: 11,
        answers: [
            { answer_text: "The tortoise", is_correct: false },
            { answer_text: "The legion", is_correct: false },
            { answer_text: "The hoplite", is_correct: false },
            { answer_text: "The phalanx", is_correct: true },
        ],
    },
    {
        question_id: 12,
        answers: [
            { answer_text: "Athens", is_correct: false },
            { answer_text: "Constantinople", is_correct: false },
            { answer_text: "Rome", is_correct: true },
            { answer_text: "Alexandria", is_correct: false },
        ],
    },
    {
        question_id: 13,
        answers: [
            { answer_text: "Greek", is_correct: false },
            { answer_text: "Latin", is_correct: true },
            { answer_text: "Sanskrit", is_correct: false },
            { answer_text: "Aramaic", is_correct: false },
        ],
    },
    {
        question_id: 14,
        answers: [
            { answer_text: "Monarchy", is_correct: false },
            { answer_text: "Democracy", is_correct: true },
            { answer_text: "Dictatorship", is_correct: false },
            { answer_text: "Oligarchy", is_correct: false },
        ],
    },
    {
        question_id: 15,
        answers: [
            { answer_text: "Forum", is_correct: true },
            { answer_text: "Colosseum", is_correct: false },
            { answer_text: "Pantheon", is_correct: false },
            { answer_text: "Acropolis", is_correct: false },
        ],
    },
    {
        question_id: 16,
        answers: [
            { answer_text: "Meat", is_correct: false },
            { answer_text: "Fish", is_correct: false },
            { answer_text: "Grains", is_correct: true },
            { answer_text: "Fruits and vegetables", is_correct: false },
        ],
    },
];
const vikingsTriviaChallengeAnswers = [
    {
        question_id: 17,
        answers: [
            { answer_text: "Denmark, Norway, and Sweden", is_correct: true },
            { answer_text: "Germany, Austria, and Switzerland", is_correct: false },
            { answer_text: "Spain, Portugal, and Italy", is_correct: false },
            { answer_text: "France, Belgium, and Luxembourg", is_correct: false },
        ],
    },
    {
        question_id: 18,
        answers: [
            { answer_text: "Warship", is_correct: false },
            { answer_text: "Raft", is_correct: false },
            { answer_text: "Longship", is_correct: true },
            { answer_text: "Cruise Ship", is_correct: false },
        ],
    },
    {
        question_id: 19,
        answers: [
            { answer_text: "Leif Erikson", is_correct: true },
            { answer_text: "Ragnar Lothbrok", is_correct: false },
            { answer_text: "Erik the Red", is_correct: false },
            { answer_text: "Ivar the Boneless", is_correct: false },
        ],
    },
    {
        question_id: 20,
        answers: [
            { answer_text: "Canute the Great", is_correct: true },
            { answer_text: "Ragnar Lothbrok", is_correct: false },
            { answer_text: "Erik the Red", is_correct: false },
            { answer_text: "Leif Erikson", is_correct: false },
        ],
    },
    {
        question_id: 21,
        answers: [
            { answer_text: "Vegetables and grains", is_correct: false },
            { answer_text: "Mainly meat and fish", is_correct: true },
            { answer_text: "Fruits and nuts", is_correct: false },
            { answer_text: "Dairy products", is_correct: false },
        ],
    },
    {
        question_id: 22,
        answers: [
            { answer_text: "Mud huts with straw roofs", is_correct: false },
            { answer_text: "Stone cottages with slate roofs", is_correct: false },
            { answer_text: "Tents made from animal hides", is_correct: false },
            { answer_text: "Longhouses made of timber and thatch", is_correct: true },
        ],
    },
    {
        question_id: 23,
        answers: [
            { answer_text: "Fishing and hunting", is_correct: false },
            { answer_text: "Agriculture and farming", is_correct: false },
            { answer_text: "Trading and raiding", is_correct: true },
            { answer_text: "Craftsmanship and artistry", is_correct: false },
        ],
    },
    {
        question_id: 24,
        answers: [
            { answer_text: "By using modern compasses", is_correct: false },
            {
                answer_text: "By following the flight patterns of birds",
                is_correct: false,
            },
            {
                answer_text: "By using the position of stars and the sun",
                is_correct: true,
            },
            {
                answer_text: "By relying on their instincts and experience",
                is_correct: false,
            },
        ],
    },
];
const worldWarHistoryTriviaAnswers = [
    {
        question_id: 25,
        answers: [
            { answer_text: "1915", is_correct: false },
            { answer_text: "1914", is_correct: true },
            { answer_text: "1916", is_correct: false },
            { answer_text: "1917", is_correct: false },
        ],
    },
    {
        question_id: 26,
        answers: [
            { answer_text: "Treaty of Versailles", is_correct: true },
            { answer_text: "Treaty of Trianon", is_correct: false },
            { answer_text: "Treaty of Brest-Litovsk", is_correct: false },
            { answer_text: "Treaty of Lausanne", is_correct: false },
        ],
    },
    {
        question_id: 27,
        answers: [
            { answer_text: "Switzerland", is_correct: false },
            { answer_text: "South Africa", is_correct: false },
            { answer_text: "Australia", is_correct: false },
            { answer_text: "Canada", is_correct: true },
        ],
    },
    {
        question_id: 28,
        answers: [
            { answer_text: "Attack on Pearl Harbor", is_correct: false },
            { answer_text: "Battle of Stalingrad", is_correct: false },
            { answer_text: "Invasion of Poland", is_correct: true },
            { answer_text: "Bombing of London", is_correct: false },
        ],
    },
    {
        question_id: 29,
        answers: [
            { answer_text: "1919", is_correct: false },
            { answer_text: "1916", is_correct: true },
            { answer_text: "1918", is_correct: false },
            { answer_text: "1920", is_correct: false },
        ],
    },
    {
        question_id: 30,
        answers: [
            { answer_text: "The Flying Fortress", is_correct: false },
            { answer_text: "The Flying Gasbag", is_correct: true },
            { answer_text: "The Zeppelin Killer", is_correct: false },
            { answer_text: "The Red Baron", is_correct: false },
        ],
    },
    {
        question_id: 31,
        answers: [
            { answer_text: "Operation Overlord", is_correct: false },
            { answer_text: "Operation Market Garden", is_correct: false },
            { answer_text: "Manhattan Project", is_correct: true },
            { answer_text: "Operation Barbarossa", is_correct: false },
        ],
    },
    {
        question_id: 32,
        answers: [
            { answer_text: "Japan", is_correct: false },
            { answer_text: "Germany", is_correct: true },
            { answer_text: "France", is_correct: false },
            { answer_text: "Italy", is_correct: false },
        ],
    },
];
const worldGeographyTriviaAnswers = [
    {
        question_id: 33,
        answers: [
            { answer_text: "Toronto", is_correct: false },
            { answer_text: "Ottawa", is_correct: true },
            { answer_text: "Vancouver", is_correct: false },
            { answer_text: "Montreal", is_correct: false },
        ],
    },
    {
        question_id: 34,
        answers: [
            { answer_text: "Mount Kilimanjaro", is_correct: false },
            { answer_text: "Mount Aconcagua", is_correct: false },
            { answer_text: "Mount Everest", is_correct: true },
            { answer_text: "Mount Denali", is_correct: false },
        ],
    },
    {
        question_id: 35,
        answers: [
            { answer_text: "Europe", is_correct: false },
            { answer_text: "North America", is_correct: false },
            { answer_text: "Africa", is_correct: false },
            { answer_text: "Oceania", is_correct: true },
        ],
    },
    {
        question_id: 36,
        answers: [
            { answer_text: "Amazon River", is_correct: false },
            { answer_text: "Nile River", is_correct: true },
            { answer_text: "Yangtze River", is_correct: false },
            { answer_text: "Congo River", is_correct: false },
        ],
    },
    {
        question_id: 37,
        answers: [
            { answer_text: "Arctic Desert", is_correct: false },
            { answer_text: "Sahara Desert", is_correct: true },
            { answer_text: "Gobi Desert", is_correct: false },
            { answer_text: "Kalahari Desert", is_correct: false },
        ],
    },
    {
        question_id: 38,
        answers: [
            { answer_text: "Osaka", is_correct: false },
            { answer_text: "Kyoto", is_correct: false },
            { answer_text: "Tokyo", is_correct: true },
            { answer_text: "Nagoya", is_correct: false },
        ],
    },
    {
        question_id: 39,
        answers: [
            { answer_text: "United States", is_correct: false },
            { answer_text: "Russia", is_correct: true },
            { answer_text: "China", is_correct: false },
            { answer_text: "Canada", is_correct: false },
        ],
    },
    {
        question_id: 40,
        answers: [
            { answer_text: "Angel Falls", is_correct: true },
            { answer_text: "Victoria Falls", is_correct: false },
            { answer_text: "Niagara Falls", is_correct: false },
            { answer_text: "Iguazu Falls", is_correct: false },
        ],
    },
];
const bordersandPeaksGeographyChallengeAnswers = [
    {
        question_id: 41,
        answers: [
            { answer_text: "Lake Victoria", is_correct: true },
            { answer_text: "Lake Tanganyika", is_correct: false },
            { answer_text: "Lake Chad", is_correct: false },
            { answer_text: "Lake Nyasa", is_correct: false },
        ],
    },
    {
        question_id: 42,
        answers: [
            { answer_text: "Mount Whitney", is_correct: false },
            { answer_text: "Mount Logan", is_correct: false },
            { answer_text: "Denali", is_correct: true },
            { answer_text: "Mount Elbert", is_correct: false },
        ],
    },
    {
        question_id: 43,
        answers: [
            { answer_text: "USA-Canada", is_correct: true },
            { answer_text: "China-Russia", is_correct: false },
            { answer_text: "India-Pakistan", is_correct: false },
            { answer_text: "Argentina-Chile", is_correct: false },
        ],
    },
    {
        question_id: 44,
        answers: [
            { answer_text: "Vatican City", is_correct: true },
            { answer_text: "Monaco", is_correct: false },
            { answer_text: "Nauru", is_correct: false },
            { answer_text: "San Marino", is_correct: false },
        ],
    },
    {
        question_id: 45,
        answers: [
            { answer_text: "Murray River", is_correct: true },
            { answer_text: "Darling River", is_correct: false },
            { answer_text: "Ord River", is_correct: false },
            { answer_text: "Fitzroy River", is_correct: false },
        ],
    },
    {
        question_id: 46,
        answers: [
            { answer_text: "Busan", is_correct: false },
            { answer_text: "Incheon", is_correct: false },
            { answer_text: "Seoul", is_correct: true },
            { answer_text: "Daegu", is_correct: false },
        ],
    },
    {
        question_id: 47,
        answers: [
            { answer_text: "Atlantic Ocean", is_correct: false },
            { answer_text: "Arctic Ocean", is_correct: false },
            { answer_text: "Indian Ocean", is_correct: false },
            { answer_text: "Pacific Ocean", is_correct: true },
        ],
    },
    {
        question_id: 48,
        answers: [
            { answer_text: "Barcelona", is_correct: false },
            { answer_text: "Valencia", is_correct: false },
            { answer_text: "Madrid", is_correct: true },
            { answer_text: "Seville", is_correct: false },
        ],
    },
];
const geographyGeniusQuizAnswers = [
    {
        question_id: 49,
        answers: [
            { answer_text: "Argentina", is_correct: false },
            { answer_text: "Brazil", is_correct: true },
            { answer_text: "Chile", is_correct: false },
            { answer_text: "Colombia", is_correct: false },
        ],
    },
    {
        question_id: 50,
        answers: [
            { answer_text: "Portugal", is_correct: false },
            { answer_text: "Spain", is_correct: true },
            { answer_text: "France", is_correct: false },
            { answer_text: "Italy", is_correct: false },
        ],
    },
    {
        question_id: 51,
        answers: [
            { answer_text: "Mexico", is_correct: false },
            { answer_text: "Honduras", is_correct: false },
            { answer_text: "Belize", is_correct: false },
            { answer_text: "El Salvador", is_correct: true },
        ],
    },
    {
        question_id: 52,
        answers: [
            { answer_text: "Bogotá", is_correct: false },
            { answer_text: "Lima", is_correct: true },
            { answer_text: "Santiago", is_correct: false },
            { answer_text: "Quito", is_correct: false },
        ],
    },
    {
        question_id: 53,
        answers: [
            { answer_text: "Congo River", is_correct: true },
            { answer_text: "Zambezi River", is_correct: false },
            { answer_text: "Niger River", is_correct: false },
            { answer_text: "Orange River", is_correct: false },
        ],
    },
    {
        question_id: 54,
        answers: [
            { answer_text: "Botswana", is_correct: false },
            { answer_text: "Namibia", is_correct: false },
            { answer_text: "South Africa", is_correct: true },
            { answer_text: "Zimbabwe", is_correct: false },
        ],
    },
    {
        question_id: 55,
        answers: [
            { answer_text: "Mount Kilimanjaro", is_correct: true },
            { answer_text: "Mount Kenya", is_correct: false },
            { answer_text: "Mount Meru", is_correct: false },
            { answer_text: "Mount Stanley", is_correct: false },
        ],
    },
    {
        question_id: 56,
        answers: [
            { answer_text: "Guadalajara", is_correct: false },
            { answer_text: "Tijuana", is_correct: false },
            { answer_text: "Monterrey", is_correct: false },
            { answer_text: "Mexico City", is_correct: true },
        ],
    },
];
const capitalConundrumQuizAnswers = [
    {
        question_id: 57,
        answers: [
            { answer_text: "Lyon", is_correct: false },
            { answer_text: "Marseille", is_correct: false },
            { answer_text: "Paris", is_correct: true },
            { answer_text: "Toulouse", is_correct: false },
        ],
    },
    {
        question_id: 58,
        answers: [
            { answer_text: "Melbourne", is_correct: false },
            { answer_text: "Canberra", is_correct: true },
            { answer_text: "Sydney", is_correct: false },
            { answer_text: "Brisbane", is_correct: false },
        ],
    },
    {
        question_id: 59,
        answers: [
            { answer_text: "Alexandria", is_correct: false },
            { answer_text: "Cairo", is_correct: true },
            { answer_text: "Luxor", is_correct: false },
            { answer_text: "Aswan", is_correct: false },
        ],
    },
    {
        question_id: 60,
        answers: [
            { answer_text: "Montreal", is_correct: false },
            { answer_text: "Toronto", is_correct: false },
            { answer_text: "Vancouver", is_correct: false },
            { answer_text: "Ottawa", is_correct: true },
        ],
    },
    {
        question_id: 61,
        answers: [
            { answer_text: "Beijing", is_correct: true },
            { answer_text: "Shanghai", is_correct: false },
            { answer_text: "Guangzhou", is_correct: false },
            { answer_text: "Chongqing", is_correct: false },
        ],
    },
    {
        question_id: 62,
        answers: [
            { answer_text: "Berlin", is_correct: true },
            { answer_text: "Hamburg", is_correct: false },
            { answer_text: "Munich", is_correct: false },
            { answer_text: "Frankfurt", is_correct: false },
        ],
    },
    {
        question_id: 63,
        answers: [
            { answer_text: "Mumbai", is_correct: false },
            { answer_text: "New Delhi", is_correct: true },
            { answer_text: "Kolkata", is_correct: false },
            { answer_text: "Chennai", is_correct: false },
        ],
    },
    {
        question_id: 64,
        answers: [
            { answer_text: "Rome", is_correct: true },
            { answer_text: "Milan", is_correct: false },
            { answer_text: "Naples", is_correct: false },
            { answer_text: "Turin", is_correct: false },
        ],
    },
];
const mountainsOfTheWorldQuizAnswers = [
    {
        question_id: 65,
        answers: [
            { answer_text: "Mount Kilimanjaro", is_correct: false },
            { answer_text: "Mount Everest", is_correct: true },
            { answer_text: "Mount Fuji", is_correct: false },
            { answer_text: "Mount Denali", is_correct: false },
        ],
    },
    {
        question_id: 66,
        answers: [
            { answer_text: "Mount McKinley", is_correct: false },
            { answer_text: "Mount Logan", is_correct: false },
            { answer_text: "Pico de Orizaba", is_correct: false },
            { answer_text: "Mount Denali", is_correct: true },
        ],
    },
    {
        question_id: 67,
        answers: [
            { answer_text: "Mont Blanc", is_correct: true },
            { answer_text: "The Matterhorn", is_correct: false },
            { answer_text: "Mount Eiger", is_correct: false },
            { answer_text: "Jungfrau", is_correct: false },
        ],
    },
    {
        question_id: 68,
        answers: [
            { answer_text: "Cotopaxi", is_correct: false },
            { answer_text: "Aconcagua", is_correct: true },
            { answer_text: "Pico de Orizaba", is_correct: false },
            { answer_text: "Huascarán", is_correct: false },
        ],
    },
    {
        question_id: 69,
        answers: [
            { answer_text: "Mount Kilimanjaro", is_correct: true },
            { answer_text: "Mount Kenya", is_correct: false },
            { answer_text: "Mount Meru", is_correct: false },
            { answer_text: "Mount Stanley", is_correct: false },
        ],
    },
    {
        question_id: 70,
        answers: [
            { answer_text: "Mount Bogong", is_correct: false },
            { answer_text: "Mount Kosciuszko", is_correct: true },
            { answer_text: "Mount Ossa", is_correct: false },
            { answer_text: "Mount Bartle Frere", is_correct: false },
        ],
    },
    {
        question_id: 71,
        answers: [
            { answer_text: "Cotopaxi", is_correct: false },
            { answer_text: "Nevado Huascarán", is_correct: false },
            { answer_text: "Aconcagua", is_correct: false },
            { answer_text: "Mount Chimborazo", is_correct: true },
        ],
    },
    {
        question_id: 72,
        answers: [
            { answer_text: "Mount Everest", is_correct: false },
            { answer_text: "K2", is_correct: true },
            { answer_text: "Kangchenjunga", is_correct: false },
            { answer_text: "Annapurna", is_correct: false },
        ],
    },
];
const geographyBasicsTriviaAnswers = [
    {
        question_id: 73,
        answers: [
            { answer_text: "Atlantic Ocean", is_correct: false },
            { answer_text: "Indian Ocean", is_correct: false },
            { answer_text: "Arctic Ocean", is_correct: false },
            { answer_text: "Pacific Ocean", is_correct: true },
        ],
    },
    {
        question_id: 74,
        answers: [
            { answer_text: "48", is_correct: false },
            { answer_text: "49", is_correct: false },
            { answer_text: "50", is_correct: true },
            { answer_text: "51", is_correct: false },
        ],
    },
    {
        question_id: 75,
        answers: [
            { answer_text: "Amazon River", is_correct: true },
            { answer_text: "Nile River", is_correct: false },
            { answer_text: "Congo River", is_correct: false },
            { answer_text: "Yangtze River", is_correct: false },
        ],
    },
    {
        question_id: 76,
        answers: [
            { answer_text: "North America", is_correct: false },
            { answer_text: "Africa", is_correct: false },
            { answer_text: "Antarctica", is_correct: true },
            { answer_text: "South America", is_correct: false },
        ],
    },
    {
        question_id: 77,
        answers: [
            { answer_text: "Atlantic Ocean", is_correct: true },
            { answer_text: "Pacific Ocean", is_correct: false },
            { answer_text: "Indian Ocean", is_correct: false },
            { answer_text: "Arctic Ocean", is_correct: false },
        ],
    },
    {
        question_id: 78,
        answers: [
            { answer_text: "Missouri River", is_correct: false },
            { answer_text: "Colorado River", is_correct: false },
            { answer_text: "Columbia River", is_correct: false },
            { answer_text: "Mississippi River", is_correct: true },
        ],
    },
    {
        question_id: 79,
        answers: [
            { answer_text: "Gobi Desert", is_correct: false },
            { answer_text: "Mojave Desert", is_correct: false },
            { answer_text: "Sahara Desert", is_correct: true },
            { answer_text: "Atacama Desert", is_correct: false },
        ],
    },
    {
        question_id: 80,
        answers: [
            { answer_text: "Mars", is_correct: false },
            { answer_text: "Venus", is_correct: true },
            { answer_text: "Mercury", is_correct: false },
            { answer_text: "Jupiter", is_correct: false },
        ],
    },
];
const worldlyWondersQuizAnswers = [
    {
        question_id: 81,
        answers: [
            { answer_text: "Monaco", is_correct: false },
            { answer_text: "Vatican City", is_correct: true },
            { answer_text: "Nauru", is_correct: false },
            { answer_text: "San Marino", is_correct: false },
        ],
    },
    {
        question_id: 82,
        answers: [
            { answer_text: "Pablo Picasso", is_correct: false },
            { answer_text: "Michelangelo", is_correct: false },
            { answer_text: "Leonardo da Vinci", is_correct: true },
            { answer_text: "Vincent van Gogh", is_correct: false },
        ],
    },
    {
        question_id: 83,
        answers: [
            { answer_text: "Gobi Desert", is_correct: false },
            { answer_text: "Sahara Desert", is_correct: true },
            { answer_text: "Arabian Desert", is_correct: false },
            { answer_text: "Antarctic Desert", is_correct: false },
        ],
    },
    {
        question_id: 84,
        answers: [
            { answer_text: "Isaac Newton", is_correct: false },
            { answer_text: "Stephen Hawking", is_correct: false },
            { answer_text: "Albert Einstein", is_correct: true },
            { answer_text: "Galileo Galilei", is_correct: false },
        ],
    },
    {
        question_id: 85,
        answers: [
            { answer_text: "Gd", is_correct: false },
            { answer_text: "Au", is_correct: true },
            { answer_text: "Ag", is_correct: false },
            { answer_text: "Fe", is_correct: false },
        ],
    },
    {
        question_id: 86,
        answers: [
            { answer_text: "Thomas Edison", is_correct: false },
            { answer_text: "Nikola Tesla", is_correct: false },
            { answer_text: "Guglielmo Marconi", is_correct: false },
            { answer_text: "Alexander Graham Bell", is_correct: true },
        ],
    },
    {
        question_id: 87,
        answers: [
            { answer_text: "Great white shark", is_correct: false },
            { answer_text: "African elephant", is_correct: false },
            { answer_text: "Blue whale", is_correct: true },
            { answer_text: "Giraffe", is_correct: false },
        ],
    },
    {
        question_id: 88,
        answers: [
            { answer_text: "1969", is_correct: true },
            { answer_text: "1972", is_correct: false },
            { answer_text: "1965", is_correct: false },
            { answer_text: "1975", is_correct: false },
        ],
    },
];
const brainBustersChallengeAnswers = [
    {
        question_id: 89,
        answers: [
            { answer_text: "One", is_correct: false },
            { answer_text: "Two", is_correct: false },
            { answer_text: "Three", is_correct: true },
            { answer_text: "Four", is_correct: false },
        ],
    },
    {
        question_id: 90,
        answers: [
            { answer_text: "Venus", is_correct: false },
            { answer_text: "Mercury", is_correct: true },
            { answer_text: "Mars", is_correct: false },
            { answer_text: "Earth", is_correct: false },
        ],
    },
    {
        question_id: 91,
        answers: [
            { answer_text: "One", is_correct: false },
            { answer_text: "Two", is_correct: true },
            { answer_text: "Three", is_correct: false },
            { answer_text: "None", is_correct: false },
        ],
    },
    {
        question_id: 92,
        answers: [
            { answer_text: "Spanish", is_correct: false },
            { answer_text: "English", is_correct: false },
            { answer_text: "Portuguese", is_correct: true },
            { answer_text: "French", is_correct: false },
        ],
    },
    {
        question_id: 93,
        answers: [
            { answer_text: "Prince William", is_correct: true },
            { answer_text: "Prince Harry", is_correct: false },
            { answer_text: "Prince Andrew", is_correct: false },
            { answer_text: "Prince Edward", is_correct: false },
        ],
    },
    {
        question_id: 94,
        answers: [
            { answer_text: "64", is_correct: false },
            { answer_text: "76", is_correct: false },
            { answer_text: "88", is_correct: true },
            { answer_text: "92", is_correct: false },
        ],
    },
    {
        question_id: 95,
        answers: [
            { answer_text: "Blue, yellow, black, green, and red", is_correct: true },
            { answer_text: "Red, white, blue, green, and yellow", is_correct: false },
            {
                answer_text: "Green, purple, orange, white, and red",
                is_correct: false,
            },
            {
                answer_text: "Black, pink, blue, green, and yellow",
                is_correct: false,
            },
        ],
    },
    {
        question_id: 96,
        answers: [
            { answer_text: "Ready Salted", is_correct: false },
            { answer_text: "Cheese and Onion", is_correct: true },
            { answer_text: "Salt and Vinegar", is_correct: false },
            { answer_text: "Prawn Cocktail", is_correct: false },
        ],
    },
];
const knowledgeWisdomQuizAnswers = [
    {
        question_id: 97,
        answers: [
            { answer_text: "Canada", is_correct: false },
            { answer_text: "China", is_correct: false },
            { answer_text: "Russia", is_correct: true },
            { answer_text: "United States", is_correct: false },
        ],
    },
    {
        question_id: 98,
        answers: [
            { answer_text: "1.6km", is_correct: true },
            { answer_text: "1.8km", is_correct: false },
            { answer_text: "2.0km", is_correct: false },
            { answer_text: "2.5km", is_correct: false },
        ],
    },
    {
        question_id: 99,
        answers: [
            { answer_text: "15", is_correct: false },
            { answer_text: "16", is_correct: false },
            { answer_text: "17", is_correct: true },
            { answer_text: "18", is_correct: false },
        ],
    },
    {
        question_id: 100,
        answers: [
            { answer_text: "None", is_correct: true },
            { answer_text: "50", is_correct: false },
            { answer_text: "206", is_correct: false },
            { answer_text: "500", is_correct: false },
        ],
    },
    {
        question_id: 101,
        answers: [
            { answer_text: "Scooby Doo", is_correct: false },
            { answer_text: "Scooby Doo Rogers", is_correct: false },
            { answer_text: "Scoobert Doo", is_correct: true },
            { answer_text: "Scooby Doo Johnson", is_correct: false },
        ],
    },
    {
        question_id: 102,
        answers: [
            { answer_text: "8", is_correct: true },
            { answer_text: "12", is_correct: false },
            { answer_text: "16", is_correct: false },
            { answer_text: "20", is_correct: false },
        ],
    },
    {
        question_id: 103,
        answers: [
            { answer_text: "A murder", is_correct: true },
            { answer_text: "A flock", is_correct: false },
            { answer_text: "A herd", is_correct: false },
            { answer_text: "A pack", is_correct: false },
        ],
    },
    {
        question_id: 104,
        answers: [
            { answer_text: "Toy Story", is_correct: false },
            { answer_text: "Shrek", is_correct: false },
            { answer_text: "Finding Nemo", is_correct: false },
            { answer_text: "Shrek 2", is_correct: true },
        ],
    },
];
const timeWarpTriviaAnswers = [
    {
        question_id: 105,
        answers: [
            { answer_text: "Shanghai Tower", is_correct: false },
            { answer_text: "Abraj Al Bait Clock Tower", is_correct: false },
            { answer_text: "One World Trade Center", is_correct: false },
            { answer_text: "Burj Khalifa", is_correct: true },
        ],
    },
    {
        question_id: 106,
        answers: [
            { answer_text: "5", is_correct: true },
            { answer_text: "6", is_correct: false },
            { answer_text: "7", is_correct: false },
            { answer_text: "8", is_correct: false },
        ],
    },
    {
        question_id: 107,
        answers: [
            { answer_text: "2004 - Die Another Day", is_correct: false },
            { answer_text: "2006 - Casino Royale", is_correct: true },
            { answer_text: "2008 - Quantum of Solace", is_correct: false },
            { answer_text: "2012 - Skyfall", is_correct: false },
        ],
    },
    {
        question_id: 108,
        answers: [
            { answer_text: "3", is_correct: false },
            { answer_text: "4", is_correct: false },
            { answer_text: "5", is_correct: true },
            { answer_text: "6", is_correct: false },
        ],
    },
    {
        question_id: 109,
        answers: [
            { answer_text: "1995", is_correct: false },
            { answer_text: "1999", is_correct: true },
            { answer_text: "2001", is_correct: false },
            { answer_text: "2005", is_correct: false },
        ],
    },
    {
        question_id: 110,
        answers: [
            { answer_text: "Hawaii and Alaska", is_correct: true },
            { answer_text: "Alaska and California", is_correct: false },
            { answer_text: "Hawaii and Washington", is_correct: false },
            { answer_text: "Florida and Hawaii", is_correct: false },
        ],
    },
    {
        question_id: 111,
        answers: [
            { answer_text: "Liver", is_correct: false },
            { answer_text: "Lungs", is_correct: false },
            { answer_text: "Skin", is_correct: true },
            { answer_text: "Heart", is_correct: false },
        ],
    },
    {
        question_id: 112,
        answers: [
            { answer_text: "2005", is_correct: false },
            { answer_text: "2006", is_correct: false },
            { answer_text: "2007", is_correct: true },
            { answer_text: "2008", is_correct: false },
        ],
    },
];
const gameOnSportsQuizAnswers = [
    {
        question_id: 113,
        answers: [
            { answer_text: "Sadio Mane", is_correct: true },
            { answer_text: "Alan Shearer", is_correct: false },
            { answer_text: "Robbie Fowler", is_correct: false },
            { answer_text: "Ian Wright", is_correct: false },
        ],
    },
    {
        question_id: 114,
        answers: [
            { answer_text: "Paris, France", is_correct: false },
            { answer_text: "Athens, Greece", is_correct: true },
            { answer_text: "London, UK", is_correct: false },
            { answer_text: "Sydney, Australia", is_correct: false },
        ],
    },
    {
        question_id: 115,
        answers: [
            { answer_text: "George Foreman", is_correct: true },
            { answer_text: "Joe Frazier", is_correct: false },
            { answer_text: "Mike Tyson", is_correct: false },
            { answer_text: "Lennox Lewis", is_correct: false },
        ],
    },
    {
        question_id: 116,
        answers: [
            { answer_text: "16", is_correct: false },
            { answer_text: "18", is_correct: false },
            { answer_text: "20", is_correct: false },
            { answer_text: "23", is_correct: true },
        ],
    },
    {
        question_id: 117,
        answers: [
            { answer_text: "Baseball", is_correct: false },
            { answer_text: "Basketball", is_correct: false },
            { answer_text: "Football", is_correct: true },
            { answer_text: "Hockey", is_correct: false },
        ],
    },
    {
        question_id: 118,
        answers: [
            { answer_text: "Yellow", is_correct: false },
            { answer_text: "Green", is_correct: false },
            { answer_text: "Brown", is_correct: false },
            { answer_text: "Red", is_correct: true },
        ],
    },
    {
        question_id: 119,
        answers: [
            { answer_text: "12", is_correct: false },
            { answer_text: "14", is_correct: true },
            { answer_text: "16", is_correct: false },
            { answer_text: "18", is_correct: false },
        ],
    },
    {
        question_id: 120,
        answers: [
            { answer_text: "Lightweight and Welterweight", is_correct: false },
            { answer_text: "Lightweight and Featherweight", is_correct: true },
            { answer_text: "Welterweight and Middleweight", is_correct: false },
            { answer_text: "Featherweight and Bantamweight", is_correct: false },
        ],
    },
];
const readySteadyGoAnswers = [
    {
        question_id: 121,
        answers: [
            { answer_text: "McLaren", is_correct: true },
            { answer_text: "Ferrari", is_correct: false },
            { answer_text: "Mercedes", is_correct: false },
            { answer_text: "Red Bull Racing", is_correct: false },
        ],
    },
    {
        question_id: 122,
        answers: [
            { answer_text: "60", is_correct: false },
            { answer_text: "100", is_correct: false },
            { answer_text: "180", is_correct: true },
            { answer_text: "200", is_correct: false },
        ],
    },
    {
        question_id: 123,
        answers: [
            { answer_text: "Lionel Messi", is_correct: false },
            { answer_text: "Cristiano Ronaldo", is_correct: false },
            { answer_text: "Pele", is_correct: false },
            { answer_text: "Miroslav Klose", is_correct: true },
        ],
    },
    {
        question_id: 124,
        answers: [
            { answer_text: "9.57 seconds", is_correct: false },
            { answer_text: "9.63 seconds", is_correct: true },
            { answer_text: "9.69 seconds", is_correct: false },
            { answer_text: "9.71 seconds", is_correct: false },
        ],
    },
    {
        question_id: 125,
        answers: [
            { answer_text: "3", is_correct: false },
            { answer_text: "4", is_correct: false },
            { answer_text: "5", is_correct: false },
            { answer_text: "6", is_correct: true },
        ],
    },
    {
        question_id: 126,
        answers: [
            { answer_text: "Darts", is_correct: true },
            { answer_text: "Snooker", is_correct: false },
            { answer_text: "Bowling", is_correct: false },
            { answer_text: "Archery", is_correct: false },
        ],
    },
    {
        question_id: 127,
        answers: [
            { answer_text: "2", is_correct: false },
            { answer_text: "4", is_correct: false },
            { answer_text: "5", is_correct: true },
            { answer_text: "7", is_correct: false },
        ],
    },
    {
        question_id: 128,
        answers: [
            { answer_text: "Ice hockey and lacrosse", is_correct: true },
            { answer_text: "Soccer and basketball", is_correct: false },
            { answer_text: "Rugby and cricket", is_correct: false },
            { answer_text: "Baseball and football", is_correct: false },
        ],
    },
];
const worldCupWonderQuizAnswers = [
    {
        question_id: 129,
        answers: [
            { answer_text: "Brazil", is_correct: false },
            { answer_text: "France", is_correct: true },
            { answer_text: "Argentina", is_correct: false },
            { answer_text: "Germany", is_correct: false },
        ],
    },
    {
        question_id: 130,
        answers: [
            { answer_text: "26.2 miles", is_correct: true },
            { answer_text: "13.1 miles", is_correct: false },
            { answer_text: "20 miles", is_correct: false },
            { answer_text: "30 miles", is_correct: false },
        ],
    },
    {
        question_id: 131,
        answers: [
            { answer_text: "8", is_correct: false },
            { answer_text: "10", is_correct: false },
            { answer_text: "11", is_correct: false },
            { answer_text: "9", is_correct: true },
        ],
    },
    {
        question_id: 132,
        answers: [
            { answer_text: "Brazil", is_correct: true },
            { answer_text: "Germany", is_correct: false },
            { answer_text: "Italy", is_correct: false },
            { answer_text: "Argentina", is_correct: false },
        ],
    },
    {
        question_id: 133,
        answers: [
            { answer_text: "Kobe Bryant", is_correct: false },
            { answer_text: "Kareem Abdul-Jabbar", is_correct: false },
            { answer_text: "LeBron James", is_correct: true },
            { answer_text: "Michael Jordan", is_correct: false },
        ],
    },
    {
        question_id: 134,
        answers: [
            { answer_text: "Wimbledon", is_correct: true },
            { answer_text: "US Open", is_correct: false },
            { answer_text: "French Open", is_correct: false },
            { answer_text: "Australian Open", is_correct: false },
        ],
    },
    {
        question_id: 135,
        answers: [
            { answer_text: "Usain Bolt", is_correct: false },
            { answer_text: "Jesse Owens", is_correct: false },
            { answer_text: "Carl Lewis", is_correct: false },
            { answer_text: "Michael Phelps", is_correct: true },
        ],
    },
    {
        question_id: 136,
        answers: [
            { answer_text: "Pittsburgh Steelers", is_correct: true },
            { answer_text: "New England Patriots", is_correct: false },
            { answer_text: "Dallas Cowboys", is_correct: false },
            { answer_text: "San Francisco 49ers", is_correct: false },
        ],
    },
];
const sportingGloryChallengeAnswers = [
    {
        question_id: 137,
        answers: [
            { answer_text: "Golf", is_correct: true },
            { answer_text: "Tennis", is_correct: false },
            { answer_text: "Cricket", is_correct: false },
            { answer_text: "Football", is_correct: false },
        ],
    },
    {
        question_id: 138,
        answers: [
            { answer_text: "Brazil", is_correct: false },
            { answer_text: "Uruguay", is_correct: true },
            { answer_text: "Argentina", is_correct: false },
            { answer_text: "Germany", is_correct: false },
        ],
    },
    {
        question_id: 139,
        answers: [
            { answer_text: "Michael Jordan", is_correct: false },
            { answer_text: "Bill Russell", is_correct: true },
            { answer_text: "Magic Johnson", is_correct: false },
            { answer_text: "LeBron James", is_correct: false },
        ],
    },
    {
        question_id: 140,
        answers: [
            { answer_text: "Australia", is_correct: false },
            { answer_text: "New Zealand", is_correct: true },
            { answer_text: "South Africa", is_correct: false },
            { answer_text: "England", is_correct: false },
        ],
    },
    {
        question_id: 141,
        answers: [
            { answer_text: "United States", is_correct: true },
            { answer_text: "China", is_correct: false },
            { answer_text: "Russia", is_correct: false },
            { answer_text: "Italy", is_correct: false },
        ],
    },
    {
        question_id: 142,
        answers: [
            { answer_text: "Barcelona", is_correct: false },
            { answer_text: "Real Madrid", is_correct: true },
            { answer_text: "Manchester United", is_correct: false },
            { answer_text: "Liverpool", is_correct: false },
        ],
    },
    {
        question_id: 143,
        answers: [
            { answer_text: "Butterfly", is_correct: false },
            { answer_text: "Breaststroke", is_correct: false },
            { answer_text: "Backstroke", is_correct: false },
            { answer_text: "Sidestroke", is_correct: true },
        ],
    },
    {
        question_id: 144,
        answers: [
            { answer_text: "Brazil", is_correct: true },
            { answer_text: "Germany", is_correct: false },
            { answer_text: "Italy", is_correct: false },
            { answer_text: "Argentina", is_correct: false },
        ],
    },
];
const famousCharactersAndMoviesTriviaAnswers = [
    {
        question_id: 145,
        answers: [
            { answer_text: "Christopher Lee", is_correct: false },
            { answer_text: "Ian McKellen", is_correct: true },
            { answer_text: "Sean Connery", is_correct: false },
            { answer_text: "Michael Gambon", is_correct: false },
        ],
    },
    {
        question_id: 146,
        answers: [
            { answer_text: "Bryan Cranston", is_correct: true },
            { answer_text: "Aaron Paul", is_correct: false },
            { answer_text: "Bob Odenkirk", is_correct: false },
            { answer_text: "Jonathan Banks", is_correct: false },
        ],
    },
    {
        question_id: 147,
        answers: [
            { answer_text: "In a car crash", is_correct: false },
            { answer_text: "From a spell", is_correct: true },
            { answer_text: "Falling off his broomstick", is_correct: false },
            { answer_text: "He was born with it", is_correct: false },
        ],
    },
    {
        question_id: 148,
        answers: [
            { answer_text: "1977", is_correct: true },
            { answer_text: "1980", is_correct: false },
            { answer_text: "1983", is_correct: false },
            { answer_text: "1999", is_correct: false },
        ],
    },
    {
        question_id: 149,
        answers: [
            { answer_text: "Tom Cruise", is_correct: false },
            { answer_text: "Tom Hanks", is_correct: true },
            { answer_text: "Brad Pitt", is_correct: false },
            { answer_text: "Leonardo DiCaprio", is_correct: false },
        ],
    },
    {
        question_id: 150,
        answers: [
            { answer_text: "Azkaban", is_correct: true },
            { answer_text: "Hogwarts", is_correct: false },
            { answer_text: "Gringotts", is_correct: false },
            { answer_text: "Diagon Alley", is_correct: false },
        ],
    },
    {
        question_id: 151,
        answers: [
            { answer_text: "Samwise Gamgee", is_correct: false },
            { answer_text: "Peregrin Took", is_correct: false },
            { answer_text: "Frodo Baggins", is_correct: true },
            { answer_text: "Meriadoc Brandybuck", is_correct: false },
        ],
    },
    {
        question_id: 152,
        answers: [
            { answer_text: "Fang", is_correct: false },
            { answer_text: "Norbert", is_correct: false },
            { answer_text: "Aragog", is_correct: false },
            { answer_text: "Fluffy", is_correct: true },
        ],
    },
];
const lightsCameraActionAnswers = [
    {
        question_id: 153,
        answers: [
            { answer_text: "The One Ring", is_correct: true },
            { answer_text: "The Precious Ring", is_correct: false },
            { answer_text: "The Elven Ring", is_correct: false },
            { answer_text: "The Dark Ring", is_correct: false },
        ],
    },
    {
        question_id: 154,
        answers: [
            { answer_text: "Dumbledore", is_correct: false },
            { answer_text: "Snape", is_correct: false },
            { answer_text: "Lord Voldemort", is_correct: true },
            { answer_text: "Bellatrix Lestrange", is_correct: false },
        ],
    },
    {
        question_id: 155,
        answers: [
            { answer_text: "Brian O'Conner", is_correct: false },
            { answer_text: "Hobbs", is_correct: false },
            { answer_text: "Dominic Toretto", is_correct: true },
            { answer_text: "Deckard Shaw", is_correct: false },
        ],
    },
    {
        question_id: 156,
        answers: [
            { answer_text: "Saruman", is_correct: false },
            { answer_text: "Radagast", is_correct: false },
            { answer_text: "Gandalf", is_correct: true },
            { answer_text: "Elrond", is_correct: false },
        ],
    },
    {
        question_id: 157,
        answers: [
            { answer_text: "The Black Pearl", is_correct: true },
            { answer_text: "The Flying Dutchman", is_correct: false },
            { answer_text: "The Jolly Roger", is_correct: false },
            { answer_text: "The Queen Anne's Revenge", is_correct: false },
        ],
    },
    {
        question_id: 158,
        answers: [
            { answer_text: "Hoth", is_correct: false },
            { answer_text: "Dagobah", is_correct: false },
            { answer_text: "Alderaan", is_correct: true },
            { answer_text: "Tatooine", is_correct: false },
        ],
    },
    {
        question_id: 159,
        answers: [
            { answer_text: "Broomstick Ball", is_correct: false },
            { answer_text: "Quidditch", is_correct: true },
            { answer_text: "Wizard Ball", is_correct: false },
            { answer_text: "Magical Soccer", is_correct: false },
        ],
    },
    {
        question_id: 160,
        answers: [
            { answer_text: "Bilbo Baggins", is_correct: false },
            { answer_text: "Samwise Gamgee", is_correct: false },
            { answer_text: "Merry Brandybuck", is_correct: false },
            { answer_text: "Frodo Baggins", is_correct: true },
        ],
    },
];
const answersData = [
    ancientEgyptTriviaAnswers,
    ancientCivilizationsTriviaAnswers,
    vikingsTriviaChallengeAnswers,
    worldWarHistoryTriviaAnswers,
    worldGeographyTriviaAnswers,
    bordersandPeaksGeographyChallengeAnswers,
    geographyGeniusQuizAnswers,
    capitalConundrumQuizAnswers,
    mountainsOfTheWorldQuizAnswers,
    geographyBasicsTriviaAnswers,
    worldlyWondersQuizAnswers,
    brainBustersChallengeAnswers,
    knowledgeWisdomQuizAnswers,
    timeWarpTriviaAnswers,
    gameOnSportsQuizAnswers,
    readySteadyGoAnswers,
    worldCupWonderQuizAnswers,
    sportingGloryChallengeAnswers,
    famousCharactersAndMoviesTriviaAnswers,
    lightsCameraActionAnswers,
];
exports.default = answersData;
