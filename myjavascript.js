
lightbox.option({
    'resizeDuration' : 200,  //Image resizing animation takes 0.2 seconds
    'wrapAround' : true,     //Last image links bsck to the first image
    'fadeDuration' : 300     //Fade effect takes 0.3 seconds
})

const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // VALIDATION
    if(name === "" || email === "" || phone === "" || message === ""){
        messageBox.style.color = "red";
        messageBox.textContent = "Please fill in all fields.";
        return;
    }

    // EMAIL FORMAT CHECK
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        messageBox.style.color = "red";
        messageBox.textContent = "Enter a valid email address.";
        return;
    }

    // PHONE VALIDATION (basic)
    if(phone.length < 10){
        messageBox.style.color = "red";
        messageBox.textContent = "Enter a valid phone number.";
        return;
    }

    // SUCCESS MESSAGE (simulate sending)
    messageBox.style.color = "green";
    messageBox.textContent = "Message sent successfully!";

    form.reset();
});

// ACTIVE NAV LINK
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

function revealSections() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// CONTACT CLICK ALERT
document.getElementById("contactSection").addEventListener("click", () => {
    alert("Thanks for reaching out to Kings Delights! We'll respond soon.");
});

// SMOOTH SCROLL (if you add internal links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
    });
});



// ACTIVE NAVIGATION
constnavLinks=document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// SCROLL ANIMATION
const section=document.querySelectorAll(".section");

function revealSections(){
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if(top < trigger){
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// TEAM INTERACTION (click highlight)
const teamMembers = document.querySelectorAll("#teamList li");

teamMembers.forEach(member => {
    member.addEventListener("click", () => {
        member.style.color = "skyblue";
        member.style.fontWeight = "bold";
    });
});

// SMOOTH SCROLL (future use)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))?.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ACTIVE NAV LINK
const link=document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// SCROLL ANIMATION
constsection=document.querySelectorAll(".section");

function revealSections() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// CONTACT CLICK ALERT
document.getElementById("contactSection").addEventListener("click", () => {
    alert("Thanks for reaching out to Kings Delights! We'll respond soon.");
});

// SMOOTH SCROLL (if you add internal links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
    });
});