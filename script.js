let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');
let introImage = document.querySelector('.intro-image');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Activate the image and text
        introImage.classList.add('active');
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400); // Stagger text appearance
        });

        setTimeout(() => {
            // Fade out the image and text
            introImage.classList.add('fade');
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000); // Hold for 2 seconds before fading

        setTimeout(() => {
            // Hide the intro screen
            intro.style.top = "-100vh";
        }, 3000); // Delay longer to allow fade-out to complete
    });
});
