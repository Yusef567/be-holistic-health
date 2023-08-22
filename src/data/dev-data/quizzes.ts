const quizData = [
  {
    quiz_name: "Essential Nutrition Facts",
    category: "Nutrition and Diet",
    quiz_img:
      "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge of nutrition and diet basics with this informative quiz. From macronutrients to healthy eating habits, this quiz covers essential topics for a balanced lifestyle.",
    username: "David",
  },
  {
    quiz_name: "Healthy Eating Habits",
    category: "Nutrition and Diet",
    quiz_img:
      "https://images.pexels.com/photos/6969266/pexels-photo-6969266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge of healthy eating habits with this quiz. From portion control to mindful eating, this quiz covers essential strategies for maintaining a nutritious diet.",
    username: "David",
  },
  {
    quiz_name: "Exercise Fundamentals",
    category: "Exercise and Physical Activity",
    quiz_img:
      "https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-balls-39671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge of exercise basics and physical activity with this informative quiz. From different types of exercises to their benefits, this quiz covers essential concepts for a healthy lifestyle.",
    username: "David",
  },
  {
    quiz_name: "Cardiovascular Fitness Insights",
    category: "Exercise and Physical Activity",
    quiz_img:
      "https://images.pexels.com/photos/176903/pexels-photo-176903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge of cardiovascular health and fitness with this informative quiz. From heart health to aerobic exercises, this quiz covers essential concepts for a strong cardiovascular system.",
    username: "David",
  },
  {
    quiz_name: "Sleep Science",
    category: "Sleep and Rest",
    quiz_img:
      "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge of sleep science and its importance for overall well-being with this informative quiz. From sleep cycles to sleep disorders, this quiz covers essential concepts for a good night's rest.",
    username: "Joe",
  },
  {
    quiz_name: "Restful Techniques",
    category: "Sleep and Rest",
    quiz_img:
      "https://images.pexels.com/photos/140079/pexels-photo-140079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Explore effective restful techniques and strategies for better sleep and relaxation with this informative quiz. From mindfulness to sleep aids, this quiz covers essential concepts for achieving restful nights.",
    username: "Joe",
  },
  {
    quiz_name: "Heart Health Fundamentals",
    category: "Heart Health",
    quiz_img:
      "https://images.pexels.com/photos/992816/pexels-photo-992816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge of heart health and its importance for overall well-being with this informative quiz. From heart anatomy to cardiovascular diseases, this quiz covers essential concepts for a healthy heart.",
    username: "Joe",
  },
  {
    quiz_name: "Heartwise Living",
    category: "Heart Health",
    quiz_img:
      "https://images.pexels.com/photos/1172019/pexels-photo-1172019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Explore heart-healthy habits and lifestyle choices for optimal cardiovascular well-being with this informative quiz. From diet to exercise, this quiz covers essential concepts for maintaining a healthy heart.",
    username: "Joe",
  },
  {
    quiz_name: "Diabetes Insights",
    category: "Diabetes",
    quiz_img:
      "https://images.pexels.com/photos/6942007/pexels-photo-6942007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Enhance your knowledge about diabetes, its prevention, and ways to support individuals living with diabetes with this informative quiz. Learn about the importance of awareness, healthy lifestyle choices, and compassionate care.",
    username: "Matt",
  },
  {
    quiz_name: "Diabetes Lifestyle and Management",
    category: "Diabetes",
    quiz_img:
      "https://images.pexels.com/photos/12474259/pexels-photo-12474259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Expand your understanding of diabetes management, healthy habits, and effective strategies for supporting those with diabetes in their daily lives. This quiz covers lifestyle factors and practical approaches for better diabetes control.",
    username: "Matt",
  },
  {
    quiz_name: "Mental Health Awareness and Support",
    category: "Mental Health",
    quiz_img:
      "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Enhance your understanding of mental health, its importance, and effective ways to support individuals dealing with mental health challenges. Explore awareness, stigma reduction, and compassionate care through this informative quiz.",
    username: "Matt",
  },
  {
    quiz_name: "Mental Health Resilience and Coping",
    category: "Mental Health",
    quiz_img:
      "https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Explore strategies for building mental resilience, managing stress, and promoting well-being in this enlightening quiz. Learn effective coping techniques and ways to enhance your mental health and that of others.",
    username: "Matt",
  },
  {
    quiz_name: "Hypertension Awareness and Management",
    category: "Hypertension (High Blood Pressure)",
    quiz_img:
      "https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Enhance your knowledge of Hypertension, its causes, risks, and effective strategies for management. This quiz provides insights into awareness, lifestyle modifications, and supporting individuals living with Hypertension.",
    username: "Joe",
  },
  {
    quiz_name: "Hypertension Prevention and Lifestyle",
    category: "Hypertension (High Blood Pressure)",
    quiz_img:
      "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Explore strategies for preventing Hypertension and making lifestyle changes to manage this condition effectively. This quiz offers insights into nutrition, physical activity, and empowering individuals with Hypertension.",
    username: "Joe",
  },
  {
    quiz_name: "Respiratory Conditions Awareness and Management",
    category: "Respiratory Conditions (Asthma, COPD)",
    quiz_img:
      "https://images.pexels.com/photos/5858855/pexels-photo-5858855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Increase your understanding of common respiratory conditions like Asthma and COPD, including their causes, symptoms, and effective strategies for management. This quiz provides insights into awareness, prevention, and ways to support individuals with respiratory conditions.",
    username: "Matt",
  },
  {
    quiz_name: "Respiratory Conditions Prevention and Support",
    category: "Respiratory Conditions (Asthma, COPD)",
    quiz_img:
      "https://images.pexels.com/photos/775417/pexels-photo-775417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Explore strategies for preventing respiratory conditions and providing effective support for individuals living with Asthma and COPD. This quiz offers insights into lifestyle modifications, self-care, and empowering individuals with respiratory conditions.",
    username: "Matt",
  },
  {
    quiz_name: "Cancer Awareness and Prevention",
    category: "Cancer",
    quiz_img:
      "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Enhance your understanding of cancer awareness, risk factors, and preventive measures. This quiz explores the importance of early detection, lifestyle choices, and promoting overall well-being to reduce cancer risk.",
    username: "David",
  },
  {
    quiz_name: "Living with Cancer and Support",
    category: "Cancer",
    quiz_img:
      "https://images.pexels.com/photos/7088488/pexels-photo-7088488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Explore ways to support and empower individuals living with cancer. This quiz addresses coping strategies, emotional well-being, and the importance of a strong support network in the journey of cancer.",
    username: "David",
  },
  {
    quiz_name: "Arthritis Awareness and Support",
    category: "Other",
    quiz_img:
      "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge about arthritis, a common condition that affects joint health. Learn about awareness and strategies to support individuals living with arthritis.",
    username: "Matt",
  },
  {
    quiz_name: "Cystic Fibrosis Awareness and Support",
    category: "Other",
    quiz_img:
      "https://images.pexels.com/photos/4226124/pexels-photo-4226124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Test your knowledge about Cystic Fibrosis, a genetic disorder affecting the respiratory and digestive systems. Learn about awareness and strategies to support individuals living with Cystic Fibrosis.",
    username: "Matt",
  },
];

export default quizData;
