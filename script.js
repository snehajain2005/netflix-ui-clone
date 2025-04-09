const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");
    const maxScrollLeft = imageList.scrollWidth -imageList.clientWidth;

    // Toggle dropdown visibility on button click
document.querySelector(".dropdown-btn").addEventListener("click", function () {
    document.querySelector(".dropdown-content").classList.toggle("show");
});

// Change the dropdown button text when a language is selected
function changeLanguage(language) {
    document.querySelector(".dropdown-btn").textContent = `🌐 ${language} ▼`;
    document.querySelector(".dropdown-content").classList.remove("show");
}

// Close dropdown if user clicks outside
window.addEventListener("click", function (event) {
    if (!event.target.closest(".language-dropdown")) {
        document.querySelector(".dropdown-content").classList.remove("show");
    }
});

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });

        });
    });

   

    const handleSlideButtons =() => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0? "none" :"block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft -1 ? "none" :"block";
    }

    imageList.addEventListener("scroll",handleSlideButtons);
        handleSlideButtons();


    };



window.addEventListener("load", initSlider);