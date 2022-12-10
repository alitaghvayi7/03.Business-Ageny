
// Header And Menu
const spans = document.querySelectorAll('.header-title > *');
const headerTitle = document.querySelector('.header-title');
const headerParag = document.querySelector('.header-parag');
const headerButton = document.querySelector('.header-button');
const triggerMenuButton = document.querySelector('.navbar-trigger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');

let activeTitleIndex = 0;


triggerMenuButton.addEventListener('click', showMwnu);

const effect1 = new KeyframeEffect(headerTitle, [{ opacity: 0, transform: 'translateX(2rem)' }, { opacity: 1, transform: 'translateX(0)' }], { duration: 2000, fill: 'forwards', delay: 500, });
const anime = new Animation(effect1, document.timeline);


const effect2 = new KeyframeEffect(headerParag, [{ opacity: 0, transform: 'translateX(-2rem)' }, { opacity: 1, transform: 'translateX(0)' }], { duration: 2000, fill: 'forwards', delay: 1000, });
const anime2 = new Animation(effect2, document.timeline);


const effect3 = new KeyframeEffect(headerButton, [{ opacity: 0, borderRadius: '0', transform: 'translateY(1rem)' }, { opacity: 1, borderRadius: '1rem', transform: 'translateY(0)' }], { duration: 1000, fill: 'forwards', delay: 1500, })
const anime3 = new Animation(effect3, document.timeline);



window.addEventListener('load', () => {
    anime.play();
    anime2.play();
    anime3.play();
    setInterval(showTitleQueue, 3000);
}, false);



function showTitleQueue() {

    spans[activeTitleIndex].classList.remove('show-title');
    activeTitleIndex++;

    if (activeTitleIndex > spans.length - 1) {
        activeTitleIndex = 0;
    }

    spans[activeTitleIndex].classList.add('show-title');
}

function showMwnu() {
    triggerMenuButton.classList.toggle('trigger-menu');
    menu.classList.toggle('show-menu');
}


// About us scripts
const aboutUsSection = document.querySelector('.about-us-section');
const aboutUsRightSeprator = document.querySelector('.about-us-right-seprator');
const aboutUsLeftSeprator = document.querySelector('.about-us-left-seprator-top');
const aboutUsLeftSeprator2 = document.querySelector('.about-us-left-seprator-bottom');
const aboutUsTitle = document.querySelector('.about-us-title');
const aboutUsVideoContainer = document.querySelector('.about-us-video-container');
const aboutUsParag = document.querySelector('.about-us-desc');
const aboutIcon1 = document.querySelector('.about-us-article>i:first-child');
const aboutIcon2 = document.querySelector('.about-us-article>i:last-child');

const videoButton = document.querySelector('.video-button');
const video = document.querySelector('.about-us-video');
const videoButtonIcon = document.querySelector('.video-button > i');
const videoBar = document.querySelector('.about-us-video-bar');

let navbarHeight = 5 * 16;
let animateCount = 1;

const effect4 = new KeyframeEffect(aboutUsRightSeprator, [{ height: 0, opacity: 0 }, { height: '100%', opacity: 1 }], { duration: 1000, fill: 'forwards' });
const anime4 = new Animation(effect4, document.timeline);

const effect5 = new KeyframeEffect(aboutUsLeftSeprator, [{ width: '0%' }, { width: '100%' }], { duration: 1000, fill: 'forwards' });
const anime5 = new Animation(effect5, document.timeline);

const effect6 = new KeyframeEffect(aboutUsLeftSeprator2, [{ width: '0%' }, { width: '100%' }], { duration: 1000, fill: 'forwards' });
const anime6 = new Animation(effect6, document.timeline);

const effect7 = new KeyframeEffect(aboutUsTitle, [{ opacity: 0, transform: 'translateY(1rem)', filter: 'blur(3px)' }, { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }], { duration: 1000, fill: 'forwards', delay: 1000 });
const anime7 = new Animation(effect7, document.timeline);

const effect8 = new KeyframeEffect(aboutUsVideoContainer, [{ opacity: 0, transform: 'translateY(-1rem)', filter: 'blur(1px)' }, { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }], { duration: 1000, fill: 'forwards', delay: 1000 });
const anime8 = new Animation(effect8, document.timeline);

const effect9 = new KeyframeEffect(aboutUsParag, [{ opacity: 0, transform: 'translateX(1rem)', filter: 'blur(1px)' }, { opacity: 1, transform: 'translateX(0)', filter: 'blur(0)' }], { duration: 1000, fill: 'forwards', delay: 1000 });
const anime9 = new Animation(effect9, document.timeline);

const effect10 = new KeyframeEffect(aboutIcon1, [{ opacity: 0, filter: 'blur(1px)' }, { opacity: 1, filter: 'blur(0)' }], { duration: 1000, fill: 'forwards', delay: 2000 });
const anime10 = new Animation(effect10, document.timeline);

