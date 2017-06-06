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
    biopic: "images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "title": "Android Developer",
            "employer": "Allianture",
            "dates": "October 2013 - Future",
            "description": "Android project developer",
            "location": "Shanghai, China"
        },
        {
            "title": "Android App Tester",
            "employer": "Qi cheng",
            "dates": "April 2013 - July 2013",
            "description": "Android app tester",
            "location": "Shanghai, China"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "TPEOA",
            "dates": "2013.10 - 2014.04",
            "description": "This is an mobile OA system(app) witch is required by a customer.",
            "images": ["http://placehold.it/300x200"],
            "content": ""
        },
        {
            "title": "Mobile Survey System",
            "dates": "2014.05 - 2016.02",
            "description": "This is a custom mobile app for an Insurance company. There are over 2000 insurance surveyors of them. With this app they can survey car accidents easily.",
            "images": ["http://placehold.it/300x200"],
            "content": ""
        },
        {
            "title": "Mobile Survey System 2.0",
            "dates": "2016.02 - 2017.02",
            "description": "This is an app which is upgrade version of Mobile Survey System. Because there core business has some big adjustment, so some other systems rely on it has to update.",
            "images": ["http://placehold.it/300x200"],
            "content": ""
        },
        {
            "title": "AXA-ICBC APP",
            "dates": "2016.07 - The Future",
            "description": "I maintained it and make some advances.",
            "images": ["http://placehold.it/300x200"],
            "content": ""
        },
        {
            "title": "MOVE App",
            "dates": "2017.02 - 3",
            "description": "MOVE App is a sport and health app, and It using some rules make users can earn bracelets by doing sports every day.",
            "images": ["http://placehold.it/300x200"],
            "content": ""
        }
    ]
};


var education = {
    "schools": [
        {
            "name": "Nankai University Binhai College",
            "location": "Tianjin, China",
            "majors": ["Insurance"],
            "degree": "Bachelor Degree",
            "dates": "2006-2010",
            "url": ""
        },
        {
            "name": "APTECH Zhengzhou Campus",
            "location": "Zhengzhou, China",
            "majors": ["Android Development"],
            "degree": "Android Developer",
            "dates": "2013-2014",
            "url": ""
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Development",
            "school": "Udacity",
            "dates": "2017-2017",
            "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole).prepend(formattedName);

var biopic2 = HTMLbioPic.replace("%data%", bio.biopic);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(biopic2, welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedBlog, formattedLocation);

bio.display = function () {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};


work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedEmployerTitle = formattedEmployer + " - " + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription, formattedLocation);
    });
};


$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

projects.display = function () {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        if (project.images.length > 0) {
            for (var image in project.images) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    });
};

education.display = function () {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolNameDegree = formattedName + formattedDegree;
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors[0]);
        $(".education-entry:last").append(formattedSchoolNameDegree, formattedLocation, formattedDates, formattedMajor);
    });

    education.onlineCourses.forEach(function (onlineSchool) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineSchool.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineSchool.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", onlineSchool.url);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool, formattedOnlineDates, formattedUrl);
    });
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();