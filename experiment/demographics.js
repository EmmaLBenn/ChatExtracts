// Consent Form =================================================================

const ConsentForm = {
    type: jsPsychSurvey,
    survey_json: function () {
        // Get URL variables
        let urlvars = jsPsych.data.urlVariables()

        // Logo and title
        let text =
            "<img src='https://blogs.brighton.ac.uk/sussexwrites/files/2019/06/University-of-Sussex-logo-transparent.png' width='150px' align='right'/><br><br><br><br><br>" +
            "<h1>Informed Consent</h1>"

        // Main Text
        text +=
            // Overview
            "<p align='left'><b>Invitation to Take Part</b><br>" +
            "Thank you for considering to take part in this study conducted by Dr Dominique Makowski from the University of Sussex and his team (see contact information below).</p>" +
            // Description
            "<p align='left'><b>Why have I been invited and what will I do?</b><br>" +
            "This study aims to investigate perceptions of social interactions and how these may differ between conversation topic themes. " +
            "The whole experiment will take you <b style='color:#FF5722;'>~25 minutes</b> to complete. Please make you sure that you are <b>attentive and in a quiet environment</b>, and that you have time to complete it in one go.</p>" +
            // Results and personal information
            "<p align='left'><b>What will happen to the results and my personal information?</b><br>" +
            "The results of this research may be written into a scientific publication. Your anonymity will be ensured in the way described in the consent information below. <b>Please read this information carefully</b> and then, if you wish to take part, please acknowledge that you have fully understood this sheet, and that you consent to take part in the study as it is described here.</p>" +
            "<p align='left'><b>Consent</b><br></p>" +
            // Bullet points
            "<li align='left'>I understand that by signing below I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet</li>" +
            "<li align='left'>I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalized in any way (e.g., if I am a student, my decision whether or not to take part will not affect my grades).</li>" +
            "<li align='left'>I understand that since the study is anonymous, it will be impossible to withdraw my data once I have completed it.</li>" +
            "<li align='left'>I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation. I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research.</li>" +
            "<li align='left'>I understand that my collected data will be stored in a de-identified way. De-identified data may be made publicly available through secured scientific online data repositories.</li>"

        // End
        text +=
            "<li align='left'>By participating, you agree to follow the instructions and provide honest answers. If you do not wish to participate or if you don't have the time, simply close your browser.</li></p>" +
            "<p align='left'><br><sub><sup>For further information about this research, or if you have any concerns, please contact Dr Dominique Makowski (<i style='color:DodgerBlue;'>D.Makowski@sussex.ac.uk</i>), Riehana Aziz (<i style='color:DodgerBlue;'>ra549@sussex.ac.uk</i>), and/or Emma Benn (<i style='color:DodgerBlue;'>eb672@sussex.ac.uk</i>). This research has been approved (ER/....) by the Sciences & Technology Cross-Schools Research Ethics Committee (C-REC) (<i style='color:DodgerBlue;'>crecscitec@sussex.ac.uk</i>). The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.</sup></sub></p>"

        // Return Survey
        return {
            showQuestionNumbers: false,
            completeText: "I read, understood, and I consent",
            pages: [
                {
                    elements: [
                        {
                            type: "html",
                            name: "ConsentForm",
                            html: text,
                        },
                    ],
                },
            ],
        }
    },
}

var demographics_browser_info = {
    type: jsPsychBrowserCheck,
    data: {
        screen: "browser_info",
        date: new Date().toLocaleDateString("en-GB"),
        time: new Date().toLocaleTimeString("en-GB"),
    },
    on_finish: function (data) {
        data["participantID"] = participantID

        // Rename
        dat = jsPsych.data.get().filter({ screen: "browser_info" }).values()[0]
        data["screen_height"] = dat["height"]
        data["screen_width"] = dat["width"]

        // Add URL variables - ?sona_id=x&exp=1
        let urlvars = jsPsych.data.urlVariables()
        data["researcher"] = urlvars["exp"]
    },
}

