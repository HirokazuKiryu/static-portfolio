//HTML要素を定数に定義
const text = document.querySelector('#text');
const count = document.querySelector('#count');

//textに対してキーボードが離されたら発火イベント
text.addEventListener('keyup', () => {
//countに対してtextの値の長さ(num)を代入
  count.textContent = text.value.length;
//textの文字数が100以上なら
  if(text.value.length > 100) {
//countにalertというクラスを追加
    count.classList.add('alert');
  } else {
//countからalertというクラスを削除
    count.classList.remove('alert');
  }
});