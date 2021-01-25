const el = document.getElementById('contact');
const contactButton = document.querySelector('.header-content__button');
contactButton.addEventListener("click",()=>	el.scrollIntoView({behavior:"smooth"}));

