document.addEventListener("DOMContentLoaded", function () {
    // .btn-triggerと.menu-panelを取得
    const button = document.querySelector(".btn-trigger");
    const menuPanel = document.querySelector(".menu-panel");

    // buttonまたはmenuPanelが存在しない場合は処理を終了
    if (!button || !menuPanel) return;

    // ボタンクリック時のイベントリスナー
    button.addEventListener("click", function (event) {
        // 'active'クラスをトグル
        button.classList.toggle("active");

        // menu-panelの表示/非表示を切り替え
        if (menuPanel.style.transform === "translateY(0%)") {
            menuPanel.style.transform = "translateY(-150%)";
        } else {
            menuPanel.style.transform = "translateY(0%)";
        }

        // デフォルト動作を防止
        event.preventDefault();
    });
});