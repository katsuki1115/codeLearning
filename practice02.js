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

//work03
var sum = 0;
for (var i = 1; i <= 5; i++) { 
    sum += i;
}
console.log(sum);


//work04
for (var i = 1; i <= 3; i++) { 
    for (var j = 1; j <= 3; j++) { 
        console.log(i);
    }
}

