/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Jason Chen",
    role: "Project Manager",
    contacts: {
        mobile: "13122908198",
        email: "jinghao_chen@msn.com",
        github: "normalhh",
        twitter: "@NormalChen",
        location: "Shanghai, China",
        blog: "https://normalhh.com"
    },
    welcomeMessage: "Hi, this is my first web resume.",
    skills: [
        "Android App Development", "Java", "JavaScript", "HTML", "CSS", "Communication with customers", "Business Analysis"
    ],
    bioPic: "images/fry.jpg"
};

var work = {
    "jobs":[
        {
            "title": "Android Developer",
            "employer": "Allianture",
            "dates": "October 2013 - Future",
            "description":"Android project developer"
        },
        {
            "title": "Android App Tester",
            "employer": "Qi cheng",
            "dates": "April 2013 - July 2013",
            "description":"Android app tester"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": [],
            "content": ""
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": [],
            "content": ""
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": [],
            "content": ""
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": [],
            "content": ""
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": [],
            "content": ""
        }
    ]
};


var education = {
    "schools": [
        {
            "name": "Nankai University Binhai College",
            "city": "Tianjin, China",
            "majors": ["Insurance"],
            "degree": "Bachelor Degree",
            "dates": 2006,
            "url": ""
        },
        {
            "name": "APTECH Zhengzhou Campus",
            "city": "Zhengzhou, China",
            "majors": ["Android Development"],
            "degree": "",
            "dates": 2013,
            "url": ""
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Development",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
        }
    ]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bioPic2 = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bioPic2);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMessage);
// $("#topContacts").append(HTMLcontactGeneric);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitle = formattedEmployer + " - " + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
}