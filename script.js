/* Smooth scroll to About section */
function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

/* Scroll to Top & Bottom */
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
        scrollBottomBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
        scrollBottomBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

scrollBottomBtn.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

/* Auto update footer year */
const footer = document.querySelector("footer p");
footer.innerHTML = `© ${new Date().getFullYear()} Shristhi | All Rights Reserved`;
