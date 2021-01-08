const loadingSection = document.querySelector(".loading-section");
const myContainer = document.querySelector(".container-fluid");
const scrollTopLink = document.querySelector("a.scroll-top");

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
window.addEventListener("load", () => {
  tl.to(".text-span", { y: "0%", duration: 1, stagger: 0.25 });
  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
  tl.fromTo(".menu-btn", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
  tl.fromTo(
    ".contact-link",
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    "-=1"
  );
  tl.fromTo(
    ".about-text",
    { opacity: 0 },
    { opacity: 1, duration: 1.5 },
    "-=1"
  );
});

//  MENU BUTTON
const menuBtn = document.querySelector(".menu-btn");
const modalParent = document.querySelector(".modal-parent");
const modalLinks = document.querySelectorAll(".modal-parent .menu-modal ul li");
const o = document.querySelector(".o");
const c = document.querySelector(".c");

//  Event Listener and Function
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuOpen = true;
    menuBtn.classList.add("open");
    modalParent.style.display = "block";
    modalParent.classList.remove("slide-up");
    // menu-text
    o.style.display = "none";
    c.style.display = "block";
    // scroll top link
    scrollTopLink.classList.remove("on");
  } else {
    menuOpen = false;
    menuBtn.classList.remove("open");
    // modalParent.style.display = "none";
    modalParent.classList.add("slide-up");
    // menu-text
    o.style.display = "block";
    c.style.display = "none";
    // scroll top link
    scrollTopLink.classList.add("on");
  }
});

modalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuOpen = false;
    menuBtn.classList.remove("open");
    modalParent.classList.add("slide-up");
    // menu-text
    o.style.display = "block";
    c.style.display = "none";
  });
});

// MENU BTN CHANGE COLOR
window.addEventListener("scroll", menuBtnChangeColor);
function menuBtnChangeColor() {
  if (window.scrollY > 6000) {
    // menuBtn.style.color = "white";
    menuBtn.classList.add("modal-reverse-color");
  } else {
    // menuBtn.style.color = "black";
    c.style.color = "#fff";
    menuBtn.classList.remove("modal-reverse-color");
  }
}

// MODAL LINKS HOVER
modalLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("modal-links-mouseenter");
    link.classList.remove("modal-links-mouseleave");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("modal-links-mouseenter");
    link.classList.add("modal-links-mouseleave");
    mainModal.style.backgroundImage = "none";
  });
});

// MODAL LINKS EVERYONE
const modalLinkAbout = document.querySelector(".modal-about");
const modalLinkProjects = document.querySelector(".modal-projects");
const modalLinkContact = document.querySelector(".modal-contact");
const modalLinkDribbble = document.querySelector(".modal-dribbble");
const modalLinkTwitter = document.querySelector(".modal-twitter");
const modalLinkGithub = document.querySelector(".modal-github");
const mainModal = document.querySelector(".menu-modal");

modalLinkAbout.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-about.jpg')";
});

modalLinkProjects.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-projects.jpg')";
});

modalLinkContact.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-contact.jpg')";
});

modalLinkDribbble.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-dribbble.jpg')";
});

modalLinkTwitter.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-twitter.jpg')";
});

modalLinkGithub.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-github.jpg')";
});

//  SCROLL TOP

window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    scrollTopLink.classList.add("on");
  } else {
    scrollTopLink.classList.remove("on");
  }
});
