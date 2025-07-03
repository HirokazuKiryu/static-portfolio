//HTMLから要素を取得し定数定義
const text =document.querySelector('#colorText');
const color =document.querySelector('#colorPicker');

console.log(color.value);

//カラーピッカーを操作した時の一連の動作
const colorBg = () => {
  //選択した色を背景色に指定
  document.body.style.backgroundColor = color.value;
  //カラーコードを表示
  if (color.value === '#ffffff') {
  //カラーコードが#ffffffならwhiteと表示する
    text.textContent = `カラーコード：${color.value} (white)`;
  //カラーコードが#000000ならblackと表示する
  } else if (color.value === '#000000') {
    text.textContent = `カラーコード：${color.value} (black)`;
  //それ以外ならカラーコードのみを表示する
  } else {
    text.textContent =`カラーコード：${color.value}`;
  }
}

//カラーピッカーが変更されたらcolorBgを発動させる
color.addEventListener('input',colorBg);

