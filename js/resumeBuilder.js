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
            "title": "TPEOA",
            "dates": "2013.10 - 2014.04",
            "description": "This is an mobile OA system(app) witch is required by a customer.",
            "images": [],
            "content": ""
        },
        {
            "title": "Mobile Survey System",
            "dates": "2014.05 - 2016.02",
            "description": "This is a custom mobile app for an Insurance company. There are over 2000 insurance surveyors of them. With this app they can survey car accidents easily.",
            "images": [],
            "content": ""
        },
        {
            "title": "Mobile Survey System 2.0",
            "dates": "2016.02 - 2017.02",
            "description": "This is an app which is upgrade version of Mobile Survey System. Because there core business has some big adjustment, so some other systems rely on it has to update.",
            "images": [],
            "content": ""
        },
        {
            "title": "AXA-ICBC APP",
            "dates": "2016.07 - The Future",
            "description": "I maintained it and make some advances.",
            "images": [],
            "content": ""
        },
        {
            "title": "MOVE App",
            "dates": "2017.02 - 3",
            "description": "MOVE App is a sport and health app, and It using some rules make users can earn bracelets by doing sports every day.",
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

function displayWork() {
    for(var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedEmployerTitle = formattedEmployer + " - " + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

$(document).click(function (loc) {
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x, y);
});

projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();