// Demographic questions

var demographic_questions = {
    type: jsPsychSurvey,
    survey_json: {
        title: "About yourself",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        showProgressBar: "aboveHeader",
        pages: [
            {
                elements: [
                    {
                        title: "What is your gender?",
                        name: "Gender",
                        type: "radiogroup",
                        choices: ["Male", "Female", "Other"],
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        type: "text",
                        title: "Please enter your age (in years)",
                        name: "Age",
                        isRequired: true,
                        inputType: "number",
                        min: 18,
                        max: 100,
                        placeholder: "e.g., 21",
                        },
                     ], 
                    },
                 {
        
       

                elements: [
                    {
                        title: "What is your highest completed education level?",
                        name: "Education",
                        type: "radiogroup",
                        choices: [
                            {
                                value: "Doctorate",
                                text: "University (doctorate)",
                            },
                            {
                                value: "Master",
                                text: "University (master)", // "<sub><sup>or equivalent</sup></sub>",
                            },
                            {
                                value: "Bachelor",
                                text: "University (bachelor)", // "<sub><sup>or equivalent</sup></sub>",
                            },
                            {
                                value: "High school",
                                text: "High school / Secondary school (or 6th form college)",
                            },
                            {
                                value: "Elementary school",
                                text: "Elementary school / Primary school",
                            },
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        visibleIf: "{Education} == 'High school' || {Education} == 'Master' || {Education} == 'Bachelor'",
                        title: "Are you currently a student?",
                        name: "Student",
                        type: "boolean",
                        swapOrder: true,
                        isRequired: true,
                    },
                ],
            },
            {
                elements: [
                    {
                        title: "How would you describe your ethnicity?",
                        name: "Ethnicity",
                        type: "radiogroup",
                        choices: [
                            "White",
                            "Black",
                            "Hispanic/Latino",
                            "Middle Eastern/North African",
                            "South Asian",
                            "East Asian",
                            "Southeast Asian",
                            "Mixed",
                            "Prefer not to say",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: false,
                        colCount: 1,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "demographic_questions",
    },
}

// Feedback, Debrief, Thank you Screen
var experiment_feedback = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Feedback",
        description: "It is the end of the experiment! Don't hesitate to leave us a feedback.",
        completeText: "Complete the experiment",
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Feedback_Alert",
                        html: "<p><b style='color:red;'>Answers to these questions will help us to contextualize your answers</b></p>",
                    },
                    {
                        type: "rating",
                        name: "Feedback_Enjoyment",
                        title: "Did you enjoy doing this experiment?",
                        isRequired: false,
                        rateMin: 0,
                        rateMax: 4,
                        rateType: "stars",
                    },
                    {
                        type: "rating",
                        name: "Feedback_Quality",
                        title: "To what extent did you do the experiment carefully and thoroughly?",
                        description: "Please be honest!",
                        isRequired: false,
                        rateMin: 0,
                        rateMax: 4,
                    },
                    {
                        type: "comment",
                        name: "Feedback_Text",
                        title: "Anything else you would like to share with us?",
                        description:
                            "Please note that these comments might be shared publicly as part of the results of this study - avoid sharing personal information.",
                        isRequired: false,
                    },
                    {
                        type: "comment",
                        name: "Study_Swap",
                        title: "If you are a dissertation student, give us your study link here so we can complete your experiment!",
                        isRequired: false,
                    },
                ],
            },
        ],
    },
    data: {
        screen: "experiment_feedback",
    },
}

