const loading = document.querySelector('#loading');

console.log(loading);

//イベント発火無名関数
window.addEventListener('load',() => {
//ロードイベントが発生したら
  loading.classList.add('loaded');
})
