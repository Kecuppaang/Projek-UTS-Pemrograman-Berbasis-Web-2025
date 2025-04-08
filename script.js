document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector("button");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "index1.html";
        });
    }

    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Harap isi semua kolom!");
                event.preventDefault();
            } else {
                alert("Pesan berhasil dikirim!");
            }
        });
    }


    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const targetHref = this.getAttribute("href");

            if (targetHref.startsWith("#")) {
                event.preventDefault();
                const targetElement = document.querySelector(targetHref);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
