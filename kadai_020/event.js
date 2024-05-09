// btnというidを持つHTML要素を取得して、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
document.getElementById('btn').addEventListener('click',function() {

  document.getElementById('text').innerHTML = "ボタンをクリックしました";
});

