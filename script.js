window.addEventListener("load", function () {
    alert("Welcome to Sweet Treats Bakery!");
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
});

if (topBtn) {
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const product = document.getElementById("product").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || product === "" || message === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}
