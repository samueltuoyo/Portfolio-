const menuBar = document.querySelector('.fa-bars');
const mobNav = document.querySelector('.toggle');
const toggleTheme = document.querySelector('.fa-moon');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const icons = document.querySelectorAll('.icons i');
const mobNavLinks = document.querySelectorAll('.toggle a');
const ProjectsBox = document.querySelectorAll('.box');
const ProjectsPreviewBtn = document.querySelectorAll('.bg');
const ProjectsGithubBtn = document.querySelectorAll('.gb');
const btn = document.querySelector('button[type="submit"]');
let isMenuOpen = 'false';    
menuBar.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
   if (isMenuOpen) {
    mobNav.style.width = '200px';
    mobNav.style.left = '0';
    menuBar.classList.add('fa-times');
   } 
   
   else{
    mobNav.style.width = '0';
    mobNav.style.left = '-100px';
    menuBar.classList.remove('fa-times');
   }
});
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        header.style.backgroundColor = footer.style.backgroundColor = 'black';
        toggleTheme.classList = 'fas fa-sun'
        mobNav.style.backgroundColor = 'black';
        mobNav.style.color = btn.style.color = 'white';
        btn.style.backgroundColor = 'purple';
        icons.forEach(icon => {
        icon.style.backgroundColor = 'black';
        icon.style.color = 'white';
        });
        ProjectsBox.forEach(article => {
        article.style.backgroundColor = '#111111';
        article.style.color = 'white';
       });
       ProjectsGithubBtn.forEach(btn => {
           btn.style.color = 'white';
       });
    }
    else{
        header.style.backgroundColor = footer.style.backgroundColor = 'white';
        toggleTheme.classList = 'fas fa-moon'
        mobNav.style.backgroundColor = btn.style.color = 'white';
        mobNav.style.color = btn.style.backgroundColor = 'black';
        icons.forEach(icon => {
        icon.style.backgroundColor = 'black';
        icon.style.color = 'white';
        });
        ProjectsBox.forEach(article => {
        article.style.backgroundColor = 'whitesmoke';
        article.style.color = 'black';
        });
        ProjectsGithubBtn.forEach(btn => {
           btn.style.color = 'black';
       });

    }
});
mobNavLinks.forEach((link) => {
   link.addEventListener('click', () => {
   mobNavLinks.forEach((others) => {
       others.classList.remove('active');
   })
       link.classList.toggle('active');
   })
});

function sendMail(){
let username = document.getElementById('fullName').value;
let from = document.getElementById('sender').value;
let body = document.getElementById('message').value
let subject = document.getElementById('subject').value;
Email.send({ 
    Host : "smtp.elasticemail.com", 
    Username : 'tuoyosamuel9082@gmail.com', 
    Password : "39B49A824324AD4CD14F9621FFC9CB19F444",
    To : 'tuoyosamuel9082@gmail.com',
    From : from, 
    Subject : subject, 
    Body : body
  }).then( message => alert(message));
}