const effect11 = new KeyframeEffect(aboutIcon2, [{ opacity: 0, filter: 'blur(1px)' }, { opacity: 1, filter: 'blur(0)' }], { duration: 1000, fill: 'forwards', delay: 2000 });
const anime11 = new Animation(effect11, document.timeline);

videoButton.addEventListener('click', playOrPauseVideo)

video.addEventListener('timeupdate', updateProgress);

window.addEventListener('scroll', (event) => {
    if (window.scrollY >= (aboutUsSection.offsetTop - navbarHeight) && animateCount <= 1) {
        anime4.play();
        anime5.play();
        anime6.play();
        anime7.play();
        anime8.play();
        anime9.play();
        anime10.play();
        anime11.play();
        animateCount++;
        return;
    }
});

function playOrPauseVideo(event) {
    if (video.paused) {
        video.play();
        videoButtonIcon.className = "far fa-pause-circle";
        video.style.opacity = .7;
    }
    else {
        video.pause();
        videoButtonIcon.className = "far fa-play-circle";
        video.style.opacity = .3;
    }
}


function updateProgress() {

    videoBar.style.width = video.currentTime / video.duration * 100 + "%";
    if (video.ended) {
        videoButtonIcon.className = "far fa-play-circle";
        video.style.opacity = .3;
        videoBar.style.width = 0;
    }
}


// price slide
const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 70,
        stretch: 2,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});


//   contact-us
const contactUsSection = document.querySelector('.contact-us-section');
const contactUsSeprator = document.querySelector('.contact-us-seprator');
const contactUsTitle = document.querySelector('.contact-us-title');
const contactUsIcon1 = document.querySelector('.contact-us-icon-item:nth-child(1)');
const contactUsIcon2 = document.querySelector('.contact-us-icon-item:nth-child(2)');
const contactUsIcon3 = document.querySelector('.contact-us-icon-item:nth-child(3)');
const contactUsButtonForm = document.querySelector('.contact-us-from  > *:nth-child(4)');
const contactUsInput1Form = document.querySelector('.contact-us-from  > *:nth-child(3)');
const contactUsInput2Form = document.querySelector('.contact-us-from  > *:nth-child(2)');
const contactUsInput3Form = document.querySelector('.contact-us-from  > *:nth-child(1)');
const formTitle = document.querySelector('.form-conatct-title');

let sectionAnimationCount = 1;

const effect12 = new KeyframeEffect(contactUsSeprator, [{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }], { duration: 1000, fill: 'forwards' });
const anime12 = new Animation(effect12, document.timeline);

const effect13 = new KeyframeEffect(contactUsTitle, [{ transform: 'translateY(-1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 1000, fill: 'forwards', delay: 700 });
const anime13 = new Animation(effect13, document.timeline);

const effect14 = new KeyframeEffect(contactUsIcon1, [{ transform: 'translateX(-1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 500, fill: 'forwards', delay: 700 });
const anime14 = new Animation(effect14, document.timeline);

const effect15 = new KeyframeEffect(contactUsIcon2, [{ transform: 'translateX(-1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 1000, fill: 'forwards', delay: 900 });
const anime15 = new Animation(effect15, document.timeline);

const effect16 = new KeyframeEffect(contactUsIcon3, [{ transform: 'translateX(-1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 1000, fill: 'forwards', delay: 1100 });
const anime16 = new Animation(effect16, document.timeline);

const effect17 = new KeyframeEffect(contactUsButtonForm, [{ transform: 'translateY(1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 1000, fill: 'forwards', delay: 1500 });
const anime17 = new Animation(effect17, document.timeline);

const effect18 = new KeyframeEffect(contactUsInput1Form, [{ transform: 'translateY(1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 1000, fill: 'forwards', delay: 1800 });
const anime18 = new Animation(effect18, document.timeline);

const effect19 = new KeyframeEffect(contactUsInput2Form, [{ transform: 'translateY(1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 1000, fill: 'forwards', delay: 2100 });
const anime19 = new Animation(effect19, document.timeline);

const effect20 = new KeyframeEffect(contactUsInput3Form, [{ transform: 'translateY(1rem)', opacity: 0, filter: 'blur(3px)' }, { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' }], { duration: 1000, fill: 'forwards', delay: 2400 });
const anime20 = new Animation(effect20, document.timeline);

const effect21 = new KeyframeEffect(formTitle, [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }], { duration: 1000, fill: 'forwards', delay: 1300 });
const anime21 = new Animation(effect21, document.timeline);
window.addEventListener('scroll', (e) => {
    if (window.scrollY >= (contactUsSection.offsetTop - navbarHeight) && sectionAnimationCount <= 1) {
        anime12.play();
        anime13.play();
        anime14.play();
        anime15.play();
        anime16.play();
        anime17.play();
        anime18.play();
        anime19.play();
        anime20.play();
        anime21.play();
        sectionAnimationCount++;
    }
})
