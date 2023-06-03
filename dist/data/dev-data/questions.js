"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ancientEgyptTriviaQuestions = [
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What is the name of the ancient Egyptian writing system?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "Who was the first pharaoh to unite Upper and Lower Egypt?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What is the name of the famous female pharaoh who ruled Egypt for over two decades?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the main river that flowed through ancient Egypt?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the purpose of the pyramids of Giza?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the main crop grown by ancient Egyptians?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the purpose of the mummification process in ancient Egypt?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What is the name of the famous Egyptian queen who married Julius Caesar?",
    },
];
const ancientCivilizationsTriviaQuestions = [
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the name of the famous Roman building that was used for gladiatorial games and other public spectacles?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "Who was the famous Greek philosopher who taught Alexander the Great?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the famous Spartan military formation called?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the capital of the Roman Empire?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the primary language spoken in ancient Rome?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the name of the system of government used in ancient Athens?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "In ancient Rome, what was the name of the public square where citizens would gather for meetings and speeches?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the primary source of food for ancient Greeks?",
    },
];
const vikingsTriviaChallengeQuestions = [
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "Where did the Vikings come from?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What is the name of the Viking ship?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the name of the Viking warrior who discovered Greenland?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the name of the Viking who invaded and ruled England in the 11th century?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the typical Viking diet?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What type of houses did Vikings live in?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the primary source of livelihood for Vikings?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "How did Vikings navigate the sea?",
    },
];
const worldWarHistoryTriviaQuestions = [
    {
        quiz_name: "World War History Trivia",
        question_text: "In which year did World War I begin?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What was the name of the treaty that ended World War I?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "Where did Prime minister Winston Churchill suggest that the royal family should move to during the war?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What event led to the start of World War II?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "In which year did World War I end?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What was the nickname given to the German airship, the LZ 129 Hindenburg?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What was the code name for the atomic bomb program during World War II?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "Which country was not a member of the League of Nations during the interwar period?",
    },
];
const worldGeographyTriviaQuestions = [
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the capital of Canada?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the highest mountain peak in the world?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the smallest continent by land area?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the longest river in the world?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the largest desert in the world?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the capital of Japan?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the largest country by land area?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the highest waterfall in the world?",
    },
];
const bordersandPeaksGeographyChallengeQuestions = [
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the largest lake in Africa?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the highest mountain peak in North America?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the longest border in the world?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the smallest country in the world?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the largest river in Australia?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the capital of South Korea?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the deepest ocean in the world?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the capital of Spain?",
    },
];
const geographyGeniusQuizQuestions = [
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the largest country in South America?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "Which European country is divided into 17 autonomous regions, including Catalonia and Basque?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "Which country is both the smallest and the most densely populated country in Central America?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the capital of Peru?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the second longest river in Africa after the Nile?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "Which country is located at the southernmost point of the African continent?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the highest mountain in Africa?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the capital of Mexico?",
    },
];
const capitalConundrumQuizQuestions = [
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of France?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Australia?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Egypt?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Canada?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of China?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Germany?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of India?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Italy?",
    },
];
const mountainsOfTheWorldQuizQuestions = [
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest mountain in the world?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the tallest mountain in North America?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in the European Alps?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in South America?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in Africa?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in Australia?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in the Andes?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the most dangerous mountain to climb?",
    },
];
const geographyBasicsTriviaQuestions = [
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the largest ocean?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "How many States does the United States consist of?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the river that flows through the Brazil rainforest?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the driest continent on Earth?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "In what ocean is the Bermuda Triangle located?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the longest river in the US?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "Which desert is the largest in the world?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What planet is closest to Earth?",
    },
];
const worldlyWondersQuizQuestions = [
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the smallest country in the world by land area?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "Which famous artist painted the 'Mona Lisa'?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the world's largest desert?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "Which famous physicist developed the theory of relativity?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the chemical symbol for gold?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "Who invented the telephone?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the largest animal on Earth?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "In which year did the first human step on the Moon?",
    },
];
const brainBustersChallengeQuestions = [
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "How many hearts does an octopus have?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "What planet is closest to the sun?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "How many of Henry VIII's wives were called Catherine?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "What language is spoken in Brazil?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "Who is next in line to the British throne after King Charles III?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "How many keys are there on a piano?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "Which five colours make up the Olympic rings?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "What is the most sold flavor of Walker's crisps?",
    },
];
const knowledgeWisdomQuizQuestions = [
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "What is the largest country in the world?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "To a single decimal point, how many kilometers in a mile?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "How many sides does a heptadecagon have?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "How many bones does a shark have?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "What is Scooby Doo's full name?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "How many people have walked on the moon?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "What are a group of ravens called?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "Which movie won the first ever Oscar for Best Animated Film?",
    },
];
const timeWarpTriviaQuestions = [
    {
        quiz_name: "Time Warp Trivia",
        question_text: "What is the tallest building in the world?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "How many boroughs are there in New York City?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "Which year was Daniel Craig's first Bond film released?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "How many Pirates of the Caribbean films have been released?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "Which year did the European Union first introduce the Euro as currency?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "What two states do not share a border with any other US state?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "What is the largest organ in the human body?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "When was the first iPhone released?",
    },
];
const gameOnSportsQuizQuestions = [
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Which player scored the fastest hat-trick in the Premier League?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Where did the first modern Summer Olympic games take place in 1896?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Which boxer did Muhammad Ali fight in `The Rumble in the Jungle`?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "How many Olympic gold medals did Michael Phelps win?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Which sport do the New York Giants play?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "In karate, what colour belt comes right before black?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "How many days does Wimbledon traditionally last?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Conor McGregor held UFC titles in which 2 weight classes simultaneously?",
    },
];
const readySteadyGoQuestions = [
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "Which Formula One team did Lewis Hamilton compete for from 2007 to 2012?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "In darts, what is the highest score from a single dart?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "Which footballer has scored the most goals in World Cup history?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "What is Usain Bolt's 100m world record time?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "In American Football, how many points do you score for a touchdown?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "In which sport is 180 deemed a perfect score?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "How many Olympic gold medals did rower Steve Redgrave win?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "What are the two national sports of Canada?",
    },
];
const worldCupWonderQuizQuestions = [
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Which country won the World Cup 1998?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "How long is a marathon?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "How many players are there on a baseball team?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Which country has won the most FIFA World Cup championships?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Who is the all-time leading scorer in NBA history?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "In tennis, which tournament is considered the most prestigious of all?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Who has won the most Olympic gold medals of all time?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Which team has won the most Super Bowls in NFL history?",
    },
];
const sportingGloryChallengeQuestions = [
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "In which sport is the Ryder Cup contested?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country hosted the first ever FIFA World Cup in 1930?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Who holds the record for the most NBA championships won as a player?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country has won the most Rugby World Cups?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country has won the most Olympic gold medals in athletics?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which club has won the most Champions League titles?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which swimming style is not allowed in the Olympics?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country has won the most World Cups?",
    },
];
const famousCharactersAndMoviesTriviaQuestions = [
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "Who played the character of Gandalf in the Lord of the Rings trilogy?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "Which famous actor played the role of Walter White in the TV series Breaking Bad?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "How did Harry Potter get his scar?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "In which year was the first Star Wars movie released?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "Who played the lead role in the movie Forrest Gump?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "What is the name of the prison guarded by the Dementors in the Harry Potter series?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "What is the name of the hobbit who is entrusted with carrying the One Ring to Mordor?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "What is the name of the three-headed dog who guards the Philosopher's Stone in the first Harry Potter book?",
    },
];
const lightsCameraActionQuestions = [
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the ring that Frodo must destroy in The Lord of the Rings?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "Who is the main villain in the Harry Potter series?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the character played by Vin Diesel in the Fast and Furious franchise?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the wizard who mentors Frodo in The Lord of the Rings?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "In the Pirates of the Caribbean movies, what is the name of Captain Jack Sparrow's ship?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "In Star Wars: A New Hope, what is the name of the planet that the Death Star destroys?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the magical sport played in the Harry Potter series?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the hobbit who carries the One Ring in the Lord of the Rings trilogy?",
    },
];
const questionsData = [
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What is the name of the ancient Egyptian writing system?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "Who was the first pharaoh to unite Upper and Lower Egypt?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What is the name of the famous female pharaoh who ruled Egypt for over two decades?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the main river that flowed through ancient Egypt?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the purpose of the pyramids of Giza?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the main crop grown by ancient Egyptians?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What was the purpose of the mummification process in ancient Egypt?",
    },
    {
        quiz_name: "Ancient Egypt Trivia",
        question_text: "What is the name of the famous Egyptian queen who married Julius Caesar?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the name of the famous Roman building that was used for gladiatorial games and other public spectacles?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "Who was the famous Greek philosopher who taught Alexander the Great?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the famous Spartan military formation called?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the capital of the Roman Empire?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the primary language spoken in ancient Rome?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the name of the system of government used in ancient Athens?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "In ancient Rome, what was the name of the public square where citizens would gather for meetings and speeches?",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        question_text: "What was the primary source of food for ancient Greeks?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "Where did the Vikings come from?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What is the name of the Viking ship?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the name of the Viking warrior who discovered Greenland?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the name of the Viking who invaded and ruled England in the 11th century?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the typical Viking diet?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What type of houses did Vikings live in?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "What was the primary source of livelihood for Vikings?",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        question_text: "How did Vikings navigate the sea?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "In which year did World War I begin?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What was the name of the treaty that ended World War I?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "Where did Prime minister Winston Churchill suggest that the royal family should move to during the war?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What event led to the start of World War II?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "In which year did World War I end?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What was the nickname given to the German airship, the LZ 129 Hindenburg?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "What was the code name for the atomic bomb program during World War II?",
    },
    {
        quiz_name: "World War History Trivia",
        question_text: "Which country was not a member of the League of Nations during the interwar period?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the capital of Canada?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the highest mountain peak in the world?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the smallest continent by land area?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the longest river in the world?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the largest desert in the world?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the capital of Japan?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the largest country by land area?",
    },
    {
        quiz_name: "World Geography Trivia",
        question_text: "What is the highest waterfall in the world?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the largest lake in Africa?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the highest mountain peak in North America?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the longest border in the world?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the smallest country in the world?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the largest river in Australia?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the capital of South Korea?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the deepest ocean in the world?",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        question_text: "What is the capital of Spain?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the largest country in South America?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "Which European country is divided into 17 autonomous regions, including Catalonia and Basque?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "Which country is both the smallest and the most densely populated country in Central America?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the capital of Peru?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the second longest river in Africa after the Nile?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "Which country is located at the southernmost point of the African continent?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the highest mountain in Africa?",
    },
    {
        quiz_name: "Geography Genius Quiz",
        question_text: "What is the capital of Mexico?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of France?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Australia?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Egypt?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Canada?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of China?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Germany?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of India?",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        question_text: "What is the capital of Italy?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest mountain in the world?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the tallest mountain in North America?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in the European Alps?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in South America?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in Africa?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in Australia?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the highest peak in the Andes?",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        question_text: "What is the most dangerous mountain to climb?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the largest ocean?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "How many States does the United States consist of?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the river that flows through the Brazil rainforest?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the driest continent on Earth?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "In what ocean is the Bermuda Triangle located?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What is the name of the longest river in the US?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "Which desert is the largest in the world?",
    },
    {
        quiz_name: "Geography Basics Trivia",
        question_text: "What planet is closest to Earth?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the smallest country in the world by land area?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "Which famous artist painted the 'Mona Lisa'?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the world's largest desert?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "Which famous physicist developed the theory of relativity?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the chemical symbol for gold?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "Who invented the telephone?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "What is the largest animal on Earth?",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        question_text: "In which year did the first human step on the Moon?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "How many hearts does an octopus have?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "What planet is closest to the sun?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "How many of Henry VIII's wives were called Catherine?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "What language is spoken in Brazil?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "Who is next in line to the British throne after King Charles III?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "How many keys are there on a piano?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "Which five colours make up the Olympic rings?",
    },
    {
        quiz_name: "Brain Busters Challenge",
        question_text: "What is the most sold flavor of Walker's crisps?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "What is the largest country in the world?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "To a single decimal point, how many kilometers in a mile?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "How many sides does a heptadecagon have?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "How many bones does a shark have?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "What is Scooby Doo's full name?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "How many people have walked on the moon?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "What are a group of ravens called?",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        question_text: "Which movie won the first ever Oscar for Best Animated Film?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "What is the tallest building in the world?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "How many boroughs are there in New York City?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "Which year was Daniel Craig's first Bond film released?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "How many Pirates of the Caribbean films have been released?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "Which year did the European Union first introduce the Euro as currency?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "What two states do not share a border with any other US state?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "What is the largest organ in the human body?",
    },
    {
        quiz_name: "Time Warp Trivia",
        question_text: "When was the first iPhone released?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Which player scored the fastest hat-trick in the Premier League?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Where did the first modern Summer Olympic games take place in 1896?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Which boxer did Muhammad Ali fight in `The Rumble in the Jungle`?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "How many Olympic gold medals did Michael Phelps win?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Which sport do the New York Giants play?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "In karate, what colour belt comes right before black?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "How many days does Wimbledon traditionally last?",
    },
    {
        quiz_name: "Game On Sports Quiz",
        question_text: "Conor McGregor held UFC titles in which 2 weight classes simultaneously?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "Which Formula One team did Lewis Hamilton compete for from 2007 to 2012?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "In darts, what is the highest score from a single dart?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "Which footballer has scored the most goals in World Cup history?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "What is Usain Bolt's 100m world record time?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "In American Football, how many points do you score for a touchdown?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "In which sport is 180 deemed a perfect score?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "How many Olympic gold medals did rower Steve Redgrave win?",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        question_text: "What are the two national sports of Canada?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Which country won the World Cup 1998?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "How long is a marathon?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "How many players are there on a baseball team?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Which country has won the most FIFA World Cup championships?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Who is the all-time leading scorer in NBA history?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "In tennis, which tournament is considered the most prestigious of all?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Who has won the most Olympic gold medals of all time?",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        question_text: "Which team has won the most Super Bowls in NFL history?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "In which sport is the Ryder Cup contested?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country hosted the first ever FIFA World Cup in 1930?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Who holds the record for the most NBA championships won as a player?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country has won the most Rugby World Cups?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country has won the most Olympic gold medals in athletics?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which club has won the most Champions League titles?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which swimming style is not allowed in the Olympics?",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        question_text: "Which country has won the most World Cups?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "Who played the character of Gandalf in the Lord of the Rings trilogy?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "Which famous actor played the role of Walter White in the TV series Breaking Bad?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "How did Harry Potter get his scar?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "In which year was the first Star Wars movie released?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "Who played the lead role in the movie Forrest Gump?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "What is the name of the prison guarded by the Dementors in the Harry Potter series?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "What is the name of the hobbit who is entrusted with carrying the One Ring to Mordor?",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        question_text: "What is the name of the three-headed dog who guards the Philosopher's Stone in the first Harry Potter book?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the ring that Frodo must destroy in The Lord of the Rings?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "Who is the main villain in the Harry Potter series?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the character played by Vin Diesel in the Fast and Furious franchise?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the wizard who mentors Frodo in The Lord of the Rings?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "In the Pirates of the Caribbean movies, what is the name of Captain Jack Sparrow's ship?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "In Star Wars: A New Hope, what is the name of the planet that the Death Star destroys?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the magical sport played in the Harry Potter series?",
    },
    {
        quiz_name: "Lights, Camera, Action",
        question_text: "What is the name of the hobbit who carries the One Ring in the Lord of the Rings trilogy?",
    },
];
exports.default = questionsData;
