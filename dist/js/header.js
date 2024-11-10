document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menuPanel = document.querySelector(".menu-panel");
    const menuIcon = document.querySelector(".menu-icon");

    menuButton.addEventListener("click", () => {
        menuPanel.classList.toggle("show"); // showクラスを付与/削除
        const isOpen = menuIcon.classList.toggle("open");
        // アイコンを切り替え
        if (isOpen) {
            menuIcon.innerHTML = `
            <title>メニューを閉じる</title>
            <path d="M6 6 L18 18 M6 18 L18 6" stroke="black" stroke-width="2" />
        `;
        } else {
            menuIcon.innerHTML = `
            <title>メニューを開く</title>
            <path
                clip-rule="evenodd"
                d="m4.25 8c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75zm.75 3.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h14c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"
                fill-rule="evenodd"></path>
        `;
        }
    });
});