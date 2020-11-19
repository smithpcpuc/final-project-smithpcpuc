//Nameing Variable 
const titlePage = document.getElementById("title-page");
const tutorialPage = document.getElementById("tutorial-page");
const aboutPage = document.getElementById("about-page");
const tutorialBtn = document.getElementById("tutorialBtn");
const aboutBtn = document.getElementById('aboutBtn');
const tutorialBackBtn = document.getElementById('tutorialBackBtn');
const aboutBackBtn = document.getElementById('aboutBackBtn');


//Event
tutorialBackBtn.addEventListener('click', function(){
    titlePage.style.display = "block";
    tutorialPage.style.display = "none";
    aboutPage.style.display = "none";
});

tutorialBtn.addEventListener('click', function(){
    titlePage.style.display = "none";
    tutorialPage.style.display = "block";
    aboutPage.style.display = "none";
});

aboutBackBtn.addEventListener('click', function(){
    titlePage.style.display = "block";
    tutorialPage.style.display = "none";
    aboutPage.style.display = "none";
});

aboutBtn.addEventListener('click', function(){
    titlePage.style.display = "none";
    tutorialPage.style.display = "none";
    aboutPage.style.display = "block";   
});