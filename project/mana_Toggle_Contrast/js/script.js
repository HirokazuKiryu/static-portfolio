//btnにHTML要素の#btnを代入
const btn = document.querySelector('#btn');

//クリックイベントの無名関数
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
//btnの文字列がAなら
  if (btn.textContent === 'ダークモードにする') {
//btnの文字列をBに変更する
    btn.textContent = 'ライトモードにする';
//btnの文字列をAでなければ
  } else {
    btn.textContent = 'ダークモードにする'
  }
});