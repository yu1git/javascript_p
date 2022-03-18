//canvasの設定
let canvas = document.getElementById('canvas');
canvas.width = 640;		//canvasの横幅。20マス×32px
canvas.height = 640;	//canvasの縦幅

//コンテキストを取得
let ctx = canvas.getContext('2d');

//りこちゃんのオブジェクトを作成
let rico = new Object();
rico.img = new Image();
rico.img.src = '../rico.png';
rico.x = 0;
rico.y = 0;
rico.move = 0;

//マップチップのImageオブジェクトを作る
let mapchip = new Image();
mapchip.src = '../map.png';

//キーボードのオブジェクトを作成
let key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//マップの作成
let map = [
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]
]

//メインループ
function main() {
    //塗りつぶす色を指定
    ctx.fillStyle = "rgb( 0, 0, 0 )";
    //塗りつぶす
    ctx.fillRect(0, 0, 640, 640);

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === 0) ctx.drawImage(mapchip, 0, 0, 32, 32, 32 * x, 32 * y, 32, 32);//0=通路
            if (map[y][x] === 1) ctx.drawImage(mapchip, 32, 0, 32, 32, 32 * x, 32 * y, 32, 32);//1=壁（通れない）
        }
    }

    //画像を表示。後から表示した画像ほど上にくる。map→rico
    ctx.drawImage(rico.img, rico.x, rico.y);

    addEventListener("keydown", keydownfunc, false);
    addEventListener("keyup", keyupfunc, false);

    //方向キーが押されている場合は、りこちゃんが移動する
    if (rico.move === 0) {
        if (key.left === true) {
            let x = rico.x / 32;//現在位置のpxから32を割ると何番目の位置かわかる
            let y = rico.y / 32;
            x--;//現在位置の1左
            if (map[y][x] === 0) {//0（通路）のときは通れる
                rico.move = 32;
                key.push = 'left';
            }
        }
        if (key.up === true) {
            let x = rico.x / 32;
            let y = rico.y / 32;
            if (y > 0) {//マップの上にはみ出さないよう
                y--;
                if (map[y][x] === 0) {
                    rico.move = 32;
                    key.push = 'up';
                }
            }
        }
        if (key.right === true) {
            let x = rico.x / 32;
            let y = rico.y / 32;
            x++;
            if (map[y][x] === 0) {
                rico.move = 32;
                key.push = 'right';
            }
        }
        if (key.down === true) {
            let x = rico.x / 32;
            let y = rico.y / 32;
            if (y < 19) {//マップの下にはみ出さないよう
                y++;
                if (map[y][x] === 0) {
                    rico.move = 32;
                    key.push = 'down';
                }
            }
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
//ページと依存（いぞん）している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);

//キーボードが押されたときに呼び出される関数
function keydownfunc(event) {
    let key_code = event.keyCode;
    if (key_code === 37) key.left = true;
    if (key_code === 38) key.up = true;
    if (key_code === 39) key.right = true;
    if (key_code === 40) key.down = true;
    event.preventDefault();		//方向キーでブラウザがスクロールしないようにする
}

//キーボードが放されたときに呼び出される関数
function keyupfunc(event) {
    let key_code = event.keyCode;
    if (key_code === 37) key.left = false;
    if (key_code === 38) key.up = false;
    if (key_code === 39) key.right = false;
    if (key_code === 40) key.down = false;
}