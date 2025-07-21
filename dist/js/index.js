window.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    logo.classList.add("show");
});
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const logo = document.querySelector(".logo");
    let currentSlide = 0;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("show");
            if (index === currentSlide) {
                slide.classList.add("show");
            }
        });

        currentSlide = (currentSlide + 1) % slides.length;
    }

    // 最初のスライドを表示してから、3秒ごとに切り替え
    showSlides();
    setInterval(showSlides, 5000);
});