/*
コードを読めるようになろう！

やり方
一行にコメントを残してプログラムが何をしているか書いてみよう！

例
var signal = '青'; //singalを宣言し、青を代入する。
if (signal == '青') { //if文、signalが青の時に中のプログラムを読み込む。
    console.log('進む'); //「進む」を表示する。
} //if文を終了する。
*/

//work1
var age = 15;
if( age >= 18) {
    console.log('選挙権があります');
} else {
    console.log('選挙権がありません');
}

//work2
var score = 85;

if( score == 100 ) {
    console.log('満点ですね');
} else if( score >= 90  ) {
    console.log('かなり良い点数です');
} else if( score >= 80  ) {
    console.log('良い点数です');
} else if( score >= 70  ) {
    console.log('普通の点数です');
} else {
    console.log('がんばろう');
}