// btnというidを持つHTML要素を取得して、定数に代入する
const button = document.getElementById('btn');

// text要素を定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
button.addEventListener('click',function() {
   text.innerHTML = "ボタンをクリックしました";
});

