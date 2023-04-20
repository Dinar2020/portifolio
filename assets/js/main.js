import { projetos } from "./projetos.js";

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

const notebook_1 = document.querySelector("#notebook-1");
const notebook_2 = document.querySelector("#notebook-2");
const notebook_2_white = document.querySelector("#notebook-2-white");
const vidro = document.querySelector("#vidro");

window.addEventListener("load", function begin() {
    projetos(projectsSection);
    const desafioBtn = document.querySelector("#desafio");

    desafioBtn.addEventListener("click", () => {
        desafios(projectsSection);
        document
            .querySelector("#backToProjectsBtn")
            .addEventListener("click", begin);
    });
});

window.addEventListener("scroll", onScroll);
onScroll();

window.onload = setTimeout(() => {
    notebook_1.style.opacity = 0;

    notebook_1.style.animation = "none";
    notebook_2.style.animation = "none";
    notebook_2_white.style.animation = "none";
    vidro.style.animation = "none";
}, 4000);

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(projects);
    activateMenuAtCurrentSection(knowledge);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBoundaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute("id");
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove("active");

    if (sectionBoundaries) {
        menuElement.classList.add("active");
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}
// notification banner

// 1 opção
const notification = document.querySelector(".notification");
const countdownBar = document.querySelector(".countdownBar");
const close = document.querySelector(".closenotification");
const close_effect = ".7s cubic-bezier(0.75,-.2,0.0205,1.1)";
let notificationTimeout;
let countdownTimeout;

window.addEventListener("load", () => {
    projetos(projectsSection);
    const desafioBtns = document.querySelectorAll("#desafio");
    desafioBtns.forEach(function (desafioBtn) {
        const href = desafioBtn.getAttribute("href");
        desafioBtn.addEventListener("click", function (e) {
            
            if (href === "") {
                console.log(desafioBtn);
                e.preventDefault();
                notification.style.visibility = "visible";
                countdownBar.style.visibility = "visible";
                notification.style.right = "16px";
                countdownBar.style.right = "16px";

                // Clear the previously set timeouts
                clearTimeout(notificationTimeout);
                clearTimeout(countdownTimeout);

                notificationTimeout = setTimeout(() => {
                    notification.style.right = "8px";
                    countdownBar.style.right = "8px";
                }, 1000);

                countdownTimeout = setTimeout(() => {
                    notification.style.right = "-900px";
                    countdownBar.style.right = "-900px";
                    notification.style.transaction = close_effect;
                    countdownBar.style.transaction = close_effect;
                }, 6000);
            }
        });
        close.addEventListener("click", () => {
            notification.style.right = "-900px";
            countdownBar.style.right = "-900px";
            notification.style.transition = close_effect;
            countdownBar.style.transaction = close_effect;

            // Clear the timeouts when closing the notification
            clearTimeout(notificationTimeout);
            clearTimeout(countdownTimeout);
        });
    });
});


// ////////////
// const notification = document.querySelector(".notification"),
//     close = document.querySelector(".closenotification"),
//     close_effect = ".7s cubic-bezier(0.75,-.2,0.0205,1.1)";

// window.addEventListener("load", () => {
//     projetos(projectsSection);
//     const buttonsDivs = document.querySelectorAll(".buttons");
//     buttonsDivs.forEach(function (buttonsDiv) {
//         const childLinks = buttonsDiv.querySelectorAll("a");
//         const secondChildLink = childLinks[1];
//         const href = secondChildLink.getAttribute("href");
//         buttonsDivs.forEach((btn) => {
//             if (href.length <= 0) {
//                 console.log(href);
//                 console.log(btn);
//             }
//         });
//     });
// });

// desafioBtns.forEach(function (desafioBtn) {
//     desafioBtn.addEventListener("click", function () {
//         if (href.length < 0) {
//             notification.style.visibility = "visible";
//         }
//     });
// });

// const href = btn.getAttribute("href");
// console.log(href);

// secondChildLink.addEventListener("click", () => {
//     console.log(secondChildLink);
//     if (href.length < 0 ){

//         notification.style.visibility = "hidden";
//         // setTimeout(() => {
//         //     notification.style.right = "8px";
//         // }, 1500);

//         // setTimeout(() => {
//         //     notification.style.right = "-900px";
//         //     notification.style.transaction = close_effect;
//         // }, 6000);

//         // close.addEventListener("click", () => {
//         //     notification.style.right = "-900px";
//         //     notification.style.transition = close_effect;
//         // });

//     }

// });

// function showNoticationBannerOnScroll(){
//     if(scrollY)
// }

// notification banner

openMenu();
function openMenu() {
    const openBtns = document.querySelectorAll(".open");
    openBtns.forEach((e) => {
        e.addEventListener("click", () => {
            document.body.classList.add("menu-expanded");
        });
    });
}

closeMenu();
function closeMenu() {
    const closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach((e) => {
        e.addEventListener("click", () => {
            document.body.classList.remove("menu-expanded");
        });
    });
}

ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}).reveal(
    `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledg header,
  #knowledg .card,
  #contact,
  #contact header`
);

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
});
