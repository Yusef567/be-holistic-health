const essentialNutritionFactsAnswers = [
  {
    question_id: 1,
    answers: [
      { answer_text: "Protein", is_correct: false },
      { answer_text: "Fat", is_correct: false },
      { answer_text: "Carbohydrates", is_correct: true },
      { answer_text: "Fiber", is_correct: false },
    ],
  },
  {
    question_id: 2,
    answers: [
      { answer_text: "Vitamins, Minerals, Fiber", is_correct: false },
      { answer_text: "Protein, Fiber, Water", is_correct: false },
      { answer_text: "Protein, Carbohydrates, Fat", is_correct: true },
      { answer_text: "Sugars, Fats, Water", is_correct: false },
    ],
  },
  {
    question_id: 3,
    answers: [
      { answer_text: "10 cups", is_correct: false },
      { answer_text: "4 cups", is_correct: false },
      { answer_text: "8 cups", is_correct: true },
      { answer_text: "12 cups", is_correct: false },
    ],
  },
  {
    question_id: 4,
    answers: [
      { answer_text: "Vitamin C", is_correct: false },
      { answer_text: "Vitamin A", is_correct: false },
      { answer_text: "Vitamin K", is_correct: false },
      { answer_text: "Vitamin D", is_correct: true },
    ],
  },
  {
    question_id: 5,
    answers: [
      { answer_text: "Aids in digestion", is_correct: true },
      { answer_text: "Provides energy", is_correct: false },
      { answer_text: "Supports bone health", is_correct: false },
      { answer_text: "Promotes muscle growth", is_correct: false },
    ],
  },
  {
    question_id: 6,
    answers: [
      { answer_text: "Carbohydrates", is_correct: false },
      { answer_text: "Fiber", is_correct: false },
      { answer_text: "Protein", is_correct: true },
      { answer_text: "Vitamin D", is_correct: false },
    ],
  },
  {
    question_id: 7,
    answers: [
      { answer_text: "Active Metabolic Rate (AMR)", is_correct: false },
      { answer_text: "Maximum Metabolic Rate (MMR)", is_correct: false },
      { answer_text: "Resting Metabolic Rate (RMR)", is_correct: false },
      { answer_text: "Basal Metabolic Rate (BMR)", is_correct: true },
    ],
  },
  {
    question_id: 8,
    answers: [
      { answer_text: "Digestion", is_correct: true },
      { answer_text: "Metabolism", is_correct: false },
      { answer_text: "Absorption", is_correct: false },
      { answer_text: "Nutrient assimilation", is_correct: false },
    ],
  },
];

