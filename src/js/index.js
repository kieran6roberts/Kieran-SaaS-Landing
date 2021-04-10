const mobileLiElements = document.querySelectorAll(".sidebar__item");
const mobieInputToggleElement = document.querySelector(".nav__mobile--check");

const handleMobileToggle = ({ target }) => {
    if (target === mobieInputToggleElement) {
        mobileLiElements.forEach(element => element.classList.toggle("open"));
    }
}

document.addEventListener("click", handleMobileToggle);