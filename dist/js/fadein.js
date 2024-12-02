document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        fadeInElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add("show");
            }
        });
    };

    // ページの読み込みとスクロール時にフェードインをチェック
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // 初回チェック
});