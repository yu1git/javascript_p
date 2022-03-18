//canvasの設定
let canvas = document.getElementById('canvas');
canvas.width = 640;//canvasの横幅
canvas.height = 640;//canvasの縦幅

//コンテキスト(プログラムを動かすのに必要な情報)を取得
let ctx = canvas.getContext('2d');

//x=0,y=0の位置に縦横30pxの正方形を描く
// ctx.fillRect(0,0,30,30);

//りこちゃんのオブジェクトを作成
const rico = new Object();
rico.img = new Image();
rico.img.src = '../rico.png';
rico.x = 0;
rico.y = 0;
rico.move = 0;
// //画像オブジェクトを作成
// let img =new Image();
// img.src='../rico.png';

//キーボードのオブジェクトを作成
let key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//メインループ
function main() {
    //塗りつぶす色を指定
    ctx.fillStyle = "rgb( 0, 0, 0 )";
    //塗りつぶす。塗りつぶさないと残像が残ってしまう
    ctx.fillRect(0, 0, 640, 640);

    //画像を表示
    ctx.drawImage(rico.img, rico.x, rico.y);
    // ctx.drawImage( img, 0, 0 );

    addEventListener("keydown", keydownfunc, false);
    addEventListener("keyup", keyupfunc, false);

    //方向キーが押されている場合は、りこちゃんが移動する
    if (rico.move === 0) {
        if (key.left === true) {
            rico.move = 32;
            key.push = 'left';
        }
        if (key.up === true) {
            rico.move = 32;
            key.push = 'up';
        }
        if (key.right === true) {
            rico.move = 32;
            key.push = 'right';
        }
        if (key.down === true) {
            rico.move = 32;
            key.push = 'down';
        }
    }
    //rico.moveが0より大きい場合は、4pxずつ移動を続ける
    if (rico.move > 0) {
        rico.move -= 4;
        if (key.push === 'left') rico.x -= 4;
        if (key.push === 'up') rico.y -= 4;
        if (key.push === 'right') rico.x += 4;
        if (key.push === 'down') rico.y += 4;
    }

    requestAnimationFrame(main);
}
//ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);

// //ページと依存しているすべてのデータが読み込まれたら、画像を表示
// addEventListener('load',function(){
//     ctx.drawImage(img,0, 0);//画像を表示
// },false)

//キーボードが押されたときに呼び出される関数
function keydownfunc(event) {
    let key_code = event.keyCode;
    if (key_code === 37) key.left = true;
    if (key_code === 38) key.up = true;
    if (key_code === 39) key.right = true;
    if (key_code === 40) key.down = true;
    event.preventDefault();
}

//キーボードが放されたときに呼び出される関数
function keyupfunc(event) {
    let key_code = event.keyCode;
    if (key_code === 37) key.left = false;
    if (key_code === 38) key.up = false;
    if (key_code === 39) key.right = false;
    if (key_code === 40) key.down = false;
}