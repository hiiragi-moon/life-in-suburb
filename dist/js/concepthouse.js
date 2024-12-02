// concepthouse.js
// ロード
const loading = document.querySelector('#loading');
window.addEventListener('load', () => {
  loading.classList.add('loaded');
});

// メニュー
const menuButton = document.querySelector('#menu-open');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');

let isOpen = false;

// メニューのトグル
menuButton.addEventListener('click', () => {
  if (isOpen) {
    menuPanel.style.transform = 'translateY(-150%)';
    menuItems.forEach((menuItem) => {
      menuItem.style.opacity = '0';
    });
    menuButton.innerHTML = `
      <svg height="30" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <title>メニューを開く</title>
        <path clip-rule="evenodd" d="m4.25 8c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75zm.75 3.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h14c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z" fill-rule="evenodd"/>
      </svg>
    `;
  } else {
    menuPanel.style.transform = 'translateY(0)';
    menuItems.forEach((menuItem, index) => {
      setTimeout(() => {
        menuItem.style.opacity = '1';
      }, 300 * index);
    });
    menuButton.innerHTML = `
      <svg height="30" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <title>メニューを閉じる</title>
        <path clip-rule="evenodd" d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z" fill-rule="evenodd"/>
      </svg>
    `;
  }
  isOpen = !isOpen;
});


// モーダルの要素を取得
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('close');

// 画像にクリックイベントを追加
document.querySelectorAll('.house_images img').forEach((img) => {
    img.addEventListener('click', function() {
        modal.style.display = 'block'; // モーダルを表示
        modalImage.src = this.src; // クリックされた画像を表示
    });
});

// モーダルを閉じる機能
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // モーダルを非表示
});

// モーダルの外側をクリックした時も閉じる
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // モーダルを非表示
    }
});