const healthyEatingHabitsAnswers = [
  {
    question_id: 9,
    answers: [
      { answer_text: "Measuring food with precision", is_correct: false },
      {
        answer_text: "Eating large portions of high-calorie foods",
        is_correct: false,
      },
      { answer_text: "Choosing nutrient-dense foods", is_correct: false },
      { answer_text: "Eating an appropriate amount of food", is_correct: true },
    ],
  },
  {
    question_id: 10,
    answers: [
      {
        answer_text: "Eating quickly without savoring flavors",
        is_correct: false,
      },
      { answer_text: "Eating while watching TV", is_correct: false },
      {
        answer_text: "Being fully present and savoring every bite",
        is_correct: true,
      },
      { answer_text: "Eating only calorie-dense foods", is_correct: false },
    ],
  },
  {
    question_id: 11,
    answers: [
      {
        answer_text: "To determine the food's expiration date",
        is_correct: false,
      },
      {
        answer_text: "To make the food look more appealing",
        is_correct: false,
      },
      {
        answer_text: "To calculate the number of calories burned",
        is_correct: false,
      },
      {
        answer_text: "To make informed decisions about nutrition",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 12,
    answers: [
      { answer_text: "Meat and poultry", is_correct: true },
      { answer_text: "Sugars and Sweets", is_correct: false },
      { answer_text: "Fruits and Vegetables", is_correct: false },
      { answer_text: "Dairy Products", is_correct: false },
    ],
  },
  {
    question_id: 13,
    answers: [
      {
        answer_text: "Eating only one type of food at each meal",
        is_correct: false,
      },
      { answer_text: "Eating large portions of protein", is_correct: false },
      {
        answer_text: "Balancing different food groups on your plate",
        is_correct: true,
      },
      {
        answer_text: "Skipping meals to create a calorie deficit",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 14,
    answers: [
      {
        answer_text: "They provide a natural source of caffeine",
        is_correct: false,
      },
      { answer_text: "They add flavor to meals", is_correct: false },
      { answer_text: "They have a lower calorie content", is_correct: false },
      {
        answer_text: "They offer a variety of essential nutrients",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 15,
    answers: [
      {
        answer_text: "Replacing sugary beverages with water or herbal tea",
        is_correct: true,
      },
      { answer_text: "Avoiding all carbohydrates", is_correct: false },
      {
        answer_text: "Eating larger portions of sugary foods",
        is_correct: false,
      },
      {
        answer_text: "Skipping meals to reduce sugar intake",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 16,
    answers: [
      {
        answer_text: "It prevents you from eating any unhealthy foods",
        is_correct: false,
      },
      {
        answer_text: "It supports intuitive eating and prevents overeating",
        is_correct: true,
      },
      {
        answer_text: "It helps you to gain weight more quickly",
        is_correct: false,
      },
      { answer_text: "It encourages overeating", is_correct: false },
    ],
  },
];

const exerciseFundamentalsAnswers = [
  {
    question_id: 17,
    answers: [
      { answer_text: "At least 70 minutes", is_correct: false },
      { answer_text: "At least 150 minutes", is_correct: true },
      { answer_text: "At least 90 minutes", is_correct: false },
      { answer_text: "At least 180 minutes", is_correct: false },
    ],
  },
  {
    question_id: 18,
    answers: [
      { answer_text: "Cardiovascular", is_correct: true },
      { answer_text: "Strength", is_correct: false },
      { answer_text: "Aerobic", is_correct: false },
      { answer_text: "Anaerobic", is_correct: false },
    ],
  },
  {
    question_id: 19,
    answers: [
      { answer_text: "Cooling down", is_correct: false },
      { answer_text: "Warm-up", is_correct: false },
      { answer_text: "Progressive overload", is_correct: true },
      { answer_text: "Steady-state training", is_correct: false },
    ],
  },
  {
    question_id: 20,
    answers: [
      { answer_text: "Improved flexibility only", is_correct: false },
      { answer_text: "Increased muscle mass and strength", is_correct: true },
      { answer_text: "Higher heart rate variability", is_correct: false },
      { answer_text: "Enhanced cognitive function", is_correct: false },
    ],
  },
  {
    question_id: 21,
    answers: [
      { answer_text: "Yoga", is_correct: false },
      { answer_text: "Pilates", is_correct: false },
      {
        answer_text: "High-Intensity Interval Training (HIIT)",
        is_correct: true,
      },
      { answer_text: "Tai Chi", is_correct: false },
    ],
  },
  {
    question_id: 22,
    answers: [
      { answer_text: "Once a week", is_correct: false },
      { answer_text: "Three times a week", is_correct: true },
      { answer_text: "Four times a week", is_correct: false },
      { answer_text: "Every day", is_correct: false },
    ],
  },
  {
    question_id: 23,
    answers: [
      { answer_text: "Warm-up", is_correct: false },
      { answer_text: "Periodization", is_correct: false },
      { answer_text: "Steady-state training", is_correct: false },
      { answer_text: "Cooling down", is_correct: true },
    ],
  },
  {
    question_id: 24,
    answers: [
      { answer_text: "Taking a break from exercise", is_correct: false },
      { answer_text: "Exercising without breaks", is_correct: false },
      {
        answer_text: "Alternating between intense and light exercises",
        is_correct: true,
      },
      { answer_text: "Exercising at a slow pace", is_correct: false },
    ],
  },
];

const cardiovascularFitnessInsightsAnswers = [
  {
    question_id: 25,
    answers: [
      { answer_text: "Four times a week", is_correct: true },
      { answer_text: "Once a week", is_correct: false },
      { answer_text: "Twice a week", is_correct: false },
      { answer_text: "Every day", is_correct: false },
    ],
  },
  {
    question_id: 26,
    answers: [
      { answer_text: "Strength training", is_correct: false },
      { answer_text: "Yoga", is_correct: false },
      { answer_text: "Aerobic exercise", is_correct: true },
      { answer_text: "Static stretching", is_correct: false },
    ],
  },
  {
    question_id: 27,
    answers: [
      { answer_text: "70-85% of maximum heart rate", is_correct: false },
      { answer_text: "90-100% of maximum heart rate", is_correct: false },
      { answer_text: "50-70% of maximum heart rate", is_correct: true },
      { answer_text: "10-20% of maximum heart rate", is_correct: false },
    ],
  },
  {
    question_id: 28,
    answers: [
      { answer_text: "Interval training", is_correct: true },
      { answer_text: "Steady-state training", is_correct: false },
      { answer_text: "Pilates", is_correct: false },
      { answer_text: "Tai Chi", is_correct: false },
    ],
  },
  {
    question_id: 29,
    answers: [
      { answer_text: "Exercising without breaks", is_correct: false },
      {
        answer_text: "Alternating between intense and light exercises",
        is_correct: false,
      },
      { answer_text: "Singing loudly during exercise", is_correct: false },
      {
        answer_text: "Being able to carry on a conversation during exercise",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 30,
    answers: [
      { answer_text: "Regulating body temperature", is_correct: false },
      { answer_text: "Building muscle mass", is_correct: false },
      {
        answer_text: "Transporting oxygen and nutrients throughout the body",
        is_correct: true,
      },
      { answer_text: "Producing digestive enzymes", is_correct: false },
    ],
  },
  {
    question_id: 31,
    answers: [
      { answer_text: "HR max", is_correct: false },
      { answer_text: "BP max", is_correct: false },
      { answer_text: "VO2 max", is_correct: true },
      { answer_text: "RPE max", is_correct: false },
    ],
  },
  {
    question_id: 32,
    answers: [
      { answer_text: "5-10 minutes", is_correct: true },
      { answer_text: "15-30 minutes", is_correct: false },
      { answer_text: "1-2 hours", is_correct: false },
      { answer_text: "No cool-down is necessary", is_correct: false },
    ],
  },
];

const sleepScienceAnswers = [
  {
    question_id: 33,
    answers: [
      { answer_text: "Chronobiology", is_correct: false },
      { answer_text: "Sleep cycle", is_correct: false },
      { answer_text: "Circadian rhythm", is_correct: true },
      { answer_text: "NREM sleep", is_correct: false },
    ],
  },
  {
    question_id: 34,
    answers: [
      { answer_text: "NREM sleep", is_correct: false },
      { answer_text: "Stage 1 sleep", is_correct: false },
      { answer_text: "Stage 2 sleep", is_correct: false },
      { answer_text: "REM sleep", is_correct: true },
    ],
  },
  {
    question_id: 35,
    answers: [
      {
        answer_text:
          "A sleep disorder characterized by excessive daytime sleepiness",
        is_correct: false,
      },
      {
        answer_text: "A sleep disorder characterized by sleepwalking",
        is_correct: false,
      },
      {
        answer_text:
          "A sleep disorder characterized by frequent awakenings and difficulty falling back asleep",
        is_correct: false,
      },
      {
        answer_text:
          "A sleep disorder characterized by pauses in breathing during sleep",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 36,
    answers: [
      {
        answer_text:
          "It disrupts the production of melatonin and may affect sleep quality",
        is_correct: true,
      },
      { answer_text: "It has no effect on sleep", is_correct: false },
      { answer_text: "It improves sleep quality", is_correct: false },
      { answer_text: "It delays the sleep-wake cycle", is_correct: false },
    ],
  },
  {
    question_id: 37,
    answers: [
      { answer_text: "Less than 4 hours", is_correct: false },
      { answer_text: "7-9 hours", is_correct: true },
      { answer_text: "9-11 hours", is_correct: false },
      { answer_text: "12-14 hours", is_correct: false },
    ],
  },
  {
    question_id: 38,
    answers: [
      { answer_text: "Jet lag", is_correct: false },
      { answer_text: "Sleep apnea", is_correct: false },
      { answer_text: "Sleep inertia", is_correct: true },
      { answer_text: "Insomnia", is_correct: false },
    ],
  },
  {
    question_id: 39,
    answers: [
      { answer_text: "Using electronic devices before bed", is_correct: false },
      {
        answer_text: "Maintaining a consistent sleep schedule",
        is_correct: true,
      },
      {
        answer_text: "Drinking caffeinated beverages at bedtime",
        is_correct: false,
      },
      {
        answer_text: "Exercising vigorously right before sleep",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 40,
    answers: [
      {
        answer_text:
          "A sleep disorder characterized by excessive sleepiness during the day",
        is_correct: false,
      },
      {
        answer_text: "A sleep disorder characterized by vivid nightmares",
        is_correct: false,
      },
      {
        answer_text:
          "A sleep disorder characterized by difficulty falling asleep or staying asleep",
        is_correct: true,
      },
      {
        answer_text: "A sleep disorder characterized by sleepwalking",
        is_correct: false,
      },
    ],
  },
];

const restfulTechniquesAnswers = [
  {
    question_id: 41,
    answers: [
      {
        answer_text: "Listening to calming music before bed",
        is_correct: false,
      },
      {
        answer_text:
          "Focusing attention on the present moment without judgment",
        is_correct: true,
      },
      { answer_text: "Hypnotic sleep induction", is_correct: false },
      {
        answer_text: "Performing vigorous exercise before bed",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 42,
    answers: [
      { answer_text: "A type of alarm clock", is_correct: false },
      {
        answer_text: "Sound therapy used to treat hearing loss",
        is_correct: false,
      },
      {
        answer_text: "A technique for calming a restless mind",
        is_correct: false,
      },
      {
        answer_text:
          "A soothing, consistent background sound that masks other noises",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 43,
    answers: [
      { answer_text: "To help block out light", is_correct: true },
      { answer_text: "To provide neck support", is_correct: false },
      { answer_text: "To reduce noise pollution", is_correct: false },
      { answer_text: "To improve cognitive function", is_correct: false },
    ],
  },
  {
    question_id: 44,
    answers: [
      {
        answer_text: "A technique for quickly falling asleep",
        is_correct: false,
      },
      {
        answer_text: "A breathing exercise to increase lung capacity",
        is_correct: false,
      },
      {
        answer_text: "A method of progressive weight lifting",
        is_correct: false,
      },
      {
        answer_text:
          "A relaxation technique involving tensing and relaxing muscle groups",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 45,
    answers: [
      { answer_text: "Green tea", is_correct: false },
      { answer_text: "Mint tea", is_correct: false },
      { answer_text: "Chamomile tea", is_correct: true },
      { answer_text: "Energy drinks", is_correct: false },
    ],
  },
  {
    question_id: 46,
    answers: [
      { answer_text: "A series of breathing exercises", is_correct: false },
      {
        answer_text: "A technique to reduce screen time before bed",
        is_correct: false,
      },
      {
        answer_text:
          "A sleep pattern that involves multiple short naps throughout the day",
        is_correct: false,
      },
      {
        answer_text:
          "A set of guidelines for better sleep, including cutting out caffeine 10 hours before bed",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 47,
    answers: [
      { answer_text: "It helps regulate body temperature", is_correct: false },
      {
        answer_text: "It reduces the need for regular sleep",
        is_correct: false,
      },
      {
        answer_text:
          "It provides structure and signals to the body that it's time to wind down",
        is_correct: true,
      },
      {
        answer_text: "It increases heart rate and blood pressure",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 48,
    answers: [
      { answer_text: "To add weight during exercise", is_correct: false },
      { answer_text: "To reduce anxiety during the day", is_correct: false },
      {
        answer_text: "To reduce stress and promote calmness during sleep",
        is_correct: true,
      },
      { answer_text: "To prevent snoring", is_correct: false },
    ],
  },
];

const heartHealthFundamentalsAnswers = [
  {
    question_id: 49,
    answers: [
      { answer_text: "Filtering blood", is_correct: false },
      { answer_text: "Digesting food", is_correct: false },
      { answer_text: "Producing hormones", is_correct: false },
      { answer_text: "Pumping blood throughout the body", is_correct: true },
    ],
  },
  {
    question_id: 50,
    answers: [
      { answer_text: "Left atrium", is_correct: true },
      { answer_text: "Right atrium", is_correct: false },
      { answer_text: "Left ventricle", is_correct: false },
      { answer_text: "Right ventricle", is_correct: false },
    ],
  },
  {
    question_id: 51,
    answers: [
      { answer_text: "A type of heart rhythm disorder", is_correct: false },
      {
        answer_text: "A condition where the heart beats too slowly",
        is_correct: false,
      },
      { answer_text: "A buildup of plaque in the arteries", is_correct: true },
      {
        answer_text: "A sudden stoppage of blood flow to the brain",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 52,
    answers: [
      { answer_text: "60-100 beats per minute", is_correct: true },
      { answer_text: "40-60 beats per minute", is_correct: false },
      { answer_text: "110-120 beats per minute", is_correct: false },
      { answer_text: "120-130 beats per minute", is_correct: false },
    ],
  },
  {
    question_id: 53,
    answers: [
      { answer_text: "Accidents", is_correct: false },
      { answer_text: "Infectious diseases", is_correct: false },
      { answer_text: "Cardiovascular disease", is_correct: true },
      { answer_text: "Cancer", is_correct: false },
    ],
  },
  {
    question_id: 54,
    answers: [
      { answer_text: "Veins", is_correct: false },
      { answer_text: "Arteries", is_correct: true },
      { answer_text: "Capillaries", is_correct: false },
      { answer_text: "Lymphatic vessels", is_correct: false },
    ],
  },
  {
    question_id: 55,
    answers: [
      { answer_text: "An abnormally low heart rate", is_correct: false },
      { answer_text: "A type of heart attack", is_correct: false },
      { answer_text: "An abnormally high blood pressure", is_correct: true },
      { answer_text: "A type of stroke", is_correct: false },
    ],
  },
  {
    question_id: 56,
    answers: [
      { answer_text: "To regulate body temperature", is_correct: false },
      { answer_text: "To aid in digestion", is_correct: false },
      { answer_text: "To provide energy", is_correct: false },
      {
        answer_text: "To build cell membranes and produce hormones",
        is_correct: true,
      },
    ],
  },
];

const heartWiseLivingAnswers = [
  {
    question_id: 57,
    answers: [
      {
        answer_text: "A diet high in saturated fats",
        is_correct: false,
      },
      {
        answer_text:
          "A diet rich in fruits, vegetables, whole grains, and lean proteins",
        is_correct: true,
      },
      {
        answer_text: "A diet consisting mostly of processed foods",
        is_correct: false,
      },
      {
        answer_text: "A diet focused solely on meat and dairy products",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 58,
    answers: [
      {
        answer_text: "Physical activity has no impact on heart health",
        is_correct: false,
      },
      {
        answer_text: "Physical activity helps maintain bone density",
        is_correct: false,
      },
      {
        answer_text:
          "Regular exercise can improve heart function and promote overall cardiovascular health",
        is_correct: true,
      },
      {
        answer_text: "Physical activity only benefits muscle strength",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 59,
    answers: [
      { answer_text: "Drinking alcohol in moderation", is_correct: false },
      { answer_text: "Maintaining a healthy weight", is_correct: true },
      {
        answer_text: "Practicing stress management techniques",
        is_correct: false,
      },
      {
        answer_text: "Having a family history of heart disease",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 60,
    answers: [
      { answer_text: "Saturated fats and trans fats", is_correct: false },
      {
        answer_text:
          "Unsaturated fats, including monounsaturated and polyunsaturated fats",
        is_correct: true,
      },
      { answer_text: "Highly processed fats", is_correct: false },
      { answer_text: "Sugar and carbohydrates", is_correct: false },
    ],
  },
  {
    question_id: 61,
    answers: [
      {
        answer_text: "Antioxidants have no impact on heart health",
        is_correct: false,
      },
      { answer_text: "Antioxidants reduce blood pressure", is_correct: false },
      {
        answer_text: "Antioxidants prevent the formation of blood clots",
        is_correct: false,
      },
      {
        answer_text:
          "Antioxidants help protect the heart by reducing oxidative stress and inflammation",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 62,
    answers: [
      {
        answer_text: "Exercise only improves muscle strength",
        is_correct: false,
      },
      {
        answer_text: "Regular exercise improves lung function",
        is_correct: false,
      },
      {
        answer_text: "Exercise increases the resting heart rate",
        is_correct: false,
      },
      {
        answer_text:
          "Regular exercise strengthens the heart and improves circulation",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 63,
    answers: [
      { answer_text: "No more than 1000 mg per day", is_correct: false },
      { answer_text: "No more than 1500 mg per day", is_correct: true },
      { answer_text: "More than 3000 mg per day", is_correct: false },
      {
        answer_text: "There is no recommended limit for sodium intake",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 64,
    answers: [
      {
        answer_text: "Stress has no impact on cardiovascular health",
        is_correct: false,
      },
      { answer_text: "Stress can lead to weight loss", is_correct: false },
      {
        answer_text:
          "Chronic stress can contribute to high blood pressure and heart disease",
        is_correct: true,
      },
      { answer_text: "Stress only affects mental health", is_correct: false },
    ],
  },
];

const diabetesInsightsAnswers = [
  {
    question_id: 65,
    answers: [
      { answer_text: "A type of cancer", is_correct: false },
      { answer_text: "An autoimmune disorder", is_correct: false },
      {
        answer_text:
          "A chronic condition that affects how your body processes glucose (sugar)",
        is_correct: true,
      },
      { answer_text: "A mental health condition", is_correct: false },
    ],
  },
  {
    question_id: 66,
    answers: [
      { answer_text: "Type 1 diabetes", is_correct: false },
      { answer_text: "Type 2 diabetes", is_correct: true },
      { answer_text: "Gestational diabetes", is_correct: false },
      { answer_text: "Prediabetes", is_correct: false },
    ],
  },
  {
    question_id: 67,
    answers: [
      {
        answer_text: "There is no way to prevent type 2 diabetes",
        is_correct: false,
      },
      { answer_text: "By consuming a high-sugar diet", is_correct: false },
      {
        answer_text:
          "By maintaining a healthy weight, being physically active, and making healthy food choices",
        is_correct: true,
      },
      { answer_text: "By avoiding carbohydrates entirely", is_correct: false },
    ],
  },
  {
    question_id: 68,
    answers: [
      { answer_text: "Below 5%", is_correct: false },
      { answer_text: "Between 5% and 6%", is_correct: false },
      { answer_text: "Between 6% and 7%", is_correct: true },
      { answer_text: "Above 7%", is_correct: false },
    ],
  },
  {
    question_id: 69,
    answers: [
      {
        answer_text: "It has no impact on diabetes management",
        is_correct: false,
      },
      {
        answer_text:
          "Physical activity can lower blood sugar levels and improves insulin sensitivity",
        is_correct: true,
      },
      {
        answer_text: "Physical activity always increases blood sugar levels",
        is_correct: false,
      },
      {
        answer_text:
          "Physical activity is harmful for individuals with diabetes",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 70,
    answers: [
      {
        answer_text:
          "By discouraging them from monitoring their blood sugar levels",
        is_correct: false,
      },
      {
        answer_text: "By avoiding discussions about diabetes",
        is_correct: false,
      },
      {
        answer_text:
          "By helping with meal planning and participating in physical activities together",
        is_correct: true,
      },
      {
        answer_text: "By encouraging excessive sugar consumption",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 71,
    answers: [
      { answer_text: "To increase insulin production", is_correct: false },
      {
        answer_text: "To check for the presence of diabetes antibodies",
        is_correct: false,
      },
      { answer_text: "To monitor blood pressure", is_correct: false },
      {
        answer_text:
          "To track blood sugar levels and make informed decisions about diabetes management",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 72,
    answers: [
      { answer_text: "A type of exercise program", is_correct: false },
      { answer_text: "A blood sugar spike after meals", is_correct: false },
      {
        answer_text: "A condition in which blood sugar levels are too low",
        is_correct: false,
      },
      {
        answer_text:
          "A condition characterized by high levels of ketones in the blood,triggered by uncontrolled blood sugar",
        is_correct: true,
      },
    ],
  },
];

const diabetesLifestyleAndManagementAnswers = [
  {
    question_id: 73,
    answers: [
      {
        answer_text: "To completely eliminate blood sugar fluctuations",
        is_correct: false,
      },
      {
        answer_text:
          "To maintain optimal blood sugar levels and prevent complications",
        is_correct: true,
      },
      { answer_text: "To achieve a specific body weight", is_correct: false },
      { answer_text: "To reverse diabetes completely", is_correct: false },
    ],
  },
  {
    question_id: 74,
    answers: [
      {
        answer_text: "Carbohydrates have no impact on blood sugar levels",
        is_correct: false,
      },
      {
        answer_text: "Carbohydrates should be avoided entirely",
        is_correct: false,
      },
      {
        answer_text:
          "Carbohydrates should be included in balanced amounts to manage blood sugar levels",
        is_correct: true,
      },
      {
        answer_text: "Carbohydrates increase insulin production",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 75,
    answers: [
      {
        answer_text:
          "Smaller portions help prevent blood sugar spikes and overeating",
        is_correct: true,
      },
      {
        answer_text: "Portion control has no effect on blood sugar levels",
        is_correct: false,
      },
      {
        answer_text: "Larger portions are better for diabetes management",
        is_correct: false,
      },
      {
        answer_text: "Portion control is only important for weight loss",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 76,
    answers: [
      {
        answer_text: "Conditions affecting the gastrointestinal system",
        is_correct: false,
      },
      {
        answer_text: "Neurological disorders",
        is_correct: false,
      },
      {
        answer_text: "Metabolic complications",
        is_correct: false,
      },
      {
        answer_text: "Fluctuations in blood glucose levels",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 77,
    answers: [
      {
        answer_text: "Eye exams are not necessary for people with diabetes",
        is_correct: false,
      },
      {
        answer_text:
          "Regular eye exams help detect and prevent diabetes-related eye complications",
        is_correct: true,
      },
      {
        answer_text: "Eye exams are only needed for vision correction",
        is_correct: false,
      },
      {
        answer_text:
          "Regular eye exams help reduce the need for diabetes medications",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 78,
    answers: [
      {
        answer_text:
          "Medication and insulin are not used in diabetes management",
        is_correct: false,
      },
      {
        answer_text: "Medication and insulin can reverse diabetes completely",
        is_correct: false,
      },
      {
        answer_text: "Medication and insulin are only used for type 1 diabetes",
        is_correct: false,
      },
      {
        answer_text:
          "Medication and insulin help lower blood sugar levels and manage diabetes",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 79,
    answers: [
      {
        answer_text: "Stress has no impact on blood sugar levels",
        is_correct: false,
      },
      {
        answer_text: "Stress can only increase blood sugar levels",
        is_correct: false,
      },
      {
        answer_text: "Stress can lead to both low and high blood sugar levels",
        is_correct: true,
      },
      {
        answer_text: "Stress can only affect mental health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 80,
    answers: [
      {
        answer_text:
          "Exercise routines can help improve insulin sensitivity and manage weight",
        is_correct: true,
      },
      {
        answer_text: "Exercise has no impact on diabetes management",
        is_correct: false,
      },
      {
        answer_text:
          "Only intense, high-impact exercises are suitable for people with diabetes",
        is_correct: false,
      },
      {
        answer_text: "Exercise is harmful for individuals with diabetes",
        is_correct: false,
      },
    ],
  },
];

const mentalHealthAwarenessAndSupportAnswers = [
  {
    question_id: 81,
    answers: [
      { answer_text: "The absence of mental challenges", is_correct: false },
      { answer_text: "The ability to suppress emotions", is_correct: false },
      {
        answer_text:
          "A state of well-being in which an individual realizes their own potential, can cope with the normal stresses of life, work productively, and make contributions to their community",
        is_correct: true,
      },
      {
        answer_text: "A disorder that only affects certain individuals",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 82,
    answers: [
      {
        answer_text: "Mental health is not as important as physical health",
        is_correct: false,
      },
      {
        answer_text: "People with mental health issues are weak or lazy",
        is_correct: false,
      },
      {
        answer_text:
          "Mental health challenges are always caused by personal weaknesses",
        is_correct: true,
      },
      {
        answer_text:
          "Mental health conditions are treatable and individuals can lead fulfilling lives with proper support",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 83,
    answers: [
      {
        answer_text:
          "Stigma has no impact on individuals with mental health challenges",
        is_correct: false,
      },
      {
        answer_text: "Stigma can lead to increased understanding and empathy",
        is_correct: false,
      },
      { answer_text: "Stigma only affects physical health", is_correct: false },
      {
        answer_text:
          "Stigma can prevent individuals from seeking help and lead to feelings of shame and isolation",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 84,
    answers: [
      {
        answer_text:
          "Withdrawal from social activities and changes in sleep or eating patterns",
        is_correct: true,
      },
      {
        answer_text: "There are no visible signs of mental health struggles",
        is_correct: false,
      },
      { answer_text: "Excessive happiness and energy", is_correct: false },
      {
        answer_text:
          "Everyone experiences the same symptoms of mental health challenges",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 85,
    answers: [
      {
        answer_text: "Ignore them and hope the issue goes away on its own",
        is_correct: false,
      },
      {
        answer_text:
          "Listen without judgment, encourage professional help, and stay connected",
        is_correct: true,
      },
      { answer_text: "Offer judgment and criticism", is_correct: false },
      {
        answer_text: "Provide unsolicited advice and solutions",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 86,
    answers: [
      { answer_text: "Self-care is a sign of selfishness", is_correct: false },
      {
        answer_text: "Self-care is only about physical well-being",
        is_correct: false,
      },
      {
        answer_text:
          "Self-care is unnecessary for maintaining good mental health",
        is_correct: false,
      },
      {
        answer_text:
          "Self-care involves prioritizing activities that promote mental, emotional, and physical well-being",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 87,
    answers: [
      {
        answer_text: "Avoid talking about mental health to prevent discomfort",
        is_correct: false,
      },
      {
        answer_text:
          "Promote harmful stereotypes about mental health challenges",
        is_correct: false,
      },
      {
        answer_text:
          "Start conversations, share resources, and participate in mental health awareness events",
        is_correct: true,
      },
      {
        answer_text:
          "Keep mental health concerns a secret to avoid social stigma",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 88,
    answers: [
      {
        answer_text:
          "Engage in regular physical activity, practice relaxation techniques, and seek support from loved ones or professionals",
        is_correct: true,
      },
      { answer_text: "Avoid all sources of stress", is_correct: false },
      {
        answer_text: "Rely solely on medication to manage stress and anxiety",
        is_correct: false,
      },
      {
        answer_text:
          "Cope with stress by isolating oneself and suppressing emotions",
        is_correct: false,
      },
    ],
  },
];

const mentalHealthResilienceAndCopingAnswers = [
  {
    question_id: 89,
    answers: [
      { answer_text: "The absence of mental challenges", is_correct: false },
      { answer_text: "The ability to suppress emotions", is_correct: false },
      {
        answer_text:
          "The capacity to adapt, bounce back from adversity, and maintain mental well-being despite life's challenges",
        is_correct: true,
      },
      {
        answer_text: "A condition that can only be achieved through medication",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 90,
    answers: [
      {
        answer_text: "Mindfulness has no impact on mental well-being",
        is_correct: false,
      },
      {
        answer_text: "Mindfulness can only be practiced through meditation",
        is_correct: false,
      },
      {
        answer_text:
          "Mindfulness helps individuals become less aware of their thoughts and emotions",
        is_correct: false,
      },
      {
        answer_text:
          "Mindfulness can reduce stress and enhance emotional regulation",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 91,
    answers: [
      {
        answer_text:
          "Social support is not necessary for maintaining good mental health",
        is_correct: false,
      },
      {
        answer_text: "Social support can only come from professionals",
        is_correct: false,
      },
      {
        answer_text:
          "Social support can provide a sense of belonging, reduce feelings of isolation, and offer emotional assistance",
        is_correct: true,
      },
      {
        answer_text: "Social support is only relevant for physical health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 92,
    answers: [
      {
        answer_text:
          "Practicing relaxation techniques, engaging in hobbies, and seeking support from loved ones",
        is_correct: true,
      },
      {
        answer_text: "Ignoring stress is the best way to prevent burnout",
        is_correct: false,
      },
      {
        answer_text:
          "Relying solely on medication to manage stress is the most effective approach",
        is_correct: false,
      },
      {
        answer_text:
          "Experiencing burnout is inevitable and cannot be prevented",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 93,
    answers: [
      {
        answer_text:
          "Setting unrealistic goals can positively impact mental well-being",
        is_correct: false,
      },
      {
        answer_text: "Goals are not relevant to mental health",
        is_correct: false,
      },
      {
        answer_text: "Goals are only important for physical health",
        is_correct: false,
      },
      {
        answer_text:
          "Setting realistic goals can provide a sense of purpose, motivation, and achievement",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 94,
    answers: [
      {
        answer_text: "Physical activity has no effect on mental health",
        is_correct: false,
      },
      {
        answer_text:
          "Regular physical activity is associated with improved mood, reduced stress, and enhanced overall mental well-being",
        is_correct: true,
      },
      {
        answer_text:
          "Physical activity can only worsen mental health conditions",
        is_correct: false,
      },
      {
        answer_text: "Physical activity is only relevant for physical health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 95,
    answers: [
      {
        answer_text:
          "Creative expression has no impact on managing emotions and stress",
        is_correct: false,
      },
      {
        answer_text:
          "Creative expression is only useful for artistic individuals",
        is_correct: false,
      },
      {
        answer_text: "Creative expression is only relevant for physical health",
        is_correct: false,
      },
      {
        answer_text:
          "Creative activities can provide an outlet for emotions and promote relaxation",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 96,
    answers: [
      {
        answer_text:
          "Maintaining a consistent sleep schedule can improve mood and overall mental well-being",
        is_correct: true,
      },
      {
        answer_text:
          "Sleeping excessively is the best approach for mental well-being",
        is_correct: false,
      },
      {
        answer_text: "Sleep has no impact on mental health",
        is_correct: false,
      },
      {
        answer_text: "Sleep is only relevant for physical health",
        is_correct: false,
      },
    ],
  },
];

const hypertensionAwarenessAndManagementAnswers = [
  {
    question_id: 97,
    answers: [
      { answer_text: "A low heart rate", is_correct: false },
      {
        answer_text: "A temporary increase in blood pressure",
        is_correct: false,
      },
      {
        answer_text:
          "A chronic condition characterized by elevated blood pressure levels",
        is_correct: true,
      },
      { answer_text: "A disease that affects the liver", is_correct: false },
    ],
  },
  {
    question_id: 98,
    answers: [
      { answer_text: "Consuming a balanced diet", is_correct: false },
      { answer_text: "Being physically active", is_correct: false },
      { answer_text: "Smoking tobacco", is_correct: true },
      { answer_text: "Maintaining a healthy weight", is_correct: false },
    ],
  },
  {
    question_id: 99,
    answers: [
      { answer_text: "Increasing sodium intake", is_correct: false },
      {
        answer_text: "Consuming excessive amounts of saturated fats",
        is_correct: false,
      },
      { answer_text: "Limiting water consumption", is_correct: false },
      {
        answer_text:
          "Eating a diet rich in fruits, vegetables, and whole grains",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 100,
    answers: [
      {
        answer_text:
          "Regular physical activity can help lower blood pressure and reduce Hypertension risk",
        is_correct: true,
      },
      {
        answer_text: "Physical activity has no impact on Hypertension",
        is_correct: false,
      },
      {
        answer_text: "Physical activity can exacerbate Hypertension",
        is_correct: false,
      },
      {
        answer_text: "Physical activity only affects mental health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 101,
    answers: [
      {
        answer_text: "Stress management has no impact on Hypertension",
        is_correct: false,
      },
      {
        answer_text:
          "Effective stress management can help reduce blood pressure and improve overall well-being",
        is_correct: true,
      },
      {
        answer_text: "Stress management can increase blood pressure",
        is_correct: false,
      },
      {
        answer_text: "Stress management is only relevant for mental health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 102,
    answers: [
      {
        answer_text:
          "No complications are associated with uncontrolled Hypertension",
        is_correct: false,
      },
      {
        answer_text:
          "Complications may include heart disease, stroke, and kidney damage",
        is_correct: true,
      },
      {
        answer_text: "Uncontrolled Hypertension only affects the bones",
        is_correct: false,
      },
      {
        answer_text: "Complications are limited to skin issues",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 103,
    answers: [
      {
        answer_text: "Medication is not used in the management of Hypertension",
        is_correct: false,
      },
      {
        answer_text: "Medication can cure Hypertension completely",
        is_correct: false,
      },
      {
        answer_text: "Medication is the only treatment for Hypertension",
        is_correct: false,
      },
      {
        answer_text:
          "Medication may be prescribed to help lower blood pressure and manage Hypertension",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 104,
    answers: [
      {
        answer_text: "Regular blood pressure monitoring is unnecessary",
        is_correct: false,
      },
      {
        answer_text:
          "Blood pressure monitoring can only be done in a medical setting",
        is_correct: false,
      },
      {
        answer_text:
          "Regular blood pressure monitoring helps track progress and ensure effective management of Hypertension",
        is_correct: true,
      },
      {
        answer_text: "Blood pressure monitoring is only important for athletes",
        is_correct: false,
      },
    ],
  },
];

const hypertensionPreventionAndLifestyleAnswers = [
  {
    question_id: 105,
    answers: [
      {
        answer_text:
          "Reducing sodium intake has no effect on Hypertension prevention",
        is_correct: false,
      },
      {
        answer_text: "Reducing sodium intake can worsen Hypertension",
        is_correct: false,
      },
      {
        answer_text:
          "Lower sodium intake can help reduce blood pressure and lower the risk of Hypertension",
        is_correct: true,
      },
      {
        answer_text: "Sodium intake is not relevant to Hypertension",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 106,
    answers: [
      {
        answer_text:
          "DASH and Mediterranean diets are fad diets with no impact on Hypertension",
        is_correct: false,
      },
      {
        answer_text:
          "DASH and Mediterranean diets are exclusively for weight loss",
        is_correct: false,
      },
      {
        answer_text:
          "DASH and Mediterranean diets have no connection to heart health",
        is_correct: false,
      },
      {
        answer_text:
          "DASH and Mediterranean diets promote heart health and lower Hypertension risk",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 107,
    answers: [
      {
        answer_text:
          "Maintaining a healthy weight can help lower blood pressure and improve overall heart health",
        is_correct: true,
      },
      {
        answer_text:
          "Maintaining a healthy weight has no impact on Hypertension",
        is_correct: false,
      },
      {
        answer_text: "Healthy weight is only relevant for physical appearance",
        is_correct: false,
      },
      {
        answer_text:
          "Healthy weight is only important for athletic performance",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 108,
    answers: [
      {
        answer_text:
          "Reducing alcohol consumption has no impact on Hypertension prevention",
        is_correct: false,
      },
      {
        answer_text:
          "Reducing alcohol consumption can lower blood pressure and decrease Hypertension risk",
        is_correct: true,
      },
      {
        answer_text:
          "Alcohol consumption has a positive effect on blood pressure",
        is_correct: false,
      },
      {
        answer_text:
          "Alcohol consumption is necessary for managing Hypertension",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 109,
    answers: [
      {
        answer_text:
          "Physical activity has no impact on Hypertension prevention",
        is_correct: false,
      },
      {
        answer_text:
          "Engaging in regular aerobic exercise can help lower blood pressure and improve heart health",
        is_correct: true,
      },
      {
        answer_text: "Intense exercise is beneficial for Hypertension",
        is_correct: false,
      },
      {
        answer_text: "Physical activity is only relevant for weight loss",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 110,
    answers: [
      {
        answer_text: "Stress management is not relevant to Hypertension",
        is_correct: false,
      },
      {
        answer_text: "Stress management can increase blood pressure",
        is_correct: false,
      },
      {
        answer_text: "Stress management is only important for mental health",
        is_correct: false,
      },
      {
        answer_text:
          "Meditation and relaxation exercises can help lower blood pressure",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 111,
    answers: [
      {
        answer_text:
          "Medication adherence is unnecessary for Hypertension management",
        is_correct: false,
      },
      {
        answer_text:
          "Medication adherence is important in severe cases of Hypertension",
        is_correct: false,
      },
      {
        answer_text:
          "Medication adherence is only relevant for physical health",
        is_correct: false,
      },
      {
        answer_text:
          "Medication adherence is important for effectively managing blood pressure and preventing complications associated with Hypertension",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 112,
    answers: [
      {
        answer_text: "Social support has no impact on Hypertension",
        is_correct: false,
      },
      {
        answer_text: "Social support can worsen Hypertension",
        is_correct: false,
      },
      {
        answer_text:
          "Social support system can contribute to reduced stress and improve overall well-being for individuals",
        is_correct: true,
      },
      {
        answer_text: "Social support is only relevant for emotional health",
        is_correct: false,
      },
    ],
  },
];

const respiratoryConditionsAwarenessAndManagementAnswers = [
  {
    question_id: 113,
    answers: [
      { answer_text: "Excessive thirst", is_correct: false },
      {
        answer_text: "Persistent cough, wheezing, and shortness of breath",
        is_correct: true,
      },
      { answer_text: "Vision changes", is_correct: false },
      { answer_text: "Joint pain", is_correct: false },
    ],
  },
  {
    question_id: 114,
    answers: [
      { answer_text: "Genetics only", is_correct: false },
      { answer_text: "Infections only", is_correct: false },
      {
        answer_text:
          "Smoking and environmental exposure to irritants like pollutants and chemicals",
        is_correct: true,
      },
      { answer_text: "Excessive exercise", is_correct: false },
    ],
  },
  {
    question_id: 115,
    answers: [
      {
        answer_text:
          "Environmental triggers have no impact on respiratory symptoms",
        is_correct: false,
      },
      {
        answer_text:
          "Environmental triggers can reduce the risk of respiratory conditions",
        is_correct: false,
      },
      {
        answer_text:
          "Exposure to environmental triggers like allergens and pollution can worsen respiratory symptoms",
        is_correct: true,
      },
      {
        answer_text: "Environmental triggers are only relevant for skin health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 116,
    answers: [
      { answer_text: "Staying indoors at all times", is_correct: false },
      { answer_text: "Avoiding water consumption", is_correct: false },
      { answer_text: "Excessive sun exposure", is_correct: false },
      {
        answer_text:
          "Regular exercise, proper medication use, and avoiding triggers",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 117,
    answers: [
      {
        answer_text:
          "Smoking cessation can significantly improve lung health and slow the progression of respiratory conditions",
        is_correct: true,
      },
      {
        answer_text: "Smoking has no impact on respiratory conditions",
        is_correct: false,
      },
      {
        answer_text: "Smoking can improve respiratory symptoms",
        is_correct: false,
      },
      {
        answer_text: "Smoking cessation is only relevant for dental health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 118,
    answers: [
      {
        answer_text:
          "Indoor air quality is not relevant to respiratory conditions",
        is_correct: false,
      },
      {
        answer_text:
          "Worsening indoor air quality can improve respiratory symptoms",
        is_correct: false,
      },
      {
        answer_text: "Indoor air quality only affects vision",
        is_correct: false,
      },
      {
        answer_text:
          "Improving indoor air quality by reducing allergens, using air purifiers, and proper ventilation can benefit individuals with respiratory conditions",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 119,
    answers: [
      {
        answer_text:
          "Physical activity has no impact on respiratory conditions",
        is_correct: false,
      },
      {
        answer_text:
          "Only intense exercise is beneficial for respiratory conditions",
        is_correct: false,
      },
      {
        answer_text: "Physical activity is only relevant for weight loss",
        is_correct: false,
      },
      {
        answer_text:
          "Regular physical activity can improve lung function and overall respiratory health",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 120,
    answers: [
      {
        answer_text: "Action plans have no impact on respiratory conditions",
        is_correct: false,
      },
      {
        answer_text: "Action plans are only for emergency situations",
        is_correct: false,
      },
      {
        answer_text:
          "Action plans can help individuals recognize symptoms and seek timely medical attention when needed",
        is_correct: true,
      },
      {
        answer_text: "Action plans are only relevant for skincare",
        is_correct: false,
      },
    ],
  },
];

const respiratoryConditionsPreventionAndSupportAnswers = [
  {
    question_id: 121,
    answers: [
      {
        answer_text:
          "Air quality at home has no impact on respiratory conditions",
        is_correct: false,
      },
      {
        answer_text: "Worsening air quality benefits respiratory conditions",
        is_correct: false,
      },
      {
        answer_text:
          "Reducing allergens, using air purifiers, and proper ventilation benefits respiratory conditions",
        is_correct: true,
      },
      {
        answer_text: "Air quality at home only affects skin health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 122,
    answers: [
      {
        answer_text: "Triggers have no impact on respiratory symptoms",
        is_correct: false,
      },
      {
        answer_text: "Triggers can improve respiratory symptoms",
        is_correct: false,
      },
      {
        answer_text:
          "Allergens, smoke, pollution, and cold air can worsen symptoms of Asthma or COPD",
        is_correct: true,
      },
      {
        answer_text: "Triggers are only relevant for digestion",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 123,
    answers: [
      {
        answer_text:
          "Proper inhaler technique ensures effective medication delivery, improving symptom management",
        is_correct: true,
      },
      {
        answer_text:
          "Inhaler technique has no impact on respiratory conditions",
        is_correct: false,
      },
      {
        answer_text: "Inhalers are not used for respiratory conditions",
        is_correct: false,
      },
      {
        answer_text: "Inhaler technique is only relevant for skin health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 124,
    answers: [
      {
        answer_text:
          "Regular medical check-ups are unnecessary for individuals with respiratory conditions",
        is_correct: false,
      },
      {
        answer_text:
          "Medical check-ups are only for heart related health issues",
        is_correct: false,
      },
      {
        answer_text: "Medical check-ups are only relevant for weight loss",
        is_correct: false,
      },
      {
        answer_text:
          "Regular medical check-ups help monitor lung function and adjust treatment plans",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 125,
    answers: [
      {
        answer_text:
          "Emotional support has no impact on individuals with respiratory conditions",
        is_correct: false,
      },
      {
        answer_text: "Emotional support can worsen respiratory symptoms",
        is_correct: false,
      },
      {
        answer_text: "Emotional support is only relevant for skincare",
        is_correct: false,
      },
      {
        answer_text:
          "Emotional support from family and friends can reduce stress and improve mental well-being",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 126,
    answers: [
      {
        answer_text:
          "Relaxation techniques are not relevant to respiratory health",
        is_correct: false,
      },
      {
        answer_text: "Relaxation techniques can worsen respiratory symptoms",
        is_correct: false,
      },
      {
        answer_text:
          "Relaxation techniques such as deep breathing and meditation can help manage stress, reduce anxiety, and improve respiratory health",
        is_correct: true,
      },
      {
        answer_text: "Relaxation techniques are only for weight loss",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 127,
    answers: [
      {
        answer_text:
          "Emergency action plans have no impact on respiratory conditions",
        is_correct: false,
      },
      {
        answer_text:
          "Having an emergency action plan helps individuals with respiratory conditions respond effectively to worsening symptoms or emergencies, ensuring timely and appropriate care",
        is_correct: true,
      },
      {
        answer_text: "Emergency action plans are only for minor issues",
        is_correct: false,
      },
      {
        answer_text:
          "Emergency action plans are only relevant for vision health",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 128,
    answers: [
      {
        answer_text:
          "Exposure to smoking in childhood can increase the risk of developing respiratory conditions, such as Asthma or COPD, in adulthood",
        is_correct: true,
      },
      {
        answer_text:
          "Childhood smoking exposure has no impact on respiratory conditions in adulthood",
        is_correct: false,
      },
      {
        answer_text:
          "Smoking exposure in childhood has a positive effect on lung health in adulthood",
        is_correct: false,
      },
      {
        answer_text: "Childhood smoking exposure only affects bone health",
        is_correct: false,
      },
    ],
  },
];

const cancerAwarenessAndPreventionAnswers = [
  {
    question_id: 129,
    answers: [
      { answer_text: "Colonoscopy", is_correct: false },
      { answer_text: "Pap smear", is_correct: false },
      { answer_text: "Mammography", is_correct: true },
      { answer_text: "Blood test", is_correct: false },
    ],
  },
  {
    question_id: 130,
    answers: [
      { answer_text: "Drinking coffee", is_correct: false },
      { answer_text: "Eating vegetables", is_correct: false },
      { answer_text: "Wearing sunscreen", is_correct: true },
      { answer_text: "Using a cell phone", is_correct: false },
    ],
  },
  {
    question_id: 131,
    answers: [
      {
        answer_text: "A high-sugar diet reduces cancer risk",
        is_correct: false,
      },
      {
        answer_text:
          "A healthy diet helps you keep a healthy weight, or lose weight, which can reduce the risk of cancer.",
        is_correct: true,
      },
      {
        answer_text: "Healthy eating has no impact on cancer prevention",
        is_correct: false,
      },
      {
        answer_text: "Processed foods are beneficial for cancer prevention",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 132,
    answers: [
      {
        answer_text: "To diagnose cancer at an advanced stage",
        is_correct: false,
      },
      {
        answer_text: "To provide treatment for advanced cancer",
        is_correct: false,
      },
      {
        answer_text: "To delay cancer treatment as much as possible",
        is_correct: false,
      },
      {
        answer_text: "To detect cancer early and enable prompt intervention",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 133,
    answers: [
      {
        answer_text:
          "Sunscreen helps reduce the risk of skin cancer and premature aging",
        is_correct: true,
      },
      {
        answer_text: "Sun exposure has no impact on skin health",
        is_correct: false,
      },
      {
        answer_text: "Sunburns are not related to skin cancer",
        is_correct: false,
      },
      {
        answer_text: "Sunscreen is not effective in preventing skin cancer",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 134,
    answers: [
      {
        answer_text: "Sedentary lifestyle and high-fat diet",
        is_correct: false,
      },
      { answer_text: "A low-fat diet", is_correct: false },
      {
        answer_text:
          "Regular physical activity, balanced diet, and avoiding tobacco use",
        is_correct: true,
      },
      { answer_text: "Excessive meat consumption", is_correct: false },
    ],
  },
  {
    question_id: 135,
    answers: [
      {
        answer_text: "Physical activity has no impact on cancer risk",
        is_correct: false,
      },
      {
        answer_text:
          "Regular physical activity reduces the risk of certain types of cancer and improves overall health",
        is_correct: true,
      },
      {
        answer_text: "Physical activity can worsen cancer symptoms",
        is_correct: false,
      },
      {
        answer_text: "Physical activity only benefits muscle growth",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 136,
    answers: [
      {
        answer_text: "Smoking has no impact on cancer development",
        is_correct: false,
      },
      {
        answer_text:
          "Smoking increases the risk of cancer, especially lung cancer",
        is_correct: true,
      },
      { answer_text: "Smoking only affects heart health", is_correct: false },
      { answer_text: "Smoking reduces the risk of cancer", is_correct: false },
    ],
  },
];

const livingWithCancerAndSupportAnswers = [
  {
    question_id: 137,
    answers: [
      {
        answer_text: "A support network has no impact on cancer patients",
        is_correct: false,
      },
      {
        answer_text: "A support network can increase stress and anxiety",
        is_correct: false,
      },
      {
        answer_text:
          "A support network provides emotional support, promotes well-being and reducing feelings of isolation",
        is_correct: true,
      },
      {
        answer_text: "A support network only matters during cancer treatment",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 138,
    answers: [
      { answer_text: "Ignoring emotional needs", is_correct: false },
      { answer_text: "Laughter and humor", is_correct: false },
      {
        answer_text: "Empathetic listening and validation of feelings",
        is_correct: true,
      },
      {
        answer_text: "Avoiding all discussions about cancer",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 139,
    answers: [
      {
        answer_text: "Mindfulness and relaxation techniques are irrelevant",
        is_correct: false,
      },
      {
        answer_text: "Mindfulness can worsen emotional distress",
        is_correct: false,
      },
      {
        answer_text: "Mindfulness is only for mental health",
        is_correct: false,
      },
      {
        answer_text:
          "Mindfulness and relaxation techniques can help reduce stress, anxiety, and improve overall well-being",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 140,
    answers: [
      {
        answer_text:
          "Open communication allows patients to ask questions, express concerns, and make informed decisions about their care",
        is_correct: true,
      },
      {
        answer_text:
          "Communication with healthcare professionals is unnecessary",
        is_correct: false,
      },
      {
        answer_text:
          "Open communication helps patients avoid treatment options",
        is_correct: false,
      },
      {
        answer_text:
          "Open communication is only relevant after treatment is complete",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 141,
    answers: [
      {
        answer_text: "Caregivers should avoid emotional support",
        is_correct: false,
      },
      { answer_text: "Providing practical support only", is_correct: false },
      {
        answer_text: "Caregivers should focus solely on medical tasks",
        is_correct: false,
      },
      {
        answer_text:
          "Caregivers can offer emotional support, assist with daily activities, and provide companionship to enhance the patient's quality of life",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 142,
    answers: [
      {
        answer_text: "Survivorship care is irrelevant after cancer treatment",
        is_correct: false,
      },
      {
        answer_text:
          "Survivorship care addresses the physical, emotional, and psychosocial needs of cancer survivors, helping them navigate life after treatment",
        is_correct: true,
      },
      {
        answer_text:
          "Survivorship care focuses on managing acute symptoms during treatment",
        is_correct: false,
      },
      {
        answer_text: "Survivorship care is only for those in remission",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 143,
    answers: [
      {
        answer_text: "Managing stress is unnecessary during the cancer journey",
        is_correct: false,
      },
      {
        answer_text: "Stress does not impact cancer patients",
        is_correct: false,
      },
      {
        answer_text:
          "Managing stress can improve overall well-being, enhance treatment outcomes, and contribute to a positive cancer experience",
        is_correct: true,
      },
      {
        answer_text:
          "Stress management is only relevant during cancer treatment",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 144,
    answers: [
      {
        answer_text: "No resources are available for financial challenges",
        is_correct: false,
      },
      {
        answer_text: "Cancer patients should not seek financial assistance",
        is_correct: false,
      },
      {
        answer_text:
          "Cancer organizations and support groups provide resources and guidance for addressing financial challenges during the cancer journey",
        is_correct: true,
      },
      {
        answer_text: "Financial challenges do not affect cancer patients",
        is_correct: false,
      },
    ],
  },
];

const arthritisAwarenessAndSupportAnswers = [
  {
    question_id: 145,
    answers: [
      { answer_text: "Young children", is_correct: false },
      { answer_text: "Teenagers", is_correct: false },
      { answer_text: "Pregnant women", is_correct: false },
      { answer_text: "Older adults", is_correct: true },
    ],
  },
  {
    question_id: 146,
    answers: [
      { answer_text: "Vision problems", is_correct: false },
      { answer_text: "Joint pain and stiffness", is_correct: true },
      { answer_text: "Cough and shortness of breath", is_correct: false },
      { answer_text: "Fever and chills", is_correct: false },
    ],
  },
  {
    question_id: 147,
    answers: [
      { answer_text: "Avoid all physical activity", is_correct: false },
      {
        answer_text: "Engage in regular exercise and joint-friendly activities",
        is_correct: true,
      },
      {
        answer_text: "Consume excessive amounts of sugary foods",
        is_correct: false,
      },
      {
        answer_text: "Isolate themselves from social interactions",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 148,
    answers: [
      {
        answer_text: "Physical activity worsens arthritis symptoms",
        is_correct: false,
      },
      {
        answer_text: "Physical activity has no impact on arthritis",
        is_correct: false,
      },
      {
        answer_text:
          "Regular physical activity helps maintain joint flexibility and reduces pain",
        is_correct: true,
      },
      {
        answer_text:
          "Physical activity is not recommended for individuals with arthritis",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 149,
    answers: [
      {
        answer_text: "A balanced diet has no impact on arthritis prevention",
        is_correct: false,
      },
      {
        answer_text:
          "A high-sugar diet is recommended for arthritis prevention",
        is_correct: false,
      },
      {
        answer_text:
          "A balanced diet supports joint health and can help reduce inflammation",
        is_correct: true,
      },
      {
        answer_text: "Eating only processed foods prevents arthritis",
        is_correct: false,
      },
    ],
  },
  {
    question_id: 150,
    answers: [
      { answer_text: "Provide unsolicited advice", is_correct: false },
      { answer_text: "Encourage isolation", is_correct: false },
      { answer_text: "Avoid any mention of arthritis", is_correct: false },
      { answer_text: "Listen and offer emotional support", is_correct: true },
    ],
  },
  {
    question_id: 151,
    answers: [
      { answer_text: "Genetic factors and joint injuries", is_correct: true },
      {
        answer_text: "High intensity exercise",
        is_correct: false,
      },
      { answer_text: "Lack of sleep", is_correct: false },
      { answer_text: "Overexposure to sunlight", is_correct: false },
    ],
  },
  {
    question_id: 152,
    answers: [
      {
        answer_text: "Medical treatment has no effect on arthritis",
        is_correct: false,
      },
      {
        answer_text: "Medical treatment is the only solution for arthritis",
        is_correct: false,
      },
      {
        answer_text:
          "Medical treatment can help manage symptoms and improve quality of life",
        is_correct: true,
      },
      {
        answer_text: "Medical treatment is not recommended for arthritis",
        is_correct: false,
      },
    ],
  },
];

const cysticFibrosisAwarenessAndSupportAnswers = [
  {
    question_id: 153,
    answers: [
      { answer_text: "A skin condition", is_correct: false },
      { answer_text: "A type of diabetes", is_correct: false },
      {
        answer_text:
          "A genetic disorder affecting the respiratory and digestive systems",
        is_correct: true,
      },
      { answer_text: "A heart condition", is_correct: false },
    ],
  },
  {
    question_id: 154,
    answers: [
      { answer_text: "Fatigue", is_correct: false },
      { answer_text: "Fever", is_correct: false },
      { answer_text: "Persistent cough and lung infections", is_correct: true },
      { answer_text: "Headache", is_correct: false },
    ],
  },
  {
    question_id: 155,
    answers: [
      {
        answer_text: "Only through exposure to contaminated water",
        is_correct: false,
      },
      {
        answer_text: "Through close contact with infected individuals",
        is_correct: false,
      },
      { answer_text: "By consuming contaminated food", is_correct: false },
      {
        answer_text:
          "Through inheriting two faulty CFTR genes, one from each parent",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 156,
    answers: [
      {
        answer_text:
          "Helps improve lung function and clear mucus from the airways",
        is_correct: true,
      },
      {
        answer_text: "It has no role in managing Cystic Fibrosis",
        is_correct: false,
      },
      { answer_text: "It can cure Cystic Fibrosis", is_correct: false },
      { answer_text: "It is only for relaxation purposes", is_correct: false },
    ],
  },
  {
    question_id: 157,
    answers: [
      {
        answer_text: "A balanced diet has no impact on Cystic Fibrosis",
        is_correct: false,
      },
      {
        answer_text:
          "A high-sugar diet is recommended for individuals with Cystic Fibrosis",
        is_correct: false,
      },
      {
        answer_text:
          "Eating only processed foods is recommended for individuals with Cystic Fibrosis",
        is_correct: false,
      },
      {
        answer_text:
          "A balanced diet supports overall health and provides essential nutrients for energy and growth",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 158,
    answers: [
      {
        answer_text: "Minimize communication to avoid stress",
        is_correct: false,
      },
      {
        answer_text: "Avoid discussing Cystic Fibrosis to prevent anxiety",
        is_correct: false,
      },
      {
        answer_text: "Provide constant medical advice without being asked",
        is_correct: false,
      },
      {
        answer_text:
          "Listen, offer understanding, and create a supportive environment",
        is_correct: true,
      },
    ],
  },
  {
    question_id: 159,
    answers: [
      {
        answer_text: "Genetic factors and environmental triggers",
        is_correct: true,
      },
      {
        answer_text: "Excessive consumption of dairy products",
        is_correct: false,
      },
      { answer_text: "Lack of sleep", is_correct: false },
      { answer_text: "Overexposure to sunlight", is_correct: false },
    ],
  },
  {
    question_id: 160,
    answers: [
      {
        answer_text:
          "Regular medical check-ups are unnecessary for individuals with Cystic Fibrosis",
        is_correct: false,
      },
      {
        answer_text: "Medical check-ups are only for unrelated health issues",
        is_correct: false,
      },
      {
        answer_text:
          "Regular medical check-ups help monitor lung function and adjust treatment plans",
        is_correct: true,
      },
      {
        answer_text:
          "Medical check-ups are only relevant for weight management",
        is_correct: false,
      },
    ],
  },
];

const answersData = [
  essentialNutritionFactsAnswers,
  healthyEatingHabitsAnswers,
  exerciseFundamentalsAnswers,
  cardiovascularFitnessInsightsAnswers,
  sleepScienceAnswers,
  restfulTechniquesAnswers,
  heartHealthFundamentalsAnswers,
  heartWiseLivingAnswers,
  diabetesInsightsAnswers,
  diabetesLifestyleAndManagementAnswers,
  mentalHealthAwarenessAndSupportAnswers,
  mentalHealthResilienceAndCopingAnswers,
  hypertensionAwarenessAndManagementAnswers,
  hypertensionPreventionAndLifestyleAnswers,
  respiratoryConditionsAwarenessAndManagementAnswers,
  respiratoryConditionsPreventionAndSupportAnswers,
  cancerAwarenessAndPreventionAnswers,
  livingWithCancerAndSupportAnswers,
  arthritisAwarenessAndSupportAnswers,
  cysticFibrosisAwarenessAndSupportAnswers,
];

export default answersData;
