//日付を出力する関数
const date = new Date() 
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ];
//日付を出力する
console.log(year + '年', month + '月', day + '日');

