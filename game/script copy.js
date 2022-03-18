//画面に画像を表示する
document.getElementById("gzo").innerHTML = '<img src="rico.png" id="rico">';

//省略
const rico_gzo = document.getElementById('rico');

//画像の移動

//ricoオブジェクトを作る
let rico = new Object;
//移動位置を入れる変数
rico.y = 0;//上下。ricoオブジェクトように変更。letを取る
rico.x = 0;//左右

//キーボードオブジェクトを作る
let key = new Object;
key.up = false;//false=ボタンを押していない状態
key.down = false;
key.right = false;
key.left = false;


function main() {
    //キーボードが押された時、keydownfunc関数（かんすう）を呼び出す
    addEventListener("keydown", keydownfunc);
    //キーボードがはなされた時、keyupfunc関数（かんすう）を呼び出す
    addEventListener("keyup", keyupfunc);

    //方向キーが押されている場合（ばあい）は、りこちゃんが移動する
    if (key.left === true) rico.x -= 8;//key.leftがtrueのとき、rico.xの値から32を引き算する→移動速度が速すぎるため、数値を下げる「32→8」しかし、画像のサイズ分32px移動したほうが綺麗
    if (key.up === true) rico.y -= 8;//key.upがtrueのとき、rico.yの値から32を引き算する
    if (key.right === true) rico.x += 8;//key.rightがtrueのとき、rico.xの値に32を足し算する
    if (key.down === true) rico.y += 8;//key.downがtrueのとき、rico.yの値に32を足し算する

    //りこちゃんの画像の位置（いち）を反映（はんえい）させる
    document.getElementById('rico').style.top = rico.y + "px";
    document.getElementById('rico').style.left = rico.x + "px";

    //main関数（かんすう）、つまり自分自身の関数を呼び出すことでループさせる。
    requestAnimationFrame(main);
}
requestAnimationFrame(main);

//キーボードが押されたときに呼び出される関数（かんすう）
function keydownfunc(event) {
    var key_code = event.keyCode;
    if (key_code === 37) key.left = true;//「左ボタン」が押されたとき、key.leftをtrueにする
    if (key_code === 38) key.up = true;//「上ボタン」が押されたとき、key.upをtrueにする
    if (key_code === 39) key.right = true;//「右ボタン」が押されたとき、key.rightをtrueにする
    if (key_code === 40) key.down = true;//「下ボタン」が押されたとき、key.downをtrueにする
}

//キーボードがはなされたときに呼び出される関数
function keyupfunc(event) {
    var key_code = event.keyCode;
    if (key_code === 37) key.left = false;//「左ボタン」がはなされたとき、key.leftをfalseにする
    if (key_code === 38) key.up = false;//「上ボタン」がはなされたとき、key.upをfalseにする
    if (key_code === 39) key.right = false;//「右ボタン」がはなされたとき、key.rightをfalseにする;
    if (key_code === 40) key.down = false;//「下ボタン」がはなされたとき、key.downをfalseにする
}

