"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstMovieTriviaQuestions = [
    {
        quiz_name: "First Movie Trivia",
        question_text: "Who played the character Harry Potter in the film series?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "Which movie features the line, I live my life a quarter mile at a time?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "In the Star Wars series, what is the name of the smuggler who pilots the Millennium Falcon?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "Who is the most well-known actor to portray James Bond?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "What is the name of the mystical ring in The Lord of the Rings series?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "Which character is known for saying, Why is the rum always gone?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "In the Fast and Furious series, what is the name of Dominic Toretto's sister?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "What is the name of the secret agent in the James Bond series?",
    },
];
const blockbusterMovieChallengeQuestions = [
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Which actor played Ron Weasley in the Harry Potter film series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "In which movie of the Fast and Furious franchise did Dwayne Johnson first appear?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "What is the name of the iconic spaceship in the Star Wars series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Who was the first actor to portray James Bond on the big screen?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "What is the name of the wizard who possesses the One Ring in The Lord of the Rings series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Who is the captain of the Black Pearl in the Pirates of the Caribbean series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "What is the title of the first Harry Potter movie?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Which actor played Dominic Toretto in the Fast and Furious series?",
    },
];
const adventureTravelTriviaQuestions = [
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which country is known for its famous trekking route, the Inca Trail?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "What is the highest active volcano in Europe?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which African country is home to the world's largest desert?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which city is renowned for its world-class surfing beaches?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "What is the name of the famous hiking trail in the United States that spans over 2,000 miles?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which country is famous for its thrilling bungee jumping experiences?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which city is known as the 'Gateway to the Amazon Rainforest'?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "What is the name of the iconic rock formation in Australia's Northern Territory?",
    },
];
const travelDestinationsTriviaQuestions = [
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the tallest waterfall in the world?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which country is home to the famous ancient city of Petra?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the official language of Brazil?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which country is famous for its beautiful tulip fields?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the name of the iconic statue in Rio de Janeiro, Brazil?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which city is renowned for its historical ruins of Machu Picchu?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the currency used in Japan?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which African country is known for its wildlife safaris?",
    },
];
const scientificWondersTriviaQuestions = [
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the chemical symbol for the element oxygen?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "Which scientist is known for the theory of general relativity?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the largest planet in our solar system?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the smallest unit of matter?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the process by which plants convert sunlight into energy?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the study of heredity and variation in living organisms called?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the unit of measurement for electric current?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the boiling point of water in degrees Celsius?",
    },
];
const amazingScienceFactsTriviaQuestions = [
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the study of fossils called?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "Who developed the theory of evolution by natural selection?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the largest organ in the human body?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the unit of measurement for force?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the process of converting solid directly into vapor called?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the study of the Earth's atmosphere called?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "Which planet is known as the Red Planet?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the basic unit of life?",
    },
];
const literaryMasterpiecesTriviaQuestions = [
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who is the author of the novel Pride and Prejudice?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which play by William Shakespeare features the character Hamlet?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who wrote the poem The Raven?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which novel tells the story of the young wizard Harry Potter?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who is the author of the novel To Kill a Mockingbird?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which Greek epic poem is attributed to the poet Homer?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who wrote the famous play Romeo and Juliet?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which novel is set in the dystopian society of Panem?",
    },
];
const classicLiteratureTriviaQuestions = [
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who is the author of the novel Moby-Dick?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which novel by F. Scott Fitzgerald features the character Jay Gatsby?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who wrote the play Macbeth?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which novel by George Orwell depicts a dystopian society ruled by Big Brother?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who is the author of the novel The Catcher in the Rye?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which American poet wrote the collection Leaves of Grass?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who wrote the play A Streetcar Named Desire?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which novel by J.R.R. Tolkien is set in the fictional world of Middle-earth?",
    },
];
const famousAuthorsTriviaQuestions = [
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the novel 'Pride and Prejudice'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which American author wrote the novel 'To Kill a Mockingbird'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the fantasy series 'Harry Potter'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which Russian author wrote the novel 'War and Peace'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the Gothic novel 'Frankenstein'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which British author wrote the 'Sherlock Holmes' detective stories?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the novel 'The Great Gatsby'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which American author wrote the novel 'The Catcher in the Rye'?",
    },
];
const shakespeareanTriviaQuestions = [
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Which play by William Shakespeare features the characters Romeo and Juliet?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Who is the author of the famous tragedy 'Macbeth'?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "In which play does the character Hamlet famously deliver the soliloquy that begins with 'To be, or not to be'?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Which comedy by Shakespeare involves mistaken identities and a pair of twins named Antipholus?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Who is the author of the romantic comedy 'A Midsummer Night's Dream'?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Which play features the character of Lady Macbeth, known for her famous 'Out, damned spot!' monologue?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "In which play does the character Iago scheme against the title character, Othello?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Who is the author of the historical play 'Henry V'?",
    },
];
const questionsData = [
    {
        quiz_name: "First Movie Trivia",
        question_text: "Who played the character Harry Potter in the film series?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "Which movie features the line, I live my life a quarter mile at a time?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "In the Star Wars series, what is the name of the smuggler who pilots the Millennium Falcon?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "Who is the most well-known actor to portray James Bond?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "What is the name of the mystical ring in The Lord of the Rings series?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "Which character is known for saying, Why is the rum always gone?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "In the Fast and Furious series, what is the name of Dominic Toretto's sister?",
    },
    {
        quiz_name: "First Movie Trivia",
        question_text: "What is the name of the secret agent in the James Bond series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Which actor played Ron Weasley in the Harry Potter film series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "In which movie of the Fast and Furious franchise did Dwayne Johnson first appear?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "What is the name of the iconic spaceship in the Star Wars series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Who was the first actor to portray James Bond on the big screen?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "What is the name of the wizard who possesses the One Ring in The Lord of the Rings series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Who is the captain of the Black Pearl in the Pirates of the Caribbean series?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "What is the title of the first Harry Potter movie?",
    },
    {
        quiz_name: "Blockbuster Movie Challenge",
        question_text: "Which actor played Dominic Toretto in the Fast and Furious series?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which country is known for its famous trekking route, the Inca Trail?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "What is the highest active volcano in Europe?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which African country is home to the world's largest desert?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which city is renowned for its world-class surfing beaches?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "What is the name of the famous hiking trail in the United States that spans over 2,000 miles?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which country is famous for its thrilling bungee jumping experiences?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "Which city is known as the 'Gateway to the Amazon Rainforest'?",
    },
    {
        quiz_name: "Adventure Travel Trivia",
        question_text: "What is the name of the iconic rock formation in Australia's Northern Territory?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the tallest waterfall in the world?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which country is home to the famous ancient city of Petra?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the official language of Brazil?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which country is famous for its beautiful tulip fields?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the name of the iconic statue in Rio de Janeiro, Brazil?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which city is renowned for its historical ruins of Machu Picchu?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "What is the currency used in Japan?",
    },
    {
        quiz_name: "Travel Destinations Trivia",
        question_text: "Which African country is known for its wildlife safaris?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the chemical symbol for the element oxygen?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "Which scientist is known for the theory of general relativity?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the largest planet in our solar system?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the smallest unit of matter?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the process by which plants convert sunlight into energy?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the study of heredity and variation in living organisms called?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the unit of measurement for electric current?",
    },
    {
        quiz_name: "Scientific Wonders Trivia",
        question_text: "What is the boiling point of water in degrees Celsius?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the study of fossils called?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "Who developed the theory of evolution by natural selection?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the largest organ in the human body?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the unit of measurement for force?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the process of converting solid directly into vapor called?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the study of the Earth's atmosphere called?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "Which planet is known as the Red Planet?",
    },
    {
        quiz_name: "Amazing Science Facts Trivia",
        question_text: "What is the basic unit of life?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who is the author of the novel Pride and Prejudice?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which play by William Shakespeare features the character Hamlet?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who wrote the poem The Raven?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which novel tells the story of the young wizard Harry Potter?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who is the author of the novel To Kill a Mockingbird?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which Greek epic poem is attributed to the poet Homer?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Who wrote the famous play Romeo and Juliet?",
    },
    {
        quiz_name: "Literary Masterpieces Trivia",
        question_text: "Which novel is set in the dystopian society of Panem?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who is the author of the novel Moby-Dick?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which novel by F. Scott Fitzgerald features the character Jay Gatsby?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who wrote the play Macbeth?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which novel by George Orwell depicts a dystopian society ruled by Big Brother?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who is the author of the novel The Catcher in the Rye?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which American poet wrote the collection Leaves of Grass?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Who wrote the play A Streetcar Named Desire?",
    },
    {
        quiz_name: "Classic Literature Trivia",
        question_text: "Which novel by J.R.R. Tolkien is set in the fictional world of Middle-earth?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the novel 'Pride and Prejudice'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which American author wrote the novel 'To Kill a Mockingbird'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the fantasy series 'Harry Potter'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which Russian author wrote the novel 'War and Peace'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the Gothic novel 'Frankenstein'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which British author wrote the 'Sherlock Holmes' detective stories?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Who is the author of the novel 'The Great Gatsby'?",
    },
    {
        quiz_name: "Famous Authors Trivia",
        question_text: "Which American author wrote the novel 'The Catcher in the Rye'?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Which play by William Shakespeare features the characters Romeo and Juliet?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Who is the author of the famous tragedy 'Macbeth'?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "In which play does the character Hamlet famously deliver the soliloquy that begins with 'To be, or not to be'?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Which comedy by Shakespeare involves mistaken identities and a pair of twins named Antipholus?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Who is the author of the romantic comedy 'A Midsummer Night's Dream'?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Which play features the character of Lady Macbeth, known for her famous 'Out, damned spot!' monologue?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "In which play does the character Iago scheme against the title character, Othello?",
    },
    {
        quiz_name: "Shakespearean Trivia",
        question_text: "Who is the author of the historical play 'Henry V'?",
    },
];
exports.default = questionsData;
