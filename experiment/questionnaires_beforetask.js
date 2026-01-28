// De Jong - Loneliness ================================================

const items_dejong = {
    DeJong_SocialLoneliness_1: "There is always someone I can talk to about my day-to-day problems",
    DeJong_EmotionalLoneliness_2: "I miss having a really close friend",
    DeJong_EmotionalLoneliness_3: "I experience a general sense of emptiness",
    DeJong_SocialLoneliness_4: "There are plenty of people I can lean on when I have problems",
    DeJong_EmotionalLoneliness_5: "I miss the pleasure of the company of others",
    DeJong_EmotionalLoneliness_6: "I find my circle of friends and acquaintances too limited",
    DeJong_SocialLoneliness_7: "There are many people I can trust completely",
    DeJong_SocialLoneliness_8: "There are enough people I feel close to",
    DeJong_EmotionalLoneliness_9: "I miss having people around me",
    DeJong_EmotionalLoneliness_10: "I often feel rejected",
    DeJong_SocialLoneliness_11: "I can call on my friends whenever I need them",
}

function make_dejong(items, required = true) {
    items = shuffleObject(items)

    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            rateValues: [
                {
                    value: 0,
                    text: "None of the time",
                },
                {
                    value: 0.5,
                    text: "Rarely",
                },
                {
                    value: 1,
                    text: "Some of the time",
                },
                {
                    value: 2,
                    text: "Often",
                },
                {
                    value: 3,
                    text: "All of the time",
                },
            ],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_dejong = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About how you feel",
            description:
                "Consider how you feel now. For each of the statements, please indicate the extent to which they apply to your situation.",
            showQuestionNumbers: false,
            goNextPageAutomatic: false,
            pages: make_dejong(items_dejong),
        }
    },
    data: {
        screen: "questionnaire_dejong",
    },
}

// UCLA - Loneliness ================================================

const items_ucla = {
    UCLA_1: "I am unhappy doing so many things alone",
    UCLA_2: "I have nobody to talk to",
    UCLA_3: "I cannot tolerate being so alone",
    UCLA_4: "I lack companionship",
    UCLA_5: "I feel as if nobody really understands me",
    UCLA_6: "I find myself waiting for people to call or write",
    UCLA_7: "There is no one I can turn to",
    UCLA_8: "I am no longer close to anyone",
    UCLA_9: "My interest and ideas are not shared by those around me",
    UCLA_10: "I feel left out",
    UCLA_11: "I feel completely alone",
    UCLA_12: "I am unable to reach out and communicate with those around me",
    UCLA_13: "My social relationships are superficial",
    UCLA_14: "I feel starved for company",
    UCLA_15: "No one really knows me well",
    UCLA_16: "I feel isolated from others",
    UCLA_17: "I am unhappy being so withdrawn",
    UCLA_18: "It is difficult for me to make friends",
    UCLA_19: "I feel shut out and excluded by others",
    UCLA_20: "People are around me but not with me",
}

function make_ucla(items, required = true) {
    items = shuffleObject(items)

    questions = []

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            rateValues: [
                {
                    value: 0,
                    text: "I never feel this way",
                },
                {
                    value: 1,
                    text: "I rarely feel this way",
                },
                {
                    value: 2,
                    text: "I sometimes feel this way",
                },
                {
                    value: 3,
                    text: "I often feel this way",
                },
            ],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_ucla = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About how you feel",
            description:
                "Please indicate how often each of the statements below is descriptive of you",
            showQuestionNumbers: false,
            goNextPageAutomatic: false,
            pages: make_ucla(items_ucla),
        }
    },
    data: {
        screen: "questionnaire_ucla",
    },
}

