// WELCOME MESSAGE

console.log("Welcome to Muhammad Faizan Portfolio");

// PAGE LOADED — hide loading screen

window.addEventListener("load", () => {

    console.log("Portfolio Loaded Successfully");

    const loading = document.getElementById("loading");
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = "0";
            setTimeout(() => {
                loading.style.display = "none";
            }, 500);
        }, 800);
    }

});

// SCROLL TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
        setTimeout(() => { topBtn.style.opacity = "1"; }, 10);
    } else {
        topBtn.style.opacity = "0";
        setTimeout(() => { topBtn.style.display = "none"; }, 300);
    }

    // Active nav highlight
    highlightNav();

});

if (topBtn) {
    topBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// ACTIVE NAVIGATION HIGHLIGHT

function highlightNav() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

}

// SMOOTH SCROLL FOR NAV LINKS

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email    = document.getElementById("email").value.trim();
        const subject  = document.getElementById("subject").value.trim();
        const message  = document.getElementById("message").value.trim();

        if (!fullname || !email || !subject || !message) {
            showNotif("⚠️ Please fill in all fields.", "warning");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showNotif("⚠️ Please enter a valid email address.", "warning");
            return;
        }

        showNotif("✅ Message submitted successfully! I'll get back to you soon.", "success");
        form.reset();

    });
}

// NOTIFICATION (replaces alert popups)

function showNotif(msg, type) {

    // Remove existing notif
    const old = document.getElementById("notif");
    if (old) old.remove();

    const notif = document.createElement("div");
    notif.id = "notif";
    notif.textContent = msg;
    notif.style.cssText = `
        position:fixed;
        bottom:24px;
        left:50%;
        transform:translateX(-50%);
        background:${type === "success" ? "#10b981" : "#f59e0b"};
        color:white;
        padding:13px 28px;
        border-radius:50px;
        font-size:14px;
        font-weight:600;
        font-family:inherit;
        box-shadow:0 8px 24px rgba(0,0,0,0.15);
        z-index:9999;
        animation:slideUp 0.3s ease;
        max-width:90vw;
        text-align:center;
    `;

    const style = document.createElement("style");
    style.textContent = `@keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`;
    document.head.appendChild(style);

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = "0";
        notif.style.transition = "opacity 0.3s";
        setTimeout(() => notif.remove(), 300);
    }, 3500);

}

// PROGRESS BAR ANIMATION (on scroll)

const progressBars = document.querySelectorAll(".progress-fill");

if (progressBars.length > 0) {

    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width") || bar.style.width;
        bar.style.width = "0%";

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => { bar.style.width = targetWidth; }, 300);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(bar);
    });

}

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = parseInt(counter.getAttribute("data-target"));
    if (!target) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let count = 0;
                const increment = target / 80;
                const update = () => {
                    count += increment;
                    if (count < target) {
                        counter.textContent = Math.ceil(count);
                        setTimeout(update, 18);
                    } else {
                        counter.textContent = target;
                    }
                };
                update();
                observer.unobserve(counter);
            }
        });
    });

    observer.observe(counter);

});

console.log("🚀 Portfolio ready!");