var demographics_debriefing = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Continue",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Debrief",
                        html:
                            "<img src='https://blogs.brighton.ac.uk/sussexwrites/files/2019/06/University-of-Sussex-logo-transparent.png' width='150px' align='right'/><br><br><br><br><br>" +
                            "<h2>Debriefing</h2>" +
                            "<p align='left'> The purpose of this study was to examine how the framing of an interaction partner as an AI versus human influences people's trust, empathy, and perceived social presence during online personal conversations. In this experiment, some conversations were framed as being human-AI interactions, and others as being between two humans. However, all conversations were fictional and created specifically for this study." +
                            "<p>We were also interested in how individual differences - such as loneliness, mental wellbeing, interoceptive awareness, AI familiarity and social motivation - relate to these reactions. Understanding these factors gives insight into why and how people may respond differently to online social partners, informing future research surrounding AI use.</p>" +
                            "<p align='left'><b>Thank you again!</b> Your participation in this study will be kept completely confidential. If you have any questions or concerns about the project, please contact Dr Dominique Makowski (<i style='color:DodgerBlue;'>D.Makowski@sussex.ac.uk</i>), Riehana Aziz (<i style='color:DodgerBlue;'>ra549@sussex.ac.uk</i>), and/or Emma Benn (<i style='color:DodgerBlue;'>eb672@sussex.ac.uk</i>).</p>" +
                            "<h4> To complete your participation in this study, click on 'Continue' and <b>wait until your responses have been successfully saved</b> before closing the tab.</h4><br>" +
                            "<p style='color: red; font-weight: bold;'>We appreciate that some of the content in this study can be heavy and distressing. If you or someone you know is struggling with their mental health, please do not hesitate to reach out to the following charities for further support.</p>"+
                            "<p style='color: red;'>If you or someone you know is in immediate danger or thinking about ending their life, please call 999 or go to your nearest A&E.</p>"+
                            "<p style='color: red;'><b> 24/7 Crisis lines:</b> </p>"+
                            "<p style='color: red;'>Call The Samaritans on 116 123</p>"+
                            "<p style='color: red;'>Text 'SHOUT' to 85258</p>"+
                            "<p style='color: red;'><b>Support via charities:</b></p>"+
                            "<p style='color: red;'>Call the Mind welfare line, open Monday - Friday (9 am to 5 pm): 0300 123 3393 or visit their website for tools and strategies</p>"+
                            "<a style='color: red;' href='https://www.mind.org.uk/need-urgent-help/using-this-tool/'>www.mind.org.uk/need-urgent-help</a>"+
                            "<p style='color: red;'>Mental Health Foundation: </p><a style='color: red;' href='https://www.mentalhealth.org.uk/'>www.mentalhealth.org.uk</a>" +
                            "<p style='color: red;'><b>Local support:</b> Use the government website to find support services near you </p><a style='color: red;' href='https://www.nhs.uk/nhs-services/mental-health-services/'>www.nhs.uk/nhs-services/mental-health-services</a><br><br>",
                    },
                ]
            },
        ],
    },
    data: {
        screen: "demographics_debrief",
    },
    // on_finish: function (data) {
    //     let score = check_attentionchecks()
    //     if (score >= 0.75) {
    //         data["AttentionChecks"] = "Pass"
    //         data["AttentionScore"] = score
    //     } else {
    //         data["AttentionChecks"] = "Fail"
    //         data["AttentionScore"] = score
    //     }
    // },
}

var demographics_endscreen = {
    type: jsPsychSurvey,
    survey_json: function () {
        text = "<h2 style='color:green;'>Data saved successfully!</h2>" + "<p>Thank you for participating, it means a lot to us.</p>"

        // Snowball
        // text +=
        //     "<p>Don't hesitate to share the study by sending this link <i>(but please don't reveal the details of the experiment)</i>:</p>" +
        //     "<p><a href='" +
        //     "..." +
        //     "'>" +
        //     "..." +
        //     "<a/></p>"

        // Return survey
        return {
            showQuestionNumbers: false,
            completeText: "Finish",
            pages: [
                {
                    elements: [
                        {
                            type: "html",
                            name: "Endscreen",
                            html: text,
                        },
                    ],
                },
            ],
        }
    },
    data: {
        screen: "demographics_endscreen",
    },
}