// Psychiatric Disorders ================================================
const questionnaire_mentalhealth = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Mental health",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        // showProgressBar: "aboveHeader",
        pages: [
            {
                elements: [
                    {
                        title: "Are you currently living with any of the following medically diagnosed difficulties?",
                        name: "Disorders_Psychiatric",
                        type: "checkbox",
                        choices: [
                            "Addiction (e.g., Alcohol, Drugs, Gambling, ...)",
                            "Attention Deficit Hyperactivity Disorder (ADHD)",
                            "Autism",
                            "Bipolar Disorder",
                            "Borderline Personality Disorder (BPD)",
                            "Generalized Anxiety Disorder (GAD)",
                            "Major Depressive Disorder (MDD)",
                            "Obsessive-Compulsive Disorder (OCD)",
                            "Panic Disorder",
                            "Post-Traumatic Stress Disorder (PTSD)",
                            "Schizophrenia",
                            "Social Anxiety Disorder (Social Phobia)",
                            "Specific Phobias",
                            "Eating Disorders (e.g., Anorexia, Bulimia, ...)",
                            // "Dysthymia (Persistent Depressive Disorder)",
                            // "Seasonal Affective Disorder (SAD)",
                            // "Premenstrual Dysphoric Disorder (PMDD)",
                            // "Substance/Medication-Induced Mood Disorder",
                            // "Mood Disorder Due to a General Medical Condition",
                            // "Disruptive Mood Dysregulation Disorder",
                            // "Adjustment Disorder with Depressed Mood",
                            // "Agoraphobia",
                            // "Separation Anxiety Disorder",
                            // "Selective Mutism",
                            // "Acute Stress Disorder",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        visibleIf: "{Disorders_Psychiatric} notempty and {Disorders_Psychiatric} notcontains 'None'",
                        title: "Are you currently undergoing any of the following treatments",
                        name: "Disorders_PsychiatricTreatment",
                        type: "checkbox",
                        choices: [
                            "Antidepressant Medication (e.g., PROZAC, ZOLOFT, EFFEXOR...)",
                            "Anxiolytic Medication (e.g., XANAX, VALIUM, ...)",
                            "Psychotherapy/Counselling (e.g., CBT, ACT, ...)",
                            "Mood Stabilizers (e.g., LITHIUM, LAMICTAL, ...)",
                            "Antipsychotic Medication (e.g., RISPERDAL, SEROQUEL, ...)",
                            // "Electroconvulsive Therapy (ECT)",
                            // "Transcranial Magnetic Stimulation (TMS)",
                            "Lifestyle Changes (e.g., diet, exercise, ...)",
                            "Mindfulness and Stress Management Techniques",
                            "Alternative Therapies (e.g., acupuncture, herbal remedies, ...)",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "questionnaire_mentalhealth",
    },
}

// Psychosomatic disorders ===================================================
const questionnaire_somatichealth = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Medical and somatic difficulties",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        // showProgressBar: "aboveHeader",
        pages: [
            {
                elements: [
                    {
                        name: "Disorders_Somatic_Instructions",
                        html: "Are you currently living with any of the following medically diagnosed conditions?",
                        type: "html",
                    },
                    {
                        title: "Musculoskeletal and pain",
                        name: "Disorders_Somatic_Musculoskeletal",
                        type: "checkbox",
                        choices: [
                            "Hypermobility Syndrome (e.g., Ehlers-Danlos Syndrome)",
                            "Fibromyalgia",
                            "Chronic Fatigue Syndrome",
                            "Chronic Pain Syndrome",
                            "Back Pain",
                            "Muscle Tension",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Dermatological and skin",
                        name: "Disorders_Somatic_Dermatological",
                        type: "checkbox",
                        choices: ["Skin Rashes", "Eczema", "Psoriasis", "Sjogren's Syndrome"],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Cardiovascular",
                        name: "Disorders_Somatic_Cardiovascular",
                        type: "checkbox",
                        choices: [
                            "Chest Pain",
                            "Cardiac Arrhythmia (palpitations)",
                            "Hypertension (High Blood Pressure)",
                            "Hypotension (Low Blood Pressure)",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Gastrointestinal",
                        name: "Disorders_Somatic_Gastrointestinal",
                        type: "checkbox",
                        choices: [
                            "Irritable Bowel Syndrome (IBS)",
                            "Gastroesophageal Reflux Disease (GERD)",
                            "Crohn's Disease",
                            "Ulcerative Colitis",
                            "Celiac Disease",
                            "Gluten Intolerance",
                            "Lactose Intolerance",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Respiratory",
                        name: "Disorders_Somatic_Respiratory",
                        type: "checkbox",
                        choices: [
                            "Shortness of Breath",
                            "Asthma",
                            "Chronic Obstructive Pulmonary Disease (COPD)",
                            "Sleep Apnea",
                            "Chronic Bronchitis",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Neurological",
                        name: "Disorders_Somatic_Neurological",
                        type: "checkbox",
                        choices: [
                            "Nausea/Vomiting",
                            "Dizziness/Lightheadedness",
                            "Migraine",
                            "Neuropathy",
                            "Epilepsy",
                            "Multiple Sclerosis (MS)",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        title: "Genitourinary",
                        name: "Disorders_Somatic_Genitourinary",
                        type: "checkbox",
                        choices: ["Frequent Urination", "Endometriosis", "Interstitial Cystitis", "Chronic Pelvic Pain Syndrome"],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        showNoneItem: true,
                        isRequired: true,
                        colCount: 1,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "questionnaire_somatichealth",
    },
}


// PHQ-4 ================================================
// + Single Item Life Satisfaction scale (SILS)

const items_phq4 = {
    PHQ4_Anxiety_1: "Feeling nervous, anxious or on edge",
    PHQ4_Anxiety_2: "Not being able to stop or control worrying",
    PHQ4_Depression_3: "Feeling down, depressed, or hopeless",
    PHQ4_Depression_4: "Little interest or pleasure in doing things",
}

const instructions_phq4 = {
    type: "html",
    name: "instructions_phq4",
    html: "<p>Over the <b>last 2 weeks</b>, how often have you been bothered by the following problems?</p>",
}

function make_phq4(items, required = true) {
    items = shuffleObject(items)
    questions = [instructions_phq4]

    // Make questions
    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            isRequired: required,
            rateValues: [
                {
                    value: 0,
                    text: "Not at all",
                },
                {
                    value: 0.5,
                    text: "Once or twice",
                },
                {
                    value: 1,
                    text: "Several days",
                },
                {
                    value: 2,
                    text: "More than half the days",
                },
                {
                    value: 3,
                    text: "Nearly every day",
                },
            ],
        }
        questions.push(q)
    }

    return { elements: questions }
}

const questionnaire_phq4 = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            title: "About your mood",
            showQuestionNumbers: false,
            goNextPageAutomatic: false,
            pages: [
                {
                    elements: [
                        {
                            title: "All things considered, how satisfied are you with your life as a whole?",
                            name: "LifeSatisfaction",
                            type: "rating",
                            displayMode: "buttons",
                            rateCount: 11,
                            rateMin: 0,
                            rateMax: 10,
                            minRateDescription: "No satisfaction at all",
                            maxRateDescription: "Completely satisfied",
                            isRequired: true,
                        },
                    ],
                },
                make_phq4(items_phq4),
            ],
        }
    },
    data: {
        screen: "questionnaire_phq4",
    },
}