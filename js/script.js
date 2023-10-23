//******************  Mobile Navigation *****************************/

const btnNavEL =document.querySelector(".btn-mobile-nav");
const headerEL =document.querySelector(".header");


btnNavEL.addEventListener('click',function(){
    headerEL.classList.toggle('nav-open');
})

const allLinks =document.querySelectorAll(".main-nav-link")

    allLinks.forEach(function(linkEl) {
        linkEl.addEventListener('click', function(){
            headerEL.classList.toggle('nav-open')
        })
    })


//******************  Sticky Navigation *****************************/

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
            document.body.classList.add('sticky');
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove('sticky');
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    }
);    

const sectionHeroEl = document.querySelector('.section-hero');

obs.observe(sectionHeroEl);