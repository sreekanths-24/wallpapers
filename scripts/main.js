//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//scroll reveal
ScrollReveal().reveal(".cards",{
    interval: 200,
    easing: 'ease-out',
    reset: true ,
    duration: 400,
    distance: "80px",
    origin: "top"
});
