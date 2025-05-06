// Animating the page content
document.addEventListener("DOMContentLoaded", () => {
    anime.timeline({ loop: false })
        .add({
            targets: 'header h1',
            opacity: [0, 1],
            translateY: [-50, 0],
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: 'header h2',
            opacity: [0, 1],
            translateY: [-50, 0],
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: 'nav',
            opacity: [0, 1],
            translateY: [-30, 0],
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: 'section',
            opacity: [0, 1],
            translateY: [30, 0],
            easing: "easeOutExpo",
            duration: 1000,
            offset: '-=500'
        });
});


document.addEventListener("DOMContentLoaded", () => {
    // Projects Fade-In Animation
    anime.timeline({ loop: false })
        .add({
            targets: '.project-card',
            opacity: [0, 1],
            translateY: [30, 0],
            easing: "easeOutExpo",
            duration: 1000,
            delay: anime.stagger(200)  // Stagger the animation of each card
        })
});

document.addEventListener("DOMContentLoaded", () => {
    // About Me Fade-In Animation
    anime({
        targets: '#about-me',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: "easeOutExpo",
        duration: 1000
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar) => {
        setTimeout(() => {
            bar.style.width = bar.classList.contains('html') ? '90%' :
                             bar.classList.contains('css') ? '80%' : '75%';
        }, 500);
    });
});


