"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const essentialNutritionFactsQuestions = [
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "Which nutrient is the body's primary source of energy?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What are the three main categories of macronutrients?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the recommended daily water intake for adults?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "Which vitamin is known as the 'sunshine vitamin'?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the role of fiber in the diet?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "Which nutrient is important for building and repairing tissues?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the term for the amount of energy needed to maintain basic bodily functions at rest?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the process by which the body breaks down food and absorbs nutrients?",
    },
];
const healthyEatingHabitsQuestions = [
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What does the term 'portion control' refer to?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is the concept of 'mindful eating'?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is the purpose of reading food labels?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "Which food group is a good source of lean protein?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is a balanced plate approach to eating?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is the importance of eating a variety of colorful fruits and vegetables?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What are some strategies for reducing added sugar in the diet?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "Why is it important to listen to your body's hunger and fullness cues?",
    },
];
const exerciseFundamentalsQuestions = [
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the recommended amount of aerobic exercise per week for adults?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "Walking is an example of what type of exercise?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the term for the gradual increase in exercise intensity and duration?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What are the benefits of strength training?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "Which exercise is known for its cardiovascular benefits?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the recommended frequency of resistance training per week?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the term for the gradual decrease in exercise intensity and duration?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the concept of 'active rest' during exercise?",
    },
];
const cardiovascularFitnessInsightsQuestions = [
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the recommended frequency of moderate-intensity aerobic exercise per week for adults?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "Which type of exercise is most effective for improving cardiovascular health?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the target heart rate range for moderate-intensity aerobic exercise?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "Which aerobic exercise involves alternating between short bursts of intense activity and periods of rest?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the 'talk test' during exercise?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the primary function of the cardiovascular system?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the term for the maximum amount of oxygen your body can use during intense exercise?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the recommended cool-down period after vigorous aerobic exercise?",
    },
];
const sleepScienceQuestions = [
    {
        quiz_name: "Sleep Science",
        question_text: "What is the term for the natural, internal body clock that regulates sleep-wake cycles?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "Which stage of sleep is characterized by rapid eye movement (REM) and vivid dreams?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is sleep apnea?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "How does blue light exposure from electronic devices affect sleep?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is the recommended amount of sleep for adults on average?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is the term for the feeling of grogginess and disorientation upon waking from a nap?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What are some common tips for improving sleep hygiene?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is insomnia?",
    },
];
const restfulTechniquesQuestions = [
    {
        quiz_name: "Restful Techniques",
        question_text: "What is mindfulness meditation?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is white noise?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is the purpose of a sleep mask?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is progressive muscle relaxation?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is a common herbal remedy used to promote sleep?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is the '10-3-2-1-0' sleep technique?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "How can establishing a bedtime routine contribute to better sleep?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is the purpose of a weighted blanket?",
    },
];
const heartHealthFundamentalsQuestions = [
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the primary function of the heart?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "Which chamber of the heart receives oxygen-rich blood from the lungs?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is atherosclerosis?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is a normal resting heart rate for adults?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the leading cause of death worldwide?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the name of the major blood vessels that carry oxygenated blood away from the heart?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is hypertension?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the purpose of cholesterol in the body?",
    },
];
const heartWiseLivingQuestions = [
    {
        quiz_name: "Heartwise Living",
        question_text: "What is a heart-healthy diet?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What is the role of physical activity in heart health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What are some common risk factors for heart disease?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "Which type of fats are generally considered heart-healthy?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What is the benefit of consuming foods high in antioxidants for heart health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "How does regular exercise contribute to cardiovascular health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What is the recommended daily sodium intake for adults to promote heart health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "How does stress impact cardiovascular health?",
    },
];
const diabetesInsightsQuestions = [
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is diabetes mellitus?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "Which type of diabetes is characterized by insulin resistance and is often associated with lifestyle factors?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "How can type 2 diabetes be prevented or delayed?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is the recommended A1C level for individuals with diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What role does physical activity play in managing diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "How can family and friends support someone living with diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is the purpose of blood glucose monitoring for individuals with diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is diabetic ketoacidosis (DKA) and when can it occur?",
    },
];
const diabetesLifestyleAndManagementQuestions = [
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the primary goal of diabetes management?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the role of carbohydrates in blood sugar control?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "How can portion control aid in diabetes management?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What are hypoglycemia and hyperglycemia?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "Why is regular eye examination important for people with diabetes?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the role of medication or insulin in diabetes management?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "How can stress affect blood sugar levels?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the importance of creating a diabetes-friendly exercise routine?",
    },
];
const mentalHealthAwarenessAndSupportQuestions = [
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What is mental health?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What are common misconceptions about mental health?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "How can stigma impact individuals with mental health challenges?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What are some signs that someone may be struggling with their mental health?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "How can you provide support to a friend or loved one experiencing a mental health crisis?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What is self-care, and why is it important for mental well-being?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "How can you promote mental health awareness in your community?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What are some effective ways to cope with stress and anxiety?",
    },
];
const mentalHealthResilienceAndCopingQuestions = [
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What is mental resilience?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "How does practicing mindfulness contribute to mental well-being?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What role does social support play in maintaining good mental health?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What are healthy ways to manage stress and prevent burnout?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "How can setting realistic goals positively impact mental well-being?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What is the connection between physical activity and mental health?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "How can creative expression contribute to managing emotions and stress?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What are healthy sleep habits and their impact on mental well-being?",
    },
];
const hypertensionAwarenessAndManagementQuestions = [
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What is Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What are the risk factors for developing Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "How can dietary changes help prevent or manage Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What is the impact of physical activity on Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "Why is stress management important for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What are some potential complications of uncontrolled Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "How can medication be used in the management of Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What role does regular blood pressure monitoring play in Hypertension management?",
    },
];
const hypertensionPreventionAndLifestyleQuestions = [
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "How can reducing sodium intake contribute to Hypertension prevention?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What are DASH and Mediterranean diets, and how do they benefit individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What is the importance of maintaining a healthy weight for Hypertension management?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "How does reducing alcohol consumption contribute to Hypertension prevention?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What types of physical activity are beneficial for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What are some effective stress management techniques for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "Why is medication adherence important for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "How can social support contribute to the well-being of individuals with Hypertension?",
    },
];
const respiratoryConditionsAwarenessAndManagementQuestions = [
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What are some common symptoms of Asthma?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What is the primary cause of COPD?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "How can environmental triggers contribute to respiratory symptoms?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What are some key strategies to help manage Asthma and COPD symptoms?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "Why is smoking cessation important for individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "How can indoor air quality be improved to benefit individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What role does regular physical activity play in managing respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "How can individuals with respiratory conditions benefit from an action plan?",
    },
];
const respiratoryConditionsPreventionAndSupportQuestions = [
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How can air quality at home be improved to benefit individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "What are the potential triggers that can worsen Asthma or COPD symptoms?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How does proper inhaler technique contribute to effective management of respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "What role does regular medical check-ups play in supporting individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How can emotional support from family and friends positively impact individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "What are some relaxation techniques that can help manage stress and improve respiratory health?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "Why is it important for individuals with respiratory conditions to have an emergency action plan?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How can smoking exposure in childhood contribute to respiratory conditions in adulthood?",
    },
];
const cancerAwarenessAndPreventionQuestions = [
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What is a common method for early detection of breast cancer?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "Which of the following is a known preventive measure for reducing the risk of developing skin cancer?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "How can a healthy diet contribute to cancer prevention?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What is the primary goal of cancer screening programs?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "Why is it important to protect your skin from the sun?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What are some lifestyle modifications that can help reduce the risk of cancer?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What role does physical activity play in cancer prevention?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "How does smoking contribute to cancer development?",
    },
];
const livingWithCancerAndSupportQuestions = [
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "How can a support network contribute to the well-being of someone with cancer?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What is an essential component of emotional support for cancer patients?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What role can mindfulness and relaxation techniques play in the cancer journey?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "Why is open communication important between cancer patients and their healthcare team?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "How can caregivers and loved ones provide meaningful support to cancer patients?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What is survivorship care, and why is it important?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What is the significance of managing stress during the cancer journey?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What resources are available to help cancer patients address financial challenges?",
    },
];
const arthritisAwarenessAndSupportQuestions = [
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "Which of the following groups of people are more likely to develop arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What are some common symptoms of arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What can individuals do to manage and alleviate arthritis symptoms?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What role does physical activity play in arthritis management?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "How can a balanced diet contribute to arthritis prevention?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What are some ways to provide emotional support to someone living with arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What causes arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What is the role of medical treatment in managing arthritis?",
    },
];
const cysticFibrosisAwarenessAndSupportQuestions = [
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What is Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What is the most common symptom of Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "How is Cystic Fibrosis caused?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What role does specialized respiratory therapy play in managing Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "How can a balanced diet contribute to supporting individuals with Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What are some ways to provide emotional support to someone living with Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What causes Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What is the importance of regular medical check-ups for individuals with Cystic Fibrosis?",
    },
];
const questionsData = [
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "Which nutrient is the body's primary source of energy?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What are the three main categories of macronutrients?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the recommended daily water intake for adults?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "Which vitamin is known as the 'sunshine vitamin'?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the role of fiber in the diet?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "Which nutrient is important for building and repairing tissues?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the term for the amount of energy needed to maintain basic bodily functions at rest?",
    },
    {
        quiz_name: "Essential Nutrition Facts",
        question_text: "What is the process by which the body breaks down food and absorbs nutrients?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What does the term 'portion control' refer to?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is the concept of 'mindful eating'?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is the purpose of reading food labels?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "Which food group is a good source of lean protein?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is a balanced plate approach to eating?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What is the importance of eating a variety of colorful fruits and vegetables?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "What are some strategies for reducing added sugar in the diet?",
    },
    {
        quiz_name: "Healthy Eating Habits",
        question_text: "Why is it important to listen to your body's hunger and fullness cues?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the recommended amount of aerobic exercise per week for adults?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "Walking is an example of what type of exercise?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the term for the gradual increase in exercise intensity and duration?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What are the benefits of strength training?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "Which exercise is known for its cardiovascular benefits?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the recommended frequency of resistance training per week?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the term for the gradual decrease in exercise intensity and duration?",
    },
    {
        quiz_name: "Exercise Fundamentals",
        question_text: "What is the concept of 'active rest' during exercise?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the recommended frequency of moderate-intensity aerobic exercise per week for adults?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "Which type of exercise is most effective for improving cardiovascular health?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the target heart rate range for moderate-intensity aerobic exercise?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "Which aerobic exercise involves alternating between short bursts of intense activity and periods of rest?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the 'talk test' during exercise?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the primary function of the cardiovascular system?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the term for the maximum amount of oxygen your body can use during intense exercise?",
    },
    {
        quiz_name: "Cardiovascular Fitness Insights",
        question_text: "What is the recommended cool-down period after vigorous aerobic exercise?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is the term for the natural, internal body clock that regulates sleep-wake cycles?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "Which stage of sleep is characterized by rapid eye movement (REM) and vivid dreams?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is sleep apnea?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "How does blue light exposure from electronic devices affect sleep?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is the recommended amount of sleep for adults on average?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is the term for the feeling of grogginess and disorientation upon waking from a nap?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What are some common tips for improving sleep hygiene?",
    },
    {
        quiz_name: "Sleep Science",
        question_text: "What is insomnia?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is mindfulness meditation?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is white noise?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is the purpose of a sleep mask?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is progressive muscle relaxation?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is a common herbal remedy used to promote sleep?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is the '10-3-2-1-0' sleep technique?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "How can establishing a bedtime routine contribute to better sleep?",
    },
    {
        quiz_name: "Restful Techniques",
        question_text: "What is the purpose of a weighted blanket?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the primary function of the heart?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "Which chamber of the heart receives oxygen-rich blood from the lungs?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is atherosclerosis?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is a normal resting heart rate for adults?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the leading cause of death worldwide?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the name of the major blood vessels that carry oxygenated blood away from the heart?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is hypertension?",
    },
    {
        quiz_name: "Heart Health Fundamentals",
        question_text: "What is the purpose of cholesterol in the body?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What is a heart-healthy diet?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What is the role of physical activity in heart health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What are some common risk factors for heart disease?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "Which type of fats are generally considered heart-healthy?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What is the benefit of consuming foods high in antioxidants for heart health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "How does regular exercise contribute to cardiovascular health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "What is the recommended daily sodium intake for adults to promote heart health?",
    },
    {
        quiz_name: "Heartwise Living",
        question_text: "How does stress impact cardiovascular health?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is diabetes mellitus?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "Which type of diabetes is characterized by insulin resistance and is often associated with lifestyle factors?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "How can type 2 diabetes be prevented or delayed?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is the recommended A1C level for individuals with diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What role does physical activity play in managing diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "How can family and friends support someone living with diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is the purpose of blood glucose monitoring for individuals with diabetes?",
    },
    {
        quiz_name: "Diabetes Insights",
        question_text: "What is diabetic ketoacidosis (DKA) and when can it occur?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the primary goal of diabetes management?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the role of carbohydrates in blood sugar control?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "How can portion control aid in diabetes management?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What are hypoglycemia and hyperglycemia?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "Why is regular eye examination important for people with diabetes?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the role of medication or insulin in diabetes management?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "How can stress affect blood sugar levels?",
    },
    {
        quiz_name: "Diabetes Lifestyle and Management",
        question_text: "What is the importance of creating a diabetes-friendly exercise routine?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What is mental health?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What are common misconceptions about mental health?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "How can stigma impact individuals with mental health challenges?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What are some signs that someone may be struggling with their mental health?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "How can you provide support to a friend or loved one experiencing a mental health crisis?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What is self-care, and why is it important for mental well-being?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "How can you promote mental health awareness in your community?",
    },
    {
        quiz_name: "Mental Health Awareness and Support",
        question_text: "What are some effective ways to cope with stress and anxiety?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What is mental resilience?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "How does practicing mindfulness contribute to mental well-being?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What role does social support play in maintaining good mental health?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What are healthy ways to manage stress and prevent burnout?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "How can setting realistic goals positively impact mental well-being?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What is the connection between physical activity and mental health?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "How can creative expression contribute to managing emotions and stress?",
    },
    {
        quiz_name: "Mental Health Resilience and Coping",
        question_text: "What are healthy sleep habits and their impact on mental well-being?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What is Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What are the risk factors for developing Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "How can dietary changes help prevent or manage Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What is the impact of physical activity on Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "Why is stress management important for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What are some potential complications of uncontrolled Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "How can medication be used in the management of Hypertension?",
    },
    {
        quiz_name: "Hypertension Awareness and Management",
        question_text: "What role does regular blood pressure monitoring play in Hypertension management?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "How can reducing sodium intake contribute to Hypertension prevention?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What are DASH and Mediterranean diets, and how do they benefit individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What is the importance of maintaining a healthy weight for Hypertension management?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "How does reducing alcohol consumption contribute to Hypertension prevention?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What types of physical activity are beneficial for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "What are some effective stress management techniques for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "Why is medication adherence important for individuals with Hypertension?",
    },
    {
        quiz_name: "Hypertension Prevention and Lifestyle",
        question_text: "How can social support contribute to the well-being of individuals with Hypertension?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What are some common symptoms of Asthma?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What is the primary cause of COPD?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "How can environmental triggers contribute to respiratory symptoms?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What are some key strategies to help manage Asthma and COPD symptoms?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "Why is smoking cessation important for individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "How can indoor air quality be improved to benefit individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "What role does regular physical activity play in managing respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Awareness and Management",
        question_text: "How can individuals with respiratory conditions benefit from an action plan?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How can air quality at home be improved to benefit individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "What are the potential triggers that can worsen Asthma or COPD symptoms?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How does proper inhaler technique contribute to effective management of respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "What role does regular medical check-ups play in supporting individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How can emotional support from family and friends positively impact individuals with respiratory conditions?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "What are some relaxation techniques that can help manage stress and improve respiratory health?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "Why is it important for individuals with respiratory conditions to have an emergency action plan?",
    },
    {
        quiz_name: "Respiratory Conditions Prevention and Support",
        question_text: "How can smoking exposure in childhood contribute to respiratory conditions in adulthood?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What is a common method for early detection of breast cancer?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "Which of the following is a known preventive measure for reducing the risk of developing skin cancer?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "How can a healthy diet contribute to cancer prevention?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What is the primary goal of cancer screening programs?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "Why is it important to protect your skin from the sun?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What are some lifestyle modifications that can help reduce the risk of cancer?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "What role does physical activity play in cancer prevention?",
    },
    {
        quiz_name: "Cancer Awareness and Prevention",
        question_text: "How does smoking contribute to cancer development?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "How can a support network contribute to the well-being of someone with cancer?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What is an essential component of emotional support for cancer patients?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What role can mindfulness and relaxation techniques play in the cancer journey?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "Why is open communication important between cancer patients and their healthcare team?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "How can caregivers and loved ones provide meaningful support to cancer patients?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What is survivorship care, and why is it important?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What is the significance of managing stress during the cancer journey?",
    },
    {
        quiz_name: "Living with Cancer and Support",
        question_text: "What resources are available to help cancer patients address financial challenges?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "Which of the following groups of people are more likely to develop arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What are some common symptoms of arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What can individuals do to manage and alleviate arthritis symptoms?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What role does physical activity play in arthritis management?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "How can a balanced diet contribute to arthritis prevention?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What are some ways to provide emotional support to someone living with arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What causes arthritis?",
    },
    {
        quiz_name: "Arthritis Awareness and Support",
        question_text: "What is the role of medical treatment in managing arthritis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What is Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What is the most common symptom of Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "How is Cystic Fibrosis caused?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What role does specialized respiratory therapy play in managing Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "How can a balanced diet contribute to supporting individuals with Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What are some ways to provide emotional support to someone living with Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What causes Cystic Fibrosis?",
    },
    {
        quiz_name: "Cystic Fibrosis Awareness and Support",
        question_text: "What is the importance of regular medical check-ups for individuals with Cystic Fibrosis?",
    },
];
exports.default = questionsData;
