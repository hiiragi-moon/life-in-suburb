document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById(
        "modalImage",
    );

    // モーダルが表示
    document.querySelectorAll(".house_images img").forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImage.src = this.src;
            document.body.style.overflow = "hidden"; // スクロールを無効にする
        });
    });

    // モーダルを閉じる
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = ""; // スクロールを再度有効にする
        }
    });
});